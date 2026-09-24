import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Public, read-only Supabase access using the publishable (anon) key.
 *
 * The anon role can read exactly one thing in this project: the allow-listed
 * `public_jobs` view. It has no grants on the base `jobs` table, applications,
 * candidates or enquiries, so this client cannot write public intake — that goes
 * through the server-only client in `./admin.ts`, behind the API route handlers.
 *
 * Used from Server Components only (so job reads happen once per render on the
 * server), but nothing here is secret.
 */
let client: SupabaseClient | undefined;

export function getPublicSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !publishableKey) {
    throw new Error('Public Supabase environment variables are not configured.');
  }

  client = createClient(url, publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}
