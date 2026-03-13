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
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-blob-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-400 to-orange-500 rounded-full blur-3xl animate-blob-float animation-delay-2000"></div>
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-amber-400 fill-amber-400 drop-shadow-lg" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-serif mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Trusted by Pakistan&apos;s Finest
            </span>
          </h2>
          <p className="text-xl font-sans text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence in legal representation and consultancy across private and corporate sectors.
          </p>
        </div>

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
                <div className="h-full p-2 group/card">
                  <Card className="border-2 border-white/60 dark:border-white/20 bg-gradient-to-br from-white/95 to-white/80 dark:from-gray-900/95 dark:to-gray-900/80 backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] h-full relative overflow-hidden rounded-3xl group-hover/card:border-purple-300 dark:group-hover/card:border-purple-700">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-rose-400/20 rounded-bl-full opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-400/20 via-orange-400/20 to-amber-400/20 rounded-tr-full opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                    <CardContent className="pt-10 px-8 pb-8 flex flex-col h-full relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 group-hover/card:rotate-0 transition-transform duration-500">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-200 font-sans mb-8 flex-grow leading-relaxed text-lg">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="flex items-center gap-4 border-t-2 border-gradient-to-r from-purple-200 via-pink-200 to-rose-200 dark:from-purple-900 dark:via-pink-900 dark:to-rose-900 pt-6 mt-auto relative">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white dark:ring-gray-900">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                        </div>
                        <div>
                          <p className="font-bold font-sans text-gray-900 dark:text-white text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-xs font-semibold font-sans text-purple-600 dark:text-purple-400 uppercase tracking-wider">
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

          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-purple-200 dark:border-purple-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white transition-all shadow-xl items-center justify-center group/btn"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-purple-600 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 rounded-full border-2 border-purple-200 dark:border-purple-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white transition-all shadow-xl items-center justify-center group/btn"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-purple-600 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-scroll indicator */}
          {!isPaused && (
            <div className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-semibold">
              <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></div>
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
