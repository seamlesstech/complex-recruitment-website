import 'server-only';

import { NextResponse } from 'next/server';
import type { z } from 'zod';
import { HONEYPOT_FIELD, type PublicFormResult } from '../forms/public-form';

/**
 * Shared MVP anti-abuse + response helpers for every public write endpoint.
 *
 * What this DOES provide: JSON-only bodies with a hard size cap, a same-origin
 * check, a honeypot, strict Zod validation (per endpoint), and safe error bodies.
 *
 * What it does NOT provide: rate limiting or bot verification. An in-memory
 * limiter would be per-instance on serverless hosting and is deliberately not
 * faked here. Cloudflare Turnstile is a required pre-production task: verify the
 * token inside `guardPublicSubmission` (one place, used by both endpoints).
 */

const MAX_BODY_BYTES = 16 * 1024;

export const GENERIC_FAILURE = 'Something went wrong and your details were not sent. Please try again, or call 0203 923 7888.';

export function respond(status: number, body: PublicFormResult) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export function fail(status: number, message: string, fieldErrors?: Record<string, string>) {
  return respond(status, { ok: false, message, ...(fieldErrors ? { fieldErrors } : {}) });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // Same-origin fetches may omit it; the check is for cross-site posts.
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  try {
    return !!host && new URL(origin).host === host;
  } catch {
    return false;
  }
}

/**
 * Parses and guards a public submission. Returns either the raw JSON object
 * (still unvalidated — the caller applies its Zod schema) or a ready error response.
 */
export async function guardPublicSubmission(
  request: Request,
): Promise<{ ok: true; body: Record<string, unknown> } | { ok: false; response: NextResponse }> {
  if (!isSameOrigin(request)) {
    return { ok: false, response: fail(403, GENERIC_FAILURE) };
  }
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return { ok: false, response: fail(415, GENERIC_FAILURE) };
  }
  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return { ok: false, response: fail(413, 'Your submission is too long. Please shorten it and try again.') };
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }
  if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
    return { ok: false, response: fail(413, 'Your submission is too long. Please shorten it and try again.') };
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }

  const record = body as Record<string, unknown>;
  const honeypot = record[HONEYPOT_FIELD];
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    // Never report success for a submission that was not stored.
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }
  delete record[HONEYPOT_FIELD];

  // TURNSTILE (pre-production): verify record.turnstileToken with Cloudflare here
  // and delete it from `record` before schema validation.

  return { ok: true, body: record };
}

export const VALIDATION_FAILURE = 'Please check the highlighted fields and try again.';

// Issues that only a hand-crafted request can produce (extra keys such as
// status/owner_id, an unknown `kind`). Their Zod wording describes our schema,
// so they are answered generically instead of being echoed back.
const STRUCTURAL_ISSUES = new Set(['unrecognized_keys', 'invalid_union']);

/** First validation message per field path ("requester.email" style keys). */
export function fieldErrorsFrom(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    if (STRUCTURAL_ISSUES.has(issue.code) || issue.path.length === 0) continue;
    errors[issue.path.map(String).join('.')] ??= issue.message;
  }
  return errors;
}

/** 400 response for a failed schema parse: field messages, or a generic one. */
export function validationFailure(error: z.ZodError) {
  const structural = error.issues.some(issue => STRUCTURAL_ISSUES.has(issue.code) || issue.path.length === 0);
  const fieldErrors = fieldErrorsFrom(error);
  return structural || !Object.keys(fieldErrors).length
    ? fail(400, GENERIC_FAILURE)
    : fail(400, VALIDATION_FAILURE, fieldErrors);
}
