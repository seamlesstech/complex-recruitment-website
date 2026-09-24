export type StaffingRequest = {
  source: 'sector_page';
  sourcePage: string;
  sector: string;
  requirement: {
    role?: string;
    headcount?: number | string;
    location?: string;
    startDate?: string;
    shiftPattern?: string;
    assignmentType?: string;
    notes?: string;
    sectorSpecific: Record<string, string>;
    [key: string]: string | number | Record<string, string> | undefined;
  };
  requester: { fullName: string; company: string; email: string; phone: string };
};

export function createStaffingRequest(config: { sourcePage: string; sector: string; fields: { name: string; requestKey?: string; type?: string }[] }): StaffingRequest {
  return {
    source: 'sector_page', sourcePage: config.sourcePage, sector: config.sector,
    requirement: { ...Object.fromEntries(config.fields.map(field => [field.requestKey || field.name, field.type === 'number' ? 1 : ''])), sectorSpecific: {} },
    requester: { fullName: '', company: '', email: '', phone: '' },
  };
}
