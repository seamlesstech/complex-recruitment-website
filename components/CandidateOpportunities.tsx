"use client";

import { useState } from "react";
import { Container } from "./layout/Container";
import { SectionLabel } from "./SectionLabel";
import { ButtonLink } from "./ui/ButtonLink";
import { ArrowIcon } from "./ui/ArrowIcon";
import Link from "next/link";
import {
  EMPLOYMENT_TYPES,
  EMPLOYMENT_TYPE_LABELS,
  FILTERABLE_SECTORS,
  type DbEmploymentType,
  type PublicJob,
} from "../lib/public-jobs";

const heading =
  "section-heading text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em] max-[760px]:text-5xl";

// Filters map onto real database values (see lib/public-jobs.ts).
const sectors = ["All sectors", ...FILTERABLE_SECTORS.map((item) => item.label)];
const workTypes = EMPLOYMENT_TYPES;
const inputClass =
  "min-h-12 w-full min-w-0 border border-line bg-white px-3 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red";

export function CandidateOpportunities({
  jobs,
  unavailable = false,
}: {
  jobs: PublicJob[];
  unavailable?: boolean;
}) {
  const [sector, setSector] = useState("All sectors");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<DbEmploymentType[]>([]);
  const filtered = jobs.filter(
    (job) =>
      (sector === "All sectors" || job.sectorLabel === sector) &&
      (!selectedTypes.length ||
        (!!job.employmentType && selectedTypes.includes(job.employmentType))) &&
      job.title.toLowerCase().includes(keyword.trim().toLowerCase()) &&
      (job.location ?? "").toLowerCase().includes(location.trim().toLowerCase()),
  );
  return (
    <section
      id="candidate-jobs"
      className="bg-surface pb-[100px] pt-10 max-[760px]:pb-[72px] max-[760px]:pt-8"
    >
      <Container>
        <div className="max-w-[1000px]">
          <SectionLabel>LATEST OPPORTUNITIES</SectionLabel>
          <h2 className={`${heading} mb-5 mt-6`}>
            Find your <em className="not-italic text-brand-red">next role.</em>
          </h2>
          <p className="text-sm leading-[1.7] text-muted">
            Browse current vacancies across our specialist sectors.
          </p>
        </div>
        <form
          role="search"
          aria-label="Search latest opportunities"
          onSubmit={(event) => event.preventDefault()}
          className="mt-6"
        >
          <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">
            <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
              Keyword / job title
              <input
                className={inputClass}
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                name="candidate-keyword"
                placeholder="Keyword / job title"
              />
            </label>
            <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
              Location
              <input
                className={inputClass}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                name="candidate-location"
                placeholder="Town or city"
              />
            </label>
            <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
              Sector
              <select
                className={inputClass}
                value={sector}
                onChange={(event) => setSector(event.target.value)}
                name="candidate-sector"
              >
                {sectors.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-5 flex items-end justify-between gap-5 max-[760px]:flex-col max-[760px]:items-stretch">
            <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="mb-3 text-xs font-semibold">Work type:</legend>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  aria-pressed={selectedTypes.length === 0}
                  onClick={() => setSelectedTypes([])}
                  className={`min-h-11 cursor-pointer rounded-sm border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                    selectedTypes.length === 0
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-ink hover:bg-surface"
                  }`}
                >
                  All
                </button>

                {workTypes.map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={selectedTypes.includes(item)}
                    onClick={() =>
                      setSelectedTypes((current) =>
                        current.includes(item)
                          ? current.filter((value) => value !== item)
                          : [...current, item],
                      )
                    }
                    className={`min-h-11 cursor-pointer rounded-sm border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                      selectedTypes.includes(item)
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink hover:bg-surface"
                    }`}
                  >
                    {EMPLOYMENT_TYPE_LABELS[item]}
                  </button>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              onClick={() => {
                setKeyword("");
                setLocation("");
                setSector("All sectors");
                setSelectedTypes([]);
              }}
              className="min-h-11 shrink-0 cursor-pointer self-end text-sm underline outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              Clear filters
            </button>
          </div>
        </form>
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-6">
          <h3 className="m-0 text-[10px] font-extrabold tracking-[.16em]">
            JOB LISTINGS
          </h3>
          <span aria-live="polite" className="text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? "vacancy" : "vacancies"}
          </span>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-[1.5fr_.8fr_.7fr_.7fr_.75fr_36px] gap-[18px] px-5 pb-3 text-[8px] tracking-[.14em] text-muted max-[760px]:hidden">
            {["ROLE", "LOCATION", "SECTOR", "TYPE", "RATE", ""].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          {filtered.map((job) => (
            <Link
              href={job.href}
              key={job.reference}
              className="group relative grid min-h-[86px] grid-cols-[1.5fr_.8fr_.7fr_.7fr_.75fr_36px] items-center gap-[18px] overflow-hidden border-t border-line px-5 outline-none before:absolute before:inset-0 before:-translate-x-full before:bg-white before:transition-transform before:duration-500 before:ease-complex hover:before:translate-x-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red focus-visible:before:translate-x-0 max-[760px]:min-h-0 max-[760px]:grid-cols-[1fr_34px] max-[760px]:gap-[7px] max-[760px]:py-[22px]"
            >
              <strong className="relative z-[1] text-lg tracking-[-.02em] transition-transform duration-500 group-hover:translate-x-[14px] max-[760px]:col-start-1">
                {job.title}
              </strong>
              {[
                job.location,
                job.sectorLabel,
                job.employmentTypeLabel,
                job.pay,
              ].map((x, i) => (
                <span
                  className="relative z-[1] text-[11px] text-[#59656b] transition-transform duration-500 group-hover:translate-x-2 max-[760px]:col-start-1"
                  key={i}
                >
                  {x ?? "—"}
                </span>
              ))}
              <ArrowIcon className="relative z-[1] text-lg text-brand-red transition-transform group-hover:translate-x-[5px] group-hover:-translate-y-1.5 max-[760px]:col-start-2 max-[760px]:row-start-1 max-[760px]:row-end-6" />
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-6 border border-line bg-white p-6">
            <p role="status" className="mt-0 text-sm text-muted">
              {unavailable
                ? "Current vacancies are temporarily unavailable. Please check back shortly, or register your interest."
                : "No matching roles right now. Try changing your filters or register your interest."}
            </p>
            <ButtonLink href="#register-interest">
              Register your interest
            </ButtonLink>
          </div>
        )}
        <div className="mt-[38px] flex justify-end">
          <ButtonLink href="/jobs" variant="dark">
            View All Jobs
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
