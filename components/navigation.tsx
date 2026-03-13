"use client";

import { useState, memo } from "react";
import Link from "next/link";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
              HZ
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-lg hidden sm:inline group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Hussain Zahid
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            {[
              { name: "Practice Areas", href: "#practice-areas" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t-2 border-purple-100 dark:border-purple-900 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2 p-4">
              {[
                { name: "Practice Areas", href: "#practice-areas" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-3.5 text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white rounded-xl transition-all shadow-sm hover:shadow-lg"
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
