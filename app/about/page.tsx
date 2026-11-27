import { pageMetadata } from '../../lib/seo';
import { HowComplexWorks } from "../../components/HowComplexWorks";
import { HeroEyebrow } from "../../components/HeroEyebrow";
import { Header } from "../../components/Header";
import { SectionLabel } from "../../components/SectionLabel";
import { Container } from "../../components/layout/Container";
import { Footer } from "../../components/layout/Footer";
import { ButtonLink } from "../../components/ui/ButtonLink";
import { TextLink } from "../../components/ui/TextLink";
import { AboutStickySectors } from "../../components/sectors/SectorShowcases";

const heading =
  "section-heading m-0 text-[clamp(50px,5vw,82px)] leading-[.95] tracking-[-.055em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red";
const values = [
  ["C", "Collaborative", "Working in partnership with clients."],
  [
    "O",
    "Ownership",
    "Taking responsibility for bookings, vacancies and requirements.",
  ],
  [
    "M",
    "Mindful",
    "Matching the right people while respecting deadlines and context.",
  ],
  ["P", "Passionate", "Bringing energy to every stage of recruitment."],
  ["L", "Leading", "Setting the standard through the way the team works."],
  ["EX", "eXceed", "Aiming to go beyond the expected."],
];

export const metadata = pageMetadata('About Us | Complex Recruitment', "Complex Recruitment provides specialist temporary, ad-hoc and permanent staffing across six operational sectors, with offices in North London and West London.");

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate grid grid-rows-[92px_auto] overflow-hidden bg-ink text-white max-[640px]:grid-rows-[76px_auto]">
        <Header active="About" theme="dark" />
        <div className="absolute -inset-[2%] -z-40 scale-[1.025] bg-[url('/about-hero-driver.jpg')] bg-cover bg-[position:50%_20%] grayscale-[.45]" />
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(8,9,10,.92),rgba(8,9,10,.72)_43%,rgba(8,9,10,.24)_74%,rgba(8,9,10,.45))]" />
        <Container className="grid grid-cols-[1fr_.55fr] items-end gap-[90px] pb-[72px] pt-[150px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px] max-[1000px]:pt-[120px] max-[640px]:pb-[56px] max-[640px]:pt-[64px]">
          <div>
            <HeroEyebrow detail="PEOPLE & OPERATIONS">
              ABOUT COMPLEX
            </HeroEyebrow>
            <h1 className="m-0 text-[clamp(64px,6.2vw,104px)] leading-[.88] tracking-[-.066em] max-[640px]:text-[clamp(44px,11.6vw,50px)]">
              Recruitment built
              <br />
              <em className="not-italic text-brand-red">around people.</em>
            </h1>
          </div>
          <div>
            <p className="mb-7 max-w-[520px] text-base leading-[1.7] text-[#d0d4d6]">
              Specialist recruitment across six operational sectors, combining
              experienced consultants, practical service models and a belief
              that the right people make operations work.
            </p>
            <ButtonLink href="/contact">Talk to Complex</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[126px] max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.75fr] gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
          <div>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2 className={`${heading} mt-[38px]`}>
              Specialist knowledge.
              <br />
              <em>Human service.</em>
            </h2>
          </div>
          <div className="[&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-[#626e74]">
            <p>
              Complex Recruitment provides temporary, ad-hoc and permanent
              staffing across six specialist operational sectors. The company
              combines traditional and modern recruitment methods with dedicated
              sector consultants and compliance management tailored to industry
              requirements.
            </p>
            <p>
              With offices in North London and West London, Complex supports
              clients and candidates across West London, Northwest London and
              North London.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-[88px] max-[640px]:pb-[64px]">
        <Container className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[1000px]:gap-x-10 max-[640px]:grid-cols-1">
          {[
            ["6", "Specialist sectors"],
            ["24/7", "Operational support"],
            ["40+", "Years combined senior-management experience"],
            ["03", "Core coverage areas"],
          ].map(([n, t]) => (
            <article
              className="flex flex-col gap-4 border-l border-line py-2 pl-8 pr-5 first:border-l-0 first:pl-0 max-[1000px]:border-l-0 max-[1000px]:border-t max-[1000px]:py-7 max-[1000px]:pl-0 max-[1000px]:pr-0 max-[640px]:gap-3 max-[640px]:py-6"
              key={t}
            >
              <strong className="text-[64px] leading-none tracking-[-.06em]">{n}</strong>
              <span className="max-w-[190px] text-[11px] leading-normal text-[#626e74]">
                {t}
              </span>
            </article>
          ))}
        </Container>
      </section>

      <section className="grid grid-cols-2 bg-white max-[1000px]:grid-cols-1">
        <div className="min-h-[650px] bg-[linear-gradient(rgba(17,18,20,.05),rgba(17,18,20,.16)),url('/stock/team-hands-together.jpg')] bg-cover bg-center grayscale-[.25] max-[1000px]:min-h-[430px]" />
        <div className="py-[110px] pl-20 pr-[max(60px,calc((100vw-1400px)/2))] max-[640px]:px-6 max-[640px]:py-[68px]">
          <SectionLabel>PEOPLE AT THE HEART</SectionLabel>
          <h2 className={`${heading} mt-[38px]`}>
            The business is built
            <br />
            <em>on relationships.</em>
          </h2>
          <p className="my-7 mb-[30px] max-w-[590px] text-[15px] leading-[1.72] text-[#626e74]">
            Collaboration, service, ethics and community guide how we work. In practice that means ownership of client requirements, clear communication with workers and a quick response when operations change.
          </p>
          <TextLink href="/employers">How We Support Employers</TextLink>
        </div>
      </section>

      <HowComplexWorks />

      <section className="bg-ink py-[126px] text-white max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[.4fr_1fr] gap-[70px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
          <SectionLabel>THE COMPLEX VALUES</SectionLabel>
          <div>
            <h2 className={heading}>
              A name with
              <br />
              <em>meaning behind it.</em>
            </h2>
            <p className="mt-7 max-w-[600px] text-sm leading-[1.7] text-[#aab2b6]">
              Our values are built around the letters in COMPLEX.
            </p>
          </div>
        </Container>
        <Container className="mt-[70px] grid grid-cols-3 border-l border-t border-white/15 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {values.map(([l, t, c]) => (
            <article
              className="group relative min-h-[290px] border-b border-r border-white/15 p-[27px] transition-[background,padding] duration-300 hover:bg-[#1c1e20] hover:pl-[34px] max-[640px]:min-h-[250px]"
              key={l}
            >
              <span className="text-[10px] font-extrabold text-brand-red">
                {l}
              </span>
              <h3 className="mb-3.5 mt-20 text-[26px]">{t}</h3>
              <p className="max-w-[280px] text-[11px] leading-[1.6] text-[#9fa8ad]">
                {c}
              </p>
              <i className="absolute right-6 top-6 text-brand-red opacity-0 transition duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px] group-hover:opacity-100">
                ↗
              </i>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-surface py-[126px] max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.85fr] items-start gap-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[50px]">
          <div>
            <SectionLabel>COMPLIANCE &amp; VETTING</SectionLabel>
            <h2 className="section-heading m-0 mt-[38px] text-[clamp(44px,4.3vw,70px)] leading-[.95] tracking-[-.055em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red">
              Checked for the work
              <br />
              <em>they are placed in.</em>
            </h2>
            <p className="my-7 max-w-[590px] text-[15px] leading-[1.72] text-[#626e74]">
              Clients need people who are available and appropriately checked
              for the role. Right to Work checks take place before placement,
              and further checks depend on the role, the working environment
              and the client requirement. Checks and supporting documents are
              recorded so the team can respond to onboarding requirements,
              queries and audits.
            </p>
            <ButtonLink href="/compliance" variant="dark">
              Explore Compliance &amp; Vetting
            </ButtonLink>
          </div>
          <div>
            <span className="text-[9px] font-extrabold tracking-[.17em] text-[#7b858b]">
              TYPICAL CHECKS
            </span>
            <div className="mt-5 border-t border-line">
              {[
                "Right to Work verification",
                "Driving licence and entitlement",
                "Role-specific qualifications",
                "References and employment history where required",
                "DBS where required",
                "Client-specific onboarding",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid min-h-[67px] grid-cols-[46px_1fr] items-center border-b border-line py-3"
                >
                  <span className="text-[8px] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-sm font-semibold">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pt-[126px] max-[640px]:pt-[88px]">
        <Container className="mb-[70px] grid grid-cols-[.4fr_1fr] gap-[70px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
          <SectionLabel>WHAT WE KNOW</SectionLabel>
          <h2 className={heading}>
            Six specialist sectors.
            <br />
            <em>One Complex standard.</em>
          </h2>
        </Container>
        <AboutStickySectors />
      </section>

      <section className="bg-brand-red py-[126px] text-white max-[640px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.65fr] items-end gap-[100px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
          <div>
            <SectionLabel>START A CONVERSATION</SectionLabel>
            <h2 className={`${heading} mt-[38px]`}>
              Staff, work or simply
              <br />
              <em>a question?</em>
            </h2>
          </div>
          <div>
            <p className="mb-[30px] text-[15px] leading-[1.7] text-white/80">
              Whether you are building a workforce or looking for your next
              opportunity, start with the team that knows the sector.
            </p>
            <div className="flex items-center gap-7 max-[640px]:flex-col max-[640px]:items-start">
              <ButtonLink href="/request-staff" variant="dark">
                Request Staff
              </ButtonLink>
              <TextLink href="/jobs" variant="light" arrowDirection="right">
                Find Work
              </TextLink>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
