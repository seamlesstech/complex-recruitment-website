/**
 * Client/server-shared contract for public form submissions.
 *
 * Every public form posts to a trusted route handler through `submitPublicForm`:
 * JSON for `/api/enquiries`, multipart FormData for `/api/applications` (which
 * may carry a CV file — never base64 in JSON). Keeping that one path is what lets
 * Cloudflare Turnstile be added next without redesigning the forms: the widget's
 * token becomes one more field here, verified in `lib/server/public-intake.ts`.
 */

/** Honeypot input name. Hidden from people; bots that fill every field trip it. */
export const HONEYPOT_FIELD = 'website';

export type PublicFormEndpoint = '/api/applications' | '/api/enquiries';

export type PublicFormResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

const NETWORK_ERROR = 'We couldn’t reach our server. Please check your connection and try again.';
const GENERIC_ERROR = 'Something went wrong and your details were not sent. Please try again, or call 0203 923 7888.';

/**
 * Resolves `{ ok: true }` only when the server confirmed the row was written.
 * Never throws; every failure becomes a safe, user-facing message.
 */
export async function submitPublicForm(endpoint: PublicFormEndpoint, payload: object | FormData): Promise<PublicFormResult> {
  let response: Response;
  try {
    response = await fetch(endpoint, payload instanceof FormData
      // The browser sets the multipart boundary itself.
      ? { method: 'POST', body: payload }
      : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  } catch {
    return { ok: false, message: NETWORK_ERROR };
  }

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    // Non-JSON (e.g. a platform error page): fall through to the generic message.
  }

  if (response.ok && isRecord(body) && body.ok === true) return { ok: true };

  if (isRecord(body) && body.ok === false && typeof body.message === 'string') {
    const fieldErrors = isRecord(body.fieldErrors)
      ? Object.fromEntries(Object.entries(body.fieldErrors).filter((entry): entry is [string, string] => typeof entry[1] === 'string'))
      : undefined;
    return { ok: false, message: body.message, fieldErrors };
  }
  return { ok: false, message: GENERIC_ERROR };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
