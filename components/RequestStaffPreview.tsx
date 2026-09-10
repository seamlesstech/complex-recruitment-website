'use client';

import { useState } from 'react';

const sectors = ['Driving','Industrial','Construction','Other'];

export function RequestStaffPreview(){
  const [step,setStep]=useState(0);
  const [sector,setSector]=useState('Driving');
  const total=3;
  const next=()=>setStep((s)=>Math.min(total-1,s+1));
  const back=()=>setStep((s)=>Math.max(0,s-1));

  return <div className="requestJourney" aria-label="Request staff preview">
    <div className="requestJourneyHead">
      <div>
        <span>REQUEST STAFF</span>
        <small>No account required</small>
      </div>
      <strong>0{step+1} / 0{total}</strong>
    </div>
    <div className="requestProgress" aria-hidden="true">
      {[0,1,2].map((n)=><i key={n} className={n<=step?'active':''}/>) }
    </div>

    <div className="requestJourneyViewport">
      <section className={`requestStep ${step===0?'active':''}`} aria-hidden={step!==0}>
        <span className="requestStepLabel">STEP 01 · SECTOR</span>
        <h3>Which team do you need?</h3>
        <p>Start with the area closest to your requirement. You can add the detail next.</p>
        <div className="requestChoices">
          {sectors.map((item)=><button key={item} className={sector===item?'selected':''} onClick={()=>setSector(item)}>{item}<i>↗</i></button>)}
        </div>
      </section>

      <section className={`requestStep ${step===1?'active':''}`} aria-hidden={step!==1}>
        <span className="requestStepLabel">STEP 02 · REQUIREMENT</span>
        <h3>Tell us what the operation needs.</h3>
        <div className="requestFieldGrid">
          <label><span>Role required</span><input placeholder={sector==='Driving'?'e.g. HGV Class 1 Driver':'e.g. Role or skill'} /></label>
          <label><span>Headcount</span><input inputMode="numeric" placeholder="e.g. 12" /></label>
          <label><span>Location</span><input placeholder="Town / postcode" /></label>
          <label><span>Start date</span><input type="date" /></label>
        </div>
      </section>

      <section className={`requestStep ${step===2?'active':''}`} aria-hidden={step!==2}>
        <span className="requestStepLabel">STEP 03 · CONTACT</span>
        <h3>Who should we speak to?</h3>
        <div className="requestFieldGrid">
          <label><span>Your name</span><input placeholder="Name" /></label>
          <label><span>Company</span><input placeholder="Company name" /></label>
          <label><span>Work email</span><input type="email" placeholder="name@company.co.uk" /></label>
          <label><span>Telephone</span><input type="tel" placeholder="Phone number" /></label>
        </div>
      </section>
    </div>

    <div className="requestJourneyFoot">
      <span className="requestSummary">{step===0?`${sector} selected`:step===1?'Role · Headcount · Location · Start date':'Contact details · Privacy · Submit'}</span>
      <div className="requestJourneyActions">
        {step>0&&<button className="requestBack" onClick={back}>Back</button>}
        {step<2?<button className="requestNext" onClick={next}>Continue <i>→</i></button>:<a className="requestNext" href="/request-staff">Continue to request <i>↗</i></a>}
      </div>
    </div>
  </div>
}
