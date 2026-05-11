import { Menu } from "lucide-react";
import Link from "next/link";
import BrandMark from "@/components/brand-mark";

const navItems = [
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Experience", href: "#experience" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--hairline)] bg-[var(--canvas)]/92 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <BrandMark compact className="transition-opacity duration-200 group-hover:opacity-85" />
            <span className="hidden text-[15px] font-medium text-[var(--ink)] transition-opacity duration-200 group-hover:opacity-70 sm:inline">
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

          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center rounded-full bg-[var(--primary)] px-5 text-[15px] font-medium text-[var(--on-primary)] transition-colors duration-200 hover:bg-[var(--primary-active)]"
            >
              Book Now
            </Link>
          </div>

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--hairline-strong)] text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-strong)] [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" size={18} />
              <span className="sr-only">Toggle menu</span>
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-[var(--body)] transition-colors duration-150 hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="mx-4 mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-medium text-[var(--on-primary)]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
