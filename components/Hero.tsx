"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Container } from "./layout/Container";
import { ButtonLink } from "./ui/ButtonLink";
import { TextLink } from "./ui/TextLink";

const slides = [
  {
    label: "STAFFING",
    src: "/complex-hero-new.mp4",
    //src: "https://videos.pexels.com/video-files/3254006/3254006-uhd_3840_2160_25fps.mp4",
    eyebrow: "UK WORKFORCE SOLUTIONS",
    titleTop: "Looking for staff",
    titleBase: "or",
    titleAccent: "work?",
    intro:
      "Reliable temporary and permanent staffing across Driving, Industrial and Construction.",
  },
  {
    label: "DRIVING",
    src: "/home-driving-hero.jpg",
    eyebrow: "DRIVING DIVISION",
    titleTop: "Drivers that keep",
    titleBase: "your business",
    titleAccent: "moving.",
    intro:
      "Specialist driving recruitment for dependable HGV, multidrop and transport professionals.",
  },
  {
    label: "INDUSTRIAL",
    //src: "https://images.pexels.com/photos/6169178/pexels-photo-6169178.jpeg?auto=compress&cs=tinysrgb&w=2000",
    src: "/home-industrial-hero.jpg",
    eyebrow: "INDUSTRIAL DIVISION",
    titleTop: "Workforce built for",
    titleBase: "the pace of",
    titleAccent: "industry.",
    intro:
      "Flexible staffing across warehousing, logistics, distribution and production environments.",
  },
  {
    label: "CONSTRUCTION",
    src: "/home-construction-hero.jpg",
    // src: "https://images.pexels.com/photos/8138734/pexels-photo-8138734.jpeg?auto=compress&cs=tinysrgb&w=2000",
    eyebrow: "CONSTRUCTION DIVISION",
    titleTop: "Skilled people.",
    titleBase: "Ready for",
    titleAccent: "site.",
    intro:
      "Reliable temporary and permanent staffing for trades, plant and site operations.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide = slides[active];
  useEffect(() => {
    const timer = window.setTimeout(
      () => setActive((active + 1) % slides.length),
      active === 0 ? 7200 : 4800,
    );
    if (active === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    return () => window.clearTimeout(timer);
  }, [active]);
  return (
    <section className="relative isolate grid h-svh grid-rows-[92px_minmax(0,1fr)_108px] overflow-hidden bg-ink text-white max-[760px]:h-auto max-[760px]:min-h-svh max-[760px]:grid-rows-[76px_minmax(0,1fr)_auto]">
      <div className="absolute inset-0 -z-30 bg-ink" aria-hidden="true">
        <video
          ref={videoRef}
          className={`heroMediaItem absolute -inset-[2%] h-[104%] w-[104%] object-cover grayscale-[.55] ${active === 0 ? "active" : ""}`}
          src={slides[0].src}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/videos/3254006/free-video-3254006.jpg?auto=compress&dpr=1&h=750&w=1260"
        />
        {slides.slice(1).map((item, i) => (
          <div
            key={item.label}
            className={`heroMediaItem absolute -inset-[2%] h-[104%] w-[104%] bg-cover grayscale-[.55] ${i === 0 ? "bg-[position:45%_center] max-[760px]:bg-[position:52%_center]" : "bg-center"} ${active === i + 1 ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-brand-grey/30 mix-blend-color" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,10,.88)_0%,rgba(8,8,10,.68)_44%,rgba(8,8,10,.28)_70%,rgba(8,8,10,.42)_100%),linear-gradient(180deg,rgba(7,7,9,.30),rgba(7,7,9,.10)_52%,rgba(7,7,9,.52)_100%)]" />
        <div className="absolute inset-0 opacity-55 mix-blend-screen bg-[linear-gradient(90deg,transparent_49.9%,rgba(255,255,255,.08)_50%,transparent_50.1%),linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:100%_100%,100%_130px]" />
      </div>
      <Header />
      <Container
        gutter="wide"
        className="relative z-[2] grid min-h-0 grid-cols-[minmax(0,1fr)_220px] items-end gap-[70px] py-[54px] max-[900px]:grid-cols-1 max-[900px]:py-10 max-[760px]:items-center max-[760px]:py-14"
      >
        <div className="max-w-[950px]">
          <div className="relative" key={active}>
            <div className="heroEyebrow mb-[30px] text-[10px] font-extrabold tracking-[.2em] before:mr-[13px] before:mb-[3px] before:inline-block before:h-0.5 before:w-9 before:bg-brand-red">
              {slide.eyebrow}{" "}
              <span className="ml-2.5 text-[#b5b8ba] max-[560px]:hidden">
                / ESTABLISHED SPECIALISTS
              </span>
            </div>
            <h1
              className="m-0 max-w-[950px] text-[clamp(58px,6.25vw,104px)] font-bold leading-[.88] tracking-[-.065em] [text-shadow:0_8px_30px_rgba(0,0,0,.18)] max-[560px]:text-5xl"
              aria-label={`${slide.titleTop} ${slide.titleBase} ${slide.titleAccent}`}
            >
              <span className="block overflow-hidden py-[.08em] -my-[.1em]">
                <span className="heroLine heroLineOne block">
                  {slide.titleTop}
                </span>
              </span>
              <span className="block overflow-hidden py-[.08em] -my-[.1em]">
                <span className="heroLine heroLineTwo block">
                  {slide.titleBase}{" "}
                  <em className="not-italic text-brand-red">
                    {slide.titleAccent}
                  </em>
                </span>
              </span>
            </h1>
            <p className="heroIntro my-[30px] mb-7 max-w-[600px] text-[17px] leading-normal text-[#d1d3d4] max-[560px]:text-[15px]">
              {slide.intro}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <ButtonLink href="/request-staff">Request Staff</ButtonLink>
            <TextLink href="/jobs" variant="light" arrowDirection="down-right">
              Find Work
            </TextLink>
          </div>
        </div>
        <aside className="self-end border-t-2 border-brand-red pt-[18px] max-[900px]:hidden">
          <span className="block text-[9px] tracking-[.18em] text-[#c4c7c8]">
            ALWAYS AVAILABLE
          </span>
          <strong className="my-3.5 mb-[7px] block text-[52px] font-bold leading-[.95] tracking-[-.04em]">
            24 <span className="font-medium text-4xl opacity-85">/</span> 7
          </strong>
          <p className="m-0 text-xs uppercase leading-[1.4] tracking-[.08em] text-[#d6d7d8]">
            Operational support
          </p>
        </aside>
      </Container>
      <div className="relative z-[5] h-[108px] border-t border-white/25 bg-brand-grey text-white shadow-[0_-10px_32px_rgba(0,0,0,.045)] backdrop-blur-lg max-[760px]:h-auto">
        <Container
          gutter="wide"
          className="grid h-full grid-cols-[1fr_auto] items-center gap-10 max-[760px]:block max-[760px]:w-full"
        >
          <div className="flex flex-col items-start justify-center gap-[6px] text-[17px] tracking-[.02em] text-white max-[1100px]:text-[15px] max-[760px]:hidden">
            <span className="text-[8px] font-extrabold tracking-[.18em] text-white/65">
              AREAS WE COVER
            </span>
            <span>London · Greater London · Essex · Surrey · Kent</span>
          </div>
          <div className="flex h-full items-stretch max-[760px]:overflow-x-auto">
            {slides.map((item, i) => (
              <button
                key={item.label}
                className={`relative min-w-[132px] cursor-pointer border-0 border-l border-white/25 bg-transparent px-[18px] text-left text-[9px] font-extrabold tracking-[.07em] text-white transition-opacity after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:origin-left after:bg-brand-red after:transition-transform max-[760px]:min-h-[76px] ${active === i ? "opacity-100 after:scale-x-100" : "opacity-50 after:scale-x-0"}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${item.label.toLowerCase()} hero`}
                aria-pressed={active === i}
              >
                <span className="block min-h-[30px]">
                  <span className="block leading-[14px]">{item.label}</span>
                  {i > 0 && (
                    <span className="mt-1.5 block text-[12px] font-medium leading-[12px] tracking-normal text-white/75">
                      Staff
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
