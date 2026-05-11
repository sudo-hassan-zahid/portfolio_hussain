import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const assurances = [
  "Clear next steps before you leave",
  "Court-ready drafting and strategy",
  "Discreet handling of sensitive matters",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--legal-ivory)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,50,74,0.98)_0%,rgba(90,39,40,0.92)_46%,rgba(248,241,227,0)_46%)]" />
      <div className="container relative z-10 mx-auto px-4 py-24 md:px-6 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl animate-fade-in text-[var(--legal-ivory)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B866]/35 bg-[#F8F1E3]/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--legal-gold-soft)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F8F1E3]/78">
                Litigation, drafting, mediation
              </span>
            </div>

            <h1 className="type-display mt-7 max-w-[12ch] text-[var(--legal-ivory)]">
              Legal clarity when the stakes feel high.
            </h1>

            <p className="type-body-lg mt-7 max-w-xl text-[#EEE1C9]">
              Hussain Zahid helps clients in Rawalpindi and Islamabad move from
              confusion to a practical legal plan, with focused advocacy across
              litigation, consultancy, and Shariah law matters.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-[var(--legal-gold)] px-7 text-base font-semibold text-[var(--legal-ink)] shadow-none transition-colors duration-200 hover:bg-[var(--legal-gold-soft)]"
                asChild
              >
                <Link href="#contact">Book a Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-[#EEE1C9]/35 bg-transparent px-7 text-base font-semibold text-[var(--legal-ivory)] shadow-none transition-colors duration-200 hover:bg-[#F8F1E3]/10 hover:text-[var(--legal-ivory)]"
                asChild
              >
                <Link href="#practice-areas">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-9 grid gap-3 border-t border-[#EEE1C9]/25 pt-7 sm:grid-cols-3">
              {assurances.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--legal-gold-soft)]" />
                  <p className="text-sm font-medium leading-snug text-[#EEE1C9]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] animate-fade-in animation-delay-200">
            <div className="absolute -left-6 top-8 z-20 hidden rounded-lg border border-[#D8B866]/30 bg-[var(--legal-navy)]/90 px-5 py-4 text-[var(--legal-ivory)] shadow-[0_18px_60px_rgba(23,32,46,0.28)] backdrop-blur md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#EEE1C9]/65">
                Consultation Focus
              </p>
              <p className="mt-1 font-serif text-2xl leading-none">Strategy</p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#D8B866]/45 bg-[var(--legal-parchment)] shadow-[0_26px_80px_rgba(23,32,46,0.28)]">
              <Image
                src="/images/lawyer/law1.webp"
                alt="Hussain Zahid - Legal Expert"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 92vw, 500px"
                quality={84}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17202E]/78 via-[#17202E]/24 to-transparent p-6 text-[var(--legal-ivory)]">
                <p className="font-serif text-2xl leading-tight">
                  Hussain Zahid
                </p>
                <p className="mt-1 text-sm font-medium text-[#EEE1C9]">
                  Shariah &amp; Law Specialist
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 z-20 rounded-lg border border-[#D8B866]/45 bg-[var(--legal-ivory)] px-5 py-4 shadow-[0_16px_50px_rgba(23,32,46,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--legal-slate)]">
                Serving
              </p>
              <p className="mt-1 font-serif text-2xl leading-none text-[var(--legal-ink)]">
                RWP / ISB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
