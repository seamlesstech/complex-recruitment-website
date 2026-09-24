'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { InputField, TextAreaField } from '../forms/FormField';
import { FormAlert } from '../forms/FormAlert';
import { HoneypotField, readHoneypot } from '../forms/HoneypotField';
import { HONEYPOT_FIELD, submitPublicForm } from '../../lib/forms/public-form';

const labelClass = 'mb-[18px] block text-[9px] font-extrabold tracking-[.1em] text-[#68747a]';

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

const text = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === 'string' ? value : '';
};

export function JobApplicationForm({ jobReference, jobTitle }: { jobReference: string; jobTitle: string }) {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const form = useRef<HTMLFormElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};

  if (status.state === 'success') {
    return <div role="status" className="border border-line bg-white p-8"><h3 className="mt-0 text-3xl tracking-[-.03em]">Application received</h3><p className="text-sm leading-[1.7] text-muted">Thank you — your application for {jobTitle} has been sent to the Complex recruitment team. A recruiter will review it and contact you using the details you provided.</p><ButtonLink href="/jobs" className="mt-4 !text-white">View more jobs</ButtonLink></div>;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === 'pending') return;
    const data = new FormData(event.currentTarget);
    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/applications', {
      jobReference,
      fullName: text(data, 'application-name'),
      phone: text(data, 'application-phone'),
      email: text(data, 'application-email'),
      postcode: text(data, 'application-postcode'),
      message: text(data, 'application-message'),
      consent: data.get('application-privacy') === 'on',
      [HONEYPOT_FIELD]: readHoneypot(form.current),
    });
    // On failure the (uncontrolled) inputs keep everything the applicant typed.
    setStatus(result.ok ? { state: 'success' } : { state: 'error', message: result.message, fieldErrors: result.fieldErrors ?? {} });
  }

  const pending = status.state === 'pending';

  return (
    <form ref={form} onSubmit={onSubmit} aria-busy={pending} className="relative border border-line bg-white p-[38px] max-[640px]:p-6">
      <HoneypotField />
      <div className="mb-7 border-b border-line pb-[18px] text-[8px] font-extrabold tracking-[.16em]"><span className="mr-3 text-brand-red">01</span> YOUR DETAILS</div>
      <div className="grid grid-cols-2 gap-[18px] max-[640px]:grid-cols-1">
        <InputField id="application-name" required maxLength={120} autoComplete="name" label="Full name (required)" variant="boxed" wrapperClassName={labelClass} placeholder="Your full name" error={fieldErrors.fullName} />
        <InputField id="application-phone" required maxLength={40} autoComplete="tel" label="Telephone (required)" variant="boxed" wrapperClassName={labelClass} type="tel" placeholder="07..." error={fieldErrors.phone} />
        <InputField id="application-email" required maxLength={254} autoComplete="email" label="Email (required)" variant="boxed" wrapperClassName={labelClass} type="email" placeholder="you@email.com" error={fieldErrors.email} />
        <InputField id="application-postcode" maxLength={20} autoComplete="postal-code" label="Postcode (optional)" variant="boxed" wrapperClassName={labelClass} placeholder="Postcode" error={fieldErrors.postcode} />
      </div>
      {/* CV upload is intentionally unavailable until private document storage ships:
          no file input exists, so a CV can never be selected and then discarded. */}
      <div className={labelClass} aria-disabled="true">
        CV UPLOAD
        <span className="mt-[9px] flex min-h-[74px] cursor-not-allowed flex-wrap items-center justify-between gap-3 border border-dashed border-[#d3d7d9] bg-surface p-[18px] text-[13px] font-normal tracking-normal text-muted"><span className="min-w-0">CV upload will be available shortly. If the team needs your CV, they’ll ask for it after you apply.</span> <b className="text-[8px] text-[#879095]">COMING SOON</b></span>
      </div>
      <TextAreaField id="application-message" maxLength={2000} label="Optional message" variant="boxed" wrapperClassName={labelClass} rows={4} placeholder="Anything useful for the recruiter to know?" error={fieldErrors.message} />
      <label className="mb-[18px] flex flex-wrap items-start gap-[10px] text-[10px] leading-normal text-[#68747a]" htmlFor="application-privacy">
        <input id="application-privacy" name="application-privacy" className="mt-0.5 accent-brand-red focus-visible:outline-2 focus-visible:outline-brand-red" type="checkbox" required aria-invalid={!!fieldErrors.consent} />
        <span className="min-w-0 flex-1">I have read the <a href="/privacy" className="underline focus-visible:outline-2 focus-visible:outline-brand-red">privacy notice</a> and consent to Complex processing my application details for recruitment purposes.</span>
        {fieldErrors.consent && <span className="basis-full text-[11px] text-brand-red">{fieldErrors.consent}</span>}
      </label>
      {status.state === 'error' && <FormAlert message={status.message} />}
      <button disabled={pending} className="mt-[10px] inline-flex min-h-12 min-w-[220px] max-[640px]:w-full items-center justify-between gap-6 border border-transparent bg-brand-red px-5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-brand-red" type="submit">{pending ? 'Submitting…' : 'Submit Application'} <span className="text-lg">↗</span></button>
    </form>
  );
}
