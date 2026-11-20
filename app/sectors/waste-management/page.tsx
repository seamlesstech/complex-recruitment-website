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

export const metadata: Metadata = {
  title: 'Waste Management Recruitment London | Complex Recruitment',
  description: 'Loaders, HGV refuse drivers, recycling and street cleansing operatives. Temporary and permanent waste management staffing from Complex Recruitment.',
  openGraph: {
    title: 'Waste Management Recruitment London | Complex Recruitment',
    description: 'Loaders, HGV refuse drivers, recycling and street cleansing operatives. Temporary and permanent waste management staffing from Complex Recruitment.',
  },
};

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const employer: SectorEnquiryConfig = {
  sourcePage: '/sectors/waste-management',
  sector: 'Waste Management',
  intent: 'I need staff',
  title: 'Staff a round',
  support: 'Tell us the role, numbers and shift pattern and we’ll build the team.',
  action: 'Request a Team',
  fields: [
    {
      name: 'role',
      label: 'Role',
      options: ['Refuse or recycling loader', 'Waste collection operative', 'HGV refuse driver', 'Recycling operative', 'Yard or transfer station operative', 'Street cleansing operative', 'Supervisor or team leader', 'Other role'],
    },
    { name: 'headcount', label: 'Headcount', type: 'number' },
    { name: 'shiftPattern', label: 'Shift pattern', placeholder: 'e.g. early starts, Monday to Friday' },
    { name: 'location', label: 'Location', placeholder: 'Depot or site postcode' },
  ],
};

const operations = [
  ['Collections', 'Domestic, commercial and recycling rounds, with loaders, collection operatives and HGV refuse drivers.'],
  ['Recycling and processing', 'Sorting, processing and materials recovery sites that need reliable operatives on fixed shifts.'],
  ['Yards and transfer stations', 'Yard, loading and transfer station operatives, with supervisors for larger sites.'],
  ['Street cleansing', 'Sweeping, litter and public realm teams for contracts, events and seasonal peaks.'],
] as const;

const serviceItems = ['Cover for absence and holidays', 'Peak and seasonal demand', 'Temp-to-perm and permanent hires', 'Drivers and crews matched to the round', 'Checks completed before placement', 'A single point of contact for changes'];

export default async function WasteManagementPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'waste');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Waste Management" description="Collection crews, drivers and site operatives for waste, recycling and street cleansing operations, from daily rounds to seasonal peaks." images={['/waste-management-hero.jpg', '/waste-management-operative.jpg']} positions={['center 42%', 'center 55%']} />
    <SectorOverview title="Crews that turn up and keep rounds on time" copy="Waste and recycling operations run on early starts, fixed rounds and teams that can be relied on. We supply temporary, ad-hoc and permanent staff for collection, processing and street cleansing work, matched to the shift, the vehicle and the site." roles={['Refuse and recycling loaders', 'Waste collection operatives', 'HGV refuse drivers', 'Recycling operatives', 'Yard and transfer station operatives', 'Street cleansing operatives', 'Supervisors and team leaders', 'Operational support roles']} shortName="Waste Management" jobsId="waste-management-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Waste Management" shortName="Waste Management" employer={employer} /></SectorOverview>
    <section id="job-categories" className="scroll-mt-[92px] bg-surface py-16 max-[760px]:py-12">
      <Container>
        <SectionLabel>WHERE WE SUPPORT</SectionLabel>
        <h2 className="mt-7 max-w-[960px] text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.04] tracking-[-.045em]">From the kerbside to the depot.</h2>
        <div className="mt-10 grid grid-cols-4 border-l border-t border-line max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {operations.map(([title, copy], index) => <article key={title} className="group min-h-[220px] border-b border-r border-line bg-white p-6 transition-colors duration-300 hover:bg-surface">
            <span className="text-[8px] font-extrabold text-brand-red">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mb-3 mt-10 text-xl font-semibold leading-[1.12] tracking-[-.025em]">{title}</h3>
            <p className="m-0 text-sm leading-[1.7] text-muted">{copy}</p>
          </article>)}
        </div>
      </Container>
    </section>
    <SectorOpportunities id="waste-management-jobs" shortName="Waste Management" jobs={sectorJobs} />
    <SectorService title={<>Staffing that keeps<br/><em>rounds running.</em></>} copy="Practical support from the first brief to ongoing cover, built around the shifts and sites you run." items={serviceItems} />
    <SectorDualCta employer={{ label: 'FOR EMPLOYERS', title: 'I need waste staff.', copy: 'Tell us the role, shift, numbers and site. We’ll take it from there.', action: 'Request Staff', href: '/request-staff' }} candidate={{ label: 'FOR CANDIDATES', title: 'I’m looking for waste work.', copy: 'Explore collection, recycling and street cleansing roles.', action: 'Find Waste Jobs', href: '/jobs' }} />
    <Footer />
  </main>;
}
