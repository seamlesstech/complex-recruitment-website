import type { ReactNode } from 'react';
import { HeroEyebrow } from '../HeroEyebrow';
import { Header } from '../Header';
import { Container } from '../layout/Container';
import { ButtonLink } from '../ui/ButtonLink';
import { TextLink } from '../ui/TextLink';

type SectorHeroProps = { sector: string; title: ReactNode; description: string; requestLabel: string; jobsLabel: string; jobsHref: string; proofLabel: string; proofCopy: string; rail: readonly string[]; images: [string, string]; positions: [string, string]; compactTitle?: boolean; driving?: boolean };

export function SectorHero(props: SectorHeroProps) {
  const animationA = props.driving ? 'drivingHeroTruckSwap' : 'sectorHeroA';
  const animationB = props.driving ? 'drivingHeroDriverSwap' : 'sectorHeroB';
  return <section id="top" className="relative isolate grid h-[680px] min-h-[680px] grid-rows-[92px_minmax(0,1fr)_96px] overflow-hidden bg-ink text-white max-[920px]:h-auto max-[920px]:min-h-0 max-[920px]:grid-rows-[92px_auto_88px] max-[640px]:grid-rows-[76px_auto_auto]">
    <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.03] bg-cover bg-no-repeat grayscale-[.55] motion-reduce:animate-none" style={{ backgroundImage: `url('${props.images[0]}')`, backgroundPosition: props.positions[0], animation: `${animationA} 12s infinite` }} />
    <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.035] bg-cover bg-no-repeat opacity-0 grayscale-[.55] motion-reduce:hidden" style={{ backgroundImage: `url('${props.images[1]}')`, backgroundPosition: props.positions[1], animation: `${animationB} 12s infinite` }} />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[3] bg-brand-grey/30 mix-blend-color" />
    <div aria-hidden="true" className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(8,9,10,.9)_0%,rgba(8,9,10,.76)_42%,rgba(8,9,10,.2)_72%,rgba(8,9,10,.4)_100%),linear-gradient(180deg,rgba(8,9,10,.16),rgba(8,9,10,.08)_55%,rgba(8,9,10,.58))]" />
    <Header active="Sectors" theme="dark" />
    <Container className="grid grid-cols-[1fr_250px] items-end gap-[70px] py-[48px] pb-[42px] max-[1180px]:grid-cols-[1fr_190px] max-[1180px]:gap-12 max-[920px]:grid-cols-1 max-[920px]:py-[72px] max-[920px]:pb-[60px] max-[640px]:py-[54px] max-[640px]:pb-[48px]">
      <div className="max-w-[980px]">
        <HeroEyebrow detail="SPECIALIST DIVISION">COMPLEX {props.sector}</HeroEyebrow>
        <h1 className={`m-0 max-w-[940px] font-semibold leading-[.87] tracking-[-.068em] ${props.compactTitle ? 'text-[clamp(60px,5.85vw,98px)]' : 'max-w-[880px] text-[clamp(64px,6.2vw,104px)]'} max-[1180px]:text-[64px] max-[640px]:text-[clamp(44px,11.6vw,52px)] max-[640px]:text-balance [&_em]:not-italic [&_em]:text-brand-red`}>{props.title}</h1>
        <p className="my-7 mb-[30px] max-w-[560px] text-[17px] leading-[1.6] text-[#d5d7d8] max-[640px]:text-[15px]">{props.description}</p>
        <div className="flex items-center gap-7 max-[640px]:items-start max-[640px]:flex-col max-[640px]:gap-3"><ButtonLink href="/request-staff">{props.requestLabel}</ButtonLink><TextLink href={props.jobsHref} variant="light" arrowDirection="right">{props.jobsLabel}</TextLink></div>
      </div>
      <div className="self-end border-t-2 border-brand-red pt-[18px] max-[920px]:max-w-[260px]"><span className="text-[8px] font-extrabold tracking-[.18em] text-white/60">{props.proofLabel}</span><strong className="my-[15px] mb-[9px] block text-[62px] leading-[.95] tracking-[-.06em] max-[640px]:text-[52px]">24/7</strong><p className="m-0 text-[11px] leading-[1.5] text-white/70">{props.proofCopy}</p></div>
    </Container>
    <div className="overflow-x-auto border-t border-white/70 bg-white/85 text-ink backdrop-blur-[8px]"><Container className="grid h-24 grid-cols-[1.25fr_repeat(5,1fr)] items-center border-l border-line max-[920px]:h-[88px] max-[920px]:grid-cols-[1.2fr_repeat(3,1fr)] max-[920px]:[&_b:nth-of-type(4)]:hidden max-[920px]:[&_b:nth-of-type(5)]:hidden max-[640px]:h-[78px] max-[640px]:w-[690px] max-[640px]:grid-cols-[150px_repeat(5,108px)] max-[640px]:[&_b:nth-of-type(4)]:flex max-[640px]:[&_b:nth-of-type(5)]:flex [&>*]:flex [&>*]:h-full [&>*]:items-center [&>*]:border-r [&>*]:border-line [&>*]:px-5"><span className="text-[8px] font-extrabold tracking-[.17em] text-brand-red">{props.sector.toUpperCase()} DIVISION</span>{props.rail.map(item => <b key={item} className="text-[11px] text-[#4f585d]">{item}</b>)}</Container></div>
  </section>;
}
