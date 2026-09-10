import { Container } from '../../components/layout/Container';
import { SectionLabel } from '../../components/SectionLabel';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { TextLink } from '../../components/ui/TextLink';

export default function TailwindCheckPage() {
  const colours = [
    ['Red', 'bg-brand-red text-white'], ['Grey', 'bg-brand-grey text-white'],
    ['Ink', 'bg-ink text-white'], ['Surface', 'bg-surface text-ink'],
    ['Strong', 'bg-surface-strong text-ink'], ['White', 'border border-line bg-white text-ink'],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white py-14 text-ink sm:py-20">
      <Container>
        <SectionLabel>TAILWIND DESIGN SYSTEM CHECK</SectionLabel>
        <h1 className="mt-8 max-w-4xl text-display-lg font-bold tracking-[-.05em]">Complex Recruitment foundations.</h1>
        <p className="mt-5 max-w-2xl text-body text-muted">Internal QA for tokens, responsive gutters and reusable UI primitives.</p>

        <section className="mt-14 border-t border-line pt-8" aria-labelledby="colour-heading">
          <h2 id="colour-heading" className="text-2xl font-bold">Colour tokens</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {colours.map(([label, classes]) => <div key={label} className={`min-h-24 p-4 text-sm font-bold ${classes}`}>{label}</div>)}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-8" aria-labelledby="type-heading">
          <h2 id="type-heading" className="text-2xl font-bold">Heading scale</h2>
          <div className="mt-6 space-y-8">
            <p className="text-display-xl font-bold tracking-[-.06em]">Display XL</p>
            <p className="text-display-lg font-bold tracking-[-.05em]">Display large</p>
            <p className="max-w-2xl text-body text-muted">Body copy uses the recurring site size, line height and muted colour.</p>
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-8" aria-labelledby="actions-heading">
          <h2 id="actions-heading" className="text-2xl font-bold">Actions</h2>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <ButtonLink href="/tailwind-check">Accent action</ButtonLink>
            <ButtonLink href="/tailwind-check" variant="dark">Dark action</ButtonLink>
            <TextLink href="/tailwind-check">Dark text link</TextLink>
            <div className="bg-ink px-5"><TextLink href="/tailwind-check" variant="light">Light text link</TextLink></div>
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-8" aria-labelledby="responsive-heading">
          <h2 id="responsive-heading" className="text-2xl font-bold">Responsive spacing</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Mobile', 'Tablet', 'Desktop'].map((label) => (
              <div key={label} className="bg-surface p-5 sm:p-6 lg:p-8"><strong>{label}</strong><p className="mt-2 text-sm text-muted">Container and component spacing adapt without horizontal overflow.</p></div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
