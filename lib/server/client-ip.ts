import 'server-only';

/** Best-effort client IP from Vercel's forwarding headers, for Turnstile and rate limiting only. */
export function clientIpFrom(request: Request): string | null {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip');
}

/** The hostname the request itself arrived on, for Turnstile's hostname cross-check. */
export function requestHostname(request: Request): string | undefined {
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!host) return undefined;
  try {
    return new URL(`http://${host}`).hostname;
  } catch {
    return undefined;
  }
}
