import { Container } from './layout/Container';
import { SectionLabel } from './SectionLabel';

const heading =
  "section-heading m-0 text-[clamp(48px,5.2vw,84px)] leading-[.96] tracking-[-.05em] max-[640px]:text-5xl [&_em]:not-italic [&_em]:text-brand-red";

export function HowComplexWorks() {
  return (
      <section id="how-complex-works" className="bg-surface py-[130px] max-[640px]:py-[88px]">
        <Container
          gutter="wide"
          className="grid grid-cols-[1fr_2fr] items-start max-[760px]:grid-cols-1 max-[760px]:gap-9"
        >
          <SectionLabel>HOW COMPLEX WORKS</SectionLabel>
          <h2 className={heading}>
            From requirement
            <br />
            to workforce.
          </h2>
        </Container>
        <Container
          gutter="wide"
          className="mt-[90px] grid grid-cols-4 border-t border-line max-[900px]:grid-cols-2 max-[640px]:grid-cols-1"
        >
          {[
            [
              "01",
              "Tell us what you need",
              "Role, location, numbers, shift and start date.",
            ],
            [
              "02",
              "We source and verify",
              "Complex identifies suitable candidates and completes applicable checks.",
            ],
            [
              "03",
              "Your workforce is ready",
              "Confirmed workers are prepared for the assignment.",
            ],
            [
              "04",
              "We stay involved",
              "Ongoing communication and account support throughout the placement.",
            ],
          ].map(([n, t, c]) => (
            <article
              className="min-h-[260px] border-r border-line py-[30px] pr-[30px] not-first:pl-[30px] last:border-0 max-[640px]:min-h-[220px] max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:px-0 max-[640px]:not-first:pl-0"
              key={n}
            >
              <span className="text-[10px] text-brand-red">{n}</span>
              <h3 className="my-[55px] mb-3.5 text-[22px]">{t}</h3>
              <p className="text-[13px] leading-[1.55] text-[#69737a]">{c}</p>
            </article>
          ))}
        </Container>
      </section>
  );
}
