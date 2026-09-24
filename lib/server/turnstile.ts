import 'server-only';

import { isProductionEnvironment } from './environment';

/**
 * Server-side Cloudflare Turnstile verification for public intake endpoints.
 *
 * Production vs local/preview behavior:
 *   - TURNSTILE_SECRET_KEY unset in real production → fails closed. A public
 *     write endpoint must never silently disable this check in production.
 *   - TURNSTILE_SECRET_KEY unset elsewhere → verification is skipped so
 *     local/preview development doesn't require real (or test) Cloudflare keys.
 *   - In real production, a successful-but-incomplete Cloudflare response is
 *     also rejected: `action` must be present and match exactly, and
 *     `hostname` must be present and in TURNSTILE_ALLOWED_HOSTNAMES. Real
 *     Turnstile tokens always carry both, so this never has a legitimate
 *     false positive in production — it exists specifically to catch
 *     misconfiguration or a stray dummy/test key deployed by mistake.
 *   - Outside real production (local dev, Vercel Preview), both checks are
 *     best-effort: Cloudflare's documented dummy testing keys omit `action`
 *     entirely and always report a fixed "example.com" hostname, and Preview
 *     deployments get a different hostname per branch/PR, so a static
 *     allow-list can't cover them. See `isProductionEnvironment` for why
 *     NODE_ENV alone can't be used to detect "real production".
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

/** TURNSTILE_ALLOWED_HOSTNAMES: comma-separated. Add the custom production domain here later — no code change needed. */
function allowedProductionHostnames(): string[] {
  return (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? '')
    .split(',')
    .map(host => host.trim())
    .filter(Boolean);
}

/**
 * @param expectedAction the Turnstile `action` the client widget was rendered with;
 *   verified against Cloudflare's own record of the token, not the client's claim.
 * @param expectedHostname the request's own host; used only outside real production,
 *   as non-blocking defense-in-depth alongside the domain allow-list already
 *   configured on the Turnstile site key itself.
 */
export async function verifyTurnstileToken(
  token: unknown,
  { expectedAction, expectedHostname, remoteIp }: { expectedAction: string; expectedHostname?: string; remoteIp?: string },
): Promise<TurnstileVerification> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const production = isProductionEnvironment();

  if (!secret) {
    if (production) {
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

  if (production) {
    if (!result.action || result.action !== expectedAction) {
      console.error('Turnstile: action missing or mismatched in production — expected', expectedAction, 'got', result.action);
      return { ok: false, reason: 'invalid-token' };
    }

    const allowed = allowedProductionHostnames();
    if (allowed.length === 0) {
      console.error('Turnstile: TURNSTILE_ALLOWED_HOSTNAMES is not configured in production — refusing submission.');
      return { ok: false, reason: 'misconfigured' };
    }
    if (!result.hostname || !allowed.includes(result.hostname)) {
      console.error('Turnstile: hostname not in TURNSTILE_ALLOWED_HOSTNAMES — expected one of', allowed, 'got', result.hostname);
      return { ok: false, reason: 'invalid-token' };
    }

    return { ok: true };
  }

  // Cloudflare's documented dummy testing keys don't echo `action` back at
  // all, so this only runs when Cloudflare actually reports one.
  if (result.action !== undefined && result.action !== expectedAction) {
    console.error('Turnstile: action mismatch — expected', expectedAction, 'got', result.action);
    return { ok: false, reason: 'invalid-token' };
  }
  // Logged, not enforced, outside production: dummy testing keys report a
  // fixed "example.com", and Preview deployments get an unpredictable
  // per-branch hostname — neither fits a static allow-list.
  if (expectedHostname && result.hostname && result.hostname !== expectedHostname) {
    console.warn('Turnstile: hostname mismatch (non-blocking outside production) — expected', expectedHostname, 'got', result.hostname);
  }

  return { ok: true };
}
