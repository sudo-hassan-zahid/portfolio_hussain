import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Scale, Handshake } from "lucide-react"

const practices = [
  {
    icon: Scale,
    title: "Litigation & Court Practice",
    description:
      "Extensive courtroom experience in RWP/ISB district and high courts. Handling complex cases with precision and strategic expertise.",
  },
  {
    icon: Briefcase,
    title: "Legal Drafting & Consultancy",
    description:
      "Professional legal document drafting and comprehensive consultancy services for business and personal matters.",
  },
  {
    icon: Handshake,
    title: "ADR & Mediation",
    description:
      "Alternative Dispute Resolution specialist with proven mediation experience. Helping parties reach fair and efficient resolutions.",
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Optimized static background gradients using CSS */}
      <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-foreground mb-6">
            Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground">
            Specialized expertise in litigation, legal drafting, consultancy, and alternative dispute resolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon
            return (
              <div
                key={index}
                className="group perspective-1000"
              >
                <Card className="h-full border border-border/50 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                      {practice.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
