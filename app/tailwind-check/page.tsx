export default function TailwindCheckPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Tailwind compilation check
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
          Tailwind is configured.
        </h1>
        <div className="mt-10 h-24 w-full bg-red-600" aria-hidden="true" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Responsive', 'Utilities', 'Working'].map((label) => (
            <div
              key={label}
              className="border border-neutral-300 bg-neutral-100 p-6 text-lg font-semibold text-neutral-950"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
