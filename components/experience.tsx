import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ExperienceItem = {
  id: number;
  period: string;
  role: string;
  firm: string;
  description: string;
};

type CredentialItem = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  detail: string;
};

export default function Experience({
  certifications,
  educations,
  experiences,
}: {
  certifications: CredentialItem[];
  educations: CredentialItem[];
  experiences: ExperienceItem[];
}) {
  const credentials = [...educations, ...certifications];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--canvas)] py-24 lg:py-28"
    >
      <div className="orb-field orb-rose left-[-8rem] top-28 h-72 w-72" />
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto reveal-scale-on-scroll">
          <p className="label-eyebrow mb-5">Track Record</p>
          <h2 className="type-section font-serif text-[var(--ink)]">
            Experience &amp; Credentials
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h3 className="type-subsection text-[var(--ink)] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span
                className="w-6 h-[1.5px] rounded-full bg-[var(--hairline-strong)]"
              />
              Professional Journey
            </h3>

            <div className="relative border-l border-[var(--hairline-strong)] ml-3 space-y-10 pb-4">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-8 reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className="absolute -left-[5px] top-[22px] w-[10px] h-[10px] rounded-full border-2 border-[var(--canvas)] bg-[var(--ink)]"
                  />

                  <Card className="editorial-card transition-all duration-300 group">
                    <CardHeader className="pb-2 pt-5 px-6">
                      <div className="flex flex-wrap justify-between items-start gap-3">
                        <div>
                          <CardTitle className="type-card-heading text-[var(--ink)]">
                            {exp.role}
                          </CardTitle>
                          <CardDescription
                            className="font-medium mt-1 text-sm"
                            style={{ color: "var(--muted-copy)" }}
                          >
                            {exp.firm}
                          </CardDescription>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--body)] bg-[var(--surface-strong)] px-3 py-1 rounded-full border border-[var(--hairline)]">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-5">
                      <p className="type-body text-[var(--body)]">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="type-subsection text-[var(--ink)] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span className="w-6 h-[1.5px] rounded-full bg-[var(--hairline-strong)]" />
              Education &amp; Licensing
            </h3>

            <div className="grid gap-3">
              {credentials.map((cred, index) => (
                <div
                  key={`${cred.year}-${cred.id}`}
                  className="reveal-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-card)] p-5 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <p className="type-body font-medium text-[var(--ink)] leading-snug">
                      {cred.title}
                    </p>
                    <p className="type-caption text-[var(--body)] mt-1 mb-3">
                      {cred.issuer}
                    </p>
                    <div className="flex items-center justify-between border-t border-[var(--hairline)] pt-3">
                      <p className="text-xs font-semibold text-[var(--body-strong)]">
                        {cred.year}
                      </p>
                      <span className="rounded-full bg-[var(--surface-strong)] px-2 py-0.5 text-xs font-medium text-[var(--body)]">
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
