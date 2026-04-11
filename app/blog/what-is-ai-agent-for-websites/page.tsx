import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/WaitlistSection";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "What is an AI Agent for Websites? The Future Beyond Chatbots",
    description: "Learn how AI agents are replacing traditional chatbots. Understand the intelligence, autonomy, and cross-border capabilities of modern AI Agent platforms like BolChat.",
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                    { name: "AI Agent for Websites", item: "/blog/what-is-ai-agent-for-websites" },
                ]}
            />
            <Navbar />

            <main className="py-16 md:py-28">
                <Container maxWidth="max-w-2xl" className="px-6 md:px-0">

                    {/* Back */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-slate-400 hover:text-rose-500 transition-colors mb-10 md:mb-14"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12 md:mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                                Trends
                            </span>
                            <span className="text-[0.75rem] text-slate-400">
                                April 11, 2026 · BolChat Content Team
                            </span>
                        </div>

                        <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-slate-900 mb-5">
                            What is an AI Agent for Websites?
                        </h1>

                        <p className="text-[1.05rem] leading-[1.75] text-slate-500">
                            For years, businesses relied on chatbots to handle customer conversations. But most chatbots feel robotic, fail to understand real questions, and frustrate users more than they help. A new generation of technology is now taking over: AI agents.
                        </p>
                    </header>

                    {/* Body */}
                    <div className="space-y-10 text-[0.9375rem] leading-[1.8] text-slate-500">

                        {/* Comparison cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-2">
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <p className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-slate-400 mb-4">Traditional chatbots</p>
                                <ul className="space-y-2.5">
                                    {["Rule-based responses", "Limited understanding", "Scripted conversations", "Rigid user experience"].map((item) => (
                                        <li key={item} className="text-[0.875rem] text-slate-400 flex items-center gap-2">
                                            <span className="text-slate-300">—</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6">
                                <p className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-rose-500 mb-4">AI agents</p>
                                <ul className="space-y-2.5">
                                    {["Understand natural language", "Learn from your data", "Handle complex queries", "Act like a real assistant"].map((item) => (
                                        <li key={item} className="text-[0.875rem] text-slate-700 flex items-center gap-2">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-[0.9rem] text-slate-400 italic">
                            In simple terms: a chatbot answers questions. An AI agent <span className="text-slate-700 not-italic font-medium">solves problems</span>.
                        </p>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">What is an AI agent?</h2>
                            <p>An AI agent is an intelligent system that can understand user intent, make decisions, provide accurate responses, and take actions — like capturing leads. It's not just replying. It's thinking and assisting.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Why businesses are moving to AI agents</h2>
                            <p>Customer expectations have changed. Users now want instant responses, accurate answers, and a personalized experience. AI agents deliver all three at scale.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">What an AI agent can do for your website</h2>
                            <ul className="space-y-3">
                                {[
                                    ["Answer questions instantly", "No delays, no waiting for a human agent."],
                                    ["Capture leads automatically", "Collect high-intent emails and phone numbers."],
                                    ["Communicate in 50+ languages", "Serve global users effortlessly."],
                                    ["Guide users to conversion", "Help users make decisions in real-time."],
                                    ["Learn from data", "Context-aware responses unique to your business."],
                                ].map(([title, desc]) => (
                                    <li key={title} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 list-none">
                                        <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                                        <span>
                                            <span className="font-medium text-slate-700">{title} — </span>
                                            {desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* BolChat spotlight */}
                        <div className="rounded-2xl bg-slate-900 p-8 text-center">
                            <p className="text-[10.5px] font-medium tracking-[0.12em] uppercase text-rose-400 mb-3">Introducing</p>
                            <h2 className="text-[1.25rem] font-medium tracking-[-0.02em] text-white mb-3">BolChat AI Agent</h2>
                            <p className="text-[0.875rem] leading-[1.7] text-slate-400 max-w-sm mx-auto mb-6">
                                Not just a chatbot — a website AI agent built for modern businesses seeking global reach and automation.
                            </p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.75rem] text-slate-500 font-medium tracking-wide">
                                <span>AI-powered</span>
                                <span className="text-slate-700">·</span>
                                <span>50+ languages</span>
                                <span className="text-slate-700">·</span>
                                <span>Easy integration</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Why chatbots are becoming obsolete</h2>
                            <p>Users hate rigid menus and scripted replies. In 2026, that experience feels fake and drives potential customers away. Businesses need smarter, more empathetic systems that can reason through a problem.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">How AI agents increase revenue</h2>
                            <p>By capturing more leads, improving conversion rates through real-time assistance, and reducing manual support costs, AI agents directly impact your bottom line.</p>
                        </div>

                        {/* Steps */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">How to add an AI agent to your website</h2>
                            <ol className="space-y-3">
                                {[
                                    ["Sign up for BolChat", "Get access to your autonomous agent dashboard."],
                                    ["Train your agent", "Upload your PDFs, URLs, or text files."],
                                    ["Deploy the script", "Paste your custom integration line into your site."],
                                    ["Go live", "Scale globally in minutes."],
                                ].map(([title, desc], i) => (
                                    <li key={title} className="flex gap-4 p-5 rounded-xl border border-slate-100 list-none">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white text-[0.7rem] font-medium mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span>
                                            <span className="font-medium text-slate-700">{title} — </span>
                                            <span className="text-slate-500">{desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Final CTA */}
                        <div className="border-t border-slate-100 pt-10 text-center">
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-2">Ready to upgrade?</h2>
                            <p className="text-[0.875rem] text-slate-400 mb-7">Upgrade to the future of website interaction today.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto rounded-xl bg-rose-500 px-8 py-3.5 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors"
                                >
                                    Start free trial
                                </Link>
                                <Link
                                    href="/demo"
                                    className="w-full sm:w-auto rounded-xl border border-slate-200 px-8 py-3.5 text-[0.875rem] font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                                >
                                    Watch demo
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