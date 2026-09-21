import { ContactPathCard } from "../../components/contact/ContactPathCard";
import { Header } from "../../components/Header";
import { Container } from "../../components/layout/Container";
import { Footer } from "../../components/layout/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { ArrowIcon } from "../../components/ui/ArrowIcon";

const departments = [
  ["GENERAL QUERIES", "info@complexrecruitment.co.uk"],
  ["HUMAN RESOURCES", "hr@complexrecruitment.co.uk"],
  ["ACCOUNTS", "accounts@complexrecruitment.co.uk"],
  ["TIMESHEET SUBMISSIONS", "timesheets@complexrecruitment.co.uk"],
] as const;

const fieldClass =
  "w-full border-0 border-b border-ink/25 bg-transparent py-[13px] text-sm text-ink outline-none transition-colors focus:border-brand-red";

const labelClass =
  "flex flex-col gap-[9px] text-[9px] font-extrabold tracking-[.1em] text-[#626b70]";

const locations = [
  {
    number: "01",
    label: "HEAD OFFICE",
    title: "Edmonton",
    meta: "North London",
    copy: (
      <>
        Unit 2 Georgiou Business Park
        <br />
        Second Avenue
        <br />
        London N18 2PG
      </>
    ),
    contact: true,
  },
  {
    number: "02",
    label: "WEST LONDON",
    title: "Park Royal",
    meta: "Complex Recruitment",
    copy: (
      <>
        Our West London base supporting driving, industrial and construction
        bookings across the capital.
      </>
    ),
    contact: true,
  },
  {
    number: "03",
    label: "GROUP NETWORK",
    title: "AVTAV — Heathrow",
    meta: "Aviation recruitment & vetting",
    copy: (
      <>
        Based at Sovereign Court, West Drayton, close to Heathrow. AVTAV is the
        wider group&apos;s specialist aviation recruitment and vetting brand.
      </>
    ),
    contact: false,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="contactPage">
      {/* Compact contact hero */}
      <section className="grid grid-rows-[92px_auto] bg-white max-[760px]:grid-rows-[76px_auto]">
        <Header active="Contact" theme="light" />

        <Container className="grid grid-cols-[1.2fr_.62fr] items-end gap-[90px] pb-[62px] pt-[54px] max-[1100px]:grid-cols-[1fr_.72fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:py-[46px]">
          <div>
            <div className="flex items-center text-[10px] font-extrabold tracking-[.2em] text-[#5f686e] before:mr-[13px] before:h-0.5 before:w-9 before:bg-brand-red before:content-['']">
              CONTACT
              <span className="ml-[10px] text-[#9aa0a4] max-[760px]:hidden">
                / COMPLEX RECRUITMENT
              </span>
            </div>

            <h1 className="m-0 mt-[27px] text-[clamp(58px,5.6vw,92px)] font-bold leading-[.9] tracking-[-.065em] max-[760px]:text-[50px]">
              Start with the right
              <br />
              <em className="not-italic text-brand-grey">
                conversation<span className="text-brand-red">.</span>
              </em>
            </h1>
          </div>

          <div className="pb-1 max-[760px]:mt-[30px]">
            <p className="mb-[27px] mt-0 max-w-[520px] text-[15px] leading-[1.7] text-[#606a70]">
              Whether you need staff, you&apos;re looking for work, or you have
              a general question, choose the route that gets you to the right
              team fastest.
            </p>

            <a
              href="tel:02039237888"
              className="group grid grid-cols-[1fr_auto] items-end gap-x-5 gap-y-1.5 border-y border-line py-[18px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
            >
              <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">
                CALL COMPLEX
              </span>

              <strong className="col-start-1 text-[25px] tracking-[-.035em]">
                0203 923 7888
              </strong>

              <ArrowIcon className="col-start-2 row-span-2 row-start-1 text-[23px] transition-transform duration-300 group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-focus-visible:translate-x-[7px] group-focus-visible:-translate-y-[7px]" />
            </a>
          </div>
        </Container>
      </section>

      {/* Interactive contact routes */}
      <section className="bg-surface pb-[104px] pt-[76px] max-[760px]:py-[72px]">
        <Container>
          <SectionLabel>HOW CAN WE HELP?</SectionLabel>
        </Container>

        <Container className="contactCtaRow mt-[36px] grid grid-cols-3 max-[1100px]:grid-cols-1">
          <ContactPathCard
            href="/request-staff"
            eyebrow="01 · EMPLOYERS"
            title="I need staff."
            body="Tell us the role, location, numbers and timing so the team can understand the requirement quickly."
            cta="Request Staff"
            tone="red"
          />

          <ContactPathCard
            href="/jobs"
            eyebrow="02 · CANDIDATES"
            title="I’m looking for work."
            body="Browse current jobs or register your interest if nothing suitable is live right now."
            cta="Find Jobs"
            tone="dark"
          />

          <ContactPathCard
            href="#general-contact"
            eyebrow="03 · GENERAL"
            title="I have a question."
            body="Accounts, HR, timesheets or anything else — use the contact details below."
            cta="Contact Complex"
            tone="grey"
            arrow="down-right"
          />
        </Container>
      </section>

      {/* Offices */}
      <section className="bg-white py-[116px] max-[760px]:py-[82px]">
        <Container className="mb-[55px] grid grid-cols-[.55fr_1fr] gap-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[34px]">
          <SectionLabel>OUR LOCATIONS</SectionLabel>

          <div>
            <h2 className="section-heading m-0 text-[clamp(50px,4.8vw,78px)] leading-[.94] tracking-[-.055em] max-[480px]:text-[46px]">
              Local teams.
              <br />
              <em className="not-italic text-brand-red">Wider reach.</em>
            </h2>

            <p className="mb-0 mt-6 max-w-[650px] text-[15px] leading-[1.75] text-[#606b71]">
              Complex operates from Edmonton and Park Royal, supporting clients
              and candidates across London and nationwide, with wider group
              capability through AVTAV at Heathrow.
            </p>
          </div>
        </Container>

        <Container className="grid grid-cols-3 border-l border-t border-line max-[1000px]:grid-cols-1">
          {locations.map((location) => (
            <article
              key={location.number}
              className="group relative flex min-h-[380px] flex-col border-b border-r border-line p-[30px] transition-[background-color,padding] duration-500 ease-complex hover:bg-surface hover:pl-[38px] max-[1000px]:min-h-[300px] max-[760px]:min-h-[280px] max-[760px]:p-6 max-[760px]:hover:pl-6"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-[9px] font-extrabold tracking-[.17em] text-brand-red">
                  {location.number}
                </span>

                <ArrowIcon className="text-[20px] text-brand-red opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:opacity-100" />
              </div>

              <div className="mt-auto">
                <span className="mb-3 block text-[9px] font-extrabold tracking-[.16em] text-[#7d878c]">
                  {location.label}
                </span>

                <h3 className="m-0 text-[clamp(30px,2.4vw,42px)] tracking-[-.045em]">
                  {location.title}
                </h3>

                <span className="mt-2 block text-[11px] font-semibold text-brand-grey">
                  {location.meta}
                </span>

                <p className="mb-0 mt-6 max-w-[340px] text-[13px] leading-[1.75] text-[#626e74]">
                  {location.copy}
                </p>

                {location.contact && (
                  <div className="mt-7 border-t border-line pt-5">
                    <a
                      href="tel:02039237888"
                      className="block text-sm font-semibold transition-colors hover:text-brand-red"
                    >
                      0203 923 7888
                    </a>

                    <a
                      href="mailto:info@complexrecruitment.co.uk"
                      className="mt-2 block text-xs text-[#667177] transition-colors hover:text-brand-red"
                    >
                      info@complexrecruitment.co.uk
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>

      {/* Direct department contacts */}
      <section className="bg-surface py-[116px] max-[760px]:py-[82px]">
        <Container className="grid grid-cols-[.72fr_1.28fr] gap-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[54px]">
          <div>
            <SectionLabel>DIRECT CONTACTS</SectionLabel>

            <h2 className="section-heading mb-0 mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">
              Get to the
              <br />
              <em className="not-italic text-brand-red">right team.</em>
            </h2>

            <p className="mt-7 max-w-[430px] text-sm leading-[1.75] text-[#606b71]">
              For department-specific queries, contact the relevant Complex team
              directly.
            </p>
          </div>

          <div className="border-t border-line">
            {departments.map(([label, email], i) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="group grid min-h-[110px] grid-cols-[210px_1fr_auto] items-center gap-[30px] border-b border-line px-2 transition-[background-color,padding] duration-400 ease-complex hover:bg-white hover:pl-[22px] focus-visible:bg-white focus-visible:pl-[22px] focus-visible:outline-2 focus-visible:outline-brand-red max-[760px]:min-h-[88px] max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-x-5 max-[760px]:gap-y-2 max-[760px]:py-[17px]"
              >
                <span className="text-[8px] font-extrabold tracking-[.15em] text-[#828b90] max-[760px]:col-start-1">
                  {String(i + 1).padStart(2, "0")} · {label}
                </span>

                <strong className="text-lg tracking-[-.02em] max-[760px]:col-start-1 max-[760px]:text-sm max-[760px]:[overflow-wrap:anywhere]">
                  {email}
                </strong>

                <ArrowIcon className="text-[21px] text-brand-red transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-focus-visible:translate-x-1.5 group-focus-visible:-translate-y-1.5 max-[760px]:col-start-2 max-[760px]:row-span-2 max-[760px]:row-start-1" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* General enquiry */}
      <section
        className="bg-white py-[116px] max-[760px]:py-[82px]"
        id="general-contact"
      >
        <Container className="grid grid-cols-[.72fr_1.28fr] items-start gap-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px] max-[760px]:block">
          <div>
            <SectionLabel>GENERAL ENQUIRY</SectionLabel>

            <h2 className="section-heading mb-0 mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">
              Not sure where
              <br />
              <em className="not-italic text-brand-red">to start?</em>
            </h2>

            <p className="mt-7 max-w-[440px] text-sm leading-[1.7] text-[#69747a]">
              Send a short message and we&apos;ll route it to the appropriate
              team.
            </p>
          </div>

          <form className="grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:mt-[50px] max-[760px]:grid-cols-1">
            <label className={labelClass}>
              <span>Your name</span>
              <input className={fieldClass} placeholder="Full name" />
            </label>

            <label className={labelClass}>
              <span>Email</span>
              <input
                className={fieldClass}
                type="email"
                placeholder="name@email.com"
              />
            </label>

            <label className={labelClass}>
              <span>Phone</span>
              <input
                className={fieldClass}
                type="tel"
                placeholder="Phone number"
              />
            </label>

            <label className={labelClass}>
              <span>Enquiry type</span>
              <select className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>General</option>
                <option>Accounts</option>
                <option>HR</option>
                <option>Timesheets</option>
              </select>
            </label>

            <label
              className={`${labelClass} col-span-full max-[760px]:col-auto`}
            >
              <span>Message</span>

              <textarea
                className={fieldClass}
                rows={6}
                placeholder="How can we help?"
              />
            </label>

            <button
              className="group inline-flex min-h-12 items-center justify-between justify-self-start border-0 bg-brand-red px-5 text-[13px] font-bold tracking-[.02em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:-translate-y-0.5 focus-visible:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
              type="button"
            >
              Send Enquiry
              <ArrowIcon className="ml-6 text-lg transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </button>
          </form>
        </Container>
      </section>

      <Footer variant="simple" />
    </main>
  );
}
// import { ContactPathCard } from "../../components/contact/ContactPathCard";
// import { Header } from "../../components/Header";
// import { Container } from "../../components/layout/Container";
// import { Footer } from "../../components/layout/Footer";
// import { SectionLabel } from "../../components/SectionLabel";
// import { ArrowIcon } from "../../components/ui/ArrowIcon";
// import { ButtonLink } from "../../components/ui/ButtonLink";

// const departments = [
//   ["GENERAL QUERIES", "info@complexrecruitment.co.uk"],
//   ["HUMAN RESOURCES", "hr@complexrecruitment.co.uk"],
//   ["ACCOUNTS", "accounts@complexrecruitment.co.uk"],
//   ["TIMESHEET SUBMISSIONS", "timesheets@complexrecruitment.co.uk"],
// ] as const;
// const fieldClass =
//   "w-full border-0 border-b border-ink/25 bg-transparent py-[13px] text-sm text-ink outline-none transition-colors focus:border-brand-red";
// const labelClass =
//   "flex flex-col gap-[9px] text-[9px] font-extrabold tracking-[.1em] text-[#626b70]";

// export default function ContactPage() {
//   return (
//     <main className="contactPage">
//       <section className="grid min-h-[640px] grid-rows-[92px_1fr] bg-white max-[760px]:min-h-0 max-[760px]:grid-rows-[76px_auto]">
//         <Header active="Contact" theme="light" />
//         <Container className="grid grid-cols-[1.2fr_.62fr] items-end gap-[90px] pt-[90px] pb-[86px] max-[1100px]:grid-cols-[1fr_.72fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:py-[58px]">
//           <div>
//             <div className="flex items-center text-[10px] font-extrabold tracking-[.2em] text-[#5f686e] before:mr-[13px] before:h-0.5 before:w-9 before:bg-brand-red before:content-['']">
//               CONTACT{" "}
//               <span className="ml-[10px] text-[#9aa0a4] max-[760px]:hidden">
//                 / COMPLEX RECRUITMENT
//               </span>
//             </div>
//             <h1 className="m-0 mt-[34px] text-[clamp(60px,6vw,100px)] leading-[.9] font-bold tracking-[-.065em] max-[760px]:text-[52px]">
//               Start with the right
//               <br />
//               <em className="not-italic text-brand-grey">
//                 conversation<span className="text-brand-red">.</span>
//               </em>
//             </h1>
//           </div>
//           <div className="pb-2 max-[760px]:mt-[34px]">
//             <p className="mt-0 mb-[38px] max-w-[520px] text-base leading-[1.7] text-[#606a70]">
//               Whether you need staff, you’re looking for work, or you have a
//               general question, choose the route that gets you to the right team
//               fastest.
//             </p>
//             <a
//               href="tel:02039237888"
//               className="group grid grid-cols-[1fr_auto] items-end gap-x-5 gap-y-1.5 border-y border-line py-[22px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
//             >
//               <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">
//                 CALL COMPLEX
//               </span>
//               <strong className="col-start-1 text-[28px] tracking-[-.035em]">
//                 0203 923 7888
//               </strong>
//               <ArrowIcon className="col-start-2 row-span-2 row-start-1 text-[25px] transition-transform duration-300 group-hover:translate-x-[7px] group-hover:-translate-y-[7px] group-focus-visible:translate-x-[7px] group-focus-visible:-translate-y-[7px]" />
//             </a>
//           </div>
//         </Container>
//       </section>

//       <section className="bg-surface py-[120px] max-[760px]:py-[88px]">
//         <Container>
//           <SectionLabel>HOW CAN WE HELP?</SectionLabel>
//         </Container>
//         <Container className="contactCtaRow mt-[45px] grid grid-cols-3 max-[1100px]:grid-cols-1">
//           <ContactPathCard
//             href="/request-staff"
//             eyebrow="01 · EMPLOYERS"
//             title="I need staff."
//             body="Tell us the role, location, numbers and timing so the team can understand the requirement quickly."
//             cta="Request Staff"
//             tone="red"
//           />
//           <ContactPathCard
//             href="/jobs"
//             eyebrow="02 · CANDIDATES"
//             title="I’m looking for work."
//             body="Browse current jobs or register your interest if nothing suitable is live right now."
//             cta="Find Jobs"
//             tone="dark"
//           />
//           <ContactPathCard
//             href="#general-contact"
//             eyebrow="03 · GENERAL"
//             title="I have a question."
//             body="Accounts, HR, timesheets or anything else — use the contact details below."
//             cta="Contact Complex"
//             tone="grey"
//             arrow="down-right"
//           />
//         </Container>
//       </section>

//       <section
//         className="bg-white py-[130px] max-[760px]:py-[88px]"
//         id="general-contact"
//       >
//         <Container className="grid grid-cols-[.72fr_1.28fr] gap-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px] max-[760px]:block">
//           <div>
//             <SectionLabel>HEAD OFFICE</SectionLabel>
//             <h2 className="section-heading my-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">
//               North London.
//               <br />
//               <em className="not-italic text-brand-red">Easy to reach.</em>
//             </h2>
//             <p className="mb-8 text-[15px] leading-[1.8] text-[#606b71]">
//               Edmonton office
//               <br />
//               Unit 2 Georgiou Business Park
//               <br />
//               Second Avenue, London, N18 2PG
//               <br />
//               <br />
//               Park Royal office
//               <br />
//               <span className="text-sm">
//                 Supporting clients and candidates across London and nationwide.
//               </span>
//             </p>
//             <ButtonLink href="tel:02039237888" variant="dark">
//               0203 923 7888
//             </ButtonLink>
//           </div>
//           <div className="border-t border-line max-[760px]:mt-[50px]">
//             {departments.map(([label, email], i) => (
//               <a
//                 key={email}
//                 href={`mailto:${email}`}
//                 className="group grid min-h-[110px] grid-cols-[210px_1fr_auto] items-center gap-[30px] border-b border-line px-2 transition-[background-color,padding] duration-400 ease-complex hover:bg-surface hover:pl-[22px] focus-visible:bg-surface focus-visible:pl-[22px] focus-visible:outline-2 focus-visible:outline-brand-red max-[760px]:min-h-[88px] max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-x-5 max-[760px]:gap-y-2 max-[760px]:py-[17px]"
//               >
//                 <span className="text-[8px] font-extrabold tracking-[.15em] text-[#828b90] max-[760px]:col-start-1">
//                   {String(i + 1).padStart(2, "0")} · {label}
//                 </span>
//                 <strong className="text-lg tracking-[-.02em] max-[760px]:col-start-1 max-[760px]:text-sm max-[760px]:[overflow-wrap:anywhere]">
//                   {email}
//                 </strong>
//                 <ArrowIcon className="text-[21px] text-brand-red transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-focus-visible:translate-x-1.5 group-focus-visible:-translate-y-1.5 max-[760px]:col-start-2 max-[760px]:row-span-2 max-[760px]:row-start-1" />
//               </a>
//             ))}
//           </div>
//         </Container>
//       </section>

//       <section className="bg-surface py-[130px] max-[760px]:py-[88px]">
//         <Container className="grid grid-cols-[.72fr_1.28fr] items-start gap-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px] max-[760px]:block">
//           <div>
//             <SectionLabel>GENERAL ENQUIRY</SectionLabel>
//             <h2 className="section-heading my-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">
//               Not sure where
//               <br />
//               <em className="not-italic text-brand-red">to start?</em>
//             </h2>
//             <p className="max-w-[440px] text-sm leading-[1.7] text-[#69747a]">
//               Send a short message and we’ll route it to the appropriate team.
//             </p>
//           </div>
//           <form className="grid grid-cols-2 gap-x-5 gap-y-6 max-[760px]:mt-[50px] max-[760px]:grid-cols-1">
//             <label className={labelClass}>
//               <span>Your name</span>
//               <input className={fieldClass} placeholder="Full name" />
//             </label>
//             <label className={labelClass}>
//               <span>Email</span>
//               <input
//                 className={fieldClass}
//                 type="email"
//                 placeholder="name@email.com"
//               />
//             </label>
//             <label className={labelClass}>
//               <span>Phone</span>
//               <input
//                 className={fieldClass}
//                 type="tel"
//                 placeholder="Phone number"
//               />
//             </label>
//             <label className={labelClass}>
//               <span>Enquiry type</span>
//               <select className={fieldClass} defaultValue="">
//                 <option value="" disabled>
//                   Select
//                 </option>
//                 <option>General</option>
//                 <option>Accounts</option>
//                 <option>HR</option>
//                 <option>Timesheets</option>
//               </select>
//             </label>
//             <label
//               className={`${labelClass} col-span-full max-[760px]:col-auto`}
//             >
//               <span>Message</span>
//               <textarea
//                 className={fieldClass}
//                 rows={6}
//                 placeholder="How can we help?"
//               />
//             </label>
//             <button
//               className="group inline-flex min-h-12 items-center justify-between justify-self-start border-0 bg-brand-red px-5 text-[13px] font-bold tracking-[.02em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-grey focus-visible:-translate-y-0.5 focus-visible:bg-brand-grey focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
//               type="button"
//             >
//               Send Enquiry{" "}
//               <ArrowIcon className="ml-6 text-lg transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
//             </button>
//           </form>
//         </Container>
//       </section>

//       <Footer variant="simple" />
//     </main>
//   );
// }
