import type { Metadata } from 'next';
import { LegalList, LegalPage, LegalParagraph, legalLinkClass, type LegalSection } from '../../components/legal/LegalPage';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy | Complex Recruitment',
  description: 'What the Complex Recruitment website stores in your browser, and which third-party services load on its pages.',
  openGraph: {
    title: 'Cookie Policy | Complex Recruitment',
    description: 'What the Complex Recruitment website stores in your browser, and which third-party services load on its pages.',
  },
};

// Based on an audit of this website's code and of its pages in a browser. If
// analytics, marketing tools or new third-party services are added, or the
// Pexels-hosted images are moved onto this site, this page must be updated.
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
      'This website does not set any cookies of its own, and does not use your browser’s local or session storage. There are no sign-in or preference cookies, because the website has no accounts or saved preferences.',
    ],
  },
  {
    title: 'Third-party services on our pages',
    body: [
      'Two third-party services load content on our pages. We do not control the cookies they use.',
      <LegalList key="third-party" items={[
        <span key="turnstile"><strong className="font-semibold text-ink">Cloudflare Turnstile</strong> is a security check that runs on pages with a form, such as Contact, Request Staff, Register Interest, job applications and the sector enquiry forms. It helps us to tell people from automated spam. It loads from Cloudflare’s servers and may use cookies or similar technologies on Cloudflare’s own domain.</span>,
        <span key="pexels"><strong className="font-semibold text-ink">Pexels images.</strong> Some images on our pages are loaded from images.pexels.com, which uses Cloudflare to deliver them. When your browser requests these images, the response sets two cookies named <code className="text-[13px]">__cf_bm</code> and <code className="text-[13px]">_cfuvid</code>.</span>,
      ]} />,
      'Cloudflare explains how it uses these technologies in its own privacy and cookie documentation.',
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
      intro="What this website stores in your browser, and which third-party services load on its pages."
      meta="LAST UPDATED · 23 NOVEMBER 2026"
      sections={sections}
    />
  );
}
