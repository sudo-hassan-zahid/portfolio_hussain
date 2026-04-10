import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(139,105,20,0.06) 0%, #ffffff 65%)' }}>
      {/* Extremely subtle warm tint blob — monochrome, near-invisible */}
      <div
        className="bg-blob w-[50rem] h-[50rem] top-[-12rem] right-[-14rem] opacity-[0.04]"
        style={{ backgroundColor: '#8B6914' }}
      />
      <div
        className="bg-blob w-[40rem] h-[40rem] bottom-[-8rem] left-[-10rem] opacity-[0.03] animation-delay-2000"
        style={{ backgroundColor: '#1D1D1F' }}
      />

      <div className="container px-4 md:px-6 mx-auto z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left column — photo (desktop: left, mobile: second) */}
          <div className="relative mx-auto lg:mr-auto w-full max-w-[480px] aspect-[4/5] animate-fade-in animation-delay-200 group order-2 lg:order-1">
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#D2D2D7] shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.14)] transition-shadow duration-500">
              <Image
                src="/images/lawyer/law1.webp"
                alt="Hussain Zahid - Legal Expert"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 480px"
                quality={100}
                unoptimized
              />
              {/* Subtle bottom scrim for quote readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            {/* Quote card — clean white, gold accent line */}
            <div className="absolute bottom-6 right-6 left-6 p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
              <p className="font-serif font-semibold text-[15px] leading-snug text-[#1D1D1F]">
                &quot;Justice delayed is justice denied.&quot;
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-[1.5px] w-8 rounded-full" style={{ backgroundColor: '#8B6914' }}></div>
                <p className="label-eyebrow">Our Philosophy</p>
              </div>
            </div>
          </div>

          {/* Right column — text (desktop: right, mobile: first) */}
          <div className="flex flex-col justify-center space-y-10 animate-fade-in order-1 lg:order-2">
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914]" />
                <span className="label-eyebrow">Pakistan&apos;s Legal Expert</span>
              </div>

              {/* Display headline */}
              <h1
                className="type-display text-[#1D1D1F]"
              >
                Expert Advocacy,
                <br />
                <span style={{ color: '#8B6914' }}>Hussain Zahid</span>
              </h1>

              <p
                className="type-body-lg font-sans text-[#6E6E73] max-w-[480px]"
              >
                Shariah &amp; Law Specialist — Litigation &amp; Legal Consultancy
                based in{" "}
                <span className="font-medium text-[#1D1D1F]">Rawalpindi</span>{" "}
                &amp;{" "}
                <span className="font-medium text-[#1D1D1F]">Islamabad</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-[13px] h-11 px-7 rounded-full bg-[#1D1D1F] text-white hover:bg-[#2D2D2F] transition-colors duration-200 shadow-none border-none font-medium tracking-[0.01em]"
                asChild
              >
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-[13px] h-11 px-7 rounded-full border border-[#D2D2D7] text-[#1D1D1F] bg-transparent hover:bg-[#F5F5F7] transition-colors duration-200 shadow-none font-medium tracking-[0.01em]"
                asChild
              >
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-[#D2D2D7] grid grid-cols-3 gap-6">
              <div>
                <p className="type-stat font-serif text-[#1D1D1F]">500+</p>
                <p className="font-sans text-[#6E6E73] mt-2 uppercase tracking-[0.08em] text-[11px] font-semibold">Cases Won</p>
              </div>
              <div>
                <p className="type-stat font-serif text-[#1D1D1F]">8+</p>
                <p className="font-sans text-[#6E6E73] mt-2 uppercase tracking-[0.08em] text-[11px] font-semibold">Years Exp.</p>
              </div>
              <div>
                <p className="type-stat font-serif text-[#1D1D1F]">100%</p>
                <p className="font-sans text-[#6E6E73] mt-2 uppercase tracking-[0.08em] text-[11px] font-semibold">Commitment</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
