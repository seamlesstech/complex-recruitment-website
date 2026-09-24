import { BusinessOperationalRoleExplorer } from '../../../components/BusinessOperationalRoleExplorer';
import { Footer } from '../../../components/layout/Footer';
import { CompactSectorHero } from '../../../components/sectors/CompactSectorHero';
import { SectorOverview } from '../../../components/sectors/SectorOverview';
import { SectorIntentPanel } from '../../../components/sectors/SectorIntentPanel';
import type { SectorEnquiryConfig } from '../../../components/sectors/SectorEnquiryForm';
import { SectorOpportunities, SectorCandidateValue } from '../../../components/sectors/SectorCandidateSections';
import { jobsForSector } from '../../../lib/public-jobs';
import { getPublicJobs } from '../../../lib/public-jobs.server';
import { SectorCompliance, SectorDualCta, SectorProcess, SectorRoles, SectorService } from '../../../components/sectors/SectorSections';

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const employer: SectorEnquiryConfig = {
  sourcePage: "/sectors/business-operational-support",
  sector: "Business & Operational Support",
  "intent": "I need staff",
  "title": "Find office staff",
  "support": "Tell us the role and whether it's cover or a longer-term need.",
  "action": "Request a Shortlist",
  "fields": [
    {
      "name": "role",
      "label": "Role type",
      "options": [
        "Transport admin",
        "Customer service",
        "Office administrator",
        "Coordinator"
      ]
    },
    {
      "name": "basis",
      requestKey: "assignmentType",
      "label": "Basis",
      "options": [
        "Temporary",
        "Temp-to-perm",
        "Permanent"
      ]
    },
    {
      "name": "location",
      "label": "Location"
    }
  ]
};

const serviceItems = ['Temporary & ad-hoc support', 'Temp-to-perm recruitment', 'Permanent recruitment', 'High-volume requirements', 'Targeted candidate sourcing', 'Role and shift matching'];

export default async function BusinessOperationalSupportPage() {
  const { jobs } = await getPublicJobs();
  const sectorJobs = jobsForSector(jobs, 'business');
  return <main className="bg-white text-ink">
    <CompactSectorHero sector="Business & Operational Support" description="The planners, administrators, coordinators and support teams that keep transport, logistics and operational businesses moving." images={['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2200','https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2200']} positions={['center 46%','center 42%']} />
    <SectorOverview title="The people behind every successful operation" copy="We recruit office and operational support roles with a strong focus on transport, logistics, warehousing and fast-paced operational environments. We look at sector experience, systems, shift flexibility, communication skills and the practical demands of the role, not simply the job title." roles={["Transport planners", "Transport administrators", "Operations coordinators", "Warehouse administrators", "Customer service advisors", "Office administrators", "Data & order entry", "Recruitment administrators", "Payroll & accounts support", "Team leaders & supervisors"]} shortName="Support" jobsId="business-support-jobs"><SectorIntentPanel jobs={sectorJobs} sector="Business & Operational Support" shortName="Support" employer={employer} /></SectorOverview>
    <SectorCompliance image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1800" label="WHAT WE LOOK FOR" title={<>Ready for the role.<br/><em>Right for the operation.</em></>} copy="The right match combines practical capability with an understanding of the environment in which the work happens." checks={['Relevant sector or operational experience','Familiarity with the systems used in the role','Flexibility around shifts and operating hours','Clear, confident communication','Understanding of operational priorities']} button="Request Support Staff" />
    <div id="job-categories" className="scroll-mt-[92px]"><SectorRoles label="SUPPORT JOB CATEGORIES" title={<>The roles that keep<br/><em>operations connected.</em></>} copy="Explore the planning, administration, customer service and leadership roles that support day-to-day operational performance."><BusinessOperationalRoleExplorer /></SectorRoles></div>
    <SectorOpportunities id="business-support-jobs" shortName="Support" jobs={sectorJobs} />
    <SectorCandidateValue />
    <SectorService title={<>Recruitment shaped around<br/><em>operational demand.</em></>} copy="From short-term coordination cover to permanent operational hires, the route is matched to the requirement." items={serviceItems} />
    <SectorProcess label="FROM BRIEF TO PLACEMENT" title={<>A focused route to<br/><em>the right support.</em></>} steps={[["01","Understand","Confirm the role, environment, systems, working pattern and priorities."],["02","Source","Reach suitable candidates through targeted search and existing networks."],["03","Assess","Review relevant experience, communication and operational understanding."],["04","Place & support","Coordinate the placement and keep communication clear after the start."]]} />
    <SectorDualCta employer={{label:'FOR EMPLOYERS',title:'I need support staff.',copy:'Tell us the role, environment, working pattern and timing. We’ll take it from there.',action:'Request Staff',href:'/request-staff'}} candidate={{label:'FOR CANDIDATES',title:'I’m looking for support work.',copy:'Explore operational administration, planning, customer service and leadership roles.',action:'Find Support Jobs',href:'/jobs'}} />
    <Footer />
  </main>;
}
