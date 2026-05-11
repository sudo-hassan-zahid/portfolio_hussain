import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    period: "2023 - Present",
    role: "Chapter Head",
    firm: "Young Lawyer's Association",
    description:
      "Leading the chapter as Chapter Head after previously serving as a member. Managing initiatives and advocating for young legal professionals.",
  },
  {
    period: "2021 - Present",
    role: "Litigation & Consultancy Attorney",
    firm: "Independent Practice",
    description:
      "Actively practicing litigation across RWP/ISB district and high courts. Providing specialized legal consultancy and drafting services. Handling mediation and ADR matters.",
  },
  {
    period: "2020 - 2021",
    role: "Legal Associate",
    firm: "Professional Development",
    description:
      "Developed expertise in court procedures, litigation strategy, and legal documentation. Built foundation in dispute resolution and client representation.",
  },
];

const credentials = [
  {
    title: "LLB Shariah and Law",
    issuer: "5-Year Program",
    year: "2019-2024",
    detail: "CGPA: 3.5",
  },
  {
    title: "FSc (Pre-Engineering)",
    issuer: "Higher Secondary Education",
    year: "2018",
    detail: "Grade: A",
  },
  {
    title: "Matric with Computer Science",
    issuer: "Secondary Education",
    year: "2016",
    detail: "Grade: A+",
  },
  {
    title: "RWP/ISB High Court Admission",
    issuer: "District & High Courts",
    year: "2020",
    detail: "Active Practitioner",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 lg:py-36 bg-[#F5F5F7] relative overflow-hidden"
    >
      <div
        className="bg-blob w-[55rem] h-[55rem] -right-40 top-1/4 opacity-[0.025]"
        style={{ backgroundColor: "#8B6914" }}
      />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto reveal-scale-on-scroll">
          <p className="label-eyebrow mb-5">Track Record</p>
          <h2 className="type-section font-serif text-[#1D1D1F]">
            Experience &amp; Credentials
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h3 className="type-subsection text-[#1D1D1F] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span
                className="w-6 h-[1.5px] rounded-full"
                style={{ backgroundColor: "#8B6914" }}
              />
              Professional Journey
            </h3>

            <div className="relative border-l border-[#D2D2D7] ml-3 space-y-10 pb-4">
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative pl-8 reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className="absolute -left-[5px] top-[22px] w-[10px] h-[10px] rounded-full border-2 border-white"
                    style={{ backgroundColor: "#8B6914" }}
                  />

                  <Card className="border border-[#D2D2D7] bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300 shadow-none rounded-lg group">
                    <CardHeader className="pb-2 pt-5 px-6">
                      <div className="flex flex-wrap justify-between items-start gap-3">
                        <div>
                          <CardTitle className="type-card-heading font-serif text-[#1D1D1F]">
                            {exp.role}
                          </CardTitle>
                          <CardDescription
                            className="font-medium mt-1 text-sm"
                            style={{ color: "#8B6914" }}
                          >
                            {exp.firm}
                          </CardDescription>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6E6E73] bg-[#F5F5F7] px-3 py-1 rounded-full border border-[#D2D2D7]">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-5">
                      <p className="type-body text-[#6E6E73]">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="type-subsection text-[#1D1D1F] font-serif flex items-center gap-3 mb-10 reveal-on-scroll">
              <span className="w-6 h-[1.5px] rounded-full bg-[#D2D2D7]" />
              Education &amp; Licensing
            </h3>

            <div className="grid gap-3">
              {credentials.map((cred, index) => (
                <div
                  key={cred.title}
                  className="reveal-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-5 rounded-lg bg-[#F5F5F7] border border-transparent hover:border-[#D2D2D7] hover:bg-white hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <p className="type-body font-semibold text-[#1D1D1F] leading-snug">
                      {cred.title}
                    </p>
                    <p className="type-caption text-[#6E6E73] mt-1 mb-3">
                      {cred.issuer}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#D2D2D7] pt-3">
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "#8B6914" }}
                      >
                        {cred.year}
                      </p>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1D1D1F]/[0.06] text-[#1D1D1F]/70">
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
