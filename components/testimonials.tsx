import { Quote, Star } from "lucide-react";
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
  return (
    <section id="reviews" className="relative overflow-hidden bg-[var(--canvas)] py-24 lg:py-28">
      <div className="orb-field orb-lavender left-[-7rem] top-20 h-72 w-72" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="reveal-on-scroll">
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
    </section>
  );
}
