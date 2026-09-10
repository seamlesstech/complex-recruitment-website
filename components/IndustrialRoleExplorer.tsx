'use client';
import { useState } from 'react';

const groups = [
  {key:'warehouse',label:'Warehouse',eyebrow:'WAREHOUSE & LOGISTICS',roles:['Picker Packers','Order Pickers','Stock Controllers','Loaders','Parcel Sorters','VDU Operators','Screeners']},
  {key:'flt',label:'FLT & Handling',eyebrow:'MATERIAL HANDLING',roles:['Counterbalance Drivers','FLT Drivers','LLOP Drivers','Traffic Controllers','Sealers']},
  {key:'production',label:'Production',eyebrow:'PRODUCTION & PACKING',roles:['Production Operatives','Food Packing','Hygiene Operatives','General Assistants','Exhibition Workers']},
  {key:'support',label:'Support Roles',eyebrow:'OPERATIONS SUPPORT',roles:['Customer Service','Admin','Catering Assistants','Warehouse Supervisors','Warehouse Managers']},
] as const;

export function IndustrialRoleExplorer(){
  const [active,setActive]=useState(0);
  const current=groups[active];
  return <div className="drivingRoleExplorer">
    <div className="drivingRoleTabs" role="tablist" aria-label="Industrial job categories">
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
