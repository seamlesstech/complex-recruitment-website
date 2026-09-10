'use client';
import { useState } from 'react';

const groups = [
  {key:'hgv1',label:'HGV Class 1',eyebrow:'HEAVY GOODS',roles:['Tramping','Trunking','Shunting','Multi Drop','ADR – Packages & Tanks','International','Wagon & Drag']},
  {key:'hgv2',label:'HGV Class 2',eyebrow:'HEAVY GOODS',roles:['Multi Drop','Trunking','Shunting','HIAB – Grab & Hook','ADR Packages & Tanks']},
  {key:'75t',label:'7.5T',eyebrow:'MEDIUM GOODS',roles:['Multi Drop','Home Delivery','Distance','Trunking']},
  {key:'35t',label:'3.5T',eyebrow:'LIGHT COMMERCIAL',roles:['Multi Drop','Home Delivery','Distance','Drivers’ Mates']},
  {key:'non',label:'Transport Roles',eyebrow:'NON-DRIVING',roles:['Transport Manager','Transport Supervisor','Transport Clerk','Transport Planner','Driver Trainer','Drivers’ Mate','Porter']},
] as const;

export function DrivingRoleExplorer(){
  const [active,setActive]=useState(0);
  const current=groups[active];
  return <div className="drivingRoleExplorer">
    <div className="drivingRoleTabs" role="tablist" aria-label="Driving job categories">
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
