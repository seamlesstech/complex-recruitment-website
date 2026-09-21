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

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate grid h-svh min-h-[760px] grid-rows-[92px_minmax(0,1fr)_96px] overflow-hidden bg-ink text-white max-[640px]:h-auto max-[640px]:min-h-0 max-[640px]:grid-rows-[76px_auto_auto]">
        <Header active="About" theme="dark" />
        <div className="absolute -inset-[2%] -z-40 scale-[1.025] bg-[url('/about-hero-driver.jpg')] bg-cover bg-center grayscale-[.45]" />
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(8,9,10,.92),rgba(8,9,10,.72)_43%,rgba(8,9,10,.24)_74%,rgba(8,9,10,.45))]" />
        <Container className="grid grid-cols-[1fr_.55fr] items-end gap-[90px] py-[70px] pb-[54px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px] max-[640px]:py-[72px] max-[640px]:pb-[60px]">
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
              Specialist recruitment across four operational sectors, combining
              experienced consultants, practical service models and a belief
              that the right people make operations work.
            </p>
            <ButtonLink href="/contact">Talk to Complex</ButtonLink>
          </div>
        </Container>
        <div className="overflow-x-auto bg-white/85 text-ink backdrop-blur-lg">
          <Container className="grid h-24 grid-cols-4 border-l border-line max-[640px]:h-[78px] max-[640px]:w-[650px]">
            {[
              "Edmonton office",
              "Park Royal office",
              "London",
              "Nationwide reach",
            ].map((x) => (
              <b
                className="flex items-center border-r border-line px-5 text-[11px]"
                key={x}
              >
                {x}
              </b>
            ))}
          </Container>
        </div>
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
              staffing across four specialist operational sectors. The company
              combines traditional and modern recruitment methods with dedicated
              sector consultants and compliance management tailored to industry
              requirements.
            </p>
            <p>
              With teams in Edmonton and Park Royal, Complex supports clients
              and candidates across London and nationwide. Its relationship with
              AVTAV adds wider group knowledge and support while Complex retains
              its own specialist recruitment focus.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid grid-cols-4 border-l border-t border-line max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {[
            ["04", "Specialist divisions"],
            ["24/7", "Operational support"],
            ["40+", "Years combined senior-management experience"],
            ["05", "Core coverage areas"],
          ].map(([n, t]) => (
            <article
              className="flex min-h-[250px] flex-col justify-between border-b border-r border-line p-7 max-[640px]:min-h-[190px]"
              key={n}
            >
              <strong className="text-[64px] tracking-[-.06em]">{n}</strong>
              <span className="max-w-[190px] text-[11px] leading-normal text-[#626e74]">
                {t}
              </span>
            </article>
          ))}
        </Container>
      </section>

      <section className="grid grid-cols-2 bg-white max-[1000px]:grid-cols-1">
        <div className="min-h-[650px] bg-[linear-gradient(rgba(17,18,20,.05),rgba(17,18,20,.16)),url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center grayscale-[.25] max-[1000px]:min-h-[430px]" />
        <div className="py-[110px] pl-20 pr-[max(60px,calc((100vw-1400px)/2))] max-[640px]:px-6 max-[640px]:py-[68px]">
          <SectionLabel>PEOPLE AT THE HEART</SectionLabel>
          <h2 className={`${heading} mt-[38px]`}>
            The business is built
            <br />
            <em>on relationships.</em>
          </h2>
          <p className="my-7 mb-[30px] max-w-[590px] text-[15px] leading-[1.72] text-[#626e74]">
            Complex’s existing positioning speaks about collaboration, service,
            ethics and community. For the new site, the story is less about
            corporate slogans and more about what those principles look like in
            practice: ownership of client requirements, communication with
            workers and responsiveness when operations change.
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
              The current site builds its values around the letters in COMPLEX.
              We can retain that recognisable idea while simplifying the
              presentation and language.
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

      <section className="bg-white pt-[126px] max-[640px]:pt-[88px]">
        <Container className="mb-[70px] grid grid-cols-[.4fr_1fr] gap-[70px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px]">
          <SectionLabel>WHAT WE KNOW</SectionLabel>
          <h2 className={heading}>
            Four specialist sectors.
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
