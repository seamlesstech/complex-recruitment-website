import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Container } from '../layout/Container';
import { Footer } from '../layout/Footer';

export type LegalSection = {
  title: string;
  body: ReactNode | readonly ReactNode[];
};

type LegalPageProps = {
  kicker: string;
  title: string;
  intro: string;
  updated: string;
  sections: readonly LegalSection[];
};

export function LegalPage({ kicker, title, intro, updated, sections }: LegalPageProps) {
  return (
    <main className="legalPage">
      <section className="grid min-h-[530px] grid-rows-[92px_1fr] border-b border-line bg-white max-[760px]:min-h-0 max-[760px]:grid-rows-[76px_auto]">
        <Header active={undefined} theme="light" />
        <Container className="grid grid-cols-[1.15fr_.62fr] items-end gap-[90px] pt-20 pb-[75px] max-[1100px]:grid-cols-[1fr_.72fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:py-[58px]">
          <div>
            <div className="flex items-center text-[10px] font-extrabold tracking-[.2em] text-[#5f686e] before:mr-[13px] before:h-0.5 before:w-9 before:bg-brand-red before:content-['']">
              LEGAL <span className="ml-[10px] text-[#9aa0a4] max-[760px]:hidden">/ {kicker}</span>
            </div>
            <h1 className="m-0 mt-[34px] text-[clamp(60px,6vw,100px)] leading-[.9] font-bold tracking-[-.065em] text-ink max-[760px]:text-[52px] max-[480px]:text-[48px]">{title}</h1>
          </div>
          <div className="max-[760px]:mt-[34px]">
            <p className="m-0 max-w-[500px] text-[15px] leading-[1.72] text-[#606a70]">{intro}</p>
            <span className="mt-7 block text-[8px] font-extrabold tracking-[.16em] text-brand-red">LAST UPDATED · {updated}</span>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-[120px] max-[760px]:py-[88px]">
        <Container className="grid grid-cols-[300px_1fr] items-start gap-[90px] max-[1100px]:grid-cols-[240px_1fr] max-[1100px]:gap-[50px] max-[760px]:block">
          <aside className="sticky top-[30px] flex flex-col border-t border-line max-[760px]:static max-[760px]:mb-[35px]">
            <span className="py-[18px] text-[8px] font-extrabold tracking-[.16em] text-brand-red">ON THIS PAGE</span>
            <nav aria-label="On this page" className="flex flex-col">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#legal-${index + 1}`}
                  className="border-t border-ink/8 py-[13px] text-[11px] text-[#5e696f] hover:text-brand-red focus-visible:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  {String(index + 1).padStart(2, '0')} · {section.title}
                </a>
              ))}
            </nav>
            <div className="mt-[35px] border-l-[3px] border-brand-red bg-white p-5">
              <strong className="text-[8px] tracking-[.15em]">CONTENT NOTE</strong>
              <p className="mb-0 text-[11px] leading-[1.6] text-[#69747a]">This is a design-stage legal template. Final wording must be reviewed and approved by Complex before launch.</p>
            </div>
          </aside>

          <article className="bg-white px-14 py-5 max-[760px]:px-6 max-[760px]:py-[5px]">
            {sections.map((section, index) => (
              <section key={section.title} id={`legal-${index + 1}`} className="scroll-mt-8 border-b border-line py-[50px] last:border-b-0">
                <span className="text-[8px] font-extrabold text-brand-red">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="my-[18px] text-[34px] font-bold tracking-[-.035em] max-[760px]:text-[29px]">{section.title}</h2>
                {Array.isArray(section.body)
                  ? section.body.map((content, paragraphIndex) => <p key={paragraphIndex} className="max-w-[760px] text-sm leading-[1.8] text-[#606b71]">{content}</p>)
                  : <p className="max-w-[760px] text-sm leading-[1.8] text-[#606b71]">{section.body}</p>}
              </section>
            ))}
          </article>
        </Container>
      </section>

      <Footer variant="compact" />
    </main>
  );
}
