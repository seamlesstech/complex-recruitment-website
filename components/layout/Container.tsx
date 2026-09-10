import type { HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-[min(1400px,calc(100vw-80px))] max-[1100px]:w-[calc(100vw-48px)] max-[760px]:w-[calc(100vw-32px)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
