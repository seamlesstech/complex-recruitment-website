'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { CheckboxField } from '../forms/CheckboxField';
import { ChoiceButton } from '../forms/ChoiceButton';
import { FormAlert } from '../forms/FormAlert';
import { InputField, SelectField, TextAreaField } from '../forms/FormField';
import { HoneypotField, readHoneypot } from '../forms/HoneypotField';
import { PublicTurnstile, type PublicTurnstileHandle } from '../turnstile/PublicTurnstile';
import { isTurnstileConfigured } from '../../lib/turnstile/config';
import { HONEYPOT_FIELD, TURNSTILE_FIELD, submitPublicForm } from '../../lib/forms/public-form';

// Posts to the shared /api/enquiries intake as kind `cpc_training`. The server
// stores it as an Enquiry with a "CPC Training enquiry" subject.
const ENQUIRER_TYPES = ['Driver', 'Employer'] as const;
type EnquirerType = (typeof ENQUIRER_TYPES)[number];
const fieldGridClass = 'mt-[34px] grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:grid-cols-1';
const fullWidth = 'col-span-2 max-[760px]:col-span-1';

type Values = {
  company: string; drivers: string; courseFormat: string; preferredTiming: string;
  fullName: string; phone: string; email: string; message: string; consent: boolean;
};
const initialValues: Values = { company: '', drivers: '', courseFormat: '', preferredTiming: '', fullName: '', phone: '', email: '', message: '', consent: false };

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

export function CpcEnquiryForm() {
  const [enquirerType, setEnquirerType] = useState<EnquirerType | ''>('');
  const [values, setValues] = useState<Values>(initialValues);
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<PublicTurnstileHandle>(null);
  const form = useRef<HTMLFormElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};
  const pending = status.state === 'pending';
  const turnstileReady = !isTurnstileConfigured || turnstileToken !== '';
  const isEmployer = enquirerType === 'Employer';

  const bind = (key: Exclude<keyof Values, 'consent'>) => ({
    value: values[key],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setValues(current => ({ ...current, [key]: event.target.value })),
    error: fieldErrors[key],
  });

  async function submit() {
    if (pending || !turnstileReady) return;
    if (enquirerType === '') {
      setStatus({ state: 'error', message: 'Please check the highlighted fields.', fieldErrors: { enquirerType: 'Select whether you are a driver or an employer.' } });
      return;
    }
    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/enquiries', {
      kind: 'cpc_training',
      enquirerType,
      ...values,
      // Company and driver numbers are only asked of employers.
      company: isEmployer ? values.company : '',
      drivers: isEmployer ? values.drivers : '',
      [HONEYPOT_FIELD]: readHoneypot(form.current),
      [TURNSTILE_FIELD]: turnstileToken,
    });
    if (result.ok) {
      setStatus({ state: 'success' });
      return;
    }
    turnstileRef.current?.reset();
    setStatus({ state: 'error', message: result.message, fieldErrors: result.fieldErrors ?? {} });
  }

  if (status.state === 'success') {
    return (
      <div className="flex min-h-[540px] flex-col justify-center border border-line bg-white px-[60px] py-[70px] max-[760px]:px-6" role="status">
        <span className="text-[9px] font-extrabold tracking-[.18em] text-brand-red">CPC TRAINING ENQUIRY SENT</span>
        <h2 className="my-[18px] mt-6 text-[clamp(48px,5vw,78px)] leading-[.94] tracking-[-.055em]">Thank you.</h2>
        <p className="max-w-[600px] text-sm leading-[1.7] text-[#637078]">The Complex team now has your CPC Training enquiry and will be in touch to discuss course availability, locations and timing.</p>
        <ButtonLink href="/training/cpc" className="mt-[10px] self-start">Back to CPC Training</ButtonLink>
      </div>
    );
  }

  return (
    <form ref={form} aria-busy={pending} className="relative overflow-hidden border border-ink/10 bg-white shadow-[0_28px_70px_rgba(17,18,20,.07)]" onSubmit={(event) => { event.preventDefault(); void submit(); }}>
      <HoneypotField />
      <div className="flex items-start justify-between border-b border-line bg-white px-[34px] pb-[22px] pt-[30px] max-[760px]:px-6 max-[760px]:pb-[18px] max-[760px]:pt-6">
        <div className="flex flex-col gap-[7px]"><span className="text-[9px] font-extrabold tracking-[.16em]">CPC TRAINING</span><small className="text-[10px] text-[#8a9398]">Driver CPC course enquiry</small></div>
      </div>

      <section className="px-14 pb-11 pt-[52px] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-10" aria-labelledby="cpc-enquiry-heading">
        <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">CPC TRAINING ENQUIRY</span>
        <h2 id="cpc-enquiry-heading" className="mb-4 mt-[22px] max-w-[720px] text-[clamp(38px,3.5vw,58px)] leading-[.96] tracking-[-.045em]">Tell us about your training.</h2>
        <p className="mb-[34px] max-w-[610px] text-[13px] leading-[1.65] text-muted">Let us know who the training is for and when you would like it, and the team will confirm available delivery options.</p>

        <div role="group" aria-labelledby="cpc-enquirer-label" aria-describedby={fieldErrors.enquirerType ? 'cpc-enquirer-error' : undefined}>
          <span id="cpc-enquirer-label" className="mb-[12px] block text-[9px] font-extrabold tracking-[.1em] text-[#626b70]">ARE YOU ENQUIRING AS A DRIVER OR AN EMPLOYER?</span>
          <div className="grid grid-cols-2 gap-[10px] max-[760px]:grid-cols-1">
            {ENQUIRER_TYPES.map(item => <ChoiceButton key={item} selected={enquirerType === item} onSelect={() => setEnquirerType(item)} showArrow>{item}</ChoiceButton>)}
          </div>
          {fieldErrors.enquirerType && <p id="cpc-enquirer-error" className="mt-2 block text-[11px] text-brand-red">{fieldErrors.enquirerType}</p>}
        </div>

        <div className={`${fieldGridClass} !mt-[30px]`}>
          {isEmployer && (
            <>
              <InputField id="cpc-company" name="company" label="Company" required maxLength={160} autoComplete="organization" placeholder="Company name" {...bind('company')} />
              <InputField id="cpc-drivers" name="drivers" label="Number of drivers" type="number" inputMode="numeric" min={1} max={1000} step={1} placeholder="Approximate number" {...bind('drivers')} />
            </>
          )}
          <SelectField id="cpc-course-format" name="courseFormat" label="Preferred course format" {...bind('courseFormat')}><option value="">Select format</option><option>Full course (35 hours)</option><option>Split sessions (7 hours)</option><option>Not sure yet</option></SelectField>
          <InputField id="cpc-timing" name="preferredTiming" label="Preferred timing" maxLength={200} placeholder="e.g. Next month, weekends" {...bind('preferredTiming')} />
          <InputField id="cpc-name" name="fullName" label="Full name" required maxLength={120} autoComplete="name" placeholder="Full name" {...bind('fullName')} />
          <InputField id="cpc-phone" name="phone" label="Phone" required maxLength={40} autoComplete="tel" type="tel" placeholder="Phone number" {...bind('phone')} />
          <InputField id="cpc-email" name="email" label="Email" required maxLength={254} autoComplete="email" type="email" placeholder="name@email.com" wrapperClassName={fullWidth} {...bind('email')} />
          <TextAreaField id="cpc-message" name="message" label="Anything else?" rows={4} maxLength={2000} wrapperClassName={fullWidth} placeholder="Licence category, location or any other details (optional)" {...bind('message')} />
          <CheckboxField id="cpc-privacy" required className={fullWidth} checked={values.consent} onChange={event => setValues(current => ({ ...current, consent: event.target.checked }))} error={fieldErrors.consent}>I agree that Complex Recruitment may use my details to respond to this CPC Training enquiry.</CheckboxField>
        </div>
        <PublicTurnstile ref={turnstileRef} action="cpc_training" onToken={setTurnstileToken} className="mt-6" />
      </section>

      {status.state === 'error' && <FormAlert message={status.message} className="mx-14 max-[760px]:mx-6" />}

      <div className="flex min-h-[88px] items-center justify-between border-t border-line bg-white px-[34px] py-[18px] max-[760px]:block max-[760px]:px-6 max-[760px]:py-4">
        <span className="text-[10px] text-[#838d92] max-[760px]:mb-[14px] max-[760px]:block">{enquirerType ? `CPC Training · ${enquirerType}` : 'CPC Training · privacy'}</span>
        <div className="flex gap-[10px] max-[760px]:justify-end max-[480px]:flex-col">
          <button disabled={pending || !turnstileReady} className="min-h-12 cursor-pointer border-0 bg-brand-red px-[18px] font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 max-[480px]:w-full" type="submit">{pending ? 'Sending…' : 'Send CPC enquiry'} <i className="ml-[18px] not-italic">↗</i></button>
        </div>
      </div>
    </form>
  );
}
