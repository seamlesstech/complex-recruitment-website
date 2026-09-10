import { Header } from './Header';

export type LegalSection = { title:string; body:string|string[] };

export function LegalPage({kicker,title,intro,updated,sections}:{kicker:string;title:string;intro:string;updated:string;sections:LegalSection[]}){
  return <main className="legalPage">
    <section className="legalHero"><Header active={undefined} theme="light"/><div className="pageShell legalHeroGrid"><div><div className="candidateEyebrow">LEGAL <span>/ {kicker}</span></div><h1>{title}</h1></div><div><p>{intro}</p><span className="legalUpdated">LAST UPDATED · {updated}</span></div></div></section>
    <section className="legalBody"><div className="pageShell legalBodyGrid"><aside><span>ON THIS PAGE</span>{sections.map((s,i)=><a key={s.title} href={`#legal-${i+1}`}>{String(i+1).padStart(2,'0')} · {s.title}</a>)}<div className="legalReviewNote"><strong>CONTENT NOTE</strong><p>This is a design-stage legal template. Final wording must be reviewed and approved by Complex before launch.</p></div></aside><article>{sections.map((s,i)=><section key={s.title} id={`legal-${i+1}`}><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title}</h2>{Array.isArray(s.body)?s.body.map(x=><p key={x}>{x}</p>):<p>{s.body}</p>}</section>)}</article></div></section>
    <footer className="legalFooter"><div className="pageShell"><img src="/complex-logo-white.png" alt="Complex Recruitment"/><div><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/modern-slavery">Modern Slavery</a></div><span>0203 923 7888</span></div></footer>
  </main>
}
