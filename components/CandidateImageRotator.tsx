"use client";

import { useEffect, useRef, useState } from "react";

export type RotatorImage = {
  src: string;
  /** CSS object-position, used to keep the subject in frame at any crop. */
  position: string;
};

// Each photo is held for 4s; the crossfade itself takes 700ms (duration-700 below).
const HOLD_MS = 4000;

/**
 * A quiet, one-at-a-time crossfade through a set of photos. The frame has a fixed
 * aspect ratio and every image is stacked in it, so nothing shifts between slides.
 * The photos are decorative (the copy next to them carries the meaning), so the
 * frame is hidden from assistive technology.
 *
 * With prefers-reduced-motion the images never cycle: the first one stays put.
 */
export function CandidateImageRotator({
  images,
  className = "",
}: {
  images: readonly RotatorImage[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const current = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const stop = () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
        timer = undefined;
      }
    };

    const sync = () => {
      stop();
      if (query.matches) {
        current.current = 0;
        setPrevious(null);
        setActive(0);
        return;
      }
      timer = window.setInterval(() => {
        const next = (current.current + 1) % images.length;
        setPrevious(current.current);
        setActive(next);
        current.current = next;
      }, HOLD_MS);
    };

    sync();
    query.addEventListener("change", sync);
    return () => {
      stop();
      query.removeEventListener("change", sync);
    };
  }, [images.length]);

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden bg-surface-strong ${className}`}
    >
      {images.map((image, index) => {
        const isActive = index === active;
        // The outgoing photo stays fully opaque underneath while the next one fades in
        // on top, so the frame never dips to the background colour mid-fade.
        const isPrevious = index === previous;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.src}
            src={image.src}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              isActive
                ? "z-[2] opacity-100"
                : isPrevious
                  ? "z-[1] opacity-100"
                  : "z-0 opacity-0"
            }`}
            style={{ objectPosition: image.position }}
          />
        );
      })}
    </div>
  );
}
