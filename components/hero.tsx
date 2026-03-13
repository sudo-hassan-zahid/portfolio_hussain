import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div className="bg-blob w-[40rem] h-[40rem] bg-primary/20 top-[-10rem] right-[-10rem]" />
      <div className="bg-blob w-[35rem] h-[35rem] bg-secondary/30 bottom-[-5rem] left-[-8rem] animation-delay-2000" />
      <div className="bg-blob w-[30rem] h-[30rem] bg-accent/20 top-[40%] right-[20%] animation-delay-4000 opacity-20" />

      <div className="container px-4 md:px-6 mx-auto z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-white/40 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-primary shadow-sm hover:bg-white/60 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Pakistan&apos;s Legal Expert
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl font-serif leading-[1.1]">
                <span className="text-foreground">Expert Advocacy,</span>
                <br />
                <span className="text-gradient from-primary via-blue-700 to-accent bg-clip-text text-transparent bg-gradient-to-r">
                  Hussain Zahid
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Shariah & Law Specialist | Litigation & Legal Consultancy based
                in{" "}
                <span className="font-semibold text-foreground border-b-2 border-primary/30">
                  Rawalpindi
                </span>{" "}
                &{" "}
                <span className="font-semibold text-foreground border-b-2 border-primary/30">
                  Islamabad
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                className="text-base h-14 px-8 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-primary to-blue-700 border-none"
                asChild
              >
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base h-14 px-8 rounded-full border-2 bg-transparent hover:bg-secondary/10 hover:border-secondary transition-all"
                asChild
              >
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/60 grid grid-cols-3 gap-6 text-center">
              <div className="glass p-4 rounded-2xl border-none">
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Cases Won
                </p>
              </div>
              <div className="glass p-4 rounded-2xl border-none">
                <p className="text-3xl font-bold text-foreground">8+</p>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Years Exp.
                </p>
              </div>
              <div className="glass p-4 rounded-2xl border-none">
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5] lg:aspect-[4/5] animate-fade-in animation-delay-200 group">
            <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500">
              <Image
                src="/images/lawyer/law1.webp"
                alt="Hussain Zahid - Legal Expert"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 500px"
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400/30 via-orange-500/30 to-red-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-blue-600/30 via-indigo-600/30 to-purple-600/30 rounded-full blur-3xl animation-delay-1000" />

            <div className="absolute bottom-8 right-8 left-8 p-6 bg-gradient-to-br from-white/90 via-white/85 to-white/80 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg">
              <p className="font-serif font-semibold text-lg leading-snug text-gray-900 dark:text-white">
                &quot;Justice delayed is justice denied.&quot;
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-[2px] w-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                <p className="text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                  Our Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
