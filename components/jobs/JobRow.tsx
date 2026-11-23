import Link from 'next/link';
import type { PublicJob } from '../../lib/public-jobs';
import { ArrowIcon } from '../ui/ArrowIcon';

/**
 * `light` (default) is the original row used on white sections. `dark` is the flat,
 * hairline-separated treatment for the Jobs page's dark vacancy board (it mirrors the
 * homepage "Latest Opportunities" rows). The whole row is the single link either way.
 */
export function JobRow({ job, index, tone = 'light' }: { job: PublicJob; index: number; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <Link
      href={job.href}
      className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 outline-none transition-colors max-[640px]:grid-cols-1 max-[640px]:gap-4 ${
        dark
          ? 'min-h-[104px] border-b border-white/20 px-5 py-6 text-white hover:bg-white/[.06] focus-visible:bg-white/[.06] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[640px]:px-3'
          : 'min-h-28 border-b border-line px-5 py-5 hover:bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[640px]:px-3'
      }`}
    >
      <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
        <h3 className={`m-0 text-xl font-bold tracking-[-.025em] ${dark ? 'text-white' : ''}`}>
          {!dark && <span className="mr-3 text-[9px] text-brand-red" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
          {job.title}
        </h3>
        <ul className={`mb-0 mt-3 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 ${dark ? 'text-[13px] text-[#c3cacf]' : 'text-xs text-muted'}`}>
          {job.location && <li><span className="sr-only">Location: </span>{job.location}</li>}
          {job.sectorLabel && <li><span className="sr-only">Sector: </span>{job.sectorLabel}</li>}
          {job.employmentTypeLabel && <li><span className="sr-only">Work type: </span>{job.employmentTypeLabel}</li>}
          {job.pay && <li className={`font-semibold ${dark ? 'text-white' : 'text-ink'}`}><span className="sr-only">Pay: </span>{job.pay}</li>}
          {job.workPatternLabel && <li><span className="sr-only">Work pattern: </span>{job.workPatternLabel}</li>}
        </ul>
      </div>
      <span className="flex items-center gap-3 whitespace-nowrap text-xs font-bold">View job <ArrowIcon className="text-lg text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" /></span>
    </Link>
  );
}
