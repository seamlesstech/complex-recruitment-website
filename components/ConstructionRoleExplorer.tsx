'use client';
import { useState } from 'react';

const groups = [
  {key:'trades',label:'Labour & Trades',eyebrow:'SKILLED & GENERAL LABOUR',roles:['CSCS Labourer','Bricklayer','Carpenter','Plasterer','Roofer','Scaffolder','Plumber','Electrician']},
  {key:'plant',label:'Plant Operators',eyebrow:'PLANT & MACHINERY',roles:['Telehandler','Dumper Driver','Roller Driver','360 Machine Operator','360 Slew','Slinger']},
  {key:'site',label:'Site Operatives',eyebrow:'SITE SUPPORT',roles:['Banksman','Gatesman','Storeman']},
] as const;

export function ConstructionRoleExplorer(){
  const [active,setActive]=useState(0);
  const current=groups[active];
  return <div className="drivingRoleExplorer">
    <div className="drivingRoleTabs" role="tablist" aria-label="Construction job categories">
      {groups.map((g,i)=><button key={g.key} role="tab" aria-selected={active===i} className={active===i?'active':''} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,'0')}</span>{g.label}</button>)}
    </div>
    <div className="drivingRolePanel" role="tabpanel">
      <div className="drivingRolePanelHead"><span>{current.eyebrow}</span><strong>{current.label}</strong></div>
      <div className="drivingRoleList">
        {current.roles.map((role,i)=><div key={role}><span>{String(i+1).padStart(2,'0')}</span><b>{role}</b><i>↗</i></div>)}
      </div>
    </div>
  </div>
}
