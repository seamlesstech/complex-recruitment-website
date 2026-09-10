import { Header } from '../../components/Header';
import { SectionLabel } from '../../components/SectionLabel';
import { JobBoardExplorer } from '../../components/JobBoardExplorer';

export default function JobsPage(){
  return <main className="jobsPage">
    <section className="jobsHero">
      <Header active="Jobs" theme="light" />
      <div className="pageShell jobsHeroGrid">
        <div>
          <div className="candidateEyebrow">LIVE OPPORTUNITIES <span>/ COMPLEX JOBS</span></div>
          <h1>Find your next<br/><em>opportunity<span className="accentPeriod">.</span></em></h1>
        </div>
        <div className="jobsHeroAside">
          <p>Search current opportunities across Driving, Industrial and Construction. No account required — find a role, review the details and apply.</p>
          <a className="candidateTextLink darkLink" href="/register-interest">Can’t see the right role? <span>Register interest ↗</span></a>
        </div>
      </div>
      <div className="jobsHeroStrip">
        <div className="pageShell"><strong>Driving</strong><strong>Industrial</strong><strong>Construction</strong><span>Temporary · Permanent · Temp-to-perm</span></div>
      </div>
    </section>

    <section className="jobsBoardSection">
      <div className="pageShell jobsBoardHead">
        <SectionLabel>SEARCH CURRENT JOBS</SectionLabel>
        <div><h2>Work that fits<br/><em>what you do.</em></h2><p>Prototype vacancy data is being used during design. The finished page will read live jobs from the Complex CMS.</p></div>
      </div>
      <div className="pageShell"><JobBoardExplorer /></div>
    </section>

    <section className="jobsCandidateSupport">
      <div className="pageShell jobsCandidateSupportGrid">
        <div><SectionLabel>WORKING WITH COMPLEX</SectionLabel><h2>More than a<br/><em>job listing.</em></h2></div>
        <div className="jobsSupportItems">
          {[
            ['01','Clear communication','Know what the role involves, where you need to be and what happens next.'],
            ['02','Reliable payroll','A straightforward candidate experience supported by dependable processes.'],
            ['03','Sector knowledge','Recruiters who understand the environments and roles they are recruiting for.'],
            ['04','Ongoing support','Complex stays available after placement — not only before you start.'],
          ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
        </div>
      </div>
    </section>

    <section className="jobsRegisterCta">
      <div className="pageShell jobsRegisterGrid">
        <div><SectionLabel>STAY ON OUR RADAR</SectionLabel><h2>Nothing suitable<br/><em>right now?</em></h2></div>
        <div><p>Tell us the type of work you are looking for and upload your CV once. The Complex team can then contact you when something relevant comes up.</p><a className="button buttonAccent" href="/register-interest">Register Your Interest <span>↗</span></a></div>
      </div>
    </section>

    <Footer />
  </main>
}

function Footer(){return <footer id="contact" className="siteFooter"><img className="footerMark" src="/complex-mark.png" alt="" aria-hidden="true"/><div className="pageShell footerLead"><div className="footerBrand"><img className="footerLogo" src="/complex-logo-white.png" alt="Complex Recruitment"/><p>Specialist workforce solutions across Driving, Industrial and Construction.</p></div><a className="footerCall" href="tel:02039237888"><span>CALL COMPLEX</span><strong>0203 923 7888</strong><i>↗</i></a></div><div className="pageShell footerNav"><div><h4>EMPLOYERS</h4><a href="/employers">Employer Solutions</a><a href="/request-staff">Request Staff</a><a href="/sectors/driving">Driving</a><a href="/sectors/industrial">Industrial</a><a href="/sectors/construction">Construction</a></div><div><h4>CANDIDATES</h4><a href="/jobs">Find Jobs</a><a href="/candidates">Why Complex</a><a href="/training">Training & Assessments</a><a href="/training/driver-assessments">Driver Assessments</a></div><div><h4>COMPANY</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div><h4>LEGAL</h4><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></div></div><div className="pageShell footerBottom"><span>© 2026 COMPLEX RECRUITMENT</span><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></nav></div></footer>}
