"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Hussain provided exceptional legal guidance for our business dispute. His expertise in corporate law and mediation helped us reach a favorable settlement quickly and efficiently.",
    author: "Ahmed Khan",
    title: "CEO, Tech Solutions Ltd.",
  },
  {
    quote:
      "Working with Hussain on our contract negotiations was a game-changer. His attention to detail and strategic approach protected our interests perfectly.",
    author: "Asif Malik",
    title: "Director, Trading Corporation",
  },
  {
    quote:
      "Hussain's courtroom skills are impressive. He represented us with professionalism and dedication, achieving results beyond our expectations.",
    author: "Usman Rashid",
    title: "Business Owner",
  },
  {
    quote:
      "His expertise in Shariah and civil law is remarkable. Hussain navigated complex legal matters with clarity and achieved excellent outcomes for our family.",
    author: "Ali Abdullah",
    title: "Private Client",
  },
  {
    quote:
      "I highly recommend Hussain for any legal consultancy needs. His knowledge, dedication, and client-focused approach make him stand out.",
    author: "Bilal Hassan",
    title: "Managing Partner, Real Estate Firm",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-[var(--canvas)] py-24 lg:py-28">
      <div className="orb-field orb-lavender left-[-7rem] top-20 h-72 w-72" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center justify-center gap-1 text-[var(--ink)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <h2 className="type-section mb-5 font-serif text-[var(--ink)]">
              Trusted for calm, focused representation
            </h2>
            <p className="type-body-lg max-w-xl font-sans text-[var(--body)]">
              Practical legal support across private and corporate matters,
              shaped around clarity, discretion, and preparation.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--hairline-strong)] bg-transparent text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-strong)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--hairline-strong)] bg-transparent text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-strong)]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="reveal-on-scroll relative">
          <div
            ref={scrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-8 scrollbar-hide md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="min-w-[85%] snap-center md:min-w-[45%] lg:min-w-[31%]"
              >
                <Card className="editorial-card h-full py-0">
                  <CardContent className="relative z-10 flex h-full flex-col p-8">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[var(--ink)]">
                        <Quote size={18} aria-hidden="true" />
                      </div>
                      <div className="flex gap-0.5 text-[var(--ink)]" aria-label="5 star rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                        ))}
                      </div>
                    </div>

                    <p className="type-body mb-7 flex-grow font-sans text-[var(--body)]">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="mt-auto flex items-center gap-4 border-t border-[var(--hairline)] pt-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-medium text-[var(--on-primary)]">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-sans text-sm font-medium text-[var(--ink)]">
                          {testimonial.author}
                        </p>
                        <p className="mt-0.5 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted-copy)]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
