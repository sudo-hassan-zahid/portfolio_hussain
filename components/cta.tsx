"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { memo } from "react"

const CTA = memo(function CTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-transparent opacity-40"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
        >
          Ready to Discuss Your Legal Matter?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Schedule a confidential consultation to discuss how I can assist with your legal needs. Serving Rawalpindi,
          Islamabad, and beyond with professional expertise and dedication.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 font-semibold"
          >
            Schedule Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 bg-transparent transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Contact Directly
          </Button>
        </motion.div>
      </div>
    </section>
  )
})

export default CTA
