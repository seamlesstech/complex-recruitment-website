// 'use client';

// import { useState } from 'react';
// import { Container } from './layout/Container';

// const navItems = [
//   ['Employers', '/employers'], ['Candidates', '/candidates'], ['Jobs', '/jobs'],
//   ['Compliance & Vetting', '/compliance'], ['About', '/about'], ['Contact', '/contact'],
// ] as const;

// const sectorItems = [['Driving & Transport', '/sectors/driving'], ['Industrial & Warehouse', '/sectors/industrial'], ['Construction & Engineering', '/sectors/construction'], ['Business & Operational Support', '/sectors/business-operational-support']] as const;
// const complianceItems = [['Compliance & Vetting', '/compliance'], ['Driver Assessments', '/training/driver-assessments'], ['CPC Training', '/training/cpc']] as const;

// type HeaderProps = {
//   active?: string;
//   theme?: 'dark' | 'light';
// };

// function DropdownChevron({ open }: { open: boolean }) {
//   return <span className={`inline-flex h-2.5 w-2.5 items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true"><svg className="block h-[6px] w-[10px]" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
// }

// export function Header({ active, theme = 'dark' }: HeaderProps) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
//   const [complianceOpen, setComplianceOpen] = useState(false);
//   const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false);
//   const isLight = theme === 'light';
//   const linkClass = (label: string) => `relative flex h-full items-center px-1.5 opacity-80 outline-none transition-[opacity,color] duration-200 after:absolute after:bottom-[5px] after:left-1.5 after:right-1.5 after:h-[3px] after:origin-center after:scale-x-0 after:rounded-full after:bg-brand-red after:transition-transform after:duration-300 after:ease-complex hover:opacity-100 hover:after:scale-x-100 focus-visible:opacity-100 focus-visible:after:scale-x-100 ${active === label ? 'opacity-100 after:scale-x-100' : ''}`;

//   return (
//     <header className={`relative z-[6] h-[92px] max-[760px]:h-[76px] ${isLight ? 'text-ink' : 'text-white'}`}>
//       <Container gutter="wide" className={`grid h-full grid-cols-[225px_1fr_auto] items-center gap-7 border-b max-[1100px]:grid-cols-[1fr_auto_auto] max-[760px]:grid-cols-[1fr_auto] ${isLight ? 'border-ink/15' : 'border-white/20'}`}>
//         <a className="block w-[178px] outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[1100px]:w-[158px] max-[760px]:w-[145px]" href="/" aria-label="Complex Recruitment home">
//           <img className="block h-auto w-full" src={isLight ? '/complex-logo.png' : '/complex-logo-white.png'} alt="Complex Recruitment" />
//         </a>
//         <nav aria-label="Primary navigation" className="relative isolate flex h-[58px] items-center justify-center gap-5 rounded-full px-2.5 text-[13px] before:absolute before:inset-0 before:-z-[1] before:scale-[.94] before:-translate-y-[3px] before:rounded-[inherit] before:border before:border-white/[.06] before:bg-[rgba(5,6,7,.96)] before:opacity-0 before:shadow-[0_18px_42px_rgba(0,0,0,.26)] before:transition-[opacity,transform] before:duration-300 before:ease-complex hover:before:translate-y-0 hover:before:scale-100 hover:before:opacity-100 hover:text-white focus-within:before:translate-y-0 focus-within:before:scale-100 focus-within:before:opacity-100 focus-within:text-white max-[1100px]:hidden">
//           {navItems.slice(0, 2).map(([label, href]) => <a key={label} className={linkClass(label)} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a>)}
//           <div className="relative inline-flex h-full items-center gap-0.5" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)} onKeyDown={(event) => { if (event.key === 'Escape') setSectorsOpen(false); }}>
//             <a className={linkClass('Sectors')} href="/sectors" aria-current={active === 'Sectors' ? 'page' : undefined}>Sectors</a>
//             <button type="button" className="inline-flex h-8 w-5 items-center justify-center border-0 bg-transparent text-current outline-none focus-visible:ring-2 focus-visible:ring-brand-red" aria-label="Toggle sectors menu" aria-expanded={sectorsOpen} aria-controls="desktop-sectors-menu" onClick={() => setSectorsOpen((open) => !open)}><DropdownChevron open={sectorsOpen} /></button>
//             <div id="desktop-sectors-menu" className={`absolute left-1/2 top-[calc(100%-2px)] w-[250px] -translate-x-1/2 pt-3 transition duration-200 ${sectorsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
//               <div className="border border-white/10 bg-ink p-2 text-white shadow-[0_18px_42px_rgba(0,0,0,.28)]">{sectorItems.map(([label, href]) => <a key={href} href={href} className="flex min-h-10 items-center border-b border-white/10 px-3 text-xs text-white/75 outline-none transition-colors last:border-b-0 hover:bg-white/[.06] hover:text-white focus-visible:bg-white/[.06] focus-visible:text-white">{label}</a>)}</div>
//             </div>
//           </div>
//           {navItems.slice(2).map(([label, href]) => label === 'Compliance & Vetting' ? <div key={label} className="relative inline-flex h-full items-center gap-0.5" onMouseEnter={() => setComplianceOpen(true)} onMouseLeave={() => setComplianceOpen(false)} onKeyDown={(event) => { if (event.key === 'Escape') setComplianceOpen(false); }}><a className={linkClass(label)} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a><button type="button" className="inline-flex h-8 w-5 items-center justify-center border-0 bg-transparent text-current outline-none focus-visible:ring-2 focus-visible:ring-brand-red" aria-label="Toggle compliance and vetting menu" aria-expanded={complianceOpen} aria-controls="desktop-compliance-menu" onClick={() => setComplianceOpen((open) => !open)}><DropdownChevron open={complianceOpen} /></button><div id="desktop-compliance-menu" className={`absolute left-1/2 top-[calc(100%-2px)] w-[220px] -translate-x-1/2 pt-3 transition duration-200 ${complianceOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}><div className="border border-white/10 bg-ink p-2 text-white shadow-[0_18px_42px_rgba(0,0,0,.28)]">{complianceItems.map(([itemLabel, itemHref]) => <a key={itemHref} href={itemHref} className="flex min-h-10 items-center border-b border-white/10 px-3 text-xs text-white/75 outline-none transition-colors last:border-b-0 hover:bg-white/[.06] hover:text-white focus-visible:bg-white/[.06] focus-visible:text-white">{itemLabel}</a>)}</div></div></div> : <a key={label} className={linkClass(label)} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a>)}
//         </nav>
//         <a className={`flex flex-col items-end gap-[5px] whitespace-nowrap border-l pl-5 outline-none transition-colors hover:[&_strong]:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red max-[760px]:hidden ${isLight ? 'border-ink/20' : 'border-white/25'}`} href="tel:02039237888" aria-label="Call Complex Recruitment on 0203 923 7888">
//           <span className={`text-[8px] font-extrabold tracking-[.19em] ${isLight ? 'text-[#7a8388]' : 'text-white/65'}`}>CALL COMPLEX</span>
//           <strong className="text-[15px] tracking-[.01em] transition-colors">0203 923 7888</strong>
//         </a>
//         <button type="button" className="hidden h-11 w-11 place-items-center border-0 bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[1100px]:grid" aria-label={`${menuOpen ? 'Close' : 'Open'} menu`} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
//           <span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
//           <span aria-hidden="true" className="relative block h-4 w-6"><i className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} /><i className={`absolute bottom-1 left-0 block h-0.5 w-6 bg-current transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} /></span>
//         </button>
//       </Container>
//       {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-0 top-full w-full border-t border-white/10 bg-ink px-4 py-4 text-white shadow-[0_22px_45px_rgba(0,0,0,.3)] min-[1101px]:hidden">
//         {navItems.slice(0, 2).map(([label, href]) => <a key={label} href={href} aria-current={active === label ? 'page' : undefined} className={`flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-sm outline-none focus-visible:bg-white/10 ${active === label ? 'text-white' : 'text-white/80'}`} onClick={() => setMenuOpen(false)}><span>{label}</span>{active === label && <i className="h-1.5 w-1.5 rounded-full bg-brand-red" />}</a>)}
//         <div className="border-b border-white/10">
//           <div className="grid grid-cols-[1fr_48px]"><a href="/sectors" aria-current={active === 'Sectors' ? 'page' : undefined} className={`flex min-h-12 items-center px-2 text-sm outline-none focus-visible:bg-white/10 ${active === 'Sectors' ? 'text-white' : 'text-white/80'}`} onClick={() => setMenuOpen(false)}>Sectors</a><button type="button" className="grid min-h-12 place-items-center border-0 border-l border-white/10 bg-transparent text-white outline-none focus-visible:bg-white/10" aria-label="Toggle sectors submenu" aria-expanded={mobileSectorsOpen} aria-controls="mobile-sectors-menu" onClick={() => setMobileSectorsOpen((open) => !open)}><span className={`transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`}>⌄</span></button></div>
//           <div id="mobile-sectors-menu" className={`grid overflow-hidden bg-white/[.04] transition-[grid-template-rows] duration-300 ${mobileSectorsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="min-h-0">{sectorItems.map(([label, href]) => <a key={href} href={href} className="flex min-h-11 items-center border-t border-white/10 pl-6 pr-2 text-[13px] text-white/70 outline-none focus-visible:bg-white/10 focus-visible:text-white" onClick={() => setMenuOpen(false)}>{label}</a>)}</div></div>
//         </div>
//         {navItems.slice(2).map(([label, href]) => label === 'Compliance & Vetting' ? <div key={label} className="border-b border-white/10"><div className="grid grid-cols-[1fr_48px]"><a href={href} aria-current={active === label ? 'page' : undefined} className={`flex min-h-12 items-center px-2 text-sm outline-none focus-visible:bg-white/10 ${active === label ? 'text-white' : 'text-white/80'}`} onClick={() => setMenuOpen(false)}>{label}</a><button type="button" className="grid min-h-12 place-items-center border-0 border-l border-white/10 bg-transparent text-white outline-none focus-visible:bg-white/10" aria-label="Toggle compliance and vetting submenu" aria-expanded={mobileComplianceOpen} aria-controls="mobile-compliance-menu" onClick={() => setMobileComplianceOpen((open) => !open)}><span className={`transition-transform ${mobileComplianceOpen ? 'rotate-180' : ''}`}>⌄</span></button></div><div id="mobile-compliance-menu" className={`grid overflow-hidden bg-white/[.04] transition-[grid-template-rows] duration-300 ${mobileComplianceOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="min-h-0">{complianceItems.map(([itemLabel, itemHref]) => <a key={itemHref} href={itemHref} className="flex min-h-11 items-center border-t border-white/10 pl-6 pr-2 text-[13px] text-white/70 outline-none focus-visible:bg-white/10 focus-visible:text-white" onClick={() => setMenuOpen(false)}>{itemLabel}</a>)}</div></div></div> : <a key={label} href={href} aria-current={active === label ? 'page' : undefined} className={`flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-sm outline-none focus-visible:bg-white/10 ${active === label ? 'text-white' : 'text-white/80'}`} onClick={() => setMenuOpen(false)}><span>{label}</span>{active === label && <i className="h-1.5 w-1.5 rounded-full bg-brand-red" />}</a>)}
//         <a href="tel:02039237888" className="mt-4 flex min-h-14 items-center justify-between bg-brand-red px-4 font-bold outline-none focus-visible:ring-2 focus-visible:ring-white"><span className="text-[9px] tracking-[.17em] text-white/75">CALL COMPLEX</span><strong>0203 923 7888</strong></a>
//       </nav>}
//     </header>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./layout/Container";

const navItems = [
  ["Home", "/"],
  ["Employers", "/employers"],
  ["Candidates", "/candidates"],
  ["Jobs", "/jobs"],
  ["Compliance & Vetting", "/compliance"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const sectorItems = [
  ["Driving & Transport", "/sectors/driving"],
  ["Industrial & Warehouse", "/sectors/industrial"],
  ["Construction & Engineering", "/sectors/construction"],
  ["Business & Operational Support", "/sectors/business-operational-support"],
] as const;

const complianceItems = [
  ["Compliance & Vetting", "/compliance"],
  ["Driver Assessments", "/training/driver-assessments"],
  ["CPC Training", "/training/cpc"],
] as const;

type HeaderProps = {
  active?: string;
  theme?: "dark" | "light";
};

type DesktopNavigationProps = {
  active?: string;
  idPrefix: string;
  pill?: boolean;
  ariaLabel?: string;
};

function DropdownChevron({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-flex h-2.5 w-2.5 items-center justify-center transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg className="block h-[6px] w-[10px]" viewBox="0 0 10 6" fill="none">
        <path
          d="M1 1l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ComplexMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`block ${className}`}>
      <img
        src="/complex-mark.png"
        alt=""
        draggable="false"
        className="block h-full w-full object-contain"
      />
    </span>
  );
}

function DesktopNavigation({
  active,
  idPrefix,
  pill = true,
  ariaLabel = "Primary navigation",
}: DesktopNavigationProps) {
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

  const [pillVisible, setPillVisible] = useState(false);
  const [pillClip, setPillClip] = useState(
    "inset(0px 50% 0px 50% round 999px)",
  );

  const navRef = useRef<HTMLElement | null>(null);

  const lastOriginClip = useRef("inset(0px 50% 0px 50% round 999px)");

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fullPill = "inset(0px 0px 0px 0px round 999px)";

  const revealPillFrom = (element: HTMLElement) => {
    if (!pill || !navRef.current) return;

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }

    const navRect = navRef.current.getBoundingClientRect();

    const itemRect = element.getBoundingClientRect();

    /*
     * A few extra pixels around the hovered item mean
     * the starting capsule doesn't feel glued to the text.
     */
    const left = Math.max(0, itemRect.left - navRect.left - 5);

    const right = Math.max(0, navRect.right - itemRect.right - 5);

    const origin = `inset(0px ${right}px 0px ${left}px round 999px)`;

    lastOriginClip.current = origin;

    /*
     * If the pill is already open, don't restart the
     * whole animation as the cursor moves between links.
     */
    if (pillVisible) {
      setPillVisible(true);
      setPillClip(fullPill);
      return;
    }

    /*
     * Paint the small capsule behind the hovered item
     * first, then expand it on the next rendered frame.
     */
    setPillClip(origin);
    setPillVisible(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPillClip(fullPill);
      });
    });
  };

  const hidePill = () => {
    if (!pill) return;

    /*
     * Collapse back toward the last hovered navigation
     * item before disappearing.
     */
    setPillClip(lastOriginClip.current);

    hideTimer.current = setTimeout(() => {
      setPillVisible(false);
    }, 280);
  };

  const linkClass = (label: string) =>
    `relative flex h-full items-center whitespace-nowrap px-2.5 opacity-80 outline-none
    transition-[opacity,color,transform] duration-200 ease-complex
    after:absolute after:bottom-[3px] after:left-2.5 after:right-2.5
    after:h-[3px] after:origin-center after:scale-x-0
    after:rounded-full after:bg-brand-red
    after:transition-transform after:duration-300 after:ease-complex
    hover:-translate-y-[1px] hover:opacity-100 hover:after:scale-x-100
    focus-visible:opacity-100 focus-visible:after:scale-x-100
    ${active === label ? "opacity-100 after:scale-x-100" : ""}`;

  const navigationClass = pill
    ? `relative isolate flex h-[52px] w-fit items-center justify-center
       justify-self-center gap-3 max-[1350px]:gap-1 rounded-full px-[22px] text-[13px]
       transition-colors duration-200 ease-complex
       ${pillVisible ? "text-white" : ""}`
    : `relative flex h-[52px] w-fit items-center justify-center
       justify-self-center gap-3 max-[1350px]:gap-1 px-1.5 text-[13px] text-white`;

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className={navigationClass}
      onMouseLeave={hidePill}
    >
      {/* Animated nav pill */}
      {pill && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-[1]
            rounded-full border border-white/[.06]
            bg-[rgba(5,6,7,.96)]
            shadow-[0_16px_38px_rgba(0,0,0,.24)]
            transition-opacity duration-150
            ${pillVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            clipPath: pillClip,
            transitionProperty: "clip-path, opacity",
            transitionDuration: "430ms, 150ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1), ease",
            willChange: "clip-path, opacity",
          }}
        />
      )}

      {navItems.slice(0, 3).map(([label, href]) => (
        <a
          key={label}
          className={linkClass(label)}
          href={href}
          aria-current={active === label ? "page" : undefined}
          onMouseEnter={(event) => revealPillFrom(event.currentTarget)}
          onFocus={(event) => revealPillFrom(event.currentTarget)}
        >
          {label}
        </a>
      ))}

      {/* Sectors */}
      <div
        className="relative inline-flex h-full items-center gap-0"
        onMouseEnter={(event) => {
          revealPillFrom(event.currentTarget);
          setSectorsOpen(true);
        }}
        onMouseLeave={() => setSectorsOpen(false)}
        onFocusCapture={(event) => {
          revealPillFrom(event.currentTarget);
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setSectorsOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setSectorsOpen(false);
          }
        }}
      >
        <a
          className={linkClass("Sectors")}
          href="/sectors"
          aria-current={active === "Sectors" ? "page" : undefined}
        >
          Sectors
        </a>

        <button
          type="button"
          className="inline-flex h-8 w-5 items-center justify-center border-0 bg-transparent text-current outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          aria-label="Toggle sectors menu"
          aria-expanded={sectorsOpen}
          aria-controls={`${idPrefix}-sectors-menu`}
          onClick={() => setSectorsOpen((open) => !open)}
        >
          <DropdownChevron open={sectorsOpen} />
        </button>

        <div
          id={`${idPrefix}-sectors-menu`}
          className={`absolute left-1/2 top-[calc(100%-2px)] w-[250px]
            -translate-x-1/2 pt-3 transition duration-200
            ${
              sectorsOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-1 opacity-0"
            }`}
        >
          <div className="border border-white/10 bg-ink p-2 text-white shadow-[0_18px_42px_rgba(0,0,0,.28)]">
            {sectorItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="flex min-h-10 items-center border-b border-white/10 px-3 text-xs text-white/75 outline-none transition-colors last:border-b-0 hover:bg-white/[.06] hover:text-white focus-visible:bg-white/[.06] focus-visible:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {navItems.slice(3).map(([label, href]) =>
        label === "Compliance & Vetting" ? (
          <div
            key={label}
            className="relative inline-flex h-full items-center gap-0"
            onMouseEnter={(event) => {
              revealPillFrom(event.currentTarget);

              setComplianceOpen(true);
            }}
            onMouseLeave={() => setComplianceOpen(false)}
            onFocusCapture={(event) => {
              revealPillFrom(event.currentTarget);
            }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setComplianceOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setComplianceOpen(false);
              }
            }}
          >
            <a
              className={linkClass(label)}
              href={href}
              aria-current={active === label ? "page" : undefined}
            >
              {label}
            </a>

            <button
              type="button"
              className="inline-flex h-8 w-5 items-center justify-center border-0 bg-transparent text-current outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-label="Toggle compliance and vetting menu"
              aria-expanded={complianceOpen}
              aria-controls={`${idPrefix}-compliance-menu`}
              onClick={() => setComplianceOpen((open) => !open)}
            >
              <DropdownChevron open={complianceOpen} />
            </button>

            <div
              id={`${idPrefix}-compliance-menu`}
              className={`absolute left-1/2 top-[calc(100%-2px)] w-[220px]
                  -translate-x-1/2 pt-3 transition duration-200
                  ${
                    complianceOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
            >
              <div className="border border-white/10 bg-ink p-2 text-white shadow-[0_18px_42px_rgba(0,0,0,.28)]">
                {complianceItems.map(([itemLabel, itemHref]) => (
                  <a
                    key={itemHref}
                    href={itemHref}
                    className="flex min-h-10 items-center border-b border-white/10 px-3 text-xs text-white/75 outline-none transition-colors last:border-b-0 hover:bg-white/[.06] hover:text-white focus-visible:bg-white/[.06] focus-visible:text-white"
                  >
                    {itemLabel}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <a
            key={label}
            className={linkClass(label)}
            href={href}
            aria-current={active === label ? "page" : undefined}
            onMouseEnter={(event) => revealPillFrom(event.currentTarget)}
            onFocus={(event) => revealPillFrom(event.currentTarget)}
          >
            {label}
          </a>
        ),
      )}
    </nav>
  );
}

export function Header({ active, theme = "dark" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [floatingOpen, setFloatingOpen] = useState(false);

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 110;

      setScrolled(nextScrolled);

      if (!nextScrolled) {
        setFloatingOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Standard header */}
      <header
        className={`relative z-[6] h-[92px] max-[760px]:h-[76px] ${
          isLight ? "text-ink" : "text-white"
        }`}
      >
        <Container
          gutter="wide"
          className={`grid h-full grid-cols-[225px_1fr_auto] items-center gap-7 max-[1350px]:grid-cols-[178px_1fr_auto] max-[1350px]:gap-4 border-b max-[1101px]:grid-cols-[1fr_auto_auto] max-[760px]:grid-cols-[1fr_auto] ${
            isLight ? "border-ink/15" : "border-white/20"
          }`}
        >
          <a
            className="block w-[178px] outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[1101px]:w-[158px] max-[760px]:w-[145px]"
            href="/"
            aria-label="Complex Recruitment home"
          >
            <img
              className="block h-auto w-full"
              src={isLight ? "/complex-logo.png" : "/complex-logo-white.png"}
              alt="Complex Recruitment"
            />
          </a>

          <div className="flex justify-center max-[1101px]:hidden">
            <DesktopNavigation active={active} idPrefix="top" pill />
          </div>

          <a
            className={`flex flex-col items-end gap-[5px] whitespace-nowrap border-l pl-5 outline-none transition-colors hover:[&_strong]:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red max-[760px]:hidden ${
              isLight ? "border-ink/20" : "border-white/25"
            }`}
            href="tel:02039237888"
            aria-label="Call Complex Recruitment on 0203 923 7888"
          >
            <span
              className={`text-[8px] font-extrabold tracking-[.19em] ${
                isLight ? "text-[#7a8388]" : "text-white/65"
              }`}
            >
              CALL COMPLEX
            </span>

            <strong className="text-[15px] tracking-[.01em] transition-colors">
              0203 923 7888
            </strong>
          </a>

          <button
            type="button"
            className="hidden h-11 w-11 place-items-center border-0 bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-red max-[1101px]:grid"
            aria-label={`${menuOpen ? "Close" : "Open"} menu`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>

            <span aria-hidden="true" className="relative block h-4 w-6">
              <i
                className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transition-transform ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <i
                className={`absolute bottom-1 left-0 block h-0.5 w-6 bg-current transition-transform ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </Container>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 top-full w-full border-t border-white/10 bg-ink px-4 py-4 text-white shadow-[0_22px_45px_rgba(0,0,0,.3)] min-[1101px]:hidden"
          >
            {navItems.slice(0, 3).map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-current={active === label ? "page" : undefined}
                className={`flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-sm outline-none focus-visible:bg-white/10 ${
                  active === label ? "text-white" : "text-white/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{label}</span>

                {active === label && (
                  <i className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                )}
              </a>
            ))}

            {/* Mobile sectors */}
            <div className="border-b border-white/10">
              <div className="grid grid-cols-[1fr_48px]">
                <a
                  href="/sectors"
                  aria-current={active === "Sectors" ? "page" : undefined}
                  className={`flex min-h-12 items-center px-2 text-sm outline-none focus-visible:bg-white/10 ${
                    active === "Sectors" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Sectors
                </a>

                <button
                  type="button"
                  className="grid min-h-12 place-items-center border-0 border-l border-white/10 bg-transparent text-white outline-none focus-visible:bg-white/10"
                  aria-label="Toggle sectors submenu"
                  aria-expanded={mobileSectorsOpen}
                  aria-controls="mobile-sectors-menu"
                  onClick={() => setMobileSectorsOpen((open) => !open)}
                >
                  <span
                    className={`transition-transform ${
                      mobileSectorsOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
              </div>

              <div
                id="mobile-sectors-menu"
                className={`grid overflow-hidden bg-white/[.04] transition-[grid-template-rows] duration-300 ${
                  mobileSectorsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  {sectorItems.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="flex min-h-11 items-center border-t border-white/10 pl-6 pr-2 text-[13px] text-white/70 outline-none focus-visible:bg-white/10 focus-visible:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(3).map(([label, href]) =>
              label === "Compliance & Vetting" ? (
                <div key={label} className="border-b border-white/10">
                  <div className="grid grid-cols-[1fr_48px]">
                    <a
                      href={href}
                      aria-current={active === label ? "page" : undefined}
                      className={`flex min-h-12 items-center px-2 text-sm outline-none focus-visible:bg-white/10 ${
                        active === label ? "text-white" : "text-white/80"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>

                    <button
                      type="button"
                      className="grid min-h-12 place-items-center border-0 border-l border-white/10 bg-transparent text-white outline-none focus-visible:bg-white/10"
                      aria-label="Toggle compliance and vetting submenu"
                      aria-expanded={mobileComplianceOpen}
                      aria-controls="mobile-compliance-menu"
                      onClick={() => setMobileComplianceOpen((open) => !open)}
                    >
                      <span
                        className={`transition-transform ${
                          mobileComplianceOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </button>
                  </div>

                  <div
                    id="mobile-compliance-menu"
                    className={`grid overflow-hidden bg-white/[.04] transition-[grid-template-rows] duration-300 ${
                      mobileComplianceOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      {complianceItems.map(([itemLabel, itemHref]) => (
                        <a
                          key={itemHref}
                          href={itemHref}
                          className="flex min-h-11 items-center border-t border-white/10 pl-6 pr-2 text-[13px] text-white/70 outline-none focus-visible:bg-white/10 focus-visible:text-white"
                          onClick={() => setMenuOpen(false)}
                        >
                          {itemLabel}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  aria-current={active === label ? "page" : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-sm outline-none focus-visible:bg-white/10 ${
                    active === label ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{label}</span>

                  {active === label && (
                    <i className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  )}
                </a>
              ),
            )}

            <a
              href="tel:02039237888"
              className="mt-4 flex min-h-14 items-center justify-between bg-brand-red px-4 font-bold outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="text-[9px] tracking-[.17em] text-white/75">
                CALL COMPLEX
              </span>

              <strong>0203 923 7888</strong>
            </a>
          </nav>
        )}
      </header>

      {/* Floating desktop navigation */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-[50] hidden h-[72px] transition-opacity duration-200 min-[1101px]:block ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* One continuous morphing surface */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink shadow-[0_14px_42px_rgba(0,0,0,.22)]"
          style={{
            clipPath: floatingOpen
              ? "inset(0px 0px 0px 0px round 0px)"
              : "inset(16px calc(100vw - clamp(84px, 7.8125vw, 100px) - 62px) 8px clamp(84px, 7.8125vw, 100px) round 999px)",
            transition: "clip-path 460ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "clip-path",
          }}
        />

        {/* Collapsed ellipse */}
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={floatingOpen}
          onMouseEnter={() => setFloatingOpen(true)}
          onFocus={() => setFloatingOpen(true)}
          onClick={() => setFloatingOpen((open) => !open)}
          className={`pointer-events-auto absolute top-4 grid h-[48px] w-[62px] place-items-center rounded-full border-0 bg-transparent text-white outline-none transition-[opacity,transform] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${
            floatingOpen
              ? "pointer-events-none scale-90 opacity-0"
              : "scale-100 opacity-100"
          }`}
          style={{
            left: "clamp(84px, 7.8125vw, 100px)",
          }}
        >
          <ComplexMark className="h-[23px] w-[23px]" />
        </button>

        {/* Expanded content */}
        <div
          onMouseEnter={() => setFloatingOpen(true)}
          onMouseLeave={() => setFloatingOpen(false)}
          onFocusCapture={() => setFloatingOpen(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFloatingOpen(false);
            }
          }}
          className={`absolute inset-0 transition-[opacity,transform] duration-[260ms] ease-complex ${
            floatingOpen
              ? "pointer-events-auto translate-y-0 opacity-100 delay-75"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <Container
            gutter="wide"
            className="grid h-full grid-cols-[225px_1fr_auto] items-center gap-7 max-[1350px]:grid-cols-[178px_1fr_auto] max-[1350px]:gap-4"
          >
            <a
              className="block w-[158px] outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              href="/"
              aria-label="Complex Recruitment home"
            >
              <img
                className="block h-auto w-full"
                src="/complex-logo-white.png"
                alt="Complex Recruitment"
              />
            </a>

            <DesktopNavigation
              active={active}
              idPrefix="floating"
              pill={false}
              ariaLabel="Floating primary navigation"
            />

            <a
              className="flex flex-col items-end gap-[4px] whitespace-nowrap border-l border-white/20 pl-5 outline-none transition-colors hover:[&_strong]:text-brand-red focus-visible:ring-2 focus-visible:ring-brand-red"
              href="tel:02039237888"
              aria-label="Call Complex Recruitment on 0203 923 7888"
            >
              <span className="text-[8px] font-extrabold tracking-[.19em] text-white/60">
                CALL COMPLEX
              </span>

              <strong className="text-[14px] tracking-[.01em] transition-colors">
                0203 923 7888
              </strong>
            </a>
          </Container>
        </div>
      </div>
    </>
  );
}
