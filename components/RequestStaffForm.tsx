'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { ButtonLink } from './ui/ButtonLink';
import { CheckboxField } from './forms/CheckboxField';
import { ChoiceButton } from './forms/ChoiceButton';
import { FormAlert } from './forms/FormAlert';
import { FormStepProgress } from './forms/FormStepProgress';
import { InputField, TextAreaField } from './forms/FormField';
import { HoneypotField, readHoneypot } from './forms/HoneypotField';
import { HONEYPOT_FIELD, submitPublicForm } from '../lib/forms/public-form';

const sectors = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support'];
const requirements = ['Temporary', 'Ad-hoc', 'Temp-to-perm', 'Permanent', 'High-volume', 'Not sure'];

const formShellClass = 'relative min-h-[650px] overflow-hidden border border-ink/10 bg-surface shadow-[0_28px_70px_rgba(17,18,20,.07)]';
const formStepClass = 'px-8 pb-8 pt-6 [animation:fullFormIn_.5s_cubic-bezier(.16,1,.3,1)] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-5';
const fieldGridClass = 'mt-[34px] grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:grid-cols-1';

// The whole request is held in state and submitted as one object. Steps are
// hidden with <fieldset disabled>, and disabled controls are excluded from
// FormData — so reading the form at submit time would drop steps 1–2.
type Values = {
  role: string; headcount: string; location: string; startDate: string; shift: string; duration: string; notes: string;
  fullName: string; company: string; email: string; phone: string; consent: boolean;
};
const initialValues: Values = { role: '', headcount: '', location: '', startDate: '', shift: '', duration: '', notes: '', fullName: '', company: '', email: '', phone: '', consent: false };
const FIELD_STEP: Record<string, number> = { sector: 0, role: 0, headcount: 0, assignmentType: 1, location: 1, startDate: 1, shift: 1, duration: 1, notes: 1 };

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

export function RequestStaffForm() {
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState('Driving & Transport');
  const [type, setType] = useState('Temporary');
  const [values, setValues] = useState<Values>(initialValues);
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const form = useRef<HTMLFormElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};
  const pending = status.state === 'pending';

  const bind = (key: Exclude<keyof Values, 'consent'>) => ({
    value: values[key],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues(current => ({ ...current, [key]: event.target.value })),
    error: fieldErrors[key],
  });

  async function submit() {
    if (pending) return;
    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/enquiries', {
      kind: 'staffing_request',
      sector,
      assignmentType: type,
      ...values,
      [HONEYPOT_FIELD]: readHoneypot(form.current),
    });
    if (result.ok) {
      setStatus({ state: 'success' });
      return;
    }
    const errors = result.fieldErrors ?? {};
    const earliest = Math.min(...Object.keys(errors).map(key => FIELD_STEP[key] ?? 2));
    if (Number.isFinite(earliest) && earliest < 2) setStep(earliest);
    setStatus({ state: 'error', message: result.message, fieldErrors: errors });
  }

  if (status.state === 'success') {
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
    <form ref={form} aria-busy={pending} className={formShellClass} onSubmit={(event) => { event.preventDefault(); if (step < 2) setStep(step + 1); else void submit(); }}>
      <HoneypotField />
      <div className="flex items-start justify-between border-b border-line bg-white px-[34px] pb-[22px] pt-[30px] max-[760px]:px-6 max-[760px]:pb-[18px] max-[760px]:pt-6">
        <div className="flex flex-col gap-[7px]">
          <span className="text-[9px] font-extrabold tracking-[.16em]">REQUEST STAFF</span>
          <small className="text-[10px] text-[#8a9398]">No account required</small>
        </div>
        <strong className="text-[9px] font-extrabold tracking-[.16em] text-brand-red">0{step + 1} / 03</strong>
      </div>
      <ol aria-label="Request progress" className="m-0 grid list-none grid-cols-3 gap-2 bg-white px-[34px] py-3 max-[760px]:px-6">
        {['Requirement', 'Assignment', 'Contact'].map((label, index) => (
          <li key={label} aria-current={step === index ? 'step' : undefined} className={`text-[11px] leading-[1.6] ${step === index ? 'font-bold text-ink' : 'text-muted'}`}>
            <span className={`mr-1 block min-[480px]:inline ${step === index ? 'text-brand-red' : ''}`}>0{index + 1}</span>{label}
          </li>
        ))}
      </ol>
      <FormStepProgress currentStep={step} totalSteps={3} />


      <fieldset hidden={step !== 0} disabled={step !== 0} className="m-0 min-w-0 border-0 p-0">
        <section className={formStepClass} aria-labelledby="request-step-one">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 01 · REQUIREMENT</span>
          <h2 id="request-step-one" className="mb-4 mt-3 max-w-[720px] text-[clamp(28px,2.5vw,38px)] leading-[.96] tracking-[-.045em]">What do you need?</h2>
          <p className="mb-5 max-w-[610px] text-[13px] leading-[1.65] text-muted">Start with the sector, roles and number of people.</p>
          <div role="group" aria-label="Sector" className="grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {sectors.map((item) => <ChoiceButton key={item} selected={sector === item} onSelect={() => setSector(item)} showArrow>{item}</ChoiceButton>)}
          </div>

          <div className={fieldGridClass}>
            <InputField id="staff-role" label="Role required" required maxLength={160} placeholder={sector === 'Driving & Transport' ? 'e.g. HGV Class 1 Driver' : 'Role or skill'} {...bind('role')} />
            <InputField id="staff-count" label="How many people?" required inputMode="numeric" pattern="[0-9]*" maxLength={5} placeholder="e.g. 12" {...bind('headcount')} />
          </div>
        </section>
      </fieldset>

      <fieldset hidden={step !== 1} disabled={step !== 1} className="m-0 min-w-0 border-0 p-0">
        <section className={formStepClass} aria-labelledby="request-step-two">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 02 · ASSIGNMENT</span>
          <h2 id="request-step-two" className="mb-4 mt-3 max-w-[720px] text-[clamp(28px,2.5vw,38px)] leading-[.96] tracking-[-.045em]">Tell us what the operation needs.</h2>
          <div role="group" aria-label="Requirement type" className="mt-[18px] flex flex-wrap gap-2 max-[760px]:[&>button]:w-full">
            {requirements.map((item) => <ChoiceButton key={item} selected={type === item} onSelect={() => setType(item)}>{item}</ChoiceButton>)}
          </div>
          <div className={fieldGridClass}>
            <InputField id="staff-location" label="Location / postcode" required maxLength={160} placeholder="e.g. Enfield, N18" {...bind('location')} />
            <InputField id="staff-start-date" label="Required start date" type="date" {...bind('startDate')} />
            <InputField id="staff-shift" label="Shift / working pattern" maxLength={200} placeholder="e.g. Nights, 18:00 start" {...bind('shift')} />
            <InputField id="staff-duration" label="Duration" maxLength={120} placeholder="e.g. 4 weeks / ongoing" {...bind('duration')} />
            <TextAreaField id="staff-notes" label="Anything else we should know?" rows={5} maxLength={3000} wrapperClassName="col-span-2 max-[760px]:col-span-1" placeholder="Licences, qualifications, site requirements, shift details or anything else that will help us understand the brief." {...bind('notes')} />
          </div>
        </section>
      </fieldset>

      <fieldset hidden={step !== 2} disabled={step !== 2} className="m-0 min-w-0 border-0 p-0">
        <section className={formStepClass} aria-labelledby="request-step-three">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 03 · CONTACT</span>
          <h2 id="request-step-three" className="mb-4 mt-3 max-w-[720px] text-[clamp(28px,2.5vw,38px)] leading-[.96] tracking-[-.045em]">Who should the Complex team speak to?</h2>
          <div className={fieldGridClass}>
            <InputField id="staff-name" label="Your name" required maxLength={120} autoComplete="name" placeholder="Full name" {...bind('fullName')} />
            <InputField id="staff-company" label="Company" required maxLength={160} autoComplete="organization" placeholder="Company name" {...bind('company')} />
            <InputField id="staff-email" label="Work email" required maxLength={254} autoComplete="email" type="email" placeholder="name@company.co.uk" {...bind('email')} />
            <InputField id="staff-phone" label="Telephone" required maxLength={40} autoComplete="tel" type="tel" placeholder="Phone number" {...bind('phone')} />
            <CheckboxField id="staff-privacy" required className="col-span-2 max-[760px]:col-span-1" checked={values.consent} onChange={event => setValues(current => ({ ...current, consent: event.target.checked }))} error={fieldErrors.consent}>I confirm that Complex Recruitment may use these details to respond to this staffing request.</CheckboxField>
          </div>
          <div className="mt-8 border-l-[3px] border-brand-red bg-white px-5 py-[18px]">
            <span className="text-[8px] font-extrabold tracking-[.16em] text-[#7a8388]">YOUR REQUEST</span>
            <strong className="mt-2 block text-xl">{sector}</strong>
            <p className="mb-0 mt-[5px] text-xs text-[#737d82]">{type} requirement{values.role.trim() && ` · ${values.headcount.trim() ? `${values.headcount.trim()} × ` : ''}${values.role.trim()}`}</p>
          </div>
        </section>
      </fieldset>

      {status.state === 'error' && <FormAlert message={status.message} className="mx-8 max-[760px]:mx-6" />}

      <div className="flex min-h-[88px] items-center justify-between border-t border-line bg-white px-[34px] py-[18px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-4">
        <span className="text-[10px] text-[#838d92] max-[760px]:mb-[14px] max-[760px]:block">{step === 0 ? `${sector} · Requirement` : step === 1 ? 'Operational details' : 'Contact details · ready to send'}</span>
        <div className="flex gap-[10px] max-[760px]:justify-end max-[480px]:flex-col">
          {step > 0 && <button type="button" disabled={pending} className="min-h-12 cursor-pointer border-0 bg-transparent px-[18px] font-extrabold text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[480px]:w-full" onClick={() => setStep(step - 1)}>Back</button>}
          <button disabled={pending} className="min-h-12 cursor-pointer border-0 bg-brand-red px-[18px] font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 max-[480px]:w-full" type="submit">{step < 2 ? 'Continue' : pending ? 'Sending…' : 'Send staffing request'} <i className="ml-[18px] not-italic">{step < 2 ? '→' : '↗'}</i></button>
        </div>
      </div>
    </form>
  );
}
