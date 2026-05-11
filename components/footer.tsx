import Link from "next/link";
import { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--canvas)] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">

          {/* Brand */}
          <div>
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-medium tracking-wide text-[var(--on-primary)]">
              HZ
            </div>
            <p className="type-body max-w-[240px] leading-relaxed text-[var(--body)]">
              Specialized litigation attorney and legal consultant based in Rawalpindi. Dedicated to providing excellent legal representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--muted-copy)]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#practice-areas"
                  className="type-body text-[var(--body)] transition-colors duration-200 hover:text-[var(--ink)]"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="type-body text-[var(--body)] transition-colors duration-200 hover:text-[var(--ink)]"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="type-body text-[var(--body)] transition-colors duration-200 hover:text-[var(--ink)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--muted-copy)]">Get In Touch</h3>
            <p className="mb-1 text-sm text-[var(--body)]">Serving RWP/ISB</p>
            <p className="mb-5 text-sm text-[var(--body)]">Rawalpindi, Pakistan</p>
            <Link
              href="#contact"
              className="outline-button inline-flex h-10 items-center px-5 text-sm font-medium transition-colors duration-200 hover:bg-[var(--surface-strong)]"
            >
              Schedule Consultation
            </Link>
          </div>

        </div>

        <div className="border-t border-[var(--hairline)] pt-8">
          <p className="text-center text-xs text-[var(--muted-copy)]">
            &copy; {new Date().getFullYear()} Hussain Zahid. All rights reserved. | Legal Services in RWP/ISB
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
