import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Use Next.js variable fonts optimization (single woff2 file instead of 10)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  preload: false,
  weight: ["400"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export function generateViewport(): Viewport {
  return {
    themeColor: "#f5f5f5",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  };
}

export const metadata: Metadata = {
  title:
    "Hussain Zahid | Shariah & Law Specialist | Litigation & Legal Consultancy",
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} scroll-smooth`}>
      <head>
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable} ${ebGaramond.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
