import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Container } from '../layout/Container';
import { Footer } from '../layout/Footer';

/**
 * Shared layout for every legal page (Privacy, Cookies, Terms, Modern Slavery).
 *
 * A section body is a list of blocks. A plain string becomes a paragraph; use
 * `LegalList` for bullet lists and `LegalSubheading` for a sub-heading. Any other
 * element is rendered as given; use `LegalParagraph` for a paragraph that
 * contains a link.
 */
export type LegalSection = {
  title: string;
  body: readonly ReactNode[];
};

type LegalPageProps = {
  kicker: string;
  title: string;
  intro: string;
  /** Short line shown under the intro, e.g. "LAST UPDATED · 23 NOVEMBER 2026". */
  meta: string;
  sections: readonly LegalSection[];
};

const TEXT = 'm-0 mb-4 max-w-[68ch] text-[15px] leading-[1.8] text-[#4f5a60] max-[760px]:text-[15px]';

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className={TEXT}>{children}</p>;
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-8 max-w-[68ch] text-[17px] font-semibold leading-[1.35] tracking-[-.01em] text-ink">{children}</h3>;
}

export function LegalList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="m-0 mb-5 max-w-[68ch] list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-[#4f5a60] marker:text-brand-red">
      {items.map((item, index) => <li key={index} className="pl-1">{item}</li>)}
    </ul>
  );
}

export const legalLinkClass = 'text-ink underline decoration-brand-red decoration-2 underline-offset-[3px] hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red';

export function LegalPage({ kicker, title, intro, meta, sections }: LegalPageProps) {
  return (
    <main className="legalPage">
      <section className="grid grid-rows-[92px_1fr] border-b border-line bg-white max-[760px]:grid-rows-[76px_auto]">
        <Header active={undefined} theme="light" />
        <Container className="grid grid-cols-[1.15fr_.62fr] items-end gap-[90px] pb-[64px] pt-[72px] max-[1100px]:grid-cols-[1fr_.8fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:pb-[48px] max-[760px]:pt-[48px]">
          <div>
            <div className="flex items-center text-[10px] font-extrabold tracking-[.2em] text-[#5f686e] before:mr-[13px] before:h-0.5 before:w-9 before:bg-brand-red before:content-['']">
              LEGAL <span className="ml-[10px] text-[#9aa0a4] max-[760px]:hidden">/ {kicker}</span>
            </div>
            <h1 className="m-0 mt-[30px] text-[clamp(44px,5.2vw,84px)] font-bold leading-[.95] tracking-[-.055em] text-ink max-[760px]:text-[42px] max-[480px]:text-[36px]">{title}</h1>
          </div>
          <div className="max-[760px]:mt-[28px]">
            <p className="m-0 max-w-[500px] text-[15px] leading-[1.72] text-[#606a70]">{intro}</p>
            <span className="mt-6 block text-[9px] font-extrabold tracking-[.16em] text-brand-red">{meta}</span>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-[88px] max-[760px]:py-12">
        <Container className="grid grid-cols-[280px_1fr] items-start gap-[70px] max-[1100px]:grid-cols-[220px_1fr] max-[1100px]:gap-[40px] max-[900px]:block">
          <aside className="sticky top-[30px] flex flex-col border-t border-line max-[900px]:static max-[900px]:mb-8">
            <span className="py-[18px] text-[9px] font-extrabold tracking-[.16em] text-brand-red">ON THIS PAGE</span>
            <nav aria-label="On this page" className="flex flex-col">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#legal-${index + 1}`}
                  className="border-t border-ink/8 py-[12px] text-[12px] leading-[1.4] text-[#5e696f] hover:text-brand-red focus-visible:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  {String(index + 1).padStart(2, '0')} · {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 bg-white px-14 py-4 max-[1100px]:px-8 max-[760px]:px-5">
            {sections.map((section, index) => (
              <section key={section.title} id={`legal-${index + 1}`} className="scroll-mt-8 border-b border-line py-10 first:pt-8 last:border-b-0 max-[760px]:py-8">
                <span className="text-[9px] font-extrabold tracking-[.1em] text-brand-red">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mb-5 mt-3 max-w-[30ch] text-[28px] font-bold leading-[1.15] tracking-[-.03em] text-ink max-[760px]:text-[23px]">{section.title}</h2>
                {section.body.map((block, blockIndex) =>
                  typeof block === 'string' ? <p key={blockIndex} className={TEXT}>{block}</p> : <div key={blockIndex}>{block}</div>,
                )}
              </section>
            ))}
          </article>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
