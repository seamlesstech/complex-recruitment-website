/**
 * Company and contact details shared across the site chrome.
 *
 * Company number and registered office are confirmed against Companies House
 * and the live Modern Slavery Statement. app/contact/page.tsx still lists
 * Unit 2 as the Head Office address — that is a separate, unchanged page.
 */
export const SITE = {
  brandName: 'Complex Recruitment',
  legalName: 'Complex Recruitment Ltd',
  jurisdiction: 'England and Wales',
  companyNumber: '10980984',
  registeredOffice: 'Unit 1 Georgiou Business Park, Second Avenue, London, N18 2PG',
  phone: { display: '0203 923 7888', tel: '02039237888' },
  email: 'info@complexrecruitment.co.uk',
} as const;
