import { Header } from '../Header';
import { Container } from '../layout/Container';
import { ButtonLink } from '../ui/ButtonLink';
import { TextLink } from '../ui/TextLink';

type ServiceHeroProps = {
  kind: 'assessment' | 'cpc';
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro: string;
  actionHref: string;
  actionLabel: string;
  badgeLabel: string;
  badgeValue: string;
  badgeCopy: string;
  railItems: readonly string[];
};

const images = {
  assessment: "url('https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=2200')",
  cpc: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200')",
};

export function ServiceHero({ kind, eyebrow, title, intro, actionHref, actionLabel, badgeLabel, badgeValue, badgeCopy, railItems }: ServiceHeroProps) {
  return <section className="relative isolate grid h-svh min-h-[760px] grid-rows-[92px_minmax(0,1fr)_96px] overflow-hidden bg-ink text-white max-[1000px]:h-auto max-[1000px]:min-h-0 max-[640px]:grid-rows-[76px_auto_auto]">
    <Header active="Training & Assessments" theme="dark" />
    <div className="absolute inset-[-2%] -z-[4] scale-[1.025] bg-cover bg-center grayscale-[.2] contrast-105" style={{ backgroundImage: images[kind] }} aria-hidden="true" />
    <div className="absolute inset-0 -z-[3] bg-[linear-gradient(90deg,rgba(8,9,10,.92),rgba(8,9,10,.74)_43%,rgba(8,9,10,.26)_75%,rgba(8,9,10,.48)),linear-gradient(180deg,rgba(8,9,10,.08),rgba(8,9,10,.52))]" aria-hidden="true" />
    <Container className="grid grid-cols-[1fr_240px] items-end gap-[70px] pb-[54px] pt-[72px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[46px] max-[1000px]:py-[70px] max-[1000px]:pt-[90px] max-[640px]:py-[52px] max-[640px]:pb-11">
      <div className="max-w-[900px]"><div className="mb-[30px] text-[10px] font-extrabold tracking-[.2em] text-white before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">{eyebrow}</div><h1 className="m-0 max-w-[900px] text-[clamp(62px,6vw,102px)] leading-[.88] tracking-[-.065em] max-[640px]:text-[50px] [&_em]:not-italic [&_em]:text-brand-red">{title}</h1><p className="my-[30px] max-w-[600px] text-[17px] leading-[1.6] text-[#d5d7d8] max-[640px]:text-[15px]">{intro}</p><div className="flex items-center gap-8 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-4"><ButtonLink href={actionHref}>{actionLabel}</ButtonLink><TextLink href="/training" variant="light" arrowDirection="right">Training Overview</TextLink></div></div>
      <div className="border-t-2 border-brand-red pt-[18px] max-[1000px]:max-w-[260px]"><span className="text-[8px] font-extrabold tracking-[.18em] text-white/60">{badgeLabel}</span><strong className="my-[9px] mt-[15px] block text-[58px] leading-[.95] tracking-[-.06em]">{badgeValue}</strong><p className="m-0 text-[11px] leading-normal text-white/70">{badgeCopy}</p></div>
    </Container>
    <div className="bg-white/85 text-ink backdrop-blur-lg max-[640px]:overflow-x-auto"><Container className="grid h-24 grid-cols-4 border-l border-line max-[640px]:h-[78px] max-[640px]:w-[650px]">{railItems.map(item => <b key={item} className="flex items-center border-r border-line px-[22px] text-[11px]">{item}</b>)}</Container></div>
  </section>;
}
