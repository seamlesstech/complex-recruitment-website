import { Hero } from "../components/Hero";
import { SectionLabel } from "../components/SectionLabel";
import { Footer } from "../components/layout/Footer";

const jobs = [
  {title:'HGV Class 1 Driver', location:'Enfield', sector:'Driving', type:'Temporary', pay:'£19–£22/hr'},
  {title:'Warehouse Operative', location:'Croydon', sector:'Industrial', type:'Temporary', pay:'£12.50/hr'},
  {title:'HGV Class 2 Driver', location:'Park Royal', sector:'Driving', type:'Temp-to-perm', pay:'£17–£20/hr'},
  {title:'CSCS Labourer', location:'Greater London', sector:'Construction', type:'Temporary', pay:'Competitive'},
];

const sectors = [
  {
    n:'01', title:'DRIVING', copy:'Qualified drivers and transport professionals ready to keep your operation moving.',
    roles:'HGV 1 / HGV 2 / 7.5T / 3.5T / ADR / HIAB / Transport',
    image:'https://images.pexels.com/photos/35501718/pexels-photo-35501718/free-photo-of-aerial-view-of-industrial-truck-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    n:'02', title:'INDUSTRIAL', copy:'Flexible workforce solutions across warehousing, logistics, distribution and production.',
    roles:'Warehouse / FLT / Picking / Loading / Production / Supervisory',
    image:'https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    n:'03', title:'CONSTRUCTION', copy:'Reliable skilled and general labour supporting construction projects and site operations.',
    roles:'Trades / Plant / Site Ops / Labour / Supervisory',
    image:'https://images.pexels.com/photos/8138734/pexels-photo-8138734.jpeg?auto=compress&cs=tinysrgb&w=1800'
  }
];

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section className="trust lightSection">
        <div className="pageShell trustGrid">
          <SectionLabel>TRUSTED BY</SectionLabel>
          <p>Trusted by businesses that rely on people to keep operations moving.</p>
          <div className="logoRail" aria-label="Example client logo placement">
            {['AMAZON','ASDA','XPO','CEVA','LYRECO','POUNDLAND'].map((x)=><span key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="proposition lightSection" id="about">
        <div className="pageShell">
          <SectionLabel>WHY COMPLEX</SectionLabel>
          <div className="statementGrid">
            <h2>More than recruitment.<br/><em>A workforce partner.</em></h2>
            <p>We help businesses respond to changing workforce requirements with dependable temporary, ad-hoc and permanent staffing — supported by sector expertise, compliance and hands-on account management.</p>
          </div>
          <div className="proofRow">
            <article><strong>40<span>+</span></strong><p>Years of combined senior management experience</p></article>
            <article><strong>24<span>/7</span></strong><p>Operational support when your business needs it</p></article>
            <article><strong>REC</strong><p>Member with compliance-led recruitment processes</p></article>
          </div>
        </div>
      </section>

      <section className="sectors" id="sectors">
        <div className="pageShell sectorIntro">
          <SectionLabel>SPECIALIST RECRUITMENT</SectionLabel>
          <h2>Built around the industries<br/>that keep things moving.</h2>
        </div>
        <div className="sectorStack">
          {sectors.map((sector, index) => (
            <article
              className="sectorPanel"
              key={sector.title}
              style={{
                '--sector-image': `url(${sector.image})`,
                '--stack-index': index + 1,
              } as React.CSSProperties}
            >
              <div className="sectorBackdrop" />
              <div className="sectorShade" />
              <div className="sectorRedReveal" aria-hidden="true" />
              <div className="sectorFold" aria-hidden="true" />
              <div className="pageShell sectorContent">
                <div className="sectorNumber">{sector.n}</div>
                <div className="sectorTitleBlock">
                  <span className="sectorExploreWord">EXPLORE</span>
                  <div className="sectorTitleLine">
                    <span className="sectorMarkWrap" aria-hidden="true">
                      <img src="/complex-mark.png" alt="" />
                    </span>
                    <h3>{sector.title}</h3>
                  </div>
                </div>
                <div className="sectorMeta">
                  <p>{sector.copy}</p>
                  <span>{sector.roles}</span>
                  <a className="sectorCta" href="#">
                    <span>Explore {sector.title[0] + sector.title.slice(1).toLowerCase()}</span><i>↗</i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="employer" id="employers">
        <div className="pageShell employerGrid">
          <div>
            <SectionLabel>FOR EMPLOYERS</SectionLabel>
            <h2>Need people?<br/><em>Tell us what your operation needs.</em></h2>
          </div>
          <div className="employerRight">
            <p>Whether you're looking for one specialist worker or a high-volume temporary workforce, tell us what you need and the Complex team will take it from there.</p>
            <a className="button buttonAccent" href="#request-staff">Request Staff <span>↗</span></a>
          </div>
        </div>
        <div className="pageShell serviceStrip">
          <div><span>01</span><h3>Temporary & Ad-hoc</h3><p>Flexible staffing for fluctuating operational demand.</p></div>
          <div><span>02</span><h3>Permanent</h3><p>Recruitment for longer-term specialist and operational roles.</p></div>
          <div><span>03</span><h3>Compliance-led</h3><p>Relevant checks and requirements managed before placement.</p></div>
        </div>
      </section>

      <section className="process lightSection">
        <div className="pageShell processHead">
          <SectionLabel>HOW COMPLEX WORKS</SectionLabel>
          <h2>From requirement<br/>to workforce.</h2>
        </div>
        <div className="pageShell processSteps">
          {[
            ['01','Tell us what you need','Role, location, numbers, shift and start date.'],
            ['02','We source and verify','We identify suitable people and complete applicable checks.'],
            ['03','Your workforce is ready','Confirmed workers are prepared for the assignment.'],
            ['04','We stay involved','Ongoing communication and account support throughout.'],
          ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
        </div>
      </section>

      <section className="jobs" id="jobs">
        <div className="pageShell jobsHead">
          <div><SectionLabel>LATEST OPPORTUNITIES</SectionLabel><h2>Your next role<br/><em>could be here.</em></h2></div>
          <p>Browse current opportunities across Driving, Industrial and Construction.</p>
        </div>
        <div className="pageShell jobList">
          <div className="jobLabels"><span>ROLE</span><span>LOCATION</span><span>SECTOR</span><span>TYPE</span><span>RATE</span><span></span></div>
          {jobs.map((job)=><a className="jobRow" href="#" key={job.title}><strong>{job.title}</strong><span>{job.location}</span><span>{job.sector}</span><span>{job.type}</span><span>{job.pay}</span><i>↗</i></a>)}
        </div>
        <div className="pageShell jobsFoot"><a className="button buttonDark" href="#">View All Jobs <span>↗</span></a></div>
      </section>

      <section className="candidate" id="candidates">
        <div className="candidateImage" />
        <div className="candidateCopy">
          <SectionLabel>FOR CANDIDATES</SectionLabel>
          <h2>Good work starts<br/><em>with being valued.</em></h2>
          <p>Find opportunities with a recruitment team that values reliable communication, competitive rates and ongoing support.</p>
          <div className="benefits">
            {['Competitive rates','Reliable payroll','Flexible opportunities','Training & upskilling','Temporary + permanent roles','Sector-focused support'].map(x=><span key={x}>↗ {x}</span>)}
          </div>
          <a className="button buttonAccent" href="#jobs">Find Work <span>↗</span></a>
        </div>
      </section>

      <section className="training lightSection" id="training">
        <div className="pageShell trainingGrid">
          <div className="trainingIntro"><SectionLabel>TRAINING & ASSESSMENTS</SectionLabel><h2>Supporting<br/>better drivers.</h2></div>
          <div className="trainingCards">
            <a className="trainingItem" href="#"><span>01</span><div><h3>Driver Assessments</h3><p>Practical and theoretical evaluation designed around safer, more capable driving.</p></div><i>↗</i></a>
            <a className="trainingItem" href="#"><span>02</span><div><h3>CPC Training</h3><p>Professional driver training and development for a highly regulated sector.</p></div><i>↗</i></a>
          </div>
        </div>
      </section>

      <section className="compliance">
        <div className="pageShell complianceGrid">
          <SectionLabel>COMPLIANCE BUILT IN</SectionLabel>
          <h2>Right people.<br/>Right checks.<br/><em>Ready to work.</em></h2>
          <p>Our service goes beyond forwarding CVs. Relevant vetting, licence checks and role-specific compliance are part of how we prepare people for placement.</p>
        </div>
      </section>

      <section className="dual" id="request-staff">
        <div className="dualTitle pageShell"><SectionLabel>NEXT STEP</SectionLabel><h2>What can we help<br/>you with?</h2></div>
        <div className="dualGrid">
          <a className="dualCard employerCard" href="#"><span>01 / EMPLOYERS</span><div className="dualHeading"><span className="dualGreeting">Hi, Complex,</span><h3>I need staff.</h3></div><p>Tell us what your operation needs and our team will take it from there.</p><span className="dualCta">Request Staff <i>↗</i></span></a>
          <a className="dualCard candidateCard" href="#jobs"><span>02 / CANDIDATES</span><div className="dualHeading"><span className="dualGreeting">Hi, Complex,</span><h3>I'm looking for work.</h3></div><p>Explore current opportunities across our specialist sectors.</p><span className="dualCta">Find Jobs <i>↗</i></span></a>
        </div>
      </section>

      <Footer variant="home" />
    </main>
  );
}
