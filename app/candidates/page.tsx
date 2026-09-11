import { Header } from "../../components/Header";
import { SectionLabel } from "../../components/SectionLabel";
import { Footer } from "../../components/layout/Footer";

const jobs = [
  {title:'HGV Class 1 Driver', location:'Enfield', sector:'Driving', type:'Temporary', pay:'£19–£22/hr'},
  {title:'Warehouse Operative', location:'Croydon', sector:'Industrial', type:'Temporary', pay:'£12.50/hr'},
  {title:'HGV Class 2 Driver', location:'Park Royal', sector:'Driving', type:'Temp-to-perm', pay:'£17–£20/hr'},
  {title:'CSCS Labourer', location:'Greater London', sector:'Construction', type:'Temporary', pay:'Competitive'},
];

const benefits = [
  ['01','Competitive rates','Clear role information and competitive pay across the assignments we support.'],
  ['02','Reliable payroll','A dependable payroll process so you know when to expect your pay.'],
  ['03','Flexible opportunities','Temporary, ad-hoc and longer-term work depending on what suits you.'],
  ['04','Real communication','A recruitment team you can reach when you need an update or support.'],
  ['05','Training & upskilling','Access to relevant driver training and development opportunities.'],
  ['06','Sector specialists','People who understand Driving, Industrial and Construction environments.'],
];

export default function CandidatesPage(){
  return <main className="candidatesPage">
    <section className="candidatesHero" id="top">
      <Header active="Candidates" theme="light" />
      <div className="pageShell candidatesHeroGrid">
        <div className="candidatesHeroCopy">
          <div className="candidateEyebrow">FOR CANDIDATES <span>/ FIND WORK</span></div>
          <h1>Find work that<br/><em>works for you<span className="accentPeriod">.</span></em></h1>
          <p>Explore current opportunities across Driving, Industrial and Construction, with a recruitment team that keeps communication clear from application to first shift.</p>
          <div className="candidateHeroActions">
            <a className="button buttonAccent" href="#candidate-jobs">Find Jobs <span>↗</span></a>
            <a className="candidateTextLink" href="#register-interest">Register your interest <span>↓</span></a>
          </div>
        </div>
        <div className="candidatesHeroVisual" aria-label="Worker in an operational environment">
          <div className="candidateHeroRedBlock" aria-hidden="true" />
          <div className="candidateHeroPhoto" />
          <div className="candidateHeroCard">
            <span>CURRENT OPPORTUNITIES</span>
            <strong>Driving · Industrial<br/>Construction</strong>
            <i>↗</i>
          </div>
        </div>
      </div>
      <div className="candidateHeroStrip">
        <div className="pageShell candidateExpectationGrid">
          <span>WHAT YOU CAN EXPECT</span>
          <div><i>01</i><b>Competitive rates</b></div>
          <div><i>02</i><b>Reliable payroll</b></div>
          <div><i>03</i><b>Flexible roles</b></div>
          <div><i>04</i><b>Real support</b></div>
        </div>
      </div>
    </section>

    <section className="candidateJobs" id="candidate-jobs">
      <div className="pageShell candidateJobsHead">
        <div>
          <SectionLabel>LATEST OPPORTUNITIES</SectionLabel>
          <h2>Find your<br/><em>next role.</em></h2>
        </div>
        <div className="candidateJobsIntro">
          <p>Browse current vacancies across our specialist sectors. The live site will pull these directly from the Complex jobs CMS.</p>
          <div className="candidateFilters" aria-label="Example job filters">
            <button className="active">All roles</button><button>Driving</button><button>Industrial</button><button>Construction</button>
          </div>
        </div>
      </div>
      <div className="pageShell candidateJobList">
        <div className="candidateJobLabels"><span>ROLE</span><span>LOCATION</span><span>SECTOR</span><span>TYPE</span><span>RATE</span><span></span></div>
        {jobs.map(job=><a className="candidateJobRow" href="#" key={job.title}>
          <strong>{job.title}</strong><span>{job.location}</span><span>{job.sector}</span><span>{job.type}</span><span>{job.pay}</span><i>↗</i>
        </a>)}
      </div>
      <div className="pageShell candidateJobsFoot"><a className="button buttonDark" href="/jobs">View All Jobs <span>↗</span></a></div>
    </section>

    <section className="candidateWhy candidateWhyV17">
      <div className="pageShell candidateWhyHeader">
        <SectionLabel>WHY WORK WITH COMPLEX</SectionLabel>
        <div>
          <h2>Good work starts<br/><em>with being valued.</em></h2>
          <p>We want the experience around the job to feel as dependable as the job itself — clear communication, reliable processes and people who understand the sectors they recruit for.</p>
        </div>
      </div>
      <div className="pageShell candidatePromiseStage">
        <div className="candidatePromiseImage">
          <div className="candidatePromiseBadge"><span>PEOPLE FIRST</span><strong>Clear communication.<br/>Real support.</strong></div>
        </div>
        <div className="candidatePromiseContent">
          <div className="candidatePromiseTop">
            <span>WHAT YOU CAN EXPECT</span>
            <p>Practical support around the work — not unnecessary friction around the recruitment process.</p>
          </div>
          <div className="candidateBenefitGrid candidateBenefitGridV17">
            {benefits.map(([n,t,c])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div><i>↗</i></article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="candidateJourney">
      <div className="pageShell candidateJourneyHead">
        <div><SectionLabel>YOUR JOURNEY</SectionLabel><h2>From application<br/><em>to first shift.</em></h2></div>
        <p>A straightforward recruitment journey, with clear communication at each stage and role-specific checks where required.</p>
      </div>
      <div className="pageShell candidateJourneyTrack">
        {[
          ['01','Find a role','Browse live vacancies and choose an opportunity that fits your experience.'],
          ['02','Apply','Send the essentials and your CV through a quick, mobile-friendly application.'],
          ['03','Talk to Complex','We review your application, discuss the role and confirm any checks required.'],
          ['04','Get ready','If the role is right, we help you understand what you need before the assignment starts.'],
        ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p><i>↗</i></article>)}
      </div>
    </section>

    <section className="candidateSectors candidateSectorsV17">
      <div className="pageShell candidateSectorsHead">
        <SectionLabel>WHERE WE RECRUIT</SectionLabel>
        <h2>Specialist opportunities<br/>across three sectors.</h2>
      </div>
      <div className="pageShell candidateSectorCards">
        <a className="candidateSectorCard driving" href="/sectors/driving">
          <div className="candidateSectorCardMedia" />
          <div className="candidateSectorCardShade" />
          <span className="candidateSectorNumber">01</span>
          <div className="candidateSectorCardCopy"><small>EXPLORE SECTOR</small><strong>Driving</strong><p>HGV Class 1 & 2, 7.5T, 3.5T, ADR, HIAB and transport roles.</p></div>
          <i>↗</i>
        </a>
        <a className="candidateSectorCard industrial" href="/sectors/industrial">
          <div className="candidateSectorCardMedia" />
          <div className="candidateSectorCardShade" />
          <span className="candidateSectorNumber">02</span>
          <div className="candidateSectorCardCopy"><small>EXPLORE SECTOR</small><strong>Industrial</strong><p>Warehouse, FLT, picking, loading, production and supervisory opportunities.</p></div>
          <i>↗</i>
        </a>
        <a className="candidateSectorCard construction" href="/sectors/construction">
          <div className="candidateSectorCardMedia" />
          <div className="candidateSectorCardShade" />
          <span className="candidateSectorNumber">03</span>
          <div className="candidateSectorCardCopy"><small>EXPLORE SECTOR</small><strong>Construction</strong><p>Trades, plant, site operations, labour and project-based opportunities.</p></div>
          <i>↗</i>
        </a>
      </div>
    </section>

    <section className="candidateTraining">
      <div className="pageShell candidateTrainingGrid">
        <div>
          <SectionLabel>TRAINING & DEVELOPMENT</SectionLabel>
          <h2>Keep moving<br/><em>forward.</em></h2>
          <p>Complex also supports professional drivers through assessments, CPC training and relevant development opportunities.</p>
          <a className="button buttonDark" href="/training">Explore Training <span>↗</span></a>
        </div>
        <div className="candidateTrainingCards">
          <a href="/training/driver-assessments"><span>01</span><h3>Driver Assessments</h3><p>Practical and theoretical evaluation designed around safer, more capable driving.</p><i>↗</i></a>
          <a href="/training/cpc"><span>02</span><h3>CPC Training</h3><p>Professional driver training and development for a highly regulated sector.</p><i>↗</i></a>
        </div>
      </div>
    </section>

    <section className="candidateRegister" id="register-interest">
      <div className="pageShell candidateRegisterGrid">
        <div>
          <SectionLabel>CAN'T SEE THE RIGHT ROLE?</SectionLabel>
          <h2>Stay on our<br/><em>radar.</em></h2>
        </div>
        <div className="candidateRegisterCard">
          <span>REGISTER YOUR INTEREST</span>
          <h3>Tell us what kind of work you're looking for.</h3>
          <p>Share your details and CV so the Complex team can contact you when a relevant opportunity comes up.</p>
          <div className="candidateRegisterMeta"><span>No account required</span><span>Mobile friendly</span></div>
          <a href="/register-interest">Register your interest <i>↗</i></a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
}
