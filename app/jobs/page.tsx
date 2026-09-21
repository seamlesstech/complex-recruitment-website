import { HeroEyebrow } from '../../components/HeroEyebrow';
import { Header } from '../../components/Header';
import { JobBoardExplorer } from '../../components/JobBoardExplorer';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { SectionLabel } from '../../components/SectionLabel';
import { ButtonLink } from '../../components/ui/ButtonLink';

const supportItems = [
  ['01', 'Clear communication', 'Know what the role involves, where you need to be and what happens next.'],
  ['02', 'Reliable payroll', 'A straightforward candidate experience supported by dependable processes.'],
  ['03', 'Sector knowledge', 'Recruiters who understand the environments and roles they are recruiting for.'],
  ['04', 'Ongoing support', 'Complex stays available after placement — not only before you start.'],
];

export default function JobsPage() {
  return (
    <main className="bg-white text-ink">
      <section className="grid grid-rows-[92px_auto] bg-brand-grey text-white max-[760px]:grid-rows-[76px_auto]">
        <Header active="Jobs" theme="dark" />
        <Container className="py-[25px] max-[640px]:py-[17px]">
          <HeroEyebrow detail="OPPORTUNITIES">JOBS</HeroEyebrow>
          <h1 className="m-0 text-[clamp(40px,4.5vw,64px)] font-semibold leading-[.95] tracking-[-.055em]">Find your next <em className="not-italic text-white">opportunity<span className="text-brand-red">.</span></em></h1>
        </Container>
      </section>

      <section className="bg-white pb-[72px] pt-6 max-[640px]:pb-[58px]">
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
