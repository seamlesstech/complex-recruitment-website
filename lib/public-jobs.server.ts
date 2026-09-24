import 'server-only';

import { cache } from 'react';
import { getPublicSupabase } from './supabase/public';
import {
  JOB_REFERENCE_PATTERN,
  PUBLIC_JOB_COLUMNS,
  toPublicJob,
  type PublicJob,
  type PublicJobRow,
  type PublicJobsResult,
} from './public-jobs';

/**
 * The single source of public Job data for the whole website. Reads only the
 * allow-listed `public_jobs` view (never the base `jobs` table), which already
 * restricts to Open, published, non-archived Jobs whose closing date hasn't passed.
 *
 * Freshness: pages that call this export `revalidate = 60`, so listings are
 * regenerated at most once a minute. `cache()` dedupes calls within one render.
 */
export const getPublicJobs = cache(async (): Promise<PublicJobsResult> => {
  try {
    const { data, error } = await getPublicSupabase()
      .from('public_jobs')
      .select(PUBLIC_JOB_COLUMNS)
      .order('reference', { ascending: false })
      .returns<PublicJobRow[]>();

    if (error) {
      console.error('getPublicJobs failed:', error.code, error.message);
      return { ok: false, jobs: [] };
    }
    return { ok: true, jobs: (data ?? []).map(toPublicJob) };
  } catch (error) {
    console.error('getPublicJobs failed:', error instanceof Error ? error.message : 'unknown error');
    return { ok: false, jobs: [] };
  }
});

export type PublicJobLookup =
  | { status: 'found'; job: PublicJob }
  | { status: 'not_found' }
  | { status: 'unavailable' };

export const getPublicJobByReference = cache(async (reference: string): Promise<PublicJobLookup> => {
  if (!JOB_REFERENCE_PATTERN.test(reference)) return { status: 'not_found' };

  try {
    const { data, error } = await getPublicSupabase()
      .from('public_jobs')
      .select(PUBLIC_JOB_COLUMNS)
      .eq('reference', reference)
      .maybeSingle<PublicJobRow>();

    if (error) {
      console.error('getPublicJobByReference failed:', error.code, error.message);
      return { status: 'unavailable' };
    }
    return data ? { status: 'found', job: toPublicJob(data) } : { status: 'not_found' };
  } catch (error) {
    console.error('getPublicJobByReference failed:', error instanceof Error ? error.message : 'unknown error');
    return { status: 'unavailable' };
  }
});
