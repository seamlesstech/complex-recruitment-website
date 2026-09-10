import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';

export default function JobDetailPage(){
  return <main className="jobDetailPage">
    <section className="jobDetailHero">
      <Header active="Jobs" theme="light" />
      <div className="pageShell jobDetailHeroGrid">
        <div className="jobDetailHeroMain">
          <a className="jobBack" href="/jobs">← Back to jobs</a>
          <span className="jobSectorTag">DRIVING / TEMPORARY</span>
          <h1>HGV Class 1<br/><em>Driver<span className="accentPeriod">.</span></em></h1>
        </div>
        <div className="jobDetailHeroMeta">
          <div><span>LOCATION</span><strong>Enfield</strong></div>
          <div><span>RATE</span><strong>£19–£22/hr</strong></div>
          <div><span>REFERENCE</span><strong>COM-1043</strong></div>
          <a className="button buttonAccent" href="#apply">Apply for this job <span>↓</span></a>
        </div>
      </div>
      <div className="jobDetailStrip"><div className="pageShell"><b>HGV Class 1</b><b>Temporary</b><b>Night / Day shifts</b><b>Immediate start</b><span>Prototype vacancy</span></div></div>
    </section>

    <section className="jobDetailBody">
      <div className="pageShell jobDetailLayout">
        <article className="jobDetailContent">
          <SectionLabel>THE ROLE</SectionLabel>
          <h2>Keep a busy transport<br/><em>operation moving.</em></h2>
          <p className="jobLead">Complex is recruiting an experienced HGV Class 1 Driver for a temporary assignment in Enfield. This prototype copy demonstrates the structure the CMS-driven vacancy page will support.</p>
          <div className="jobDetailBlock"><h3>What you’ll be doing</h3><ul><li>Completing scheduled Class 1 deliveries safely and efficiently.</li><li>Carrying out vehicle checks and reporting defects appropriately.</li><li>Following site, transport and customer procedures.</li><li>Maintaining accurate delivery and driving records.</li><li>Communicating clearly with the transport team throughout the shift.</li></ul></div>
          <div className="jobDetailBlock"><h3>What we’re looking for</h3><ul><li>Valid HGV Class 1 licence and relevant Driver CPC.</li><li>Current Digital Tachograph Card.</li><li>Professional approach to vehicle safety and compliance.</li><li>Relevant recent driving experience.</li><li>Ability to work the advertised shift pattern.</li></ul></div>
          <div className="jobDetailBlock"><h3>Working through Complex</h3><p>Complex supports candidates before and during assignments with clear communication, reliable processes and sector-focused recruitment support.</p></div>
        </article>
        <aside className="jobApplyRail">
          <span>READY TO APPLY?</span><h3>Think this role<br/>fits you?</h3><p>You can complete the application in a few minutes. Have your CV ready.</p><a className="button buttonAccent" href="#apply">Start Application <span>↗</span></a>
          <div className="jobApplyMini"><span>APPLICATION</span><strong>No account required.</strong><small>Your details go directly to the Complex recruitment team.</small></div>
        </aside>
      </div>
    </section>

    <section className="jobApplySection" id="apply">
      <div className="pageShell jobApplyGrid">
        <div><SectionLabel>APPLY FOR THIS ROLE</SectionLabel><h2>A straightforward<br/><em>application.</em></h2><p>In the production build this submission will create an application record in the Complex admin system and notify the recruitment team by email.</p></div>
        <form className="jobApplyForm">
          <div className="formStepTag"><span>01</span> YOUR DETAILS</div>
          <div className="formGrid"><label>Full name<input placeholder="Your full name"/></label><label>Telephone<input placeholder="07..."/></label><label>Email<input type="email" placeholder="you@email.com"/></label><label>Postcode<input placeholder="Postcode"/></label></div>
          <label className="fileField">CV / RESUME<span>Upload CV <b>PDF, DOC, DOCX</b></span><input type="file"/></label>
          <label>Optional message<textarea rows={4} placeholder="Anything useful for the recruiter to know?"/></label>
          <label className="privacyCheck"><input type="checkbox"/> <span>I have read the privacy notice and consent to Complex processing my application details for recruitment purposes.</span></label>
          <button className="button buttonAccent" type="button">Submit Application <span>↗</span></button>
        </form>
      </div>
    </section>

    <section className="jobRelated"><div className="pageShell"><div className="jobRelatedHead"><SectionLabel>RELATED DRIVING ROLES</SectionLabel><a className="candidateTextLink darkLink" href="/jobs">View All Jobs <span>↗</span></a></div><div className="jobRelatedGrid">{[['HGV Class 2 Driver','North London'],['Transport Planner','London'],['7.5T Driver','Greater London']].map(([t,l])=><a href="/jobs" key={t}><small>DRIVING</small><h3>{t}</h3><span>{l}</span><i>↗</i></a>)}</div></div></section>
    <Footer />
  </main>
}

function Footer(){return <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>SECTORS</h4><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></nav></div></footer>}
