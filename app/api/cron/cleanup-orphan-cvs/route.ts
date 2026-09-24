import 'server-only';

import { NextResponse } from 'next/server';
import { getAdminSupabase } from '../../../../lib/supabase/admin';
import { CV_BUCKET } from '../../../../lib/server/public-application';

/**
 * GET /api/cron/cleanup-orphan-cvs — periodic sweep for orphaned private CV
 * uploads (see vercel.json's `crons` entry).
 *
 * The normal upload workflow already cleans up controlled failures
 * (lib/server/public-application.ts). The remaining risk this covers: the
 * server process is killed after the Storage upload succeeds but before the
 * candidate_documents row is attached, leaving an object nothing points at.
 *
 * Safety:
 *   - server-only, protected by CRON_SECRET (never callable from a browser);
 *   - candidates come only from find_orphan_candidate_documents(), which is
 *     scoped to the candidate-documents bucket's `candidates/` prefix and
 *     enforces a minimum 5-minute grace period regardless of input;
 *   - each candidate is re-checked against candidate_documents immediately
 *     before deletion — a document linked between the scan and the delete is
 *     skipped, not removed; a re-check query failure also skips (counted as
 *     a failure), never deletes;
 *   - idempotent: re-running finds the same or fewer orphans.
 *
 * Logs only counts and paths (which are random ids, not personal data) —
 * never file content, secrets or signed URLs.
 */

export const dynamic = 'force-dynamic';

const GRACE_MINUTES = 120;

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error('Orphan CV cleanup: CRON_SECRET is not configured — refusing to run.');
    return NextResponse.json({ ok: false, message: 'Not configured.' }, { status: 500 });
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, message: 'Unauthorized.' }, { status: 401 });
  }

  const supabase = getAdminSupabase();
  const { data, error } = await supabase.rpc('find_orphan_candidate_documents', { p_grace_minutes: GRACE_MINUTES });

  if (error) {
    console.error('Orphan CV cleanup: find_orphan_candidate_documents failed:', error.code, error.message);
    return NextResponse.json({ ok: false, scanned: 0, orphanCandidates: 0, deleted: 0, skipped: 0, failures: 1 }, { status: 500 });
  }

  const candidates = (data ?? []) as { object_path: string; created_at: string }[];
  let deleted = 0;
  let failures = 0;

  for (const candidate of candidates) {
    // Re-verify immediately before deleting: never act on a scan result that
    // may now be stale, even by a few seconds.
    const { data: stillLinked, error: recheckError } = await supabase
      .from('candidate_documents')
      .select('id')
      .eq('object_path', candidate.object_path)
      .maybeSingle();

    if (recheckError) {
      console.error('Orphan CV cleanup: re-check failed for', candidate.object_path, recheckError.code);
      failures++;
      continue;
    }
    if (stillLinked) continue; // attached between scan and delete — no longer an orphan.

    const { error: removeError } = await supabase.storage.from(CV_BUCKET).remove([candidate.object_path]);
    if (removeError) {
      console.error('Orphan CV cleanup: failed to remove', candidate.object_path, removeError.message);
      failures++;
      continue;
    }
    deleted++;
  }

  const skipped = candidates.length - deleted - failures;
  const summary = { ok: true, scanned: candidates.length, orphanCandidates: candidates.length, deleted, skipped, failures };
  console.info('Orphan CV cleanup:', summary);
  return NextResponse.json(summary);
}
