import type { Metadata } from 'next';
import { Footer } from '../../../components/layout/Footer';
import { Container } from '../../../components/layout/Container';
import { SectionLabel } from '../../../components/SectionLabel';
import { CompactSectorHero } from '../../../components/sectors/CompactSectorHero';
import { SectorOverview } from '../../../components/sectors/SectorOverview';
import { SectorIntentPanel } from '../../../components/sectors/SectorIntentPanel';
import type { SectorEnquiryConfig } from '../../../components/sectors/SectorEnquiryForm';
import { SectorOpportunities } from '../../../components/sectors/SectorCandidateSections';
import { SectorDualCta, SectorService } from '../../../components/sectors/SectorSections';
import { jobsForSector } from '../../../lib/public-jobs';
import { getPublicJobs } from '../../../lib/public-jobs.server';

const SUMMARY = 'Drivers, draymen and warehouse teams for breweries, wholesalers and drinks distributors supplying pubs, bars and restaurants.';

export const metadata: Metadata = {
  title: 'Drinks Logistics Recruitment London | Complex Recruitment',
  description: SUMMARY,
  openGraph: {
    title: 'Drinks Logistics Recruitment London | Complex Recruitment',
    description: SUMMARY,
  },
};

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

/*
 * Page copy below is kept in plain data (no layout logic) so the approved Drinks
 * Logistics brief can replace it in one place. Only the hero/intro summary, the
 * role categories and the organisation types come from Thomas's brief.
 */
const employer: SectorEnquiryConfig = {
  sourcePage: '/sectors/drinks-logistics',
  sector: 'Drinks Logistics',
  intent: 'I need staff',
  title: 'Staff your deliveries',
  support: 'Tell us the role, numbers and shift pattern and we’ll build the team.',
  action: 'Request a Team',
  fields: [
    {
      name: 'role',
      label: 'Role',
      options: ['Driver', 'Drayman', 'Cellar delivery team member', 'Warehouse operative', 'FLT operative', 'Transport or logistics planner', 'Other role'],
    },
    { name: 'headcount', label: 'Headcount', type: 'number' },
    { name: 'shiftPattern', label: 'Shift pattern', placeholder: 'e.g. early starts, Monday to Friday' },
    { name: 'location', label: 'Location', placeholder: 'Depot or site postcode' },
  ],
};

const overview = {
  title: 'People who understand the pace of drinks distribution',
  copy: 'Complex supports drinks logistics operations with people for driving, delivery, warehouse and planning roles. From breweries and wholesalers to distributors supplying pubs, bars and restaurants, we focus on matching people to the role, shift and operation.',
  roles: ['Drivers', 'Draymen', 'Cellar delivery teams', 'Warehouse operatives', 'FLT operatives', 'Transport and logistics planning roles'],
};

const roleGroups = [
  ['Driving and delivery', 'Drivers, draymen and cellar delivery teams moving product from the depot to the customer.', ['Drivers', 'Draymen', 'Cellar delivery teams']],
  ['Warehouse and handling', 'Warehouse and FLT operatives for picking, loading and handling product on site.', ['Warehouse operatives', 'FLT operatives']],
  ['Planning', 'Transport and logistics planning roles that keep schedules and deliveries organised.', ['Transport and logistics planning']],
] as const;

const supportedOrganisations = [
  ['Breweries', 'Driving, delivery and warehouse support around getting product from site to customer.'],
  ['Wholesalers', 'Driving, warehouse and delivery support for wholesale drinks operations.'],
  ['Drinks distributors', 'Teams supporting scheduled deliveries to hospitality customers.'],
  ['Pubs, bars and restaurants', 'The customers drinks operations deliver to. Our focus is the delivery and warehouse teams that keep those supplies moving.'],
] as const;

const serviceItems = ['Cover for absence and holidays', 'Peak and seasonal demand', 'Temporary, temp-to-perm and permanent hires', 'People matched to the role, shift and operation', 'Clear communication on shift changes', 'A single point of contact'];

export default async function DrinksLogisticsPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'drinks');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Drinks Logistics" description={SUMMARY} images={['/drinks-logistics-hero.jpg', '/drinks-logistics-brewery.jpg']} positions={['70% 55%', 'center 45%']} />
    <SectorOverview title={overview.title} copy={overview.copy} roles={overview.roles} shortName="Drinks Logistics" jobsId="drinks-logistics-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Drinks Logistics" shortName="Drinks Logistics" employer={employer} /></SectorOverview>
    <section id="job-categories" className="scroll-mt-[92px] bg-surface py-16 max-[760px]:py-12">
      <Container>
        <SectionLabel>ROLES WE SUPPORT</SectionLabel>
        <h2 className="mt-7 max-w-[960px] text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.04] tracking-[-.045em]">Behind the wheel, on the dock and at the desk.</h2>
        <div className="mt-10 grid grid-cols-3 border-l border-t border-line max-[1000px]:grid-cols-1">
          {roleGroups.map(([title, copy, roles], index) => <article key={title} className="min-h-[260px] border-b border-r border-line bg-white p-6 transition-colors duration-300 hover:bg-surface">
            <span className="text-[8px] font-extrabold text-brand-red">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mb-3 mt-10 text-xl font-semibold leading-[1.12] tracking-[-.025em]">{title}</h3>
            <p className="m-0 text-sm leading-[1.7] text-muted">{copy}</p>
            <ul aria-label={`${title} roles`} className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">{roles.map(role => <li key={role} className="border border-line px-2 py-1 text-[10px] font-semibold uppercase tracking-[.08em] text-ink">{role}</li>)}</ul>
          </article>)}
        </div>
      </Container>
    </section>
    <section className="bg-white py-16 max-[760px]:py-12">
      <Container>
        <SectionLabel>WHERE WE SUPPORT</SectionLabel>
        <h2 className="mt-7 max-w-[960px] text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.04] tracking-[-.045em]">From the warehouse to the cellar door.</h2>
        <div className="mt-10 grid grid-cols-4 border-l border-t border-line max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {supportedOrganisations.map(([title, copy], index) => <article key={title} className="min-h-[220px] border-b border-r border-line bg-white p-6 transition-colors duration-300 hover:bg-surface">
            <span className="text-[8px] font-extrabold text-brand-red">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mb-3 mt-10 text-xl font-semibold leading-[1.12] tracking-[-.025em]">{title}</h3>
            <p className="m-0 text-sm leading-[1.7] text-muted">{copy}</p>
          </article>)}
        </div>
      </Container>
    </section>
    <SectorOpportunities id="drinks-logistics-jobs" shortName="Drinks Logistics" jobs={sectorJobs} />
    <SectorService title={<>Staffing that keeps<br/><em>deliveries moving.</em></>} copy="Practical support from the first brief to ongoing cover, built around the shifts and sites you run." items={serviceItems} />
    <SectorDualCta employer={{ label: 'FOR EMPLOYERS', title: 'I need drinks logistics staff.', copy: 'Tell us the role, shift, numbers and site. We’ll take it from there.', action: 'Request Staff', href: '/request-staff' }} candidate={{ label: 'FOR CANDIDATES', title: 'I’m looking for drinks logistics work.', copy: 'Explore driving, warehouse and delivery roles.', action: 'Find Drinks Logistics Jobs', href: '/jobs' }} />
    <Footer />
  </main>;
}
