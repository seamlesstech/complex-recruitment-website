// 'use client';

// import { useMemo, useRef, useState } from 'react';
// import { jobs } from '../lib/jobs';
// import { JobRow } from './jobs/JobRow';
// import { ButtonLink } from './ui/ButtonLink';

// const sectors = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support'];
// const workTypes = ['Temporary', 'Ad-hoc', 'Temp-to-perm', 'Permanent'];
// const controlClass = 'min-h-12 min-w-0 w-full border-0 border-b border-line bg-transparent px-1 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red';

// export function JobBoardExplorer() {
//   const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
//   const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
//   const [filtersOpen, setFiltersOpen] = useState(false);
//   const activeFilterCount = selectedSectors.length + selectedWorkTypes.length;
//   const [query, setQuery] = useState('');
//   const [location, setLocation] = useState('');
//   const results = useRef<HTMLHeadingElement>(null);
//   const filtered = useMemo(() => jobs.filter(job =>
//     (!selectedSectors.length || selectedSectors.includes(job.sector)) &&
//     (!selectedWorkTypes.length || selectedWorkTypes.includes(job.workType)) &&
//     `${job.title} ${job.sector} ${job.location}`.toLowerCase().includes(query.trim().toLowerCase()) &&
//     job.location.toLowerCase().includes(location.trim().toLowerCase())
//   ), [selectedSectors, selectedWorkTypes, query, location]);

//   return (
//     <div className="grid grid-cols-[280px_minmax(0,1fr)] items-start gap-10 max-[1023px]:grid-cols-1 max-[1023px]:gap-6">
//       <aside className="min-w-0 min-[1024px]:border-r min-[1024px]:border-line min-[1024px]:pr-6">
//         <h2 className="mb-5 mt-0 text-lg font-semibold max-[1023px]:hidden">Search & filters</h2>
//         <button type="button" aria-expanded={filtersOpen} aria-controls="job-filters" onClick={() => setFiltersOpen(open => !open)} className="flex min-h-12 w-full items-center justify-between border border-line bg-surface px-4 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-brand-red min-[1024px]:hidden">
//           <span>Filters{activeFilterCount + Number(!!query.trim()) + Number(!!location.trim()) > 0 ? ` (${activeFilterCount + Number(!!query.trim()) + Number(!!location.trim())})` : ''}</span><span aria-hidden="true">{filtersOpen ? '−' : '+'}</span>
//         </button>
//       <form id="job-filters" className={`${filtersOpen ? 'block' : 'hidden'} min-[1024px]:block max-[1023px]:mt-4`} role="search" aria-label="Search jobs" onSubmit={event => { event.preventDefault(); setFiltersOpen(false); results.current?.focus(); }}>
//         <h3 className="mb-4 mt-0 text-[10px] font-extrabold tracking-[.16em] text-muted">SEARCH</h3>
//         <div className="grid gap-5 text-ink">
//           <label className="flex min-w-0 flex-col gap-2">
//             <span className="text-[10px] font-bold tracking-[.14em]">KEYWORD</span>
//             <input name="job-keyword" value={query} onChange={event => setQuery(event.target.value)} className="min-h-12 min-w-0 w-full border-0 border-b border-line bg-transparent px-1 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-red" placeholder="Job title or keyword" />
//           </label>
//           <label className="flex min-w-0 flex-col gap-2">
//             <span className="text-[10px] font-bold tracking-[.14em]">LOCATION</span>
//             <input name="job-location" value={location} onChange={event => setLocation(event.target.value)} className="min-h-12 min-w-0 w-full border-0 border-b border-line bg-transparent px-1 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-brand-red" placeholder="Town or city" />
//           </label>
//           <button type="submit" className="flex min-h-12 cursor-pointer items-center justify-between gap-6 bg-brand-red px-6 py-4 text-sm font-bold text-white outline-none hover:bg-brand-grey focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">Search jobs <span aria-hidden="true">↗</span></button>
//         </div>
//         <h3 className="mb-5 mt-7 border-t border-line pt-6 text-[10px] font-extrabold tracking-[.16em] text-muted">FILTER BY</h3>
//         <div className="mb-6 grid gap-7">
//           <div className="min-w-0">
//             <span id="sector-label" className="mb-2 block text-[10px] font-bold tracking-[.12em] text-muted">SECTOR</span>
//             <details className="relative" onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}>
//               <summary aria-labelledby="sector-label sector-selection" className={`${controlClass} flex cursor-pointer list-none items-center justify-between gap-3 py-3 [&::-webkit-details-marker]:hidden`}>
//                 <span id="sector-selection">{selectedSectors.length ? `${selectedSectors.length} selected` : 'All sectors'}</span><span aria-hidden="true">⌄</span>
//               </summary>
//               <div className="absolute inset-x-0 top-full z-10 mt-1 border border-line bg-white p-3 shadow-lg">
//                 <fieldset className="m-0 min-w-0 border-0 p-0">
//                   <legend className="sr-only">Select sectors</legend>
//                   {sectors.map(item => <label key={item} className="flex min-h-12 cursor-pointer items-center gap-3 px-2 py-2 text-sm leading-[1.4] hover:bg-surface focus-within:bg-surface">
//                     <input type="checkbox" name="sector" value={item} checked={selectedSectors.includes(item)} onChange={() => setSelectedSectors(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item])} className="h-4 w-4 shrink-0 accent-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red" />{item}
//                   </label>)}
//                 </fieldset>
//                 <button type="button" onClick={() => setSelectedSectors([])} className="mt-2 min-h-11 px-2 text-xs underline outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Clear sectors</button>
//               </div>
//             </details>
//             {selectedSectors.length > 0 && <ul aria-label="Selected sectors" className="mb-0 mt-3 flex list-none flex-wrap gap-2 p-0">
//               {selectedSectors.map(item => <li key={item}><button type="button" aria-label={`Remove ${item}`} onClick={() => setSelectedSectors(current => current.filter(value => value !== item))} className="flex min-h-11 items-center gap-2 rounded-sm border border-line bg-surface px-3 py-2 text-left text-xs outline-none focus-visible:ring-2 focus-visible:ring-brand-red">{item}<span aria-hidden="true">×</span></button></li>)}
//             </ul>}
//           </div>
//           <fieldset className="m-0 min-w-0 border-0 p-0">
//             <legend className="mb-2 text-[10px] font-bold tracking-[.12em] text-muted">WORK TYPE</legend>
//             <div className="flex flex-wrap gap-2">
//               {workTypes.map(item => <button key={item} type="button" aria-pressed={selectedWorkTypes.includes(item)} onClick={() => setSelectedWorkTypes(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item])} className={`min-h-12 cursor-pointer rounded-sm border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${selectedWorkTypes.includes(item) ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:bg-surface'}`}>{item}</button>)}
//             </div>
//           </fieldset>
//           <button type="button" onClick={() => { setQuery(''); setLocation(''); setSelectedSectors([]); setSelectedWorkTypes([]); }} className="min-h-12 cursor-pointer px-3 text-sm underline outline-none focus-visible:ring-2 focus-visible:ring-brand-red justify-self-start">Reset filters</button>
//         </div>
//       </form>
//       </aside>
//       <div className="min-w-0">
//       <h2 ref={results} tabIndex={-1} aria-live="polite" className="mb-4 mt-0 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-brand-red">{filtered.length} {filtered.length === 1 ? 'vacancy' : 'vacancies'}</h2>
//       <div className="border-t border-line" role="list">
//         {filtered.map((job, index) => <div role="listitem" key={job.slug}><JobRow job={job} index={index} /></div>)}
//       </div>
//       {filtered.length === 0 && <div className="border-b border-line bg-white p-7"><h3 className="mt-0 text-2xl tracking-[-.03em]">No suitable role right now?</h3><p className="mb-6 text-sm text-muted">Try adjusting or resetting your filters, or register your interest for future opportunities.</p><ButtonLink href="/register-interest" className="!text-white">Register your interest</ButtonLink></div>}
//       </div>
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { jobs } from "../lib/jobs";
import { JobRow } from "./jobs/JobRow";
import { ButtonLink } from "./ui/ButtonLink";

const sectors = [
  "Driving & Transport",
  "Industrial & Warehouse",
  "Construction & Engineering",
  "Business & Operational Support",
];

const workTypes = ["Temporary", "Ad-hoc", "Temp-to-perm", "Permanent"];

const inputClass =
  "min-h-12 w-full min-w-0 border border-line bg-white px-3 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red";

export function JobBoardExplorer() {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const filtered = useMemo(
    () =>
      jobs.filter(
        (job) =>
          (!selectedSectors.length || selectedSectors.includes(job.sector)) &&
          (!selectedWorkTypes.length ||
            selectedWorkTypes.includes(job.workType)) &&
          `${job.title} ${job.sector} ${job.location}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()) &&
          job.location.toLowerCase().includes(location.trim().toLowerCase()),
      ),
    [selectedSectors, selectedWorkTypes, query, location],
  );

  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setSelectedSectors([]);
    setSelectedWorkTypes([]);
  };

  return (
    <div className="min-w-0">
      <form
        role="search"
        aria-label="Search jobs"
        onSubmit={(event) => event.preventDefault()}
      >
        {/* Primary search controls */}
        <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">
          <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
            Keyword / job title
            <input
              name="job-keyword"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className={inputClass}
              placeholder="Job title or keyword"
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
            Location
            <input
              name="job-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className={inputClass}
              placeholder="Town or city"
            />
          </label>

          <div className="flex min-w-0 flex-col gap-2">
            <span id="job-sector-label" className="text-xs font-semibold">
              Sector
            </span>

            <details
              className="relative"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.currentTarget.open = false;
                  event.currentTarget.querySelector("summary")?.focus();
                }
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  event.currentTarget.open = false;
                }
              }}
            >
              <summary
                aria-labelledby="job-sector-label job-sector-selection"
                className={`${inputClass} flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden`}
              >
                <span id="job-sector-selection" className="truncate">
                  {selectedSectors.length === 0
                    ? "All sectors"
                    : selectedSectors.length === 1
                      ? selectedSectors[0]
                      : `${selectedSectors.length} sectors selected`}
                </span>

                <span aria-hidden="true" className="shrink-0 text-muted">
                  ⌄
                </span>
              </summary>

              <div className="absolute inset-x-0 top-full z-20 mt-1 border border-line bg-white p-3 shadow-lg">
                <fieldset className="m-0 min-w-0 border-0 p-0">
                  <legend className="sr-only">Select sectors</legend>

                  {sectors.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-12 cursor-pointer items-center gap-3 px-2 py-2 text-sm leading-[1.4] hover:bg-surface focus-within:bg-surface"
                    >
                      <input
                        type="checkbox"
                        name="sector"
                        value={item}
                        checked={selectedSectors.includes(item)}
                        onChange={() =>
                          setSelectedSectors((current) =>
                            current.includes(item)
                              ? current.filter((value) => value !== item)
                              : [...current, item],
                          )
                        }
                        className="h-4 w-4 shrink-0 accent-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      />

                      {item}
                    </label>
                  ))}
                </fieldset>

                {selectedSectors.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedSectors([])}
                    className="mt-2 min-h-11 px-2 text-xs underline outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  >
                    Clear sectors
                  </button>
                )}
              </div>
            </details>
          </div>
        </div>

        {/* Secondary work-type filters */}
        <div className="mt-5 flex items-end justify-between gap-5 max-[760px]:flex-col max-[760px]:items-stretch">
          <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="mb-3 text-xs font-semibold">Work type:</legend>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={selectedWorkTypes.length === 0}
                onClick={() => setSelectedWorkTypes([])}
                className={`min-h-11 cursor-pointer rounded-sm border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                  selectedWorkTypes.length === 0
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-ink hover:bg-surface"
                }`}
              >
                All
              </button>

              {workTypes.map((item) => {
                const selected = selectedWorkTypes.includes(item);

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setSelectedWorkTypes((current) =>
                        current.includes(item)
                          ? current.filter((value) => value !== item)
                          : [...current, item],
                      )
                    }
                    className={`min-h-11 cursor-pointer rounded-sm border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                      selected
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink hover:bg-surface"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <button
            type="button"
            onClick={clearFilters}
            className="min-h-11 shrink-0 cursor-pointer self-end text-sm underline outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[760px]:self-start"
          >
            Clear filters
          </button>
        </div>
      </form>

      {/* Results heading */}
      <div className="mt-9 flex items-center justify-between gap-4 border-t border-line pt-6">
        <h2 className="m-0 text-[10px] font-extrabold tracking-[.16em]">
          JOB LISTINGS
        </h2>

        <span aria-live="polite" className="text-xs text-muted">
          {filtered.length} {filtered.length === 1 ? "vacancy" : "vacancies"}
        </span>
      </div>

      {/* Job results */}
      <div className="mt-6 border-t border-line" role="list">
        {filtered.map((job, index) => (
          <div role="listitem" key={job.slug}>
            <JobRow job={job} index={index} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="border-b border-line bg-white p-7">
          <h3 className="mt-0 text-2xl tracking-[-.03em]">
            No suitable role right now?
          </h3>

          <p className="mb-6 text-sm text-muted">
            Try adjusting or resetting your filters, or register your interest
            for future opportunities.
          </p>

          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-12 border border-line bg-white px-5 text-sm font-semibold text-ink outline-none hover:bg-surface focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              Reset filters
            </button>

            <ButtonLink href="/register-interest" className="!text-white">
              Register your interest
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
