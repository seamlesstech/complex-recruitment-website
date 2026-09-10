import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { ConstructionRoleExplorer } from '../../../components/ConstructionRoleExplorer';

export default function ConstructionPage(){
  return <main className="constructionPage">
    <section className="drivingHero constructionHero" id="top">
      <div className="drivingHeroMedia constructionHeroMediaA" aria-hidden="true" />
      <div className="drivingHeroMedia constructionHeroMediaB" aria-hidden="true" />
      <div className="drivingHeroShade" aria-hidden="true" />
      <Header active="Sectors" theme="dark" />
      <div className="pageShell drivingHeroContent"><div className="drivingHeroCopy"><div className="eyebrow">COMPLEX CONSTRUCTION <span>/ SPECIALIST DIVISION</span></div><h1>Construction staffing built for<br/><em>the demands of site.</em></h1><p>Temporary and permanent labour across main build, residential development, civil engineering and specialist construction environments.</p><div className="heroActions"><a className="button buttonAccent" href="/request-staff">Request Construction Staff <span>↗</span></a><a className="textLink" href="#construction-jobs">Find Construction Work →</a></div></div><div className="drivingHeroProof"><span>URGENT REQUIREMENTS</span><strong>24/7</strong><p>Prompt support for same- and next-day construction staffing needs.</p></div></div>
      <div className="drivingHeroStrip"><div className="pageShell drivingStripGrid"><span>CONSTRUCTION DIVISION</span><b>Labour & Trades</b><b>Plant Operators</b><b>Site Operatives</b><b>Temporary</b><b>Permanent</b></div></div>
    </section>

    <section className="drivingIntro"><div className="pageShell drivingIntroGrid"><div><SectionLabel>WHY COMPLEX CONSTRUCTION</SectionLabel><h2>Site-ready recruitment<br/><em>without the guesswork.</em></h2></div><div className="drivingIntroCopy"><p>Complex Construction supports public-sector bodies, consultancies, contractors and specialist subcontractors with labour across changing project programmes, urgent site requirements and permanent recruitment.</p><a className="candidateTextLink darkLink" href="/employers">Explore Employer Solutions <span>↗</span></a></div></div><div className="pageShell drivingProofRail">{[
      ['01','Urgent labour','Same- and next-day requirements supported where possible.'],['02','Temporary & Permanent','Flexible supply across changing project and workforce needs.'],['03','Industry checks','Required qualifications and vetting aligned to the client and site.'],['04','Dedicated support','Responsive account management throughout the requirement.']
    ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="drivingRoles"><div className="pageShell drivingRolesHead"><div><SectionLabel>CONSTRUCTION JOB CATEGORIES</SectionLabel><h2>From skilled trades<br/><em>to plant and site teams.</em></h2></div><p>Explore the labour, trade, plant and site-support categories Complex recruits across construction projects.</p></div><div className="pageShell"><ConstructionRoleExplorer /></div></section>

    <section className="drivingCompliance constructionCompliance"><div className="drivingComplianceImage" aria-hidden="true"/><div className="drivingCompliancePanel"><SectionLabel>SITE COMPLIANCE</SectionLabel><h2>Right qualification.<br/><em>Right documentation.</em><br/>Site ready.</h2><p>Where projects have industry-specific vetting or qualification requirements, Complex supports the documentation and checks needed to help workers start compliantly and on time.</p><div className="drivingComplianceList">{[
      'Role and project requirement confirmed before sourcing',
      'Relevant qualification and documentation checks',
      'Eligibility and previous-work screening where required',
      'Site and role expectations communicated before start',
      'Assignment information and reporting procedures confirmed',
      'Ongoing performance, welfare and service support',
    ].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}</div><a className="button buttonAccent" href="/request-staff">Request Site-Ready Staff <span>↗</span></a></div></section>

    <section className="drivingService"><div className="pageShell drivingServiceGrid"><div><SectionLabel>SERVICE DELIVERY</SectionLabel><h2>Support across<br/><em>the project.</em></h2><p>Complex’s construction service model combines staffing with ongoing workforce and account support.</p></div><div className="drivingServiceItems">{['Daily check-in confirmation','Management of rotas','Weekly onsite staff welfare sessions','Training workshops','Weekly management information','Monthly compliance log','Worker performance reviews','Buddy system'].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><i>↗</i></article>)}</div></div></section>

    <section className="drivingProcess"><div className="pageShell drivingProcessHead"><SectionLabel>FROM REQUIREMENT TO SITE</SectionLabel><h2>Built around the pace<br/><em>of construction.</em></h2></div><div className="pageShell drivingProcessTrack">{[
      ['01','Brief us','Trade, qualification, site, numbers and start date.'],['02','Source & verify','Suitable workers are matched and required documentation is checked.'],['03','Confirm & mobilise','Workers receive assignment details and are prepared for site.'],['04','Stay involved','Complex supports attendance, welfare, performance and service information.']
    ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="drivingJobs" id="construction-jobs"><div className="pageShell drivingJobsHead"><div><SectionLabel>CONSTRUCTION OPPORTUNITIES</SectionLabel><h2>Current roles<br/><em>on site.</em></h2></div><div><p>Live roles will be pulled from the new jobs CMS and filtered automatically to the Construction division.</p><a className="candidateTextLink darkLink" href="/jobs">View All Jobs <span>↗</span></a></div></div><div className="pageShell drivingJobList">{[
      ['CSCS Labourer','London','Construction','Temporary','CMS PREVIEW'],['Telehandler Operator','Greater London','Construction','Temporary','CMS PREVIEW'],['Site Supervisor','London','Construction','Permanent','CMS PREVIEW']
    ].map(([t,l,s,ty,tag])=><a href="/jobs" className="drivingJobRow" key={t}><small>{tag}</small><strong>{t}</strong><span>{l}</span><span>{s}</span><span>{ty}</span><i>↗</i></a>)}</div></section>

    <section className="drivingDual"><a href="/request-staff" className="drivingDualCard employerPath"><small>FOR EMPLOYERS</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I need construction staff.</h3></div><p>Tell us the trade, project, numbers and timing. We’ll take it from there.</p><span className="sectorDualCta">Request Staff <i>↗</i></span></a><a href="/jobs" className="drivingDualCard candidatePath"><small>FOR CANDIDATES</small><div className="sectorDualHeading"><span className="sectorDualGreeting">Hi, Complex,</span><h3>I’m looking for construction work.</h3></div><p>Explore current labour, trade and site opportunities.</p><span className="sectorDualCta">Find Construction Jobs <i>↗</i></span></a></section>

    <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>
  </main>
}
