import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '../../../components/Header';
import { JobApplicationForm } from '../../../components/jobs/JobApplicationForm';
import { JobContent } from '../../../components/jobs/JobContent';
import { JobRow } from '../../../components/jobs/JobRow';
import { Container } from '../../../components/layout/Container';
import { Footer } from '../../../components/layout/Footer';
import { SectionLabel } from '../../../components/SectionLabel';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import { TextLink } from '../../../components/ui/TextLink';
import { getPublicJobByReference, getPublicJobs } from '../../../lib/public-jobs.server';

// Live Job from public_jobs, regenerated at most once a minute.
export const revalidate = 60;

const detailBlockClass = 'border-t border-line py-7 [&_h3]:mb-5 [&_h3]:mt-0 [&_h3]:text-2xl [&_h3]:tracking-[-.03em] [&_li]:text-sm [&_li]:leading-[1.75] [&_li]:text-muted [&_li+li]:mt-2 [&_p]:text-sm [&_p]:leading-[1.75] [&_p]:text-muted [&_ul]:m-0 [&_ul]:pl-5';

// The dynamic segment keeps its historical name, but it is resolved as the Job's
// public Postgres reference (e.g. /jobs/JOB-0001). Old hardcoded slugs 404.
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const lookup = await getPublicJobByReference(decodeURIComponent(slug));
  return lookup.status === 'found' ? { title: `${lookup.job.title} | Complex Recruitment` } : {};
}

export default async function JobDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const lookup = await getPublicJobByReference(decodeURIComponent(slug));
  if (lookup.status === 'not_found') notFound();

  if (lookup.status === 'unavailable') {
    return (
      <main className="bg-white text-ink">
        <section className="grid grid-rows-[92px_auto] bg-surface max-[760px]:grid-rows-[76px_auto]">
          <Header active="Jobs" theme="light" />
          <Container className="py-12">
            <TextLink href="/jobs">Back to jobs</TextLink>
            <h1 className="mb-4 mt-7 text-[clamp(32px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-.045em]">This job can&apos;t be loaded right now.</h1>
            <p role="status" className="max-w-[600px] text-sm leading-[1.7] text-muted">Please try again shortly. If the problem continues, call 0203 923 7888.</p>
          </Container>
        </section>
        <Footer />
      </main>
    );
  }

  const { job } = lookup;
  const { jobs } = await getPublicJobs();
  const others = jobs.filter(item => item.reference !== job.reference);
  const sameSector = job.dbSector ? others.filter(item => item.dbSector === job.dbSector) : [];
  const relatedJobs = (sameSector.length ? sameSector : others).slice(0, 3);

  const keyFacts = [
    ['Location', job.location ?? 'Not specified'],
    ['Rate / Pay', job.pay ?? 'Not specified'],
    ['Reference', job.reference],
  ];
  const secondaryFacts = [
    ['Work type', job.employmentTypeLabel],
    ['Hours / Shift', job.workPatternLabel],
    ['Workplace', job.workplaceLabel],
    ['Closing date', job.closingDateLabel],
    ['Vacancies', job.vacancies && job.vacancies > 1 ? String(job.vacancies) : null],
  ].filter((fact): fact is [string, string] => !!fact[1]);
  const eyebrow = [job.sectorLabel, job.employmentTypeLabel].filter(Boolean).join(' / ');

  const contentBlocks = [
    ['About the role', job.description],
    ['What you’ll be doing', job.responsibilities],
    ['What we’re looking for', job.requirements],
    ['Benefits', job.benefits],
    ['How to apply', job.applicationInstructions],
  ].filter((block): block is [string, string] => !!block[1]);

  return (
    <main className="bg-white text-ink">
      <section className="grid grid-rows-[92px_auto] bg-surface max-[760px]:grid-rows-[76px_auto]">
        <Header active="Jobs" theme="light" />
        <Container className="py-8 max-[640px]:py-6">
          <TextLink href="/jobs">Back to jobs</TextLink>
          <div className="mt-7 grid grid-cols-[minmax(0,1.4fr)_minmax(260px,.75fr)] items-center gap-16 max-[1000px]:gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-6">
            <div className="min-w-0">
              {eyebrow && <p className="mb-4 mt-0 text-[10px] font-bold uppercase tracking-[.15em] text-brand-red">{eyebrow}</p>}
              <h1 className="m-0 text-[clamp(40px,4.8vw,68px)] font-semibold leading-[.98] tracking-[-.055em]">{job.title}</h1>
            </div>
            <div className="min-w-0">
              <dl className="m-0 border-t border-line">
                {keyFacts.map(([label, value]) => <div key={label} className="grid grid-cols-[.8fr_1fr] gap-4 border-b border-line py-4"><dt className="text-[10px] uppercase tracking-[.1em] text-muted">{label}</dt><dd className="m-0 text-sm font-semibold">{value}</dd></div>)}
              </dl>
              <ButtonLink href="#apply" arrowDirection="down-right" className="mt-5 w-full !text-white">Apply now</ButtonLink>
            </div>
          </div>
          {secondaryFacts.length > 0 && <dl className="mb-0 mt-8 grid grid-cols-3 gap-3 max-[1000px]:grid-cols-2 max-[480px]:grid-cols-1">
            {secondaryFacts.map(([label, value]) => <div key={label} className="min-w-0 bg-white p-5"><dt className="mb-2 text-[10px] uppercase tracking-[.1em] text-muted">{label}</dt><dd className="m-0 text-sm font-semibold">{value}</dd></div>)}
          </dl>}
        </Container>
      </section>

      <section className="bg-white py-12 max-[640px]:py-8">
        <Container className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-16 max-[1000px]:grid-cols-1">
          <article className="max-w-[820px]">
            <SectionLabel>OVERVIEW</SectionLabel>
            {job.summary && <p className="mb-8 mt-5 text-lg leading-[1.68] text-[#5e6a70] max-[640px]:text-base">{job.summary}</p>}
            {!job.summary && !contentBlocks.length && <p className="mb-8 mt-5 text-sm leading-[1.75] text-muted">Full details for this role are available from the Complex team. Apply below and a recruiter will be in touch.</p>}
            {contentBlocks.map(([heading, text]) => <div key={heading} className={detailBlockClass}><h3>{heading}</h3><JobContent text={text} /></div>)}
            <div className={detailBlockClass}><h3>Working through Complex</h3><p>Complex supports candidates before and during assignments with clear communication, reliable processes and sector-focused recruitment support.</p></div>
          </article>
          <aside className="sticky top-6 bg-ink p-7 text-white max-[1000px]:hidden">
            <h2 className="mt-0 text-2xl tracking-[-.03em]">{job.title}</h2>
            <p className="text-sm text-white/75">{[job.location, job.employmentTypeLabel].filter(Boolean).join(' · ')}{job.pay && <><br />{job.pay}</>}</p>
            <ButtonLink href="#apply" className="mt-4 w-full !text-white">Apply now</ButtonLink>
            <p className="mb-0 mt-5 text-xs text-white/75">No account required.</p>
          </aside>
        </Container>
      </section>

      <section className="bg-surface py-10 max-[640px]:py-7">
        <Container>
          <div id="apply" tabIndex={-1} className="scroll-mt-6 outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
            <h2 className="mb-3 mt-0 text-[clamp(28px,3vw,42px)] font-semibold leading-[1.05] tracking-[-.04em]">Apply for {job.title}</h2>
            <p className="mb-6 text-sm text-muted">No account required. Your application goes straight to the Complex recruitment team.</p>
            <JobApplicationForm key={job.reference} jobReference={job.reference} jobTitle={job.title} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-12"><Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><SectionLabel>{sameSector.length ? 'RELATED ROLES' : 'MORE OPPORTUNITIES'}</SectionLabel><TextLink href="/jobs">View all jobs</TextLink></div>
        {relatedJobs.map((item, index) => <JobRow key={item.reference} job={item} index={index} />)}
        {!relatedJobs.length && <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line py-4"><p className="m-0 text-sm text-muted">No other live vacancies right now.</p><TextLink href="/register-interest" className="!text-brand-red">Register your interest</TextLink></div>}
      </Container></section>
      <Footer />
    </main>
  );
}
