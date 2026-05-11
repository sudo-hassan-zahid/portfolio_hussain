import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    period: "2028 - Present",
    role: "Court Practice",
    firm: "RWP/ISB Session Courts",
    description:
      "Practicing before Rawalpindi and Islamabad session courts with a focus on criminal matters, case preparation, drafting, and client representation.",
  },
  {
    period: "2028 - Present",
    role: "Licensed Mediator",
    firm: "Dispute Resolution Practice",
    description:
      "Supporting clients through structured mediation and settlement-focused dispute resolution where practical, efficient outcomes are possible.",
  },
  {
    period: "2027 - 2028",
    role: "Legal Training & Case Support",
    firm: "Criminal Litigation Preparation",
    description:
      "Built practical courtroom preparation skills through legal research, drafting support, case file organization, and procedural learning.",
  },
];

const credentials = [
  {
    title: "BA/LLB (Hons) Shariah and Law",
    issuer: "International Islamic University Islamabad",
    year: "2023-2028",
    detail: "CGPA: 3.5",
  },
  {
    title: "LLM (Criminal Law)",
    issuer: "Bahria University, Islamabad",
    year: "2028-2030",
    detail: "Specialization",
  },
  {
    title: "Member of Punjab Bar Council",
    issuer: "Punjab Bar Council",
    year: "Since 2028",
    detail: "Licensed Advocate",
  },
  {
    title: "Licensed Mediator",
    issuer: "Mediation Practice",
    year: "Active",
    detail: "ADR",
  },
  {
    title: "RWP/ISB Session Courts Practice",
    issuer: "Rawalpindi & Islamabad",
    year: "Active",
    detail: "Session Courts",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 lg:py-36 bg-[var(--legal-parchment)] relative overflow-hidden"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto reveal-scale-on-scroll">
          <p className="label-eyebrow mb-5">Track Record</p>
          <h2 className="type-section font-serif text-[var(--legal-ink)]">
            Experience &amp; Credentials
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h3 className="type-subsection text-[var(--legal-ink)] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span
                className="w-6 h-[1.5px] rounded-full"
                style={{ backgroundColor: "var(--legal-gold)" }}
              />
              Professional Journey
            </h3>

            <div className="relative border-l border-[var(--legal-gold)]/45 ml-3 space-y-10 pb-4">
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative pl-8 reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className="absolute -left-[5px] top-[22px] w-[10px] h-[10px] rounded-full border-2 border-white"
                    style={{ backgroundColor: "var(--legal-gold)" }}
                  />

                  <Card className="border border-[var(--legal-gold)]/45 bg-[var(--legal-cream)] hover:shadow-[0_4px_24px_rgba(15,20,51,0.12)] transition-all duration-300 shadow-none rounded-lg group">
                    <CardHeader className="pb-2 pt-5 px-6">
                      <div className="flex flex-wrap justify-between items-start gap-3">
                        <div>
                          <CardTitle className="type-card-heading font-serif text-[var(--legal-ink)]">
                            {exp.role}
                          </CardTitle>
                          <CardDescription
                            className="font-medium mt-1 text-sm"
                            style={{ color: "var(--legal-gold)" }}
                          >
                            {exp.firm}
                          </CardDescription>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--legal-slate)] bg-[var(--legal-parchment)] px-3 py-1 rounded-full border border-[var(--legal-gold)]/35">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-5">
                      <p className="type-body text-[var(--legal-slate)]">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="type-subsection text-[var(--legal-ink)] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span className="w-6 h-[1.5px] rounded-full bg-[var(--legal-gold)]" />
              Education &amp; Licensing
            </h3>

            <div className="grid gap-3">
              {credentials.map((cred, index) => (
                <div
                  key={cred.title}
                  className="reveal-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-5 rounded-lg bg-[var(--legal-cream)] border border-transparent hover:border-[var(--legal-gold)]/45 hover:bg-[var(--legal-ivory)] hover:shadow-[0_2px_16px_rgba(15,20,51,0.10)] transition-all duration-300">
                    <p className="type-body font-semibold text-[var(--legal-ink)] leading-snug">
                      {cred.title}
                    </p>
                    <p className="type-caption text-[var(--legal-slate)] mt-1 mb-3">
                      {cred.issuer}
                    </p>
                    <div className="flex items-center justify-between border-t border-[var(--legal-gold)]/35 pt-3">
                      <p className="text-xs font-bold text-[var(--legal-gold)]">
                        {cred.year}
                      </p>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--legal-navy)]/[0.08] text-[var(--legal-navy)]">
                        {cred.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
