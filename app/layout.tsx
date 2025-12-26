import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Professional sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
})

// Elegant serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Hussain Zahid | Shariah & Law Specialist | Litigation & Legal Consultancy",
  description:
    "Professional legal services in Rawalpindi and Islamabad. Expert in litigation, legal drafting, consultancy, ADR, and mediation. Serving clients across RWP/ISB district and high courts.",
  keywords: [
    "Lawyer Pakistan",
    "Rawalpindi Lawyer",
    "Islamabad Lawyer",
    "Legal Consultancy",
    "Litigation Attorney",
    "ADR Specialist",
    "Shariah Law",
    "Legal Services Pakistan",
  ],
  authors: [{ name: "Hussain Zahid" }],
  openGraph: {
    title: "Hussain Zahid | Legal Expert in Rawalpindi & Islamabad",
    description:
      "Professional legal services specializing in litigation, consultancy, and mediation across RWP/ISB courts.",
    type: "website",
    locale: "en_PK",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
