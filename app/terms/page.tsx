import type { Metadata } from 'next';
import { LegalPage, LegalParagraph, legalLinkClass, type LegalSection } from '../../components/legal/LegalPage';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Website Terms | Complex Recruitment',
  description: 'The terms on which you may use the Complex Recruitment website, including the accuracy of information and acceptable use.',
  openGraph: {
    title: 'Website Terms | Complex Recruitment',
    description: 'The terms on which you may use the Complex Recruitment website, including the accuracy of information and acceptable use.',
  },
};

// Wording follows the Terms and Policies page on the previous website. The
// bracketed placeholders in that page are replaced with the company details in
// lib/site.ts; the reference to purchasing training courses is reworded to
// match this website, which does not sell training online.
const sections: readonly LegalSection[] = [
  {
    title: 'Introduction',
    body: [
      <LegalParagraph key="intro-1">
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our <a className={legalLinkClass} href="/privacy">Privacy Policy</a> govern {SITE.legalName}’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
      </LegalParagraph>,
      `The term ‘${SITE.legalName}’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is Unit 1, Georgiou Business Park, Second Avenue, London, N18 2PG. Our company registration number is ${SITE.companyNumber} (registered in ${SITE.jurisdiction}). The term ‘you’ refers to the user or viewer of our website.`,
    ],
  },
  {
    title: 'Information on this Site',
    body: [
      'Whilst we make every effort to ensure that the information on our Website is accurate and complete, some of the information is supplied to us by third parties and we are not able to check the accuracy or completeness of that information. We do not accept any liability arising from any inaccuracy or omission in any of the information on our Website or any liability in respect of information on the Website supplied by you, any other website user or any other person.',
    ],
  },
  {
    title: 'Your Use of this Site',
    body: [
      'You may only use the Website for lawful purposes when seeking employment or help with your career, when enquiring about our services or when recruiting staff.',
      'You must not under any circumstances seek to undermine the security of the Website or any information submitted to or available through it. In particular, but without limitation, you must not seek to access, alter or delete any information to which you do not have authorised access, seek to overload the system via spamming or flooding, take any action or use any device, routine or software to crash, delay, damage or otherwise interfere with the operation of the Website or attempt to decipher, disassemble or modify any of the software, coding or information comprised in the Website.',
      'You are solely responsible for any information submitted by you to the Website. You are responsible for ensuring that all information supplied by you is true, accurate, up-to-date and not misleading or likely to mislead or deceive and that it is not discriminatory, obscene, offensive, defamatory or otherwise illegal, unlawful or in breach of any applicable legislation, regulations, guidelines or codes of practice or the copyright, trade mark or other intellectual property rights of any person in any jurisdiction.',
      'You are also responsible for ensuring that all information, data and files are free of viruses or other routines or engines that may damage or interfere with any system or data prior to being submitted to the Website.',
      'We reserve the right to remove any information supplied by you from the Website at our sole discretion, at any time and for any reason without being required to give any explanation.',
    ],
  },
  // Sections 04–07 were supplied verbatim by Complex Recruitment.
  {
    title: 'Intellectual Property',
    body: [
      'All content on this website, including text, images, graphics and logos, is owned by or licensed to Complex Recruitment Ltd. You may view and print pages for your own personal use, but you must not copy, reproduce or distribute any part of this website for commercial purposes without our written permission. All trade marks and logos of third parties shown on this website belong to their respective owners.',
    ],
  },
  {
    title: 'Links to Other Websites',
    body: [
      'This website may contain links to other websites for your convenience. We have no control over the content of those websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these terms from time to time. The date at the top of this page shows when they were last updated. By continuing to use the website after any changes, you accept the updated terms.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These terms are governed by the laws of England and Wales. Any dispute arising from them or from your use of this website will be subject to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kicker="WEBSITE TERMS"
      title="Website Terms"
      intro="The terms on which you may use the Complex Recruitment website."
      meta="LAST UPDATED · 23 NOVEMBER 2026"
      sections={sections}
    />
  );
}
