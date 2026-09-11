import { Header } from '../../components/Header';
import { Container } from '../../components/layout/Container';
import { RequestStaffForm } from '../../components/RequestStaffForm';
import { SectionLabel } from '../../components/SectionLabel';

const nextSteps = [
  ['01', 'We review the brief', 'The team checks the sector, role, timing and operational detail.'],
  ['02', 'We make contact', 'A specialist can clarify anything needed and discuss the requirement.'],
  ['03', 'Recruitment begins', 'Complex moves into sourcing, matching and relevant compliance checks.'],
];

export default function RequestStaffPage() {
  return (
    <main>
      <section className="grid min-h-[600px] grid-rows-[92px_1fr] bg-surface-strong max-[760px]:min-h-0 max-[760px]:grid-rows-[76px_auto]">
        <Header theme="light" />
        <Container className="grid grid-cols-[1.12fr_.58fr] items-end gap-[90px] pb-20 pt-[84px] max-[1100px]:grid-cols-[1fr_.72fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:py-[58px]">
          <div>
            <div className="mb-[30px] text-[10px] font-extrabold tracking-[.2em] text-ink before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">FOR EMPLOYERS <span className="ml-[10px] text-brand-grey">/ REQUEST STAFF</span></div>
            <h1 className="m-0 text-[clamp(60px,6vw,100px)] leading-[.9] tracking-[-.065em] max-[760px]:text-[52px]">Tell us what your<br /><em className="not-italic text-brand-grey">operation needs<span className="text-brand-red">.</span></em></h1>
          </div>
          <div className="pb-1 max-[760px]:mt-[34px]">
            <p className="max-w-[520px] text-base leading-[1.72] text-[#59646a]">A short, structured brief gives the Complex team the information needed to respond quickly. No account. No long onboarding process.</p>
            <div className="mt-[35px] flex items-end gap-[15px] border-t border-ink/15 pt-[22px]">
              <strong className="text-[64px] leading-[.8] tracking-[-.06em]">03</strong>
              <span className="pb-[3px] text-[9px] uppercase tracking-[.16em] text-[#727b80]">simple steps</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[130px] max-[760px]:py-[88px]">
        <Container className="grid grid-cols-[.68fr_1.32fr] items-start gap-[90px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px]">
          <aside className="max-[1100px]:max-w-[700px] max-[760px]:mb-[50px]">
            <SectionLabel>BEFORE YOU START</SectionLabel>
            <h2 className="mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">Keep it simple.<br /><em className="not-italic text-brand-red">We’ll handle the detail.</em></h2>
            <p className="max-w-[430px] text-sm leading-[1.72] text-[#657177]">You don’t need to know every specification before getting in touch. Start with the basics and the team can clarify the rest with you.</p>
            <div className="mt-10 flex flex-col border-t border-line">
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]"><b className="text-[8px] text-brand-red">01</b> Sector &amp; requirement type</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]"><b className="text-[8px] text-brand-red">02</b> Role, numbers, location &amp; timing</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]"><b className="text-[8px] text-brand-red">03</b> Your contact details</span>
            </div>
            <a href="tel:02039237888" className="mt-10 flex flex-col gap-1.5 border-b border-line border-t-2 border-t-brand-red py-5 outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
              <span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">URGENT REQUIREMENT?</span>
              <strong className="text-[19px]">Call 0203 923 7888</strong>
            </a>
          </aside>
          <RequestStaffForm />
        </Container>
      </section>

      <section className="bg-surface py-[120px] max-[760px]:py-[88px]">
        <Container>
          <SectionLabel>WHAT HAPPENS NEXT</SectionLabel>
          <div className="mt-[45px] grid grid-cols-3 border-l border-t border-line max-[760px]:grid-cols-1">
            {nextSteps.map(([number, title, copy]) => (
              <article key={number} className="min-h-[260px] border-b border-r border-line bg-white p-[26px] max-[760px]:min-h-[210px]">
                <span className="text-[8px] font-extrabold text-brand-red">{number}</span>
                <h3 className="mb-3 mt-[70px] text-2xl tracking-[-.03em]">{title}</h3>
                <p className="text-xs leading-[1.6] text-[#6b767c]">{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <footer className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" /><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment" /><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>
    </main>
  );
}
