import { pageMetadata } from '../../lib/seo';
import { HeroEyebrow } from '../../components/HeroEyebrow';
import { Header } from '../../components/Header';
import { SectionLabel } from '../../components/SectionLabel';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { TextLink } from '../../components/ui/TextLink';

const heading = 'section-heading m-0 text-[clamp(52px,5.4vw,86px)] leading-[.92] tracking-[-.06em] [&_em]:not-italic [&_em]:text-brand-red';
const subHeading = 'section-heading m-0 text-[clamp(38px,3.6vw,60px)] leading-[.98] tracking-[-.05em] [&_em]:not-italic [&_em]:text-brand-red';
const splitText = 'py-[100px] pl-20 pr-[max(60px,calc((100vw-1400px)/2))] max-[1000px]:px-[50px] max-[1000px]:py-[72px] max-[640px]:px-6 max-[640px]:py-[60px]';
const splitImage = 'min-h-[560px] bg-cover bg-center grayscale-[.2] max-[1000px]:min-h-[380px] max-[640px]:min-h-[300px]';

const index = [
  ['01', 'Onsite Driver Assessments', '#onsite-driver-assessments'],
  ['02', 'Driver Training, including CPC', '#driver-training'],
  ['03', 'Client Analysis', '#client-analysis'],
  ['04', 'Infringement Management', '#infringement-management'],
] as const;

const analysisPoints = [
  'Roles, headcount and shift patterns',
  'Site environment and experience level',
  'Equipment and onboarding requirements',
  'Performance and service information on ongoing assignments',
] as const;

const infringementPoints = [
  ['Licence and entitlement', 'Checked as part of placing a driver.'],
  ['Drivers’ hours and tachograph', 'Considered against the requirements of each assignment.'],
  ['Driver CPC training', 'Includes reducing infringements and drivers’ hours.'],
  ['Driver Assessments', 'Highlight where development would make a difference.'],
] as const;

export const metadata = pageMetadata('Additional Services | Complex Recruitment', "Onsite driver assessments, driver CPC training, client analysis and infringement management alongside Complex Recruitment’s recruitment services.");

export default function AdditionalServicesPage() {
  return <main className="bg-white text-ink">
    <section className="grid min-h-[600px] grid-rows-[92px_minmax(0,1fr)] bg-white max-[640px]:min-h-0 max-[640px]:grid-rows-[76px_auto]">
      <Header active="Additional Services" theme="light" />
      <Container gutter="wide" className="flex items-end py-[78px] max-[640px]:py-[58px]">
        <div className="max-w-[1100px]">
          <HeroEyebrow light detail="BEYOND RECRUITMENT">ADDITIONAL SERVICES</HeroEyebrow>
          <h1 className="m-0 text-[clamp(60px,5.8vw,98px)] font-semibold leading-[.89] tracking-[-.066em] max-[1180px]:text-[74px] max-[640px]:text-[50px] max-[640px]:text-balance">Support that goes <br className="max-[640px]:hidden" /><em className="not-italic text-brand-grey">beyond the placement<span className="text-brand-red">.</span></em></h1>
          <p className="my-[30px] max-w-[760px] text-[17px] leading-[1.65] text-[#5e6a70]">Four practical services that sit alongside Complex’s recruitment: driver assessments, driver training, client analysis and infringement management.</p>
          <div className="flex items-center gap-7 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-4">
            <ButtonLink href="#onsite-driver-assessments" arrowDirection="down-right">Explore the Services</ButtonLink>
            <TextLink href="/contact">Discuss a Requirement</TextLink>
          </div>
        </div>
      </Container>
    </section>

    <nav aria-label="Additional services" className="border-y border-line bg-surface">
      <Container className="grid grid-cols-4 border-l border-line max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
        {index.map(([number, title, href]) => <a key={href} href={href} className="group flex min-h-[96px] items-center gap-4 border-r border-line px-6 py-5 outline-none transition-colors hover:bg-white focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[1000px]:border-b max-[560px]:border-r-0 max-[560px]:min-h-[72px]">
          <span className="text-[9px] font-extrabold text-brand-red">{number}</span>
          <span className="flex-1 text-sm font-semibold leading-snug">{title}</span>
          <i aria-hidden="true" className="not-italic text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">↓</i>
        </a>)}
      </Container>
    </nav>

    <section id="onsite-driver-assessments" className="grid scroll-mt-6 grid-cols-2 bg-white max-[1000px]:grid-cols-1">
      <div role="img" aria-label="A driver at the wheel" className={splitImage} style={{ backgroundImage: "linear-gradient(rgba(17,18,20,.04),rgba(17,18,20,.18)),url('/additional-services-assessments.jpg')" }} />
      <div className={splitText}>
        <SectionLabel>01 / ONSITE DRIVER ASSESSMENTS</SectionLabel>
        <h2 className={`${subHeading} mt-[34px]`}>Understand how<br /><em>your drivers perform.</em></h2>
        <p className="my-7 max-w-[560px] text-[15px] leading-[1.72] text-[#626e74]">Practical, theory-led and load-security assessments give employers useful insight into driver capability, safety and development needs. Findings come back as clear feedback and recommendations, with follow-up support where it helps.</p>
        <div className="mb-[34px] flex flex-wrap gap-2">{['Theory', 'Practical', 'Load securing', 'Clear reporting'].map(item => <span key={item} className="border border-line px-[13px] py-[11px] text-[9px] text-[#5f696e]">{item}</span>)}</div>
        <ButtonLink href="/training/driver-assessments" variant="dark">Explore Driver Assessments</ButtonLink>
      </div>
    </section>

    <section id="driver-training" className="grid scroll-mt-6 grid-cols-2 bg-surface max-[1000px]:grid-cols-1">
      <div className={`${splitText} max-[1000px]:order-2 min-[1001px]:pl-[84px] min-[1280px]:pl-[max(100px,calc((100vw-1400px)/2))] min-[1001px]:pr-20`}>
        <SectionLabel>02 / DRIVER TRAINING, INCLUDING CPC</SectionLabel>
        <h2 className={`${subHeading} mt-[34px]`}>Training grounded<br /><em>in the job.</em></h2>
        <p className="my-7 max-w-[560px] text-[15px] leading-[1.72] text-[#626e74]">Driver CPC training designed around the practical realities of professional transport, as a 35-hour full course or in 7-hour split sessions. Complex delivers it in partnership with AVTAV Ltd, a member of the RTITB consortium, with courses approved by JAUPT and DVSA.</p>
        <div className="mb-[34px] flex flex-wrap gap-2">{['35-hour full course', '7-hour split sessions', 'Professional instructors'].map(item => <span key={item} className="border border-line bg-white px-[13px] py-[11px] text-[9px] text-[#5f696e]">{item}</span>)}</div>
        <ButtonLink href="/training/cpc" variant="dark">Explore CPC Training</ButtonLink>
      </div>
      <div role="img" aria-label="Lorries on the road" className={`${splitImage} max-[1000px]:order-1`} style={{ backgroundImage: "linear-gradient(rgba(17,18,20,.04),rgba(17,18,20,.18)),url('/additional-services-cpc.jpg')" }} />
    </section>

    <section id="client-analysis" className="scroll-mt-6 bg-ink py-[110px] text-white max-[640px]:py-[72px]">
      <Container className="grid grid-cols-[1fr_.9fr] gap-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
        <div className="[&_.sectionLabel]:text-white">
          <SectionLabel>03 / CLIENT ANALYSIS</SectionLabel>
          <h2 className={`${subHeading} mt-[34px]`}>Recruitment shaped<br /><em>around your operation.</em></h2>
          <p className="mb-5 mt-7 max-w-[560px] text-[15px] leading-[1.72] text-white/75">Good recruitment starts with understanding the business. Complex looks at what your operation actually needs, so the people supplied fit the work as well as the job title.</p>
          <p className="mb-[34px] max-w-[560px] text-[15px] leading-[1.72] text-white/75">On ongoing assignments, regular management information and performance reviews give you a clearer view of how the workforce is performing and where your requirements may be changing.</p>
          <TextLink href="/contact" variant="light">Discuss Client Analysis</TextLink>
        </div>
        <div>
          <span className="text-[9px] font-extrabold tracking-[.17em] text-white/55">WHAT WE LOOK AT</span>
          <div className="mt-5 border-t border-white/15">{analysisPoints.map((item, index) => <div key={item} className="grid min-h-[72px] grid-cols-[46px_1fr] items-center border-b border-white/15 py-3"><span className="text-[8px] text-brand-red">{String(index + 1).padStart(2, '0')}</span><strong className="text-sm font-semibold">{item}</strong></div>)}</div>
        </div>
      </Container>
    </section>

    <section id="infringement-management" className="scroll-mt-6 bg-white py-[110px] max-[640px]:py-[72px]">
      <Container className="grid grid-cols-[.9fr_1fr] gap-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
        <div className="max-[1000px]:order-2">
          <span className="text-[9px] font-extrabold tracking-[.17em] text-[#7b858b]">WHERE COMPLEX CAN HELP</span>
          <div className="mt-5 border-t border-line">{infringementPoints.map(([title, copy], index) => <div key={title} className="grid min-h-[84px] grid-cols-[46px_1fr] items-center border-b border-line py-3"><span className="text-[8px] text-brand-red">{String(index + 1).padStart(2, '0')}</span><div><strong className="block text-sm font-semibold">{title}</strong><span className="mt-1 block text-xs leading-[1.55] text-muted">{copy}</span></div></div>)}</div>
        </div>
        <div className="max-[1000px]:order-1">
          <SectionLabel>04 / INFRINGEMENT MANAGEMENT</SectionLabel>
          <h2 className={`${subHeading} mt-[34px]`}>Keep the practical<br /><em>side under control.</em></h2>
          <p className="mb-5 mt-7 max-w-[560px] text-[15px] leading-[1.72] text-[#626e74]">Infringements affect drivers, operators and the businesses that depend on them. Complex helps clients stay on top of the practical requirements, from licence and entitlement to drivers’ hours and tachograph documentation.</p>
          <p className="mb-[34px] max-w-[560px] text-[15px] leading-[1.72] text-[#626e74]">Where there is a pattern to address, Driver Assessments and CPC training are there to support better driver habits.</p>
          <TextLink href="/contact">Discuss Infringement Management</TextLink>
        </div>
      </Container>
    </section>

    <section className="bg-brand-red py-[120px] text-white max-[640px]:py-[88px]">
      <Container className="grid grid-cols-[1fr_.65fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
        <div>
          <SectionLabel>START A CONVERSATION</SectionLabel>
          <h2 className={`${heading} mt-[38px]`}>Tell us what you<br /><em className="!text-white">need to arrange.</em></h2>
        </div>
        <div>
          <p className="mb-[30px] text-[15px] leading-[1.7] text-white/80">Talk to the Complex team about assessments, training or the wider support around your workforce, and we will confirm the best next step.</p>
          <div className="flex items-center gap-7 max-[640px]:flex-col max-[640px]:items-start">
            <ButtonLink href="/contact" variant="dark">Make an Enquiry</ButtonLink>
            <TextLink href="/request-staff" variant="light" arrowDirection="right">Request Staff</TextLink>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
  </main>;
}
