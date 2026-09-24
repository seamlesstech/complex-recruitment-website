import type { StaffingRequest } from '../../lib/staffing-request';
import { RequestField, type RequestFieldConfig } from './RequestField';

const fields: RequestFieldConfig[] = [
  { name: 'fullName', label: 'Full name', placeholder: 'e.g. Sarah Thompson', autoComplete: 'name' },
  { name: 'company', label: 'Company', placeholder: 'e.g. Acme Logistics', autoComplete: 'organization' },
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'name@company.co.uk', autoComplete: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: 'e.g. 020 3923 7888', autoComplete: 'tel' },
];

export function RequesterDetailsStep({ prefix, requester, errors, onChange }: { prefix: string; requester: StaffingRequest['requester']; errors: Record<string, string>; onChange: (key: string, value: string) => void }) {
  return <div className="grid gap-3">{fields.map(field => <RequestField key={field.name} prefix={prefix} field={field} value={requester[field.name as keyof typeof requester]} error={errors[field.name]} onChange={value => onChange(field.name, value)} />)}</div>;
}
