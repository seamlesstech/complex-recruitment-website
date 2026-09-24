/** Public (browser-safe) Turnstile config, read once and shared by every form. */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
export const isTurnstileConfigured = Boolean(TURNSTILE_SITE_KEY);
