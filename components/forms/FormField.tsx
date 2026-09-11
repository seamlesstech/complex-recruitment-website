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

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
};

export function InputField({ id, label, wrapperClassName = '', className = '', variant = 'underline', ...props }: InputFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <input id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} ${className}`} {...props} />
    </label>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
};

export function SelectField({ id, label, children, wrapperClassName = '', className = '', variant = 'underline', ...props }: SelectFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <select id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} ${className}`} {...props}>
        {children}
      </select>
    </label>
  );
}

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
  variant?: 'underline' | 'boxed';
};

export function TextAreaField({ id, label, wrapperClassName = '', className = '', variant = 'underline', ...props }: TextAreaFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <textarea id={id} name={props.name ?? id} className={`${variant === 'boxed' ? boxedFieldClass : underlineFieldClass} resize-y ${className}`} {...props} />
    </label>
  );
}
