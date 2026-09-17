'use client';

import { useState } from 'react';

const sectors = ['Driving & Transport','Industrial & Warehouse','Construction & Engineering','Business & Operational Support'];

export function RequestStaffPreview(){
  const [step,setStep]=useState(0);
  const [sector,setSector]=useState('Driving & Transport');
  const total=3;
  const next=()=>setStep((s)=>Math.min(total-1,s+1));
  const back=()=>setStep((s)=>Math.max(0,s-1));

  return <div className="bg-white text-ink shadow-[0_28px_80px_rgba(0,0,0,.2)]" aria-label="Request staff preview">
    <div className="flex min-h-[92px] items-center justify-between border-b border-line px-8 max-[520px]:px-5">
      <div>
        <span className="block text-[9px] font-extrabold tracking-[.16em]">REQUEST STAFF</span>
        <small className="mt-1 block text-[10px] text-muted">No account required</small>
      </div>
      <strong className="text-sm text-brand-red">0{step+1} / 0{total}</strong>
    </div>
    <div className="grid h-[3px] grid-cols-3 gap-[2px] bg-line" aria-hidden="true">
      {[0,1,2].map((n)=><i key={n} className={`transition-colors ${n<=step?'bg-brand-red':'bg-transparent'}`}/>) }
    </div>

    <div className="min-h-[430px] px-8 py-9 max-[520px]:min-h-[500px] max-[520px]:px-5">
      <section className={step===0?'block':'hidden'} aria-hidden={step!==0}>
        <span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">STEP 01 · SECTOR</span>
        <h3 className="mb-3 mt-5 text-[30px] tracking-[-.035em]">Which team do you need?</h3>
        <p className="max-w-[560px] text-xs leading-[1.65] text-muted">Start with the area closest to your requirement. You can add the detail next.</p>
        <div className="mt-7 grid grid-cols-2 border-l border-t border-line max-[520px]:grid-cols-1">
          {sectors.map((item)=><button type="button" key={item} aria-pressed={sector===item} className={`group flex min-h-[64px] cursor-pointer items-center justify-between border-0 border-b border-r border-line px-5 text-left text-sm font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red ${sector===item?'bg-ink text-white':'bg-white hover:bg-surface'}`} onClick={()=>setSector(item)}>{item}<i className="not-italic text-brand-red">↗</i></button>)}
        </div>
      </section>

      <section className={step===1?'block':'hidden'} aria-hidden={step!==1}>
        <span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">STEP 02 · REQUIREMENT</span>
        <h3 className="mb-7 mt-5 text-[30px] tracking-[-.035em]">Tell us what the operation needs.</h3>
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 max-[520px]:grid-cols-1 [&_label>span]:mb-2 [&_label>span]:block [&_label>span]:text-[9px] [&_label>span]:font-bold [&_input]:h-12 [&_input]:w-full [&_input]:border [&_input]:border-line [&_input]:px-3 [&_input]:outline-none focus-within:[&_input]:border-brand-red">
          <label><span>Role required</span><input placeholder={sector==='Driving & Transport'?'e.g. HGV Class 1 Driver':'e.g. Role or skill'} /></label>
          <label><span>Headcount</span><input inputMode="numeric" placeholder="e.g. 12" /></label>
          <label><span>Location</span><input placeholder="Town / postcode" /></label>
          <label><span>Start date</span><input type="date" /></label>
        </div>
      </section>

      <section className={step===2?'block':'hidden'} aria-hidden={step!==2}>
        <span className="text-[8px] font-extrabold tracking-[.16em] text-brand-red">STEP 03 · CONTACT</span>
        <h3 className="mb-7 mt-5 text-[30px] tracking-[-.035em]">Who should we speak to?</h3>
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 max-[520px]:grid-cols-1 [&_label>span]:mb-2 [&_label>span]:block [&_label>span]:text-[9px] [&_label>span]:font-bold [&_input]:h-12 [&_input]:w-full [&_input]:border [&_input]:border-line [&_input]:px-3 [&_input]:outline-none focus-within:[&_input]:border-brand-red">
          <label><span>Your name</span><input placeholder="Name" /></label>
          <label><span>Company</span><input placeholder="Company name" /></label>
          <label><span>Work email</span><input type="email" placeholder="name@company.co.uk" /></label>
          <label><span>Telephone</span><input type="tel" placeholder="Phone number" /></label>
        </div>
      </section>
    </div>

    <div className="flex min-h-[88px] items-center justify-between gap-4 border-t border-line px-8 max-[520px]:items-start max-[520px]:flex-col max-[520px]:px-5 max-[520px]:py-5">
      <span className="text-[10px] text-muted">{step===0?`${sector} selected`:step===1?'Role · Headcount · Location · Start date':'Contact details · Privacy · Submit'}</span>
      <div className="flex items-center gap-3">
        {step>0&&<button type="button" className="min-h-11 cursor-pointer border-0 bg-transparent px-4 text-xs font-bold underline" onClick={back}>Back</button>}
        {step<2?<button type="button" className="inline-flex min-h-12 cursor-pointer items-center gap-7 border-0 bg-brand-red px-5 text-xs font-bold text-white transition-colors hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-red" onClick={next}>Continue <i className="not-italic">→</i></button>:<a className="inline-flex min-h-12 items-center gap-7 bg-brand-red px-5 text-xs font-bold text-white transition-colors hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-red" href="/request-staff">Continue to request <i className="not-italic">↗</i></a>}
      </div>
    </div>
  </div>
}
