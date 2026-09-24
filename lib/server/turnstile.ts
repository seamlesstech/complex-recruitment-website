import 'server-only';

/**
 * Server-side Cloudflare Turnstile verification for public intake endpoints.
 *
 * Production vs local behavior:
 *   - TURNSTILE_SECRET_KEY set            → every token is verified against Cloudflare.
 *   - TURNSTILE_SECRET_KEY unset in prod  → fails closed (submission rejected). A public
 *     write endpoint must never silently disable this check in production.
 *   - TURNSTILE_SECRET_KEY unset elsewhere → verification is skipped so local/preview
 *     development doesn't require real (or test) Cloudflare keys to exercise a form.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export type TurnstileFailureReason = 'missing-token' | 'invalid-token' | 'network-error' | 'misconfigured';
export type TurnstileVerification = { ok: true } | { ok: false; reason: TurnstileFailureReason };

type SiteverifyResponse = {
  success?: boolean;
  action?: string;
  hostname?: string;
  ['error-codes']?: string[];
};

function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * @param expectedAction the Turnstile `action` the client widget was rendered with;
 *   verified against Cloudflare's own record of the token, not the client's claim.
 * @param expectedHostname the request's own host; compared to the hostname Cloudflare
 *   recorded when the widget solved the challenge, as defense-in-depth alongside the
 *   domain allow-list already configured on the Turnstile site key itself.
 */
export async function verifyTurnstileToken(
  token: unknown,
  { expectedAction, expectedHostname, remoteIp }: { expectedAction: string; expectedHostname?: string; remoteIp?: string },
): Promise<TurnstileVerification> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (isProduction()) {
      console.error('Turnstile: TURNSTILE_SECRET_KEY is not configured in production — refusing submission.');
      return { ok: false, reason: 'misconfigured' };
    }
    console.warn('Turnstile: TURNSTILE_SECRET_KEY not set — skipping verification outside production.');
    return { ok: true };
  }

  if (typeof token !== 'string' || token.trim() === '') {
    return { ok: false, reason: 'missing-token' };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  let result: SiteverifyResponse;
  try {
    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(5000),
    });
    result = await response.json();
  } catch (error) {
    console.error('Turnstile: siteverify request failed:', error instanceof Error ? error.message : 'unknown error');
    return { ok: false, reason: 'network-error' };
  }

  if (!result.success) {
    return { ok: false, reason: 'invalid-token' };
  }
  // Cloudflare's documented dummy testing keys don't echo `action` back at all,
  // so the check only runs when Cloudflare actually reports one — which real
  // keys always do. This never weakens production (real tokens always carry it).
  if (result.action !== undefined && result.action !== expectedAction) {
    console.error('Turnstile: action mismatch — expected', expectedAction, 'got', result.action);
    return { ok: false, reason: 'invalid-token' };
  }
  // Logged, not enforced: Cloudflare's own domain allow-list on the site key
  // (configured in the dashboard) is the real hostname control and always
  // applies. Cloudflare's dummy testing keys report a fixed "example.com" for
  // every request regardless of the real origin, so a hard failure here would
  // make local/preview testing impossible without buying any real protection
  // beyond what the site key's domain allow-list already provides.
  if (expectedHostname && result.hostname && result.hostname !== expectedHostname) {
    console.warn('Turnstile: hostname mismatch (non-blocking) — expected', expectedHostname, 'got', result.hostname);
  }

  return { ok: true };
}
