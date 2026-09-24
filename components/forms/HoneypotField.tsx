import { HONEYPOT_FIELD } from '../../lib/forms/public-form';

/**
 * Anti-bot honeypot: visually and programmatically hidden from people (off-screen,
 * aria-hidden, not focusable, autofill disabled), so only automated form-fillers
 * complete it. Forms read it with `readHoneypot(form)`; the server rejects any
 * submission where it is non-empty. Must sit outside any disabled fieldset.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

export function readHoneypot(form: HTMLFormElement | null): string {
  if (!form) return '';
  const value = new FormData(form).get(HONEYPOT_FIELD);
  return typeof value === 'string' ? value : '';
}
