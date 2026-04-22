import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/WaitlistSection";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "How to Add an AI Agent to Your Website (Step-by-Step Guide 2026)",
    description:
        "Learn how to add an AI agent to your website in under 10 minutes. Step-by-step guide covering knowledge base setup, agent configuration, and embedding on Next.js, WordPress, Webflow, and Shopify.",
    alternates: { canonical: "https://bolchat.tech/blog/how-to-add-ai-chatbot-to-website" },
    openGraph: {
        title: "How to Add an AI Agent to Your Website (Step-by-Step Guide 2026)",
        description:
            "A complete step-by-step guide to adding an autonomous AI agent to your website. Works on Next.js, WordPress, Webflow, Shopify, and any HTML site. No coding required.",
        url: "https://bolchat.tech/blog/how-to-add-ai-chatbot-to-website",
    },
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                    { name: "How to Add an AI Agent to Your Website", item: "/blog/how-to-add-ai-chatbot-to-website" },
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
                            <span className="text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-rose-50 text-rose-700">
                                Guides
                            </span>
                            <span className="text-[0.75rem] text-slate-400">April 11, 2026 · BolChat Content Team</span>
                        </div>
                        <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-slate-900 mb-5">
                            How to Add an AI Agent to Your Website (Step-by-Step Guide)
                        </h1>
                        <p className="text-[1.05rem] leading-[1.75] text-slate-500">
                            Adding an AI agent to your website used to require an engineering team, weeks of development, and significant budget. In 2026, you can deploy a fully functional autonomous AI agent in under 10 minutes with no code required. This guide walks you through every step.
                        </p>
                    </header>

                    <div className="space-y-10 text-[0.9375rem] leading-[1.8] text-slate-500">

                        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5 text-sm">
                            <p className="font-semibold text-slate-800 mb-1">What you&apos;ll need</p>
                            <ul className="space-y-1 text-slate-600">
                                <li>• A BolChat account (free to start — <Link href="/contact" className="text-rose-500 font-medium">get access here</Link>)</li>
                                <li>• Your FAQs, help docs, or product pages (in any format — PDF, URL, or text)</li>
                                <li>• Access to your website&apos;s code or CMS (to paste one script tag)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">Step 1 — Connect your knowledge base</h2>
                            <p>Your AI agent&apos;s quality depends entirely on the quality of the information it has access to. The first step is connecting your knowledge base — the private repository of information BolChat will use to answer customer queries.</p>
                            <p className="mt-4">BolChat supports multiple input formats:</p>
                            <ul className="mt-3 space-y-2 list-none">
                                {["PDF files — product manuals, FAQs, onboarding guides", "Website URLs — BolChat scrapes your site automatically", "Plain text — paste your FAQs directly", "Notion pages, Google Docs, and more via integrations"].map((item) => (
                                    <li key={item} className="flex gap-2.5 text-sm text-slate-600">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4">BolChat processes your content using RAG (Retrieval-Augmented Generation) — building a private vector index that the AI queries in real-time when answering questions. Your data is encrypted and never used to train public models.</p>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">Step 2 — Configure your AI agent persona</h2>
                            <p>Once your knowledge base is connected, configure your agent&apos;s behavior in the dashboard. Key settings include:</p>
                            <ul className="mt-4 space-y-3 list-none">
                                {[
                                    ["Agent name and persona", "Give your agent a name and define its personality — professional, friendly, formal, or casual."],
                                    ["Brand voice instructions", "Write a brief system prompt: 'Always respond in a helpful, concise tone. Never discuss competitor pricing.'"],
                                    ["Language settings", "Choose your primary language and enable auto-detection for 50+ additional languages."],
                                    ["Escalation triggers", "Define when the agent should escalate — e.g., when sentiment is negative, when the query is about billing, or when the user explicitly requests a human."],
                                    ["Lead capture rules", "Set when to capture visitor contact details — e.g., after 2 messages, or when the visitor asks about pricing."],
                                ].map(([title, desc]) => (
                                    <li key={title as string} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                                        <span>
                                            <span className="font-medium text-slate-700 text-sm">{title} — </span>
                                            <span className="text-slate-500 text-sm">{desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">Step 3 — Customize the chat widget</h2>
                            <p>Your chat widget is the customer-facing interface. BolChat gives you full control over its appearance — no designer required.</p>
                            <ul className="mt-4 space-y-2 list-none">
                                {["Brand colors and accent colors", "Widget position (bottom-right, bottom-left, custom)", "Launcher button style and icon", "Welcome message and initial prompts", "Mobile-responsive behavior"].map((item) => (
                                    <li key={item} className="flex gap-2.5 text-sm text-slate-600">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">Step 4 — Embed on your website</h2>
                            <p>Once configured, BolChat generates a single script tag. Paste it into your website before the closing <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[0.8rem] text-slate-700">&lt;/body&gt;</code> tag:</p>

                            <div className="mt-4 rounded-xl bg-slate-900 px-5 py-4 font-mono text-[0.8rem] text-slate-300 overflow-x-auto">
                                <span className="text-slate-500">{"<!-- BolChat AI Agent -->"}</span>
                                <br />
                                {`<script`}
                                <br />
                                {"  "}
                                <span className="text-rose-400">src</span>
                                {`="`}
                                <span className="text-emerald-400">https://cdn.bolchat.tech/widget.js</span>
                                {`"`}
                                <br />
                                {"  "}
                                <span className="text-rose-400">data-key</span>
                                {`="`}
                                <span className="text-yellow-400">YOUR_AGENT_KEY</span>
                                {`"`}
                                <br />
                                {`  defer>`}
                                <br />
                                {`</script>`}
                            </div>

                            <p className="mt-4">Platform-specific instructions:</p>
                            <ul className="mt-3 space-y-2 list-none">
                                {[
                                    ["Next.js", "Add as a <Script> component in your root layout.tsx with strategy='afterInteractive'"],
                                    ["WordPress", "Paste in Appearance → Theme Editor → footer.php, or use a header/footer plugin"],
                                    ["Webflow", "Project Settings → Custom Code → Footer Code"],
                                    ["Shopify", "Online Store → Themes → Edit Code → theme.liquid before </body>"],
                                    ["Framer", "Site Settings → General → Custom Code → End of <body>"],
                                ].map(([platform, instruction]) => (
                                    <li key={platform as string} className="flex gap-2.5 text-sm text-slate-600">
                                        <span className="font-semibold text-slate-800 shrink-0">{platform}:</span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Step 5 — Test and go live</h2>
                            <p>Before going live, test your agent on a staging environment. Ask it your 10 most common customer questions and verify the answers are accurate, on-brand, and in the correct language. Check escalation behaviour by asking a question outside your knowledge base.</p>
                            <p className="mt-4">Once satisfied, publish to production. Your AI agent is now live — resolving customer queries, capturing leads, and escalating to your team 24/7.</p>
                        </div>

                        <div className="rounded-2xl bg-slate-900 p-8 text-center">
                            <p className="text-[10.5px] font-medium tracking-[0.12em] uppercase text-rose-400 mb-3">Ready to deploy?</p>
                            <h2 className="text-[1.25rem] font-medium tracking-[-0.02em] text-white mb-3">Get BolChat on your website today</h2>
                            <p className="text-[0.875rem] leading-[1.7] text-slate-400 max-w-sm mx-auto mb-6">
                                Free to start. Live in under 10 minutes. Resolves queries in 50+ languages autonomously.
                            </p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.75rem] text-slate-500 font-medium tracking-wide">
                                <span>No credit card</span>
                                <span className="text-slate-700">·</span>
                                <span>No code required</span>
                                <span className="text-slate-700">·</span>
                                <span>30-min setup</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">Common mistakes to avoid</h2>
                            <ul className="space-y-2 list-none">
                                {[
                                    "Don't connect a thin knowledge base — the more context you give, the better the answers",
                                    "Don't skip testing in staging — verify escalation triggers before going live",
                                    "Don't forget to set a fallback message for out-of-scope queries",
                                    "Don't ignore analytics — check resolution rates weekly in the first month",
                                ].map((item) => (
                                    <li key={item} className="flex gap-2.5 text-sm text-slate-600">
                                        <span className="text-slate-300 mt-0.5 shrink-0">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-slate-100 pt-10 text-center">
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-2">Start for free in under 10 minutes</h2>
                            <p className="text-[0.875rem] text-slate-400 mb-7">Book a demo and we&apos;ll walk through the setup live — configured for your specific website and use case.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link href="/demo" className="w-full sm:w-auto rounded-xl bg-rose-500 px-8 py-3.5 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors">
                                    Book a Free Demo
                                </Link>
                                <Link href="/docs" className="w-full sm:w-auto rounded-xl border border-slate-200 px-8 py-3.5 text-[0.875rem] font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                                    Read the Docs
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