type FormStepProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function FormStepProgress({ currentStep, totalSteps }: FormStepProgressProps) {
  return (
    <div
      aria-hidden="true"
      className="grid h-1 gap-1 bg-white px-[34px] max-[760px]:px-6"
      style={{ gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <i key={index} className={`block h-1 ${index <= currentStep ? 'bg-brand-red' : 'bg-[#dfe2e3]'}`} />
      ))}
    </div>
  );
}
