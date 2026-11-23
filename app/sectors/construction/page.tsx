import { pageMetadata } from '../../../lib/seo';
import { ConstructionRoleExplorer } from '../../../components/ConstructionRoleExplorer';
import { Footer } from '../../../components/layout/Footer';
import { CompactSectorHero } from '../../../components/sectors/CompactSectorHero';
import { SectorOverview } from '../../../components/sectors/SectorOverview';
import { SectorIntentPanel } from '../../../components/sectors/SectorIntentPanel';
import type { SectorEnquiryConfig } from '../../../components/sectors/SectorEnquiryForm';
import { SectorOpportunities, SectorCandidateValue, SectorReadiness } from '../../../components/sectors/SectorCandidateSections';
import { jobsForSector, jobsHrefForSector } from '../../../lib/public-jobs';
import { getPublicJobs } from '../../../lib/public-jobs.server';
import { SectorDualCta, SectorProcess, SectorRoles, SectorService } from '../../../components/sectors/SectorSections';

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const employer: SectorEnquiryConfig = {
  sourcePage: "/sectors/construction",
  sector: "Construction & Engineering",
  "intent": "I need site staff",
  "title": "Staff a site",
  "support": "Tell us the trade, the ticket and the start date, and we’ll line up carded workers fast.",
  "action": "Request Site Staff",
  "fields": [
    {
      "name": "role",
      "label": "Trade / role",
      "options": [
        "CSCS labourer",
        "Groundworker",
        "Plant operator (CPCS)",
        "Site engineer",
        "M&E engineer"
      ]
    },
    {
      "name": "headcount",
      "label": "Headcount",
      "type": "number"
    },
    {
      "name": "postcode",
      requestKey: "location",
      "label": "Site postcode"
    },
    {
      "name": "startDate",
      "label": "Start date",
      "type": "date"
    }
  ]
};

const serviceItems = ['Daily check-in confirmation','Management of rotas','Weekly onsite staff welfare sessions','Training workshops','Weekly management information','Monthly compliance log','Worker performance reviews','Buddy system'];

export const metadata = pageMetadata('Construction & Engineering Recruitment London | Complex Recruitment', "Carded and ticketed trades, plant, labour and engineering personnel for sites and projects.");

export default async function ConstructionPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'construction');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Construction & Engineering" description="Carded and ticketed trades, plant and engineering personnel for sites and projects across West, Northwest and North London." images={['/stock/construction-workers-reviewing-plans.jpg','/stock/site-worker-hard-hat.jpg']} positions={['center 48%','center 44%']} />
    <SectorOverview title="Construction recruitment built around the site requirement" copy="We support construction and engineering requirements across civils, fit-out, maintenance and project work. Where a role requires specific cards, tickets or qualifications, these are matched to the requirement as part of the screening process." roles={["CSCS labourers", "Groundworkers", "Plant operators (CPCS)", "Telehandler & dumper", "Steel fixers", "Formwork carpenters", "Site engineers", "Site managers & supervisors", "Mechanical & electrical (M&E)", "Maintenance engineers", "Fabricators & welders", "Traffic marshals / banksmen"]} shortName="Construction" jobsId="construction-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Construction & Engineering" shortName="Construction" jobsHref={jobsHrefForSector('construction')} employer={employer} /></SectorOverview>
    <SectorReadiness label="SITE-READY AND COMPLIANT" points={[["Cards & tickets", "CSCS, CPCS and other role-specific cards or qualifications are checked where the assignment requires them."], ["Right to Work & onboarding", "Right to Work and client-specific onboarding requirements are completed before placement."], ["Flexible mobilisation", "Support for short-term cover, project-length assignments and longer-term construction or engineering requirements."]]} details={["Support for public-sector bodies, consultancies, contractors and specialist subcontractors", "Same- and next-day requirements supported where possible", "Previous-work screening where required", "Site and role expectations communicated before start", "Assignment information and reporting procedures confirmed", "Ongoing performance, welfare and service support"]} />
    <div id="job-categories" className="scroll-mt-[92px]"><SectorRoles label="CONSTRUCTION JOB CATEGORIES" title={<>From skilled trades<br/><em>to plant and site teams.</em></>} copy="Explore the labour, trade, plant and site-support categories Complex recruits across construction projects."><ConstructionRoleExplorer /></SectorRoles></div>
    <SectorOpportunities id="construction-jobs" shortName="Construction" jobs={sectorJobs} jobsHref={jobsHrefForSector('construction')} />
    <SectorCandidateValue focus={['Site-ready support', 'Help with cards, tickets and onboarding where the role requires them.']} />
    <SectorService title={<>Support across<br/><em>the project.</em></>} copy="Staffing comes with ongoing workforce and account support." items={serviceItems} />
    <SectorProcess label="FROM REQUIREMENT TO SITE" title={<>Built around the pace<br/><em>of construction.</em></>} steps={[["01","Brief us","Trade, qualification, site, numbers and start date."],["02","Source & verify","Suitable workers are matched and required documentation is checked."],["03","Confirm & mobilise","Workers receive assignment details and are prepared for site."],["04","Stay involved","Complex supports attendance, welfare, performance and service information."]]} />
    <SectorDualCta employer={{ label:'FOR EMPLOYERS', title:'I need construction staff.', copy:'Tell us the trade, project, numbers and timing, and we’ll get back to you.', action:'Request Staff', href:'/request-staff' }} candidate={{ label:'FOR CANDIDATES', title:'I’m looking for construction work.', copy:'Explore current labour, trade and site opportunities.', action:'Find Construction Jobs', href:jobsHrefForSector('construction') }} />
    <Footer />
  </main>;
}
