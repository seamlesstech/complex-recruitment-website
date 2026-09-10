import { Header } from "../../components/Header";
import { SectionLabel } from "../../components/SectionLabel";

const sectors = [
  {
    slug:'driving',
    n:'01',
    name:'Driving',
    short:'Qualified drivers and transport professionals for operations that cannot afford to stand still.',
    roles:'HGV Class 1 · HGV Class 2 · 7.5T · 3.5T · ADR · HIAB · Transport',
  },
  {
    slug:'industrial',
    n:'02',
    name:'Industrial',
    short:'Flexible workforce solutions across warehousing, logistics, distribution and production.',
    roles:'Warehouse · FLT · Picking · Loading · Production · Supervisory',
  },
  {
    slug:'construction',
    n:'03',
    name:'Construction',
    short:'Reliable skilled and general labour for active sites, projects and changing programme demands.',
    roles:'Trades · Plant · Site Operatives · Labour · Supervisory',
  },
];

export default function SectorsPage(){
  return <main className="sectorsPage">
    <section className="sectorsHero sectorsHeroEditorial" id="top">
      <Header active="Sectors" theme="light" />
      <div className="pageShell sectorsHeroStatement">
        <div className="sectorsHeroLead">
          <div className="candidateEyebrow">SPECIALIST RECRUITMENT <span>/ SECTORS</span></div>
          <h1>Specialist recruitment.<br/><em>Built for real-world operations<span className="accentPeriod">.</span></em></h1>
        </div>
        <div className="sectorsHeroAside">
          <p>Focused recruitment expertise for the people and roles that keep essential operations moving — with one consistent standard of service behind every requirement.</p>
          <div className="sectorsHeroActions">
            <a className="button buttonAccent" href="#sector-explorer">Explore Specialisms <span>↓</span></a>
            <a className="candidateTextLink darkLink" href="/request-staff">Request Staff <span>↗</span></a>
          </div>
        </div>
      </div>
      <div className="sectorsHeroPanorama">
        <div className="sectorsPanoramaMedia" aria-hidden="true" />
        <div className="sectorsPanoramaShade" />
        <div className="pageShell sectorsPanoramaMeta">
          <div className="sectorsHeroCount"><strong>03</strong><span>specialist<br/>divisions</span></div>
          <div className="sectorsHeroPromise"><span>ONE WORKFORCE PARTNER</span><strong>One operational standard.</strong></div>
          <div className="sectorsHeroSupport"><span>AVAILABLE WHEN OPERATIONS MOVE</span><strong>24/7</strong></div>
        </div>
      </div>
    </section>

    <section className="sectorExplorer" id="sector-explorer">
      <div className="pageShell sectorExplorerHead">
        <SectionLabel>OUR SPECIALISMS</SectionLabel>
        <div>
          <h2>Built around the industries<br/><em>that keep things moving.</em></h2>
          <p>Each division brings focused recruitment knowledge, relevant compliance understanding and access to people who know the environment.</p>
        </div>
      </div>
      <div className="pageShell sectorAccordion" aria-label="Complex Recruitment sectors">
        {sectors.map(s=><a className={`sectorAccordionCard ${s.slug}`} href={`/sectors/${s.slug}`} key={s.slug}>
          <div className="sectorAccordionMedia" />
          <div className="sectorAccordionShade" />
          <span className="sectorAccordionNo">{s.n}</span>
          <div className="sectorAccordionCopy">
            <small>EXPLORE SECTOR</small>
            <h3>{s.name}</h3>
            <p>{s.short}</p>
            <span className="sectorRoleLine">{s.roles}</span>
          </div>
          <i>↗</i>
        </a>)}
      </div>
    </section>

    <section className="sectorStandard">
      <div className="pageShell sectorStandardGrid">
        <div>
          <SectionLabel>ONE OPERATIONAL STANDARD</SectionLabel>
          <h2>Different sectors.<br/><em>Same expectation.</em></h2>
        </div>
        <div className="sectorStandardIntro">
          <p>Whether the requirement is drivers, warehouse teams or site labour, the service should feel consistent: responsive, practical and properly managed.</p>
        </div>
      </div>
      <div className="pageShell sectorStandardItems">
        {[
          ['01','Specialist sourcing','Recruitment focused around the realities of each operating environment.'],
          ['02','Relevant checks','Role-specific vetting, licences, qualifications and compliance where required.'],
          ['03','Flexible supply','From urgent temporary cover to permanent and high-volume requirements.'],
          ['04','Ongoing support','Clear communication and account support beyond the initial placement.'],
        ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p><i>↗</i></article>)}
      </div>
    </section>

    <section className="sectorPerspective">
      <div className="pageShell sectorPerspectiveGrid">
        <div className="sectorPerspectiveImage" />
        <div className="sectorPerspectiveCopy">
          <SectionLabel>WORKFORCE IN CONTEXT</SectionLabel>
          <h2>People placed with the<br/><em>operation in mind.</em></h2>
          <p>Complex does not treat Driving, Industrial and Construction as interchangeable labour pools. Each sector has its own pace, pressures, qualifications and expectations — and the recruitment approach needs to reflect that.</p>
          <a className="button buttonDark" href="/employers">Explore Employer Solutions <span>↗</span></a>
        </div>
      </div>
    </section>

    <section className="sectorDual">
      <div className="pageShell sectorDualHead">
        <SectionLabel>CHOOSE YOUR NEXT STEP</SectionLabel>
        <h2>What brings you<br/><em>to Complex?</em></h2>
      </div>
      <div className="sectorDualGrid">
        <a href="/request-staff" className="sectorDualCard employerPath">
          <small>FOR EMPLOYERS</small>
          <div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I need people.</h3></div>
          <p>Tell us the role, numbers, location and timing. We’ll take it from there.</p>
          <span className="sectorDualCta">Request Staff <i>↗</i></span>
        </a>
        <a href="/jobs" className="sectorDualCard candidatePath">
          <small>FOR CANDIDATES</small>
          <div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I’m looking for work.</h3></div>
          <p>Explore current opportunities across our specialist recruitment divisions.</p>
          <span className="sectorDualCta">Find Jobs <i>↗</i></span>
        </a>
      </div>
    </section>

    <footer id="contact" className="siteFooter">
      <img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/>
      <div className="pageShell footerLead">
        <div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div>
        <a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a>
      </div>
      <div className="pageShell footerNav">
        <div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div>
        <div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a><a href="/training/driver-assessments">Driver Assessments</a></div>
        <div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div>
        <div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div>
      </div>
      <div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div>
    </footer>
  </main>
}
