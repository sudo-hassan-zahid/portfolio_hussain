"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { memo, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Experience", href: "#experience" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--hairline)] bg-[var(--canvas)]/92 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-medium tracking-wide text-[var(--on-primary)] transition-opacity duration-200 group-hover:opacity-85">
              HZ
            </span>
            <span className="hidden text-[15px] font-medium tracking-0 text-[var(--ink)] transition-opacity duration-200 group-hover:opacity-70 sm:inline">
              Hussain Zahid
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-[var(--body)] transition-colors duration-200 hover:text-[var(--ink)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="#contact"
              className="inline-flex h-10 items-center rounded-full bg-[var(--primary)] px-5 text-[15px] font-medium text-[var(--on-primary)] transition-colors duration-200 hover:bg-[var(--primary-active)]"
            >
              Book Now
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--hairline-strong)] text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-strong)]"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-[var(--hairline)] bg-[var(--canvas)]">
            <div className="flex flex-col py-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-[var(--body)] transition-colors duration-150 hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mx-4 mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-medium text-[var(--on-primary)]"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navigation;
