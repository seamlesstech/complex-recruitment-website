'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from '../ui/ArrowIcon';
import { RequesterDetailsStep } from './RequesterDetailsStep';
import { RequestField, type RequestFieldConfig } from './RequestField';
import { createStaffingRequest, type StaffingRequest } from '../../lib/staffing-request';
import { HoneypotField, readHoneypot } from '../forms/HoneypotField';
import { HONEYPOT_FIELD, submitPublicForm } from '../../lib/forms/public-form';

type SubmitState = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string };

export type SectorEnquiryConfig = {
  sourcePage: string;
  sector: string;
  intent: string;
  title: string;
  support: string;
  action: string;
  fields: RequestFieldConfig[];
  pairedDrivingFields?: boolean;
};

export function SectorEnquiryForm({ config, id = 'sector-enquiry' }: { config: SectorEnquiryConfig; id?: string }) {
  const [request, setRequest] = useState<StaffingRequest>(() => createStaffingRequest(config));
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submission, setSubmission] = useState<SubmitState>({ state: 'idle' });
  const form = useRef<HTMLFormElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    form.current?.querySelector<HTMLInputElement | HTMLSelectElement>(`[data-step="${step}"] input, [data-step="${step}"] select`)?.focus({ preventScroll: true });
  }, [step]);

  const change = (group: 'requirement' | 'requester', key: string, value: string, numeric = false) => {
    setRequest(current => ({ ...current, [group]: { ...current[group], [key]: numeric && value !== '' ? Number(value) : value } }));
    setErrors(current => { const next = { ...current }; delete next[key]; return next; });
    setSubmission(current => (current.state === 'error' ? { state: 'idle' } : current));
  };
  const validate = () => {
    const next: Record<string, string> = {};
    const controls = form.current?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(`[data-step="${step}"] input, [data-step="${step}"] select, [data-step="${step}"] textarea`);
    controls?.forEach(input => {
      const key = input.dataset.fieldKey!;
      if (input.required && !input.value.trim()) next[key] = 'This field is required.';
      else if (input.validity.typeMismatch) next[key] = 'Enter a valid email address.';
      else if (!input.validity.valid) next[key] = input.type === 'number' ? 'Enter a whole number of at least 1.' : 'Check this value.';
    });
    setErrors(next);
    if (Object.keys(next).length) {
      Array.from(controls || []).find(input => next[input.dataset.fieldKey!])?.focus({ preventScroll: true });
      return false;
    }
    return true;
  };
  // Sends the structured StaffingRequest (plus the field labels shown on this
  // page, so staff read "Driver class" rather than "role") to the trusted
  // enquiry endpoint. Success is shown only once the Enquiry row exists.
  const send = async () => {
    if (submission.state === 'pending') return;
    setSubmission({ state: 'pending' });
    const fieldLabels = Object.fromEntries(config.fields.map(field => [field.requestKey || field.name, field.label]));
    const result = await submitPublicForm('/api/enquiries', { kind: 'sector_staffing', request, fieldLabels, [HONEYPOT_FIELD]: readHoneypot(form.current) });
    if (result.ok) {
      setSubmission({ state: 'success' });
      return;
    }
    const serverErrors = Object.fromEntries(Object.entries(result.fieldErrors ?? {}).map(([path, message]) => [path.split('.').pop() ?? path, message]));
    setErrors(serverErrors);
    if (Object.keys(result.fieldErrors ?? {}).some(path => path.startsWith('request.requirement'))) setStep(0);
    setSubmission({ state: 'error', message: result.message });
  };
  const transition = (index: number) => `col-start-1 row-start-1 min-w-0 transition-[opacity,transform] duration-250 motion-reduce:transition-none ${step === index ? 'translate-x-0 opacity-100' : `pointer-events-none opacity-0 ${index === 0 ? '-translate-x-2' : 'translate-x-2'}`}`;
  const actionClass = 'inline-flex min-h-12 items-center justify-between gap-3 bg-brand-red px-5 text-[13px] font-bold text-white outline-none transition-colors hover:bg-brand-grey focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2';

  return <form ref={form} id={id} noValidate aria-labelledby={`${id}-heading`} aria-describedby={`${id}-status`} className="relative h-full border border-line bg-surface" aria-busy={submission.state === 'pending'} onSubmit={event => {
    event.preventDefault();
    if (!validate()) return;
    if (step === 0) setStep(1);
    else void send();
  }}>
    <HoneypotField />
    <div className="bg-brand-red p-8 text-white max-[640px]:p-5">
      <h2 id={`${id}-heading`} className="text-[36px] font-semibold leading-none tracking-[-.045em] text-white">{config.title}</h2>
      <p className="mt-4 text-sm leading-[1.65] text-white/90">{config.support}</p>
    </div>
    {submission.state === 'success' ? <div className="p-8 max-[640px]:p-5" role="status">
      <span className="text-[9px] font-extrabold tracking-[.18em] text-brand-red">REQUEST RECEIVED</span>
      <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-.03em]">Thanks — we’ve got it.</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">A member of the Complex team will review your {config.sector} requirement and contact you using the details you supplied.</p>
    </div> : <div className="p-8 max-[640px]:p-5">
      <ol aria-label="Request progress" className="mb-6 grid grid-cols-2 gap-4 border-b border-line pb-4 text-[9px] font-extrabold uppercase tracking-[.1em]">
        {['Requirement', 'Your details'].map((label, index) => <li key={label} aria-current={step === index ? 'step' : undefined} className={step === index ? 'text-ink' : 'text-muted'}><span className="mr-2">0{index + 1}</span>{label}</li>)}
      </ol>
      <div className="grid">
        <fieldset data-step="0" disabled={step !== 0} inert={step !== 0} aria-hidden={step !== 0} className={transition(0)}>
          <legend className="sr-only">Requirement details</legend>
          <div className={config.pairedDrivingFields ? 'grid grid-cols-2 gap-x-4 gap-y-3' : 'grid gap-3'}>
            {config.fields.map(field => {
              const key = field.requestKey || field.name;
              return <div key={field.name} className={config.pairedDrivingFields ? (['startDate', 'numberOfDrivers'].includes(field.name) ? 'max-[1100px]:col-span-2 min-[761px]:max-[900px]:col-span-1' : 'col-span-2') : undefined}>
                <RequestField prefix={id} field={field} value={request.requirement[key] as string | number ?? ''} error={errors[key]} onChange={value => change('requirement', key, value, field.type === 'number')} />
              </div>;
            })}
          </div>
          <button type="submit" className={`${actionClass} mt-4 w-full`}>Continue<ArrowIcon direction="right" className="text-white" /></button>
        </fieldset>
        <fieldset data-step="1" disabled={step !== 1} inert={step !== 1} aria-hidden={step !== 1} className={transition(1)}>
          <legend className="sr-only">Your details</legend>
          <RequesterDetailsStep prefix={id} requester={request.requester} errors={errors} onChange={(key, value) => change('requester', key, value)} />
          <div className="mt-4 flex items-center gap-3">
            <button type="button" className="min-h-12 shrink-0 px-2 text-xs font-bold text-ink outline-none hover:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red" onClick={() => { setErrors({}); setStep(0); }}>← Back</button>
            <button type="submit" disabled={submission.state === 'pending'} className={`${actionClass} min-w-0 flex-1 disabled:cursor-wait disabled:opacity-70`}>{submission.state === 'pending' ? 'Sending…' : config.action}<ArrowIcon direction="right" className="shrink-0 text-white" /></button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">By submitting this request, you agree to us using your details to respond to your enquiry. See our <a href="/privacy" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-brand-red">Privacy Policy</a>.</p>
        </fieldset>
      </div>
      <p role="alert" className="sr-only">{Object.keys(errors).length ? 'Please check the highlighted fields before continuing.' : ''}</p>
      {submission.state === 'error' && <p role="alert" className="mt-4 border-l-[3px] border-brand-red bg-white px-4 py-3 text-xs leading-relaxed text-ink">{submission.message}</p>}
      <p id={`${id}-status`} role="status" className="sr-only">{submission.state === 'pending' ? 'Sending your request…' : ''}</p>
    </div>}
  </form>;
}
