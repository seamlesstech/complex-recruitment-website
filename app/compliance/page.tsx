import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/Header';
import { Container } from '../../components/layout/Container';
import { SectionLabel } from '../../components/SectionLabel';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { TextLink } from '../../components/ui/TextLink';

const checks = [
  'Right to Work verification',
  'Driving licence and entitlement',
  'Driver CPC and tachograph documentation',
  'FLT certification',
  'CSCS, CPCS or other role-specific qualifications',
  'References and employment history where required',
  'DBS where required',
  'Client-specific onboarding',
  'PAYE engagement',
  'Supporting-document records',
] as const;

const enhancedChecks = [
  'Detailed employment-history checks',
  'Identity and supporting-document review',
  'Client-specific declarations and onboarding',
  'Reference collection and verification',
  'Additional screening for regulated or security-conscious environments',
] as const;

const records = ['Right to Work', 'PAYE', 'Licences', 'Role-specific vetting', 'Records'] as const;

export default function CompliancePage() {
  return <main className="bg-white text-ink">
    <section className="grid min-h-[610px] grid-rows-[92px_minmax(0,1fr)] bg-white max-[640px]:min-h-0 max-[640px]:grid-rows-[76px_auto]">
      <Header active="Compliance & Vetting" theme="light" />
      <Container gutter="wide" className="flex items-end py-[78px] max-[640px]:py-[58px]">
        <div className="max-w-[1100px]">
          <div className="mb-[34px] text-[10px] font-extrabold tracking-[.2em] text-[#5f686e] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">COMPLIANCE &amp; VETTING <span className="ml-[10px] text-[#9aa0a4] max-[640px]:hidden">/ WORKFORCE ASSURANCE</span></div>
          <h1 className="m-0 text-[clamp(62px,5.8vw,98px)] font-semibold leading-[.89] tracking-[-.066em] max-[1180px]:text-[74px] max-[640px]:text-[50px]">Compliance built into<br /><em className="not-italic text-brand-grey">every placement<span className="text-brand-red">.</span></em></h1>
          <p className="my-[30px] max-w-[760px] text-[17px] leading-[1.65] text-[#5e6a70]">Compliance is built into our recruitment process from the beginning — helping clients receive people who are not only available, but appropriately checked for the work they are being asked to do.</p>
          <div className="flex items-center gap-7 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-4"><ButtonLink href="#role-checks" arrowDirection="down-right">Explore Our Approach</ButtonLink><TextLink href="/contact">Discuss a Requirement</TextLink></div>
        </div>
      </Container>
    </section>

    <section id="role-checks" className="scroll-mt-6 bg-surface py-[126px] max-[640px]:py-[88px]">
      <Container>
        <div className="grid grid-cols-[.4fr_1fr] gap-[72px] max-[1180px]:grid-cols-[.3fr_1fr] max-[1180px]:gap-11 max-[640px]:block"><SectionLabel>CHECKS TAILORED TO THE ROLE AND CLIENT</SectionLabel><div className="max-[640px]:mt-7"><h2 className="section-heading m-0 text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">The requirement changes.<br /><em className="not-italic text-brand-red">So should the checks.</em></h2><p className="mt-[26px] max-w-[700px] text-sm leading-[1.7] text-[#657177]">Temporary workers are engaged through PAYE and Right to Work checks take place before placement. Additional checks depend on the role, working environment and client requirement.</p></div></div>
        <div className="mt-[70px] grid grid-cols-2 border-t border-line max-[760px]:grid-cols-1">{checks.map((item, index) => <div key={item} className="grid min-h-[74px] grid-cols-[46px_1fr] items-center border-b border-line py-3 odd:pr-8 even:pl-8 max-[760px]:px-0"><span className="text-[8px] text-brand-red">{String(index + 1).padStart(2, '0')}</span><strong className="text-sm font-semibold">{item}</strong></div>)}</div>
        <div className="mt-[90px] grid grid-cols-[.4fr_1fr] gap-[72px] border-t border-line pt-[70px] max-[760px]:grid-cols-1 max-[760px]:gap-8"><div><SectionLabel>ENHANCED VETTING REQUIREMENTS</SectionLabel><p className="mt-6 max-w-[330px] text-sm leading-[1.7] text-muted">Deeper review is applied where the client, responsibility or working environment requires it.</p></div><div className="border-t border-line">{enhancedChecks.map((item, index) => <div key={item} className="grid min-h-[67px] grid-cols-[46px_1fr] items-center border-b border-line"><span className="text-[8px] text-brand-red">{String(index + 1).padStart(2, '0')}</span><b className="text-xs font-semibold">{item}</b></div>)}</div></div>
      </Container>
    </section>

    <section className="bg-white py-[126px] max-[640px]:py-[88px]">
      <Container><div className="grid grid-cols-[.42fr_1fr] gap-[72px] max-[1000px]:grid-cols-1 max-[1000px]:gap-8"><SectionLabel>OUR COMPLIANCE APPROACH</SectionLabel><div><h2 className="section-heading m-0 text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">Documented, role-specific<br /><em className="not-italic text-brand-red">and audit-ready.</em></h2><p className="mt-[26px] max-w-[680px] text-sm leading-[1.72] text-[#657177]">Candidate checks and supporting documentation are recorded as part of the recruitment process so the team can respond efficiently to client onboarding requirements, queries and audits.</p></div></div><div className="mt-[72px] grid grid-cols-5 border-l border-t border-line max-[1000px]:grid-cols-3 max-[640px]:grid-cols-1">{records.map((item, index) => <div className="min-h-[150px] border-b border-r border-line p-6" key={item}><span className="text-[8px] text-brand-red">0{index + 1}</span><strong className="mt-[54px] block text-lg">{item}</strong></div>)}</div></Container>
    </section>

    <section className="bg-surface py-[126px] max-[640px]:py-[88px]" id="driver-standards"><Container><div className="grid grid-cols-[.4fr_1fr] gap-[72px] max-[1180px]:grid-cols-[.3fr_1fr] max-[1180px]:gap-11 max-[640px]:block"><SectionLabel>DRIVER STANDARDS &amp; DEVELOPMENT</SectionLabel><div className="max-[640px]:mt-7"><h2 className="section-heading m-0 text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">Two practical ways to<br /><em className="not-italic text-brand-red">support better drivers.</em></h2><p className="mt-[26px] max-w-[600px] text-sm leading-[1.7] text-[#657177]">Driver Assessments and CPC Training sit alongside the wider compliance approach as focused services for capability, development and professional standards.</p></div></div><div className="mt-[70px] grid grid-cols-2 gap-3 max-[1000px]:grid-cols-1">{[
      { href: '/training/driver-assessments', label: '01 / ASSESSMENTS', small: 'FOR EMPLOYERS & DRIVERS', title: <>Driver<br />Assessments</>, copy: 'Practical and theoretical evaluation to understand driver capability, safety and development needs.', image: "url('https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1800')" },
      { href: '/training/cpc', label: '02 / TRAINING', small: 'PROFESSIONAL DEVELOPMENT', title: <>CPC<br />Training</>, copy: 'Driver-focused professional development that supports competence, knowledge and ongoing standards.', image: "url('https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1800')" },
    ].map(card => <a href={card.href} key={card.href} className="group relative isolate flex min-h-[600px] flex-col justify-between overflow-hidden p-[30px] text-white outline-none before:absolute before:inset-0 before:-z-[2] before:bg-[linear-gradient(180deg,rgba(17,18,20,.12),rgba(17,18,20,.22)_44%,rgba(17,18,20,.9))] after:absolute after:inset-x-0 after:bottom-0 after:-z-[1] after:h-[55%] after:translate-y-full after:bg-[linear-gradient(180deg,rgba(236,33,37,0),rgba(236,33,37,.14)_36%,rgba(236,33,37,.9))] after:transition-transform after:duration-500 after:ease-complex hover:after:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:after:translate-y-0 max-[1000px]:min-h-[500px] max-[640px]:min-h-[430px] max-[640px]:p-[22px]"><div className="absolute inset-[-2%] -z-[3] scale-[1.02] bg-cover bg-center grayscale-[.35] transition-[transform,filter] duration-700 ease-complex group-hover:scale-[1.065] group-hover:grayscale-0 group-focus-visible:scale-[1.065] group-focus-visible:grayscale-0" style={{ backgroundImage: card.image }} /><span className="text-[8px] font-extrabold tracking-[.17em] text-white/70">{card.label}</span><div><small className="text-[8px] font-extrabold tracking-[.17em] text-white/70">{card.small}</small><h3 className="my-[18px] text-[clamp(48px,4.6vw,76px)] font-semibold leading-[.88] tracking-[-.06em] text-white">{card.title}</h3><p className="max-w-[470px] text-xs leading-[1.6] text-white/80">{card.copy}</p></div><i className="absolute right-7 top-7 text-[23px] text-white not-italic transition-transform duration-300 group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-focus-visible:translate-x-[7px] group-focus-visible:-translate-y-[7px]">↗</i></a>)}</div></Container></section>

    <section className="bg-white py-[120px] max-[640px]:py-[88px]"><Container className="grid grid-cols-[1fr_.72fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-11"><div><SectionLabel>START A CONVERSATION</SectionLabel><h2 className="section-heading m-0 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em] max-[640px]:text-5xl">Need to discuss your compliance<br /><em className="not-italic text-brand-red">or training requirements?</em></h2></div><div><p className="mb-7 max-w-[560px] text-[15px] leading-[1.7] text-[#657178]">Talk to Complex about workforce compliance, Driver Assessments or CPC Training and the team can help clarify the appropriate next step.</p><ButtonLink href="/contact">Talk to Complex</ButtonLink></div></Container></section>
    <Footer variant="training" />
  </main>;
}
