import { ButtonLink } from './ui/ButtonLink';

const steps = [
  ['01', 'Sector and role', 'Choose the sector, the role you need and how many people.'],
  ['02', 'Operational details', 'Add the location, start date, shift pattern and any notes.'],
  ['03', 'Contact details', 'Tell us who to speak to and how to reach them.'],
] as const;

/** Summary of the Request Staff form on the Employers page. The form itself lives on /request-staff. */
export function RequestStaffSteps() {
  return (
    <div className="bg-white text-ink shadow-[0_28px_80px_rgba(0,0,0,.2)]">
      <div className="flex min-h-[76px] items-center justify-between gap-4 border-b border-line px-8 max-[520px]:flex-col max-[520px]:items-start max-[520px]:px-5 max-[520px]:py-5">
        <div>
          <span className="block text-[9px] font-extrabold tracking-[.16em]">REQUEST STAFF</span>
          <small className="mt-1 block text-[10px] text-muted">Three short steps · No account required</small>
        </div>
        <ButtonLink href="/request-staff" className="!min-h-11 !px-4 !text-xs">Request Staff</ButtonLink>
      </div>
      <ol className="m-0 list-none p-0">
        {steps.map(([number, title, copy]) => (
          <li key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-line px-8 py-6 last:border-b-0 max-[520px]:px-5">
            <span className="text-[9px] font-extrabold tracking-[.16em] text-brand-red">{number}</span>
            <div>
              <h3 className="m-0 text-[22px] font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mb-0 mt-2 max-w-[520px] text-[13px] leading-[1.65] text-muted">{copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
