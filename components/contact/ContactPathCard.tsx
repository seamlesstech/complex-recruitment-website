import { CtaGreeting } from '../ui/CtaGreeting';
import Link from 'next/link';
import { ArrowIcon } from '../ui/ArrowIcon';

type ContactPathCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  tone: 'red' | 'dark' | 'grey';
  arrow?: 'up-right' | 'down-right';
};

const tones = { red: 'bg-brand-red', dark: 'bg-ink', grey: 'bg-brand-grey' } as const;

export function ContactPathCard({ href, eyebrow, title, body, cta, tone, arrow = 'up-right' }: ContactPathCardProps) {
  const classes = `contactCtaCard group relative flex min-h-[430px] flex-col overflow-hidden px-[34px] pt-[34px] pb-8 text-white transition-colors duration-500 ease-complex hover:bg-[#696f73] focus-visible:bg-[#696f73] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white max-[1100px]:min-h-[330px] max-[767px]:px-5 ${tones[tone]}`;
  const content = <div className="contactCtaContent flex flex-1 min-w-0 flex-col">
    <span className="text-[8px] font-extrabold tracking-[.17em] text-white/[.67]">{eyebrow}</span>
    <div className="relative mt-[100px] max-[1100px]:mt-[60px]"><CtaGreeting /><h2 className="m-0 mb-[18px] text-[clamp(44px,4vw,64px)] leading-[.94] font-bold tracking-[-.055em] !text-white">{title}</h2></div>
    <p className="m-0 max-w-[340px] text-xs leading-[1.65] text-white/[.77]">{body}</p>
    <strong className="mt-auto flex items-center justify-between text-xs text-white">{cta}<ArrowIcon direction={arrow} className="text-[19px] text-white transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-focus-visible:translate-x-1.5 group-focus-visible:-translate-y-1.5" /></strong>
  </div>;

  return href.startsWith('/') ? <Link href={href} className={classes}>{content}</Link> : <a href={href} className={classes}>{content}</a>;
}
