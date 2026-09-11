import { Header } from "../../components/Header";
import { SectionLabel } from "../../components/SectionLabel";
import { EmployerServiceSwitcher } from "../../components/EmployerServiceSwitcher";
import { RequestStaffPreview } from "../../components/RequestStaffPreview";
import { Footer } from "../../components/layout/Footer";

const checks = [
  ['01','Right-to-work','Identity and eligibility checks appropriate to the assignment.'],
  ['02','Employment history','References and experience reviewed where the role requires it.'],
  ['03','Licences & categories','Relevant driver licence, category and entitlement checks.'],
  ['04','Qualifications','Role-specific tickets, cards and qualifications verified where applicable.'],
  ['05','Competency','Practical or competency assessment where the assignment calls for it.'],
  ['06','Ongoing compliance','Relevant records and requirements kept under review during supply.'],
];

export default function EmployersPage(){
  return <main className="employersPage">
    <section className="employersHero" id="top">
      <div className="employersHeroMedia" />
      <div className="employersHeroShade" />
      <Header active="Employers" />
      <div className="pageShell employersHeroInner">
        <div className="employersHeroCopy">
          <div className="eyebrow">FOR EMPLOYERS <span>/ WORKFORCE SOLUTIONS</span></div>
          <h1><span>Staffing built for</span><br/><em>your operation<span className="accentPeriod">.</span></em></h1>
          <p>When demand changes, Complex helps you respond with the right people across Driving, Industrial and Construction — from urgent temporary cover to permanent hires.</p>
          <div className="heroActions">
            <a className="button buttonAccent" href="/request-staff">Request Staff <span>↗</span></a>
            <a className="textLink" href="#solutions">See our solutions <span>↓</span></a>
          </div>
        </div>
        <aside className="employerHeroProof"><span>WHEN YOU NEED US</span><strong>24/7</strong><p>Operational support</p></aside>
      </div>
      <div className="employersHeroStrip">
        <div className="pageShell employerStripInner">
          <span>HOW WE CAN SUPPORT YOU</span>
          <div className="workTypeList">
            <b><span className="workTypeIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg></span>Temporary</b>
            <b><span className="workTypeIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 3 6 13h5l-.5 8L18 11h-5l.5-8Z"/></svg></span>Ad-hoc</b>
            <b><span className="workTypeIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h12l-3-3M19 16H7l3 3"/></svg></span>Temp-to-perm</b>
            <b><span className="workTypeIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></span>Permanent</b>
            <b><span className="workTypeIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19c.7-3 2.4-4.5 5-4.5S12.3 16 13 19M11 19c.7-3 2.4-4.5 5-4.5s4.3 1.5 5 4.5"/></svg></span>High-volume</b>
          </div>
        </div>
      </div>
    </section>

    <section className="employerStatement lightSection">
      <div className="pageShell employerStatementGrid">
        <SectionLabel>BUILT FOR OPERATIONS</SectionLabel>
        <h2>When staffing pressure changes,<br/><em>we move with it.</em></h2>
        <p>Recruitment is only useful when it works in the real world. Complex combines specialist sector knowledge with responsive account support so businesses can deal with peaks, absences, new contracts and longer-term hiring without losing momentum.</p>
      </div>
      <div className="pageShell pressureBand">
        <span>ABSENCE COVER</span><i>→</i><span>SEASONAL PEAKS</span><i>→</i><span>NEW CONTRACTS</span><i>→</i><span>PERMANENT GROWTH</span>
      </div>
    </section>

    <section className="employerSolutions" id="solutions">
      <div className="pageShell employerSolutionsHead">
        <div><SectionLabel>RECRUITMENT SOLUTIONS</SectionLabel><h2>Support that flexes<br/>around the requirement.</h2></div>
        <p>Choose the model that suits the pressure you're dealing with now. Complex can support immediate temporary demand as well as more considered permanent recruitment.</p>
      </div>
      <div className="pageShell"><EmployerServiceSwitcher /></div>
    </section>

    <section className="employerSectors lightSection">
      <div className="pageShell employerSectorsHead"><SectionLabel>SECTOR SPECIALISTS</SectionLabel><h2>People who understand<br/>the work.</h2></div>
      <div className="pageShell employerSectorRows">
        <a href="/sectors/driving"><span>01</span><strong>Driving</strong><p>Drivers, transport professionals and operational support across logistics and distribution.</p><i>↗</i></a>
        <a href="/sectors/industrial"><span>02</span><strong>Industrial</strong><p>Warehousing, production, distribution and flexible industrial workforce support.</p><i>↗</i></a>
        <a href="/sectors/construction"><span>03</span><strong>Construction</strong><p>Trades, plant, site operatives and labour for projects and contractors.</p><i>↗</i></a>
      </div>
    </section>

    <section className="employerCompliance">
      <div className="pageShell complianceIntro">
        <div><SectionLabel>COMPLIANCE & VETTING</SectionLabel><h2>Confidence before<br/>the first shift.</h2></div>
        <p>The right person is not simply someone who is available. Relevant identity, experience, licence, qualification and competency checks are built into the supply process according to the role and assignment.</p>
      </div>
      <div className="pageShell checkGrid">
        {checks.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
      </div>
    </section>

    <section className="employerProcess lightSection">
      <div className="pageShell employerProcessHead">
        <SectionLabel>FROM REQUIREMENT TO READY</SectionLabel>
        <h2>A clear route from<br/>need to workforce.</h2>
      </div>
      <div className="pageShell employerProcessTrack">
        {[
          ['01','Brief us','Tell us the role, location, headcount, shifts and when you need people.'],
          ['02','Source & verify','We identify suitable candidates and complete the relevant checks.'],
          ['03','Confirm & deploy','Workers are confirmed, briefed and prepared for the assignment.'],
          ['04','Stay supported','We remain involved with communication, account support and escalation.'],
        ].map(([n,t,c])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
      </div>
    </section>

    <section className="accountSupport">
      <div className="accountSupportImage" />
      <div className="accountSupportCopy">
        <SectionLabel>ACCOUNT SUPPORT</SectionLabel>
        <h2>The relationship doesn't end<br/><em>when the shift starts.</em></h2>
        <p>Complex stays close to the requirement after placement, helping clients deal with changes, questions and operational issues as they happen.</p>
        <div className="supportList">
          <span>Dedicated point of contact</span><span>Ongoing communication</span><span>Rapid replacement / escalation support</span><span>Support outside normal office hours</span>
        </div>
        <div className="support24"><strong>24/7</strong><span>Operational support</span></div>
      </div>
    </section>

    <section className="employerFinal" id="request-staff">
      <div className="pageShell employerFinalGrid">
        <div>
          <SectionLabel>START A REQUEST</SectionLabel>
          <h2>Tell us what<br/>you need.</h2>
          <p>You don't need an account. Give us the essentials and the Complex team can take the requirement from there.</p>
        </div>
        <RequestStaffPreview />
      </div>
    </section>

    <Footer />
  </main>
}
