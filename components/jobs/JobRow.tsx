import Link from 'next/link';
import { ArrowIcon } from '../ui/ArrowIcon';

export type Job = {
  title: string;
  location: string;
  sector: string;
  workType: string;
  rate: string;
  slug: string;
};

type JobRowProps = {
  job: Job;
  index: number;
};

export function JobRow({ job, index }: JobRowProps) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      aria-label={`${job.title} in ${job.location}, ${job.rate}`}
      className="group relative grid min-h-24 grid-cols-[1.5fr_.8fr_.7fr_.7fr_.75fr_36px] items-center gap-[18px] overflow-hidden border-b border-line px-5 outline-none before:absolute before:inset-0 before:translate-x-[-101%] before:bg-white before:transition-transform before:duration-500 before:ease-complex hover:before:translate-x-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red focus-visible:before:translate-x-0 max-[1000px]:grid-cols-[1.25fr_.8fr_.7fr_34px] max-[640px]:min-h-[122px] max-[640px]:grid-cols-[1fr_28px] max-[640px]:gap-2 max-[640px]:px-3 max-[640px]:py-[18px]"
    >
      <div className="relative z-[1] flex min-w-0 items-center gap-[18px] transition-transform duration-500 ease-complex group-hover:translate-x-[10px] group-focus-visible:translate-x-[10px] max-[640px]:col-start-1 max-[640px]:block">
        <small className="text-[8px] font-extrabold text-brand-red max-[640px]:mb-[7px] max-[640px]:block">{String(index + 1).padStart(2, '0')}</small>
        <strong className="text-xl tracking-[-.025em]">{job.title}</strong>
      </div>
      <span className="relative z-[1] text-[11px] text-[#616c72] transition-transform duration-500 ease-complex group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[640px]:col-start-1">{job.location}</span>
      <span className="relative z-[1] text-[11px] text-[#616c72] transition-transform duration-500 ease-complex group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[640px]:col-start-1 max-[640px]:hidden">{job.sector}</span>
      <span className="relative z-[1] text-[11px] text-[#616c72] transition-transform duration-500 ease-complex group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[1000px]:hidden">{job.workType}</span>
      <b className="relative z-[1] text-xs transition-transform duration-500 ease-complex group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[1000px]:hidden">{job.rate}</b>
      <ArrowIcon className="relative z-[1] text-[19px] transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-brand-red group-focus-visible:translate-x-1.5 group-focus-visible:-translate-y-1.5 group-focus-visible:text-brand-red max-[640px]:col-start-2 max-[640px]:row-start-1 max-[640px]:row-end-5 max-[640px]:self-center" />
    </Link>
  );
}
