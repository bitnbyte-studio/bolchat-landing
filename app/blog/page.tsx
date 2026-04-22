import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "BolChat Blog — AI Customer Support, Automation & Multilingual AI Guides",
    description:
        "Expert guides on automating customer support with AI agents. Learn about multilingual chatbots, lead capture automation, and AI support best practices for growing businesses.",
    alternates: {
        canonical: "https://bolchat.tech/blog",
    },
    openGraph: {
        title: "BolChat Blog — AI Customer Support, Automation & Multilingual AI Guides",
        description:
            "Expert guides and practical articles on AI customer support automation, multilingual chatbots, lead generation, and growing businesses with AI agents.",
        url: "https://bolchat.tech/blog",
    },
};

const posts = [
    {
        slug: "what-is-ai-agent-for-websites",
        category: "Trends",
        categoryColor: "bg-amber-50 text-amber-700",
        date: "April 11, 2026",
        title: "What is an AI Agent for Websites? The Future Beyond Chatbots",
        excerpt:
            "AI agents don't just reply to messages — they resolve them. Learn how autonomous AI agents are replacing rule-based chatbots and what it means for your business.",
        readTime: "5 min read",
    },
    {
        slug: "ai-agent-vs-chatbot-difference",
        category: "Comparison",
        categoryColor: "bg-purple-50 text-purple-700",
        date: "April 11, 2026",
        title: "AI Agent vs Chatbot: What's the Real Difference in 2026?",
        excerpt:
            "Chatbots follow scripts. AI agents resolve problems. The difference sounds subtle — the business impact is enormous. Here's everything you need to know.",
        readTime: "6 min read",
    },
    {
        slug: "best-ai-chatbot-for-small-businesses",
        category: "Strategy",
        categoryColor: "bg-blue-50 text-blue-700",
        date: "April 11, 2026",
        title: "Best AI Agent for Small Businesses in 2026 — 50+ Languages Guide",
        excerpt:
            "A no-fluff guide to the best AI agents for small business customer support. Compared by multilingual capability, setup time, and value for growing teams.",
        readTime: "7 min read",
    },
    {
        slug: "how-to-add-ai-chatbot-to-website",
        category: "Guides",
        categoryColor: "bg-rose-50 text-rose-700",
        date: "April 11, 2026",
        title: "How to Add an AI Agent to Your Website (Step-by-Step Guide 2026)",
        excerpt:
            "A complete walkthrough: connect your knowledge base, configure your agent, and embed it on Next.js, WordPress, Webflow, or Shopify — in under 10 minutes.",
        readTime: "8 min read",
    },
    {
        slug: "what-is-bolchat-guide",
        category: "Platform",
        categoryColor: "bg-emerald-50 text-emerald-700",
        date: "April 11, 2026",
        title: "What is BolChat? AI Agent for Websites Explained",
        excerpt:
            "BolChat is an autonomous AI agent for websites — not a chatbot. Here's a complete overview of what it does, how it works, and whether it's right for your business.",
        readTime: "6 min read",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                ]}
            />
            <Navbar />

            <main className="py-16 md:py-28">
                <Container maxWidth="max-w-3xl">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">
                            BolChat Blog
                        </p>
                        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-slate-900 mb-5">
                            The BolChat Blog — Guides on<br className="hidden md:block" /> AI Support Automation.
                        </h1>
                        <p className="text-[1.05rem] leading-[1.75] text-slate-500 max-w-[520px] mx-auto">
                            How AI agents are transforming customer conversations, automating
                            support, and helping businesses scale globally without adding headcount.
                        </p>
                    </div>

                    {/* Post List */}
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10.5px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                                        {post.category}
                                    </span>
                                    <span className="text-[0.75rem] text-slate-400">{post.date}</span>
                                    <span className="text-[0.75rem] text-slate-300">·</span>
                                    <span className="text-[0.75rem] text-slate-400">{post.readTime}</span>
                                </div>
                                <h2 className="text-[1.1rem] font-bold text-slate-900 mb-2 group-hover:text-rose-500 transition-colors leading-snug tracking-tight">
                                    {post.title}
                                </h2>
                                <p className="text-[0.9rem] leading-[1.7] text-slate-500 mb-4">
                                    {post.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-rose-500 group-hover:gap-2.5 transition-all">
                                    Read article <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>

                </Container>
            </main>

            <CTASection />
            <Footer />
        </div>
    );
}