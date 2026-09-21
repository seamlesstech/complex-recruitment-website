import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'accent' | 'dark';
  className?: string;
  arrow?: boolean;
  arrowDirection?: 'up-right' | 'down-right' | 'right';
};

const variants = {
  accent: 'bg-brand-red !text-white hover:bg-brand-grey focus-visible:bg-brand-grey',
  dark: 'bg-ink !text-white hover:bg-brand-grey focus-visible:bg-brand-grey',
} as const;

export function ButtonLink({ href, children, variant = 'accent', className = '', arrow = true, arrowDirection = 'up-right' }: ButtonLinkProps) {
  const classes = `group inline-flex min-h-12 items-center justify-between gap-6 border border-transparent px-5 text-[13px] font-bold tracking-[.02em] transition duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red ${variants[variant]} ${className}`;
  const content = <>{children}{arrow && <ArrowIcon direction={arrowDirection} className="text-lg text-white transition-transform duration-300 ease-complex group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-focus-visible:translate-x-[3px] group-focus-visible:-translate-y-[3px]" />}</>;

  return href.startsWith('/')
    ? <Link className={classes} href={href}>{content}</Link>
    : <a className={classes} href={href}>{content}</a>;
}
