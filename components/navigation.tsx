"use client";

import { useState, memo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              HZ
            </div>
            <span className="font-semibold text-foreground hidden sm:inline group-hover:text-primary transition-colors">
              Hussain Zahid
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            {["Practice Areas", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:font-semibold"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border/40 bg-background">
            <div className="flex flex-col gap-1 p-4">
              {["Practice Areas", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
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
