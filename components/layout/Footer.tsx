import { ArrowIcon } from '../ui/ArrowIcon';
import { SITE } from '../../lib/site';
import { Container } from './Container';

type FooterLink = readonly [label: string, href: string];
type FooterGroupData = { readonly title: string; readonly links: readonly FooterLink[] };

// Only routes that exist today. Client Analysis and Infringement Management are sections on /additional-services (linked by anchor); give them their own routes here if standalone pages are added.
const groups: readonly FooterGroupData[] = [
  { title: 'RECRUITMENT SECTORS', links: [['Driving & Transport', '/sectors/driving'], ['Industrial & Warehousing', '/sectors/industrial'], ['Construction & Engineering', '/sectors/construction'], ['Business & Operational Support', '/sectors/business-operational-support'], ['Waste Management', '/sectors/waste-management'], ['Drinks Logistics', '/sectors/drinks-logistics']] },
  { title: 'ADDITIONAL SERVICES', links: [['Onsite Driver Assessments', '/training/driver-assessments'], ['Driver Training & CPC', '/training/cpc'], ['Client Analysis', '/additional-services#client-analysis'], ['Infringement Management', '/additional-services#infringement-management'], ['All Additional Services', '/additional-services']] },
  { title: 'EMPLOYERS & CANDIDATES', links: [['Employers', '/employers'], ['Permanent Recruitment', '/employers/permanent-recruitment'], ['Request Staff', '/request-staff'], ['Candidates', '/candidates'], ['Find Jobs', '/jobs'], ['Register Interest', '/register-interest']] },
  { title: 'COMPANY', links: [['About', '/about'], ['Contact', '/contact'], ['Compliance & Vetting', '/compliance']] },
];

const legalLinks: readonly FooterLink[] = [['Privacy Policy', '/privacy'], ['Cookies', '/cookies'], ['Terms', '/terms'], ['Modern Slavery', '/modern-slavery']];

/** The one footer for every page — homepage, sector, service, jobs, forms and legal pages all render this same component. */
export function Footer() {
  return <footer id="contact" className="relative isolate overflow-hidden bg-[#0b0c0e] pb-8 text-white">
    <img className="absolute bottom-[-120px] right-[-70px] -z-[1] w-[min(430px,34vw)] opacity-[.035] grayscale brightness-[5] max-[760px]:bottom-[-80px] max-[760px]:right-[-80px] max-[760px]:w-[280px]" src="/complex-mark.png" alt="" aria-hidden="true" />
    <Container className="flex min-h-[215px] items-center justify-between gap-[60px] border-b border-white/15 max-[1100px]:min-h-[190px] max-[760px]:block max-[760px]:min-h-0 max-[760px]:pb-11 max-[760px]:pt-[72px]">
      <Brand />
      <ContactBlock />
    </Container>
    <Container className="grid grid-cols-4 gap-[60px] py-[62px] pb-14 max-[1100px]:gap-[35px] max-[760px]:grid-cols-2 max-[760px]:gap-x-[30px] max-[760px]:gap-y-11 max-[760px]:py-12 max-[430px]:grid-cols-1">{groups.map((group) => <FooterGroup key={group.title} group={group} />)}</Container>
    <FooterBottom />
  </footer>;
}

function Brand() { return <div className="max-w-[410px]"><img className="mb-[26px] w-[190px]" src="/complex-logo-white.png" alt={SITE.brandName} /><p className="m-0 max-w-[340px] text-[13px] leading-[1.65] text-[#8f9aa1]">Specialist temporary and permanent staffing across operational sectors.</p></div>; }

function ContactBlock() {
  return <div className="flex min-w-[330px] flex-col max-[760px]:mt-12 max-[760px]:min-w-0">
    <a href={`tel:${SITE.phone.tel}`} aria-label={`Call ${SITE.brandName} on ${SITE.phone.display}`} className="group grid grid-cols-[1fr_auto] items-end gap-x-[30px] gap-y-[7px] border-t border-white/25 pb-[23px] pt-[27px] outline-none transition-colors hover:border-brand-red focus-visible:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red"><span className="col-start-1 text-[9px] tracking-[.17em] text-[#7f898f]">CALL COMPLEX</span><strong className="col-start-1 text-[28px] tracking-[-.025em] max-[390px]:text-2xl">{SITE.phone.display}</strong><ArrowIcon className="col-start-2 row-span-2 row-start-1 self-center text-2xl text-brand-red transition-transform duration-300 ease-complex group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-focus-visible:translate-x-[7px] group-focus-visible:-translate-y-[7px]" /></a>
    <a href={`mailto:${SITE.email}`} className="w-fit py-1 text-xs text-[#c4c8ca] outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-brand-red">{SITE.email}</a>
  </div>;
}

function FooterGroup({ group }: { group: FooterGroupData }) { return <div><h4 className="mb-5 mt-0 text-[9px] tracking-[.16em] text-[#6f797f]">{group.title}</h4>{group.links.map(([label, href]) => <a key={href} className="group mb-0.5 table py-1.5 text-xs text-[#c4c8ca] outline-none transition-[color,transform] hover:translate-x-1 hover:text-white focus-visible:translate-x-1 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-brand-red" href={href}>{label}<i className="mt-[3px] block h-0.5 w-[14px] origin-left scale-x-0 bg-brand-red transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100" /></a>)}</div>; }

function FooterBottom() {
  const { legalName, jurisdiction, companyNumber, registeredOffice } = SITE;
  return <Container className="flex items-start justify-between gap-x-10 gap-y-5 border-t border-white/15 pt-6 text-[11px] leading-[1.7] text-[#8f9aa1] max-[900px]:flex-col">
    <p className="m-0 max-w-[780px]">© {new Date().getFullYear()} {legalName}. Registered in {jurisdiction}.{companyNumber ? ` Company number ${companyNumber}.` : ''}{registeredOffice ? ` Registered office: ${registeredOffice}.` : ''} REC Member.</p>
    <nav aria-label="Legal" className="flex flex-wrap gap-x-[22px] gap-y-1">{legalLinks.map(([label, href]) => <a className="py-1 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-brand-red" key={href} href={href}>{label}</a>)}</nav>
  </Container>;
}
