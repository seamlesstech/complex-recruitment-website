/**
 * Website-facing Job model, mapped from the database's allow-listed `public_jobs`
 * view. Pure types + formatting only (safe to import from Client Components); the
 * actual read lives in `public-jobs.server.ts`.
 *
 * Nothing here invents values: a field the database leaves empty stays null and
 * the UI omits it or shows a restrained fallback.
 */

export type DbEmploymentType = 'temporary' | 'permanent' | 'contract';
export type DbWorkPattern = 'full_time' | 'part_time' | 'shift_work' | 'nights' | 'weekends' | 'flexible';
export type DbWorkplaceType = 'on_site' | 'hybrid' | 'remote';
export type DbPayType = 'hourly' | 'daily' | 'annual_salary' | 'negotiable';

/** Exact column list of `public.public_jobs` (see admin repo migrations). */
export type PublicJobRow = {
  reference: string;
  title: string;
  sector: string | null;
  location: string | null;
  workplace_type: DbWorkplaceType | null;
  employment_type: DbEmploymentType | null;
  work_pattern: DbWorkPattern | null;
  pay_type: DbPayType | null;
  pay_display: string | null;
  vacancies_count: number | null;
  summary: string | null;
  description: string | null;
  responsibilities: string | null;
  requirements: string | null;
  benefits: string | null;
  application_instructions: string | null;
  closing_date: string | null;
};

export const PUBLIC_JOB_COLUMNS =
  'reference, title, sector, location, workplace_type, employment_type, work_pattern, pay_type, pay_display, vacancies_count, summary, description, responsibilities, requirements, benefits, application_instructions, closing_date';

export type PublicJob = {
  reference: string;
  href: string;
  title: string;
  /** Canonical database sector name, used for filtering. */
  dbSector: string | null;
  /** Public website sector-family label (see WEBSITE_SECTORS), for display. */
  sectorLabel: string | null;
  location: string | null;
  workplaceLabel: string | null;
  employmentType: DbEmploymentType | null;
  employmentTypeLabel: string | null;
  workPatternLabel: string | null;
  /** Fully formatted pay, e.g. "£19.00–£22.00 / hour"; null when not specified. */
  pay: string | null;
  vacancies: number | null;
  summary: string | null;
  description: string | null;
  responsibilities: string | null;
  requirements: string | null;
  benefits: string | null;
  applicationInstructions: string | null;
  closingDate: string | null;
  closingDateLabel: string | null;
};

/** Result of a live read: a failed read must never masquerade as "no vacancies". */
export type PublicJobsResult = { ok: true; jobs: PublicJob[] } | { ok: false; jobs: [] };

// ---------------------------------------------------------------------------
// Sector mapping (explicit)
// ---------------------------------------------------------------------------

export type WebsiteSectorKey = 'driving' | 'industrial' | 'construction' | 'business';

/**
 * Website sector families -> canonical database sectors (`sectors.name`). All
 * four are real sectors. Only the website label differs for Construction, which
 * the site presents as "Construction & Engineering".
 */
export const WEBSITE_SECTORS: Record<WebsiteSectorKey, { label: string; dbSector: string }> = {
  driving: { label: 'Driving & Transport', dbSector: 'Driving & Transport' },
  industrial: { label: 'Industrial & Warehouse', dbSector: 'Industrial & Warehouse' },
  construction: { label: 'Construction & Engineering', dbSector: 'Construction' },
  business: { label: 'Business & Operational Support', dbSector: 'Business & Operational Support' },
};

/** Sector families offered as job-board filters. */
export const FILTERABLE_SECTORS = Object.values(WEBSITE_SECTORS);

function sectorLabelFor(dbSector: string | null): string | null {
  if (!dbSector) return null;
  return FILTERABLE_SECTORS.find(sector => sector.dbSector === dbSector)?.label ?? dbSector;
}

export function jobsForSector(jobs: PublicJob[], key: WebsiteSectorKey): PublicJob[] {
  const { dbSector } = WEBSITE_SECTORS[key];
  return jobs.filter(job => job.dbSector === dbSector);
}

// ---------------------------------------------------------------------------
// Enum labels
// ---------------------------------------------------------------------------

export const EMPLOYMENT_TYPE_LABELS: Record<DbEmploymentType, string> = {
  temporary: 'Temporary',
  permanent: 'Permanent',
  contract: 'Contract',
};

export const EMPLOYMENT_TYPES = Object.keys(EMPLOYMENT_TYPE_LABELS) as DbEmploymentType[];

const WORK_PATTERN_LABELS: Record<DbWorkPattern, string> = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  shift_work: 'Shift work',
  nights: 'Nights',
  weekends: 'Weekends',
  flexible: 'Flexible',
};

const WORKPLACE_LABELS: Record<DbWorkplaceType, string> = {
  on_site: 'On-site',
  hybrid: 'Hybrid',
  remote: 'Remote',
};

// ---------------------------------------------------------------------------
// Pay
// ---------------------------------------------------------------------------

/**
 * The schema has no currency column; the business and the admin app are GBP-only
 * (admin formats pay as £), so £ is the correct symbol, not an invented one.
 */
const PAY_UNITS: Partial<Record<DbPayType, string>> = {
  hourly: ' / hour',
  daily: ' / day',
  annual_salary: ' / year',
};

function formatAmount(value: number, wholePounds: boolean): string {
  return `£${value.toLocaleString('en-GB', {
    minimumFractionDigits: wholePounds ? 0 : 2,
    maximumFractionDigits: wholePounds ? 0 : 2,
  })}`;
}

/**
 * Combines the view's `pay_display` ("19.00 - 22.00", "32,000.00", "Negotiable",
 * or null) with `pay_type` into one readable string:
 *   "£19.00–£22.00 / hour", "£160.00 / day", "£32,000 / year", "Negotiable".
 * Returns null when no pay is specified. An unexpected format is shown as-is
 * rather than guessed at.
 */
export function formatPublicPay(payDisplay: string | null, payType: DbPayType | null): string | null {
  if (payType === 'negotiable') return 'Negotiable';
  const display = payDisplay?.trim();
  if (!display) return null;
  if (display === 'Negotiable') return display;

  const values = display.split(' - ').map(part => Number(part.replace(/,/g, '')));
  if (values.length > 2 || values.some(value => !Number.isFinite(value))) return display;

  // Whole-pound salaries read as "£32,000"; hourly/daily rates keep pence.
  const wholePounds = payType === 'annual_salary' && values.every(value => Number.isInteger(value));
  const unit = payType ? PAY_UNITS[payType] ?? '' : '';
  return `${values.map(value => formatAmount(value, wholePounds)).join('–')}${unit}`;
}

// ---------------------------------------------------------------------------
// Row -> model
// ---------------------------------------------------------------------------

/** Public route for a Job: the stable Postgres reference, e.g. /jobs/JOB-0001. */
export function jobHref(reference: string): string {
  return `/jobs/${encodeURIComponent(reference)}`;
}

/** Shape of a JOB- reference; anything else is not looked up at all. */
export const JOB_REFERENCE_PATTERN = /^JOB-\d{4,}$/;

function clean(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function formatClosingDate(date: string | null): string | null {
  if (!date) return null;
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function toPublicJob(row: PublicJobRow): PublicJob {
  const dbSector = clean(row.sector);
  return {
    reference: row.reference,
    href: jobHref(row.reference),
    title: row.title,
    dbSector,
    sectorLabel: sectorLabelFor(dbSector),
    location: clean(row.location),
    workplaceLabel: row.workplace_type ? WORKPLACE_LABELS[row.workplace_type] ?? null : null,
    employmentType: row.employment_type,
    employmentTypeLabel: row.employment_type ? EMPLOYMENT_TYPE_LABELS[row.employment_type] ?? null : null,
    workPatternLabel: row.work_pattern ? WORK_PATTERN_LABELS[row.work_pattern] ?? null : null,
    pay: formatPublicPay(row.pay_display, row.pay_type),
    vacancies: row.vacancies_count,
    summary: clean(row.summary),
    description: clean(row.description),
    responsibilities: clean(row.responsibilities),
    requirements: clean(row.requirements),
    benefits: clean(row.benefits),
    applicationInstructions: clean(row.application_instructions),
    closingDate: row.closing_date,
    closingDateLabel: formatClosingDate(row.closing_date),
  };
}
