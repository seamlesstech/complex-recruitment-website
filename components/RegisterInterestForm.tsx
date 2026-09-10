'use client';

import { useState } from 'react';

const sectors=['Driving','Industrial','Construction','Open to anything'];

export function RegisterInterestForm(){
  const [step,setStep]=useState(0);
  const [sector,setSector]=useState('Driving');
  const [submitted,setSubmitted]=useState(false);

  if(submitted){
    return <div className="fullFormSuccess candidateSuccess" role="status"><span>INTEREST REGISTERED</span><h2>You’re on our radar.</h2><p>The Complex team now has your details and can contact you when a relevant opportunity comes up.</p><a className="button buttonAccent" href="/jobs">Browse current jobs <span>↗</span></a></div>
  }

  return <form className="fullRequestForm candidateInterestForm" onSubmit={(e)=>{e.preventDefault(); if(step===0){setStep(1)}else{setSubmitted(true)}}}>
    <div className="fullFormTop"><div><span>REGISTER YOUR INTEREST</span><small>Quick candidate profile</small></div><strong>0{step+1} / 02</strong></div>
    <div className="fullFormProgress twoStep" aria-hidden="true">{[0,1].map(n=><i key={n} className={n<=step?'active':''}/>)}</div>

    {step===0&&<section className="fullFormStep"><span className="fullStepLabel">STEP 01 · WORK PREFERENCES</span><h2>What kind of work are you looking for?</h2><p>Give us enough context to understand where you may fit.</p><div className="fullChoiceGrid">{sectors.map(item=><button type="button" key={item} className={sector===item?'selected':''} onClick={()=>setSector(item)}><span>{item}</span><i>↗</i></button>)}</div><div className="fullFieldGrid interestFields"><label><span>Role(s) you’re interested in</span><input required placeholder="e.g. HGV Class 1, Warehouse Operative" /></label><label><span>Preferred location</span><input placeholder="Town / postcode" /></label><label><span>Availability</span><select defaultValue=""><option value="" disabled>Select availability</option><option>Immediately</option><option>Within 1 week</option><option>Within 1 month</option><option>Just exploring</option></select></label><label><span>Work preference</span><select defaultValue=""><option value="" disabled>Select type</option><option>Temporary / ad-hoc</option><option>Permanent</option><option>Either</option></select></label></div></section>}

    {step===1&&<section className="fullFormStep"><span className="fullStepLabel">STEP 02 · YOUR DETAILS</span><h2>Tell us how to reach you.</h2><div className="fullFieldGrid"><label><span>Full name</span><input required placeholder="Full name" /></label><label><span>Phone</span><input required type="tel" placeholder="Phone number" /></label><label><span>Email</span><input required type="email" placeholder="name@email.com" /></label><label><span>Postcode</span><input placeholder="Home postcode" /></label><label className="spanTwo"><span>Upload CV</span><input className="fileField" type="file" accept=".pdf,.doc,.docx" /></label><label className="spanTwo"><span>Anything else?</span><textarea rows={4} placeholder="Optional message" /></label><label className="spanTwo checkboxLabel"><input type="checkbox" required /><span>I agree that Complex Recruitment may use my details to contact me about relevant work opportunities.</span></label></div></section>}

    <div className="fullFormBottom"><span>{step===0?sector:'Candidate details · CV · privacy'}</span><div>{step>0&&<button type="button" className="ghostAction" onClick={()=>setStep(0)}>Back</button>}<button className="primaryAction" type="submit">{step===0?'Continue':'Register my interest'} <i>{step===0?'→':'↗'}</i></button></div></div>
  </form>
}
