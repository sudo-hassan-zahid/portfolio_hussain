"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

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
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="bg-blob w-[50rem] h-[50rem] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 -left-40 top-1/4 mix-blend-multiply" />
      <div className="bg-blob w-[45rem] h-[45rem] bg-gradient-to-tr from-amber-200/20 to-orange-400/20 -right-40 bottom-1/4 animation-delay-2000 mix-blend-multiply" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 reveal-scale-on-scroll max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse animation-delay-200" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse animation-delay-400" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse animation-delay-200" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
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

        <div className="reveal-on-scroll">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4 py-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-2 group perspective-1000">
                    <Card className="border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full relative overflow-hidden rounded-3xl group-hover:rotate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <CardContent className="pt-10 px-8 pb-8 flex flex-col h-full relative z-10">
                        <Quote className="w-12 h-12 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors transform group-hover:scale-110 duration-500" />

                        <p className="text-foreground/80 italic mb-8 flex-grow leading-loose text-lg font-medium">
                          &quot;{testimonial.quote}&quot;
                        </p>

                        <div className="flex items-center gap-4 border-t border-primary/10 pt-6 mt-auto">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
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
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <div className="w-2 h-2 rounded-full bg-primary/20"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary/20"></div>
            </div>

            <CarouselPrevious className="hidden md:flex -left-4 w-14 h-14 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl" />
            <CarouselNext className="hidden md:flex -right-4 w-14 h-14 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
