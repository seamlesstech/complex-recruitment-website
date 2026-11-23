import Link from "next/link";
import { CandidateImageRotator } from "../components/CandidateImageRotator";
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
// The candidates heading sits in a narrower column than a full-width section heading,
// so it is set a little smaller to keep "Good work starts" on one line.
const candidateHeading = heading
  .replace("text-[clamp(48px,5.2vw,84px)]", "text-[clamp(40px,4.3vw,68px)]")
  .replace("max-[640px]:text-5xl", "max-[640px]:text-[38px]");
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
// One local photo per sector, in the order the sectors are listed. The first is the
// image shown when reduced motion is on. Crops are set per photo to keep the subject in frame.
const candidateImages = [
  { src: "/stock/driver-hands-on-steering-wheel.jpg", position: "40% 45%" }, // Driving & Transport
  { src: "/stock/warehouse-operatives-carrying-boxes.jpg", position: "50% 40%" }, // Industrial & Warehousing
  { src: "/stock/construction-workers-reviewing-plans.jpg", position: "50% 45%" }, // Construction & Engineering
  { src: "/stock/team-meeting-around-table.jpg", position: "50% 50%" }, // Business & Operational Support
  { src: "/waste-management-operative.jpg", position: "38% 50%" }, // Waste Management
  { src: "/drinks-logistics-brewery.jpg", position: "50% 32%" }, // Drinks Logistics
] as const;
// Why Complex stat panels: faint tonal blocks on the white section.
const statPanel = "bg-panel p-9 max-[1100px]:p-7 max-[640px]:p-7";
const statNumber =
  "block h-[74px] text-[62px] font-bold leading-[74px] tracking-[-.06em]";
// The qualifier sits apart from the number: smaller, grey, medium weight, on the number’s baseline.
const statQualifier =
  "ml-[.3em] inline-block align-baseline text-[.4em] font-medium leading-none tracking-[.12em] text-stat-qualifier";
const statCaption = "mt-3 max-w-60 text-xs leading-[1.45] text-muted";

// Latest live vacancies from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

export default async function Home() {
  const { ok, jobs } = await getPublicJobs();
  const latestJobs = jobs.slice(0, 4);

  return (
    <main id="top">
      <Hero />
      <section className="overflow-hidden border-b border-line bg-white py-[52px]">
        <Container gutter="wide">
          <h2 className="mx-auto max-w-[900px] text-center text-[clamp(18px,1.55vw,22px)] font-semibold leading-[1.35] tracking-[-.015em] text-[#626e74]">
            Trusted by leading logistics, distribution and retail operations
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
        className="bg-white py-[130px] max-[640px]:py-[88px]"
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
              We help businesses respond to changing workforce needs with a PAYE temporary workforce, plus ad-hoc and permanent staffing, supported by sector expertise, compliance and hands-on account management.
            </p>
          </div>
          <div className="mt-[100px] grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-3">
            {/* 40+ */}
            <article className={statPanel}>
              <strong className={statNumber}>
                40
                <span className={statQualifier}>+</span>
              </strong>

              <p className={statCaption}>
                Years of combined senior management experience
              </p>
            </article>

            {/* 24 / 7 */}
            <article className={statPanel}>
              <strong className={statNumber}>
                24
                <span className={`${statQualifier} tracking-[.2em]`}>/ 7</span>
              </strong>

              <p className={statCaption}>
                Operational support when your business needs it
              </p>
            </article>

            {/* REC */}
            <article className={statPanel}>
              <div className="flex h-[74px] items-center">
                <img
                  src="/rec-logo.png"
                  alt="REC"
                  className="block max-h-[58px] w-auto max-w-[min(200px,100%)] object-contain"
                />
              </div>

              <p className={statCaption}>
                REC member with compliance-led recruitment processes
              </p>
            </article>

            {/* Specialist recruitment areas */}
            <article className={statPanel}>
              <strong className={statNumber}>06</strong>

              <p className={statCaption}>
                Specialist sectors supporting operational businesses
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
              Whether you’re looking for one specialist worker or a high-volume
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

      <section className="bg-white py-[130px] max-[640px]:py-[88px]">
        <Container
          gutter="wide"
          className="grid grid-cols-[1.1fr_.9fr] items-center gap-[90px] max-[1100px]:gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-10"
        >
          <CandidateImageRotator
            images={candidateImages}
            className="aspect-[5/4] max-[900px]:aspect-[4/3] max-[640px]:aspect-[5/4]"
          />
          <div>
            <SectionLabel>FOR CANDIDATES</SectionLabel>
            <h2 className={`${candidateHeading} my-[34px]`}>
              Good work starts
              <br />
              <em>with being valued.</em>
            </h2>
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#526069]">
              Find opportunities with a recruitment team that values reliable
              communication, competitive rates and ongoing support.
            </p>
            <div className="my-10 grid grid-cols-2 gap-x-6 gap-y-4 max-[540px]:grid-cols-1">
              {[
                "Competitive rates",
                "Reliable payroll",
                "Flexible opportunities",
                "Training & upskilling",
                "Temporary and permanent roles",
                "Sector-focused support",
              ].map((x) => (
                <span className="text-xs text-[#3f4a51]" key={x}>
                  <span aria-hidden="true" className="mr-2 text-brand-red">
                    •
                  </span>
                  {x}
                </span>
              ))}
            </div>
            <ButtonLink href="/jobs">Find Work</ButtonLink>
          </div>
        </Container>
      </section>

      <section
        className="bg-ink py-[130px] text-white max-[640px]:py-[88px]"
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
          <p className="max-w-[410px] text-base leading-[1.6] text-[#b5bec3]">
            Browse current opportunities across our six specialist sectors.
          </p>
        </Container>
        <Container
          gutter="wide"
          className="mt-[70px] border-t border-white/25"
        >
          <div className="grid h-[42px] grid-cols-[2fr_1fr_1fr_1fr_1fr_36px] items-center gap-[22px] text-[9px] tracking-[.14em] text-[#9aa4aa] max-[700px]:hidden">
            {["ROLE", "LOCATION", "SECTOR", "TYPE", "RATE", ""].map((x, i) => (
              <span key={i}>{x}</span>
            ))}
          </div>
          {latestJobs.map((job) => (
            <Link
              className="group grid min-h-[94px] grid-cols-[2fr_1fr_1fr_1fr_1fr_36px] items-center gap-[22px] border-t border-white/20 transition hover:bg-white/[.06] hover:pl-3 focus-visible:bg-white/[.06] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-red max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-2 max-[700px]:py-5"
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
                <span className="text-xs text-[#c3cacf]" key={i}>
                  {x ?? "—"}
                </span>
              ))}
              <i className="text-lg not-italic text-brand-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </i>
            </Link>
          ))}
          {latestJobs.length === 0 && (
            <p
              role="status"
              className="border-t border-white/20 py-8 text-sm text-[#c3cacf]"
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
                "/training/driver-assessments",
              ],
              [
                "02",
                "CPC Training",
                "Professional driver training and development for a highly regulated sector.",
                "/training/cpc",
              ],
            ].map(([n, t, c, href]) => (
              <a
                className="group relative isolate h-[292px] min-h-[292px] flex-1 overflow-hidden border-t border-line transition-[flex,background-color,color,box-shadow] duration-700 ease-complex hover:bg-brand-red hover:text-white min-[1280px]:hover:flex-[1.08] max-[640px]:h-[210px] max-[640px]:min-h-[210px] max-[640px]:flex-none"
                href={href}
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
        <div className="border-t border-line bg-surface pb-[65px] pt-[120px] max-[640px]:pt-[90px]">
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
            title: "I’m looking for work.",
            copy: "Explore current opportunities across our specialist sectors.",
            action: "Find Jobs",
            href: "/jobs",
          }}
        />
      </section>
      <Footer />
    </main>
  );
}
