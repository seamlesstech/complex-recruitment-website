import { Header } from '../../components/Header';
import { SectionLabel } from '../../components/SectionLabel';
import { Footer } from '../../components/layout/Footer';

export default function TrainingPage(){
  return <main className="trainingPage">
    <section className="trainingHero">
      <Header active="Training & Assessments" theme="light" />
      <div className="pageShell trainingHeroGrid">
        <div className="trainingHeroCopy"><div className="candidateEyebrow">TRAINING & ASSESSMENTS <span>/ COMPLEX DRIVING</span></div><h1>Better drivers.<br/><em>Safer operations<span className="accentPeriod">.</span></em></h1><p>Practical driver assessments and professional training designed to support safer, more capable transport operations.</p><div className="trainingHeroActions"><a className="button buttonAccent" href="#training-services">Explore Services <span>↓</span></a><a className="candidateTextLink darkLink" href="/contact">Make an Enquiry <span>↗</span></a></div></div>
        <div className="trainingHeroVisual"><div className="trainingHeroPhoto main"/><div className="trainingHeroPhoto detail"/><div className="trainingHeroStamp"><span>DRIVER SUPPORT</span><strong>Assess.<br/>Develop.<br/>Improve.</strong></div></div>
      </div>
      <div className="trainingHeroRail"><div className="pageShell"><b>Driver Assessments</b><b>CPC Training</b><b>Employer Support</b><b>Professional Development</b></div></div>
    </section>

    <section className="trainingServices" id="training-services">
      <div className="pageShell trainingServicesHead"><SectionLabel>OUR TRAINING SERVICES</SectionLabel><div><h2>Two practical ways to<br/><em>support better drivers.</em></h2><p>Choose the route that fits the requirement. Both services are designed to be clear, practical and easy to discuss with the Complex team.</p></div></div>
      <div className="pageShell trainingServiceCards">
        <a href="/training/driver-assessments" className="trainingServiceCard assessment"><div className="trainingServiceMedia"/><span>01 / ASSESSMENTS</span><div><small>FOR EMPLOYERS & DRIVERS</small><h3>Driver<br/>Assessments</h3><p>Practical and theoretical evaluation to understand driver capability, safety and development needs.</p></div><i>↗</i></a>
        <a href="/training/cpc" className="trainingServiceCard cpc"><div className="trainingServiceMedia"/><span>02 / TRAINING</span><div><small>PROFESSIONAL DEVELOPMENT</small><h3>CPC<br/>Training</h3><p>Driver-focused professional development that supports competence, knowledge and ongoing standards.</p></div><i>↗</i></a>
      </div>
    </section>

    <section className="trainingAssessmentFlow">
      <div className="pageShell trainingAssessmentGrid"><div><SectionLabel>DRIVER ASSESSMENTS</SectionLabel><h2>See the driver<br/><em>in context.</em></h2><p>Assessments should give employers and drivers useful information — not simply a pass/fail moment.</p><a className="button buttonDark" href="/training/driver-assessments">Explore Assessments <span>↗</span></a></div><div className="trainingAssessmentSteps">{[['01','Theory','Knowledge and understanding relevant to professional driving.'],['02','Practical','On-road and vehicle-based assessment of driving behaviour.'],['03','Feedback','Clear observations and recommendations following the assessment.'],['04','Development','Training support can be discussed where improvement is needed.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div>
    </section>

    <section className="trainingCpcSection"><div className="trainingCpcImage"/><div className="trainingCpcCopy"><SectionLabel>CPC TRAINING</SectionLabel><h2>Professional development<br/><em>that stays practical.</em></h2><p>Complex can support drivers and employers with CPC-focused training enquiries. The final course structure, dates and delivery details will be populated from approved business information before launch.</p><div className="trainingCpcPoints"><span>Driver-focused</span><span>Employer enquiries</span><span>Clear booking pathway</span></div><a className="button buttonAccent" href="/training/cpc">Explore CPC Training <span>↗</span></a></div></section>

    <section className="trainingWho"><div className="pageShell trainingWhoHead"><SectionLabel>WHO IS IT FOR?</SectionLabel><h2>Support for both sides<br/><em>of the operation.</em></h2></div><div className="trainingWhoGrid"><article><small>FOR EMPLOYERS</small><h3>Strengthen driver standards.</h3><p>Discuss assessments, refresher needs and training support around your transport operation.</p><a href="/contact">Make an Enquiry <i>↗</i></a></article><article><small>FOR DRIVERS</small><h3>Keep developing professionally.</h3><p>Explore assessment and training options designed around professional driving.</p><a href="/contact">Talk to Complex <i>↗</i></a></article></div></section>

    <section className="trainingFinal"><div className="pageShell trainingFinalGrid"><div><SectionLabel>START A CONVERSATION</SectionLabel><h2>Need training or<br/><em>an assessment?</em></h2></div><div><p>Tell us whether you are enquiring as an employer or driver and what support you need. The Complex team can advise on the next step.</p><a className="button buttonAccent" href="/contact">Make an Enquiry <span>↗</span></a></div></div></section>
    <Footer variant="training" />
  </main>
}
