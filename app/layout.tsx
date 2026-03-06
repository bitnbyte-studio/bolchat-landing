import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────────────────────
   Canonical origin — change this to your production domain before going live.
   ───────────────────────────────────────────────────────────────────────────── */
const SITE_URL = "https://bolchat.ai";

export const metadata: Metadata = {
  /* ── Title ──────────────────────────────────────────────────────────────── */
  title: {
    default: "BolChat — Multilingual AI Chatbots for Modern Businesses",
    template: "%s | BolChat",
  },

  /* ── Core meta ──────────────────────────────────────────────────────────── */
  description:
    "Deploy context-aware AI chatbots in minutes. BolChat supports 50+ languages, integrates with your existing stack, and automates customer support at scale.",
  keywords: [
    "AI chatbot",
    "multilingual chatbot",
    "customer support automation",
    "conversational AI",
    "chatbot platform",
    "BolChat",
    "AI customer service",
    "GPT chatbot",
    "business chatbot",
    "no-code chatbot",
  ],
  authors: [{ name: "BolChat", url: SITE_URL }],
  creator: "BitnByte Studio",
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
    title: "BolChat — Multilingual AI Chatbots for Modern Businesses",
    description:
      "Deploy context-aware AI chatbots in minutes. Supports 50+ languages and automates customer support at scale.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BolChat — AI Chatbot Platform",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ───────────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "BolChat — Multilingual AI Chatbots for Modern Businesses",
    description:
      "Deploy context-aware AI chatbots in minutes. Supports 50+ languages and automates customer support at scale.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@bolchat_ai", // ← update to your real Twitter/X handle
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
  classification: "AI SaaS",

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
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
