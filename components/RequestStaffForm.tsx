'use client';

import { useState } from 'react';
import { ButtonLink } from './ui/ButtonLink';
import { CheckboxField } from './forms/CheckboxField';
import { ChoiceButton } from './forms/ChoiceButton';
import { FormStepProgress } from './forms/FormStepProgress';
import { InputField, TextAreaField } from './forms/FormField';

const sectors = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support'];
const requirements = ['Temporary', 'Ad-hoc', 'Temp-to-perm', 'Permanent', 'High-volume', 'Not sure'];

const formShellClass = 'relative min-h-[650px] overflow-hidden border border-ink/10 bg-surface shadow-[0_28px_70px_rgba(17,18,20,.07)]';
const formStepClass = 'px-14 pb-11 pt-[52px] [animation:fullFormIn_.5s_cubic-bezier(.16,1,.3,1)] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-10';
const fieldGridClass = 'mt-[34px] grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:grid-cols-1';

export function RequestStaffForm() {
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState('Driving & Transport');
  const [type, setType] = useState('Temporary');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[540px] flex-col justify-center border border-line bg-surface px-[60px] py-[70px] max-[760px]:px-6" role="status">
        <span className="text-[9px] font-extrabold tracking-[.18em] text-brand-red">REQUEST RECEIVED</span>
        <h2 className="my-[18px] mt-6 text-[clamp(48px,5vw,78px)] leading-[.94] tracking-[-.055em]">Thanks — we’ve got it.</h2>
        <p className="max-w-[600px] text-sm leading-[1.7] text-[#637078]">A member of the Complex team can now review the requirement and follow up using the details supplied.</p>
        <div className="my-[30px] flex flex-col gap-[7px] border-t border-line pt-[18px]">
          <strong className="text-[9px] tracking-[.13em]">Next step</strong>
          <span className="text-[13px] text-[#657077]">Complex reviews the requirement and makes contact.</span>
        </div>
        <ButtonLink href="/" variant="dark" className="self-start">Back to homepage</ButtonLink>
      </div>
    );
  }

  return (
    <form className={formShellClass} onSubmit={(event) => { event.preventDefault(); step < 2 ? setStep(step + 1) : setSubmitted(true); }}>
      <div className="flex items-start justify-between border-b border-line bg-white px-[34px] pb-[22px] pt-[30px] max-[760px]:px-6 max-[760px]:pb-[18px] max-[760px]:pt-6">
        <div className="flex flex-col gap-[7px]">
          <span className="text-[9px] font-extrabold tracking-[.16em]">REQUEST STAFF</span>
          <small className="text-[10px] text-[#8a9398]">No account required</small>
        </div>
        <strong className="text-[9px] font-extrabold tracking-[.16em] text-brand-red">0{step + 1} / 03</strong>
      </div>
      <FormStepProgress currentStep={step} totalSteps={3} />

      {step === 0 && (
        <section className={formStepClass} aria-labelledby="request-step-one">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 01 · REQUIREMENT</span>
          <h2 id="request-step-one" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">What kind of team do you need?</h2>
          <p className="mb-[34px] max-w-[610px] text-[13px] leading-[1.65] text-muted">Choose the closest sector and requirement type. We’ll collect the operational detail next.</p>
          <div className="grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {sectors.map((item) => <ChoiceButton key={item} selected={sector === item} onSelect={() => setSector(item)} showArrow>{item}</ChoiceButton>)}
          </div>
          <div className="mt-[18px] flex flex-wrap gap-2">
            {requirements.map((item) => <ChoiceButton key={item} selected={type === item} onSelect={() => setType(item)}>{item}</ChoiceButton>)}
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={formStepClass} aria-labelledby="request-step-two">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 02 · ASSIGNMENT</span>
          <h2 id="request-step-two" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">Tell us what the operation needs.</h2>
          <div className={fieldGridClass}>
            <InputField id="staff-role" label="Role required" required placeholder={sector === 'Driving & Transport' ? 'e.g. HGV Class 1 Driver' : 'Role or skill'} />
            <InputField id="staff-count" label="How many people?" required inputMode="numeric" placeholder="e.g. 12" />
            <InputField id="staff-location" label="Location / postcode" required placeholder="e.g. Enfield, N18" />
            <InputField id="staff-start-date" label="Required start date" type="date" />
            <InputField id="staff-shift" label="Shift / working pattern" placeholder="e.g. Nights, 18:00 start" />
            <InputField id="staff-duration" label="Duration" placeholder="e.g. 4 weeks / ongoing" />
            <TextAreaField id="staff-notes" label="Anything else we should know?" rows={5} wrapperClassName="col-span-2 max-[760px]:col-span-1" placeholder="Licences, qualifications, site requirements, shift details or anything else that will help us understand the brief." />
          </div>
        </section>
      )}

      {step === 2 && (
        <section className={formStepClass} aria-labelledby="request-step-three">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 03 · CONTACT</span>
          <h2 id="request-step-three" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">Who should the Complex team speak to?</h2>
          <div className={fieldGridClass}>
            <InputField id="staff-name" label="Your name" required placeholder="Full name" />
            <InputField id="staff-company" label="Company" required placeholder="Company name" />
            <InputField id="staff-email" label="Work email" required type="email" placeholder="name@company.co.uk" />
            <InputField id="staff-phone" label="Telephone" required type="tel" placeholder="Phone number" />
            <CheckboxField id="staff-privacy" required className="col-span-2 max-[760px]:col-span-1">I confirm that Complex Recruitment may use these details to respond to this staffing request.</CheckboxField>
          </div>
          <div className="mt-8 border-l-[3px] border-brand-red bg-white px-5 py-[18px]">
            <span className="text-[8px] font-extrabold tracking-[.16em] text-[#7a8388]">YOUR REQUEST</span>
            <strong className="mt-2 block text-xl">{sector}</strong>
            <p className="mb-0 mt-[5px] text-xs text-[#737d82]">{type} requirement</p>
          </div>
        </section>
      )}

      <div className="flex min-h-[88px] items-center justify-between border-t border-line bg-white px-[34px] py-[18px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-4">
        <span className="text-[10px] text-[#838d92] max-[760px]:mb-[14px] max-[760px]:block">{step === 0 ? `${sector} · ${type}` : step === 1 ? 'Operational details' : 'Contact details · ready to send'}</span>
        <div className="flex gap-[10px] max-[760px]:justify-end max-[480px]:flex-col">
          {step > 0 && <button type="button" className="min-h-12 cursor-pointer border-0 bg-transparent px-[18px] font-extrabold text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[480px]:w-full" onClick={() => setStep(step - 1)}>Back</button>}
          <button className="min-h-12 cursor-pointer border-0 bg-brand-red px-[18px] font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 max-[480px]:w-full" type="submit">{step < 2 ? 'Continue' : 'Send staffing request'} <i className="ml-[18px] not-italic">{step < 2 ? '→' : '↗'}</i></button>
        </div>
      </div>
    </form>
  );
}
