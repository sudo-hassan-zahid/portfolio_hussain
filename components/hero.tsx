"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/10 to-background dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-800/50 py-20 lg:py-32 relative overflow-hidden flex items-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/8 to-transparent opacity-30"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tl from-accent/8 via-primary/5 to-transparent opacity-25"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-[700px] h-[700px] bg-gradient-to-br from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl"
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
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(180, 136, 56, 0.4)",
                    "0 0 35px rgba(180, 136, 56, 0.6)",
                    "0 0 20px rgba(180, 136, 56, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm font-semibold text-accent bg-gradient-to-r from-accent/30 to-accent/20 px-4 py-2 rounded-full border border-accent/40 backdrop-blur-sm inline-block shimmer shadow-lg"
              >
                Pakistan's Legal Expert
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mb-6"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight inline-block drop-shadow-2xl"
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))"
                }}
              >
                Hussain Zahid
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted-foreground mb-4 font-medium"
            >
              Shariah & Law Specialist | Litigation & Legal Consultancy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/20 to-primary/15 rounded-2xl blur-xl"
              />

              <div className="relative glass rounded-2xl p-6 border border-accent/30 bg-card/90 backdrop-blur-md shadow-2xl">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-base text-foreground mb-3 leading-relaxed font-medium"
                >
                  Based in{" "}
                  <motion.span
                    animate={{
                      color: ["rgb(var(--primary))", "rgb(var(--accent))", "rgb(var(--primary))"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-bold text-primary drop-shadow-sm"
                  >
                    Rawalpindi
                  </motion.span>{" "}
                  with extensive courtroom experience in{" "}
                  <span className="font-semibold text-accent">RWP/ISB district and high courts</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  Specializing in{" "}
                  <span className="font-medium text-foreground">litigation, drafting, and legal consultancy</span> with
                  expertise in{" "}
                  <span className="font-medium text-accent">Alternative Dispute Resolution and mediation</span>.
                  Currently leading the{" "}
                  <span className="font-semibold text-primary">Young Lawyer's Association</span> as Chapter Head.
                </motion.p>

                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl"
                />
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1.5, delay: 0.75, repeat: Infinity }}
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-primary/90 hover:via-accent/80 hover:to-primary transition-all hover:shadow-2xl hover:shadow-accent/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10 font-semibold">Schedule Consultation</span>
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link href="#experience">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent/50 hover:border-accent hover:bg-accent/10 bg-transparent transition-all hover:shadow-xl hover:shadow-accent/20 group"
                  >
                    <span className="group-hover:text-accent transition-colors font-medium">View Experience</span>
                  </Button>
                </motion.div>
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
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/25 to-primary/15 rounded-3xl blur-2xl"
              />

              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-2 border border-primary/20 backdrop-blur-sm overflow-hidden">
                <div className="w-full h-full bg-card/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
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
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-72 h-72 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-dashed border-primary-foreground/20 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
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

                  <Image
                    src="/images/lawyer/law2.jpg"
                    alt="Hussain Zahid - Legal Expert"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-accent/50 rounded-2xl blur-xl opacity-50"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
