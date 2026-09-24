import { getAdminSupabase } from '../../../lib/supabase/admin';
import { applicationSchema } from '../../../lib/server/intake-schemas';
import {
  GENERIC_FAILURE,
  VALIDATION_FAILURE,
  fail,
  fieldErrorsFrom,
  guardPublicSubmission,
  respond,
  validationFailure,
} from '../../../lib/server/public-intake';

/**
 * POST /api/applications — public Job Application intake.
 *
 * The browser supplies only the public Job reference and the applicant's own
 * details. Everything relational and privileged (Candidate find-or-create, the
 * Application row, CAN-/APP- references, status 'new', no owner, availability of
 * the Job) happens atomically inside `submit_public_application`, which only the
 * service role may execute. Only POST is exported, so other methods get 405.
 */
export const dynamic = 'force-dynamic';

// Stable error keys raised by the RPC (see admin migration 20260924100000).
const RPC_ERRORS: Record<string, { status: number; message: string; fieldErrors?: Record<string, string> }> = {
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
};

export async function POST(request: Request) {
  const guarded = await guardPublicSubmission(request);
  if (!guarded.ok) return guarded.response;

  const parsed = applicationSchema.safeParse(guarded.body);
  if (!parsed.success) {
    if (fieldErrorsFrom(parsed.error).jobReference) {
      return fail(400, 'This job could not be found. Please return to the jobs page and try again.');
    }
    return validationFailure(parsed.error);
  }
  const input = parsed.data;

  try {
    const { data, error } = await getAdminSupabase().rpc('submit_public_application', {
      p_job_reference: input.jobReference,
      p_full_name: input.fullName,
      p_email: input.email,
      p_phone: input.phone,
      p_location: input.postcode || null,
      p_message: input.message || null,
      p_source: 'Website',
    });

    if (error) {
      const known = RPC_ERRORS[error.message];
      if (known) return fail(known.status, known.message, known.fieldErrors);
      console.error('submit_public_application failed:', error.code, error.message);
      return fail(500, GENERIC_FAILURE);
    }

    const row = Array.isArray(data) ? data[0] : null;
    if (!row?.application_reference) {
      console.error('submit_public_application returned no application row');
      return fail(500, GENERIC_FAILURE);
    }

    console.info('Public application stored:', row.application_reference, row.candidate_reference);
    return respond(201, { ok: true });
  } catch (error) {
    console.error('Public application endpoint error:', error instanceof Error ? error.message : 'unknown error');
    return fail(503, GENERIC_FAILURE);
  }
}
