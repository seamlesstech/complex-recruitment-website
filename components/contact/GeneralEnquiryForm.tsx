'use client';

import { useRef, useState, type FormEvent } from 'react';
import { HoneypotField, readHoneypot } from '../forms/HoneypotField';
import { ArrowIcon } from '../ui/ArrowIcon';
import { PublicTurnstile, type PublicTurnstileHandle } from '../turnstile/PublicTurnstile';
import { isTurnstileConfigured } from '../../lib/turnstile/config';
import { HONEYPOT_FIELD, TURNSTILE_FIELD, submitPublicForm } from '../../lib/forms/public-form';

// Visual classes are unchanged from the original inline /contact form.
const fieldClass =
  'w-full border-0 border-b border-ink/25 bg-transparent py-[13px] text-sm text-ink outline-none transition-colors focus:border-brand-red';
const labelClass =
  'flex flex-col gap-[9px] text-[9px] font-extrabold tracking-[.1em] text-[#626b70]';
const errorClass = 'text-[11px] font-normal tracking-normal text-brand-red';

/** Categories are shown to the visitor and used in the Enquiry subject; the DB type is always `general`. */
const CATEGORIES = ['General', 'Accounts', 'HR', 'Timesheets'] as const;

type Status = { state: 'idle' | 'pending' | 'success' } | { state: 'error'; message: string; fieldErrors: Record<string, string> };

const text = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === 'string' ? value : '';
};

export function GeneralEnquiryForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<PublicTurnstileHandle>(null);
  const form = useRef<HTMLFormElement>(null);
  const fieldErrors = status.state === 'error' ? status.fieldErrors : {};
  const pending = status.state === 'pending';
  const turnstileReady = !isTurnstileConfigured || turnstileToken !== '';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || !turnstileReady) return;
    const data = new FormData(event.currentTarget);
    setStatus({ state: 'pending' });
    const result = await submitPublicForm('/api/enquiries', {
      kind: 'contact',
      fullName: text(data, 'contact-name'),
      email: text(data, 'contact-email'),
      phone: text(data, 'contact-phone'),
      category: text(data, 'contact-category'),
      message: text(data, 'contact-message'),
      [HONEYPOT_FIELD]: readHoneypot(form.current),
      [TURNSTILE_FIELD]: turnstileToken,
    });
    if (!result.ok) turnstileRef.current?.reset();
    setStatus(result.ok ? { state: 'success' } : { state: 'error', message: result.message, fieldErrors: result.fieldErrors ?? {} });
  }

  if (status.state === 'success') {
    return (
      <div role="status" className="border-t border-line pt-8 max-[760px]:mt-[50px]">
        <span className="text-[9px] font-extrabold tracking-[.18em] text-brand-red">ENQUIRY SENT</span>
        <p className="mb-0 mt-5 text-[clamp(28px,2.6vw,40px)] font-semibold leading-[1.05] tracking-[-.04em]">Thanks — your message is with the Complex team.</p>
        <p className="mt-4 max-w-[520px] text-sm leading-[1.7] text-[#69747a]">We&apos;ll route it to the right team and reply using the details you provided.</p>
      </div>
    );
  }

  const invalid = (name: string) =>
    fieldErrors[name] ? { 'aria-invalid': true, 'aria-describedby': `contact-${name}-error` } : {};
  const error = (name: string) =>
    fieldErrors[name] ? <span id={`contact-${name}-error`} className={errorClass}>{fieldErrors[name]}</span> : null;

  return (
    <form ref={form} onSubmit={onSubmit} aria-busy={pending} className="relative grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:mt-[50px] max-[760px]:grid-cols-1">
      <HoneypotField />
      <label className={labelClass}>
        <span>Your name</span>
        <input className={fieldClass} name="contact-name" required maxLength={120} autoComplete="name" placeholder="Full name" {...invalid('fullName')} />
        {error('fullName')}
      </label>

      <label className={labelClass}>
        <span>Email</span>
        <input className={fieldClass} name="contact-email" type="email" required maxLength={254} autoComplete="email" placeholder="name@email.com" {...invalid('email')} />
        {error('email')}
      </label>

      <label className={labelClass}>
        <span>Phone</span>
        <input className={fieldClass} name="contact-phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Phone number" {...invalid('phone')} />
        {error('phone')}
      </label>

      <label className={labelClass}>
        <span>Enquiry type</span>
        <select className={fieldClass} name="contact-category" required defaultValue="" {...invalid('category')}>
          <option value="" disabled>
            Select
          </option>
          {CATEGORIES.map(category => <option key={category}>{category}</option>)}
        </select>
        {error('category')}
      </label>

      <label className={`${labelClass} col-span-full max-[760px]:col-auto`}>
        <span>Message</span>
        <textarea className={fieldClass} name="contact-message" required maxLength={4000} rows={6} placeholder="How can we help?" {...invalid('message')} />
        {error('message')}
      </label>

      {status.state === 'error' && (
        <p role="alert" className="col-span-full m-0 border-l-[3px] border-brand-red bg-surface px-4 py-3 text-[13px] leading-[1.6] text-ink max-[760px]:col-auto">
          {status.message}
        </p>
      )}

      <PublicTurnstile ref={turnstileRef} action="contact" onToken={setTurnstileToken} className="col-span-full max-[760px]:col-auto" />

      <button
        className="group inline-flex min-h-12 items-center justify-between justify-self-start border-0 bg-brand-red px-5 text-[13px] font-bold tracking-[.02em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:-translate-y-0.5 focus-visible:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={pending || !turnstileReady}
      >
        {pending ? 'Sending…' : 'Send Enquiry'}
        <ArrowIcon className="ml-6 text-lg transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      </button>
    </form>
  );
}
