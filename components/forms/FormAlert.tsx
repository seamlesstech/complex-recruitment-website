/** Form-level submission error. Announced to assistive tech via role="alert". */
export function FormAlert({ message, className = '' }: { message: string; className?: string }) {
  return (
    <p role="alert" className={`mb-[18px] border-l-[3px] border-brand-red bg-white px-4 py-3 text-[13px] leading-[1.6] text-ink ${className}`}>
      {message}
    </p>
  );
}
