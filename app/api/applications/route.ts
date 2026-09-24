import { CV_MAX_BYTES } from '../../../lib/forms/cv-rules';
import { getAdminSupabase } from '../../../lib/supabase/admin';
import { validateCvFile, type ValidatedCv } from '../../../lib/server/cv-file';
import { applicationSchema } from '../../../lib/server/intake-schemas';
import { submitPublicApplication } from '../../../lib/server/public-application';
import {
  GENERIC_FAILURE,
  VALIDATION_FAILURE,
  fail,
  fieldErrorsFrom,
  guardMultipartSubmission,
  respond,
  validationFailure,
} from '../../../lib/server/public-intake';

/**
 * POST /api/applications — public Job Application intake (multipart/form-data).
 *
 * The browser supplies only the public Job reference, the applicant's own details
 * and an optional CV file. Candidate find-or-create, the Application, CAN-/APP-
 * references, status/owner, CV versioning and the Application↔CV link all happen
 * in service-role-only database functions (see lib/server/public-application.ts).
 * Success is returned only when every applicable step succeeded.
 * Only POST is exported, so other methods get 405.
 */
export const dynamic = 'force-dynamic';

const TEXT_FIELDS = ['jobReference', 'fullName', 'email', 'phone', 'postcode', 'message', 'consent'] as const;
const FILE_FIELDS = ['cv'] as const;
// CV ceiling plus generous room for the text fields and multipart framing.
const MAX_REQUEST_BYTES = CV_MAX_BYTES + 64 * 1024;

const OUTCOME_ERRORS = {
  duplicate_application: {
    status: 409,
    message: 'You’ve already applied for this job with this email address. The Complex team has your application and will be in touch.',
  },
  job_not_available: {
    status: 410,
    message: 'Sorry, this job is no longer accepting applications. Please browse our other current vacancies.',
  },
  invalid_application_input: {
    status: 400,
    message: VALIDATION_FAILURE,
    fieldErrors: { fullName: 'Full name is required.', email: 'Email is required.' },
  },
  cv_failed: {
    status: 502,
    message: 'We couldn’t upload your CV, so your application has not been submitted. Please try again, or apply without a CV and the team will ask for it.',
  },
  unexpected: { status: 500, message: GENERIC_FAILURE },
} as const;

export async function POST(request: Request) {
  const guarded = await guardMultipartSubmission(request, {
    maxBytes: MAX_REQUEST_BYTES,
    textFields: TEXT_FIELDS,
    fileFields: FILE_FIELDS,
  });
  if (!guarded.ok) return guarded.response;
  const { fields, files } = guarded;

  const parsed = applicationSchema.safeParse({
    jobReference: fields.jobReference,
    fullName: fields.fullName,
    email: fields.email,
    phone: fields.phone,
    postcode: fields.postcode,
    message: fields.message,
    consent: fields.consent === 'true',
  });
  if (!parsed.success) {
    if (fieldErrorsFrom(parsed.error).jobReference) {
      return fail(400, 'This job could not be found. Please return to the jobs page and try again.');
    }
    return validationFailure(parsed.error);
  }

  // Validate the CV fully (including its actual content) before anything is written.
  let cv: ValidatedCv | null = null;
  if (files.cv) {
    const checked = await validateCvFile(files.cv);
    if (!checked.ok) return fail(400, checked.message, { cv: checked.message });
    cv = checked.cv;
  }

  try {
    const outcome = await submitPublicApplication(getAdminSupabase(), parsed.data, cv);
    if (!outcome.ok) {
      const { status, message, ...rest } = OUTCOME_ERRORS[outcome.reason];
      return fail(status, message, 'fieldErrors' in rest ? rest.fieldErrors : undefined);
    }
    console.info('Public application stored:', outcome.applicationReference, outcome.candidateReference, outcome.documentId ? 'with CV' : 'without CV');
    return respond(201, { ok: true });
  } catch (error) {
    console.error('Public application endpoint error:', error instanceof Error ? error.message : 'unknown error');
    return fail(503, GENERIC_FAILURE);
  }
}
