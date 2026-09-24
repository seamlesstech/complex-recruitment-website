import 'server-only';

import { z } from 'zod';

/**
 * Strict request schemas for the public intake endpoints. Every object is a
 * `strictObject`, so unknown keys (status, owner_id, reference, employer_id,
 * converted_*, candidate/job ids…) are rejected outright rather than ignored.
 */

// ---------------------------------------------------------------------------
// Field builders
// ---------------------------------------------------------------------------

const requiredText = (label: string, max: number) =>
  z.string({ error: `${label} is required.` }).trim().min(1, `${label} is required.`).max(max, `${label} must be ${max} characters or fewer.`);

const optionalText = (label: string, max: number) =>
  z.string().trim().max(max, `${label} must be ${max} characters or fewer.`).optional().default('');

const fullName = requiredText('Full name', 120);

const email = z
  .string({ error: 'Email is required.' })
  .trim()
  .min(1, 'Email is required.')
  .max(254, 'Enter a valid email address.')
  .pipe(z.email('Enter a valid email address.'));

const PHONE_PATTERN = /^[0-9+()\-\s.]{7,40}$/;
const requiredPhone = z
  .string({ error: 'Phone number is required.' })
  .trim()
  .min(1, 'Phone number is required.')
  .regex(PHONE_PATTERN, 'Enter a valid phone number.');
const optionalPhone = z
  .string()
  .trim()
  .refine(value => value === '' || PHONE_PATTERN.test(value), 'Enter a valid phone number.')
  .optional()
  .default('');

const consent = z.literal(true, { error: 'Please confirm you agree before submitting.' });

const optionalChoice = <T extends readonly [string, ...string[]]>(options: T) =>
  z.union([z.literal(''), z.enum(options)], { error: 'Select one of the listed options.' }).optional().default('');

const optionalDate = z
  .union([z.literal(''), z.iso.date('Enter a valid date.')], { error: 'Enter a valid date.' })
  .optional()
  .default('');

// ---------------------------------------------------------------------------
// Option lists (mirror the public forms exactly)
// ---------------------------------------------------------------------------

const EMPLOYER_SECTORS = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support'] as const;
const CANDIDATE_SECTORS = [...EMPLOYER_SECTORS, 'Open to anything'] as const;
const AVAILABILITY = ['Immediately', 'Within 1 week', 'Within 1 month', 'Just exploring'] as const;
const WORK_PREFERENCES = ['Temporary / ad-hoc', 'Permanent', 'Either'] as const;
const ASSIGNMENT_TYPES = ['Temporary', 'Ad-hoc', 'Temp-to-perm', 'Permanent', 'High-volume', 'Not sure'] as const;
export const CONTACT_CATEGORIES = ['General', 'Accounts', 'HR', 'Timesheets'] as const;

/** Sector pages that host a SectorEnquiryForm, and the sector each one is for. */
const SECTOR_PAGES = {
  '/sectors/driving': 'Driving & Transport',
  '/sectors/industrial': 'Industrial & Warehouse',
  '/sectors/construction': 'Construction & Engineering',
  '/sectors/business-operational-support': 'Business & Operational Support',
} as const;

// ---------------------------------------------------------------------------
// Application
// ---------------------------------------------------------------------------

export const applicationSchema = z.strictObject({
  jobReference: z.string().trim().regex(/^JOB-\d{4,}$/, 'This job reference is not valid.'),
  fullName,
  email,
  phone: requiredPhone,
  postcode: optionalText('Postcode', 20),
  message: optionalText('Message', 2000),
  consent,
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

// ---------------------------------------------------------------------------
// Enquiries
// ---------------------------------------------------------------------------

const contactSchema = z.strictObject({
  kind: z.literal('contact'),
  fullName,
  email,
  phone: optionalPhone,
  category: z.enum(CONTACT_CATEGORIES, { error: 'Select an enquiry type.' }),
  message: requiredText('Message', 4000),
});

const candidateInterestSchema = z.strictObject({
  kind: z.literal('candidate_interest'),
  sector: z.enum(CANDIDATE_SECTORS, { error: 'Select the kind of work you are looking for.' }),
  roles: requiredText('Role(s) you’re interested in', 300),
  preferredLocation: optionalText('Preferred location', 120),
  availability: optionalChoice(AVAILABILITY),
  workPreference: optionalChoice(WORK_PREFERENCES),
  fullName,
  phone: requiredPhone,
  email,
  postcode: optionalText('Postcode', 20),
  message: optionalText('Message', 2000),
  consent,
});

const staffingRequestSchema = z.strictObject({
  kind: z.literal('staffing_request'),
  sector: z.enum(EMPLOYER_SECTORS, { error: 'Select a sector.' }),
  role: requiredText('Role required', 160),
  headcount: z.coerce.number({ error: 'Enter how many people you need.' }).int('Enter a whole number.').min(1, 'Enter at least 1.').max(10000, 'Enter a number up to 10,000.'),
  assignmentType: z.enum(ASSIGNMENT_TYPES, { error: 'Select a requirement type.' }),
  location: requiredText('Location / postcode', 160),
  startDate: optionalDate,
  shift: optionalText('Shift / working pattern', 200),
  duration: optionalText('Duration', 120),
  notes: optionalText('Notes', 3000),
  fullName,
  company: requiredText('Company', 160),
  email,
  phone: requiredPhone,
  consent,
});

const REQUIREMENT_KEY = /^[a-zA-Z][a-zA-Z0-9]{0,40}$/;
const requirementValue = z.union([z.string().trim().max(2000, 'This answer is too long.'), z.number().int().min(1).max(10000)]);

const sectorStaffingSchema = z
  .strictObject({
    kind: z.literal('sector_staffing'),
    request: z.strictObject({
      source: z.literal('sector_page'),
      sourcePage: z.enum(Object.keys(SECTOR_PAGES) as [keyof typeof SECTOR_PAGES, ...(keyof typeof SECTOR_PAGES)[]]),
      sector: z.enum(EMPLOYER_SECTORS),
      requirement: z
        .record(
          z.string().regex(REQUIREMENT_KEY),
          z.union([requirementValue, z.record(z.string().regex(REQUIREMENT_KEY), z.string().trim().max(2000)).refine(value => Object.keys(value).length <= 20)]),
        )
        .refine(value => Object.keys(value).length <= 25, 'Too many fields.'),
      requester: z.strictObject({
        fullName,
        company: requiredText('Company', 160),
        email,
        phone: requiredPhone,
      }),
    }),
    fieldLabels: z.record(z.string().regex(REQUIREMENT_KEY), z.string().trim().max(80)).refine(value => Object.keys(value).length <= 25),
  })
  .refine(value => SECTOR_PAGES[value.request.sourcePage] === value.request.sector, {
    message: 'This request does not match its sector page.',
    path: ['request', 'sector'],
  })
  .refine(value => typeof value.request.requirement.role === 'string' && value.request.requirement.role.trim() !== '', {
    message: 'This field is required.',
    path: ['request', 'requirement', 'role'],
  });

export const enquirySchema = z.discriminatedUnion('kind', [
  contactSchema,
  candidateInterestSchema,
  staffingRequestSchema,
  sectorStaffingSchema,
]);

export type EnquiryInput = z.infer<typeof enquirySchema>;

// ---------------------------------------------------------------------------
// Enquiry row mapping (server-controlled; see route handler)
// ---------------------------------------------------------------------------

export type EnquiryType = 'employer' | 'candidate' | 'general';

export type EnquiryDraft = {
  type: EnquiryType;
  contact_name: string;
  email: string;
  phone: string | null;
  company_free_text: string | null;
  subject: string;
  message: string;
};

type Section = [label: string, value: string | number | null | undefined];

/** Human-readable "Label:\nvalue" blocks; empty values are left out. */
function sections(items: Section[]): string {
  return items
    .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== '')
    .map(([label, value]) => `${label}:\n${String(value).trim()}`)
    .join('\n\n');
}

function formatDate(value: string): string {
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function humanise(key: string): string {
  const spaced = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

const nullIfBlank = (value: string) => (value.trim() === '' ? null : value.trim());

export function toEnquiryDraft(input: EnquiryInput): EnquiryDraft {
  switch (input.kind) {
    case 'contact':
      return {
        type: 'general',
        contact_name: input.fullName,
        email: input.email,
        phone: nullIfBlank(input.phone),
        company_free_text: null,
        subject: `${input.category} enquiry`,
        message: sections([
          ['Enquiry category', input.category],
          ['Message', input.message],
          ['Submitted from', 'Website contact form (/contact)'],
        ]),
      };

    case 'candidate_interest':
      return {
        type: 'candidate',
        contact_name: input.fullName,
        email: input.email,
        phone: nullIfBlank(input.phone),
        company_free_text: null,
        subject: 'Candidate registration of interest',
        message: sections([
          ['Sector interest', input.sector],
          ['Roles of interest', input.roles],
          ['Preferred location', input.preferredLocation],
          ['Availability', input.availability],
          ['Work preference', input.workPreference],
          ['Home postcode', input.postcode],
          ['Candidate message', input.message],
          ['Submitted from', 'Website Register Interest form'],
        ]),
      };

    case 'staffing_request':
      return {
        type: 'employer',
        contact_name: input.fullName,
        email: input.email,
        phone: nullIfBlank(input.phone),
        company_free_text: input.company,
        subject: `Staffing request: ${input.headcount} × ${input.role} (${input.sector})`,
        message: sections([
          ['Sector', input.sector],
          ['Role required', input.role],
          ['Number of people', input.headcount],
          ['Requirement type', input.assignmentType],
          ['Location / postcode', input.location],
          ['Required start date', input.startDate ? formatDate(input.startDate) : ''],
          ['Shift / working pattern', input.shift],
          ['Duration', input.duration],
          ['Additional notes', input.notes],
          ['Submitted from', 'Website Request Staff form (/request-staff)'],
        ]),
      };

    case 'sector_staffing': {
      const { request, fieldLabels } = input;
      const { sectorSpecific, ...requirement } = request.requirement;
      const label = (key: string) => fieldLabels[key] ?? humanise(key);
      const rows: Section[] = Object.entries(requirement).map(([key, value]) => {
        if (typeof value === 'object') return [label(key), null];
        const text = String(value);
        return [label(key), /^\d{4}-\d{2}-\d{2}$/.test(text) ? formatDate(text) : text];
      });
      if (sectorSpecific && typeof sectorSpecific === 'object') {
        for (const [key, value] of Object.entries(sectorSpecific)) rows.push([label(key), value]);
      }
      const role = typeof requirement.role === 'string' && requirement.role.trim() ? requirement.role.trim() : null;
      return {
        type: 'employer',
        contact_name: request.requester.fullName,
        email: request.requester.email,
        phone: nullIfBlank(request.requester.phone),
        company_free_text: request.requester.company,
        subject: `${request.sector} staffing enquiry${role ? `: ${role}` : ''}`,
        message: sections([
          ['Sector', request.sector],
          ...rows,
          ['Submitted from', `Website sector page (${request.sourcePage})`],
        ]),
      };
    }
  }
}
