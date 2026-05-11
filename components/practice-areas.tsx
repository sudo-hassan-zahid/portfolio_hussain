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
  {
    title: "ADR & Mediation",
    description:
      "Alternative Dispute Resolution specialist with proven mediation experience. Helping parties reach fair and efficient resolutions.",
    outcome: "For matters that can be resolved before they escalate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-28 lg:py-36 bg-[var(--legal-navy)] relative overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <p className="label-eyebrow mb-5 text-[var(--legal-accent-soft)]">Areas of Practice</p>
          <h2
            className="type-section font-serif text-white"
          >
            Specialized Legal Expertise
          </h2>
          <p className="mt-5 type-body-lg font-sans text-[var(--legal-parchment)]/88">
            Choose the route that fits your matter: courtroom advocacy,
            careful legal drafting, or resolution-focused mediation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <div key={index} className="group">
              <Card className="h-full border border-[var(--legal-accent)]/28 bg-[#1c2f57] hover:bg-[#203963] shadow-none rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--legal-accent)]/55">

                <CardHeader className="pb-4 pt-8 px-8">
                  {/* Icon accent background */}
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: 'rgba(216, 184, 102, 0.16)' }}
                  >
                    <div className="text-[var(--legal-accent-soft)]">{practice.icon}</div>
                  </div>
                  <CardTitle
                    className="type-card-heading font-serif text-[var(--legal-ivory)] group-hover:text-[var(--legal-accent-soft)] transition-colors duration-300"
                  >
                    {practice.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <p className="mb-4 border-l-2 border-[var(--legal-accent)] pl-3 text-base font-semibold leading-snug text-[var(--legal-parchment)]">
                    {practice.outcome}
                  </p>
                  <p className="type-body font-sans text-[var(--legal-parchment)]/76">
                    {practice.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex text-base font-semibold text-[var(--legal-accent-soft)] transition-colors duration-200 hover:text-[var(--legal-ivory)]"
                  >
                    Discuss this service
                  </a>
                </CardContent>

                {/* Gold accent bottom line on hover */}
                <div
                  className="h-[1.5px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: 'var(--legal-accent)' }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
