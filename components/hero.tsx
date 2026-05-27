import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const assurances = [
  "Court-ready drafting and strategy",
  "Confidential client intake",
  "Clear next steps before you leave",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--canvas)]">
      <div className="orb-field orb-mint left-[-8rem] top-14 h-72 w-72" />
      <div className="orb-field orb-peach right-[-4rem] top-28 h-80 w-80" />
      <div className="orb-field orb-lavender bottom-4 left-1/2 h-72 w-72 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4 py-24 md:px-6 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl animate-fade-in text-[var(--ink)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-strong)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--gradient-mint)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--body-strong)]">
                Litigation, drafting, mediation
              </span>
            </div>

            <h1 className="type-display mt-7 max-w-[12ch] text-[var(--ink)]">
              Legal clarity with editorial composure.
            </h1>

            <p className="type-body-lg mt-7 max-w-xl text-[var(--body)]">
              Hussain Zahid helps clients in Rawalpindi and Islamabad turn
              difficult legal questions into a practical plan across litigation,
              consultancy, mediation, and Shariah law matters.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="ink-button h-10 px-5 text-[15px] font-medium shadow-none"
                asChild
              >
                <Link href="#contact">Book a Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="outline-button h-10 px-5 text-[15px] font-medium shadow-none hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                asChild
              >
                <Link href="#practice-areas">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-9 grid gap-3 border-t border-[var(--hairline)] pt-7 sm:grid-cols-3">
              {assurances.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-card)]/80 p-4"
                >
                  <span className="mb-3 block h-1.5 w-8 rounded-full bg-[var(--gradient-peach)]" />
                  <p className="text-sm font-medium leading-snug text-[var(--body-strong)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] animate-fade-in animation-delay-200">
            <div className="absolute -left-5 top-10 z-20 hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface-card)] px-5 py-4 text-[var(--ink)] shadow-[0_4px_16px_rgba(0,0,0,0.04)] md:block">
              <p className="label-eyebrow">Consultation Focus</p>
              <p className="mt-1 font-serif text-2xl leading-none">Strategy</p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--canvas-soft)] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/lawyer/law1.jpg"
                alt="Hussain Zahid - Legal Expert"
                fill
                className="object-cover grayscale-[8%]"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 92vw, 500px"
                quality={84}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c0a09]/82 via-[#0c0a09]/24 to-transparent p-6 text-white">
                <p className="font-serif text-2xl leading-tight">
                  Hussain Zahid
                </p>
                <p className="mt-1 text-sm font-medium text-white/72">
                  Shariah &amp; Law Specialist
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 z-20 rounded-2xl border border-[var(--hairline)] bg-[var(--surface-card)] px-5 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <p className="label-eyebrow">Serving</p>
              <p className="mt-1 font-serif text-2xl leading-none text-[var(--ink)]">
                RWP / ISB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
