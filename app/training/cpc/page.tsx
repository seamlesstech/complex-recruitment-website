import { Header } from '../../../components/Header';
import { SectionLabel } from '../../../components/SectionLabel';
import { Footer } from '../../../components/layout/Footer';

export default function CpcPage(){
  return <main className="detailServicePage">
    <section className="serviceHero cpcHero">
      <Header active="Training & Assessments" theme="dark" />
      <div className="serviceHeroMedia" aria-hidden="true" /><div className="serviceHeroShade" aria-hidden="true" />
      <div className="pageShell serviceHeroGrid"><div className="serviceHeroCopy"><div className="eyebrow">CPC TRAINING <span>/ PROFESSIONAL DEVELOPMENT</span></div><h1>Keep knowledge current.<br/><em>Keep drivers moving.</em></h1><p>Driver CPC training designed around the practical realities of professional transport, available as full-course or split-session delivery.</p><div className="heroActions"><a className="button buttonAccent" href="#cpc-enquiry">Enquire About CPC <span>↗</span></a><a className="textLink" href="/training">Training Overview →</a></div></div><div className="serviceHeroBadge"><span>PERIODIC TRAINING</span><strong>35h</strong><p>Within a five-year period for HGV drivers</p></div></div>
      <div className="serviceHeroStrip"><div className="pageShell"><b>35-hour Full Course</b><b>7-hour Split Sessions</b><b>Professional Instructors</b><b>Employer Enquiries</b></div></div>
    </section>

    <section className="serviceIntro whiteSurface"><div className="pageShell serviceIntroGrid"><div><SectionLabel>CPC AT COMPLEX</SectionLabel><h2>Training that stays<br/><em>grounded in the job.</em></h2></div><div><p>Complex currently delivers CPC training in partnership with AVTAV Ltd, a member of the RTITB consortium, with courses described as approved by JAUPT and DVSA. Before launch, partnership and approval wording should be reconfirmed with the client.</p><a className="candidateTextLink darkLink" href="#cpc-enquiry">Discuss Training <span>↗</span></a></div></div></section>

    <section className="cpcFormat darkSurface"><div className="pageShell cpcFormatGrid"><div><SectionLabel>TRAINING FORMAT</SectionLabel><h2>One requirement.<br/><em>Two ways to complete it.</em></h2><p>The current Complex offering describes both a complete 35-hour course and individual 7-hour training sessions.</p></div><div className="cpcFormatCards"><article><span>FULL COURSE</span><strong>35</strong><small>hours / five days</small><p>A concentrated route for completing the full periodic training requirement.</p></article><article><span>SPLIT COURSE</span><strong>07</strong><small>hours / one-day sessions</small><p>A more flexible route for completing training across separate sessions.</p></article></div></div></section>

    <section className="cpcTopics softSurface"><div className="pageShell cpcTopicsHead"><SectionLabel>TRAINING TOPICS</SectionLabel><h2>Practical subjects for<br/><em>professional drivers.</em></h2></div><div className="pageShell cpcTopicGrid">{['Customer Service','Reducing Infringements','Vehicle Security','Fuel Consumption','Dealing With Incidents','Daily Driving Challenges','Health & Safety','Drivers’ Hours','Manual Handling','Road Freight Compliance'].map((t,i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><i>↗</i></article>)}</div></section>

    <section className="cpcInstructor whiteSurface"><div className="pageShell cpcInstructorGrid"><div className="cpcInstructorImage"/><div><SectionLabel>INSTRUCTOR-LED</SectionLabel><h2>Knowledge that<br/><em>connects to practice.</em></h2><p>The current site states that NRI-registered LGV instructors with transport-logistics training experience support delivery. The new page keeps that credibility, but presents it in a clearer and less text-heavy way.</p><div className="inlineProof"><span>Professional driving</span><span>Transport logistics</span><span>Compliance awareness</span></div><a className="button buttonDark" href="#cpc-enquiry">Plan Your Training <span>↗</span></a></div></div></section>

    <section className="serviceEnquiry redSurface" id="cpc-enquiry"><div className="pageShell serviceEnquiryGrid"><div><SectionLabel>PLAN YOUR CPC</SectionLabel><h2>Training for one driver<br/><em>or a wider team.</em></h2></div><div className="enquiryCard light"><span>CPC TRAINING ENQUIRY</span><h3>Tell us what you need.</h3><p>Share whether you are enquiring as a driver or employer, approximate numbers and preferred timing. Complex can confirm available delivery options.</p><a className="button buttonDark" href="/contact">Make an Enquiry <span>↗</span></a></div></div></section>
    <Footer variant="training" />
  </main>
}
