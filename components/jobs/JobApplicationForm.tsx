'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { InputField, TextAreaField } from '../forms/FormField';
import { FormAlert } from '../forms/FormAlert';
import { HoneypotField, readHoneypot } from '../forms/HoneypotField';
import { CV_ACCEPT, CV_MAX_LABEL, precheckCv } from '../../lib/forms/cv-rules';
import { HONEYPOT_FIELD, submitPublicForm } from '../../lib/forms/public-form';

const labelClass = 'mb-[18px] block text-[9px] font-extrabold tracking-[.1em] text-[#68747a]';

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

const text = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === 'string' ? value : '';
};

export function JobApplicationForm({ jobReference, jobTitle }: { jobReference: string; jobTitle: string }) {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};
  const shownCvError = cvError || fieldErrors.cv;

  if (status.state === 'success') {
    return <div role="status" className="border border-line bg-white p-8"><h3 className="mt-0 text-3xl tracking-[-.03em]">Application received</h3><p className="text-sm leading-[1.7] text-muted">Thank you — your application{cv ? ' and CV have' : ' has'} been sent to the Complex recruitment team for {jobTitle}. A recruiter will review it and contact you using the details you provided.</p><ButtonLink href="/jobs" className="mt-4 !text-white">View more jobs</ButtonLink></div>;
  }

  function clearServerCvError() {
    if (status.state === 'error' && status.fieldErrors.cv) {
      setStatus({ ...status, fieldErrors: Object.fromEntries(Object.entries(status.fieldErrors).filter(([key]) => key !== 'cv')) });
    }
  }

  function onCvChange(event: ChangeEvent<HTMLInputElement>) {
    clearServerCvError();
    const file = event.target.files?.[0] ?? null;
    const problem = file ? precheckCv(file) : null;
    if (problem) {
      // Never keep a file we already know the server will refuse.
      event.target.value = '';
      setCv(null);
      setCvError(problem);
      return;
    }
    setCv(file);
    setCvError('');
  }

  function removeCv() {
    clearServerCvError();
    if (cvInput.current) cvInput.current.value = '';
    setCv(null);
    setCvError('');
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === 'pending' || cvError) return;
    const data = new FormData(event.currentTarget);
    // Explicit field list: only what the server accepts, with the CV as a real file
    // part (multipart), never encoded into JSON.
    const payload = new FormData();
    payload.set('jobReference', jobReference);
    payload.set('fullName', text(data, 'application-name'));
    payload.set('phone', text(data, 'application-phone'));
    payload.set('email', text(data, 'application-email'));
    payload.set('postcode', text(data, 'application-postcode'));
    payload.set('message', text(data, 'application-message'));
    payload.set('consent', String(data.get('application-privacy') === 'on'));
    payload.set(HONEYPOT_FIELD, readHoneypot(form.current));
    if (cv) payload.set('cv', cv, cv.name);

    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/applications', payload);
    // On failure the inputs (and the chosen CV) keep everything the applicant entered.
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
      <div className={labelClass}>
        <label className="group block cursor-pointer focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-brand-red" htmlFor="application-cv">
          UPLOAD CV (OPTIONAL)
          <span className={`mt-[9px] flex min-h-[74px] flex-wrap items-center justify-between gap-3 border border-dashed bg-surface p-[18px] text-[13px] font-normal tracking-normal text-ink ${shownCvError ? 'border-brand-red' : 'border-[#aeb4b7]'}`}><span className="min-w-0 break-all">{cv?.name || 'Choose your CV'}</span> <b className="text-[8px] text-[#879095]">PDF, DOC, DOCX · MAX {CV_MAX_LABEL}</b></span>
          <input ref={cvInput} id="application-cv" className="sr-only" type="file" accept={CV_ACCEPT} disabled={pending} onChange={onCvChange} aria-invalid={!!shownCvError} aria-describedby={shownCvError ? 'application-cv-error' : undefined} />
        </label>
        {shownCvError && <span id="application-cv-error" className="mt-2 block text-[11px] font-normal tracking-normal text-brand-red">{shownCvError}</span>}
        {cv && !pending && <button type="button" onClick={removeCv} className="mt-2 text-[11px] font-normal tracking-normal text-ink underline outline-none focus-visible:outline-2 focus-visible:outline-brand-red">Remove file</button>}
      </div>
      <TextAreaField id="application-message" maxLength={2000} label="Optional message" variant="boxed" wrapperClassName={labelClass} rows={4} placeholder="Anything useful for the recruiter to know?" error={fieldErrors.message} />
      <label className="mb-[18px] flex flex-wrap items-start gap-[10px] text-[10px] leading-normal text-[#68747a]" htmlFor="application-privacy">
        <input id="application-privacy" name="application-privacy" className="mt-0.5 accent-brand-red focus-visible:outline-2 focus-visible:outline-brand-red" type="checkbox" required aria-invalid={!!fieldErrors.consent} />
        <span className="min-w-0 flex-1">I have read the <a href="/privacy" className="underline focus-visible:outline-2 focus-visible:outline-brand-red">privacy notice</a> and consent to Complex processing my application details for recruitment purposes.</span>
        {fieldErrors.consent && <span className="basis-full text-[11px] text-brand-red">{fieldErrors.consent}</span>}
      </label>
      {status.state === 'error' && <FormAlert message={status.message} />}
      <button disabled={pending} className="mt-[10px] inline-flex min-h-12 min-w-[220px] max-[640px]:w-full items-center justify-between gap-6 border border-transparent bg-brand-red px-5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-brand-red" type="submit">{pending ? (cv ? 'Uploading CV…' : 'Submitting…') : 'Submit Application'} <span className="text-lg">↗</span></button>
    </form>
  );
}
