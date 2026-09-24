import { Header } from '../../components/Header';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { RegisterInterestForm } from '../../components/RegisterInterestForm';
import { SectionLabel } from '../../components/SectionLabel';
import { TextLink } from '../../components/ui/TextLink';

export default function RegisterInterestPage() {
  return (
    <main>
      <section className="grid grid-rows-[92px_auto] bg-white max-[760px]:grid-rows-[76px_auto]">
        <Header active="Candidates" theme="light" />
        <Container className="py-8 max-[760px]:py-6">
          <h1 className="m-0 text-[clamp(32px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-.045em]">Register your interest<span className="text-brand-red">.</span></h1>
          <p className="mb-3 mt-4 max-w-[720px] text-sm leading-[1.7] text-muted">Share your work preferences and contact details in two short steps so we can contact you about relevant opportunities.</p>
          <TextLink href="/jobs">Browse live jobs</TextLink>
        </Container>
      </section>

      <section className="bg-surface pb-[88px] pt-8 max-[760px]:pb-[60px] max-[760px]:pt-6">
        <Container className="grid grid-cols-[.68fr_1.32fr] items-start gap-[90px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px]">
          <div className="min-w-0 min-[1101px]:col-start-2 min-[1101px]:row-start-1">
            <RegisterInterestForm />
          </div>
          <aside className="min-[1101px]:col-start-1 min-[1101px]:row-start-1 max-[1100px]:max-w-[700px]">
            <SectionLabel>QUICK PROFILE</SectionLabel>
            <h2 className="section-heading mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">Two steps.<br /><em className="not-italic text-brand-red">One useful introduction.</em></h2>
            <p className="max-w-[430px] text-sm leading-[1.72] text-[#657177]">This isn’t a full job application. It simply gives the recruitment team enough information to understand what might suit you.</p>
            <div className="mt-10 flex flex-col border-t border-line">
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Four specialist operational sectors</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Temporary or permanent work</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Attach your CV when you apply for a specific job</span>
            </div>
          </aside>
        </Container>
      </section>

      <div className="min-h-[300px] bg-[linear-gradient(90deg,rgba(17,18,20,.42),rgba(17,18,20,.08)),url('https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=2200')] bg-cover bg-[center_48%] grayscale-[.25] max-[760px]:min-h-60" aria-hidden="true" />

      <section className="bg-white py-[120px] max-[760px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.7fr] items-end gap-[100px] max-[1100px]:grid-cols-[1fr_.8fr] max-[1100px]:gap-[60px] max-[760px]:block">
          <div><SectionLabel>WHEN YOU REGISTER</SectionLabel><h2 className="section-heading mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">We keep the next<br /><em className="not-italic text-brand-red">step human.</em></h2></div>
          <p className="max-w-[560px] text-sm leading-[1.72] text-[#637078] max-[760px]:mt-[30px]">Registering interest does not guarantee a placement. It simply creates a candidate profile that the recruitment team can use when relevant opportunities arise. Final data-retention and privacy wording will be confirmed before launch.</p>
        </Container>
      </section>

      <Footer variant="simple" />
    </main>
  );
}
