import { Header } from '../../components/Header';
import { JobBoardExplorer } from '../../components/JobBoardExplorer';
import { Container } from '../../components/layout/Container';
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
      <section className="grid min-h-[720px] grid-rows-[92px_minmax(0,1fr)_104px] bg-white max-[1000px]:min-h-0 max-[1000px]:grid-rows-[92px_auto_auto] max-[640px]:grid-rows-[76px_auto_auto]">
        <Header active="Jobs" theme="light" />
        <Container className="grid grid-cols-[1.18fr_.62fr] items-end gap-[100px] pb-[70px] pt-[82px] max-[1200px]:gap-[58px] max-[1200px]:[&_h1]:text-[76px] max-[1000px]:grid-cols-1 max-[1000px]:py-14 max-[640px]:py-11 max-[640px]:[&_h1]:text-[50px]">
          <div>
            <div className="mb-[30px] text-[10px] font-extrabold tracking-[.2em] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">LIVE OPPORTUNITIES <span className="ml-[10px] text-brand-grey max-[760px]:hidden">/ COMPLEX JOBS</span></div>
            <h1 className="m-0 text-[clamp(68px,6.4vw,108px)] leading-[.88] tracking-[-.068em]">Find your next<br /><em className="not-italic text-brand-grey">opportunity<span className="text-brand-red">.</span></em></h1>
          </div>
          <div className="pb-2 max-[1000px]:max-w-[650px]">
            <p className="mb-[30px] max-w-[520px] text-base leading-[1.68] text-[#626d73]">Search current opportunities across Driving, Industrial and Construction. No account required — find a role, review the details and apply.</p>
            <TextLink href="/register-interest">Can’t see the right role? <span>Register interest</span></TextLink>
          </div>
        </Container>
        <div className="border-t border-line bg-surface max-[640px]:overflow-x-auto">
          <Container className="grid h-[104px] grid-cols-[repeat(3,1fr)_1.7fr] items-center border-l border-line max-[1000px]:grid-cols-3 max-[640px]:h-20 max-[640px]:w-[620px]">
            {['Driving', 'Industrial', 'Construction'].map((item) => <strong key={item} className="flex h-full items-center border-r border-line px-6 text-[13px]">{item}</strong>)}
            <span className="flex h-full items-center border-r border-line px-6 text-[9px] tracking-[.1em] text-[#6a7479] max-[1000px]:hidden">Temporary · Permanent · Temp-to-perm</span>
          </Container>
        </div>
      </section>

      <section className="bg-surface py-[126px] max-[640px]:py-[88px]">
        <Container>
          <div className="grid grid-cols-[.42fr_1fr] gap-[72px] max-[1200px]:grid-cols-[.3fr_1fr] max-[1200px]:gap-11 max-[640px]:block">
            <SectionLabel>SEARCH CURRENT JOBS</SectionLabel>
            <div className="max-[640px]:mt-7"><h2 className="m-0 text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">Work that fits<br /><em className="not-italic text-brand-red">what you do.</em></h2><p className="mt-[26px] max-w-[600px] text-sm leading-[1.7] text-[#647077]">Prototype vacancy data is being used during design. The finished page will read live jobs from the Complex CMS.</p></div>
          </div>
          <JobBoardExplorer />
        </Container>
      </section>

      <section className="bg-white py-[126px] max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[.7fr_1.3fr] gap-[90px] max-[1200px]:grid-cols-1 max-[1200px]:gap-[54px]">
          <div><SectionLabel>WORKING WITH COMPLEX</SectionLabel><h2 className="m-0 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">More than a<br /><em className="not-italic text-brand-red">job listing.</em></h2></div>
          <div className="grid grid-cols-2 border-l border-t border-line max-[640px]:grid-cols-1">
            {supportItems.map(([number, title, copy]) => <article key={number} className="group min-h-[230px] border-b border-r border-line p-7 transition-colors duration-300 hover:bg-surface"><div className="transition-transform duration-300 ease-complex group-hover:translate-x-[7px]"><span className="text-[8px] font-extrabold text-brand-red">{number}</span><h3 className="mb-3 mt-[62px] text-[22px] tracking-[-.025em]">{title}</h3><p className="max-w-[285px] text-[11px] leading-[1.6] text-[#69757a]">{copy}</p></div></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-brand-grey py-[120px] text-white max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.65fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
          <div className="[&_.sectionLabel]:text-white [&_.labelDot]:bg-white [&_.labelDot]:shadow-none"><SectionLabel>STAY ON OUR RADAR</SectionLabel><h2 className="m-0 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em]">Nothing suitable<br /><em className="not-italic text-brand-red">right now?</em></h2></div>
          <div><p className="mb-7 max-w-[560px] text-[15px] leading-[1.7] text-white/75">Tell us the type of work you are looking for and upload your CV once. The Complex team can then contact you when something relevant comes up.</p><ButtonLink href="/register-interest">Register Your Interest</ButtonLink></div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

function Footer() { return <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true" /><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment" /><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a><a href="/training/driver-assessments">Driver Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>LEGAL</h4><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>; }
