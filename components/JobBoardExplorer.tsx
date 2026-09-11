'use client';

import { useMemo, useState } from 'react';
import { JobRow, type Job } from './jobs/JobRow';

const jobs: Job[] = [
  { title: 'HGV Class 1 Driver', location: 'Enfield', sector: 'Driving', type: 'Temporary', rate: '£19–£22/hr', slug: 'hgv-class-1-driver-enfield' },
  { title: 'Warehouse Operative', location: 'Croydon', sector: 'Industrial', type: 'Temporary', rate: '£12.50/hr', slug: 'warehouse-operative-croydon' },
  { title: 'Site Labourer', location: 'London', sector: 'Construction', type: 'Temporary', rate: '£14.50/hr', slug: 'site-labourer-london' },
  { title: 'HGV Class 2 Driver', location: 'North London', sector: 'Driving', type: 'Temporary', rate: '£17–£20/hr', slug: 'hgv-class-2-driver-north-london' },
  { title: 'FLT Driver', location: 'Greater London', sector: 'Industrial', type: 'Temporary', rate: '£13.80/hr', slug: 'flt-driver-greater-london' },
  { title: 'Transport Planner', location: 'London', sector: 'Driving', type: 'Permanent', rate: 'Salary DOE', slug: 'transport-planner-london' },
];

const sectors = ['All', 'Driving', 'Industrial', 'Construction'];

export function JobBoardExplorer() {
  const [sector, setSector] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => jobs.filter((job) => (sector === 'All' || job.sector === sector) && `${job.title} ${job.location}`.toLowerCase().includes(query.toLowerCase())),
    [sector, query],
  );

  return (
    <div className="mt-[70px]">
      <div role="search" className="grid min-h-[116px] grid-cols-[1fr_1fr_auto] bg-ink text-white max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
        <label className="flex flex-col justify-center border-r border-white/15 px-7 py-6 max-[640px]:border-r-0 max-[640px]:border-b">
          <span className="mb-3 text-[8px] font-extrabold tracking-[.17em] text-[#929a9f]">KEYWORD</span>
          <input name="job-keyword" value={query} onChange={(event) => setQuery(event.target.value)} className="border-0 bg-transparent p-0 text-[17px] text-white outline-none placeholder:text-[#737b80] focus-visible:ring-2 focus-visible:ring-brand-red" placeholder="Job title or keyword" />
        </label>
        <label className="flex flex-col justify-center border-r border-white/15 px-7 py-6 max-[640px]:border-r-0 max-[640px]:border-b">
          <span className="mb-3 text-[8px] font-extrabold tracking-[.17em] text-[#929a9f]">LOCATION</span>
          <input name="job-location" className="border-0 bg-transparent p-0 text-[17px] text-white outline-none placeholder:text-[#737b80] focus-visible:ring-2 focus-visible:ring-brand-red" placeholder="Town, city or postcode" />
        </label>
        <button type="button" className="flex cursor-pointer items-center gap-8 border-0 bg-brand-red px-7 text-[13px] font-extrabold text-white transition-colors duration-300 hover:bg-brand-grey focus-visible:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white max-[1000px]:col-span-2 max-[1000px]:min-h-[62px] max-[1000px]:justify-between max-[640px]:col-auto">Search Jobs <span className="text-[19px]">↗</span></button>
      </div>
      <div className="my-7 mb-9 flex items-center justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[18px]">
        <div className="flex flex-wrap gap-2" aria-label="Filter jobs by sector">
          {sectors.map((item) => (
            <button key={item} type="button" aria-pressed={sector === item} className={`h-[38px] cursor-pointer border px-[15px] text-[10px] font-extrabold outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${sector === item ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white'}`} onClick={() => setSector(item)}>{item}</button>
          ))}
        </div>
        <span aria-live="polite" className="text-[8px] uppercase tracking-[.14em] text-[#858d92]">{String(filtered.length).padStart(2, '0')} prototype vacancies</span>
      </div>
      <div className="grid grid-cols-[1.5fr_.8fr_.7fr_.7fr_.75fr_36px] items-center gap-[18px] px-5 pb-[13px] text-[8px] tracking-[.15em] text-[#8b9398] max-[1000px]:hidden" aria-hidden="true"><span>ROLE</span><span>LOCATION</span><span>SECTOR</span><span>TYPE</span><span>RATE</span><span /></div>
      <div className="border-t border-line" role="list">
        {filtered.map((job, index) => <div role="listitem" key={job.slug}><JobRow job={job} index={index} /></div>)}
      </div>
    </div>
  );
}
