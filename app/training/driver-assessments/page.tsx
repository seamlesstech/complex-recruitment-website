import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { Footer } from '../../../components/layout/Footer';

export default function DriverAssessmentsPage(){
  return <main className="detailServicePage">
    <section className="serviceHero assessmentHero">
      <Header active="Training & Assessments" theme="dark" />
      <div className="serviceHeroMedia" aria-hidden="true" />
      <div className="serviceHeroShade" aria-hidden="true" />
      <div className="pageShell serviceHeroGrid">
        <div className="serviceHeroCopy"><div className="eyebrow">DRIVER ASSESSMENTS <span>/ COMPLEX DRIVING</span></div><h1>Know the driver.<br/><em>Before the road does.</em></h1><p>Practical, theory-led and load-security assessment designed to give employers useful insight into driver capability, safety and development needs.</p><div className="heroActions"><a className="button buttonAccent" href="#assessment-enquiry">Book an Assessment <span>↗</span></a><a className="textLink" href="/training">Training Overview →</a></div></div>
        <div className="serviceHeroBadge"><span>ASSESSMENT FOCUS</span><strong>03</strong><p>Theory · Practical · Load securing</p></div>
      </div>
      <div className="serviceHeroStrip"><div className="pageShell"><b>Theory Test</b><b>Practical Assessment</b><b>Load Securing</b><b>Actionable Reports</b></div></div>
    </section>

    <section className="serviceIntro whiteSurface"><div className="pageShell serviceIntroGrid"><div><SectionLabel>ASSESS WITH PURPOSE</SectionLabel><h2>More useful than<br/><em>a simple pass or fail.</em></h2></div><div><p>Complex positions assessments as a practical way to understand how a driver performs, where risk may sit and where development could help. The aim is to give both the employer and driver something useful to act on.</p><a className="candidateTextLink darkLink" href="#assessment-enquiry">Discuss Your Requirement <span>↗</span></a></div></div></section>

    <section className="assessmentModules softSurface"><div className="pageShell"><div className="assessmentModulesHead"><SectionLabel>WHAT WE ASSESS</SectionLabel><h2>Three perspectives.<br/><em>One clearer picture.</em></h2></div><div className="assessmentModuleGrid">
      <article><span>01</span><div className="moduleIcon">A</div><h3>Theory</h3><p>Knowledge and understanding relevant to professional driving and safe road use.</p></article>
      <article><span>02</span><div className="moduleIcon">B</div><h3>Practical</h3><p>On-road and vehicle-based assessment focused on driving behaviour, control and judgement.</p></article>
      <article><span>03</span><div className="moduleIcon">C</div><h3>Load Securing</h3><p>Practical awareness around safe loading, restraint and operational responsibility.</p></article>
    </div></div></section>

    <section className="assessmentReport"><div className="assessmentReportImage"/><div className="assessmentReportCopy"><SectionLabel>REPORTING & RECOMMENDATIONS</SectionLabel><h2>Turn observations<br/><em>into action.</em></h2><p>Assessment findings should not disappear into a checkbox. Complex’s current service describes detailed, actionable recommendations designed to highlight areas needing attention while recognising existing strengths.</p><div className="reportPoints"><span>Clear observations</span><span>Targeted recommendations</span><span>Development priorities</span><span>Follow-up support</span></div></div></section>

    <section className="assessmentProcess whiteSurface"><div className="pageShell processHeader"><SectionLabel>HOW IT WORKS</SectionLabel><h2>Simple to arrange.<br/><em>Useful to act on.</em></h2></div><div className="pageShell processCards">{[['01','Brief us','Tell us the driver group, vehicle context and what you need to understand.'],['02','Assess','Complex carries out the agreed theory, practical and/or load-security assessment.'],['03','Report','Receive clear feedback and recommendations from the assessment.'],['04','Develop','Discuss refresher training, follow-up assessment or further support where needed.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="serviceEnquiry darkSurface" id="assessment-enquiry"><div className="pageShell serviceEnquiryGrid"><div><SectionLabel>START AN ASSESSMENT</SectionLabel><h2>Tell us what you<br/><em>need to understand.</em></h2></div><div className="enquiryCard"><span>DRIVER ASSESSMENT ENQUIRY</span><h3>Employer or individual driver?</h3><p>Share the type of assessment, approximate number of drivers and preferred timing. The Complex team can confirm the most suitable next step.</p><a className="button buttonAccent" href="/contact">Make an Enquiry <span>↗</span></a></div></div></section>
    <Footer variant="training" />
  </main>
}
