import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { DrivingRoleExplorer } from '../../../components/DrivingRoleExplorer';

export default function DrivingPage(){
  return <main className="drivingPage">
    <section className="drivingHero" id="top">
      <div className="drivingHeroMedia drivingHeroMediaTruck" aria-hidden="true" />
      <div className="drivingHeroMedia drivingHeroMediaDriver" aria-hidden="true" />
      <div className="drivingHeroShade" aria-hidden="true" />
      <Header active="Sectors" theme="dark" />
      <div className="pageShell drivingHeroContent">
        <div className="drivingHeroCopy">
          <div className="eyebrow">COMPLEX DRIVING <span>/ SPECIALIST DIVISION</span></div>
          <h1>Driving talent built for<br/><em>your operation.</em></h1>
          <p>Professional drivers and transport specialists for temporary, ad-hoc and permanent requirements across logistics, distribution and haulage.</p>
          <div className="heroActions"><a className="button buttonAccent" href="/request-staff">Request Drivers <span>↗</span></a><a className="textLink" href="#driving-jobs">Find Driving Work →</a></div>
        </div>
        <div className="drivingHeroProof"><span>OPERATIONAL SUPPORT</span><strong>24/7</strong><p>Specialist consultants when transport operations move.</p></div>
      </div>
      <div className="drivingHeroStrip">
        <div className="pageShell drivingStripGrid">
          <span>DRIVING DIVISION</span><b>HGV Class 1</b><b>HGV Class 2</b><b>7.5T</b><b>3.5T</b><b>Transport Roles</b>
        </div>
      </div>
    </section>

    <section className="drivingIntro">
      <div className="pageShell drivingIntroGrid">
        <div><SectionLabel>WHY COMPLEX DRIVING</SectionLabel><h2>Transport recruitment<br/><em>with the detail handled.</em></h2></div>
        <div className="drivingIntroCopy"><p>Complex’s Driving division focuses on understanding the operational pressures behind every booking — not simply filling a shift. The team recruits across professional driving and transport-support roles, with compliance and availability managed around the realities of fast-moving logistics operations.</p><a className="candidateTextLink darkLink" href="/employers">Explore Employer Solutions <span>↗</span></a></div>
      </div>
      <div className="pageShell drivingProofRail">
        {[
          ['01','Temporary & Ad-hoc','Flexible cover for changing rotas, peaks and urgent operational requirements.'],
          ['02','Permanent','Transport professionals recruited for long-term operational fit.'],
          ['03','Compliance-led','Licence, history and role-specific checks built into the supply process.'],
          ['04','Dedicated support','Account management and communication throughout the assignment.'],
        ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
      </div>
    </section>

    <section className="drivingRoles">
      <div className="pageShell drivingRolesHead"><div><SectionLabel>DRIVING JOB CATEGORIES</SectionLabel><h2>From Class 1 drivers<br/><em>to transport teams.</em></h2></div><p>The division supports a broad range of driving and transport roles. Select a category to explore the types of assignments Complex recruits for.</p></div>
      <div className="pageShell"><DrivingRoleExplorer /></div>
    </section>

    <section className="drivingCompliance">
      <div className="drivingComplianceImage" aria-hidden="true" />
      <div className="drivingCompliancePanel">
        <SectionLabel>DRIVER COMPLIANCE</SectionLabel>
        <h2>Right licence.<br/><em>Right checks.</em><br/>Ready to work.</h2>
        <p>Driver compliance is treated as part of the recruitment service, helping reduce the administrative pressure on transport teams before and during an assignment.</p>
        <div className="drivingComplianceList">
          {[
            'Licence checks at registration and every 12 weeks thereafter',
            'Written working-time, tachograph and Highway Code testing',
            'Minimum of two references held on file',
            'Driver accident history reviewed',
            'Driver hours monitored and reviewed weekly',
            'Support with the management of driver infringements',
          ].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}
        </div>
        <a className="button buttonAccent" href="/request-staff">Request Compliant Drivers <span>↗</span></a>
      </div>
    </section>

    <section className="drivingService">
      <div className="pageShell drivingServiceGrid">
        <div><SectionLabel>SERVICE DELIVERY</SectionLabel><h2>More than<br/><em>the placement.</em></h2><p>Complex’s existing Driving service model includes ongoing operational support after drivers are supplied.</p></div>
        <div className="drivingServiceItems">
          {['Daily check-in confirmation','Management of rotas','Weekly onsite staff welfare sessions','Training workshops','Weekly management information','Monthly compliance log','Worker performance reviews','Buddy system'].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><i>↗</i></article>)}
        </div>
      </div>
    </section>

    <section className="drivingProcess">
      <div className="pageShell drivingProcessHead"><SectionLabel>FROM REQUIREMENT TO ROAD</SectionLabel><h2>Built around the pace<br/><em>of transport.</em></h2></div>
      <div className="pageShell drivingProcessTrack">
        {[
          ['01','Brief us','Role, class, shift, location, start time and volume.'],
          ['02','Source & verify','Suitable drivers are identified and relevant checks are completed.'],
          ['03','Confirm & check in','Assignments are confirmed and attendance is managed.'],
          ['04','Stay involved','Complex supports rotas, welfare, performance and service information.'],
        ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
      </div>
    </section>

    <section className="drivingJobs" id="driving-jobs">
      <div className="pageShell drivingJobsHead"><div><SectionLabel>DRIVING OPPORTUNITIES</SectionLabel><h2>Current roles<br/><em>on the road.</em></h2></div><div><p>Live vacancies will be pulled from the Complex jobs CMS and filtered automatically to the Driving division.</p><a className="candidateTextLink darkLink" href="/jobs">View All Jobs <span>↗</span></a></div></div>
      <div className="pageShell drivingJobList">
        {[
          ['HGV Class 1 Driver','Enfield','Driving','Temporary','CMS PREVIEW'],
          ['HGV Class 2 Driver','North London','Driving','Temporary','CMS PREVIEW'],
          ['Transport Planner','London','Driving','Permanent','CMS PREVIEW'],
        ].map(([t,l,s,ty,tag])=><a href="/jobs" className="drivingJobRow" key={t}><small>{tag}</small><strong>{t}</strong><span>{l}</span><span>{s}</span><span>{ty}</span><i>↗</i></a>)}
      </div>
    </section>

    <section className="drivingDual">
      <a href="/request-staff" className="drivingDualCard employerPath"><small>FOR EMPLOYERS</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I need drivers.</h3></div><p>Tell us the licence class, numbers, shift and timing. We’ll take it from there.</p><span className="sectorDualCta">Request Drivers <i>↗</i></span></a>
      <a href="/jobs" className="drivingDualCard candidatePath"><small>FOR CANDIDATES</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I’m looking for driving work.</h3></div><p>Explore current driving and transport opportunities.</p><span className="sectorDualCta">Find Driving Jobs <i>↗</i></span></a>
    </section>

    <footer id="contact" className="siteFooter">
      <img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/>
      <div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div>
      <div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a><a href="/training/driver-assessments">Driver Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div></div>
      <div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div>
    </footer>
  </main>
}
