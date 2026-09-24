/**
 * Public intake rate limit thresholds, kept in one place rather than scattered
 * through route files. Conservative enough that a genuine applicant or employer
 * submitting once (or retrying after a typo) is never affected.
 */
export const RATE_LIMITS = {
  /** Job Application (multipart, may include a CV upload). */
  application: { windowSeconds: 10 * 60, maxRequests: 5 },
  /** All four enquiry kinds share one endpoint (`/api/enquiries`), so one bucket. */
  enquiry: { windowSeconds: 10 * 60, maxRequests: 8 },
} as const;

export type RateLimitBucket = keyof typeof RATE_LIMITS;
