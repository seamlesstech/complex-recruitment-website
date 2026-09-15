'use client';

import { useId, useState } from 'react';
import { ArrowIcon } from '../ui/ArrowIcon';

export type SectorRoleGroup = { key: string; label: string; eyebrow: string; roles: readonly string[] };

export function SectorRoleExplorer({ groups, label }: { groups: readonly SectorRoleGroup[]; label: string }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = groups[active];

  function select(index: number) {
    setActive(index);
  }

  return <div className="mt-[70px] grid min-h-[580px] grid-cols-[.42fr_1fr] border border-line bg-white max-[1180px]:grid-cols-[.48fr_1fr] max-[920px]:grid-cols-1">
    <div className="flex flex-col border-r border-line max-[920px]:grid max-[920px]:grid-cols-5 max-[920px]:border-b max-[920px]:border-r-0 max-[640px]:grid-cols-2" role="tablist" aria-label={label}>
      {groups.map((group, index) => <button key={group.key} id={`${id}-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1} onClick={() => select(index)} onKeyDown={(event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
        event.preventDefault();
        const next = (active + (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : groups.length - 1)) % groups.length;
        select(next);
        document.getElementById(`${id}-tab-${next}`)?.focus();
      }} className={`group relative flex flex-1 cursor-pointer items-center gap-[18px] border-0 border-b border-line px-7 text-left text-[17px] font-extrabold tracking-[-.02em] outline-none transition-[background,color,padding] duration-300 ease-complex after:absolute after:inset-y-0 after:left-0 after:w-1 after:origin-center after:bg-brand-red after:transition-transform after:duration-300 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[920px]:min-h-[84px] max-[920px]:border-b-0 max-[920px]:border-r max-[920px]:p-4 max-[920px]:text-xs max-[920px]:block max-[640px]:min-h-[76px] ${active === index ? 'bg-ink pl-9 text-white after:scale-y-100 max-[920px]:pl-4' : 'bg-white after:scale-y-0 hover:bg-surface hover:pl-9 max-[920px]:hover:pl-4'}`}><span className={`text-[8px] font-extrabold tracking-[.12em] max-[920px]:mb-2 max-[920px]:block ${active === index ? 'text-brand-red' : 'text-[#92999d]'}`}>{String(index + 1).padStart(2, '0')}</span>{group.label}</button>)}
    </div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="min-h-[580px] px-[54px] py-12 max-[640px]:px-6 max-[640px]:py-8">
      <span className="text-[8px] font-extrabold tracking-[.18em] text-brand-red">{current.eyebrow}</span>
      <strong className="mt-[15px] block text-[58px] leading-[.95] tracking-[-.055em] max-[640px]:text-[42px]">{current.label}</strong>
      <div className="mt-[46px] border-t border-line">
        {current.roles.map((role, index) => <div key={role} className="group grid min-h-[62px] grid-cols-[48px_1fr_auto] items-center border-b border-line transition-[padding,background] duration-300 ease-complex hover:bg-surface hover:pl-[13px]"><span className="text-[8px] text-[#9ba2a6]">{String(index + 1).padStart(2, '0')}</span><b className="text-sm">{role}</b><ArrowIcon className="text-lg text-brand-red transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" /></div>)}
      </div>
    </div>
  </div>;
}
