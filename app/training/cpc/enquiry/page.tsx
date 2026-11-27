import { pageMetadata } from '../../../../lib/seo';
import { Header } from '../../../../components/Header';
import { Container } from '../../../../components/layout/Container';
import { Footer } from '../../../../components/layout/Footer';
import { SectionLabel } from '../../../../components/SectionLabel';
import { CpcEnquiryForm } from '../../../../components/training/CpcEnquiryForm';
import { TextLink } from '../../../../components/ui/TextLink';

export const metadata = pageMetadata('CPC Training Enquiry | Complex Recruitment', 'Enquire about Driver CPC training for yourself or your drivers, as a full 35-hour course or 7-hour split sessions.');

export default function CpcEnquiryPage() {
  return (
    <main>
      <section className="grid grid-rows-[92px_auto] bg-white max-[760px]:grid-rows-[76px_auto]">
        <Header active="Additional Services" theme="light" />
        <Container className="py-8 max-[760px]:py-6">
          <h1 className="m-0 text-[clamp(32px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-.045em]">CPC Training enquiry<span className="text-brand-red">.</span></h1>
          <p className="mb-3 mt-4 max-w-[720px] text-sm leading-[1.7] text-muted">Tell us whether you are enquiring as a driver or an employer, along with numbers and preferred timing, and the team will confirm available delivery options.</p>
          <TextLink href="/training/cpc">About CPC Training</TextLink>
        </Container>
      </section>

      <section className="bg-surface pb-[88px] pt-8 max-[760px]:pb-[60px] max-[760px]:pt-6">
        <Container className="grid grid-cols-[.68fr_1.32fr] items-start gap-[90px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px]">
          <div className="min-w-0 min-[1101px]:col-start-2 min-[1101px]:row-start-1">
            <CpcEnquiryForm />
          </div>
          <aside className="min-[1101px]:col-start-1 min-[1101px]:row-start-1 max-[1100px]:max-w-[700px]">
            <SectionLabel>CPC TRAINING</SectionLabel>
            <h2 className="section-heading mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">One driver<br /><em className="not-italic text-brand-red">or a wider team.</em></h2>
            <p className="max-w-[430px] text-sm leading-[1.72] text-[#657177]">Periodic CPC training can be coordinated through our wider group and training partners, subject to course and location availability.</p>
            <div className="mt-10 flex flex-col border-t border-line">
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">35-hour full course</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">7-hour split sessions</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Driver and employer enquiries</span>
            </div>
          </aside>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
