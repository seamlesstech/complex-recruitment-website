import { notFound } from 'next/navigation';
import { jobs } from '../../../lib/jobs';
import { Header } from '../../../components/Header';
import { JobApplicationForm } from '../../../components/jobs/JobApplicationForm';
import { JobRow } from '../../../components/jobs/JobRow';
import { Container } from '../../../components/layout/Container';
import { Footer } from '../../../components/layout/Footer';
import { SectionLabel } from '../../../components/SectionLabel';
import { ButtonLink } from '../../../components/ui/ButtonLink';
import { TextLink } from '../../../components/ui/TextLink';

const detailBlockClass = 'border-t border-line py-7 [&_h3]:mb-5 [&_h3]:mt-0 [&_h3]:text-2xl [&_h3]:tracking-[-.03em] [&_li]:text-sm [&_li]:leading-[1.75] [&_li]:text-muted [&_li+li]:mt-2 [&_p]:text-sm [&_p]:leading-[1.75] [&_p]:text-muted [&_ul]:m-0 [&_ul]:pl-5';

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find(item => item.slug === slug);
  if (!job) notFound();
  const hasDetail = job.slug === 'hgv-class-1-driver-enfield';
  const relatedJobs = jobs.filter(item => item.sector === job.sector && item.slug !== slug);
  const keyFacts = [['Location', job.location], ['Rate / Pay', job.rate], ...(hasDetail ? [['Reference', 'COM-1043']] : [])];
  const secondaryFacts = [['Work type', job.workType], ...(hasDetail ? [['Hours / Shift', 'Night / Day shifts'], ['Start timing', 'Immediate start']] : [])];

  return (
    <main className="bg-white text-ink">
      <section className="grid grid-rows-[92px_auto] bg-surface max-[760px]:grid-rows-[76px_auto]">
        <Header active="Jobs" theme="light" />
        <Container className="py-8 max-[640px]:py-6">
          <TextLink href="/jobs">Back to jobs</TextLink>
          <div className="mt-7 grid grid-cols-[minmax(0,1.4fr)_minmax(260px,.75fr)] items-center gap-16 max-[1000px]:gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-6">
            <div className="min-w-0">
              <p className="mb-4 mt-0 text-[10px] font-bold uppercase tracking-[.15em] text-brand-red">{job.sector} / {job.workType}</p>
              <h1 className="m-0 text-[clamp(40px,4.8vw,68px)] font-semibold leading-[.98] tracking-[-.055em]">{job.title}</h1>
            </div>
            <div className="min-w-0">
              <dl className="m-0 border-t border-line">
                {keyFacts.map(([label, value]) => <div key={label} className="grid grid-cols-[.8fr_1fr] gap-4 border-b border-line py-4"><dt className="text-[10px] uppercase tracking-[.1em] text-muted">{label}</dt><dd className="m-0 text-sm font-semibold">{value}</dd></div>)}
              </dl>
              <ButtonLink href="#apply" arrowDirection="down-right" className="mt-5 w-full !text-white">Apply now</ButtonLink>
            </div>
          </div>
          <dl className="mb-0 mt-8 grid grid-cols-3 gap-3 max-[1000px]:grid-cols-2 max-[480px]:grid-cols-1">
            {secondaryFacts.map(([label, value]) => <div key={label} className="min-w-0 bg-white p-5"><dt className="mb-2 text-[10px] uppercase tracking-[.1em] text-muted">{label}</dt><dd className="m-0 text-sm font-semibold">{value}</dd></div>)}
          </dl>
        </Container>
      </section>

      {hasDetail && <section className="bg-white py-12 max-[640px]:py-8">
        <Container className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-16 max-[1000px]:grid-cols-1">
          <article className="max-w-[820px]">
            <SectionLabel>OVERVIEW</SectionLabel>
            <h2 className="mb-6 mt-5 text-[clamp(30px,3vw,44px)] font-semibold leading-[1.05] tracking-[-.04em]">Keep a busy transport operation moving.</h2>
            <p className="mb-8 text-lg leading-[1.68] text-[#5e6a70] max-[640px]:text-base">Complex is recruiting an experienced HGV Class 1 Driver for a temporary assignment in Enfield.</p>
            <div className={detailBlockClass}><h3>What you’ll be doing</h3><ul><li>Completing scheduled Class 1 deliveries safely and efficiently.</li><li>Carrying out vehicle checks and reporting defects appropriately.</li><li>Following site, transport and customer procedures.</li><li>Maintaining accurate delivery and driving records.</li><li>Communicating clearly with the transport team throughout the shift.</li></ul></div>
            <div className={detailBlockClass}><h3>What we’re looking for</h3><ul><li>Valid HGV Class 1 licence and relevant Driver CPC.</li><li>Current Digital Tachograph Card.</li><li>Professional approach to vehicle safety and compliance.</li><li>Relevant recent driving experience.</li><li>Ability to work the advertised shift pattern.</li></ul></div>
            <div className={detailBlockClass}><h3>Working through Complex</h3><p>Complex supports candidates before and during assignments with clear communication, reliable processes and sector-focused recruitment support.</p></div>
          </article>
          <aside className="sticky top-6 bg-ink p-7 text-white max-[1000px]:hidden">
            <h2 className="mt-0 text-2xl tracking-[-.03em]">{job.title}</h2>
            <p className="text-sm text-white/75">{job.location} · {job.workType}<br />{job.rate}</p>
            <ButtonLink href="#apply" className="mt-4 w-full !text-white">Apply now</ButtonLink>
            <p className="mb-0 mt-5 text-xs text-white/75">No account required.</p>
          </aside>
        </Container>
      </section>}

      <section className="bg-surface py-10 max-[640px]:py-7">
        <Container>
          <div id="apply" tabIndex={-1} className="scroll-mt-6 outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
            <h2 className="mb-3 mt-0 text-[clamp(28px,3vw,42px)] font-semibold leading-[1.05] tracking-[-.04em]">Apply for {job.title}</h2>
            <p className="mb-6 text-sm text-muted">No account required. This demonstration shows the application process; details are not sent.</p>
            <JobApplicationForm key={job.slug} jobTitle={job.title} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-12"><Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><SectionLabel>{relatedJobs.length ? 'RELATED ROLES' : 'MORE OPPORTUNITIES'}</SectionLabel><TextLink href="/jobs">View all jobs</TextLink></div>
        {relatedJobs.map((item, index) => <JobRow key={item.slug} job={item} index={index} />)}
      </Container></section>
      <Footer />
    </main>
  );
}
