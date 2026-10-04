import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Trimmed to weights actually used — fewer font files, faster first paint.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "700"],
});

/* Update this to the production domain when the site is deployed. */
const SITE_URL = "https://dhananjay-maurya.vercel.app";

const TITLE = "Dhananjay Maurya — Builds software that survives production";
const DESCRIPTION =
  "Mumbai-based full-stack developer working across React, Next.js, TypeScript, Node.js, Python and AI products. Field notes, projects, and open source.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Dhananjay Maurya" }],
  keywords: [
    "Dhananjay Maurya",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AI applications",
    "Open Source",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dhananjay Maurya — Workshop",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#12100c",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhananjay Maurya",
  jobTitle: "Software Engineer & Full-Stack Developer",
  email: "mailto:dhananjaymaury366@gmail.com",
  telephone: "+91-8268303521",
  url: SITE_URL,
  sameAs: [
    "https://github.com/MauryaQbit",
    "https://www.linkedin.com/in/dhananjay-maurya-8943312bb/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Shree L.R. Tiwari College of Engineering",
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
      className={`${fraunces.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="grain">
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
