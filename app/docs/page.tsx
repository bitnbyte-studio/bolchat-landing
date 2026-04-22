import type { Metadata } from "next";
import { DocsContent } from "./DocsContent";

export const metadata: Metadata = {
  title: "BolChat Docs — Setup Guide, API Reference & Integration Documentation",
  description:
    "Official BolChat documentation. Get started with your AI agent, configure your knowledge base, manage CRM integrations, and explore the full API reference. Go live in under 10 minutes.",
  keywords: [
    "BolChat documentation", "AI chatbot setup guide", "chatbot integration guide",
    "BolChat integration Next.js", "BolChat React widget", "AI agent best practices",
    "knowledge base optimization", "chatbot widget embed", "customer support AI docs",
    "how to add AI chatbot to website", "chatbot system prompt", "RAG chatbot setup",
  ],
  alternates: {
    canonical: "https://bolchat.tech/docs",
  },
  openGraph: {
    title: "BolChat Documentation — Setup, API Reference & Integration Guides",
    description: "Set up, optimize, and scale your AI support agent with step-by-step guides, integration docs, and best practices. Go live in under 10 minutes.",
    url: "https://bolchat.tech/docs",
  },
};

export default function DocsPage() {
  return <DocsContent />;
}
