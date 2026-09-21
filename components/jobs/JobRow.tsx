import Link from 'next/link';
import type { Job } from '../../lib/jobs';
import { ArrowIcon } from '../ui/ArrowIcon';

export type { Job } from '../../lib/jobs';

export function JobRow({ job, index }: { job: Job; index: number }) {
  return (
    <Link href={`/jobs/${job.slug}`} className="group grid min-h-28 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-line px-5 py-5 outline-none transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[640px]:grid-cols-1 max-[640px]:gap-4 max-[640px]:px-3">
      <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
        <h3 className="m-0 text-xl font-bold tracking-[-.025em]"><span className="mr-3 text-[9px] text-brand-red" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{job.title}</h3>
        <ul className="mb-0 mt-3 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-xs text-muted">
          <li><span className="sr-only">Location: </span>{job.location}</li>
          <li><span className="sr-only">Sector: </span>{job.sector}</li>
          <li><span className="sr-only">Work type: </span>{job.workType}</li>
          <li className="font-semibold text-ink"><span className="sr-only">Pay: </span>{job.rate}</li>
          {job.timing && <li><span className="sr-only">Timing: </span>{job.timing}</li>}
        </ul>
      </div>
      <span className="flex items-center gap-3 whitespace-nowrap text-xs font-bold">View job <ArrowIcon className="text-lg text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" /></span>
    </Link>
  );
}
