'use client';
import { useMemo, useState } from 'react';

const jobs = [
  {title:'HGV Class 1 Driver',location:'Enfield',sector:'Driving',type:'Temporary',rate:'£19–£22/hr',slug:'hgv-class-1-driver-enfield'},
  {title:'Warehouse Operative',location:'Croydon',sector:'Industrial',type:'Temporary',rate:'£12.50/hr',slug:'warehouse-operative-croydon'},
  {title:'Site Labourer',location:'London',sector:'Construction',type:'Temporary',rate:'£14.50/hr',slug:'site-labourer-london'},
  {title:'HGV Class 2 Driver',location:'North London',sector:'Driving',type:'Temporary',rate:'£17–£20/hr',slug:'hgv-class-2-driver-north-london'},
  {title:'FLT Driver',location:'Greater London',sector:'Industrial',type:'Temporary',rate:'£13.80/hr',slug:'flt-driver-greater-london'},
  {title:'Transport Planner',location:'London',sector:'Driving',type:'Permanent',rate:'Salary DOE',slug:'transport-planner-london'},
];

export function JobBoardExplorer(){
  const [sector,setSector]=useState('All');
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>jobs.filter(j=>(sector==='All'||j.sector===sector)&&(`${j.title} ${j.location}`.toLowerCase().includes(query.toLowerCase()))),[sector,query]);
  return <div className="jobsExplorer">
    <div className="jobsSearchBar">
      <label><span>KEYWORD</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Job title or keyword" /></label>
      <label><span>LOCATION</span><input placeholder="Town, city or postcode" /></label>
      <button type="button">Search Jobs <i>↗</i></button>
    </div>
    <div className="jobsFilterRail">
      <div className="jobsFilterChips" aria-label="Filter jobs by sector">
        {['All','Driving','Industrial','Construction'].map(x=><button key={x} className={sector===x?'active':''} onClick={()=>setSector(x)}>{x}</button>)}
      </div>
      <span>{String(filtered.length).padStart(2,'0')} prototype vacancies</span>
    </div>
    <div className="jobsBoardLabels"><span>ROLE</span><span>LOCATION</span><span>SECTOR</span><span>TYPE</span><span>RATE</span><span/></div>
    <div className="jobsBoardList">
      {filtered.map((j,i)=><a href={`/jobs/${j.slug}`} className="jobsBoardRow" key={j.slug}>
        <div><small>{String(i+1).padStart(2,'0')}</small><strong>{j.title}</strong></div>
        <span>{j.location}</span><span>{j.sector}</span><span>{j.type}</span><b>{j.rate}</b><i>↗</i>
      </a>)}
    </div>
  </div>
}
