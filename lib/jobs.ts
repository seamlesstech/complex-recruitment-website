export type Job = {
  title: string;
  location: string;
  sector: string;
  workType: string;
  rate: string;
  slug: string;
  timing?: string;
};

export const jobs: Job[] = [
  { title: 'HGV Class 1 Driver', location: 'Enfield', sector: 'Driving & Transport', workType: 'Temporary', rate: '£19–£22/hr', slug: 'hgv-class-1-driver-enfield', timing: 'Immediate start · Night / Day shifts' },
  { title: 'Warehouse Operative', location: 'Croydon', sector: 'Industrial & Warehouse', workType: 'Temporary', rate: '£12.50/hr', slug: 'warehouse-operative-croydon' },
  { title: 'Site Labourer', location: 'London', sector: 'Construction & Engineering', workType: 'Temporary', rate: '£14.50/hr', slug: 'site-labourer-london' },
  { title: 'HGV Class 2 Driver', location: 'North London', sector: 'Driving & Transport', workType: 'Temp-to-perm', rate: '£17–£20/hr', slug: 'hgv-class-2-driver-north-london' },
  { title: 'FLT Driver', location: 'Greater London', sector: 'Industrial & Warehouse', workType: 'Ad-hoc', rate: '£13.80/hr', slug: 'flt-driver-greater-london' },
  { title: 'Transport Administrator', location: 'London', sector: 'Business & Operational Support', workType: 'Permanent', rate: 'Salary DOE', slug: 'transport-administrator-london' },
];

