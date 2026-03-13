import Link from "next/link";
import { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="bg-[#1D1D1F] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">

          {/* Brand */}
          <div>
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white text-sm tracking-wide mb-5">
              HZ
            </div>
            <p className="type-body text-white/40 leading-relaxed max-w-[240px]">
              Specialized litigation attorney and legal consultant based in Rawalpindi. Dedicated to providing excellent legal representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#practice-areas"
                  className="type-body text-white/50 hover:text-white transition-colors duration-200"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="type-body text-white/50 hover:text-white transition-colors duration-200"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="type-body text-white/50 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Get In Touch</h3>
            <p className="text-sm text-white/40 mb-1">Serving RWP/ISB</p>
            <p className="text-sm text-white/40 mb-5">Rawalpindi, Pakistan</p>
            <Link
              href="#contact"
              className="inline-block text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg"
            >
              Schedule Consultation
            </Link>
          </div>

        </div>

        <div className="border-t border-white/[0.08] pt-8">
          <p className="text-center text-xs text-white/25">
            &copy; 2025 Hussain Zahid. All rights reserved. | Legal Services in RWP/ISB
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
