"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-800/50 py-20 lg:py-32 relative overflow-hidden flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-semibold text-accent bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 rounded-full border border-accent/20 backdrop-blur-sm">
                Pakistan's Legal Expert
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6 leading-tight"
            >
              Hussain Zahid
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted-foreground mb-4 font-medium"
            >
              Shariah & Law Specialist | Litigation & Legal Consultancy
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Based in Rawalpindi with extensive courtroom experience in RWP/ISB district and high courts. Specializing
              in litigation, drafting, and legal consultancy with expertise in Alternative Dispute Resolution and
              mediation. Currently leading the Young Lawyer's Association as Chapter Head.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="#experience">
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all hover:border-primary hover:bg-primary/5 bg-transparent hover:shadow-lg"
                >
                  View Experience
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/20 rounded-3xl blur-2xl"
              />

              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-2 border border-primary/20 backdrop-blur-sm overflow-hidden">
                <div className="w-full h-full bg-card/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Professional portrait - elegant placeholder until image is added */}
                  <div className="flex flex-col items-center justify-center gap-6 text-center px-8">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 20px 60px rgba(37, 99, 235, 0.3)",
                          "0 30px 80px rgba(245, 158, 11, 0.4)",
                          "0 20px 60px rgba(37, 99, 235, 0.3)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-72 h-72 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                    >
                      {/* Animated rings */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-dashed border-primary-foreground/20 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8 border-2 border-dotted border-primary-foreground/10 rounded-full"
                      />

                      <div className="relative z-10 flex flex-col items-center">
                        <span className="text-8xl font-bold text-primary-foreground mb-2">HZ</span>
                        <span className="text-sm text-primary-foreground/70 font-medium">Legal Expert</span>
                      </div>
                    </motion.div>
                    <div className="text-muted-foreground">
                      <p className="text-sm font-medium mb-1">Professional Portrait</p>
                      <p className="text-xs opacity-60">Add your photo to /public/images/lawyer-portrait.jpg</p>
                    </div>
                  </div>

                  {/* If you have the image, uncomment below and remove the placeholder above */}
                  <Image
                    src="/images/lawyer/law2.jpg"
                    alt="Hussain Zahid - Legal Expert"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-accent/50 rounded-2xl blur-xl opacity-60"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
