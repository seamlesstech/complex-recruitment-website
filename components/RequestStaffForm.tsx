'use client';

import { useState } from 'react';

const sectors = ['Driving','Industrial','Construction','Other'];
const requirements = ['Temporary','Ad-hoc','Temp-to-perm','Permanent','Not sure'];

export function RequestStaffForm(){
  const [step,setStep]=useState(0);
  const [sector,setSector]=useState('Driving');
  const [type,setType]=useState('Temporary');
  const [submitted,setSubmitted]=useState(false);

  if(submitted){
    return <div className="fullFormSuccess" role="status">
      <span>REQUEST RECEIVED</span>
      <h2>Thanks — we’ve got it.</h2>
      <p>A member of the Complex team can now review the requirement and follow up using the details supplied.</p>
      <div className="successMeta"><strong>Next step</strong><span>Complex reviews the requirement and makes contact.</span></div>
      <a className="button buttonDark" href="/">Back to homepage <span>↗</span></a>
    </div>
  }

  return <form className="fullRequestForm" onSubmit={(e)=>{e.preventDefault(); if(step<2){setStep(step+1)}else{setSubmitted(true)}}}>
    <div className="fullFormTop">
      <div><span>REQUEST STAFF</span><small>No account required</small></div>
      <strong>0{step+1} / 03</strong>
    </div>
    <div className="fullFormProgress" aria-hidden="true">{[0,1,2].map(n=><i key={n} className={n<=step?'active':''}/>)}</div>

    {step===0&&<section className="fullFormStep">
      <span className="fullStepLabel">STEP 01 · REQUIREMENT</span>
      <h2>What kind of team do you need?</h2>
      <p>Choose the closest sector and requirement type. We’ll collect the operational detail next.</p>
      <div className="fullChoiceGrid">
        {sectors.map(item=><button type="button" key={item} className={sector===item?'selected':''} onClick={()=>setSector(item)}><span>{item}</span><i>↗</i></button>)}
      </div>
      <div className="fullTypeRow">
        {requirements.map(item=><button type="button" key={item} className={type===item?'selected':''} onClick={()=>setType(item)}>{item}</button>)}
      </div>
    </section>}

    {step===1&&<section className="fullFormStep">
      <span className="fullStepLabel">STEP 02 · ASSIGNMENT</span>
      <h2>Tell us what the operation needs.</h2>
      <div className="fullFieldGrid">
        <label><span>Role required</span><input required placeholder={sector==='Driving'?'e.g. HGV Class 1 Driver':'Role or skill'} /></label>
        <label><span>How many people?</span><input required inputMode="numeric" placeholder="e.g. 12" /></label>
        <label><span>Location / postcode</span><input required placeholder="e.g. Enfield, N18" /></label>
        <label><span>Required start date</span><input type="date" /></label>
        <label><span>Shift / working pattern</span><input placeholder="e.g. Nights, 18:00 start" /></label>
        <label><span>Duration</span><input placeholder="e.g. 4 weeks / ongoing" /></label>
        <label className="spanTwo"><span>Anything else we should know?</span><textarea rows={5} placeholder="Licences, qualifications, site requirements, shift details or anything else that will help us understand the brief." /></label>
      </div>
    </section>}

    {step===2&&<section className="fullFormStep">
      <span className="fullStepLabel">STEP 03 · CONTACT</span>
      <h2>Who should the Complex team speak to?</h2>
      <div className="fullFieldGrid">
        <label><span>Your name</span><input required placeholder="Full name" /></label>
        <label><span>Company</span><input required placeholder="Company name" /></label>
        <label><span>Work email</span><input required type="email" placeholder="name@company.co.uk" /></label>
        <label><span>Telephone</span><input required type="tel" placeholder="Phone number" /></label>
        <label className="spanTwo checkboxLabel"><input type="checkbox" required /><span>I confirm that Complex Recruitment may use these details to respond to this staffing request.</span></label>
      </div>
      <div className="formSummaryCard"><span>YOUR REQUEST</span><strong>{sector}</strong><p>{type} requirement</p></div>
    </section>}

    <div className="fullFormBottom">
      <span>{step===0?`${sector} · ${type}`:step===1?'Operational details':'Contact details · ready to send'}</span>
      <div>{step>0&&<button type="button" className="ghostAction" onClick={()=>setStep(step-1)}>Back</button>}<button className="primaryAction" type="submit">{step<2?'Continue':'Send staffing request'} <i>{step<2?'→':'↗'}</i></button></div>
    </div>
  </form>
}
