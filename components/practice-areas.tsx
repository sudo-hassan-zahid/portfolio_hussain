import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const practices = [
  {
    title: "Litigation & Court Practice",
    description:
      "Extensive courtroom experience in RWP/ISB district and high courts. Handling complex cases with precision and strategic expertise.",
    outcome: "For disputes that need a clear court strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Legal Drafting & Consultancy",
    description:
      "Professional legal document drafting and comprehensive consultancy services for business and personal matters.",
    outcome: "For contracts, notices, pleadings, and legal opinions",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  // {
  //   title: "ADR & Mediation",
  //   description:
  //     "Alternative Dispute Resolution specialist with proven mediation experience. Helping parties reach fair and efficient resolutions.",
  //   outcome: "For matters that can be resolved before they escalate",
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  //     </svg>
  //   ),
  // },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="relative overflow-hidden bg-[var(--canvas-soft)] py-24 lg:py-28">
      <div className="orb-field orb-sky right-[-9rem] top-16 h-72 w-72" />
      <div className="container px-4 sm:px-6 mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <p className="label-eyebrow mb-5">Areas of Practice</p>
          <h2
            className="type-section font-serif text-[var(--ink)]"
          >
            Specialized Legal Expertise
          </h2>
          <p className="mt-5 type-body-lg font-sans text-[var(--body)]">
            Choose the route that fits your matter: courtroom advocacy,
            careful legal drafting, or resolution-focused mediation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {practices.map((practice, index) => (
            <div key={index} className="group">
              <Card className="editorial-card h-full overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1">

                <CardHeader className="pb-4 pt-8 px-8">
                  {/* Icon accent background */}
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[var(--ink)] transition-all duration-300 group-hover:scale-105"
                  >
                    <div>{practice.icon}</div>
                  </div>
                  <CardTitle
                    className="type-card-heading text-[var(--ink)] transition-colors duration-300"
                  >
                    {practice.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <p className="mb-4 border-l border-[var(--hairline-strong)] pl-3 text-base font-medium leading-snug text-[var(--body-strong)]">
                    {practice.outcome}
                  </p>
                  <p className="type-body font-sans text-[var(--body)]">
                    {practice.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex text-[15px] font-medium text-[var(--ink)] transition-opacity duration-200 hover:opacity-60"
                  >
                    Discuss this service
                  </a>
                </CardContent>

                {/* Gold accent bottom line on hover */}
                <div
                  className="h-[1.5px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: "var(--gradient-peach)" }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
