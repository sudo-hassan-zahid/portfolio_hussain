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
  metadataBase: new URL("https://hussain-zahid.vercel.app"),
  title: "Hussain Zahid | Tax Advisor & Legal Consultant",
  description:
    "Certified tax advisor and legal consultant in Rawalpindi and Islamabad, supporting FBR filings, NTN registration, tax returns, court practice, and mediation.",
  keywords: [
    "Tax Advisor Pakistan",
    "FBR Tax Filing",
    "NTN Registration",
    "Tax Returns Pakistan",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hussain Zahid | Tax Advisor & Legal Consultant",
    description:
      "FBR tax filing, NTN registration, tax returns, court practice, and mediation support across Rawalpindi and Islamabad.",
    url: "/",
    siteName: "Hussain Zahid",
    images: [
      {
        url: "/images/lawyer/law1.jpg",
        width: 653,
        height: 949,
        alt: "Hussain Zahid",
      },
    ],
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain Zahid | Tax Advisor & Legal Consultant",
    description:
      "FBR tax filing, NTN registration, tax returns, court practice, and mediation support across Rawalpindi and Islamabad.",
    images: ["/images/lawyer/law1.jpg"],
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
