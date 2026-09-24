import type { ChangeEvent } from 'react';

export type RequestFieldConfig = {
  name: string;
  requestKey?: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  options?: string[];
  optional?: boolean;
  autoComplete?: string;
};

export function RequestField({ prefix, field, value, error, onChange }: { prefix: string; field: RequestFieldConfig; value: string | number; error?: string; onChange: (value: string) => void }) {
  const id = `${prefix}-${field.name}`;
  const props = {
    id, name: field.name, value, required: !field.optional, placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    'data-field-key': field.requestKey || field.name,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => onChange(event.target.value),
    className: `mt-2 block min-h-12 resize-y min-w-0 w-full border bg-white px-3 py-3 text-sm font-normal tracking-normal text-ink outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${error ? 'border-brand-red' : 'border-line'}`,
  };
  return <div>
    <label htmlFor={id} className="block text-[10px] font-extrabold uppercase tracking-[.12em]">{field.label}{!field.optional && <span aria-hidden="true"> *</span>}</label>
    {field.options ? <select {...props}><option value="" disabled>Select {field.label.toLowerCase()}</option>{field.options.map(option => <option key={option}>{option}</option>)}</select> : field.type === 'textarea' ? <textarea {...props} rows={4} /> : <input {...props} type={field.type || 'text'} min={field.type === 'number' ? 1 : undefined} step={field.type === 'number' ? 1 : undefined} />}
    <p id={`${id}-error`} className="mt-1 min-h-4 text-xs leading-4 text-brand-red">{error}</p>
  </div>;
}
