'use client';

import { useState } from 'react';
import { ButtonLink } from './ui/ButtonLink';
import { CheckboxField } from './forms/CheckboxField';
import { ChoiceButton } from './forms/ChoiceButton';
import { InputField, SelectField, TextAreaField } from './forms/FormField';
import { FormStepProgress } from './forms/FormStepProgress';

const sectors = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support', 'Open to anything'];
const formStepClass = 'px-14 pb-11 pt-[52px] [animation:fullFormIn_.5s_cubic-bezier(.16,1,.3,1)] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-10';
const fieldGridClass = 'mt-[34px] grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:grid-cols-1';

export function RegisterInterestForm() {
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState('Driving & Transport');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[540px] flex-col justify-center border border-line bg-white px-[60px] py-[70px] max-[760px]:px-6" role="status">
        <span className="text-[9px] font-extrabold tracking-[.18em] text-brand-red">INTEREST REGISTERED</span>
        <h2 className="my-[18px] mt-6 text-[clamp(48px,5vw,78px)] leading-[.94] tracking-[-.055em]">You’re on our radar.</h2>
        <p className="max-w-[600px] text-sm leading-[1.7] text-[#637078]">The Complex team now has your details and can contact you when a relevant opportunity comes up.</p>
        <ButtonLink href="/jobs" className="mt-[10px] self-start">Browse current jobs</ButtonLink>
      </div>
    );
  }

  return (
    <form className="relative min-h-[650px] overflow-hidden border border-ink/10 bg-white shadow-[0_28px_70px_rgba(17,18,20,.07)]" onSubmit={(event) => { event.preventDefault(); step === 0 ? setStep(1) : setSubmitted(true); }}>
      <div className="flex items-start justify-between border-b border-line bg-white px-[34px] pb-[22px] pt-[30px] max-[760px]:px-6 max-[760px]:pb-[18px] max-[760px]:pt-6">
        <div className="flex flex-col gap-[7px]"><span className="text-[9px] font-extrabold tracking-[.16em]">REGISTER YOUR INTEREST</span><small className="text-[10px] text-[#8a9398]">Quick candidate profile</small></div>
        <strong className="text-[9px] font-extrabold tracking-[.16em] text-brand-red">0{step + 1} / 02</strong>
      </div>
      <FormStepProgress currentStep={step} totalSteps={2} />

      {step === 0 && (
        <section className={formStepClass} aria-labelledby="interest-step-one">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 01 · WORK PREFERENCES</span>
          <h2 id="interest-step-one" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">What kind of work are you looking for?</h2>
          <p className="mb-[34px] max-w-[610px] text-[13px] leading-[1.65] text-muted">Give us enough context to understand where you may fit.</p>
          <div className="grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {sectors.map((item) => <ChoiceButton key={item} selected={sector === item} onSelect={() => setSector(item)} showArrow>{item}</ChoiceButton>)}
          </div>
          <div className={`${fieldGridClass} !mt-[30px]`}>
            <InputField id="interest-roles" label="Role(s) you’re interested in" required placeholder="e.g. HGV Class 1, Warehouse Operative" />
            <InputField id="interest-location" label="Preferred location" placeholder="Town / postcode" />
            <SelectField id="interest-availability" label="Availability" defaultValue=""><option value="" disabled>Select availability</option><option>Immediately</option><option>Within 1 week</option><option>Within 1 month</option><option>Just exploring</option></SelectField>
            <SelectField id="interest-work-preference" label="Work preference" defaultValue=""><option value="" disabled>Select type</option><option>Temporary / ad-hoc</option><option>Permanent</option><option>Either</option></SelectField>
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={formStepClass} aria-labelledby="interest-step-two">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 02 · YOUR DETAILS</span>
          <h2 id="interest-step-two" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">Tell us how to reach you.</h2>
          <div className={fieldGridClass}>
            <InputField id="candidate-name" label="Full name" required placeholder="Full name" />
            <InputField id="candidate-phone" label="Phone" required type="tel" placeholder="Phone number" />
            <InputField id="candidate-email" label="Email" required type="email" placeholder="name@email.com" />
            <InputField id="candidate-postcode" label="Postcode" placeholder="Home postcode" />
            <InputField id="candidate-cv" label="Upload CV" type="file" accept=".pdf,.doc,.docx" wrapperClassName="col-span-2 max-[760px]:col-span-1" className="py-[15px] file:mr-4 file:border-0 file:bg-ink file:px-3 file:py-2 file:text-xs file:font-bold file:text-white" />
            <TextAreaField id="candidate-message" label="Anything else?" rows={4} wrapperClassName="col-span-2 max-[760px]:col-span-1" placeholder="Optional message" />
            <CheckboxField id="candidate-privacy" required className="col-span-2 max-[760px]:col-span-1">I agree that Complex Recruitment may use my details to contact me about relevant work opportunities.</CheckboxField>
          </div>
        </section>
      )}

      <div className="flex min-h-[88px] items-center justify-between border-t border-line bg-white px-[34px] py-[18px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-4">
        <span className="text-[10px] text-[#838d92] max-[760px]:mb-[14px] max-[760px]:block">{step === 0 ? sector : 'Candidate details · CV · privacy'}</span>
        <div className="flex gap-[10px] max-[760px]:justify-end max-[480px]:flex-col">
          {step > 0 && <button type="button" className="min-h-12 cursor-pointer border-0 bg-transparent px-[18px] font-extrabold text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[480px]:w-full" onClick={() => setStep(0)}>Back</button>}
          <button className="min-h-12 cursor-pointer border-0 bg-brand-red px-[18px] font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 max-[480px]:w-full" type="submit">{step === 0 ? 'Continue' : 'Register my interest'} <i className="ml-[18px] not-italic">{step === 0 ? '→' : '↗'}</i></button>
        </div>
      </div>
    </form>
  );
}
