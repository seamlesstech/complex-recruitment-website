import { Header } from '../../components/Header';
import { JobBoardExplorer } from '../../components/JobBoardExplorer';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { SectionLabel } from '../../components/SectionLabel';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { TextLink } from '../../components/ui/TextLink';

const supportItems = [
  ['01', 'Clear communication', 'Know what the role involves, where you need to be and what happens next.'],
  ['02', 'Reliable payroll', 'A straightforward candidate experience supported by dependable processes.'],
  ['03', 'Sector knowledge', 'Recruiters who understand the environments and roles they are recruiting for.'],
  ['04', 'Ongoing support', 'Complex stays available after placement — not only before you start.'],
];

export default function JobsPage() {
  return (
    <main className="bg-white text-ink">
      <section className="grid min-h-[616px] grid-rows-[92px_minmax(0,1fr)] bg-white max-[1000px]:min-h-0 max-[1000px]:grid-rows-[92px_auto] max-[640px]:grid-rows-[76px_auto]">
        <Header active="Jobs" theme="light" />
        <Container className="grid grid-cols-[1.18fr_.62fr] items-end gap-[100px] pb-[70px] pt-[82px] max-[1200px]:gap-[58px] max-[1200px]:[&_h1]:text-[76px] max-[1000px]:grid-cols-1 max-[1000px]:py-14 max-[640px]:py-11 max-[640px]:[&_h1]:text-[50px]">
          <div>
            <div className="mb-[30px] text-[10px] font-extrabold tracking-[.2em] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">LIVE OPPORTUNITIES <span className="ml-[10px] text-brand-grey max-[760px]:hidden">/ COMPLEX JOBS</span></div>
            <h1 className="m-0 text-[clamp(68px,6.4vw,108px)] font-semibold leading-[.88] tracking-[-.068em]">Find your next<br /><em className="not-italic text-brand-grey">opportunity<span className="text-brand-red">.</span></em></h1>
          </div>
          <div className="pb-2 max-[1000px]:max-w-[650px]">
            <p className="mb-[30px] max-w-[520px] text-base leading-[1.68] text-[#626d73]">Search current opportunities across our four specialist sectors. No account required — find a role, review the details and apply.</p>
            <TextLink href="/register-interest">Can’t see the right role? <span>Register interest</span></TextLink>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-[72px] max-[640px]:py-[58px]">
        <Container>
          <JobBoardExplorer />
        </Container>
      </section>

      <section className="bg-white py-[126px] max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[.7fr_1.3fr] gap-[90px] max-[1200px]:grid-cols-1 max-[1200px]:gap-[54px]">
          <div><SectionLabel>WORKING WITH COMPLEX</SectionLabel><h2 className="section-heading m-0 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">More than a<br /><em className="not-italic text-brand-red">job listing.</em></h2></div>
          <div className="grid grid-cols-2 border-l border-t border-line max-[640px]:grid-cols-1">
            {supportItems.map(([number, title, copy]) => <article key={number} className="group min-h-[230px] border-b border-r border-line p-7 transition-colors duration-300 hover:bg-surface"><div className="transition-transform duration-300 ease-complex group-hover:translate-x-[7px]"><span className="text-[8px] font-extrabold text-brand-red">{number}</span><h3 className="mb-3 mt-[62px] text-[22px] tracking-[-.025em]">{title}</h3><p className="max-w-[285px] text-[11px] leading-[1.6] text-[#69757a]">{copy}</p></div></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-brand-grey py-[120px] text-white max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.65fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
          <div className="[&_.sectionLabel]:text-white [&_.labelDot]:bg-white [&_.labelDot]:shadow-none"><SectionLabel>STAY ON OUR RADAR</SectionLabel><h2 className="section-heading m-0 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">Nothing suitable<br /><em className="not-italic text-brand-red">right now?</em></h2></div>
          <div><p className="mb-7 max-w-[560px] text-[15px] leading-[1.7] text-white/75">Tell us the type of work you are looking for and upload your CV once. The Complex team can then contact you when something relevant comes up.</p><ButtonLink href="/register-interest">Register Your Interest</ButtonLink></div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
