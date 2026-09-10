export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sectionLabel flex items-center gap-[10px] text-label font-extrabold tracking-[.2em]">
      <span className="labelDot h-[7px] w-[7px] rounded-full bg-brand-red shadow-[0_0_0_3px_rgba(236,33,37,.18)]" />
      {children}
    </div>
  );
}
