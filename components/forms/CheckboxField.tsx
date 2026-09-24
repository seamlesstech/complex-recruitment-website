import type { InputHTMLAttributes } from 'react';

type CheckboxFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  id: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
};

export function CheckboxField({ id, children, className = '', error, ...props }: CheckboxFieldProps) {
  return (
    <label className={`flex flex-row flex-wrap items-start gap-3 ${className}`} htmlFor={id}>
      <input id={id} name={props.name ?? id} type="checkbox" className="mt-[3px] h-auto w-auto accent-brand-red" {...(error ? { 'aria-invalid': true, 'aria-describedby': `${id}-error` } : {})} {...props} />
      <span className="min-w-0 flex-1 text-[9px] font-medium leading-normal tracking-normal text-[#626b70]">{children}</span>
      {error && <span id={`${id}-error`} className="basis-full text-[11px] text-brand-red">{error}</span>}
    </label>
  );
}
