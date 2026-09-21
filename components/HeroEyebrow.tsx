import type { ReactNode } from 'react';

// Typography and red rule match the Home hero; animation stays with Home.
export function HeroEyebrow({ children, detail, light = false }: { children: ReactNode; detail?: ReactNode; light?: boolean }) {
  return <div data-hero-eyebrow className={`mb-[30px] text-[10px] font-extrabold uppercase leading-[1.5] tracking-[.2em] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red ${light ? 'text-[#5f686e]' : 'text-white'}`}>
    {children}{detail && <span className={`ml-2.5 max-[560px]:hidden ${light ? 'text-[#9aa0a4]' : 'text-[#b5b8ba]'}`}>/ {detail}</span>}
  </div>;
}
