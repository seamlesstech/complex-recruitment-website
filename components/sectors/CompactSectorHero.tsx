import Link from 'next/link';
import { Header } from '../Header';
import { Container } from '../layout/Container';

export function CompactSectorHero({ sector, description, images, positions }: { sector: string; description: string; images: [string, string]; positions: [string, string] }) {
  return (
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.03] bg-cover bg-no-repeat grayscale-[.55] animate-[sectorHeroA_12s_infinite] motion-reduce:animate-none" style={{ backgroundImage: `url('${images[0]}')`, backgroundPosition: positions[0] }} />
        <div aria-hidden="true" className="absolute -inset-[2%] -z-[4] scale-[1.035] bg-cover bg-no-repeat opacity-0 grayscale-[.55] animate-[sectorHeroB_12s_infinite] motion-reduce:hidden" style={{ backgroundImage: `url('${images[1]}')`, backgroundPosition: positions[1] }} />
        <div aria-hidden="true" className="absolute inset-0 -z-[3] bg-brand-grey/30 mix-blend-color" />
        <div aria-hidden="true" className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(8,9,10,.9),rgba(8,9,10,.76)_42%,rgba(8,9,10,.2)_72%,rgba(8,9,10,.4)),linear-gradient(180deg,rgba(8,9,10,.16),rgba(8,9,10,.08)_55%,rgba(8,9,10,.58))]" />
        <Header active="Sectors" theme="dark" />
        <Container className="py-[64px] max-[760px]:py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-[11px] leading-relaxed text-white/75"><ol className="flex flex-wrap items-center gap-x-3 gap-y-1"><li><Link href="/" className="outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Home</Link></li><li aria-hidden="true" className="text-white/40">/</li><li><a href="/sectors" className="outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Sectors</a></li><li aria-hidden="true" className="text-white/40">/</li><li aria-current="page">{sector}</li></ol></nav>
          <h1 className="m-0 text-[clamp(44px,4.6vw,68px)] font-semibold leading-[.98] tracking-[-.055em] max-[760px]:text-[42px]">{sector} Recruitment<span className="text-brand-red">.</span></h1>
          <p className="mt-6 max-w-[780px] text-base leading-[1.65] text-white/85 max-[760px]:text-sm">{description}</p>
        </Container>
      </section>
);
}
