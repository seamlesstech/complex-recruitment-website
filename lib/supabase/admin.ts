import 'server-only';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Trusted, server-only Supabase client using SUPABASE_SECRET_KEY (service role).
 *
 * It bypasses RLS, so it is used ONLY by the public intake route handlers in
 * `app/api/*`, which validate every field and set status/owner/source themselves.
 * The `server-only` import makes any accidental Client Component import a build
 * error, so the secret can never reach a browser bundle.
 */
let client: SupabaseClient | undefined;

export function getAdminSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secretKey) {
    throw new Error('Server Supabase environment variables are not configured.');
  }

  client = createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}
