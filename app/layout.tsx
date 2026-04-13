import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────────────────────
   Canonical origin — change this to your production domain before going live.
   ───────────────────────────────────────────────────────────────────────────── */
const SITE_URL = "https://bolchat.tech";

export const metadata: Metadata = {
  /* ── Title ──────────────────────────────────────────────────────────────── */
  title: {
    default: "BolChat - Instantly Scale Your Customer Support with Multilingual AI",
    template: "%s | BolChat",
  },

  /* ── Core meta ──────────────────────────────────────────────────────────── */
  description:
    "BolChat is an enterprise-grade AI support platform that instantly resolves customer inquiries in 50+ languages. Scale your support operations 10x without adding headcount.",
  keywords: [
    "AI customer support",
    "multilingual chatbot",
    "customer support automation",
    "conversational AI",
    "BolChat",
    "support ticketing automation",
    "AI agents",
    "enterprise customer service",
    "customer experience AI",
  ],
  authors: [{ name: "BolChat", url: SITE_URL }],
  creator: "BolChat Inc.",
  publisher: "BolChat",

  /* ── Canonical URL ──────────────────────────────────────────────────────── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Robots ─────────────────────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ─────────────────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "BolChat",
    title: "BolChat - Instantly Scale Your Customer Support with Multilingual AI",
    description:
      "BolChat is an enterprise-grade AI support platform that instantly resolves customer inquiries in 50+ languages.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BolChat — Customer Support Automation",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ───────────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "BolChat - Instantly Scale Your Customer Support",
    description:
      "BolChat is an enterprise-grade AI support platform that instantly resolves customer inquiries in 50+ languages.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@bolchat_ai",
    site: "@bolchat_ai",
  },

  /* ── Icons ──────────────────────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  /* ── Web App Manifest ───────────────────────────────────────────────────── */
  manifest: "/site.webmanifest",

  /* ── Google Search Console ownership verification ───────────────────────── */
  /* Paste the "content" value from your GSC HTML-tag verification here:       */
  // verification: {
  //   google: "REPLACE_WITH_YOUR_GSC_VERIFICATION_CODE",
  // },

  /* ── App metadata (mobile / PWA feel) ──────────────────────────────────── */
  applicationName: "BolChat",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Enterprise SaaS",

  /* ── Favicons (legacy meta for older browsers) ──────────────────────────── */
  other: {
    "msapplication-TileColor": "#ff5fa2",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
