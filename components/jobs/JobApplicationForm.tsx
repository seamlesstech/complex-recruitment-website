'use client';

import { useState } from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { InputField, TextAreaField } from '../forms/FormField';

const labelClass = 'mb-[18px] block text-[9px] font-extrabold tracking-[.1em] text-[#68747a]';

export function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [filename, setFilename] = useState('');
  if (submitted) return <div role="status" className="border border-line bg-white p-8"><h3 className="mt-0 text-3xl tracking-[-.03em]">Application complete — demonstration</h3><p className="text-sm leading-[1.7] text-muted">You’ve completed the application for {jobTitle}. This is a demonstration; no application or CV has been sent.</p><ButtonLink href="/jobs" className="mt-4 !text-white">View more jobs</ButtonLink></div>;
  return (
    <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }} className="border border-line bg-white p-[38px] max-[640px]:p-6">
      <div className="mb-7 border-b border-line pb-[18px] text-[8px] font-extrabold tracking-[.16em]"><span className="mr-3 text-brand-red">01</span> YOUR DETAILS</div>
      <div className="grid grid-cols-2 gap-[18px] max-[640px]:grid-cols-1">
        <InputField id="application-name" required autoComplete="name" label="Full name (required)" variant="boxed" wrapperClassName={labelClass} placeholder="Your full name" />
        <InputField id="application-phone" required autoComplete="tel" label="Telephone (required)" variant="boxed" wrapperClassName={labelClass} type="tel" placeholder="07..." />
        <InputField id="application-email" required autoComplete="email" label="Email (required)" variant="boxed" wrapperClassName={labelClass} type="email" placeholder="you@email.com" />
        <InputField id="application-postcode" autoComplete="postal-code" label="Postcode (optional)" variant="boxed" wrapperClassName={labelClass} placeholder="Postcode" />
      </div>
      <label className={`${labelClass} group cursor-pointer focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-brand-red`} htmlFor="application-cv">
        UPLOAD CV (OPTIONAL)
        <span className="mt-[9px] flex min-h-[74px] flex-wrap gap-3 items-center justify-between border border-dashed border-[#aeb4b7] bg-surface p-[18px] text-[13px] font-normal tracking-normal text-ink"><span className="min-w-0 break-all">{filename || 'Choose your CV'}</span> <b className="text-[8px] text-[#879095]">PDF, DOC, DOCX</b></span>
        <input id="application-cv" name="application-cv" className="sr-only" type="file" accept=".pdf,.doc,.docx" onChange={event => setFilename(event.target.files?.[0]?.name ?? '')} />
      </label>
      <TextAreaField id="application-message" label="Optional message" variant="boxed" wrapperClassName={labelClass} rows={4} placeholder="Anything useful for the recruiter to know?" />
      <label className="mb-[18px] flex items-start gap-[10px] text-[10px] leading-normal text-[#68747a]" htmlFor="application-privacy">
        <input id="application-privacy" name="application-privacy" className="mt-0.5 accent-brand-red focus-visible:outline-2 focus-visible:outline-brand-red" type="checkbox" required />
        <span>I have read the <a href="/privacy" className="underline focus-visible:outline-2 focus-visible:outline-brand-red">privacy notice</a> and consent to Complex processing my application details for recruitment purposes.</span>
      </label>
      <button className="mt-[10px] inline-flex min-h-12 min-w-[220px] max-[640px]:w-full items-center justify-between gap-6 border border-transparent bg-brand-red px-5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red" type="submit">Submit Application <span className="text-lg">↗</span></button>
    </form>
  );
}
