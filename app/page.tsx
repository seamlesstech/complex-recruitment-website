import Link from "next/link";
import { Hero } from "../components/Hero";
import { SectionLabel } from "../components/SectionLabel";
import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer";
import { SectorDualCta } from "../components/sectors/SectorSections";
import { HomeSectorGrid } from "../components/sectors/SectorShowcases";
import { ButtonLink } from "../components/ui/ButtonLink";
import { getPublicJobs } from "../lib/public-jobs.server";

const heading =
  "section-heading m-0 text-[clamp(48px,5.2vw,84px)] leading-[.96] tracking-[-.05em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red";
type TrustedLogo = {
  file: string;
  alt: string;
  width: number;
  height: number;
  displayHeight: number;
};
const trustedLogos: readonly TrustedLogo[] = [
  {
    file: "move-makers.png",
    alt: "Move Makers",
    width: 481,
    height: 242,
    displayHeight: 64,
  },
  {
    file: "argos.png",
    alt: "Argos",
    width: 377,
    height: 242,
    displayHeight: 64,
  },
  { file: "asda.png", alt: "ASDA", width: 445, height: 242, displayHeight: 64 },
  {
    file: "lloyd-fraser.png",
    alt: "Lloyd Fraser",
    width: 321,
    height: 242,
    displayHeight: 72,
  },
  {
    file: "xpo-logistics.png",
    alt: "XPO Logistics",
    width: 449,
    height: 134,
    displayHeight: 52,
  },
  {
    file: "translux.png",
    alt: "Translux",
    width: 497,
    height: 134,
    displayHeight: 48,
  },
  {
    file: "amazon.png",
    alt: "Amazon",
    width: 497,
    height: 174,
    displayHeight: 60,
  },
  {
    file: "ceva-logistics.png",
    alt: "CEVA Logistics",
    width: 497,
    height: 190,
    displayHeight: 64,
  },
  {
    file: "neuven.png",
    alt: "Neuven",
    width: 497,
    height: 190,
    displayHeight: 60,
  },
  {
    file: "poundland.png",
    alt: "Poundland",
    width: 589,
    height: 130,
    displayHeight: 48,
  },
];
// Latest live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

export default async function Home() {
  const { ok, jobs } = await getPublicJobs();
  const latestJobs = jobs.slice(0, 4);

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
          className="trustedMarqueeViewport mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
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
                  <img
                    src={`/client-logos/${logo.file}`}
                    alt={duplicate ? "" : logo.alt}
                    width={logo.width}
                    height={logo.height}
                    style={{ height: logo.displayHeight }}
                    className="w-auto max-w-none max-h-[72px] shrink-0 opacity-90 transition-opacity duration-300 hover:opacity-100 max-[760px]:max-h-[56px]"
                    key={logo.file}
                  />
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
              a PAYE temporary workforce alongside ad-hoc and permanent staffing
              — supported by sector expertise, compliance and hands-on account
              management.
            </p>
          </div>
          <div className="mt-[100px] grid grid-cols-4 border-y border-line max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {/* 40+ */}
            <article className="border-r border-line py-9 pr-9 max-[1000px]:border-b max-[640px]:border-r-0 max-[640px]:px-0">
              <strong className="text-[62px] tracking-[-.06em]">
                40
                <span className="text-[.45em]">+</span>
              </strong>

              <p className="max-w-60 text-xs leading-[1.45] text-muted">
                Years of combined senior management experience
              </p>
            </article>

            {/* 24 / 7 */}
            <article className="border-r border-line px-9 py-9 max-[1000px]:border-b max-[1000px]:border-r-0 max-[640px]:border-r-0 max-[640px]:px-0">
              <strong className="text-[62px] tracking-[-.06em]">
                24
                <span className="text-[.45em]"> / 7</span>
              </strong>

              <p className="max-w-60 text-xs leading-[1.45] text-muted">
                Operational support when your business needs it
              </p>
            </article>

            {/* REC */}
            <article className="border-r border-line px-9 py-9 max-[1000px]:border-r max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:px-0">
              <div className="flex h-[74px] items-center">
                <img
                  src="/rec-logo.png"
                  alt="REC"
                  className="block max-h-[58px] w-auto max-w-[200px] object-contain"
                />
              </div>

              <p className="max-w-60 text-xs leading-[1.45] text-muted">
                REC member with compliance-led recruitment processes
              </p>
            </article>

            {/* Specialist recruitment areas */}
            <article className="py-9 pl-9 max-[1000px]:pl-9 max-[640px]:px-0">
              <strong className="text-[62px] tracking-[-.06em]">05</strong>

              <p className="max-w-60 text-xs leading-[1.45] text-muted">
                Specialist recruitment areas supporting operational businesses
              </p>
            </article>
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
        className="bg-brand-grey py-[130px] text-white max-[640px]:py-[88px]"
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
              <em className="!text-white">
                Tell us what your operation needs.
              </em>
            </h2>
          </div>
          <div className="pt-16 max-[900px]:pt-0">
            <p className="mb-[34px] text-lg leading-[1.65] text-white/90">
              Whether you&apos;re looking for one specialist worker or a high-volume
              temporary workforce, tell us what you need and the Complex team
              will take it from there.
            </p>
            <ButtonLink
              href="/request-staff"
              className="hover:!bg-brand-red focus-visible:!bg-brand-red focus-visible:!outline-white"
            >
              Request Staff
            </ButtonLink>
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
              <span className="text-[10px] text-white/65">{n}</span>
              <h3 className="my-[26px] mb-3 text-[22px]">{t}</h3>
              <p className="max-w-[300px] text-[13px] leading-normal text-white/85">
                {c}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section
        id="compliance"
        className="relative bg-[#eceeef] pt-[100px] pb-16 text-ink max-[640px]:pt-[68px] max-[640px]:pb-11"
      >
        <Container
          gutter="wide"
          className="grid grid-cols-[1.15fr_.85fr] items-end gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-9"
        >
          <div>
            <SectionLabel>COMPLIANCE &amp; VETTING</SectionLabel>
            <h2 className={`${heading} mt-[34px]`}>
              <span className="text-ink">Right people.</span>
              <br />
              <span className="text-brand-grey">Right checks.</span>
              <br />
              <span className="text-brand-red">Ready to work.</span>
            </h2>
          </div>
          <div>
            <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-ink/80">
              Our service goes beyond forwarding CVs. Relevant vetting, licence
              checks and role-specific compliance are part of how we prepare
              people for placement.
            </p>
            <ButtonLink href="/compliance" variant="dark">
              Explore Compliance &amp; Vetting
            </ButtonLink>
          </div>
        </Container>
        <Container aria-hidden="true" className="absolute inset-x-0 bottom-0">
          <div className="border-b border-line/60" />
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
              could be here.
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
          {latestJobs.map((job) => (
            <Link
              className="group grid min-h-[94px] grid-cols-[2fr_1fr_1fr_1fr_1fr_36px] items-center gap-[22px] border-t border-ink/20 transition hover:bg-white/40 hover:pl-3 max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-2 max-[700px]:py-5"
              href={job.href}
              key={job.reference}
            >
              <strong className="text-xl max-[700px]:col-span-2">
                {job.title}
              </strong>
              {[
                job.location,
                job.sectorLabel,
                job.employmentTypeLabel,
                job.pay,
              ].map((x, i) => (
                <span className="text-xs text-[#4f5a60]" key={i}>
                  {x ?? "—"}
                </span>
              ))}
              <i className="text-lg not-italic transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </i>
            </Link>
          ))}
          {latestJobs.length === 0 && (
            <p
              role="status"
              className="border-t border-ink/20 py-8 text-sm text-[#4f5a60]"
            >
              {ok
                ? "No live vacancies right now. Register your interest and we’ll contact you when something relevant comes up."
                : "Current vacancies are temporarily unavailable. Please check back shortly."}
            </p>
          )}
        </Container>
        <Container gutter="wide" className="mt-[38px]">
          <ButtonLink href="/jobs" variant="accent">
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
          <ButtonLink href="/jobs">Find Work</ButtonLink>
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
                <div className="absolute bottom-[25px] left-6 w-[250px] max-w-[calc(100%-76px)] transition-transform group-hover:text-white  group-hover:translate-x-[5px] max-[640px]:left-0 max-[640px]:bottom-[22px] max-[640px]:w-auto max-[640px]:max-w-[calc(100%-52px)] max-[640px]:group-hover:translate-x-0">
                  <h3 className="mb-3 whitespace-nowrap text-2xl font-medium leading-[1.08] max-[640px]:whitespace-normal group-hover:text-white ">
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
