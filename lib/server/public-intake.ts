import 'server-only';

import { NextResponse } from 'next/server';
import type { z } from 'zod';
import { HONEYPOT_FIELD, TURNSTILE_FIELD, type PublicFormResult } from '../forms/public-form';
import { clientIpFrom, requestHostname } from './client-ip';
import { verifyTurnstileToken } from './turnstile';

/**
 * Shared anti-abuse + response helpers for every public write endpoint.
 *
 * What this provides: JSON bodies (enquiries) or multipart bodies (applications
 * with an optional CV) with hard size caps, a same-origin check, a honeypot,
 * server-side Cloudflare Turnstile verification, strict validation (per
 * endpoint), and safe error bodies. Rate limiting is a separate concern, applied
 * per-endpoint in the route handlers themselves (see `lib/server/rate-limit.ts`)
 * before these guards run.
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

  // The enquiry `kind` doubles as the Turnstile `action` the widget was rendered
  // with, so a token minted for one form can't be replayed against another.
  const turnstileToken = record[TURNSTILE_FIELD];
  const expectedAction = typeof record.kind === 'string' ? record.kind : '';
  delete record[TURNSTILE_FIELD];

  const turnstile = await verifyTurnstileToken(turnstileToken, {
    expectedAction,
    expectedHostname: requestHostname(request),
    remoteIp: clientIpFrom(request) ?? undefined,
  });
  if (!turnstile.ok) {
    return { ok: false, response: fail(403, GENERIC_FAILURE) };
  }

  return { ok: true, body: record };
}

export const VALIDATION_FAILURE = 'Please check the highlighted fields and try again.';

// Issues that only a hand-crafted request can produce (extra keys such as
// status/owner_id, an unknown `kind`). Their Zod wording describes our schema,
// so they are answered generically instead of being echoed back.
const STRUCTURAL_ISSUES = new Set(['unrecognized_keys', 'invalid_union']);

/**
 * Multipart counterpart of `guardPublicSubmission`, for the Job Application form
 * (which may carry a CV). Same origin/honeypot rules. The declared length is
 * required and capped before the body is read, and only the expected field names
 * are accepted, each at most once — so a file or oversized text can't be smuggled
 * in under an unexpected key.
 */
export async function guardMultipartSubmission(
  request: Request,
  {
    maxBytes,
    textFields,
    fileFields,
    turnstileAction,
  }: { maxBytes: number; textFields: readonly string[]; fileFields: readonly string[]; turnstileAction: string },
): Promise<
  | { ok: true; fields: Record<string, string>; files: Record<string, File | undefined> }
  | { ok: false; response: NextResponse }
> {
  if (!isSameOrigin(request)) {
    return { ok: false, response: fail(403, GENERIC_FAILURE) };
  }
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('multipart/form-data')) {
    return { ok: false, response: fail(415, GENERIC_FAILURE) };
  }
  const declaredLength = Number(request.headers.get('content-length'));
  if (!Number.isFinite(declaredLength) || declaredLength <= 0) {
    return { ok: false, response: fail(411, GENERIC_FAILURE) };
  }
  if (declaredLength > maxBytes) {
    return { ok: false, response: fail(413, 'Your CV must be 4 MB or smaller.', { cv: 'Your CV must be 4 MB or smaller.' }) };
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }

  const allowed = new Set([...textFields, ...fileFields, HONEYPOT_FIELD, TURNSTILE_FIELD]);
  const seen = new Set<string>();
  const fields: Record<string, string> = {};
  const files: Record<string, File | undefined> = {};
  let honeypot = '';
  let turnstileToken = '';

  for (const [key, value] of form.entries()) {
    if (!allowed.has(key) || seen.has(key)) return { ok: false, response: fail(400, GENERIC_FAILURE) };
    seen.add(key);
    if (key === HONEYPOT_FIELD) {
      honeypot = typeof value === 'string' ? value : 'file';
    } else if (key === TURNSTILE_FIELD) {
      if (typeof value !== 'string') return { ok: false, response: fail(400, GENERIC_FAILURE) };
      turnstileToken = value;
    } else if (fileFields.includes(key)) {
      if (typeof value === 'string') {
        if (value !== '') return { ok: false, response: fail(400, GENERIC_FAILURE) };
      } else if (value.size > 0 || value.name) {
        files[key] = value;
      }
    } else {
      if (typeof value !== 'string') return { ok: false, response: fail(400, GENERIC_FAILURE) };
      fields[key] = value;
    }
  }

  if (honeypot.trim() !== '') {
    // Never report success for a submission that was not stored.
    return { ok: false, response: fail(400, GENERIC_FAILURE) };
  }

  const turnstile = await verifyTurnstileToken(turnstileToken, {
    expectedAction: turnstileAction,
    expectedHostname: requestHostname(request),
    remoteIp: clientIpFrom(request) ?? undefined,
  });
  if (!turnstile.ok) {
    return { ok: false, response: fail(403, GENERIC_FAILURE) };
  }

  return { ok: true, fields, files };
}

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
