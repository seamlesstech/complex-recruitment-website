type ArrowIconProps = {
  direction?: 'up-right' | 'down-right' | 'right';
  className?: string;
};

const arrows = { 'up-right': '↗', 'down-right': '↘', right: '→' } as const;

export function ArrowIcon({ direction = 'up-right', className = '' }: ArrowIconProps) {
  return <span className={className} aria-hidden="true">{arrows[direction]}</span>;
}
