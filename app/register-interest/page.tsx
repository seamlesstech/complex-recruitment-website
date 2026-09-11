import { Header } from '../../components/Header';
import { Container } from '../../components/layout/Container';
import { Footer } from '../../components/layout/Footer';
import { RegisterInterestForm } from '../../components/RegisterInterestForm';
import { SectionLabel } from '../../components/SectionLabel';
import { TextLink } from '../../components/ui/TextLink';

export default function RegisterInterestPage() {
  return (
    <main>
      <section className="grid min-h-[760px] grid-rows-[92px_auto_300px] overflow-hidden bg-white max-[760px]:min-h-0 max-[760px]:grid-rows-[76px_auto_240px]">
        <Header active="Candidates" theme="light" />
        <Container className="grid grid-cols-[1.15fr_.62fr] items-end gap-[90px] pb-[60px] pt-[70px] max-[1100px]:grid-cols-[1fr_.72fr] max-[1100px]:gap-[55px] max-[760px]:block max-[760px]:py-[58px]">
          <div>
            <div className="mb-[30px] text-[10px] font-extrabold tracking-[.2em] text-ink before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">FOR CANDIDATES <span className="ml-[10px] text-brand-grey">/ REGISTER INTEREST</span></div>
            <h1 className="m-0 text-[clamp(60px,6vw,100px)] leading-[.9] tracking-[-.065em] max-[760px]:text-[52px]">Nothing quite right?<br /><em className="not-italic text-brand-grey">Stay on our radar<span className="text-brand-red">.</span></em></h1>
          </div>
          <div className="max-[760px]:mt-[34px]">
            <p className="mb-[26px] max-w-[500px] text-[15px] leading-[1.72] text-[#606b71]">Tell us what kind of work you’re looking for and how to reach you. If a relevant opportunity comes up, the Complex team has a way to find you.</p>
            <TextLink href="/jobs">Browse live jobs</TextLink>
          </div>
        </Container>
        <div className="min-h-[300px] bg-[linear-gradient(90deg,rgba(17,18,20,.42),rgba(17,18,20,.08)),url('https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=2200')] bg-cover bg-[center_48%] grayscale-[.25] max-[760px]:min-h-60" aria-hidden="true" />
      </section>

      <section className="bg-surface py-[130px] max-[760px]:py-[88px]">
        <Container className="grid grid-cols-[.68fr_1.32fr] items-start gap-[90px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[60px]">
          <aside className="max-[1100px]:max-w-[700px] max-[760px]:mb-[50px]">
            <SectionLabel>QUICK PROFILE</SectionLabel>
            <h2 className="mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">Two steps.<br /><em className="not-italic text-brand-red">One useful introduction.</em></h2>
            <p className="max-w-[430px] text-sm leading-[1.72] text-[#657177]">This isn’t a full job application. It simply gives the recruitment team enough information to understand what might suit you.</p>
            <div className="mt-10 flex flex-col border-t border-line">
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Driving · Industrial · Construction</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">Temporary or permanent work</span>
              <span className="flex min-h-[58px] items-center gap-[14px] border-b border-line text-xs text-[#566167]">CV upload optional at first draft stage</span>
            </div>
          </aside>
          <RegisterInterestForm />
        </Container>
      </section>

      <section className="bg-white py-[120px] max-[760px]:py-[88px]">
        <Container className="grid grid-cols-[1fr_.7fr] items-end gap-[100px] max-[1100px]:grid-cols-[1fr_.8fr] max-[1100px]:gap-[60px] max-[760px]:block">
          <div><SectionLabel>WHEN YOU REGISTER</SectionLabel><h2 className="mb-[25px] mt-[34px] text-[clamp(48px,4.6vw,76px)] leading-[.95] tracking-[-.055em] max-[480px]:text-[46px]">We keep the next<br /><em className="not-italic text-brand-red">step human.</em></h2></div>
          <p className="max-w-[560px] text-sm leading-[1.72] text-[#637078] max-[760px]:mt-[30px]">Registering interest does not guarantee a placement. It simply creates a candidate profile that the recruitment team can use when relevant opportunities arise. Final data-retention and privacy wording will be confirmed before launch.</p>
        </Container>
      </section>

      <Footer variant="simple" />
    </main>
  );
}
