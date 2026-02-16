import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <h2 className="text-4xl font-bold font-serif text-foreground mb-12 text-center reveal-scale-on-scroll">
          Experience & Credentials
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6 reveal-on-scroll">
              Professional Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="reveal-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="border border-border/50 hover:border-accent/50 transition-colors duration-300 hover:shadow-lg bg-card/60 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div>
                          <CardTitle className="text-lg text-foreground font-serif group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-accent mt-1 font-medium">{exp.firm}</CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 reveal-on-scroll">
              Credentials
            </h3>
            <div className="space-y-6">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="reveal-on-scroll border-l-4 border-accent pl-4 py-2 hover:bg-accent/5 transition-colors rounded-r-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-semibold text-foreground text-sm">{cred.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cred.issuer}</p>
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <p className="text-xs text-accent font-semibold">{cred.year}</p>
                    <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
                      {cred.detail}
                    </p>
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
