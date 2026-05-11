"use client";

import { useState, memo } from "react";
import Link from "next/link";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D8B866]/35 bg-[var(--legal-ivory)]/88 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[var(--legal-navy)] rounded-lg flex items-center justify-center text-[var(--legal-ivory)] font-bold text-sm tracking-wide transition-opacity duration-200 group-hover:opacity-80">
              HZ
            </div>
            <span className="font-semibold text-[var(--legal-ink)] text-base hidden sm:inline tracking-tight transition-opacity duration-200 group-hover:opacity-70">
              Hussain Zahid
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Practice Areas", href: "#practice-areas" },
              { name: "Experience", href: "#experience" },
              { name: "Reviews", href: "#reviews" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold text-[var(--legal-slate)] hover:text-[var(--legal-navy)] transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--legal-gold)] group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-[var(--legal-mahogany)] px-5 text-sm font-semibold text-[var(--legal-ivory)] transition-colors duration-200 hover:bg-[var(--legal-navy)]"
          >
            Book Now
          </Link>

          <button
            className="md:hidden p-2 rounded-md text-[var(--legal-ink)] hover:bg-[var(--legal-parchment)] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-[#D8B866]/35 bg-[var(--legal-ivory)]">
            <div className="flex flex-col py-3">
              {[
                { name: "Practice Areas", href: "#practice-areas" },
                { name: "Experience", href: "#experience" },
                { name: "Reviews", href: "#reviews" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-semibold text-[var(--legal-slate)] hover:text-[var(--legal-navy)] hover:bg-[var(--legal-parchment)] transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navigation;
