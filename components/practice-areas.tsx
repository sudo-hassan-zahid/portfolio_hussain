import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Scale, Handshake } from "lucide-react";

const practices = [
  {
    icon: Scale,
    title: "Litigation & Court Practice",
    description:
      "Extensive courtroom experience in RWP/ISB district and high courts. Handling complex cases with precision and strategic expertise.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Briefcase,
    title: "Legal Drafting & Consultancy",
    description:
      "Professional legal document drafting and comprehensive consultancy services for business and personal matters.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Handshake,
    title: "ADR & Mediation",
    description:
      "Alternative Dispute Resolution specialist with proven mediation experience. Helping parties reach fair and efficient resolutions.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="bg-blob w-[50rem] h-[50rem] bg-indigo-500/20 -left-20 top-20" />
      <div className="bg-blob w-[40rem] h-[40rem] bg-rose-500/10 -right-20 bottom-0 animation-delay-2000" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
            What We Do
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif mb-6">
            <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r">
              Specialized Legal expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Focused representation in litigation, meticulous drafting, and
            effective dispute resolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${practice.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <Card className="h-full border border-white/20 bg-white/40 dark:bg-black/20 backdrop-blur-xl hover:bg-white/60 dark:hover:bg-black/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden will-change-transform">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-700">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-white/50 dark:from-white/10 dark:to-white/5 rounded-2xl border border-white/20 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {practice.description}
                    </p>
                  </CardContent>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
