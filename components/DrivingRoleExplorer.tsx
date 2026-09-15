import { SectorRoleExplorer } from './sectors/SectorRoleExplorer';

const groups = [
  {key:'hgv1',label:'HGV Class 1',eyebrow:'HEAVY GOODS',roles:['Tramping','Trunking','Shunting','Multi Drop','ADR – Packages & Tanks','International','Wagon & Drag']},
  {key:'hgv2',label:'HGV Class 2',eyebrow:'HEAVY GOODS',roles:['Multi Drop','Trunking','Shunting','HIAB – Grab & Hook','ADR Packages & Tanks']},
  {key:'75t',label:'7.5T',eyebrow:'MEDIUM GOODS',roles:['Multi Drop','Home Delivery','Distance','Trunking']},
  {key:'35t',label:'3.5T',eyebrow:'LIGHT COMMERCIAL',roles:['Multi Drop','Home Delivery','Distance','Drivers’ Mates']},
  {key:'non',label:'Transport Roles',eyebrow:'NON-DRIVING',roles:['Transport Manager','Transport Supervisor','Transport Clerk','Transport Planner','Driver Trainer','Drivers’ Mate','Porter']},
] as const;

export function DrivingRoleExplorer(){
  return <SectorRoleExplorer groups={groups} label="Driving job categories" />;
}
