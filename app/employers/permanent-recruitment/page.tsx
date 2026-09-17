import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { Container } from '../../../components/layout/Container';
import { Footer } from '../../../components/layout/Footer';
import { ArrowIcon } from '../../../components/ui/ArrowIcon';
import { ButtonLink } from '../../../components/ui/ButtonLink';

const heading = 'section-heading m-0 text-[clamp(50px,5.15vw,84px)] leading-[.94] tracking-[-.057em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red';
const considerations = ['Responsibilities', 'Salary & package', 'Working pattern', 'Relevant experience', 'Working environment', 'What success looks like'];
const sectors = [
  ['01', 'Driving & Transport', '/sectors/driving'],
  ['02', 'Industrial & Warehouse', '/sectors/industrial'],
  ['03', 'Construction & Engineering', '/sectors/construction'],
  ['04', 'Business & Operational Support', '/sectors/business-operational-support'],
] as const;

export default function PermanentRecruitmentPage() {
  return <main className="bg-white text-ink">
    <section className="grid min-h-[720px] grid-rows-[92px_1fr] overflow-hidden bg-brand-grey text-white max-[760px]:min-h-[680px] max-[760px]:grid-rows-[76px_1fr]">
      <Header active="Employers" theme="dark" />
      <Container gutter="wide" className="grid grid-cols-[1.15fr_.65fr] items-end gap-20 py-[86px] max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[760px]:py-[62px]">
        <div><SectionLabel>PERMANENT RECRUITMENT</SectionLabel><h1 className="mt-8 max-w-[980px] text-[clamp(60px,6.2vw,102px)] font-semibold leading-[.88] tracking-[-.064em]">Permanent people.<br/>Chosen for the operation<span className="text-brand-red">.</span></h1></div>
        <div className="border-l border-white/35 pl-8 max-[1000px]:max-w-[650px] max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:pt-7 max-[760px]:pl-0"><p className="mb-8 text-[16px] leading-[1.7] text-white/85">Complex helps employers find permanent people who fit the role, working environment and operational demands of the business — not simply another CV.</p><ButtonLink href="/request-staff">Start a Permanent Search</ButtonLink></div>
      </Container>
    </section>

    <section className="py-[126px] max-[760px]:py-[90px]"><Container><div className="grid grid-cols-[1fr_.7fr] items-end gap-24 max-[900px]:grid-cols-1 max-[900px]:gap-9"><div><SectionLabel>UNDERSTANDING THE OPERATION</SectionLabel><h2 className={`${heading} mt-[38px]`}>The brief goes beyond<br/><em>the job title.</em></h2></div><p className="max-w-[570px] text-[15px] leading-[1.72] text-muted">Permanent recruitment starts with understanding the operation and the conditions in which someone needs to succeed.</p></div><div className="mt-[72px] grid grid-cols-3 border-l border-t border-line max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">{considerations.map((item,index)=><article key={item} className="group min-h-[180px] border-b border-r border-line p-7 transition-colors hover:bg-surface"><span className="text-[8px] text-brand-red">{String(index+1).padStart(2,'0')}</span><h3 className="mt-[72px] text-xl transition-transform group-hover:translate-x-2">{item}</h3></article>)}</div></Container></section>

    <section className="bg-surface py-[126px] max-[760px]:py-[90px]"><Container><div className="grid grid-cols-[.4fr_1fr] gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8"><SectionLabel>HOW IT WORKS</SectionLabel><h2 className={heading}>A targeted route from<br/><em>brief to offer.</em></h2></div><div className="mt-[72px] grid grid-cols-3 border-l border-t border-line max-[760px]:grid-cols-1">{[["01","Understand","Discuss the role, package, responsibilities, environment and experience required."],["02","Source & Shortlist","Use targeted advertising, network search, proactive sourcing and candidate screening."],["03","Interview & Offer","Coordinate communication through interview, offer and onboarding."]].map(([n,title,copy])=><article key={n} className="group relative min-h-[330px] border-b border-r border-line bg-white/40 p-7 transition-colors hover:bg-white"><span className="text-[8px] text-brand-red">{n}</span><h3 className="mb-5 mt-[90px] text-[27px] tracking-[-.035em]">{title}</h3><p className="max-w-[310px] text-xs leading-[1.65] text-muted">{copy}</p><ArrowIcon className="absolute right-7 top-7 text-brand-red transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5"/></article>)}</div></Container></section>

    <section className="py-[126px] max-[760px]:py-[90px]"><Container><div className="grid grid-cols-[.45fr_1fr] items-end gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-8"><SectionLabel>WHERE WE RECRUIT PERMANENTLY</SectionLabel><h2 className={heading}>Specialist knowledge.<br/><em>Permanent focus.</em></h2></div><div className="mt-[68px] grid grid-cols-2 border-l border-t border-line max-[640px]:grid-cols-1">{sectors.map(([n,title,href])=><a key={href} href={href} className="group grid min-h-[150px] grid-cols-[42px_1fr_auto] items-center border-b border-r border-line px-7 outline-none transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red"><span className="text-[8px] text-brand-red">{n}</span><strong className="text-xl tracking-[-.025em]">{title}</strong><ArrowIcon className="text-brand-red transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"/></a>)}</div></Container></section>

    <section className="bg-ink py-[110px] text-white max-[760px]:py-[82px]"><Container className="flex items-end justify-between gap-16 max-[760px]:items-start max-[760px]:flex-col"><div><SectionLabel>READY TO HIRE?</SectionLabel><h2 className={`${heading} mt-[34px]`}>Start a permanent<br/><em>search.</em></h2></div><ButtonLink href="/request-staff">Request Staff</ButtonLink></Container></section>
    <Footer />
  </main>;
}
