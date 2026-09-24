import 'server-only';

/**
 * Is this really a production deployment — not just a production *build*?
 *
 * `next build` always sets NODE_ENV=production, including for Vercel Preview
 * deployments, so NODE_ENV alone can't distinguish a PR preview from the real
 * production domain. VERCEL_ENV ('production' | 'preview' | 'development')
 * makes that distinction and is what strict, production-only security checks
 * (Turnstile hostname allow-list, rate-limit config fail-closed) key off of.
 * Falls back to NODE_ENV for non-Vercel environments (e.g. a bare `next
 * build && next start` locally), where treating a production build as
 * production is the correct, conservative default.
 */
export function isProductionEnvironment(): boolean {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === 'production';
  return process.env.NODE_ENV === 'production';
}
