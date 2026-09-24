import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

const underlineFieldClass =
  'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-[13px] text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink/45 focus:border-brand-red focus-visible:border-brand-red';
const boxedFieldClass =
  'mt-[9px] min-h-[50px] w-full border border-line bg-surface p-[14px] text-[13px] text-ink outline-none transition-colors placeholder:text-ink/45 focus:border-brand-red focus-visible:border-brand-red';

const labelClass = 'flex flex-col gap-[9px]';
const labelTextClass = 'text-[9px] font-extrabold tracking-[.1em] text-[#626b70]';
const errorClass = 'text-[11px] font-normal normal-case tracking-normal text-brand-red';

/** Optional inline validation message + the matching aria wiring. */
function errorProps(id: string, error?: string) {
  return error ? { 'aria-invalid': true, 'aria-describedby': `${id}-error` } : {};
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return error ? <span id={`${id}-error`} className={errorClass}>{error}</span> : null;
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
  error?: string;
};

export function InputField({ id, label, wrapperClassName = '', className = '', variant = 'underline', error, ...props }: InputFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <input id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} ${className}`} {...errorProps(id, error)} {...props} />
      <FieldError id={id} error={error} />
    </label>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
  error?: string;
};

export function SelectField({ id, label, children, wrapperClassName = '', className = '', variant = 'underline', error, ...props }: SelectFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <select id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} ${className}`} {...errorProps(id, error)} {...props}>
        {children}
      </select>
      <FieldError id={id} error={error} />
    </label>
  );
}

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
  error?: string;
};

export function TextAreaField({ id, label, wrapperClassName = '', className = '', variant = 'underline', error, ...props }: TextAreaFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <textarea id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} resize-y ${className}`} {...errorProps(id, error)} {...props} />
      <FieldError id={id} error={error} />
    </label>
  );
}
