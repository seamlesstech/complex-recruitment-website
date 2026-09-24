import { Footer } from "../../../components/layout/Footer";
import { Container } from "../../../components/layout/Container";
import { SectionLabel } from "../../../components/SectionLabel";
import { Header } from "../../../components/Header";
import { DrivingIntentPanel } from "./DrivingIntentPanel";
import { jobsForSector } from "../../../lib/public-jobs";
import { getPublicJobs } from "../../../lib/public-jobs.server";
import { JobRow } from "../../../components/jobs/JobRow";
import { ButtonLink } from "../../../components/ui/ButtonLink";
import { DrivingRoleExplorer } from "../../../components/DrivingRoleExplorer";
import { TextLink } from "../../../components/ui/TextLink";
import { SectorRoles, SectorService, SectorProcess, SectorDualCta } from "../../../components/sectors/SectorSections";
import { DrivingExpertise } from "./DrivingExpertise";

// Live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const candidateBenefits = [
  ['Weekly PAYE pay', 'Temporary workers are engaged through PAYE, with dependable weekly pay.'],
  ['Portal & timesheets', 'Use the candidate portal to access and manage relevant timesheet information.'],
  ['Flexible opportunities', 'Temporary work, ongoing assignments, temp-to-perm opportunities and permanent roles.'],
  ['Real communication', 'A recruitment team you can reach when you need an update or support.'],
  ['Refer a friend', 'Introduce someone suitable through the Complex refer-a-friend scheme.'],
  ['Sector-focused support', 'People who understand the operational environments they recruit for.'],
];

const serviceItems = [
  "Daily check-in confirmation",
  "Management of rotas",
  "Weekly onsite staff welfare sessions",
  "Training workshops",
  "Weekly management information",
  "Monthly compliance log",
  "Worker performance reviews",
  "Buddy system",
];

export default async function DrivingPage() {
  const { jobs } = await getPublicJobs();
  const drivingJobs = jobsForSector(jobs, 'driving');
  return (
    <main className="bg-white text-ink">
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.03] bg-cover bg-no-repeat grayscale-[.55] motion-reduce:animate-none" style={{ backgroundImage: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200')", backgroundPosition: 'center 58%', animation: 'drivingHeroTruckSwap 12s infinite' }} />
        <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.035] bg-cover bg-no-repeat opacity-0 grayscale-[.55] motion-reduce:hidden" style={{ backgroundImage: "url('/driving-hero-driver-flipped.jpg')", backgroundPosition: 'center center', animation: 'drivingHeroDriverSwap 12s infinite' }} />
        <div aria-hidden="true" className="absolute inset-0 -z-[3] bg-brand-grey/30 mix-blend-color" />
        <div aria-hidden="true" className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(8,9,10,.9),rgba(8,9,10,.76)_42%,rgba(8,9,10,.2)_72%,rgba(8,9,10,.4)),linear-gradient(180deg,rgba(8,9,10,.16),rgba(8,9,10,.08)_55%,rgba(8,9,10,.58))]" />
        <Header active="Sectors" theme="dark" />
        <Container className="py-[64px] max-[760px]:py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-[11px] leading-relaxed text-white/75"><ol className="flex flex-wrap items-center gap-x-3 gap-y-1"><li><a href="/" className="outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Home</a></li><li aria-hidden="true" className="text-white/40">/</li><li><a href="/sectors" className="outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Sectors</a></li><li aria-hidden="true" className="text-white/40">/</li><li aria-current="page">Driving &amp; Transport</li></ol></nav>
          <h1 className="m-0 text-[clamp(44px,4.6vw,68px)] font-semibold leading-[.98] tracking-[-.055em] max-[760px]:text-[42px]">Driving &amp; Transport Recruitment<span className="text-brand-red">.</span></h1>
          <p className="mt-6 max-w-[780px] text-base leading-[1.65] text-white/85 max-[760px]:text-sm">Specialist driving and transport recruitment for logistics, distribution and operational businesses — temporary, ongoing and permanent.</p>
        </Container>
      </section>
      <section className="py-16 max-[760px]:py-10">
        <Container className="grid grid-cols-[1.3fr_1fr] items-start gap-[72px] max-[1100px]:gap-[52px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <h2 className="text-[clamp(36px,3.2vw,48px)] font-semibold leading-[1.04] tracking-[-.045em]">Transport recruitment backed by real industry knowledge</h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-muted">Driving recruitment is one of the core areas of Complex Recruitment. We look beyond licence category alone, considering experience, assignment type, start times, vehicle requirements, availability and the compliance standards of the client before a driver is placed.</p>
            <ul aria-label="Driving and transport roles" className="mt-9 grid grid-cols-2 gap-x-7 border-t border-line max-[640px]:grid-cols-1">{['HGV Class 1 (C+E)', 'HGV Class 2 (C)', '7.5 tonne', '3.5t / van & multi-drop', 'HIAB & Moffett', 'ADR', 'Tramping & trunking', 'Drivers’ mates', 'Transport supervisors', 'Yard shunters'].map(role => <li key={role} className="flex min-h-[62px] items-center gap-3 border-b border-line py-4 text-sm font-medium"><span aria-hidden="true" className="text-brand-red">↗</span>{role}</li>)}</ul>
            <div className="flex flex-wrap gap-x-7"><TextLink href="#job-categories" arrowDirection="down-right" className="mt-5 !text-brand-red">Explore driving job categories</TextLink><TextLink href="#driving-jobs" className="mt-5 !text-brand-red">See current driving jobs</TextLink></div>
            <p className="mt-7 text-xs leading-[1.7] text-muted">Dedicated account management and communication throughout the assignment.</p>
          </div>
          <div className="relative z-[7] -mt-[100px] max-[900px]:mt-0"><DrivingIntentPanel jobs={drivingJobs} /></div>
        </Container>
      </section>
      <DrivingExpertise />
      <div id="job-categories" className="scroll-mt-[92px]">
        <SectorRoles label="DRIVING & TRANSPORT" title="Job Categories" copy="Select a category to explore specialist assignments and transport-support roles."><DrivingRoleExplorer /></SectorRoles>
      </div>
      <section id="driving-jobs" className="scroll-mt-[92px] bg-white py-20 max-[760px]:py-12">
        <Container>
          <SectionLabel>CURRENT DRIVING OPPORTUNITIES</SectionLabel>
          <h2 className="mb-9 mt-7 text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.04] tracking-[-.045em]">Driving roles available now.</h2>
          <div className="border-t border-line">{!drivingJobs.length && <p className="py-8 text-sm text-muted">No current vacancies in this sector. Register your interest below to stay in touch.</p>}{drivingJobs.map((job, index) => <JobRow key={job.reference} job={job} index={index} />)}</div>
          <div className="mt-8 flex flex-wrap items-center gap-6"><ButtonLink href="/jobs">View All Driving Jobs</ButtonLink><TextLink href="/register-interest" className="!text-brand-red">Register Your Interest</TextLink></div>
        </Container>
      </section>
      <section className="bg-surface py-16 max-[760px]:py-10">
        <Container>
          <SectionLabel>FOR DRIVERS</SectionLabel>
          <h2 className="mt-6 text-[clamp(36px,3.2vw,48px)] font-semibold leading-[1.04] tracking-[-.045em]">Working with Complex</h2>
          <div className="mt-9 grid grid-cols-3 gap-x-9 gap-y-7 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">{candidateBenefits.map(([title, copy]) => <div key={title} className="border-t border-line pt-5"><h3 className="text-lg font-semibold tracking-[-.02em]">{title}</h3><p className="mt-3 text-sm leading-[1.7] text-muted">{copy}</p></div>)}</div>
        </Container>
      </section>
      <SectorService title={<>More than<br /><em>the placement.</em></>} copy="Complex’s existing Driving service model includes ongoing operational support after drivers are supplied." items={serviceItems} />
      <SectorProcess label="FROM REQUIREMENT TO ROAD" title={<>Built around the pace<br /><em>of transport.</em></>} steps={[
        ['01', 'Brief us', 'Role, class, shift, location, start time and volume.'],
        ['02', 'Source & verify', 'Suitable drivers are identified and relevant checks are completed.'],
        ['03', 'Confirm & check in', 'Assignments are confirmed and attendance is managed.'],
        ['04', 'Stay involved', 'Complex supports rotas, welfare, performance and service information.'],
      ]} />
      <SectorDualCta
        employer={{
          label: "FOR EMPLOYERS",
          title: "I need staff.",
          copy: "Tell us the licence class, numbers, shift and timing. We’ll take it from there.",
          action: "Request Drivers",
          href: "/request-staff",
        }}
        candidate={{
          label: "FOR CANDIDATES",
          title: "I’m looking for work.",
          copy: "Explore current driving and transport opportunities.",
          action: "Find Driving Jobs",
          href: "/jobs",
        }}
      />
      <Footer />
    </main>
  );
}
