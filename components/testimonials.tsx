"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Hussain provided exceptional legal guidance for our business dispute. His expertise in corporate law and mediation helped us reach a favorable settlement quickly and efficiently.",
    author: "Ahmed Khan",
    title: "CEO, Tech Solutions Ltd.",
    rating: 5,
  },
  {
    quote:
      "Working with Hussain on our contract negotiations was a game-changer. His attention to detail and strategic approach protected our interests perfectly.",
    author: "Asif Malik",
    title: "Director, Trading Corporation",
    rating: 5,
  },
  {
    quote:
      "Hussain's courtroom skills are impressive. He represented us with professionalism and dedication, achieving results beyond our expectations.",
    author: "Usman Rashid",
    title: "Business Owner",
    rating: 5,
  },
  {
    quote:
      "His expertise in Shariah and civil law is remarkable. Hussain navigated complex legal matters with clarity and achieved excellent outcomes for our family.",
    author: "Ali Abdullah",
    title: "Private Client",
    rating: 5,
  },
  {
    quote:
      "I highly recommend Hussain for any legal consultancy needs. His knowledge, dedication, and client-focused approach make him stand out.",
    author: "Bilal Hassan",
    title: "Managing Partner, Real Estate Firm",
    rating: 5,
  },
];

// Triple the testimonials for seamless infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.clientWidth * 0.85; // Width of one card
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const nextScroll = scrollRef.current.scrollLeft + cardWidth;

        // If we've scrolled past 2/3, reset to the middle section for seamless loop
        if (nextScroll >= maxScroll * 0.66) {
          scrollRef.current.scrollLeft = maxScroll * 0.33;
          setCurrentIndex(testimonials.length);
        } else {
          scrollRef.current.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
          });
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Initialize scroll position to middle section
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollLeft = cardWidth * testimonials.length;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Update index
      setCurrentIndex(prev => direction === 'left' ? prev - 1 : prev + 1);

      // Handle infinite loop wrapping
      setTimeout(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

          if (scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = maxScroll * 0.33;
          } else if (scrollRef.current.scrollLeft >= maxScroll * 0.66) {
            scrollRef.current.scrollLeft = maxScroll * 0.33;
          }
        }
      }, 500);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#1D1D1F]">
      {/* Subtle warm glow — very faint, monochrome */}
      <div
        className="bg-blob w-[50rem] h-[50rem] top-[-8rem] left-[10%] opacity-[0.06]"
        style={{ backgroundColor: '#8B6914' }}
      />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Gold stars */}
          <div className="inline-flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color: '#8B6914' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h2
            className="type-section font-serif text-white mb-5"
          >
            Trusted by Pakistan&apos;s Finest
          </h2>
          <p className="type-body-lg font-sans text-white/50 max-w-xl mx-auto">
            Delivering excellence in legal representation and consultancy across private and corporate sectors.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="reveal-on-scroll relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:px-0 md:mx-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-center"
              >
                <div className="h-full p-1.5 group/card">
                  <Card className="border border-white/[0.08] bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 h-full relative overflow-hidden rounded-2xl shadow-none">

                    <CardContent className="pt-8 px-7 pb-7 flex flex-col h-full relative z-10">

                      {/* Quote icon + Stars */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(139, 105, 20, 0.2)' }}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#8B6914' }}>
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24" style={{ color: '#8B6914' }}>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <p className="type-body font-sans text-white/80 mb-7 flex-grow">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 border-t border-white/10 pt-5 mt-auto">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                          style={{ backgroundColor: '#8B6914' }}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold font-sans text-white text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-[11px] font-medium font-sans text-white/40 uppercase tracking-wider mt-0.5">
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

          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors duration-200 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors duration-200 items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-scroll indicator */}
          {!isPaused && (
            <div className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 text-[11px] text-white/30 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse"></div>
              Auto-scrolling
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
