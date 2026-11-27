import Link from 'next/link';
import type { ReactNode } from 'react';
import { pageMetadata } from '../../lib/seo';
import { HeroEyebrow } from '../../components/HeroEyebrow';
import { Header } from '../../components/Header';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { ArrowIcon } from '../../components/ui/ArrowIcon';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { TextLink } from '../../components/ui/TextLink';

export const metadata = pageMetadata('Additional Services | Complex Recruitment', "Onsite driver assessments, driver CPC training, client analysis and infringement management alongside Complex Recruitment’s recruitment services.");

// Shared type scale: every feature section uses the same heading, body copy and eyebrow
// treatment so the page changes rhythm (photo / reverse photo / light / dark / red)
// without changing voice. There is deliberately no service numbering anywhere.
const heading = 'section-heading m-0 text-[clamp(38px,3.6vw,60px)] leading-[.98] tracking-[-.05em] [&_em]:not-italic [&_em]:text-brand-red';
const body = 'm-0 max-w-[540px] text-[15px] leading-[1.72] text-[#626e74]';
const eyebrowBase = 'flex items-center text-[10px] font-extrabold uppercase tracking-[.2em] before:mr-[13px] before:h-0.5 before:w-9 before:shrink-0 before:bg-brand-red before:content-[""]';
const eyebrow = `${eyebrowBase} text-[#5f686e]`;
const featureSection = 'scroll-mt-6 py-[112px] max-[1000px]:py-[84px] max-[640px]:py-[64px]';

const services = [
  { title: 'Onsite Driver Assessments', copy: 'Theory, practical and load-security assessments, with clear feedback.', href: '/training/driver-assessments', route: true },
  { title: 'Driver Training & CPC', copy: 'Driver CPC training as a 35-hour course or in 7-hour sessions.', href: '/training/cpc', route: true },
  { title: 'Client Analysis', copy: 'Understanding what your operation needs, so the people supplied fit the work.', href: '#client-analysis', route: false },
  { title: 'Infringement Management', copy: 'Staying on top of the practical requirements, from licence to drivers’ hours.', href: '#infringement-management', route: false },
] as const;

const assessmentPoints = [
  'Theory-led assessment',
  'Practical assessment',
  'Load-security assessment',
  'Clear feedback and recommendations',
] as const;

const cpcPoints = [
  '35-hour full course',
  '7-hour split sessions',
  'Courses approved by JAUPT and DVSA',
  'Professional instructors',
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

/** A short hairline list of supporting points: a red rule, then the point. */
function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-x-8 border-t border-line p-0 max-[640px]:grid-cols-1">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3 border-b border-line py-4 text-sm font-semibold leading-[1.45]">
          <span aria-hidden="true" className="mt-[9px] h-0.5 w-3.5 shrink-0 bg-brand-red" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Photograph inside the normal content container. Decorative to the copy beside it, so alt text is brief. */
function FeatureImage({ src, alt, position, className = '' }: { src: string; alt: string; position: string; className?: string }) {
  return (
    <div className={`relative min-h-[560px] overflow-hidden bg-surface-strong max-[1000px]:aspect-[4/3] max-[1000px]:min-h-0 max-[640px]:aspect-[5/4] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} />
    </div>
  );
}

function FeatureHeading({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <span className={eyebrow}>{label}</span>
      <h2 className={`${heading} mt-7`}>{children}</h2>
    </>
  );
}

export default function AdditionalServicesPage() {
  return <main className="bg-white text-ink">
    {/* 1. Editorial hero */}
    <section className="grid grid-rows-[92px_auto] bg-white max-[640px]:grid-rows-[76px_auto]">
      <Header active="Additional Services" theme="light" />
      <Container className="grid grid-cols-[1.3fr_.7fr] items-end gap-[80px] pb-[88px] pt-[72px] max-[1100px]:gap-[48px] max-[900px]:block max-[900px]:pb-[64px] max-[900px]:pt-[56px] max-[640px]:pb-[48px] max-[640px]:pt-[40px]">
        <div>
          <HeroEyebrow light>ADDITIONAL SERVICES</HeroEyebrow>
          <h1 className="m-0 text-[clamp(44px,5.2vw,84px)] font-semibold leading-[.94] tracking-[-.06em] max-[640px]:text-[42px] max-[640px]:text-balance">More than recruitment.<br /><span className="text-brand-grey">Support that keeps operations moving<span className="text-brand-red">.</span></span></h1>
        </div>
        <div className="max-[900px]:mt-9">
          <p className="m-0 max-w-[460px] text-[16px] leading-[1.7] text-[#5e6a70]">Four practical services that sit alongside Complex’s recruitment: driver assessments, driver training, client analysis and infringement management.</p>
        </div>
      </Container>
    </section>

    {/* 2. Service directory (2 x 2) */}
    <section className="bg-white pb-[112px] max-[1000px]:pb-[84px] max-[640px]:pb-[64px]">
      <Container>
        <nav aria-label="The four additional services">
          <h2 className="sr-only">Our four additional services</h2>
          <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 max-[640px]:grid-cols-1">
            {services.map(({ title, copy, href, route }) => {
              const classes = 'group relative flex h-full min-h-[260px] flex-col justify-end bg-surface p-9 transition-colors duration-300 hover:bg-surface-strong focus-visible:bg-surface-strong focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-red max-[1000px]:min-h-[220px] max-[1000px]:p-7 max-[640px]:min-h-0 max-[640px]:p-6 max-[640px]:pt-14';
              const content = <>
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-red transition-transform duration-500 ease-complex group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                <span className="block text-[clamp(24px,2.3vw,34px)] font-semibold leading-[1.08] tracking-[-.035em]">{title}</span>
                <span className="mt-3 block max-w-[400px] pr-12 text-sm leading-[1.6] text-[#626e74]">{copy}</span>
                <ArrowIcon direction={route ? 'up-right' : 'down-right'} className="absolute bottom-8 right-9 text-xl text-brand-red transition-transform duration-300 ease-complex group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-focus-visible:translate-x-[3px] group-focus-visible:-translate-y-[3px] max-[1000px]:bottom-7 max-[1000px]:right-7 max-[640px]:bottom-6 max-[640px]:right-6" />
              </>;
              return <li key={title}>{route ? <Link href={href} className={classes}>{content}</Link> : <a href={href} className={classes}>{content}</a>}</li>;
            })}
          </ul>
        </nav>
      </Container>
    </section>

    {/* 3. Driver Assessments: image left, copy right */}
    <section id="onsite-driver-assessments" className={`${featureSection} bg-surface`}>
      <Container className="grid grid-cols-[1.05fr_.95fr] items-stretch gap-[96px] max-[1180px]:gap-[56px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[44px]">
        <FeatureImage src="/stock/van-driver-at-the-wheel.jpg" alt="A driver at the wheel of a right-hand-drive van" position="66% 45%" />
        <div className="flex flex-col justify-center">
          <FeatureHeading label="Onsite Driver Assessments">Understand how<br /><em>your drivers perform.</em></FeatureHeading>
          <p className={`${body} my-7`}>Practical, theory-led and load-security assessments give employers useful insight into driver capability, safety and development needs. Findings come back as clear feedback and recommendations, with follow-up support where it helps.</p>
          <PointList items={assessmentPoints} />
          <div className="mt-9"><ButtonLink href="/training/driver-assessments" variant="dark">Explore Driver Assessments</ButtonLink></div>
        </div>
      </Container>
    </section>

    {/* 4. Driver Training & CPC: copy left, image right */}
    <section id="driver-training" className={`${featureSection} bg-white`}>
      <Container className="grid grid-cols-[.95fr_1.05fr] items-stretch gap-[96px] max-[1180px]:gap-[56px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[44px]">
        <div className="flex flex-col justify-center max-[1000px]:order-2">
          <FeatureHeading label="Driver Training & CPC">Training grounded<br /><em>in the job.</em></FeatureHeading>
          <p className={`${body} my-7`}>Driver CPC training designed around the practical realities of professional transport, delivered in partnership with AVTAV Ltd, a member of the RTITB consortium.</p>
          <PointList items={cpcPoints} />
          <div className="mt-9"><ButtonLink href="/training/cpc" variant="dark">Explore CPC Training</ButtonLink></div>
        </div>
        <FeatureImage src="/stock/hgv-driver-at-trailer-depot.jpg" alt="A lorry driver in hi-vis at the cab of an articulated lorry in a depot yard" position="40% 50%" className="max-[1000px]:order-1" />
      </Container>
    </section>

    {/* 5. Client Analysis: light, typographic */}
    <section id="client-analysis" className={`${featureSection} bg-surface`}>
      <Container className="grid grid-cols-[1.05fr_.95fr] items-start gap-[96px] max-[1180px]:gap-[56px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[44px]">
        <div>
          <span className={eyebrow}>Client Analysis</span>
          <h2 className="section-heading m-0 mt-7 text-[clamp(44px,4.8vw,78px)] leading-[.95] tracking-[-.055em] [&_em]:not-italic [&_em]:text-brand-red">Recruitment shaped<br /><em>around your operation.</em></h2>
        </div>
        <div className="min-[1001px]:pt-[7px]">
          <p className={`${body} mb-5`}>Good recruitment starts with understanding the business. Complex looks at what your operation actually needs, so the people supplied fit the work as well as the job title.</p>
          <p className={`${body} mb-9`}>On ongoing assignments, regular management information and performance reviews give you a clearer view of how the workforce is performing and where your requirements may be changing.</p>
          <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5f686e]">What we look at</span>
          <div className="mt-4 border-t border-line">
            {analysisPoints.map(item => (
              <div key={item} className="flex items-start gap-3 border-b border-line py-4">
                <span aria-hidden="true" className="mt-[9px] h-0.5 w-3.5 shrink-0 bg-brand-red" />
                <span className="text-sm font-semibold leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9"><TextLink href="/contact">Discuss Client Analysis</TextLink></div>
        </div>
      </Container>
    </section>

    {/* 6. Infringement Management: dark operational break */}
    <section id="infringement-management" className={`${featureSection} bg-ink text-white`}>
      <Container className="grid grid-cols-[.9fr_1.1fr] items-start gap-[96px] max-[1180px]:gap-[56px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[44px]">
        <div>
          <span className={`${eyebrowBase} text-white/60`}>Infringement Management</span>
          <h2 className="section-heading m-0 mt-7 text-[clamp(48px,5.6vw,92px)] leading-[.93] tracking-[-.06em] text-white [&_em]:not-italic [&_em]:text-brand-red">Keep the practical<br /><em>side under control.</em></h2>
        </div>
        <div className="min-[1001px]:pt-[7px]">
          <p className="mb-5 mt-0 max-w-[560px] text-[15px] leading-[1.72] text-white/70">Infringements affect drivers, operators and the businesses that depend on them. Complex helps clients stay on top of the practical requirements, from licence and entitlement to drivers’ hours and tachograph documentation.</p>
          <p className="mb-9 mt-0 max-w-[560px] text-[15px] leading-[1.72] text-white/70">Where there is a pattern to address, Driver Assessments and CPC training are there to support better driver habits.</p>
          <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-white/60">Where Complex can help</span>
          <div className="mt-4 border-t border-white/15">
            {infringementPoints.map(([title, copy]) => (
              <div key={title} className="flex items-start gap-3 border-b border-white/15 py-4">
                <span aria-hidden="true" className="mt-[9px] h-0.5 w-3.5 shrink-0 bg-brand-red" />
                <div>
                  <strong className="block text-sm font-semibold">{title}</strong>
                  <span className="mt-1 block text-[13px] leading-[1.55] text-white/60">{copy}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9"><TextLink href="/contact" variant="light">Discuss Infringement Management</TextLink></div>
        </div>
      </Container>
    </section>

    {/* 7. Closing CTA */}
    <section className="bg-brand-red py-[120px] text-white max-[1000px]:py-[96px] max-[640px]:py-[72px]">
      <Container className="grid grid-cols-[1fr_.65fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[40px]">
        <h2 className="section-heading m-0 text-[clamp(44px,5vw,80px)] leading-[.94] tracking-[-.06em] max-[640px]:text-[40px]">Need support<br />beyond the placement?</h2>
        <div>
          <p className="mb-[30px] mt-0 max-w-[440px] text-[15px] leading-[1.7] text-white/85">Tell us what your operation needs and we’ll take it from there.</p>
          <div className="flex items-center gap-7 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-4">
            <ButtonLink href="/request-staff" variant="dark">Request Staff</ButtonLink>
            <TextLink href="/contact" variant="light" arrowDirection="right">Contact Us</TextLink>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
  </main>;
}
