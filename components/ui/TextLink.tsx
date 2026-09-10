import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';

type TextLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  arrowDirection?: 'up-right' | 'down-right' | 'right';
};

const variants = {
  light: 'border-white/45 text-white',
  dark: 'border-ink/30 text-ink',
} as const;

export function TextLink({ href, children, variant = 'dark', className = '', arrowDirection = 'up-right' }: TextLinkProps) {
  const classes = `group inline-flex min-h-11 items-center gap-3 border-b py-3 text-[13px] font-bold transition-colors hover:border-brand-red focus-visible:border-brand-red focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red ${variants[variant]} ${className}`;
  const content = <>{children}<ArrowIcon direction={arrowDirection} className="text-brand-red transition-transform duration-300 ease-complex group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-focus-visible:translate-x-[3px] group-focus-visible:-translate-y-[3px]" /></>;

  return href.startsWith('/')
    ? <Link className={classes} href={href}>{content}</Link>
    : <a className={classes} href={href}>{content}</a>;
}
