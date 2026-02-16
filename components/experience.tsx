import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    role: "Chapter Head",
    firm: "Young Lawyer's Association",
    description: "Leading the chapter as Chapter Head after previously serving as a member. Managing initiatives and advocating for young legal professionals.",
  },
  {
    period: "2021 — Present",
    role: "Litigation & Consultancy Attorney",
    firm: "Independent Practice",
    description: "Actively practicing litigation across RWP/ISB district and high courts. Providing specialized legal consultancy and drafting services. Handling mediation and ADR matters.",
  },
  {
    period: "2020 — 2021",
    role: "Legal Associate",
    firm: "Professional Development",
    description: "Developed expertise in court procedures, litigation strategy, and legal documentation. Built foundation in dispute resolution and client representation.",
  },
]

const credentials = [
  { title: "LLB Shariah and Law", issuer: "5-Year Program", year: "2019-2024", detail: "CGPA: 3.5" },
  { title: "FSc (Pre-Engineering)", issuer: "Higher Secondary Education", year: "2018", detail: "Grade: A" },
  { title: "Matric with Computer Science", issuer: "Secondary Education", year: "2016", detail: "Grade: A+" },
  { title: "RWP/ISB High Court Admission", issuer: "District & High Courts", year: "2020", detail: "Active Practitioner" },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="bg-blob w-[60rem] h-[60rem] bg-primary/10 -right-40 top-1/4 animate-pulse-slow" />
      <div className="bg-blob w-[40rem] h-[40rem] bg-amber-500/10 -left-20 bottom-10 animation-delay-4000" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-center mb-16 reveal-scale-on-scroll">
          <span className="text-foreground">Experience & </span>
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Credentials</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Professional Journey Column */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-8 reveal-on-scroll">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
              Professional Journey
            </h3>

            <div className="relative border-l-2 border-primary/20 ml-3 space-y-12 pb-4">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 reveal-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-glow-primary"></div>

                  <Card className="border-none bg-white/50 dark:bg-black/20 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 group">
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-accent font-medium mt-1 text-base">{exp.firm}</CardDescription>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Column */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-8 reveal-on-scroll">
              <span className="w-8 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></span>
              Education & Licensing
            </h3>

            <div className="grid gap-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="reveal-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-transparent border border-white/20 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>

                    <div className="relative z-10">
                      <p className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">{cred.title}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cred.issuer}</p>
                      <div className="flex items-center justify-between border-t border-dashed border-border/60 pt-3">
                        <p className="text-sm font-semibold text-primary">{cred.year}</p>
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-foreground/5 text-foreground/70">
                          {cred.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
