import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
    default: "BolChat — Multilingual AI Agent for Website Customer Support | 50+ Languages",
    template: "%s | BolChat",
  },

  /* ── Core meta ──────────────────────────────────────────────────────────── */
  description:
    "Deploy autonomous AI agents on your website that resolve customer queries in 50+ languages, capture leads, and escalate to humans — 24/7. No extra headcount needed. Start free.",
  keywords: [
    "multilingual AI agent for website",
    "AI customer support automation",
    "AI agent for website",
    "multilingual customer support chatbot",
    "customer support automation software",
    "conversational AI platform",
    "BolChat",
    "AI chatbot for website",
    "autonomous AI customer service",
    "AI support agent 50 languages",
    "lead capture chatbot",
    "enterprise AI customer service platform",
    "best AI chatbot for business",
    "customer support AI agent",
    "website chatbot plugin",
    "free AI customer support",
    "human-like AI agent",
    "live agent escalation chatbot",
    "multilingual support widget",
    "AI lead generation chatbot",
    "conversational AI agent",
    "ecommerce chatbot",
    "SaaS AI support agent",
    "customer service automation chatbot",
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
    title: "BolChat — Multilingual AI Agent for Website Customer Support | 50+ Languages",
    description:
      "Deploy autonomous AI agents on your website that resolve customer queries in 50+ languages, capture leads, and escalate to humans — 24/7. No extra headcount needed.",
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
    title: "BolChat — Multilingual AI Agent for Website Customer Support",
    description:
      "Deploy autonomous AI agents that resolve customer queries in 50+ languages, capture leads, and escalate to humans — 24/7.",
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
  /* TODO: Paste the "content" value from your GSC HTML-tag verification here: */
  /* Steps: GSC → Settings → Ownership verification → HTML tag → copy value   */
  verification: {
    google: "REPLACE_WITH_YOUR_GSC_VERIFICATION_CODE", // <-- paste your code here
  },

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
    "msvalidate.01": "B41DFD684A3BEC44DB323D9AD8BA82F0",
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
        {/* Preconnect hints — improve LCP by warming up Google Fonts connections */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <Analytics />


        <Script
          src="https://server-farm-fqdvcndefdazdkb2.centralindia-01.azurewebsites.net/static/widget.js"
          data-key="bc_live_0qIRsR2o.Vsiq4J3WoGK57d6Yf7JBwLcYNMIsV76F"
          data-agent="a90f62b5-5449-4677-a409-b150ff4ed89a"
          data-api-url="https://server-farm-fqdvcndefdazdkb2.centralindia-01.azurewebsites.net"
          strategy="afterInteractive"
        />
        {/* <Script
          src="http://192.168.1.12:8000/static/widget.js"
          data-key="bc_live_0qIRsR2o.Vsiq4J3WoGK57d6Yf7JBwLcYNMIsV76F"
          data-agent="a90f62b5-5449-4677-a409-b150ff4ed89a"
          data-api-url="http://192.168.1.12:8000"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
