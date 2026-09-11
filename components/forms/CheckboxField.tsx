import type { InputHTMLAttributes } from 'react';

type CheckboxFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function CheckboxField({ id, children, className = '', ...props }: CheckboxFieldProps) {
  return (
    <label className={`flex flex-row items-start gap-3 ${className}`} htmlFor={id}>
      <input id={id} name={props.name ?? id} type="checkbox" className="mt-[3px] h-auto w-auto accent-brand-red" {...props} />
      <span className="text-[9px] font-medium leading-normal tracking-normal text-[#626b70]">{children}</span>
    </label>
  );
}
