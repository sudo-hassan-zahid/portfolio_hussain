"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    period: "2023 — Present",
    role: "Chapter Head",
    firm: "Young Lawyer's Association",
    description:
      "Leading the chapter as Chapter Head after previously serving as a member. Managing initiatives and advocating for young legal professionals.",
  },
  {
    period: "2021 — Present",
    role: "Litigation & Consultancy Attorney",
    firm: "Independent Practice",
    description:
      "Actively practicing litigation across RWP/ISB district and high courts. Providing specialized legal consultancy and drafting services. Handling mediation and ADR matters.",
  },
  {
    period: "2020 — 2021",
    role: "Legal Associate",
    firm: "Professional Development",
    description:
      "Developed expertise in court procedures, litigation strategy, and legal documentation. Built foundation in dispute resolution and client representation.",
  },
]

const credentials = [
  { title: "LLB Shariah and Law", issuer: "5-Year Program", year: "2019-2024", detail: "CGPA: 3.5" },
  { title: "FSc (Pre-Engineering)", issuer: "Higher Secondary Education", year: "2018", detail: "Grade: A" },
  { title: "Matric with Computer Science", issuer: "Secondary Education", year: "2016", detail: "Grade: A+" },
  {
    title: "RWP/ISB High Court Admission",
    issuer: "District & High Courts",
    year: "2020",
    detail: "Active Practitioner",
  },
]

import { memo } from "react"

const Experience = memo(function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-16 text-center"
        >
          Experience & Credentials
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-foreground mb-8"
            >
              Professional Journey
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 glass group">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div>
                          <CardTitle className="text-lg text-foreground font-serif group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-accent mt-1 font-medium">{exp.firm}</CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap bg-gradient-to-r from-accent/10 to-primary/10 px-3 py-1.5 rounded-full border border-accent/20">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-foreground mb-8"
            >
              Credentials
            </motion.h3>
            <div className="space-y-6">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-accent pl-4 bg-card/30 backdrop-blur-sm py-3 rounded-r-lg hover:bg-card/50 transition-all"
                >
                  <p className="font-semibold text-foreground text-sm">{cred.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cred.issuer}</p>
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <p className="text-xs text-accent font-semibold">{cred.year}</p>
                    <p className="text-xs text-muted-foreground bg-gradient-to-r from-accent/10 to-primary/10 px-2 py-1 rounded border border-border/30">
                      {cred.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Experience
