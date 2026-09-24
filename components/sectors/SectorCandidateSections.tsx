import { Container } from '../layout/Container';
import { SectionLabel } from '../SectionLabel';
import { JobRow } from '../jobs/JobRow';
import { ButtonLink } from '../ui/ButtonLink';
import { TextLink } from '../ui/TextLink';
import type { PublicJob } from '../../lib/public-jobs';

const candidateBenefits = [
  ['Weekly PAYE pay', 'Temporary workers are engaged through PAYE, with dependable weekly pay.'],
  ['Portal & timesheets', 'Use the candidate portal to access and manage relevant timesheet information.'],
  ['Flexible opportunities', 'Temporary work, ongoing assignments, temp-to-perm opportunities and permanent roles.'],
  ['Real communication', 'A recruitment team you can reach when you need an update or support.'],
  ['Refer a friend', 'Introduce someone suitable through the Complex refer-a-friend scheme.'],
  ['Sector-focused support', 'People who understand the operational environments they recruit for.'],
];

export function SectorOpportunities({ id, shortName, jobs }: { id: string; shortName: string; jobs: PublicJob[] }) {
 return (      <section id={id} className="scroll-mt-[92px] bg-white py-20 max-[760px]:py-12">
        <Container>
          <SectionLabel>CURRENT {shortName.toUpperCase()} OPPORTUNITIES</SectionLabel>
          <h2 className="mb-9 mt-7 text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.04] tracking-[-.045em]">{shortName} roles available now.</h2>
          <div className="border-t border-line">{!jobs.length && <p className="py-8 text-sm text-muted">No current vacancies in this sector. Register your interest below to stay in touch.</p>}{jobs.map((job, index) => <JobRow key={job.reference} job={job} index={index} />)}</div>
          <div className="mt-8 flex flex-wrap items-center gap-6"><ButtonLink href="/jobs">View All {shortName} Jobs</ButtonLink><TextLink href="/register-interest" className="!text-brand-red">Register Your Interest</TextLink></div>
        </Container>
      </section>
);
}
export function SectorCandidateValue() {
 return (      <section className="bg-surface py-16 max-[760px]:py-10">
        <Container>
          <SectionLabel>FOR CANDIDATES</SectionLabel>
          <h2 className="mt-6 text-[clamp(36px,3.2vw,48px)] font-semibold leading-[1.04] tracking-[-.045em]">Working with Complex</h2>
          <div className="mt-9 grid grid-cols-3 gap-x-9 gap-y-7 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">{candidateBenefits.map(([title, copy]) => <div key={title} className="border-t border-line pt-5"><h3 className="text-lg font-semibold tracking-[-.02em]">{title}</h3><p className="mt-3 text-sm leading-[1.7] text-muted">{copy}</p></div>)}</div>
        </Container>
      </section>
);
}

export function SectorReadiness({ label, points, details }: { label: string; points: string[][]; details: string[] }) {
 return <section className="bg-surface py-24 max-[760px]:py-14"><Container>
   <SectionLabel>{label}</SectionLabel>
   <div className="mt-9 grid grid-cols-3 border border-line bg-white max-[900px]:grid-cols-1">{points.map(([title, copy]) => <article key={title} className="border-r border-line p-7 last:border-r-0 max-[900px]:border-b max-[900px]:border-r-0 max-[900px]:last:border-b-0"><h2 className="text-2xl font-semibold tracking-[-.035em]">{title}</h2><p className="mt-4 text-sm leading-[1.75] text-muted">{copy}</p></article>)}</div>
   <details className="mt-7 border-b border-line pb-5"><summary className="cursor-pointer text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Preparation and ongoing support</summary><ul className="mt-5 grid list-disc gap-x-10 gap-y-3 pl-5 text-sm leading-relaxed text-muted min-[901px]:grid-cols-2">{details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>
 </Container></section>;
}
