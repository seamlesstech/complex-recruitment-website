import { IndustrialRoleExplorer } from '../../../components/IndustrialRoleExplorer';
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
  sourcePage: "/sectors/industrial",
  sector: "Industrial & Warehouse",
  "intent": "I need staff",
  "title": "Staff a shift",
  "support": "Day, night or weekend — tell us the numbers and we'll build the team.",
  "action": "Request a Team",
  "fields": [
    {
      "name": "role",
      "label": "Role",
      "options": [
        "Warehouse operative",
        "FLT driver",
        "Loader",
        "Production"
      ]
    },
    {
      "name": "headcount",
      "label": "Headcount",
      "type": "number"
    },
    {
      "name": "shiftPattern",
      "label": "Shift pattern",
      "placeholder": "e.g. nights, 6pm–6am"
    },
    {
      "name": "location",
      "label": "Location",
      "placeholder": "Site postcode or location"
    }
  ]
};

const serviceItems = ['Daily check-in confirmation','Management of rotas','Weekly onsite staff welfare sessions','Training workshops','Weekly management information','Monthly compliance log','Worker performance reviews','Buddy system'];

export default async function IndustrialPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'industrial');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Industrial & Warehouse" description="Reliable people for warehouse, distribution, fulfilment and production environments — from individual vacancies to larger-volume requirements." images={['https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=2200','https://images.pexels.com/photos/6169669/pexels-photo-6169669.jpeg?auto=compress&cs=tinysrgb&w=2200']} positions={['center 52%','center 42%']} />
    <SectorOverview title="Reliable people for busy operational environments" copy="We support warehouses and industrial operations with flexible staffing for peaks, absence, seasonal demand, new contracts and ongoing requirements. Before recruitment begins, we aim to understand the shift pattern, headcount, site environment, experience level and any equipment or onboarding requirements." roles={["Warehouse operatives", "Pickers & packers", "FLT — counterbalance", "FLT — reach", "FLT — VNA / PPT", "Loaders & unloaders", "Production operatives", "Goods-in / goods-out", "Removals porters", "Cleaners & labourers"]} shortName="Industrial" jobsId="industrial-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Industrial & Warehouse" shortName="Industrial" employer={employer} /></SectorOverview>
    <SectorReadiness label="SET UP FOR BUSY SITES" points={[["Volume recruitment", "Structured sourcing, screening, registration and onboarding support for larger or recurring workforce requirements."], ["FLT & equipment checks", "Relevant FLT or equipment certification is reviewed and recorded where required by the assignment."], ["Built around your site", "We recruit against the actual shift, environment and expectations of the operation rather than a generic job title."]]} details={["Dedicated account management and 24/7 response for changing requirements", "Temporary, ad-hoc and permanent recruitment for operational and supervisory roles", "Pre-screening for suitability and relevant work history", "Eligibility and role-specific compliance checks", "Site and role-specific assignment overview", "Performance reviews and upskilling support", "Management information around productivity, fulfilment and retention"]} />
    <div id="job-categories" className="scroll-mt-[92px]"><SectorRoles label="INDUSTRIAL JOB CATEGORIES" title={<>From warehouse teams<br/><em>to operational support.</em></>} copy="Explore the kinds of warehouse, logistics, material-handling and production roles supported by the Industrial division."><IndustrialRoleExplorer /></SectorRoles></div>
    <SectorOpportunities id="industrial-jobs" shortName="Industrial" jobs={sectorJobs} />
    <SectorCandidateValue />
    <SectorService title={<>Support beyond<br/><em>the first shift.</em></>} copy="Complex’s Industrial service model combines workforce supply with practical account support throughout the assignment." items={serviceItems} />
    <SectorProcess label="FROM REQUIREMENT TO WORKFORCE" title={<>Built around changing<br/><em>operational demand.</em></>} steps={[["01","Brief us","Role, location, shift, numbers and timing."],["02","Match & prepare","Suitable workers are identified, checked and briefed."],["03","Deploy","Assignments are confirmed and attendance is supported."],["04","Stay involved","Complex manages communication, welfare and service information."]]} />
    <SectorDualCta employer={{ label:'FOR EMPLOYERS', title:'I need industrial staff.', copy:'Tell us the role, shift, numbers and timing. We’ll take it from there.', action:'Request Staff', href:'/request-staff' }} candidate={{ label:'FOR CANDIDATES', title:'I’m looking for industrial work.', copy:'Explore warehouse, logistics and production opportunities.', action:'Find Industrial Jobs', href:'/jobs' }} />
    <Footer />
  </main>;
}
