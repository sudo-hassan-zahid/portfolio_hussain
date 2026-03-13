import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const practices = [
  {
    title: "Litigation & Court Practice",
    description:
      "Extensive courtroom experience in RWP/ISB district and high courts. Handling complex cases with precision and strategic expertise.",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Legal Drafting & Consultancy",
    description:
      "Professional legal document drafting and comprehensive consultancy services for business and personal matters.",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "ADR & Mediation",
    description:
      "Alternative Dispute Resolution specialist with proven mediation experience. Helping parties reach fair and efficient resolutions.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl animate-blob-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-blob-float animation-delay-2000"></div>
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full border-2 border-indigo-200 dark:border-indigo-800 bg-white/50 dark:bg-indigo-950/50 backdrop-blur-sm px-4 py-2 text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-6 shadow-lg">
            Areas of Practice
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-serif mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Specialized Legal Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Comprehensive legal services backed by years of experience and a proven track record of success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${practice.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}
              />

              <Card className={`relative h-full border-2 border-white/60 dark:border-white/20 bg-gradient-to-br ${practice.bgGradient} backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-3xl`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-50" />

                <CardHeader className="relative z-10 pb-4 pt-8 px-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${practice.gradient} rounded-2xl shadow-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {practice.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold font-serif text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {practice.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 px-8 pb-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    {practice.description}
                  </p>
                </CardContent>

                <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${practice.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
