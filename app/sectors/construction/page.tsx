import { ConstructionRoleExplorer } from '../../../components/ConstructionRoleExplorer';
import { Footer } from '../../../components/layout/Footer';
import { CompactSectorHero } from '../../../components/sectors/CompactSectorHero';
import { SectorOverview } from '../../../components/sectors/SectorOverview';
import { SectorIntentPanel } from '../../../components/sectors/SectorIntentPanel';
import type { SectorEnquiryConfig } from '../../../components/sectors/SectorEnquiryForm';
import { SectorOpportunities, SectorCandidateValue, SectorReadiness } from '../../../components/sectors/SectorCandidateSections';
import { jobsForSector } from '../../../lib/public-jobs';
import { getPublicJobs } from '../../../lib/public-jobs.server';
import { SectorDualCta, SectorProcess, SectorRoles, SectorService } from '../../../components/sectors/SectorSections';

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const employer: SectorEnquiryConfig = {
  sourcePage: "/sectors/construction",
  sector: "Construction & Engineering",
  "intent": "I need site staff",
  "title": "Staff a site",
  "support": "Tell us the trade, the ticket and the start date — we'll line up carded workers fast.",
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

export default async function ConstructionPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'construction');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Construction & Engineering" description="Carded and ticketed trades, plant and engineering personnel for sites and projects across London and nationwide." images={['https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=2200','https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=2200']} positions={['center 48%','center 44%']} />
    <SectorOverview title="Construction recruitment built around the site requirement" copy="We support construction and engineering requirements across civils, fit-out, maintenance and project work. Where a role requires specific cards, tickets or qualifications, these are matched to the requirement as part of the screening process." roles={["CSCS labourers", "Groundworkers", "Plant operators (CPCS)", "Telehandler & dumper", "Steel fixers", "Formwork carpenters", "Site engineers", "Site managers & supervisors", "Mechanical & electrical (M&E)", "Maintenance engineers", "Fabricators & welders", "Traffic marshals / banksmen"]} shortName="Construction" jobsId="construction-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Construction & Engineering" shortName="Construction" employer={employer} /></SectorOverview>
    <SectorReadiness label="SITE-READY AND COMPLIANT" points={[["Cards & tickets", "CSCS, CPCS and other role-specific cards or qualifications are checked where the assignment requires them."], ["Right to Work & onboarding", "Right to Work and client-specific onboarding requirements are completed before placement."], ["Flexible mobilisation", "Support for short-term cover, project-length assignments and longer-term construction or engineering requirements."]]} details={["Support for public-sector bodies, consultancies, contractors and specialist subcontractors", "Same- and next-day requirements supported where possible", "Previous-work screening where required", "Site and role expectations communicated before start", "Assignment information and reporting procedures confirmed", "Ongoing performance, welfare and service support"]} />
    <div id="job-categories" className="scroll-mt-[92px]"><SectorRoles label="CONSTRUCTION JOB CATEGORIES" title={<>From skilled trades<br/><em>to plant and site teams.</em></>} copy="Explore the labour, trade, plant and site-support categories Complex recruits across construction projects."><ConstructionRoleExplorer /></SectorRoles></div>
    <SectorOpportunities id="construction-jobs" shortName="Construction" jobs={sectorJobs} />
    <SectorCandidateValue />
    <SectorService title={<>Support across<br/><em>the project.</em></>} copy="Complex’s construction service model combines staffing with ongoing workforce and account support." items={serviceItems} />
    <SectorProcess label="FROM REQUIREMENT TO SITE" title={<>Built around the pace<br/><em>of construction.</em></>} steps={[["01","Brief us","Trade, qualification, site, numbers and start date."],["02","Source & verify","Suitable workers are matched and required documentation is checked."],["03","Confirm & mobilise","Workers receive assignment details and are prepared for site."],["04","Stay involved","Complex supports attendance, welfare, performance and service information."]]} />
    <SectorDualCta employer={{ label:'FOR EMPLOYERS', title:'I need construction staff.', copy:'Tell us the trade, project, numbers and timing. We’ll take it from there.', action:'Request Staff', href:'/request-staff' }} candidate={{ label:'FOR CANDIDATES', title:'I’m looking for construction work.', copy:'Explore current labour, trade and site opportunities.', action:'Find Construction Jobs', href:'/jobs' }} />
    <Footer />
  </main>;
}
