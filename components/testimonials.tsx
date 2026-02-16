"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Hussain provided exceptional legal guidance for our business dispute. His expertise in corporate law and mediation helped us reach a favorable settlement quickly and efficiently.",
    author: "Ahmed Khan",
    title: "CEO, Tech Solutions Ltd.",
    rating: 5,
  },
  {
    quote: "Working with Hussain on our contract negotiations was a game-changer. His attention to detail and strategic approach protected our interests perfectly.",
    author: "Asif Malik",
    title: "Director, Trading Corporation",
    rating: 5,
  },
  {
    quote: "Hussain's courtroom skills are impressive. He represented us with professionalism and dedication, achieving results beyond our expectations.",
    author: "Usman Rashid",
    title: "Business Owner",
    rating: 5,
  },
  {
    quote: "His expertise in Shariah and civil law is remarkable. Hussain navigated complex legal matters with clarity and achieved excellent outcomes for our family.",
    author: "Ali Abdullah",
    title: "Private Client",
    rating: 5,
  },
  {
    quote: "I highly recommend Hussain for any legal consultancy needs. His knowledge, dedication, and client-focused approach make him stand out.",
    author: "Bilal Hassan",
    title: "Managing Partner, Real Estate Firm",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12 reveal-scale-on-scroll">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by individuals and businesses across Pakistan
          </p>
        </div>

        <div className="reveal-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="border border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg h-full bg-card/40 backdrop-blur-sm group">
                      <CardContent className="pt-8 flex flex-col h-full relative">
                        <Quote className="w-8 h-8 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors" />
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-6 flex-grow leading-relaxed text-sm">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="border-t border-border/50 pt-4">
                          <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                          <p className="text-xs text-muted-foreground mt-1">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-accent hover:text-white transition-colors" />
            <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-accent hover:text-white transition-colors" />
          </Carousel>

          <p className="text-center text-sm text-muted-foreground mt-8 md:hidden opacity-60">
            Swipe to see more testimonials →
          </p>
        </div>
      </div>
    </section>
  )
}
