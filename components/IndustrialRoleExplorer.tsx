import { SectorRoleExplorer } from './sectors/SectorRoleExplorer';

const groups = [
  {key:'warehouse',label:'Warehouse',eyebrow:'WAREHOUSE & LOGISTICS',roles:['Picker Packers','Order Pickers','Stock Controllers','Loaders','Parcel Sorters','VDU Operators','Screeners']},
  {key:'flt',label:'FLT & Handling',eyebrow:'MATERIAL HANDLING',roles:['Counterbalance Drivers','FLT Drivers','LLOP Drivers','Traffic Controllers','Sealers']},
  {key:'production',label:'Production',eyebrow:'PRODUCTION & PACKING',roles:['Production Operatives','Food Packing','Hygiene Operatives','General Assistants','Exhibition Workers']},
  {key:'support',label:'Support Roles',eyebrow:'OPERATIONS SUPPORT',roles:['Customer Service','Admin','Catering Assistants','Warehouse Supervisors','Warehouse Managers']},
] as const;

export function IndustrialRoleExplorer(){
  return <SectorRoleExplorer groups={groups} label="Industrial job categories" />;
}
