import { Header } from '../../../components/Header';
import { JobApplicationForm } from '../../../components/jobs/JobApplicationForm';
import { Container } from '../../../components/layout/Container';
import { SectionLabel } from '../../../components/SectionLabel';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import { TextLink } from '../../../components/ui/TextLink';

const relatedJobs = [['HGV Class 2 Driver', 'North London'], ['Transport Planner', 'London'], ['7.5T Driver', 'Greater London']];
const detailBlockClass = 'border-t border-line py-[42px] [&_h3]:mb-6 [&_h3]:mt-0 [&_h3]:text-[27px] [&_h3]:tracking-[-.03em] [&_li]:text-sm [&_li]:leading-[1.75] [&_li]:text-[#5f6b71] [&_li+li]:mt-[9px] [&_p]:text-sm [&_p]:leading-[1.75] [&_p]:text-[#5f6b71] [&_ul]:m-0 [&_ul]:pl-5';

export default function JobDetailPage() {
  return (
    <main className="bg-white text-ink">
      <section className="grid min-h-[700px] grid-rows-[92px_minmax(0,1fr)_92px] bg-surface max-[1000px]:min-h-0 max-[1000px]:grid-rows-[92px_auto_auto] max-[640px]:grid-rows-[76px_auto_auto]">
        <Header active="Jobs" theme="light" />
        <Container className="grid grid-cols-[1fr_.55fr] items-end gap-[100px] pb-14 pt-[72px] max-[1200px]:gap-[58px] max-[1200px]:[&_h1]:text-[76px] max-[1000px]:grid-cols-1 max-[1000px]:py-14 max-[640px]:py-11 max-[640px]:[&_h1]:text-[50px]">
          <div>
            <a className="mb-12 inline-block text-[11px] text-[#69747a] outline-none focus-visible:ring-2 focus-visible:ring-brand-red" href="/jobs">← Back to jobs</a>
            <span className="mb-6 block text-[8px] font-extrabold tracking-[.18em] text-brand-red">DRIVING / TEMPORARY</span>
            <h1 className="m-0 text-[clamp(68px,6.4vw,106px)] leading-[.88] tracking-[-.066em]">HGV Class 1<br /><em className="not-italic text-brand-grey">Driver<span className="text-brand-red">.</span></em></h1>
          </div>
          <div className="border-t border-line max-[1000px]:max-w-[540px]">
            {[['LOCATION', 'Enfield'], ['RATE', '£19–£22/hr'], ['REFERENCE', 'COM-1043']].map(([label, value]) => <div key={label} className="grid grid-cols-[.7fr_1fr] gap-5 border-b border-line py-[18px]"><span className="text-[8px] tracking-[.15em] text-[#7d868b]">{label}</span><strong className="text-sm">{value}</strong></div>)}
            <ButtonLink href="#apply" arrowDirection="down-right" className="mt-[26px] w-full">Apply for this job</ButtonLink>
          </div>
        </Container>
        <div className="border-t border-line bg-white max-[640px]:overflow-x-auto"><Container className="grid h-[92px] grid-cols-[repeat(4,1fr)_1.4fr] border-l border-line max-[1000px]:grid-cols-3 max-[640px]:h-[78px] max-[640px]:w-[520px]">
          {['HGV Class 1', 'Temporary', 'Night / Day shifts', 'Immediate start'].map((item, index) => <b key={item} className={`flex items-center border-r border-line px-5 text-[10px] ${index === 3 ? 'max-[1000px]:hidden' : ''}`}>{item}</b>)}
          <span className="flex items-center border-r border-line px-5 text-[8px] uppercase tracking-[.12em] text-[#8b9296] max-[1000px]:hidden">Prototype vacancy</span>
        </Container></div>
      </section>

      <section className="bg-white py-[126px] max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_360px] items-start gap-[100px] max-[1200px]:grid-cols-[1fr_320px] max-[1200px]:gap-[60px] max-[1000px]:grid-cols-1">
          <article className="max-w-[820px]">
            <SectionLabel>THE ROLE</SectionLabel>
            <h2 className="mb-7 mt-[34px] text-[clamp(52px,4.8vw,78px)] leading-[.95] tracking-[-.055em] max-[640px]:text-5xl">Keep a busy transport<br /><em className="not-italic text-brand-red">operation moving.</em></h2>
            <p className="mb-16 text-lg leading-[1.68] text-[#5e6a70] max-[640px]:text-base">Complex is recruiting an experienced HGV Class 1 Driver for a temporary assignment in Enfield. This prototype copy demonstrates the structure the CMS-driven vacancy page will support.</p>
            <div className={detailBlockClass}><h3>What you’ll be doing</h3><ul><li>Completing scheduled Class 1 deliveries safely and efficiently.</li><li>Carrying out vehicle checks and reporting defects appropriately.</li><li>Following site, transport and customer procedures.</li><li>Maintaining accurate delivery and driving records.</li><li>Communicating clearly with the transport team throughout the shift.</li></ul></div>
            <div className={detailBlockClass}><h3>What we’re looking for</h3><ul><li>Valid HGV Class 1 licence and relevant Driver CPC.</li><li>Current Digital Tachograph Card.</li><li>Professional approach to vehicle safety and compliance.</li><li>Relevant recent driving experience.</li><li>Ability to work the advertised shift pattern.</li></ul></div>
            <div className={detailBlockClass}><h3>Working through Complex</h3><p>Complex supports candidates before and during assignments with clear communication, reliable processes and sector-focused recruitment support.</p></div>
          </article>
          <aside className="sticky top-[30px] min-h-[430px] bg-ink p-[34px] text-white max-[1000px]:relative max-[1000px]:top-auto max-[640px]:p-7">
            <span className="text-[8px] font-extrabold tracking-[.17em] text-[#a2aaae]">READY TO APPLY?</span><h3 className="mb-5 mt-20 text-[38px] leading-none tracking-[-.045em]">Think this role<br />fits you?</h3><p className="mb-[26px] text-xs leading-[1.65] text-[#aeb6ba]">You can complete the application in a few minutes. Have your CV ready.</p><ButtonLink href="#apply" className="w-full">Start Application</ButtonLink>
            <div className="mt-[34px] border-t border-white/15 pt-[22px]"><span className="block text-[8px] tracking-[.16em] text-[#858f94]">APPLICATION</span><strong className="my-2 mt-3 block text-sm">No account required.</strong><small className="text-[10px] leading-normal text-[#939da1]">Your details go directly to the Complex recruitment team.</small></div>
          </aside>
        </Container>
      </section>

      <section className="bg-surface py-[126px] max-[640px]:py-[88px]" id="apply">
        <Container className="grid grid-cols-[.7fr_1.3fr] gap-[90px] max-[1200px]:grid-cols-1 max-[1200px]:gap-[54px]">
          <div><SectionLabel>APPLY FOR THIS ROLE</SectionLabel><h2 className="mb-6 mt-[34px] text-[clamp(52px,5vw,82px)] leading-[.95] tracking-[-.055em] max-[640px]:text-5xl">A straightforward<br /><em className="not-italic text-brand-red">application.</em></h2><p className="max-w-[500px] text-sm leading-[1.7] text-[#637077]">In the production build this submission will create an application record in the Complex admin system and notify the recruitment team by email.</p></div>
          <JobApplicationForm />
        </Container>
      </section>

      <section className="bg-white py-[110px] max-[640px]:py-[88px]"><Container><div className="mb-[42px] flex items-center justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-5"><SectionLabel>RELATED DRIVING ROLES</SectionLabel><TextLink href="/jobs">View All Jobs</TextLink></div><div className="grid grid-cols-3 border-l border-t border-line max-[1000px]:grid-cols-1">{relatedJobs.map(([title, location]) => <a href="/jobs" key={title} className="group relative min-h-[280px] border-b border-r border-line p-[26px] outline-none transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red"><div className="transition-transform duration-300 ease-complex group-hover:translate-x-2 group-focus-visible:translate-x-2"><small className="text-[8px] font-extrabold text-brand-red">DRIVING</small><h3 className="mb-[14px] mt-[86px] text-[26px] leading-[1.05] tracking-[-.035em]">{title}</h3><span className="text-[11px] text-[#68747a]">{location}</span></div><i className="absolute right-[25px] top-[25px] not-italic text-brand-red transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-focus-visible:translate-x-1.5 group-focus-visible:-translate-y-1.5">↗</i></a>)}</div></Container></section>
      <Footer />
    </main>
  );
}

function Footer() { return <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true" /><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment" /><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></nav></div></footer>; }
