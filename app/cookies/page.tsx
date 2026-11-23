import type { Metadata } from 'next';
import { LegalPage, LegalParagraph, legalLinkClass, type LegalSection } from '../../components/legal/LegalPage';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy | Complex Recruitment',
  description: 'What the Complex Recruitment website stores in your browser, and the security service that loads on its form pages.',
  openGraph: {
    title: 'Cookie Policy | Complex Recruitment',
    description: 'What the Complex Recruitment website stores in your browser, and the security service that loads on its form pages.',
  },
};

// Based on an audit of this website's code and of its pages in a browser. If
// analytics, marketing tools, embedded media or any other third-party service
// are added, this page must be updated.
const sections: readonly LegalSection[] = [
  {
    title: 'What cookies are',
    body: [
      'Cookies are small text files that a website or a service used by a website can place on your device. Similar technologies, such as local storage, work in the same way. They are used to make websites work, to keep them secure and, on some websites, to measure use or show advertising.',
    ],
  },
  {
    title: 'Cookies set by this website',
    body: [
      'This website does not set any cookies of its own, and does not use your browser’s local or session storage. It has no accounts or saved preferences. Its images, video and fonts are served from our own domain.',
    ],
  },
  {
    title: 'Security check on forms',
    body: [
      'Pages with a form load Cloudflare Turnstile, a security check that helps us tell people from automated spam and protects our forms from misuse. It loads from Cloudflare’s servers (challenges.cloudflare.com) and runs in your browser. It is the only third-party service that loads on this website.',
      'We do not control the cookies or similar technologies that Cloudflare may use on its own domain as part of this check. Cloudflare explains how it uses them in its own documentation.',
    ],
  },
  {
    title: 'Analytics and advertising',
    body: [
      'This website does not use analytics, advertising or marketing cookies or trackers.',
    ],
  },
  {
    title: 'Managing cookies',
    body: [
      'You can block or delete cookies in your browser settings, and most browsers let you block third-party cookies. How you do this depends on your browser, so see its help pages.',
      `If you stop the Turnstile security check from loading, you will not be able to submit the forms on this website. You can instead contact us by email on ${SITE.email} or by phone on ${SITE.phone.display}.`,
    ],
  },
  {
    title: 'More information',
    body: [
      <LegalParagraph key="more">
        Our <a className={legalLinkClass} href="/privacy">Privacy Policy</a> explains how we use the information you send us through this website. To ask us a question about this policy, contact us at <a className={legalLinkClass} href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </LegalParagraph>,
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      kicker="COOKIE POLICY"
      title="Cookie Policy"
      intro="What this website stores in your browser, and the security service that loads on its form pages."
      meta="LAST UPDATED · 23 NOVEMBER 2026"
      sections={sections}
    />
  );
}
