import Link from "next/link"
import { memo } from "react"

const Footer = memo(function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold mb-4 text-sm">
              HZ
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Specialized litigation attorney and legal consultant based in Rawalpindi. Dedicated to providing excellent
              legal representation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#practice" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">Serving RWP/ISB</p>
            <p className="text-sm text-primary-foreground/80">Rawalpindi, Pakistan</p>
            <button className="mt-4 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all border border-primary-foreground/30 hover:border-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-foreground/10">
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2025 Hussain Zahid. All rights reserved. | Legal Services in RWP/ISB
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
