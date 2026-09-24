import 'server-only';

import { createHmac } from 'node:crypto';
import { NextResponse } from 'next/server';
import { getAdminSupabase } from '../supabase/admin';
import { clientIpFrom } from './client-ip';
import { GENERIC_FAILURE } from './public-intake';
import { isProductionEnvironment } from './environment';
import { RATE_LIMITS, type RateLimitBucket } from './rate-limit-config';

/**
 * Production-capable rate limiting for public intake endpoints, backed by
 * Postgres (`check_public_intake_rate_limit` / `intake_rate_limit_buckets` in
 * the Admin repo's migrations) rather than an in-memory counter, which would be
 * per-instance and meaningless on Vercel's ephemeral serverless functions.
 *
 * Identity: the client IP is never stored. It's HMAC-hashed (keyed by
 * RATE_LIMIT_HASH_SECRET, server-only) into the bucket key, so the stored row
 * cannot be reversed back to an IP without that secret.
 *
 * Two distinct failure modes, deliberately not treated the same:
 *   - RATE_LIMIT_HASH_SECRET missing in real production is a deployment
 *     configuration error, not a transient condition — it fails CLOSED (a
 *     safe, generic 503) rather than silently running with no rate limiter at
 *     all. Outside production, a missing secret stays developer-friendly and
 *     skips rate limiting (logged loudly).
 *   - A transient RPC/network failure talking to Postgres (secret IS
 *     configured, the database call itself failed) fails OPEN, in every
 *     environment. Turnstile, the honeypot and schema validation are
 *     independent layers, and recruitment availability matters more than one
 *     limiter check during a brief outage — a temporary limiter outage must
 *     never itself corrupt or silently drop a real submission.
 * Neither failure mode ever exposes configuration details in the response.
 */

const RATE_LIMIT_MESSAGE = 'Too many submissions from your connection. Please wait a few minutes and try again.';

export type RateLimitResult = { ok: true } | { ok: false; response: NextResponse };

function bucketKey(bucket: RateLimitBucket, ip: string, secret: string): string {
  return `${bucket}:${createHmac('sha256', secret).update(ip).digest('hex').slice(0, 40)}`;
}

function unavailableResponse(): NextResponse {
  return NextResponse.json({ ok: false, message: GENERIC_FAILURE }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
}

export async function checkRateLimit(request: Request, bucket: RateLimitBucket): Promise<RateLimitResult> {
  const secret = process.env.RATE_LIMIT_HASH_SECRET;
  if (!secret) {
    if (isProductionEnvironment()) {
      console.error('Rate limit: RATE_LIMIT_HASH_SECRET is not configured in production — refusing public intake traffic until this is fixed.');
      return { ok: false, response: unavailableResponse() };
    }
    console.warn('Rate limit: RATE_LIMIT_HASH_SECRET is not configured — allowing request through unlimited (development-only behavior).');
    return { ok: true };
  }

  const ip = clientIpFrom(request);
  if (!ip) {
    console.error('Rate limit: no client IP on request — allowing request through unlimited.');
    return { ok: true };
  }

  const { windowSeconds, maxRequests } = RATE_LIMITS[bucket];

  const { data, error } = await getAdminSupabase().rpc('check_public_intake_rate_limit', {
    p_bucket_key: bucketKey(bucket, ip, secret),
    p_window_seconds: windowSeconds,
    p_max_requests: maxRequests,
  });

  if (error) {
    console.error('Rate limit: check_public_intake_rate_limit RPC failed (failing open):', error.code, error.message);
    return { ok: true };
  }

  const row = Array.isArray(data) ? data[0] : data;
  if (!row?.allowed) {
    const retryAfter = Math.max(1, Number(row?.retry_after_seconds) || windowSeconds);
    return {
      ok: false,
      response: NextResponse.json(
        { ok: false, message: RATE_LIMIT_MESSAGE },
        { status: 429, headers: { 'Cache-Control': 'no-store', 'Retry-After': String(retryAfter) } },
      ),
    };
  }

  return { ok: true };
}
