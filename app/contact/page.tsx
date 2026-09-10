import { Header } from '../../components/Header';
import { SectionLabel } from '../../components/SectionLabel';

export default function ContactPage(){
  return <main className="contactPage">
    <section className="contactHero">
      <Header active="Contact" theme="light" />
      <div className="pageShell contactHeroGrid">
        <div><div className="candidateEyebrow">CONTACT <span>/ COMPLEX RECRUITMENT</span></div><h1>Start with the right<br/><em>conversation<span className="accentPeriod">.</span></em></h1></div>
        <div className="contactHeroAside"><p>Whether you need staff, you’re looking for work, or you have a general question, choose the route that gets you to the right team fastest.</p><a className="contactPhone" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div>
      </div>
    </section>

    <section className="contactRoutes">
      <div className="pageShell"><SectionLabel>HOW CAN WE HELP?</SectionLabel></div>
      <div className="pageShell contactRouteGrid">
        <a href="/request-staff" className="contactRoute red"><span>01 · EMPLOYERS</span><h2>I need staff.</h2><p>Tell us the role, location, numbers and timing so the team can understand the requirement quickly.</p><strong>Request Staff <i>↗</i></strong></a>
        <a href="/jobs" className="contactRoute dark"><span>02 · CANDIDATES</span><h2>I’m looking for work.</h2><p>Browse current jobs or register your interest if nothing suitable is live right now.</p><strong>Find Jobs <i>↗</i></strong></a>
        <a href="#general-contact" className="contactRoute gray"><span>03 · GENERAL</span><h2>I have a question.</h2><p>Accounts, HR, timesheets or anything else — use the contact details below.</p><strong>Contact Complex <i>↓</i></strong></a>
      </div>
    </section>

    <section className="contactDetails" id="general-contact">
      <div className="pageShell contactDetailsGrid">
        <div className="contactOffice">
          <SectionLabel>HEAD OFFICE</SectionLabel>
          <h2>North London.<br/><em>Easy to reach.</em></h2>
          <p>Unit 2 Georgiou Business Park<br/>Second Avenue<br/>London, N18 2PG</p>
          <a className="button buttonDark" href="tel:02039237888">0203 923 7888 <span>↗</span></a>
        </div>
        <div className="contactDepartments">
          {[
            ['GENERAL QUERIES','info@complexrecruitment.co.uk'],
            ['HUMAN RESOURCES','hr@complexrecruitment.co.uk'],
            ['ACCOUNTS','accounts@complexrecruitment.co.uk'],
            ['TIMESHEET SUBMISSIONS','timesheets@complexrecruitment.co.uk'],
          ].map(([label,email],i)=><a key={email} href={`mailto:${email}`}><span>{String(i+1).padStart(2,'0')} · {label}</span><strong>{email}</strong><i>↗</i></a>)}
        </div>
      </div>
    </section>

    <section className="contactGeneralForm">
      <div className="pageShell contactGeneralGrid">
        <div><SectionLabel>GENERAL ENQUIRY</SectionLabel><h2>Not sure where<br/><em>to start?</em></h2><p>Send a short message and we’ll route it to the appropriate team.</p></div>
        <form className="simpleContactForm"><label><span>Your name</span><input placeholder="Full name"/></label><label><span>Email</span><input type="email" placeholder="name@email.com"/></label><label><span>Phone</span><input type="tel" placeholder="Phone number"/></label><label><span>Enquiry type</span><select defaultValue=""><option value="" disabled>Select</option><option>General</option><option>Accounts</option><option>HR</option><option>Timesheets</option></select></label><label className="spanTwo"><span>Message</span><textarea rows={6} placeholder="How can we help?"/></label><button className="button buttonAccent" type="button">Send Enquiry <span>↗</span></button></form>
      </div>
    </section>

    <footer className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt=""/><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>
  </main>
}
