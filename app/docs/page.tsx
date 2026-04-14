import type { Metadata } from "next";
import { DocsContent } from "./DocsContent";

export const metadata: Metadata = {
  title: "Documentation — Complete Platform Guide & Integration Docs",
  description:
    "Everything you need to set up, optimize, and scale your BolChat AI agent. Covers knowledge base best practices, system prompt engineering, widget integration guides for Next.js, React, Angular, HTML, and advanced tips.",
  keywords: [
    "BolChat documentation", "AI chatbot setup guide", "chatbot integration guide",
    "BolChat integration Next.js", "BolChat React widget", "AI agent best practices",
    "knowledge base optimization", "chatbot widget embed", "customer support AI docs",
    "how to add AI chatbot to website", "chatbot system prompt", "RAG chatbot setup",
  ],
  openGraph: {
    title: "BolChat Documentation — Complete Platform Guide",
    description: "Set up, optimize, and scale your AI support agent with step-by-step guides, integration docs, and best practices.",
    url: "https://bolchat.tech/docs",
  },
};

export default function DocsPage() {
  return <DocsContent />;
}
