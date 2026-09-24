import type { ReactNode } from 'react';
import { Container } from '../layout/Container';
import { TextLink } from '../ui/TextLink';

export function SectorOverview({ title, copy, roles, shortName, jobsId, children }: { title: string; copy: string; roles: string[]; shortName: string; jobsId: string; children: ReactNode }) {
  return <section className="py-16 max-[760px]:py-10">
    <Container className="grid grid-cols-[1.3fr_1fr] items-start gap-[72px] max-[1100px]:gap-[52px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
      <div>
        <h2 className="text-[clamp(36px,3.2vw,48px)] font-semibold leading-[1.04] tracking-[-.045em]">{title}</h2>
        <p className="mt-6 text-[15px] leading-[1.75] text-muted">{copy}</p>
        <ul aria-label={`${shortName} roles`} className="mt-9 grid grid-cols-2 gap-x-7 border-t border-line max-[640px]:grid-cols-1">{roles.map(role => <li key={role} className="flex min-h-[62px] items-center gap-3 border-b border-line py-4 text-sm font-medium"><span aria-hidden="true" className="text-brand-red">↗</span>{role}</li>)}</ul>
        <div className="flex flex-wrap gap-x-7"><TextLink href="#job-categories" arrowDirection="down-right" className="mt-5 !text-brand-red">Explore {shortName.toLowerCase()} job categories</TextLink><TextLink href={`#${jobsId}`} className="mt-5 !text-brand-red">See current {shortName.toLowerCase()} jobs</TextLink></div>
      </div>
      <div className="relative z-[7] -mt-[100px] max-[900px]:mt-0">{children}</div>
    </Container>
  </section>;
}
