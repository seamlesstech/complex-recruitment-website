import { getAdminSupabase } from '../../../lib/supabase/admin';
import { enquirySchema, toEnquiryDraft } from '../../../lib/server/intake-schemas';
import {
  GENERIC_FAILURE,
  fail,
  guardPublicSubmission,
  respond,
  validationFailure,
} from '../../../lib/server/public-intake';

/**
 * POST /api/enquiries — one trusted intake path for every public enquiry form.
 *
 *   kind                 form                         enquiries.type
 *   contact              /contact                     general
 *   candidate_interest   Register Interest            candidate
 *   staffing_request     /request-staff               employer
 *   sector_staffing      sector page enquiry panels   employer
 *
 * `kind` is server mapping logic only. Status ('new'), owner (Unassigned),
 * source ('Website') are always set here; the ENQ- reference comes from Postgres.
 * The browser can never set status, owner, reference, employer or conversion ids
 * (the schemas are strict), and company names stay free text: they are never
 * matched to Employer records by string.
 */
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const guarded = await guardPublicSubmission(request);
  if (!guarded.ok) return guarded.response;

  const parsed = enquirySchema.safeParse(guarded.body);
  if (!parsed.success) {
    return validationFailure(parsed.error);
  }

  const draft = toEnquiryDraft(parsed.data);

  try {
    const { data, error } = await getAdminSupabase()
      .from('enquiries')
      .insert({
        ...draft,
        employer_id: null,
        status: 'new',
        owner_id: null,
        source: 'Website',
      })
      .select('reference')
      .single<{ reference: string }>();

    if (error || !data) {
      console.error('Public enquiry insert failed:', error?.code, error?.message);
      return fail(500, GENERIC_FAILURE);
    }

    console.info('Public enquiry stored:', data.reference, parsed.data.kind);
    return respond(201, { ok: true });
  } catch (error) {
    console.error('Public enquiry endpoint error:', error instanceof Error ? error.message : 'unknown error');
    return fail(503, GENERIC_FAILURE);
  }
}
