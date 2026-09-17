import { Hero } from "../components/Hero";
import { SectionLabel } from "../components/SectionLabel";
import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer";
import { SectorDualCta } from "../components/sectors/SectorSections";
import { HomeSectorGrid } from "../components/sectors/SectorShowcases";
import { ButtonLink } from "../components/ui/ButtonLink";

const heading =
  "section-heading m-0 text-[clamp(48px,5.2vw,84px)] leading-[.96] tracking-[-.05em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red";
type TrustedLogo = { name: string; alt: string };
const trustedLogos: readonly TrustedLogo[] = [
  { name: "AMAZON", alt: "Amazon" },
  { name: "ASDA", alt: "Asda" },
  { name: "XPO", alt: "XPO" },
  { name: "CEVA", alt: "CEVA Logistics" },
  { name: "LYRECO", alt: "Lyreco" },
  { name: "POUNDLAND", alt: "Poundland" },
];
const jobs = [
  ["HGV Class 1 Driver", "Enfield", "Driving", "Temporary", "£19–£22/hr"],
  ["Warehouse Operative", "Croydon", "Industrial", "Temporary", "£12.50/hr"],
  ["HGV Class 2 Driver", "Park Royal", "Driving", "Temp-to-perm", "£17–£20/hr"],
  [
    "CSCS Labourer",
    "Greater London",
    "Construction",
    "Temporary",
    "Competitive",
  ],
];
export default function Home() {
  return (
    <main id="top">
      <Hero />
      <section className="overflow-hidden border-b border-line bg-surface py-[52px]">
        <Container gutter="wide">
          <h2 className="mx-auto max-w-[900px] text-center text-[clamp(18px,1.55vw,22px)] font-semibold leading-[1.35] tracking-[-.015em] text-[#626e74]">
            Trusted by leading logistics, distribution, and retail operations
          </h2>
        </Container>
        <div
          className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
          aria-label="Organisations that trust Complex Recruitment"
        >
          <div className="trustedMarqueeTrack flex w-max items-center">
            {[false, true].map((duplicate) => (
              <div
                className={`flex shrink-0 items-center gap-20 pr-20 max-[760px]:gap-12 max-[760px]:pr-12 ${duplicate ? "trustedMarqueeDuplicate" : ""}`}
                aria-hidden={duplicate || undefined}
                key={String(duplicate)}
              >
                {trustedLogos.map((logo) => (
                  <span
                    className="min-w-[120px] text-center text-sm font-black tracking-[.05em] text-[#7b8285] opacity-80 grayscale max-[760px]:min-w-[96px] max-[760px]:text-xs"
                    aria-label={logo.alt}
                    key={logo.name}
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface py-[130px] max-[640px]:py-[88px]"
        id="about"
      >
        <Container gutter="wide">
          <SectionLabel>WHY COMPLEX</SectionLabel>
          <div className="mt-[52px] grid grid-cols-[1.35fr_.65fr] items-end gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-9">
            <h2 className={heading}>
              More than recruitment.
              <br />
              <em>A workforce partner.</em>
            </h2>
            <p className="max-w-[530px] text-lg leading-[1.6] text-[#526069]">
              We help businesses respond to changing workforce requirements with
              a PAYE temporary workforce alongside ad-hoc and permanent staffing — supported by
              sector expertise, compliance and hands-on account management.
            </p>
          </div>
          <div className="mt-[100px] grid grid-cols-3 border-y border-line max-[640px]:grid-cols-1">
            {[
              ["40", "+", "Years of combined senior management experience"],
              ["24", " / 7", "Operational support when your business needs it"],
              ["REC", "", "Member with compliance-led recruitment processes"],
            ].map(([a, b, c], i) => (
              <article
                className="border-r border-line py-9 pr-9 last:border-0 not-first:pl-9 max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:px-0"
                key={i}
              >
                <strong className="text-[62px] tracking-[-.06em]">
                  {a}
                  <span className="text-[.45em]">{b}</span>
                </strong>
                <p className="max-w-60 text-xs leading-[1.45] text-muted">
                  {c}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="relative bg-[#151618] pt-[120px] text-white max-[640px]:pt-[88px]"
        id="sectors"
      >
        <Container gutter="wide" className="pb-[70px]">
          <SectionLabel>SPECIALIST RECRUITMENT</SectionLabel>
          <h2 className={`${heading} mt-[34px]`}>
            Built around the industries
            <br />
            that keep things moving.
          </h2>
        </Container>
        <HomeSectorGrid />
      </section>

      <section
        className="bg-[#17181a] py-[130px] text-white max-[640px]:py-[88px]"
        id="employers"
      >
        <Container
          gutter="wide"
          className="grid grid-cols-[1.25fr_.75fr] gap-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
        >
          <div>
            <SectionLabel>FOR EMPLOYERS</SectionLabel>
            <h2 className={`${heading} mt-[34px]`}>
              Need people?
              <br />
              <em>Tell us what your operation needs.</em>
            </h2>
          </div>
          <div className="pt-16 max-[900px]:pt-0">
            <p className="mb-[34px] text-lg leading-[1.65] text-[#b8c0c5]">
              Whether you're looking for one specialist worker or a high-volume
              temporary workforce, tell us what you need and the Complex team
              will take it from there.
            </p>
            <ButtonLink href="#request-staff">Request Staff</ButtonLink>
          </div>
        </Container>
        <Container
          gutter="wide"
          className="mt-[100px] grid grid-cols-3 border-t border-white/20 max-[640px]:grid-cols-1"
        >
          {[
            [
              "01",
              "Temporary & Ad-hoc",
              "Flexible staffing for fluctuating operational demand.",
            ],
            [
              "02",
              "Permanent",
              "Recruitment for longer-term specialist and operational roles.",
            ],
            [
              "03",
              "Compliance-led",
              "Relevant checks and requirements managed before placement.",
            ],
          ].map(([n, t, c]) => (
            <div
              className="min-h-[190px] border-r border-white/20 pt-8 pr-[34px] not-first:pl-[34px] last:border-0 max-[640px]:min-h-0 max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:px-0 max-[640px]:pb-8"
              key={n}
            >
              <span className="text-[10px] text-brand-red">{n}</span>
              <h3 className="my-[26px] mb-3 text-[22px]">{t}</h3>
              <p className="max-w-[300px] text-[13px] leading-normal text-[#99a4aa]">
                {c}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-surface py-[130px] max-[640px]:py-[88px]">
        <Container
          gutter="wide"
          className="grid grid-cols-[1fr_2fr] items-start max-[760px]:grid-cols-1 max-[760px]:gap-9"
        >
          <SectionLabel>HOW COMPLEX WORKS</SectionLabel>
          <h2 className={heading}>
            From requirement
            <br />
            to workforce.
          </h2>
        </Container>
        <Container
          gutter="wide"
          className="mt-[90px] grid grid-cols-4 border-t border-line max-[900px]:grid-cols-2 max-[640px]:grid-cols-1"
        >
          {[
            [
              "01",
              "Tell us what you need",
              "Role, location, numbers, shift and start date.",
            ],
            [
              "02",
              "We source and verify",
              "We identify suitable people and complete applicable checks.",
            ],
            [
              "03",
              "Your workforce is ready",
              "Confirmed workers are prepared for the assignment.",
            ],
            [
              "04",
              "We stay involved",
              "Ongoing communication and account support throughout.",
            ],
          ].map(([n, t, c]) => (
            <article
              className="min-h-[260px] border-r border-line py-[30px] pr-[30px] not-first:pl-[30px] last:border-0 max-[640px]:min-h-[220px] max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:px-0"
              key={n}
            >
              <span className="text-[10px] text-brand-red">{n}</span>
              <h3 className="my-[55px] mb-3.5 text-[22px]">{t}</h3>
              <p className="text-[13px] leading-[1.55] text-[#69737a]">{c}</p>
            </article>
          ))}
        </Container>
      </section>

      <section
        className="bg-surface-strong py-[130px] max-[640px]:py-[88px]"
        id="jobs"
      >
        <Container
          gutter="wide"
          className="grid grid-cols-[1.25fr_.75fr] items-end gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-9"
        >
          <div>
            <SectionLabel>LATEST OPPORTUNITIES</SectionLabel>
            <h2 className={`${heading} mt-[34px]`}>
              Your next role
              <br />
              <em>could be here.</em>
            </h2>
          </div>
          <p className="max-w-[410px] text-base leading-[1.6] text-[#59646b]">
            Browse current opportunities across our four specialist sectors.
          </p>
        </Container>
        <Container
          gutter="wide"
          className="mt-[70px] border-t border-[#9ca39c]"
        >
          <div className="grid h-[42px] grid-cols-[2fr_1fr_1fr_1fr_1fr_36px] items-center gap-[22px] text-[9px] tracking-[.14em] text-[#687168] max-[700px]:hidden">
            {["ROLE", "LOCATION", "SECTOR", "TYPE", "RATE", ""].map((x, i) => (
              <span key={i}>{x}</span>
            ))}
          </div>
          {jobs.map((job) => (
            <a
              className="group grid min-h-[94px] grid-cols-[2fr_1fr_1fr_1fr_1fr_36px] items-center gap-[22px] border-t border-ink/20 transition hover:bg-white/40 hover:pl-3 max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-2 max-[700px]:py-5"
              href="#"
              key={job[0]}
            >
              <strong className="text-xl max-[700px]:col-span-2">
                {job[0]}
              </strong>
              {job.slice(1).map((x) => (
                <span className="text-xs text-[#4f5a60]" key={x}>
                  {x}
                </span>
              ))}
              <i className="text-lg not-italic transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </i>
            </a>
          ))}
        </Container>
        <Container gutter="wide" className="mt-[38px]">
          <ButtonLink href="#" variant="dark">
            View All Jobs
          </ButtonLink>
        </Container>
      </section>

      <section className="grid min-h-[720px] grid-cols-2 bg-ink text-white max-[900px]:grid-cols-1">
        <div className="min-h-[420px] bg-[linear-gradient(rgba(16,24,32,.15),rgba(16,24,32,.4)),url('https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center" />
        <div className="py-[110px] pl-20 pr-[max(70px,calc((100vw-1400px)/2))] max-[640px]:px-6 max-[640px]:py-[88px]">
          <SectionLabel>FOR CANDIDATES</SectionLabel>
          <h2 className={`${heading} my-[34px]`}>
            Good work starts
            <br />
            <em>with being valued.</em>
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#b5bec3]">
            Find opportunities with a recruitment team that values reliable
            communication, competitive rates and ongoing support.
          </p>
          <div className="my-10 grid grid-cols-2 gap-x-6 gap-y-4 max-[540px]:grid-cols-1">
            {[
              "Competitive rates",
              "Reliable payroll",
              "Flexible opportunities",
              "Training & upskilling",
              "Temporary + permanent roles",
              "Sector-focused support",
            ].map((x) => (
              <span className="text-xs text-[#d5dbde]" key={x}>
                ↗ {x}
              </span>
            ))}
          </div>
          <ButtonLink href="#jobs">Find Work</ButtonLink>
        </div>
      </section>

      <section
        className="bg-surface py-[120px] max-[640px]:py-[88px]"
        id="training"
      >
        <Container
          gutter="wide"
          className="grid grid-cols-[1.05fr_2fr] items-start gap-12 max-[900px]:grid-cols-1"
        >
          <div>
            <SectionLabel>TRAINING & ASSESSMENTS</SectionLabel>
            <h2 className={`${heading} mt-8`}>
              Supporting
              <br />
              better drivers.
            </h2>
          </div>
          <div className="flex h-[292px] min-w-0 items-stretch gap-[18px] max-[640px]:h-auto max-[640px]:flex-col">
            {[
              [
                "01",
                "Driver Assessments",
                "Practical and theoretical evaluation designed around safer, more capable driving.",
              ],
              [
                "02",
                "CPC Training",
                "Professional driver training and development for a highly regulated sector.",
              ],
            ].map(([n, t, c]) => (
              <a
                className="group relative isolate h-[292px] min-h-[292px] flex-1 overflow-hidden border-t border-line transition-[flex,background-color,color,box-shadow] duration-700 ease-complex hover:bg-brand-red hover:text-white min-[1280px]:hover:flex-[1.08] max-[640px]:h-[210px] max-[640px]:min-h-[210px] max-[640px]:flex-none"
                href="#"
                key={n}
              >
                <span className="absolute left-6 top-[22px] text-[10px] text-brand-red max-[640px]:left-0">
                  {n}
                </span>
                <div className="absolute bottom-[25px] left-6 w-[250px] max-w-[calc(100%-76px)] transition-transform group-hover:translate-x-[5px] max-[640px]:left-0 max-[640px]:bottom-[22px] max-[640px]:w-auto max-[640px]:max-w-[calc(100%-52px)] max-[640px]:group-hover:translate-x-0">
                  <h3 className="mb-3 whitespace-nowrap text-2xl leading-[1.08] max-[640px]:whitespace-normal">
                    {t}
                  </h3>
                  <p className="min-h-[60px] w-[250px] max-w-full text-[13px] leading-[1.55] text-[#68737a] group-hover:text-white/80 max-[640px]:min-h-0 max-[640px]:w-auto">
                    {c}
                  </p>
                </div>
                <i className="absolute right-6 top-[21px] text-xl not-italic transition-transform group-hover:translate-x-[9px] group-hover:-translate-y-[9px] group-hover:text-white max-[640px]:right-0">
                  ↗
                </i>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#1a1b1d] py-[140px] text-white max-[640px]:py-[90px]">
        <Container
          gutter="wide"
          className="grid grid-cols-[170px_1.1fr_.65fr] items-start gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-9"
        >
          <SectionLabel>COMPLIANCE BUILT IN</SectionLabel>
          <h2 className={heading}>
            Right people.
            <br />
            Right checks.
            <br />
            <em>Ready to work.</em>
          </h2>
          <p className="mt-[88px] text-base leading-[1.7] text-[#bdc5c9] max-[900px]:mt-0">
            Our service goes beyond forwarding CVs. Relevant vetting, licence
            checks and role-specific compliance are part of how we prepare
            people for placement.
          </p>
        </Container>
      </section>
      <section id="request-staff">
        <div className="bg-surface pb-[65px] pt-[120px] max-[640px]:pt-[90px]">
          <Container gutter="wide">
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className={`${heading} mt-[34px]`}>
              What can we help
              <br />
              you with?
            </h2>
          </Container>
        </div>
        <SectorDualCta
          employer={{
            label: "01 / EMPLOYERS",
            title: "I need staff.",
            copy: "Tell us what your operation needs and our team will take it from there.",
            action: "Request Staff",
            href: "/request-staff",
          }}
          candidate={{
            label: "02 / CANDIDATES",
            title: "I'm looking for work.",
            copy: "Explore current opportunities across our specialist sectors.",
            action: "Find Jobs",
            href: "/jobs",
          }}
        />
      </section>
      <Footer variant="home" />
    </main>
  );
}
