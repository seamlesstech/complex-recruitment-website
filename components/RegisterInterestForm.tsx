'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { ButtonLink } from './ui/ButtonLink';
import { CheckboxField } from './forms/CheckboxField';
import { ChoiceButton } from './forms/ChoiceButton';
import { FormAlert } from './forms/FormAlert';
import { InputField, SelectField, TextAreaField } from './forms/FormField';
import { FormStepProgress } from './forms/FormStepProgress';
import { HoneypotField, readHoneypot } from './forms/HoneypotField';
import { PublicTurnstile, type PublicTurnstileHandle } from './turnstile/PublicTurnstile';
import { isTurnstileConfigured } from '../lib/turnstile/config';
import { HONEYPOT_FIELD, TURNSTILE_FIELD, submitPublicForm } from '../lib/forms/public-form';

const sectors = ['Driving & Transport', 'Industrial & Warehouse', 'Construction & Engineering', 'Business & Operational Support', 'Open to anything'];
const formStepClass = 'px-14 pb-11 pt-[52px] [animation:fullFormIn_.5s_cubic-bezier(.16,1,.3,1)] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-10';
const fieldGridClass = 'mt-[34px] grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:grid-cols-1';

// Everything lives in state: step 1 is unmounted while step 2 shows, so reading
// the DOM/FormData at submit time would silently lose the work preferences.
type Values = {
  roles: string; preferredLocation: string; availability: string; workPreference: string;
  fullName: string; phone: string; email: string; postcode: string; message: string; consent: boolean;
};
const initialValues: Values = { roles: '', preferredLocation: '', availability: '', workPreference: '', fullName: '', phone: '', email: '', postcode: '', message: '', consent: false };
const STEP_ONE_FIELDS = new Set(['sector', 'roles', 'preferredLocation', 'availability', 'workPreference']);

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

export function RegisterInterestForm() {
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState('Driving & Transport');
  const [values, setValues] = useState<Values>(initialValues);
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<PublicTurnstileHandle>(null);
  const form = useRef<HTMLFormElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};
  const pending = status.state === 'pending';
  const turnstileReady = !isTurnstileConfigured || turnstileToken !== '';

  const bind = (key: Exclude<keyof Values, 'consent'>) => ({
    value: values[key],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setValues(current => ({ ...current, [key]: event.target.value })),
    error: fieldErrors[key],
  });

  async function submit() {
    if (pending || !turnstileReady) return;
    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/enquiries', {
      kind: 'candidate_interest',
      sector,
      ...values,
      [HONEYPOT_FIELD]: readHoneypot(form.current),
      [TURNSTILE_FIELD]: turnstileToken,
    });
    if (result.ok) {
      setStatus({ state: 'success' });
      return;
    }
    turnstileRef.current?.reset();
    const errors = result.fieldErrors ?? {};
    if (Object.keys(errors).some(key => STEP_ONE_FIELDS.has(key))) setStep(0);
    setStatus({ state: 'error', message: result.message, fieldErrors: errors });
  }

  if (status.state === 'success') {
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
    <form ref={form} aria-busy={pending} className="relative min-h-[650px] overflow-hidden border border-ink/10 bg-white shadow-[0_28px_70px_rgba(17,18,20,.07)]" onSubmit={(event) => { event.preventDefault(); if (step === 0) setStep(1); else void submit(); }}>
      <HoneypotField />
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
            <InputField id="interest-roles" label="Role(s) you’re interested in" required maxLength={300} placeholder="e.g. HGV Class 1, Warehouse Operative" {...bind('roles')} />
            <InputField id="interest-location" label="Preferred location" maxLength={120} placeholder="Town / postcode" {...bind('preferredLocation')} />
            <SelectField id="interest-availability" label="Availability" {...bind('availability')}><option value="" disabled>Select availability</option><option>Immediately</option><option>Within 1 week</option><option>Within 1 month</option><option>Just exploring</option></SelectField>
            <SelectField id="interest-work-preference" label="Work preference" {...bind('workPreference')}><option value="" disabled>Select type</option><option>Temporary / ad-hoc</option><option>Permanent</option><option>Either</option></SelectField>
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={formStepClass} aria-labelledby="interest-step-two">
          <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">STEP 02 · YOUR DETAILS</span>
          <h2 id="interest-step-two" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">Tell us how to reach you.</h2>
          <div className={fieldGridClass}>
            <InputField id="candidate-name" label="Full name" required maxLength={120} autoComplete="name" placeholder="Full name" {...bind('fullName')} />
            <InputField id="candidate-phone" label="Phone" required maxLength={40} autoComplete="tel" type="tel" placeholder="Phone number" {...bind('phone')} />
            <InputField id="candidate-email" label="Email" required maxLength={254} autoComplete="email" type="email" placeholder="name@email.com" {...bind('email')} />
            <InputField id="candidate-postcode" label="Postcode" maxLength={20} autoComplete="postal-code" placeholder="Home postcode" {...bind('postcode')} />
            {/* Register Interest creates a candidate-type Enquiry, not a Candidate, so there is
                no Candidate record to hold a private CV version yet. CVs are accepted on Job
                Applications, which do create a Candidate. */}
            <div className="col-span-2 flex flex-col gap-[9px] max-[760px]:col-span-1" aria-disabled="true">
              <span className="text-[9px] font-extrabold tracking-[.1em] text-[#626b70]">CV UPLOAD</span>
              <span className="cursor-not-allowed border-b border-dashed border-ink/25 py-[15px] text-sm text-muted">CVs aren’t collected on this quick registration. You can attach your CV when you apply for a specific job, or the team will ask for it if needed.</span>
            </div>
            <TextAreaField id="candidate-message" label="Anything else?" rows={4} maxLength={2000} wrapperClassName="col-span-2 max-[760px]:col-span-1" placeholder="Optional message" {...bind('message')} />
            <CheckboxField id="candidate-privacy" required className="col-span-2 max-[760px]:col-span-1" checked={values.consent} onChange={event => setValues(current => ({ ...current, consent: event.target.checked }))} error={fieldErrors.consent}>I agree that Complex Recruitment may use my details to contact me about relevant work opportunities.</CheckboxField>
          </div>
          <PublicTurnstile ref={turnstileRef} action="candidate_interest" onToken={setTurnstileToken} className="mt-6" />
        </section>
      )}

      {status.state === 'error' && <FormAlert message={status.message} className="mx-14 max-[760px]:mx-6" />}

      <div className="flex min-h-[88px] items-center justify-between border-t border-line bg-white px-[34px] py-[18px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-4">
        <span className="text-[10px] text-[#838d92] max-[760px]:mb-[14px] max-[760px]:block">{step === 0 ? sector : 'Candidate details · privacy'}</span>
        <div className="flex gap-[10px] max-[760px]:justify-end max-[480px]:flex-col">
          {step > 0 && <button type="button" disabled={pending} className="min-h-12 cursor-pointer border-0 bg-transparent px-[18px] font-extrabold text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[480px]:w-full" onClick={() => setStep(0)}>Back</button>}
          <button disabled={pending || (step === 1 && !turnstileReady)} className="min-h-12 cursor-pointer border-0 bg-brand-red px-[18px] font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 max-[480px]:w-full" type="submit">{step === 0 ? 'Continue' : pending ? 'Sending…' : 'Register my interest'} <i className="ml-[18px] not-italic">{step === 0 ? '→' : '↗'}</i></button>
        </div>
      </div>
    </form>
  );
}
