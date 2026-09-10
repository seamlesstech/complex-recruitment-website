"use client";
import {useState} from "react";

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
    summary:'Targeted recruitment for specialist, supervisory and long-term operational positions.',
    detail:'A more considered search built around the role, the environment and the person you need to keep.',
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
  return <div className="employerServiceGrid">
    <div className="employerServiceList" role="tablist" aria-label="Recruitment solutions">
      {items.map((it,i)=><button key={it.title} className={`employerServiceTab ${active===i?'active':''}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} role="tab" aria-selected={active===i}>
        <span>{it.n}</span><strong>{it.title}</strong><i>↗</i>
      </button>)}
    </div>
    <div className="employerServiceStage">
      {items.map((it,i)=><div key={it.title} className={`serviceStageImage ${active===i?'active':''}`} style={{backgroundImage:`url(${it.image})`}} />)}
      <div className="serviceStageShade" />
      <div className="serviceStageCopy" key={item.title}>
        <span>{item.n} / SOLUTION</span>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <p className="serviceStageDetail">{item.detail}</p>
      </div>
    </div>
  </div>
}
