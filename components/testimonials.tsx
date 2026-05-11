"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

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
    <section id="reviews" className="py-32 relative overflow-hidden bg-[var(--legal-mahogany)]">
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
          <div className="inline-flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                style={{ color: "#D8B866" }}
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h2 className="type-section font-serif text-white mb-5">
            Trusted by Pakistan&apos;s Finest
          </h2>
          <p className="type-body-lg font-sans text-[#EEE1C9]/78 max-w-xl">
            Delivering excellence in legal representation and consultancy
            across private and corporate sectors.
          </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8B866]/30 bg-[#F8F1E3]/10 text-[var(--legal-ivory)] backdrop-blur transition-colors duration-200 hover:bg-[#F8F1E3]/18"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8B866]/30 bg-[#F8F1E3]/10 text-[var(--legal-ivory)] backdrop-blur transition-colors duration-200 hover:bg-[#F8F1E3]/18"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="reveal-on-scroll relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:px-0 md:mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-center"
              >
                <div className="h-full p-1.5 group/card">
                  <Card className="border border-[#D8B866]/18 bg-[#6A3031] hover:bg-[#743637] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden rounded-lg shadow-none">
                    <CardContent className="pt-8 px-7 pb-7 flex flex-col h-full relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(216, 184, 102, 0.18)",
                          }}
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ color: "#D8B866" }}
                            aria-hidden="true"
                          >
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>
                        <div className="flex gap-0.5" aria-label="5 star rating">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 24 24"
                              style={{ color: "#D8B866" }}
                              aria-hidden="true"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <p className="type-body font-sans text-[#F8F1E3]/88 mb-7 flex-grow">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="flex items-center gap-4 border-t border-[#D8B866]/18 pt-5 mt-auto">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                          style={{ backgroundColor: "#B8892D" }}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold font-sans text-white text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs font-semibold font-sans text-[#EEE1C9]/55 uppercase tracking-[0.08em] mt-0.5">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
