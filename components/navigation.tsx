"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { memo } from "react"

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass shadow-lg shadow-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30"
            >
              HZ
            </motion.div>
            <span className="font-semibold text-foreground hidden sm:inline group-hover:text-primary transition-colors">
              Hussain Zahid
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              href="#practice"
              className="relative text-foreground hover:text-primary transition-all font-medium group"
            >
              Practice Areas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#experience"
              className="relative text-foreground hover:text-primary transition-all font-medium group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#contact"
              className="relative text-foreground hover:text-primary transition-all font-medium group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4">
                <Link
                  href="#practice"
                  className="text-foreground hover:text-primary transition px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Practice Areas
                </Link>
                <Link
                  href="#experience"
                  className="text-foreground hover:text-primary transition px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
})

export default Navigation
