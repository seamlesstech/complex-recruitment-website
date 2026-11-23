import type { Metadata } from 'next';
import { LegalList, LegalPage, LegalParagraph, LegalSubheading, legalLinkClass, type LegalSection } from '../../components/legal/LegalPage';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Complex Recruitment',
  description: 'How Complex Recruitment Ltd collects, uses and protects the personal information you send through its website forms and job applications.',
  openGraph: {
    title: 'Privacy Policy | Complex Recruitment',
    description: 'How Complex Recruitment Ltd collects, uses and protects the personal information you send through its website forms and job applications.',
  },
};

// Written from what this website actually does (its forms, application and CV
// upload, form protection and hosting). The rights wording is carried over from
// the previous website's privacy policy, adapted to this website.
const sections: readonly LegalSection[] = [
  {
    title: 'Who we are',
    body: [
      `${SITE.legalName} is responsible for this website and for the personal information collected through it. We are registered in ${SITE.jurisdiction} under company number ${SITE.companyNumber}.`,
      <address key="office" className="m-0 mb-4 max-w-[68ch] border-l-[3px] border-brand-red pl-5 text-[15px] not-italic leading-[1.8] text-[#4f5a60]">
        Complex Recruitment Ltd<br />
        Company No. 10980984<br />
        Registered office:<br />
        Unit 1, Georgiou Business Park<br />
        Second Avenue<br />
        London<br />
        N18 2PG
      </address>,
      'This policy explains what personal information we collect through this website, why we collect it and what we do with it.',
    ],
  },
  {
    title: 'Information we collect',
    body: [
      'We collect only the information you choose to send us through the website, plus limited technical information used to keep the forms secure.',
      <LegalSubheading key="apply">Job applications</LegalSubheading>,
      'When you apply for a job we collect your name, email address and phone number, the reference of the job you are applying for, and, if you give them, your postcode and a message. You may also upload a CV as a PDF, DOC or DOCX file.',
      <LegalSubheading key="interest">Registering interest as a candidate</LegalSubheading>,
      'When you register your interest we collect your name, email address and phone number, the kind of work and roles you are interested in, and, if you give them, your preferred location, availability, work preference, postcode and a message.',
      <LegalSubheading key="staff">Staffing requests from employers</LegalSubheading>,
      'When you request staff, on the Request Staff page or on a sector page, we collect your name, company, email address and phone number, together with the details of the requirement you describe, such as the sector, role, number of people, location, start date, shift pattern, duration and any notes.',
      <LegalSubheading key="contact">General enquiries</LegalSubheading>,
      'When you use the contact form we collect your name, email address, the type of enquiry and your message, and your phone number if you give it.',
      <LegalSubheading key="tech">Technical information</LegalSubheading>,
      'When you submit a form, your IP address is used to limit repeated submissions. It is stored only as a one-way hash, not as the address itself. A security check provided by Cloudflare (see the Cookie Policy) also runs on pages with forms, and receives your IP address as part of that check.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'We use the information you send us to:',
      <LegalList key="uses" items={[
        'consider your job application and contact you about it;',
        'contact you about relevant work opportunities, if you have registered your interest;',
        'respond to a staffing request or other enquiry; and',
        'protect our forms from spam and misuse.',
      ]} />,
      'The job application, register interest and staffing request forms ask you to confirm that we may use your details for the purpose described next to the form, and cannot be submitted without that confirmation.',
    ],
  },
  {
    title: 'Service providers',
    body: [
      'We use the following service providers to run this website and the systems behind it. They handle information on our behalf in order to provide their service.',
      <LegalList key="providers" items={[
        'Supabase, which stores the information you submit, including uploaded CVs, in our database and private file storage;',
        'Vercel, which hosts this website; and',
        'Cloudflare, which provides the Turnstile security check on our forms.',
      ]} />,
      'CVs and other documents uploaded through the website are held in private storage and are not publicly accessible.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep your information only for as long as we need it for the purposes described in this policy, or where we are obliged to keep it for administrative, legal or security purposes.',
    ],
  },
  {
    title: 'How we protect your information',
    body: [
      'Forms on this website are sent to our servers over a secure connection. Uploaded CVs are checked before they are accepted and are kept in private storage. We use a security check and limits on repeated submissions to reduce spam and misuse of the forms.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'If you have sent us your details through this website, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      <LegalParagraph key="cookies">
        Our <a className={legalLinkClass} href="/cookies">Cookie Policy</a> explains what this website stores in your browser and which third-party services load on its pages.
      </LegalParagraph>,
    ],
  },
  {
    title: 'Contact us',
    body: [
      'To make a request about your personal information, or to ask a question about this policy, contact us:',
      <LegalList key="contact-list" items={[
        <span key="e">Email: <a className={legalLinkClass} href={`mailto:${SITE.email}`}>{SITE.email}</a></span>,
        <span key="p">Phone: <a className={legalLinkClass} href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a></span>,
        'Post: Complex Recruitment Ltd, Unit 1, Georgiou Business Park, Second Avenue, London, N18 2PG',
      ]} />,
    ],
  },
  {
    title: 'Complaints',
    body: [
      'If you have a concern about how we have handled your personal information, please contact us using the details above so that we can look into it.',
      <LegalParagraph key="ico">
        You also have the right to complain to the Information Commissioner’s Office (ICO), the UK’s supervisory authority for data protection. You can find out how to do this at <a className={legalLinkClass} href="https://ico.org.uk" rel="noopener noreferrer">ico.org.uk</a>.
      </LegalParagraph>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="PRIVACY POLICY"
      title="Privacy Policy"
      intro="How Complex Recruitment Ltd collects, uses and protects the personal information you send through this website."
      meta="LAST UPDATED · 23 NOVEMBER 2026"
      sections={sections}
    />
  );
}
