import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "BolChat Blog — AI Agents, Automation & Customer Experience",
    description:
        "Learn how AI agents are transforming customer support, lead generation, and business automation across the globe.",
};

const posts = [
    {
        slug: "how-to-add-ai-chatbot-to-website",
        category: "Guides",
        title: "How to Add an AI Agent to Your Website (Step-by-Step Guide)",
        excerpt:
            "Learn how to add an AI agent to your website and automate customer conversations in minutes — no technical experience required.",
        pillClass: "bg-rose-50 text-rose-700",
    },
    {
        slug: "best-ai-chatbot-for-small-businesses",
        category: "Strategy",
        title: "Best AI Agent for Small Businesses (2026 Guide – 50+ Languages)",
        excerpt:
            "Discover the best AI agents for small businesses and how multilingual automation can help you scale globally.",
        pillClass: "bg-blue-50 text-blue-700",
    },
    {
        slug: "what-is-bolchat-guide",
        category: "Platform",
        title: "What is BolChat? AI Agent for Websites Explained",
        excerpt:
            "Discover how BolChat works as a 24/7 AI agent to automate support, capture leads, and grow your business.",
        pillClass: "bg-emerald-50 text-emerald-700",
    },
    {
        slug: "what-is-ai-agent-for-websites",
        category: "Trends",
        title: "What is an AI Agent for Websites? The Future Beyond Chatbots",
        excerpt:
            "Traditional chatbots are becoming obsolete. Learn why autonomous AI agents are the new standard for website interaction.",
        pillClass: "bg-yellow-50 text-yellow-700",
    },
    {
        slug: "ai-agent-vs-chatbot-difference",
        category: "Comparison",
        title: "AI Agent vs Chatbot: What's the Difference?",
        excerpt:
            "Break down the core differences between traditional chatbots and AI agents, and learn which one actually scales your revenue.",
        pillClass: "bg-purple-50 text-purple-700",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                ]}
            />

            <Navbar />

            <main className="py-16 md:py-32">
                {/* HERO */}
                <Container maxWidth="max-w-3xl" className="text-center mb-16 md:mb-24 px-6 md:px-0">
                    <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-rose-600 mb-5">
                        BolChat Blog
                    </p>
                    <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-slate-900 mb-5">
                        Insights on AI Agents<br className="hidden md:block" /> &amp; Business Growth.
                    </h1>
                    <p className="text-[1.05rem] leading-[1.75] text-slate-500 max-w-[520px] mx-auto">
                        How AI agents are transforming customer conversations, automating
                        support, and helping businesses grow globally.
                    </p>
                </Container>

                {/* GRID */}
                <Container maxWidth="max-w-7xl" className="px-5 md:px-0">
                    <div className="grid md:grid-cols-3 border border-slate-100 rounded-[20px] overflow-hidden divide-x divide-y divide-slate-100">
                        {posts.map((post) => (
                            <article key={post.slug} className="group flex flex-col bg-white p-7 md:p-8">
                                <span
                                    className={`self-start text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-5 ${post.pillClass}`}
                                >
                                    {post.category}
                                </span>

                                <h2 className="text-[1.05rem] font-medium leading-[1.35] tracking-[-0.02em] text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>

                                <p className="text-[0.875rem] leading-[1.7] text-slate-500 flex-1 mb-6">
                                    {post.excerpt}
                                </p>

                                <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                                    <span className="text-[0.75rem] text-slate-400 tracking-[0.01em]">
                                        April 11, 2026 · BolChat Content Team
                                    </span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-[0.8rem] font-medium text-slate-900 flex items-center gap-1 group-hover:text-rose-600 transition-colors"
                                        aria-label={`Read ${post.title}`}
                                    >
                                        Read <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </main>

            <CTASection />
            <Footer />
        </div>
    );
}