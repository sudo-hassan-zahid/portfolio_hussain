"use client"

import { motion } from "framer-motion"

interface SectionSkeletonProps {
  type?: "cards" | "list" | "cta" | "footer"
}

export default function SectionSkeleton({ type = "cards" }: SectionSkeletonProps) {
  if (type === "cta") {
    return (
      <div className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mx-auto w-3/4"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, delay: 0.2, repeat: Infinity }}
            className="h-6 bg-gradient-to-r from-primary/15 to-accent/15 rounded-lg mx-auto w-2/3"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, delay: 0.4, repeat: Infinity }}
            className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mx-auto w-48"
          />
        </div>
      </div>
    )
  }

  if (type === "footer") {
    return (
      <div className="py-12 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
          />
        </div>
      </div>
    )
  }

  if (type === "list") {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-12 w-1/3 mx-auto"
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-12 w-1/3 mx-auto"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
              className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
