import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/WaitlistSection";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "What is BolChat? AI Agent for Websites Explained",
    description:
        "What is BolChat and how does it work? Discover how BolChat's autonomous AI agent resolves customer queries, captures leads, and supports 50+ languages — 24/7, on any website.",
    alternates: { canonical: "https://bolchat.tech/blog/what-is-bolchat-guide" },
    openGraph: {
        title: "What is BolChat? AI Agent for Websites Explained",
        description:
            "BolChat is an autonomous AI agent that resolves customer support queries on your website in 50+ languages. Here's everything you need to know.",
        url: "https://bolchat.tech/blog/what-is-bolchat-guide",
    },
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                    { name: "What is BolChat", item: "/blog/what-is-bolchat-guide" },
                ]}
            />
            <Navbar />

            <main className="py-16 md:py-28">
                <Container maxWidth="max-w-2xl" className="px-6 md:px-0">
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-slate-400 hover:text-rose-500 transition-colors mb-10 md:mb-14">
                        <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
                    </Link>

                    <header className="mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                                Platform
                            </span>
                            <span className="text-[0.75rem] text-slate-400">April 11, 2026 · BolChat Content Team</span>
                        </div>
                        <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-slate-900 mb-5">
                            What is BolChat? AI Agent for Websites Explained
                        </h1>
                        <p className="text-[1.05rem] leading-[1.75] text-slate-500">
                            BolChat is an autonomous AI agent platform that deploys on your website to resolve customer support queries, capture leads, and escalate intelligently to human agents — in 50+ languages, 24/7. Think of it as hiring your best support rep and making them available around the clock, in every language your customers speak.
                        </p>
                    </header>

                    <div className="space-y-10 text-[0.9375rem] leading-[1.8] text-slate-500">

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">The problem BolChat solves</h2>
                            <p>Customer support is one of the most expensive and difficult things to scale for a growing business. As your user base grows, support volume grows with it — but support headcount is expensive, and quality is hard to maintain across languages and time zones.</p>
                            <p className="mt-4">Most tools on the market offer a partial solution: live chat (requires humans), rule-based chatbots (frustrate users), or ticketing systems (slow and impersonal). None of them actually <em>resolve</em> queries autonomously. BolChat does.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">What BolChat does — feature by feature</h2>
                            <ul className="space-y-3">
                                {[
                                    ["Autonomous query resolution", "BolChat reads your customer's question, searches your private knowledge base using RAG (Retrieval-Augmented Generation), and formulates a precise, contextual answer — without a human in the loop."],
                                    ["50+ language support", "BolChat detects the visitor's language automatically and responds natively. No third-party translation. No language plugins. One agent, global reach."],
                                    ["Automated lead capture", "When a visitor shows buying intent, BolChat captures their email, name, and query details mid-conversation and syncs directly to your CRM — without a separate form."],
                                    ["Human escalation with full context", "Set custom escalation triggers. When a query exceeds the agent's scope, BolChat passes the full conversation history to your human team via email, Slack, or your helpdesk."],
                                    ["Real-time analytics", "Track resolution rate, containment, query categories, and conversation volume in a live dashboard. Know exactly where your AI performs well and where to improve."],
                                    ["Private knowledge base (RAG)", "Upload your docs, FAQs, or product pages. BolChat builds a private vector index — your data never trains public AI models, and the agent only answers from your verified content."],
                                ].map(([title, desc]) => (
                                    <li key={title as string} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 list-none">
                                        <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                                        <span>
                                            <span className="font-medium text-slate-700">{title} — </span>
                                            {desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">How BolChat is different from a chatbot</h2>
                            <p>The most important distinction: BolChat is not a chatbot. A chatbot follows pre-set rules and breaks the moment a user asks something unexpected. BolChat understands intent, retrieves relevant context, and generates a precise answer — even for complex, multi-part questions it has never seen before.</p>
                            <p className="mt-4">BolChat also doesn&apos;t require manual scripting. Every time your knowledge base changes — new pricing, new features, new policies — the AI updates automatically. No engineering work required.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Who is BolChat built for?</h2>
                            <p>BolChat is designed for businesses with real support volume and global ambitions. The most common use cases are:</p>
                            <ul className="mt-4 space-y-2 list-none">
                                {[
                                    "SaaS companies automating product support and onboarding queries",
                                    "E-commerce brands handling order status, returns, and product questions",
                                    "Edtech platforms serving students across multiple languages and time zones",
                                    "Healthcare providers answering appointment and policy questions 24/7",
                                    "Agencies deploying white-label AI support for their clients",
                                    "Real estate companies qualifying leads and answering property queries",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-slate-900 p-8">
                            <p className="text-[10.5px] font-medium tracking-[0.12em] uppercase text-rose-400 mb-3">How it works</p>
                            <ol className="space-y-4">
                                {[
                                    ["Connect your knowledge base", "Upload docs, FAQs, or scrape your site. BolChat builds a private, encrypted vector index."],
                                    ["Configure your AI agent", "Set persona, tone, escalation rules, language preferences, and lead capture triggers in the dashboard."],
                                    ["Embed on your website", "Paste a single <script> tag. Works on Next.js, WordPress, Webflow, Framer, Shopify — any website."],
                                    ["Go live and resolve", "Your AI agent starts handling queries autonomously. Monitor resolution rates in your analytics dashboard."],
                                ].map(([title, desc], i) => (
                                    <li key={title as string} className="flex gap-4 list-none">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-white text-[0.7rem] font-medium mt-0.5">{i + 1}</span>
                                        <span>
                                            <span className="font-medium text-white text-sm">{title} — </span>
                                            <span className="text-slate-400 text-sm">{desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Is BolChat right for my business?</h2>
                            <p>If you answer yes to any of these questions, BolChat is worth exploring:</p>
                            <ul className="mt-4 space-y-2 list-none">
                                {[
                                    "Do you receive repetitive support queries that could be automated?",
                                    "Do you have customers who speak languages other than English?",
                                    "Are you losing potential leads because no one is available to respond instantly?",
                                    "Is your support team spending time on queries that could be self-served?",
                                    "Do you want to scale your business without scaling your support headcount?",
                                ].map((q) => (
                                    <li key={q} className="flex items-start gap-2.5 text-slate-600 text-sm">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        {q}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-slate-100 pt-10 text-center">
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-2">See BolChat in action</h2>
                            <p className="text-[0.875rem] text-slate-400 mb-7">Book a free 30-minute demo. We&apos;ll configure BolChat for your specific use case and show you how it resolves real queries from your customers.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link href="/demo" className="w-full sm:w-auto rounded-xl bg-rose-500 px-8 py-3.5 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors">
                                    Book a Free Demo
                                </Link>
                                <Link href="/features" className="w-full sm:w-auto rounded-xl border border-slate-200 px-8 py-3.5 text-[0.875rem] font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                                    Explore All Features
                                </Link>
                            </div>
                        </div>

                    </div>
                </Container>
            </main>

            <CTASection />
            <Footer />
        </div>
    );
}