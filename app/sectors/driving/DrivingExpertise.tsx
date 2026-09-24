import { Container } from '../../../components/layout/Container';
import { SectionLabel } from '../../../components/SectionLabel';
import { TextLink } from '../../../components/ui/TextLink';

const heading = 'mt-7 max-w-[900px] text-[clamp(36px,4.5vw,66px)] font-semibold leading-[1.02] tracking-[-.05em]';
const checks = [
  ['Licence & entitlement', 'Driving licence and entitlement checks are completed and matched to the vehicle and assignment requirements before placement.'],
  ['CPC, tacho & experience', 'Where relevant, Driver CPC, tachograph documentation and driving experience are reviewed as part of the registration and assignment process.'],
  ['Client-specific compliance', 'Right to Work, references, DBS or additional onboarding checks can be completed where the client or assignment requires them.'],
];
const credentials = [
  ['SEG Awards Transport Manager CPC', 'Our team includes a qualified Transport Manager holding the SEG Awards Level 3 Certificate of Professional Competence for Transport Managers (Road Haulage). This brings knowledge of operator licensing, drivers’ hours and Working Time, tachograph compliance, road safety and the wider responsibilities involved in running a compliant transport operation. It means we understand transport requirements from an operator’s perspective, not simply from a recruitment perspective.'],
  ['NRI Registered LGV Instructor', 'We also have an NRI Registered LGV Instructor within the team, adding practical expertise in professional LGV driving standards, driver competence and assessment. This strengthens the way we evaluate driving experience and helps us understand what clients should expect from professional HGV drivers beyond the licence itself.'],
];
const training = [
  ['Driver CPC support', 'Periodic CPC training can be coordinated through our wider group and training partners, subject to course and location availability.', '/training/cpc', 'Explore CPC Training'],
  ['Driver assessments', 'Practical assessment support can be arranged where clients want an additional competence check before or during assignment.', '/training/driver-assessments', 'Explore Driver Assessments'],
  ['Compliance support', 'Our team can work with clients on assignment-specific licence, drivers’ hours, tachograph and onboarding requirements.', '/compliance', 'Explore Compliance & Vetting'],
];

export function DrivingExpertise() {
  return <>
    <section className="bg-surface py-24 max-[760px]:py-14">
      <Container>
        <SectionLabel>TRANSPORT EXPERTISE</SectionLabel>
        <h2 className={heading}>Transport expertise beyond candidate supply</h2>
        <div className="mt-12 grid grid-cols-3 border border-line bg-white max-[900px]:grid-cols-1">
          {checks.map(([title, copy], i) => <article key={title} className="border-r border-line px-7 py-7 last:border-r-0 max-[900px]:border-b max-[900px]:last:border-b-0 max-[900px]:border-r-0">
            <span className="text-[10px] font-bold text-brand-red">0{i + 1}</span>
            <h3 className="mb-4 mt-8 text-xl font-semibold tracking-[-.02em]">{title}</h3>
            <p className="text-sm leading-[1.75] text-muted">{copy}</p>
          </article>)}
        </div>
        <details className="mt-7 border-b border-line pb-5"><summary className="cursor-pointer py-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Registration and ongoing checks</summary><p className="mt-3 max-w-[850px] text-sm leading-[1.75] text-muted">Licence checks take place at registration and every 12 weeks thereafter. Written working-time, tachograph and Highway Code testing, a minimum of two references and driver accident-history reviews support registration. Driver hours are reviewed weekly, with support for managing infringements.</p></details>
      </Container>
    </section>
    <section className="bg-ink py-24 text-white max-[760px]:py-14">
      <Container>
        <SectionLabel>QUALIFIED IN-HOUSE TRANSPORT EXPERTISE</SectionLabel>
        <h2 className={heading}>Transport knowledge that goes beyond recruitment</h2>
        <p className="mt-7 max-w-[800px] text-base leading-[1.75] text-white/80">Our Driving &amp; Transport division is supported by recognised transport-management and professional driver-training expertise, giving us a practical understanding of the standards and responsibilities our transport clients work with every day.</p>
        <div className="mt-12 border-t border-white/20">
          {credentials.map(([title, copy], i) => <article key={title} className="grid grid-cols-[.85fr_1.15fr] gap-16 border-b border-white/20 py-10 max-[900px]:grid-cols-1 max-[900px]:gap-5">
            <div><span className="text-[10px] text-brand-red">0{i + 1} / QUALIFICATION</span><h3 className="mt-5 text-[clamp(26px,2.5vw,38px)] font-semibold leading-[1.1] tracking-[-.03em]">{title}</h3></div>
            <p className="text-[15px] leading-[1.8] text-white/80">{copy}</p>
          </article>)}
        </div>
      </Container>
    </section>
    <section className="bg-white py-24 max-[760px]:py-14">
      <Container>
        <SectionLabel>DRIVER TRAINING &amp; ASSESSMENTS</SectionLabel>
        <h2 className={heading}>Keep your fleet compliant and road-ready</h2>
        <div className="mt-12 grid grid-cols-3 border-t border-line max-[1000px]:grid-cols-1">
          {training.map(([title, copy, href, action], i) => <article key={title} className="group flex flex-col border-b border-r border-line px-7 py-8 transition-colors hover:bg-surface focus-within:bg-surface first:pl-0 last:border-r-0 max-[1000px]:border-r-0 max-[1000px]:px-0">
            <span className="text-[10px] font-bold text-brand-red">0{i + 1}</span><h3 className="mb-4 mt-8 text-2xl font-semibold tracking-[-.03em]">{title}</h3><p className="mb-7 text-sm leading-[1.75] text-muted">{copy}</p><TextLink href={href} className="mt-auto self-start">{action}</TextLink>
          </article>)}
        </div>

      </Container>
    </section>
  </>;
}
