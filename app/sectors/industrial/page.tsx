import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { IndustrialRoleExplorer } from '../../../components/IndustrialRoleExplorer';

export default function IndustrialPage(){
  return <main className="industrialPage">
    <section className="drivingHero industrialHero" id="top">
      <div className="drivingHeroMedia industrialHeroMediaA" aria-hidden="true" />
      <div className="drivingHeroMedia industrialHeroMediaB" aria-hidden="true" />
      <div className="drivingHeroShade" aria-hidden="true" />
      <Header active="Sectors" theme="dark" />
      <div className="pageShell drivingHeroContent">
        <div className="drivingHeroCopy">
          <div className="eyebrow">COMPLEX INDUSTRIAL <span>/ SPECIALIST DIVISION</span></div>
          <h1>Industrial staffing built for<br/><em>the pace of your operation.</em></h1>
          <p>Reliable temporary and permanent workforce solutions across warehousing, logistics, production, engineering and retail environments.</p>
          <div className="heroActions"><a className="button buttonAccent" href="/request-staff">Request Industrial Staff <span>↗</span></a><a className="textLink" href="#industrial-jobs">Find Industrial Work →</a></div>
        </div>
        <div className="drivingHeroProof"><span>OPERATIONAL SUPPORT</span><strong>24/7</strong><p>Flexible staffing support for fast-moving industrial requirements.</p></div>
      </div>
      <div className="drivingHeroStrip"><div className="pageShell drivingStripGrid"><span>INDUSTRIAL DIVISION</span><b>Warehouse</b><b>FLT</b><b>Production</b><b>Picking & Packing</b><b>Supervisory</b></div></div>
    </section>

    <section className="drivingIntro">
      <div className="pageShell drivingIntroGrid"><div><SectionLabel>WHY COMPLEX INDUSTRIAL</SectionLabel><h2>Flexible workforce.<br/><em>Operationally ready.</em></h2></div><div className="drivingIntroCopy"><p>Complex Industrial supports clients with reliable staff and service models shaped around different operating pressures — from daily supply and urgent peaks to fully managed workforce requirements.</p><a className="candidateTextLink darkLink" href="/employers">Explore Employer Solutions <span>↗</span></a></div></div>
      <div className="pageShell drivingProofRail">{[
        ['01','Temporary & Ad-hoc','Rapid access to workers for peaks, absence cover and changing volume.'],
        ['02','Permanent','Longer-term recruitment for operational and supervisory roles.'],
        ['03','Skills-matched','Candidates aligned to the practical requirements of the environment.'],
        ['04','Dedicated support','Account management and 24/7 response for changing requirements.'],
      ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
    </section>

    <section className="drivingRoles"><div className="pageShell drivingRolesHead"><div><SectionLabel>INDUSTRIAL JOB CATEGORIES</SectionLabel><h2>From warehouse teams<br/><em>to operational support.</em></h2></div><p>Explore the kinds of warehouse, logistics, material-handling and production roles supported by the Industrial division.</p></div><div className="pageShell"><IndustrialRoleExplorer /></div></section>

    <section className="drivingCompliance industrialCompliance"><div className="drivingComplianceImage" aria-hidden="true"/><div className="drivingCompliancePanel"><SectionLabel>WORKFORCE READINESS</SectionLabel><h2>Right people.<br/><em>Right preparation.</em><br/>Ready to perform.</h2><p>Complex works around each client’s regulatory and operational requirements so workers arrive briefed, appropriately checked and prepared for the role.</p><div className="drivingComplianceList">{[
      'Pre-screening for suitability and relevant work history',
      'Eligibility and role-specific compliance checks',
      'Skills matching around the client requirement',
      'Site and role-specific assignment overview',
      'Performance reviews and upskilling support',
      'Management information around productivity, fulfilment and retention',
    ].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}</div><a className="button buttonAccent" href="/request-staff">Request Industrial Staff <span>↗</span></a></div></section>

    <section className="drivingService"><div className="pageShell drivingServiceGrid"><div><SectionLabel>SERVICE DELIVERY</SectionLabel><h2>Support beyond<br/><em>the first shift.</em></h2><p>Complex’s Industrial service model combines workforce supply with practical account support throughout the assignment.</p></div><div className="drivingServiceItems">{['Daily check-in confirmation','Management of rotas','Weekly onsite staff welfare sessions','Training workshops','Weekly management information','Monthly compliance log','Worker performance reviews','Buddy system'].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><i>↗</i></article>)}</div></div></section>

    <section className="drivingProcess"><div className="pageShell drivingProcessHead"><SectionLabel>FROM REQUIREMENT TO WORKFORCE</SectionLabel><h2>Built around changing<br/><em>operational demand.</em></h2></div><div className="pageShell drivingProcessTrack">{[
      ['01','Brief us','Role, location, shift, numbers and timing.'],
      ['02','Match & prepare','Suitable workers are identified, checked and briefed.'],
      ['03','Deploy','Assignments are confirmed and attendance is supported.'],
      ['04','Stay involved','Complex manages communication, welfare and service information.'],
    ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="drivingJobs" id="industrial-jobs"><div className="pageShell drivingJobsHead"><div><SectionLabel>INDUSTRIAL OPPORTUNITIES</SectionLabel><h2>Current roles<br/><em>across industry.</em></h2></div><div><p>Live roles will be pulled from the new jobs CMS and filtered automatically to the Industrial division.</p><a className="candidateTextLink darkLink" href="/jobs">View All Jobs <span>↗</span></a></div></div><div className="pageShell drivingJobList">{[
      ['Warehouse Operative','Hayes','Industrial','Temporary','CMS PREVIEW'],['Forklift Driver','Heston','Industrial','Temporary','CMS PREVIEW'],['Warehouse Supervisor','London','Industrial','Permanent','CMS PREVIEW']
    ].map(([t,l,s,ty,tag])=><a href="/jobs" className="drivingJobRow" key={t}><small>{tag}</small><strong>{t}</strong><span>{l}</span><span>{s}</span><span>{ty}</span><i>↗</i></a>)}</div></section>

    <section className="drivingDual"><a href="/request-staff" className="drivingDualCard employerPath"><small>FOR EMPLOYERS</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I need industrial staff.</h3></div><p>Tell us the role, shift, numbers and timing. We’ll take it from there.</p><span className="sectorDualCta">Request Staff <i>↗</i></span></a><a href="/jobs" className="drivingDualCard candidatePath"><small>FOR CANDIDATES</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I’m looking for industrial work.</h3></div><p>Explore warehouse, logistics and production opportunities.</p><span className="sectorDualCta">Find Industrial Jobs <i>↗</i></span></a></section>

    <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>
  </main>
}
