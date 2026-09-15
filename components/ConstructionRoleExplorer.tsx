import { SectorRoleExplorer } from './sectors/SectorRoleExplorer';

const groups = [
  {key:'trades',label:'Labour & Trades',eyebrow:'SKILLED & GENERAL LABOUR',roles:['CSCS Labourer','Bricklayer','Carpenter','Plasterer','Roofer','Scaffolder','Plumber','Electrician']},
  {key:'plant',label:'Plant Operators',eyebrow:'PLANT & MACHINERY',roles:['Telehandler','Dumper Driver','Roller Driver','360 Machine Operator','360 Slew','Slinger']},
  {key:'site',label:'Site Operatives',eyebrow:'SITE SUPPORT',roles:['Banksman','Gatesman','Storeman']},
] as const;

export function ConstructionRoleExplorer(){
  return <SectorRoleExplorer groups={groups} label="Construction job categories" />;
}
