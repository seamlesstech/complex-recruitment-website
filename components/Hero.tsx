"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";

const slides = [
  {
    label:"WORKFORCE",
    type:"video",
    src:"https://videos.pexels.com/video-files/3254006/3254006-uhd_3840_2160_25fps.mp4",
    eyebrow:"UK WORKFORCE SOLUTIONS",
    titleTop:"The people your",
    titleBase:"operation",
    titleAccent:"depends on.",
    intro:"Reliable temporary and permanent staffing across Driving, Industrial and Construction."
  },
  {
    label:"DRIVING",
    type:"image",
    src:"https://images.pexels.com/photos/35501718/pexels-photo-35501718/free-photo-of-aerial-view-of-industrial-truck-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=2000",
    eyebrow:"DRIVING DIVISION",
    titleTop:"Drivers that keep",
    titleBase:"your business",
    titleAccent:"moving.",
    intro:"Specialist driving recruitment for dependable HGV, multidrop and transport professionals."
  },
  {
    label:"INDUSTRIAL",
    type:"image",
    src:"https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=2000",
    eyebrow:"INDUSTRIAL DIVISION",
    titleTop:"Workforce built for",
    titleBase:"the pace of",
    titleAccent:"industry.",
    intro:"Flexible staffing across warehousing, logistics, distribution and production environments."
  },
  {
    label:"CONSTRUCTION",
    type:"image",
    src:"https://images.pexels.com/photos/8138734/pexels-photo-8138734.jpeg?auto=compress&cs=tinysrgb&w=2000",
    eyebrow:"CONSTRUCTION DIVISION",
    titleTop:"Skilled people.",
    titleBase:"Ready for",
    titleAccent:"site.",
    intro:"Reliable temporary and permanent staffing for trades, plant and site operations."
  },
];

export function Hero(){
  const [active,setActive]=useState(0);
  const videoRef=useRef<HTMLVideoElement>(null);
  const slide=slides[active];

  useEffect(()=>{
    const duration=active===0 ? 7200 : 4800;
    const timer=window.setTimeout(()=>setActive((active+1)%slides.length),duration);
    if(active===0 && videoRef.current){ videoRef.current.currentTime=0; videoRef.current.play().catch(()=>{}); }
    return ()=>window.clearTimeout(timer);
  },[active]);

  return (
    <section className="hero">
      <div className="heroMedia" aria-hidden="true">
        <video ref={videoRef} className={`heroMediaItem ${active===0?'active':''}`} src={slides[0].src} autoPlay muted playsInline preload="metadata" poster="https://images.pexels.com/videos/3254006/free-video-3254006.jpg?auto=compress&dpr=1&h=750&w=1260" />
        {slides.slice(1).map((item,i)=><div key={item.label} className={`heroMediaItem heroStill ${active===i+1?'active':''}`} style={{backgroundImage:`url(${item.src})`}} />)}
        <div className="heroOverlay" />
        <div className="heroGridLines" />
      </div>

      <Header />

      <div className="heroContent pageShell">
        <div className="heroCopy">
          <div className="heroMessage" key={active}>
            <div className="eyebrow">{slide.eyebrow} <span>/ ESTABLISHED SPECIALISTS</span></div>
            <h1 className="heroTitle" aria-label={`${slide.titleTop} ${slide.titleBase} ${slide.titleAccent}`}>
              <span className="heroLineMask"><span className="heroLine heroLineOne">{slide.titleTop}</span></span>
              <span className="heroLineMask"><span className="heroLine heroLineTwo">{slide.titleBase} <em>{slide.titleAccent}</em></span></span>
            </h1>
            <p className="heroIntro">{slide.intro}</p>
          </div>
          <div className="heroActions"><a className="button buttonAccent" href="#request-staff">Request Staff <span>↗</span></a><a className="textLink" href="#jobs">Find Work <span>↘</span></a></div>
        </div>
        <aside className="supportBadge"><span>ALWAYS ON</span><strong>24/7</strong><p>Operational support</p></aside>
      </div>

      <div className="heroBottom">
        <div className="heroBottomInner pageShell">
          <div className="coverage"><span>AREAS WE COVER</span>London · Greater London · Essex · Surrey · Kent</div>
          <div className="heroSlides" aria-label="Hero media selector">
            {slides.map((item,i)=><button key={item.label} className={active===i?'active':''} onClick={()=>setActive(i)} aria-label={`Show ${item.label.toLowerCase()} hero`}><span>0{i+1}</span>{item.label}</button>)}
          </div>
        </div>
      </div>
    </section>
  )
}
