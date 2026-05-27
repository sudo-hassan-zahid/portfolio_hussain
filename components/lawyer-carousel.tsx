"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "/images/lawyer/hussain1.jpg",
    alt: "Hussain Zahid seated for a professional legal portrait",
  },
  {
    src: "/images/lawyer/hussain2.jpg",
    alt: "Hussain Zahid in formal professional attire",
  },
  {
    src: "/images/lawyer/hussain3.jpg",
    alt: "Hussain Zahid legal profile portrait",
  },
  {
    src: "/images/lawyer/hussain4.jpg",
    alt: "Hussain Zahid advocate portrait",
  },
];

export default function LawyerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(showNext, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, showNext]);

  return (
    <div
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--canvas-soft)] shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover grayscale-[8%] transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "auto"}
          sizes="(max-width: 768px) 92vw, 500px"
          quality={86}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c0a09]/82 via-[#0c0a09]/24 to-transparent p-6 text-white">
        <p className="font-serif text-2xl leading-tight">Hussain Zahid</p>
        <p className="mt-1 text-sm font-medium text-white/72">
          Shariah &amp; Law Specialist
        </p>
      </div>

      <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="h-10 w-10 rounded-full border border-white/35 bg-white/85 text-[var(--ink)] shadow-none backdrop-blur hover:bg-white"
          onClick={showPrevious}
          aria-label="Show previous portrait"
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="h-10 w-10 rounded-full border border-white/35 bg-white/85 text-[var(--ink)] shadow-none backdrop-blur hover:bg-white"
          onClick={showNext}
          aria-label="Show next portrait"
        >
          <ChevronRight aria-hidden="true" size={18} />
        </Button>
      </div>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`h-2.5 rounded-full border border-white/70 transition-all duration-200 ${
              index === activeIndex ? "w-6 bg-white" : "w-2.5 bg-white/30"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show portrait ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
