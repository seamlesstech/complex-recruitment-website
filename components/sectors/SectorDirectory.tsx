import { ArrowIcon } from '../ui/ArrowIcon';

export type DirectorySector = {
  slug: string;
  n: string;
  name: string;
  image: string;
  /** CSS background-position for the card photo. */
  position?: string;
  short: string;
  /** Role / category tags separated by " · ". */
  roles: string;
};

/**
 * The /sectors directory: one substantial full-card link per sector in a
 * 3 × 2 grid (2 × 3 on tablet, 1 × 6 on mobile). Each card carries the sector
 * number, title, photo, description and role tags. Hover and keyboard focus
 * strengthen the red overlay and reveal a circular arrow control; on touch
 * devices and at mobile width the control is always visible, so nothing depends
 * on hover. The card is the only interactive element (the arrow is decorative).
 */
export function SectorDirectory({ sectors }: { sectors: readonly DirectorySector[] }) {
  return <ul aria-label="Complex Recruitment sectors" className="m-0 mt-[74px] grid list-none grid-cols-3 gap-4 p-0 max-[1100px]:grid-cols-2 max-[760px]:mt-[50px] max-[700px]:grid-cols-1">
    {sectors.map(sector => {
      const id = `sector-${sector.slug}`;
      return <li className="m-0 min-w-0" key={sector.slug}>
        <a href={`/sectors/${sector.slug}`} aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc ${id}-tags`} className="group/card relative isolate flex min-h-[560px] flex-col justify-end overflow-hidden bg-ink text-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white max-[1100px]:min-h-[500px] max-[700px]:min-h-[470px]">
          <div aria-hidden="true" className="absolute -inset-[2%] -z-[3] scale-[1.02] bg-cover grayscale-[.5] transition-[transform,filter] duration-700 ease-complex motion-reduce:transition-none group-hover/card:scale-[1.06] group-hover/card:grayscale-0 group-focus-visible/card:scale-[1.06] group-focus-visible/card:grayscale-0" style={{ backgroundImage: `url('${sector.image}')`, backgroundPosition: sector.position ?? 'center' }} />
          <div aria-hidden="true" className="absolute inset-0 -z-[2] bg-[linear-gradient(180deg,rgba(10,11,12,.18),rgba(10,11,12,.3)_30%,rgba(10,11,12,.94)_78%)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-[1] translate-y-full bg-[linear-gradient(180deg,rgba(236,33,37,.04),rgba(236,33,37,.3)_38%,rgba(236,33,37,.94))] transition-transform duration-700 ease-complex motion-reduce:transition-none group-hover/card:translate-y-0 group-focus-visible/card:translate-y-0 [@media(hover:none)]:translate-y-[62%] max-[700px]:translate-y-[62%]" />
          <span className="absolute left-7 top-7 text-[10px] font-semibold tracking-[.18em] text-white/80 max-[700px]:left-6 max-[700px]:top-6">{sector.n}</span>
          <span aria-hidden="true" className="pointer-events-none absolute right-6 top-6 flex h-11 w-11 scale-[.85] items-center justify-center rounded-full bg-brand-red text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,.28)] transition-[opacity,transform] duration-300 ease-complex motion-reduce:transition-none group-hover/card:scale-100 group-hover/card:opacity-100 group-focus-visible/card:scale-100 group-focus-visible/card:opacity-100 [@media(hover:none)]:scale-100 [@media(hover:none)]:opacity-90 max-[700px]:right-5 max-[700px]:top-5 max-[700px]:h-10 max-[700px]:w-10 max-[700px]:scale-100 max-[700px]:opacity-90"><ArrowIcon className="text-[18px] leading-none transition-transform duration-300 ease-complex motion-reduce:transition-none group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-focus-visible/card:translate-x-1 group-focus-visible/card:-translate-y-1" /></span>
          <div className="min-w-0 px-7 pb-8 max-[700px]:px-6 max-[700px]:pb-7">
            <h3 id={`${id}-title`} className="m-0 text-[clamp(30px,2.7vw,42px)] font-semibold leading-[.98] tracking-[-.05em] text-white max-[700px]:text-[34px]">{sector.name}</h3>
            <p id={`${id}-desc`} className="mb-0 mt-4 max-w-[440px] text-[13px] leading-[1.6] text-white/85">{sector.short}</p>
            <span id={`${id}-tags`} className="mt-5 flex flex-wrap gap-x-2 gap-y-2">{sector.roles.split(' · ').map(role => <span key={role} className="border border-white/30 px-2 py-1 text-[9px] font-semibold uppercase leading-none tracking-[.1em] text-white/85">{role}</span>)}</span>
          </div>
        </a>
      </li>;
    })}
  </ul>;
}
