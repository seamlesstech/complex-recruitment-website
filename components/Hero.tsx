"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Container } from "./layout/Container";
import { ButtonLink } from "./ui/ButtonLink";
import { TextLink } from "./ui/TextLink";

const slides = [
  { label:"WORKFORCE", src:"https://videos.pexels.com/video-files/3254006/3254006-uhd_3840_2160_25fps.mp4", eyebrow:"UK WORKFORCE SOLUTIONS", titleTop:"The people your", titleBase:"operation", titleAccent:"depends on.", intro:"Reliable temporary and permanent staffing across Driving, Industrial and Construction." },
  { label:"DRIVING", src:"https://images.pexels.com/photos/35501718/pexels-photo-35501718/free-photo-of-aerial-view-of-industrial-truck-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=2000", eyebrow:"DRIVING DIVISION", titleTop:"Drivers that keep", titleBase:"your business", titleAccent:"moving.", intro:"Specialist driving recruitment for dependable HGV, multidrop and transport professionals." },
  { label:"INDUSTRIAL", src:"https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=2000", eyebrow:"INDUSTRIAL DIVISION", titleTop:"Workforce built for", titleBase:"the pace of", titleAccent:"industry.", intro:"Flexible staffing across warehousing, logistics, distribution and production environments." },
  { label:"CONSTRUCTION", src:"https://images.pexels.com/photos/8138734/pexels-photo-8138734.jpeg?auto=compress&cs=tinysrgb&w=2000", eyebrow:"CONSTRUCTION DIVISION", titleTop:"Skilled people.", titleBase:"Ready for", titleAccent:"site.", intro:"Reliable temporary and permanent staffing for trades, plant and site operations." },
];

export function Hero(){
  const [active,setActive]=useState(0); const videoRef=useRef<HTMLVideoElement>(null); const slide=slides[active];
  useEffect(()=>{const timer=window.setTimeout(()=>setActive((active+1)%slides.length),active===0?7200:4800); if(active===0&&videoRef.current){videoRef.current.currentTime=0;videoRef.current.play().catch(()=>{});} return()=>window.clearTimeout(timer)},[active]);
  return <section className="relative isolate grid h-svh grid-rows-[92px_minmax(0,1fr)_108px] overflow-hidden bg-ink text-white max-[760px]:h-auto max-[760px]:min-h-svh max-[760px]:grid-rows-[76px_minmax(0,1fr)_auto]">
    <div className="absolute inset-0 -z-30 bg-ink" aria-hidden="true">
      <video ref={videoRef} className={`heroMediaItem absolute -inset-[2%] h-[104%] w-[104%] object-cover ${active===0?'active':''}`} src={slides[0].src} autoPlay muted playsInline preload="metadata" poster="https://images.pexels.com/videos/3254006/free-video-3254006.jpg?auto=compress&dpr=1&h=750&w=1260"/>
      {slides.slice(1).map((item,i)=><div key={item.label} className={`heroMediaItem absolute -inset-[2%] h-[104%] w-[104%] bg-cover bg-center ${active===i+1?'active':''}`} style={{backgroundImage:`url(${item.src})`}}/>)}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,10,.88)_0%,rgba(8,8,10,.68)_44%,rgba(8,8,10,.28)_70%,rgba(8,8,10,.42)_100%),linear-gradient(180deg,rgba(7,7,9,.30),rgba(7,7,9,.10)_52%,rgba(7,7,9,.52)_100%)]"/><div className="absolute inset-0 opacity-55 mix-blend-screen bg-[linear-gradient(90deg,transparent_49.9%,rgba(255,255,255,.08)_50%,transparent_50.1%),linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:100%_100%,100%_130px]"/>
    </div>
    <Header/>
    <Container className="relative z-[2] grid min-h-0 grid-cols-[minmax(0,1fr)_220px] items-end gap-[70px] py-[54px] max-[900px]:grid-cols-1 max-[900px]:py-10 max-[760px]:items-center max-[760px]:py-14">
      <div className="max-w-[950px]"><div className="relative" key={active}>
        <div className="heroEyebrow mb-[30px] text-[10px] font-extrabold tracking-[.2em] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">{slide.eyebrow} <span className="ml-2.5 text-[#b5b8ba] max-[560px]:hidden">/ ESTABLISHED SPECIALISTS</span></div>
        <h1 className="m-0 max-w-[950px] text-[clamp(58px,6.25vw,104px)] font-bold leading-[.88] tracking-[-.065em] [text-shadow:0_8px_30px_rgba(0,0,0,.18)] max-[560px]:text-5xl" aria-label={`${slide.titleTop} ${slide.titleBase} ${slide.titleAccent}`}><span className="block overflow-hidden py-[.08em] -my-[.1em]"><span className="heroLine heroLineOne block">{slide.titleTop}</span></span><span className="block overflow-hidden py-[.08em] -my-[.1em]"><span className="heroLine heroLineTwo block">{slide.titleBase} <em className="not-italic text-brand-red">{slide.titleAccent}</em></span></span></h1>
        <p className="heroIntro my-[30px] mb-7 max-w-[600px] text-[17px] leading-normal text-[#d1d3d4] max-[560px]:text-[15px]">{slide.intro}</p>
      </div><div className="flex items-center gap-8"><ButtonLink href="#request-staff">Request Staff</ButtonLink><TextLink href="#jobs" variant="light" arrowDirection="down-right">Find Work</TextLink></div></div>
      <aside className="self-end border-t-2 border-brand-red pt-[18px] max-[900px]:hidden"><span className="block text-[9px] tracking-[.18em] text-[#c4c7c8]">ALWAYS ON</span><strong className="my-3.5 mb-[7px] block text-6xl leading-[.95] tracking-[-.055em]">24/7</strong><p className="m-0 text-xs uppercase leading-[1.4] tracking-[.08em] text-[#d6d7d8]">Operational support</p></aside>
    </Container>
    <div className="relative z-[5] h-[108px] border-t border-white/70 bg-white/80 text-ink shadow-[0_-10px_32px_rgba(0,0,0,.045)] backdrop-blur-lg max-[760px]:h-auto"><Container className="grid h-full grid-cols-[1fr_auto] items-center gap-10 max-[760px]:block max-[760px]:w-full"><div className="flex items-center gap-[18px] text-[10px] tracking-[.11em] text-[#45494d] max-[760px]:hidden"><span className="text-[8px] font-extrabold tracking-[.18em] text-brand-red">AREAS WE COVER</span>London · Greater London · Essex · Surrey · Kent</div><div className="flex h-full items-stretch max-[760px]:overflow-x-auto">{slides.map((item,i)=><button key={item.label} className={`relative min-w-[132px] cursor-pointer border-0 border-l border-ink/15 bg-transparent px-[18px] text-left text-[9px] font-extrabold tracking-[.13em] text-ink transition-opacity after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:origin-left after:bg-brand-red after:transition-transform max-[760px]:min-h-[76px] ${active===i?'opacity-100 after:scale-x-100':'opacity-50 after:scale-x-0'}`} onClick={()=>setActive(i)} aria-label={`Show ${item.label.toLowerCase()} hero`}><span className="mb-[7px] block text-[8px] text-[#74797d]">0{i+1}</span>{item.label}</button>)}</div></Container></div>
  </section>
}
