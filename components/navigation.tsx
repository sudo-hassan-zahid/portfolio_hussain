"use client";

import { useState, memo } from "react";
import Link from "next/link";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D2D2D7] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#1D1D1F] rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-wide transition-opacity duration-200 group-hover:opacity-70">
              HZ
            </div>
            <span className="font-semibold text-[#1D1D1F] text-sm hidden sm:inline tracking-tight transition-opacity duration-200 group-hover:opacity-60">
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
                className="relative text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#8B6914] group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-[#1D1D1F] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#8B6914]"
          >
            Book Now
          </Link>

          <button
            className="md:hidden p-2 rounded-md text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors duration-200"
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
          <div className="md:hidden border-t border-[#D2D2D7] bg-white">
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
                  className="px-4 py-3 text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors duration-150"
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
