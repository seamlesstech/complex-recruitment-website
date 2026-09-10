const navItems = [
  ['Employers','/employers'],
  ['Candidates','/candidates'],
  ['Sectors','/sectors'],
  ['Jobs','/jobs'],
  ['Training & Assessments','/training'],
  ['About','/about'],
  ['Contact','/contact'],
] as const;

export function Header({active,theme='dark'}:{active?:string;theme?:'dark'|'light'}){
  return (
    <header className={`siteHeader ${theme==='light'?'siteHeaderLight':''}`}>
      <a className="brandLogo" href="/" aria-label="Complex Recruitment home">
        <img src={theme==='light'?'/complex-logo.png':'/complex-logo-white.png'} alt="Complex Recruitment" />
      </a>
      <nav className="desktopNav" aria-label="Primary navigation">
        {navItems.map(([label,href])=><a key={label} className={active===label?'isActive':''} href={href}>{label}</a>)}
      </nav>
      <a className="headerPhone" href="tel:02039237888" aria-label="Call Complex Recruitment on 0203 923 7888">
        <span>CALL COMPLEX</span>
        <strong>0203 923 7888</strong>
      </a>
      <button className="menuButton" aria-label="Open menu"><span/><span/></button>
    </header>
  )
}
