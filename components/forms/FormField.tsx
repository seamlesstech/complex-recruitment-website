import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

const fieldClass =
  'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-[13px] text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink/45 focus:border-brand-red focus-visible:border-brand-red';

const labelClass = 'flex flex-col gap-[9px]';
const labelTextClass = 'text-[9px] font-extrabold tracking-[.1em] text-[#626b70]';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
};

export function InputField({ id, label, wrapperClassName = '', className = '', ...props }: InputFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <input id={id} name={props.name ?? id} className={`${fieldClass} ${className}`} {...props} />
    </label>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  children: React.ReactNode;
  wrapperClassName?: string;
};

export function SelectField({ id, label, children, wrapperClassName = '', className = '', ...props }: SelectFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <select id={id} name={props.name ?? id} className={`${fieldClass} ${className}`} {...props}>
        {children}
      </select>
    </label>
  );
}

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
};

export function TextAreaField({ id, label, wrapperClassName = '', className = '', ...props }: TextAreaFieldProps) {
  return (
    <label className={`${labelClass} ${wrapperClassName}`} htmlFor={id}>
      <span className={labelTextClass}>{label}</span>
      <textarea id={id} name={props.name ?? id} className={`${fieldClass} resize-y ${className}`} {...props} />
    </label>
  );
}
