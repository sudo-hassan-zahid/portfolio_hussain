import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Preload critical fonts with font-display: swap
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  adjustFontFallback: false,
});

export function generateViewport(): Viewport {
  return {
    themeColor: '#000000',
    width: 'device-width',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable} ${playfair.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
