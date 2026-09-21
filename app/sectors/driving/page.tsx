import { DrivingRoleExplorer } from "../../../components/DrivingRoleExplorer";
import { Footer } from "../../../components/layout/Footer";
import { Container } from "../../../components/layout/Container";
import { SectionLabel } from "../../../components/SectionLabel";
import { SectorHero } from "../../../components/sectors/SectorHero";
import {
  SectorCompliance,
  SectorDualCta,
  SectorIntro,
  SectorJobs,
  SectorProcess,
  SectorRoles,
  SectorService,
} from "../../../components/sectors/SectorSections";

const serviceItems = [
  "Daily check-in confirmation",
  "Management of rotas",
  "Weekly onsite staff welfare sessions",
  "Training workshops",
  "Weekly management information",
  "Monthly compliance log",
  "Worker performance reviews",
  "Buddy system",
];

export default function DrivingPage() {
  return (
    <main className="bg-white text-ink">
      <SectorHero
        driving
        sector="Driving & Transport"
        title={
          <>
            Driving talent for
            <br />
            <em>your operation.</em>
          </>
        }
        description="Professional drivers and transport specialists for temporary, ad-hoc and permanent requirements across logistics, distribution and haulage."
        requestLabel="Request Drivers"
        jobsLabel="Find Driving Work"
        jobsHref="/jobs"
        proofLabel="OPERATIONAL SUPPORT"
        proofCopy="Specialist consultants when transport operations move."
        rail={["HGV Class 1", "HGV Class 2", "7.5T", "3.5T", "Transport Roles"]}
        images={[
          "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200",
          "/driving-hero-driver-flipped.jpg",
        ]}
        positions={["center 58%", "center center"]}
      />
      <SectorIntro
        label="WHY COMPLEX DRIVING"
        title={
          <>
            Transport recruitment
            <br />
            <em>with the detail handled.</em>
          </>
        }
        copy="Complex’s Driving division focuses on understanding the operational pressures behind every booking — not simply filling a shift. The team recruits across professional driving and transport-support roles, with compliance and availability managed around the realities of fast-moving logistics operations."
        proof={[
          [
            "01",
            "Temporary & Ad-hoc",
            "Flexible cover for changing rotas, peaks and urgent operational requirements.",
          ],
          [
            "02",
            "Permanent",
            "Transport professionals recruited for long-term operational fit.",
          ],
          [
            "03",
            "Compliance-led",
            "Licence, history and role-specific checks built into the supply process.",
          ],
          [
            "04",
            "Dedicated support",
            "Account management and communication throughout the assignment.",
          ],
        ]}
      />
      <SectorRoles
        label="DRIVING JOB CATEGORIES"
        title={
          <>
            From Class 1 drivers
            <br />
            <em>to transport teams.</em>
          </>
        }
        copy="The division supports a broad range of driving and transport roles. Select a category to explore the types of assignments Complex recruits for."
      >
        <DrivingRoleExplorer />
      </SectorRoles>
      <SectorCompliance
        image="https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg?auto=compress&cs=tinysrgb&w=1800"
        label="DRIVER COMPLIANCE"
        title={
          <>
            Right licence.
            <br />
            <em>Right checks.</em>
            <br />
            Ready to work.
          </>
        }
        copy="Driver compliance is treated as part of the recruitment service, helping reduce the administrative pressure on transport teams before and during an assignment."
        checks={[
          "Licence checks at registration and every 12 weeks thereafter",
          "Written working-time, tachograph and Highway Code testing",
          "Minimum of two references held on file",
          "Driver accident history reviewed",
          "Driver hours monitored and reviewed weekly",
          "Support with the management of driver infringements",
        ]}
        button="Request Compliant Drivers"
      />
      <section className="bg-white py-[126px] max-[640px]:py-[88px]">
        <Container>
          <div className="grid grid-cols-[.42fr_1fr] gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <SectionLabel>TRANSPORT EXPERTISE</SectionLabel>
            <div><h2 className="section-heading m-0 text-[clamp(50px,5.15vw,84px)] leading-[.94] tracking-[-.057em] max-[640px]:text-5xl">Knowledge behind<br/><em className="not-italic text-brand-red">the checks.</em></h2><p className="mt-7 max-w-[680px] text-[15px] leading-[1.72] text-muted">Specialist transport knowledge within the team supports practical assessment and informed conversations with operators and drivers.</p></div>
          </div>
          <div className="mt-[68px] grid grid-cols-2 border-l border-t border-line max-[760px]:grid-cols-1">
            <article className="min-h-[310px] border-b border-r border-line p-7"><span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">01 / TRANSPORT MANAGEMENT</span><h3 className="mb-5 mt-[70px] max-w-[560px] text-[28px] leading-[1.08] tracking-[-.035em]">SEG Awards Level 3 Certificate of Professional Competence for Transport Managers (Road Haulage)</h3><p className="max-w-[560px] text-xs leading-[1.65] text-muted">Expertise covering operator licensing, drivers’ hours and Working Time, tachograph compliance, road safety and operator responsibilities.</p></article>
            <article className="min-h-[310px] border-b border-r border-line p-7"><span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">02 / DRIVER STANDARDS</span><h3 className="mb-5 mt-[70px] text-[28px] leading-[1.08] tracking-[-.035em]">NRI Registered LGV Instructor</h3><p className="max-w-[560px] text-xs leading-[1.65] text-muted">Professional expertise in LGV driving standards, driver competence and practical assessment understanding.</p></article>
          </div>
        </Container>
      </section>
      <SectorService
        title={
          <>
            More than
            <br />
            <em>the placement.</em>
          </>
        }
        copy="Complex’s existing Driving service model includes ongoing operational support after drivers are supplied."
        items={serviceItems}
      />
      <SectorProcess
        label="FROM REQUIREMENT TO ROAD"
        title={
          <>
            Built around the pace
            <br />
            <em>of transport.</em>
          </>
        }
        steps={[
          [
            "01",
            "Brief us",
            "Role, class, shift, location, start time and volume.",
          ],
          [
            "02",
            "Source & verify",
            "Suitable drivers are identified and relevant checks are completed.",
          ],
          [
            "03",
            "Confirm & check in",
            "Assignments are confirmed and attendance is managed.",
          ],
          [
            "04",
            "Stay involved",
            "Complex supports rotas, welfare, performance and service information.",
          ],
        ]}
      />
      <SectorJobs
        id="driving-jobs"
        label="DRIVING OPPORTUNITIES"
        title={
          <>
            Current roles
            <br />
            <em>on the road.</em>
          </>
        }
        copy="Live vacancies will be pulled from the Complex jobs CMS and filtered automatically to the Driving division."
        jobs={[
          [
            "HGV Class 1 Driver",
            "Enfield",
            "Driving",
            "Temporary",
            "CMS PREVIEW",
          ],
          [
            "HGV Class 2 Driver",
            "North London",
            "Driving",
            "Temporary",
            "CMS PREVIEW",
          ],
          [
            "Transport Planner",
            "London",
            "Driving",
            "Permanent",
            "CMS PREVIEW",
          ],
        ]}
      />
      <SectorDualCta
        employer={{
          label: "FOR EMPLOYERS",
          title: "I need drivers.",
          copy: "Tell us the licence class, numbers, shift and timing. We’ll take it from there.",
          action: "Request Drivers",
          href: "/request-staff",
        }}
        candidate={{
          label: "FOR CANDIDATES",
          title: "I’m looking for driving work.",
          copy: "Explore current driving and transport opportunities.",
          action: "Find Driving Jobs",
          href: "/jobs",
        }}
      />
      <Footer />
    </main>
  );
}
