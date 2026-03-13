"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

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

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="bg-blob w-[50rem] h-[50rem] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 -left-40 top-1/4 mix-blend-multiply" />
      <div className="bg-blob w-[45rem] h-[45rem] bg-gradient-to-tr from-amber-200/20 to-orange-400/20 -right-40 bottom-1/4 animation-delay-2000 mix-blend-multiply" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 reveal-scale-on-scroll max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse ${i === 1 || i === 3 ? 'animation-delay-200' : i === 2 ? 'animation-delay-400' : ''}`} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-serif mb-6 tracking-tight leading-tight">
            Trusted by
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-primary">
              {" "}
              Pakistan&apos;s Finest
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering excellence in legal representation and consultancy across
            private and corporate sectors.
          </p>
        </div>

        <div className="reveal-on-scroll relative group">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:px-0 md:mx-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-center"
              >
                <div className="h-full p-2 group/card perspective-1000">
                  <Card className="border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <CardContent className="pt-10 px-8 pb-8 flex flex-col h-full relative z-10">
                      <svg className="w-12 h-12 text-primary/20 mb-6 group-hover/card:text-primary/40 transition-colors transform group-hover/card:scale-110 duration-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>

                      <p className="text-foreground/80 italic mb-8 flex-grow leading-loose text-lg font-medium">
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="flex items-center gap-4 border-t border-primary/10 pt-6 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-base group-hover/card:text-primary transition-colors">
                            {testimonial.author}
                          </p>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
            disabled={!canScrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
