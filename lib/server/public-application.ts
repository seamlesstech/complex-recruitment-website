import 'server-only';

import { randomUUID } from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { ApplicationInput } from './intake-schemas';
import type { ValidatedCv } from './cv-file';

/**
 * The public Job Application workflow (Candidate + Application, then optionally
 * a private CV version linked to that exact Application).
 *
 *   1. submit_public_application        Candidate find/create + Application (1 txn)
 *   2. Storage upload                    candidates/{candidate_id}/{document_id}
 *   3. attach_public_application_cv      supersede old CV + insert version + link (1 txn)
 *
 * Failure strategy for steps 2–3 (Storage cannot join the Postgres transaction):
 *   - the uploaded object (if any) is removed;
 *   - discard_public_application deletes the Application created in step 1, and
 *     the Candidate too only if step 1 created it (guarded in SQL);
 *   - the applicant is told nothing was submitted, so a retry is clean rather than
 *     hitting "already applied" on an Application that has no CV.
 * No candidate_documents row is ever written before its object exists, so metadata
 * can never point at a missing file.
 */

export const CV_BUCKET = 'candidate-documents';

export type ApplicationOutcome =
  | { ok: true; applicationReference: string; candidateReference: string; documentId: string | null }
  | { ok: false; reason: 'duplicate_application' | 'job_not_available' | 'invalid_application_input' | 'cv_failed' | 'unexpected' };

type SubmitRow = {
  candidate_id: string;
  candidate_reference: string;
  application_id: string;
  application_reference: string;
  candidate_created: boolean;
};

/** Storage operations, injectable so the failure paths can be exercised in tests. */
export type CvStorage = {
  upload(path: string, bytes: Uint8Array, contentType: string): Promise<{ error: { message: string } | null }>;
  remove(path: string): Promise<{ error: { message: string } | null }>;
};

export function supabaseCvStorage(db: SupabaseClient): CvStorage {
  const bucket = db.storage.from(CV_BUCKET);
  return {
    upload: (path, bytes, contentType) => bucket.upload(path, bytes, { contentType, upsert: false, cacheControl: 'no-store' }),
    remove: async path => {
      const { error } = await bucket.remove([path]);
      return { error };
    },
  };
}

const KNOWN_RPC_ERRORS = new Set(['duplicate_application', 'job_not_available', 'invalid_application_input']);

export async function submitPublicApplication(
  db: SupabaseClient,
  input: ApplicationInput,
  cv: ValidatedCv | null,
  storage: CvStorage = supabaseCvStorage(db),
): Promise<ApplicationOutcome> {
  const { data, error } = await db.rpc('submit_public_application', {
    p_job_reference: input.jobReference,
    p_full_name: input.fullName,
    p_email: input.email,
    p_phone: input.phone,
    p_location: input.postcode || null,
    p_message: input.message || null,
    p_source: 'Website',
  });

  if (error) {
    if (KNOWN_RPC_ERRORS.has(error.message)) return { ok: false, reason: error.message as 'duplicate_application' };
    console.error('submit_public_application failed:', error.code, error.message);
    return { ok: false, reason: 'unexpected' };
  }

  const row = (Array.isArray(data) ? data[0] : null) as SubmitRow | null;
  if (!row?.application_id || !row.candidate_id) {
    console.error('submit_public_application returned no application row');
    return { ok: false, reason: 'unexpected' };
  }

  if (!cv) {
    return { ok: true, applicationReference: row.application_reference, candidateReference: row.candidate_reference, documentId: null };
  }

  // Server-generated id and path; the client filename never reaches Storage.
  const documentId = randomUUID();
  const objectPath = `candidates/${row.candidate_id}/${documentId}`;
  let uploaded = false;

  try {
    const upload = await storage.upload(objectPath, cv.bytes, cv.mimeType);
    if (upload.error) throw new Error(`upload failed: ${upload.error.message}`);
    uploaded = true;

    const { error: attachError } = await db.rpc('attach_public_application_cv', {
      p_application_id: row.application_id,
      p_document_id: documentId,
      p_original_filename: cv.originalFilename,
      p_mime_type: cv.mimeType,
      p_size_bytes: cv.sizeBytes,
    });
    if (attachError) throw new Error(`attach failed: ${attachError.message}`);

    return { ok: true, applicationReference: row.application_reference, candidateReference: row.candidate_reference, documentId };
  } catch (failure) {
    console.error('Public application CV step failed for', row.application_reference, '-', failure instanceof Error ? failure.message : 'unknown');
    await compensate(db, storage, { objectPath: uploaded ? objectPath : null, row });
    return { ok: false, reason: 'cv_failed' };
  }
}

async function compensate(db: SupabaseClient, storage: CvStorage, { objectPath, row }: { objectPath: string | null; row: SubmitRow }) {
  if (objectPath) {
    const { error } = await storage.remove(objectPath).catch((e: unknown) => ({ error: { message: String(e) } }));
    // Logged with the path so an operator can remove it if cleanup itself failed.
    if (error) console.error('CV cleanup: could not remove orphaned object', objectPath, error.message);
  }

  const { data, error } = await db.rpc('discard_public_application', {
    p_application_id: row.application_id,
    p_candidate_created: row.candidate_created,
  });
  if (error) {
    console.error('CV cleanup: discard_public_application failed for', row.application_reference, error.message);
    return;
  }
  const result = Array.isArray(data) ? data[0] : null;
  console.info('CV cleanup:', row.application_reference, 'application removed =', result?.application_deleted, '; candidate removed =', result?.candidate_deleted);
}
