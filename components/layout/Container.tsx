import type { HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  gutter?: 'default' | 'wide';
};

const gutters = {
  default: 'w-[min(1400px,calc(100vw-200px))] max-[1279px]:w-[calc(100vw-168px)] max-[1023px]:w-[calc(100vw-96px)] max-[767px]:w-[calc(100vw-40px)]',
  wide: 'w-[min(1400px,calc(100vw-200px))] max-[1279px]:w-[calc(100vw-168px)] max-[1023px]:w-[calc(100vw-96px)] max-[767px]:w-[calc(100vw-40px)]',
} as const;

export function Container({ children, className = '', gutter = 'default', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto ${gutters[gutter]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
