import { SectorRoleExplorer, type SectorRoleGroup } from './sectors/SectorRoleExplorer';

const groups: readonly SectorRoleGroup[] = [
  { key: 'transport', label: 'Transport Operations', eyebrow: 'KEEPING FLEETS MOVING', roles: ['Transport Planners', 'Transport Administrators', 'Operations Coordinators'] },
  { key: 'warehouse', label: 'Warehouse Support', eyebrow: 'BEHIND THE OPERATION', roles: ['Warehouse Administrators', 'Data / Order Entry'] },
  { key: 'customer', label: 'Customer & Office', eyebrow: 'OPERATIONAL COMMUNICATION', roles: ['Customer Service Advisors', 'Office Administrators'] },
  { key: 'finance', label: 'Finance & People', eyebrow: 'BUSINESS SUPPORT', roles: ['Payroll & Accounts Support'] },
  { key: 'leadership', label: 'Operational Leadership', eyebrow: 'TEAM COORDINATION', roles: ['Team Leaders', 'Supervisors'] },
];

export function BusinessOperationalRoleExplorer() {
  return <SectorRoleExplorer groups={groups} label="Business and operational support role categories" />;
}
