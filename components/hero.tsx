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
    <section className="relative overflow-hidden bg-[#F7F3EA]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,29,31,0.98)_0%,rgba(29,29,31,0.94)_47%,rgba(247,243,234,0)_47%)]" />
      <div className="container relative z-10 mx-auto px-4 py-24 md:px-6 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl animate-fade-in text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Litigation, drafting, mediation
              </span>
            </div>

            <h1 className="type-display mt-7 max-w-[12ch] text-white">
              Legal clarity when the stakes feel high.
            </h1>

            <p className="type-body-lg mt-7 max-w-xl text-white/72">
              Hussain Zahid helps clients in Rawalpindi and Islamabad move from
              confusion to a practical legal plan, with focused advocacy across
              litigation, consultancy, and Shariah law matters.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-[#C9A84C] px-7 text-sm font-semibold text-[#1D1D1F] shadow-none transition-colors duration-200 hover:bg-[#D8B95B]"
                asChild
              >
                <Link href="#contact">Book a Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/25 bg-white/0 px-7 text-sm font-semibold text-white shadow-none transition-colors duration-200 hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="#practice-areas">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-9 grid gap-3 border-t border-white/15 pt-7 sm:grid-cols-3">
              {assurances.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  <p className="text-sm font-medium leading-snug text-white/72">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] animate-fade-in animation-delay-200">
            <div className="absolute -left-6 top-8 z-20 hidden rounded-lg border border-white/15 bg-[#1D1D1F]/88 px-5 py-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur md:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
                Consultation Focus
              </p>
              <p className="mt-1 font-serif text-2xl leading-none">Strategy</p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#D2D2D7] bg-white shadow-[0_26px_80px_rgba(29,29,31,0.28)]">
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white">
                <p className="font-serif text-2xl leading-tight">
                  Hussain Zahid
                </p>
                <p className="mt-1 text-sm font-medium text-white/70">
                  Shariah &amp; Law Specialist
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 z-20 rounded-lg border border-[#D2D2D7] bg-white px-5 py-4 shadow-[0_16px_50px_rgba(29,29,31,0.18)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">
                Serving
              </p>
              <p className="mt-1 font-serif text-2xl leading-none text-[#1D1D1F]">
                RWP / ISB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
