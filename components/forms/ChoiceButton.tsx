import { ArrowIcon } from '../ui/ArrowIcon';

type ChoiceButtonProps = {
  children: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
  showArrow?: boolean;
};

export function ChoiceButton({ children, selected, onSelect, showArrow = false }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`flex min-h-[44px] cursor-pointer items-center font-bold outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
        showArrow
          ? `h-[66px] justify-between border px-[18px] ${selected ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink hover:bg-ink hover:text-white'}`
          : `border px-[15px] py-[11px] text-[11px] ${selected ? 'border-brand-red bg-brand-red text-white' : 'border-line bg-white text-ink hover:border-brand-red'}`
      }`}
      onClick={onSelect}
    >
      <span>{children}</span>
      {showArrow && <ArrowIcon className="text-brand-red" />}
    </button>
  );
}
