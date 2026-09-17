"use client";
import {useState} from "react";
import { ArrowIcon } from './ui/ArrowIcon';

const items = [
  {
    n:'01', title:'Temporary & Ad-hoc',
    summary:'Fast, flexible cover for fluctuating demand, absence, peaks and last-minute operational pressure.',
    detail:'Scale your workforce up or down without turning every short-term requirement into a permanent hire.',
    image:'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    n:'02', title:'Temp-to-perm',
    summary:'Bring people into the operation first, then convert the right fit into a permanent member of the team.',
    detail:'Useful where reliability, culture and practical performance matter just as much as the CV.',
    image:'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    n:'03', title:'Permanent',
    summary:'Targeted permanent recruitment across the specialist sectors Complex understands.',
    detail:'A more considered search built around the role, the environment and the person you need to keep.',
    href:'/employers/permanent-recruitment',
    image:'https://images.pexels.com/photos/4487362/pexels-photo-4487362.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    n:'04', title:'High-volume workforce',
    summary:'Coordinated recruitment support when one or two hires are not enough.',
    detail:'Designed for launches, seasonal peaks, contracts and operations that need larger teams mobilised quickly.',
    image:'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
];

export function EmployerServiceSwitcher(){
  const [active,setActive]=useState(0);
  const item=items[active];
  return <div className="grid min-h-[590px] grid-cols-[.85fr_1.25fr] border-t border-white/15 max-[800px]:grid-cols-1">
    <div className="border-r border-white/15 max-[800px]:grid max-[800px]:grid-cols-2 max-[800px]:border-b max-[800px]:border-r-0 max-[520px]:grid-cols-1" role="tablist" aria-label="Recruitment solutions">
      {items.map((it,i)=><button key={it.title} className={`group grid h-[108px] w-full cursor-pointer grid-cols-[48px_1fr_30px] items-center border-0 border-b border-white/15 pr-[26px] text-left text-white outline-none transition-[background,padding] duration-300 ease-complex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white max-[800px]:h-[92px] ${active===i?'bg-brand-red pl-5':'bg-transparent hover:bg-brand-red hover:pl-5'}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} role="tab" aria-selected={active===i}>
        <span className="text-[9px] tracking-[.13em] text-white/50">{it.n}</span><strong className="text-[23px] tracking-[-.025em] max-[520px]:text-lg">{it.title}</strong><ArrowIcon className="text-lg transition-transform duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px]" />
      </button>)}
    </div>
    <div className="relative min-h-[590px] overflow-hidden max-[520px]:min-h-[520px]" role="tabpanel">
      {items.map((it,i)=><div key={it.title} aria-hidden={active!==i} className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-700 ease-complex ${active===i?'scale-100 opacity-100':'scale-[1.035] opacity-0'}`} style={{backgroundImage:`url(${it.image})`}} />)}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,14,15,.08),rgba(13,14,15,.88))]" />
      <div className="absolute inset-x-0 bottom-0 p-12 max-[520px]:p-7" key={item.title}>
        <span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">{item.n} / SOLUTION</span>
        <h3 className="mb-[18px] mt-4 text-[clamp(38px,4vw,62px)] leading-[.95] tracking-[-.05em]">{item.title}</h3>
        <p className="max-w-[570px] text-sm leading-[1.65] text-white/85">{item.summary}</p>
        <p className="mt-4 max-w-[560px] border-t border-white/20 pt-4 text-xs leading-[1.65] text-white/65">{item.detail}</p>
        {'href' in item && item.href && <a href={item.href} className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-white/45 pb-2 text-xs font-extrabold outline-none transition-colors hover:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red">Explore Permanent Recruitment <ArrowIcon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>}
      </div>
    </div>
  </div>
}
