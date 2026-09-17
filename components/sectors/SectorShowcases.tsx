import type { CSSProperties, ReactNode } from 'react';
import { Container } from '../layout/Container';
import { ArrowIcon } from '../ui/ArrowIcon';

type Sector = {
  n: string;
  title: string;
  displayTitle: ReactNode;
  href: string;
  copy: string;
  homeCopy: string;
  roles: string;
  image: string;
};

const sectors: readonly Sector[] = [
  { n: '01', title: 'Driving & Transport', displayTitle: <>Driving &amp;<br/>Transport</>, href: '/sectors/driving', copy: 'Qualified drivers and transport professionals ready to keep your operation moving.', homeCopy: 'Drivers and transport professionals for logistics, distribution and fleet operations.', roles: 'HGV 1 / HGV 2 / 7.5T / 3.5T / ADR / HIAB / Transport', image: 'https://images.pexels.com/photos/35501718/pexels-photo-35501718/free-photo-of-aerial-view-of-industrial-truck-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1800' },
  { n: '02', title: 'Industrial & Warehouse', displayTitle: <>Industrial &amp;<br/>Warehouse</>, href: '/sectors/industrial', copy: 'Flexible workforce solutions across warehousing, logistics, distribution and production.', homeCopy: 'Flexible teams for warehousing, fulfilment, production and distribution environments.', roles: 'Warehouse / FLT / Picking / Loading / Production / Supervisory', image: 'https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=1800' },
  { n: '03', title: 'Construction & Engineering', displayTitle: <>Construction &amp;<br/>Engineering</>, href: '/sectors/construction', copy: 'Reliable skilled and general labour supporting construction projects and site operations.', homeCopy: 'Skilled trades, plant and site personnel for construction and engineering operations.', roles: 'Trades / Plant / Site Ops / Labour / Supervisory', image: 'https://images.pexels.com/photos/8138734/pexels-photo-8138734.jpeg?auto=compress&cs=tinysrgb&w=1800' },
  { n: '04', title: 'Business & Operational Support', displayTitle: <>Business &amp; Operational<br/>Support</>, href: '/sectors/business-operational-support', copy: 'Planners, administrators, coordinators and support teams for operational businesses.', homeCopy: 'The planners, administrators and support teams behind successful operations.', roles: 'Planning / Administration / Coordination / Customer Service / Payroll / Supervisory', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800' },
];

export function HomeSectorGrid() {
  return <Container gutter="wide" className="pb-[120px] max-[760px]:pb-[88px]">
    <div className="grid gap-4 max-[760px]:grid-cols-1">
      {[sectors.slice(0, 2), sectors.slice(2, 4)].map((row, rowIndex) => <div className="homeSectorRow flex gap-4 max-[760px]:flex-col" key={rowIndex}>
        {row.map(sector => <a href={sector.href} aria-label={`Explore ${sector.title}`} className="homeSectorCard group/card relative isolate min-h-[500px] min-w-0 flex-1 overflow-hidden bg-ink text-white outline-none transition-[flex-basis] duration-700 ease-complex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red max-[1000px]:min-h-[440px] max-[760px]:min-h-[390px]" key={sector.href}>
          <div className="absolute -inset-[2%] -z-[3] scale-[1.02] bg-cover bg-center grayscale-[.5] transition-[transform,filter] duration-700 ease-complex group-hover/card:scale-[1.065] group-hover/card:grayscale-0 group-focus-visible/card:scale-[1.065] group-focus-visible/card:grayscale-0" style={{ backgroundImage: `url('${sector.image}')` }} />
          <div className="absolute inset-0 -z-[2] bg-[linear-gradient(180deg,rgba(10,11,12,.1),rgba(10,11,12,.22)_42%,rgba(10,11,12,.9))]" />
          <div className="absolute inset-0 -z-[1] translate-y-full bg-[linear-gradient(180deg,rgba(236,33,37,.04),rgba(236,33,37,.25)_42%,rgba(236,33,37,.92))] transition-transform duration-700 ease-complex group-hover/card:translate-y-0 group-focus-visible/card:translate-y-0 max-[760px]:translate-y-[52%]" />
          <span className="absolute left-7 top-7 text-[9px] tracking-[.16em] text-white/75">{sector.n}</span>
          <div className="absolute inset-x-7 bottom-8 min-w-0 max-[760px]:inset-x-6 max-[760px]:bottom-6">
            <span className="mb-3 block min-h-[14px] translate-y-2 text-[9px] font-extrabold tracking-[.22em] text-white/80 opacity-0 transition duration-400 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100 max-[760px]:translate-y-0 max-[760px]:opacity-100">EXPLORE</span>
            <span className="absolute left-0 top-[27px] flex h-[54px] w-[54px] -translate-x-3 scale-90 items-center justify-center opacity-0 transition duration-500 ease-complex group-hover/card:translate-x-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-focus-visible/card:translate-x-0 group-focus-visible/card:scale-100 group-focus-visible/card:opacity-100 max-[1000px]:h-11 max-[1000px]:w-11 max-[760px]:hidden"><img className="h-full w-full object-contain" src="/complex-mark.png" alt="" /></span>
            <div className="min-w-0 transition-transform duration-700 ease-complex group-hover/card:translate-x-[66px] group-focus-visible/card:translate-x-[66px] max-[1000px]:group-hover/card:translate-x-[56px] max-[1000px]:group-focus-visible/card:translate-x-[56px] max-[760px]:!translate-x-0">
              <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_32px] items-end gap-3 max-[1000px]:grid-cols-[minmax(0,1fr)_28px]">
                <h3 className="m-0 whitespace-nowrap text-[clamp(34px,3.2vw,54px)] font-semibold leading-[.9] tracking-[-.055em] text-white max-[1200px]:text-[36px] max-[900px]:text-[31px] max-[760px]:whitespace-normal max-[760px]:text-[clamp(34px,9vw,46px)]">{sector.displayTitle}</h3>
                <ArrowIcon className="mb-1 text-2xl text-white transition-transform duration-300 group-hover/card:translate-x-2 group-hover/card:-translate-y-2 group-focus-visible/card:translate-x-2 group-focus-visible/card:-translate-y-2" />
              </div>
              <p className="mb-0 mt-4 max-w-[470px] text-xs font-normal leading-[1.6] text-white/80 max-[1000px]:max-w-[350px]">{sector.homeCopy}</p>
            </div>
          </div>
        </a>)}
      </div>)}
    </div>
  </Container>;
}

export function AboutStickySectors() {
  return <div className="relative">
    {sectors.map((sector, index) => <article className="group/sector sticky top-0 isolate h-[72svh] min-h-[620px] overflow-hidden border-t border-white/15 bg-ink text-white shadow-[0_-24px_52px_rgba(0,0,0,.18)] not-first:rounded-t-2xl max-[760px]:relative max-[760px]:h-auto max-[760px]:min-h-[580px]" key={sector.href} style={{ zIndex: index + 1 } as CSSProperties}>
      <div className="absolute -inset-[1%] -z-[3] bg-cover bg-center grayscale-[.56] contrast-[1.04] transition-[transform,filter] duration-1000 ease-complex group-hover/sector:scale-[1.055] group-hover/sector:grayscale-[.26] group-focus-within/sector:scale-[1.055] group-focus-within/sector:grayscale-[.26]" style={{ backgroundImage: `url('${sector.image}')` }} />
      <div className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(9,10,11,.94)_0%,rgba(9,10,11,.76)_43%,rgba(9,10,11,.20)_74%,rgba(9,10,11,.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-[1] h-[45%] translate-y-full bg-[linear-gradient(180deg,rgba(236,33,37,0),rgba(236,33,37,.4)_45%,rgba(236,33,37,.96))] transition-transform duration-700 ease-complex group-hover/sector:translate-y-0 group-focus-within/sector:translate-y-0 max-[760px]:translate-y-[55%]" />
      <Container gutter="wide" className="grid h-full grid-cols-[120px_minmax(0,1fr)_370px] items-center max-[1000px]:grid-cols-[70px_1fr_300px] max-[760px]:grid-cols-1 max-[760px]:content-center max-[760px]:gap-8">
        <span className="self-start pt-[52px] text-xs text-brand-red max-[760px]:absolute max-[760px]:top-0">{sector.n}</span>
        <div className="min-w-0"><span className="mb-3.5 block translate-y-3 text-[9px] font-extrabold tracking-[.24em] text-white/80 opacity-0 transition duration-500 group-hover/sector:translate-y-0 group-hover/sector:opacity-100 group-focus-within/sector:translate-y-0 group-focus-within/sector:opacity-100 max-[760px]:translate-y-0 max-[760px]:opacity-100">EXPLORE</span><div className="grid grid-cols-[92px_minmax(0,1fr)] items-center"><span className="flex h-[74px] w-[74px] -translate-x-4 scale-90 items-center opacity-0 transition duration-500 group-hover/sector:translate-x-0 group-hover/sector:scale-100 group-hover/sector:opacity-100 group-focus-within/sector:translate-x-0 group-focus-within/sector:scale-100 group-focus-within/sector:opacity-100 max-[760px]:translate-x-0 max-[760px]:scale-100 max-[760px]:opacity-100"><img className="h-full w-full object-contain" src="/complex-mark.png" alt="" /></span><h3 className="m-0 text-[clamp(52px,6.5vw,106px)] font-extrabold leading-[.82] tracking-[-.065em] text-white max-[760px]:text-[clamp(43px,11vw,68px)]">{sector.displayTitle}</h3></div></div>
        <div className="self-end pb-[50px] max-[760px]:self-auto max-[760px]:pb-0"><p className="text-base leading-[1.55] text-white">{sector.copy}</p><span className="my-5 block text-[10px] uppercase leading-[1.6] tracking-[.11em] text-white/70">{sector.roles}</span><a href={sector.href} className="inline-flex min-h-11 items-center gap-3 border-b border-white/45 pb-2 text-xs font-extrabold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Explore {sector.title}<ArrowIcon className="transition-transform group-hover/sector:translate-x-2 group-hover/sector:-translate-y-2 group-focus-visible:translate-x-2 group-focus-visible:-translate-y-2" /></a></div>
      </Container>
    </article>)}
  </div>;
}
