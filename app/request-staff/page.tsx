import { Header } from "../../components/Header";
import { Container } from "../../components/layout/Container";
import { Footer } from "../../components/layout/Footer";
import { RequestStaffForm } from "../../components/RequestStaffForm";
import { SectionLabel } from "../../components/SectionLabel";

import styles from "./request-staff.module.css";

const nextSteps = [
  [
    "01",
    "We review the brief",
    "The team checks the sector, role, timing and operational detail.",
  ],
  [
    "02",
    "We make contact",
    "A specialist can clarify anything needed and discuss the requirement.",
  ],
  [
    "03",
    "Recruitment begins",
    "Complex moves into sourcing, matching and relevant compliance checks.",
  ],
];

export default function RequestStaffPage() {
  return (
    <main>
      <section className="grid grid-rows-[92px_auto] bg-brand-grey text-white max-[760px]:grid-rows-[76px_auto]">
        <Header active="Employers" theme="dark" />
        <Container className="relative h-[200px] pt-[72px] max-[1023px]:h-auto max-[1023px]:py-6">
          <div className={styles.depth} aria-hidden="true" />
          <div className={styles.lockup}>
            <img src="/complex-mark.png" alt="" aria-hidden="true" className={styles.mark} />
            <h1 className={`${styles.title} m-0 text-[clamp(44px,5vw,72px)] font-semibold leading-[.95] tracking-[-.055em] max-[480px]:text-[42px]`}>Request Staff</h1>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-[88px] max-[760px]:pb-[60px]">
        <Container className="grid grid-cols-[.85fr_1.15fr] items-start gap-12 max-[1023px]:grid-cols-1 max-[1023px]:gap-6">
          <aside className="min-w-0 pt-10 max-[1023px]:pt-6">
            <SectionLabel>BEFORE YOU START</SectionLabel>
            <h2 className="section-heading mb-5 mt-5 text-[clamp(28px,2.65vw,38px)] leading-[1.02] tracking-[-.045em] max-[1023px]:my-4">
              Tell us what you need.<br />
              <em className="not-italic text-brand-red">We’ll handle the rest.</em>
            </h2>
            <p className="m-0 max-w-[470px] text-sm leading-[1.7] text-muted max-[1023px]:max-w-none max-[760px]:text-[13px]">
              You don’t need to know every specification before getting in touch. Start with the basics and the team can clarify the rest with you.
            </p>
            <ul className="mb-0 mt-6 list-none border-t border-line p-0 max-[1023px]:mt-4">
              {['24/7 operational support', 'PAYE workforce', 'Compliance-led recruitment'].map((point) => (
                <li key={point} className="flex items-center gap-3 border-b border-line py-3 text-xs text-muted max-[1023px]:py-2">
                  <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-brand-red" />{point}
                </li>
              ))}
            </ul>
          </aside>
          <div className="relative min-w-0 -mt-[134px] max-[1023px]:mt-0">
            <RequestStaffForm />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-[120px] max-[760px]:py-[88px]">
        <Container>
          <SectionLabel>WHAT HAPPENS NEXT</SectionLabel>
          <div className="mt-[45px] grid grid-cols-3 border-l border-t border-line max-[760px]:grid-cols-1">
            {nextSteps.map(([number, title, copy]) => (
              <article
                key={number}
                className="min-h-[260px] border-b border-r border-line bg-white p-[26px] max-[760px]:min-h-[210px]"
              >
                <span className="text-[8px] font-extrabold text-brand-red">
                  {number}
                </span>
                <h3 className="mb-3 mt-[70px] text-2xl tracking-[-.03em]">
                  {title}
                </h3>
                <p className="text-xs leading-[1.6] text-[#6b767c]">{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Footer variant="simple" />
    </main>
  );
}
