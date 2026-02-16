"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Subtle, performance-friendly background elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                Pakistan's Legal Expert
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl font-serif text-foreground leading-tight">
                Hussain Zahid
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Shariah & Law Specialist | Litigation & Legal Consultancy based in <span className="text-primary font-medium">Rawalpindi</span> & <span className="text-primary font-medium">Islamabad</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-12 px-8" asChild>
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8" asChild>
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Cases Won</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Optimized Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5] lg:aspect-square"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-muted shadow-2xl">
              <Image
                src="/images/lawyer/law2.jpg"
                alt="Hussain Zahid - Legal Expert"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Card for Modern Look */}
            <div className="absolute bottom-8 right-8 left-8 p-4 backdrop-blur-md bg-white/10 dark:bg-black/40 border border-white/20 rounded-xl shadow-lg text-white">
              <p className="font-serif font-medium text-lg">"Justice delayed is justice denied."</p>
              <p className="text-sm opacity-80 mt-1">— Legal Philosophy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
