'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { EMPLOYMENT_TYPE_LABELS, EMPLOYMENT_TYPES, type PublicJob } from '../../../lib/public-jobs';
import { BookDriverForm } from './BookDriverForm';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import { TextLink } from '../../../components/ui/TextLink';

export function DrivingIntentPanel({ jobs }: { jobs: PublicJob[] }) {
  const [intent, setIntent] = useState(0);
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const matches = jobs.filter(job => (job.location ?? '').toLowerCase().includes(location.trim().toLowerCase()) && (!workType || job.employmentType === workType)).slice(0, 3);
  const panelClass = (index: number) => `col-start-1 row-start-1 min-w-0 transition-[opacity,transform] duration-200 motion-reduce:transition-none ${intent === index ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-1'}`;

  return <div className="relative isolate pt-14" data-driving-intent>
    <div role="tablist" aria-label="How can we help?" className="absolute right-3 top-3 z-0 grid h-14 w-[calc(100%-24px)] max-w-[440px] grid-cols-2 overflow-hidden rounded-t-[13px] border border-line bg-white max-[640px]:right-1 max-[640px]:w-[calc(100%-8px)]">
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-brand-red transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none" style={{ transform: `translateX(${intent * 100}%)` }} />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-[linear-gradient(to_bottom,rgba(17,18,20,0)_0%,rgba(17,18,20,.045)_25%,rgba(17,18,20,.11)_60%,rgba(17,18,20,.18)_100%)]" />
      {['I need drivers', 'I’m looking for work'].map((title, index) => <button key={title} ref={node => { tabs.current[index] = node; }} id={`driving-intent-${index}`} type="button" role="tab" aria-selected={intent === index} aria-controls={`driving-panel-${index}`} tabIndex={intent === index ? 0 : -1} onClick={() => setIntent(index)} onKeyDown={event => {
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : ['ArrowLeft', 'ArrowRight'].includes(event.key) ? 1 - index : null;
        if (next !== null) { event.preventDefault(); setIntent(next); tabs.current[next]?.focus(); }
      }} className={`relative z-10 h-11 min-w-0 px-2 !text-[10px] !font-extrabold !leading-4 uppercase tracking-[.06em] outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink motion-reduce:transition-none ${intent === index ? 'text-white' : 'text-ink hover:text-brand-red'}`}>{title}</button>)}
    </div>
    <div className="relative z-10 grid">
      <div id="driving-panel-0" role="tabpanel" aria-labelledby="driving-intent-0" aria-hidden={intent !== 0} inert={intent !== 0} className={panelClass(0)}><BookDriverForm /></div>
      <div id="driving-panel-1" role="tabpanel" aria-labelledby="driving-intent-1" aria-hidden={intent !== 1} inert={intent !== 1} className={`${panelClass(1)} border border-line bg-surface`}>
        <div className="bg-ink p-8 text-white max-[640px]:p-5">
          <h2 className="text-[36px] font-semibold leading-none tracking-[-.045em]">Find driving work</h2>
          <p className="mt-4 text-sm leading-[1.65] text-white/90">Explore current Driving &amp; Transport opportunities with Complex.</p>
        </div>
        <div className="p-8 max-[640px]:p-5">
          <div className="grid gap-4">
            <label className="text-[10px] font-extrabold uppercase tracking-[.12em]">Location<input value={location} onChange={event => setLocation(event.target.value)} placeholder="Town or area" className="mt-2 block min-h-12 w-full border border-line bg-white px-3 text-sm font-normal tracking-normal outline-none focus:border-brand-red" /></label>
            <label className="text-[10px] font-extrabold uppercase tracking-[.12em]">Work type<select value={workType} onChange={event => setWorkType(event.target.value)} className="mt-2 block min-h-12 w-full border border-line bg-white px-3 text-sm font-normal tracking-normal outline-none focus:border-brand-red"><option value="">All work types</option>{EMPLOYMENT_TYPES.map(type => <option key={type} value={type}>{EMPLOYMENT_TYPE_LABELS[type]}</option>)}</select></label>
          </div>
          <p role="status" className="mt-5 text-xs text-muted">{matches.length} matching {matches.length === 1 ? 'role' : 'roles'}</p>
          <div className="min-h-[230px]">
            {matches.map(job => <Link key={job.reference} href={job.href} className="group block border-b border-line py-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-red"><h3 className="text-base font-semibold tracking-[-.02em]">{job.title}<span aria-hidden="true" className="ml-2 text-brand-red">↗</span></h3><p className="mt-2 text-xs leading-relaxed text-muted">{[job.location, job.employmentTypeLabel].filter(Boolean).join(' · ')}{job.pay && <><br /><span className="text-ink">{job.pay}</span></>}</p></Link>)}
            {!matches.length && <p className="py-4 text-sm leading-relaxed text-muted">No matching driving roles. Try another location or work type, or register your interest below.</p>}
          </div>
          <ButtonLink href="/jobs" className="mt-5 w-full">View All Driving Jobs</ButtonLink>
          <p className="mt-5 text-xs text-muted">Can’t see the right role?</p>
          <TextLink href="/register-interest" className="mt-2 !text-brand-red">Register your interest</TextLink>
        </div>
      </div>
    </div>
  </div>;
}
