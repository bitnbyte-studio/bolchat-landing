import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/WaitlistSection";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "How to Add an AI Chatbot to Your Website in 2026 (Step-by-Step)",
    description:
        "Learn how to add an AI chatbot to your website step by step. Improve customer support, capture leads 24/7, and reduce costs — no coding required. Works with any website.",
};

const steps = [
    {
        title: "Choose the right AI chatbot platform",
        body: "Look for a platform that offers natural language understanding, multilingual support, and simple script-based integration. BolChat supports 50+ languages out of the box and requires zero coding to deploy.",
    },
    {
        title: "Create and train your chatbot",
        body: "After signing up, upload your knowledge base — PDFs, URLs, or plain text. The more context you provide, the more accurate your agent's responses will be.",
    },
    {
        title: "Customize the chat widget",
        body: "Match the widget to your brand: adjust colors, position, and the welcome message. First impressions matter — a branded widget builds trust instantly.",
    },
    {
        title: "Copy your integration script",
        body: "BolChat gives you a single line of JavaScript to add to your site.",
    },
    {
        title: "Add the script to your website",
        body: "Paste it before the closing </body> tag in your HTML, or inside your root layout file if you're using Next.js or React.",
    },
    {
        title: "Test before going live",
        body: "Ask common customer questions, check responses on both mobile and desktop, and verify that lead capture is working correctly.",
    },
];

const reasons = [
    ["Instant customer support", "Users don't like waiting. A chatbot responds in milliseconds, improving satisfaction and reducing bounce rates."],
    ["24/7 availability", "Your business stays active even when your team is offline — across every time zone."],
    ["Automatic lead generation", "Collect emails, phone numbers, and customer intent without lifting a finger."],
    ["Lower support costs", "Businesses typically cut support costs by 60–70% after deploying an AI agent."],
    ["Multilingual reach", "Serve customers in 50+ languages — critical for businesses targeting global or multilingual markets."],
];

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                    { name: "How to Add AI Chatbot to Website", item: "/blog/how-to-add-ai-chatbot-to-website" },
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
                            <span className="text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-rose-50 text-rose-700">
                                Guides
                            </span>
                            <span className="text-[0.75rem] text-slate-400">
                                April 11, 2026 · BolChat Content Team
                            </span>
                        </div>

                        <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-slate-900 mb-5">
                            How to Add an AI Chatbot to Your Website in 2026
                        </h1>

                        <p className="text-[1.05rem] leading-[1.75] text-slate-500">
                            Customers expect instant answers. Whether you're running an e-commerce store, a SaaS product, or a local service business, an AI chatbot handles support, captures leads, and converts visitors — around the clock, in any language.
                        </p>
                    </header>

                    {/* Body */}
                    <div className="space-y-12 text-[0.9375rem] leading-[1.8] text-slate-500">

                        {/* What is section */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">
                                What is an AI chatbot?
                            </h2>
                            <p>
                                An AI chatbot is a software agent that uses large language models to understand natural language and respond like a human. Unlike traditional rule-based bots — which only follow fixed scripts — modern AI chatbots understand context, remember the conversation, and give accurate, on-brand answers drawn from your own business data.
                            </p>
                        </div>

                        {/* Why your site needs one */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                Why your website needs an AI chatbot
                            </h2>
                            <ul className="space-y-3">
                                {reasons.map(([title, desc]) => (
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

                        {/* Steps */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-5">
                                Step-by-step: how to add a chatbot to your website
                            </h2>
                            <ol className="space-y-3">
                                {steps.map((step, i) => (
                                    <li key={step.title} className="flex gap-4 p-5 rounded-xl border border-slate-100 list-none">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white text-[0.7rem] font-medium mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span>
                                            <span className="font-medium text-slate-700">{step.title} — </span>
                                            <span className="text-slate-500">{step.body}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Code block */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">
                                The integration snippet
                            </h2>
                            <p className="mb-4">Add this single line before your closing <code className="text-[0.85em] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">{`</body>`}</code> tag:</p>
                            <pre className="rounded-xl bg-slate-900 px-5 py-4 text-[0.8rem] text-emerald-400 overflow-x-auto">
                                <code>{`<script src="https://bolchat.tech/widget.js" async></script>`}</code>
                            </pre>
                            <p className="mt-3 text-[0.85rem] text-slate-400">
                                Using Next.js? Add it inside your root <code className="text-[0.85em] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">layout.tsx</code> file instead.
                            </p>
                        </div>

                        {/* Mid-article CTA */}
                        <div className="rounded-2xl bg-slate-900 p-7 text-center">
                            <p className="text-[10.5px] font-medium tracking-[0.12em] uppercase text-rose-400 mb-2">No coding required</p>
                            <h2 className="text-[1.15rem] font-medium tracking-[-0.02em] text-white mb-2">
                                Deploy your AI agent in under 5 minutes
                            </h2>
                            <p className="text-[0.875rem] leading-[1.7] text-slate-400 max-w-sm mx-auto mb-5">
                                Sign up, train your agent on your content, paste one line of code, and go live.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-7 py-3 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors"
                            >
                                Start free trial
                            </Link>
                        </div>

                        {/* Advanced features */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">
                                Advanced features worth using
                            </h2>
                            <p className="mb-4">Once your chatbot is live, these features will significantly improve performance:</p>
                            <ul className="space-y-3">
                                {[
                                    ["Knowledge base training", "Upload product docs, FAQs, and support articles so the agent answers from your actual content — not generic AI responses."],
                                    ["Human handoff", "Let users escalate to a live agent for complex issues. The AI handles volume; humans handle nuance."],
                                    ["Lead capture forms", "Automatically collect names, emails, and intent data during the conversation — no separate form needed."],
                                    ["Conversation analytics", "Track which questions users ask most, where conversations drop off, and your overall containment rate."],
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

                        {/* Why BolChat */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">
                                Why businesses choose BolChat
                            </h2>
                            <p>
                                Most chatbot platforms are either too rigid (rule-based) or too complex to set up. BolChat is built for modern businesses that need an intelligent, multilingual agent deployed fast — without engineering resources.
                            </p>
                            <p className="mt-3">
                                It supports 50+ languages, integrates with any website in minutes, and learns from your existing content to deliver accurate, on-brand responses from day one.
                            </p>
                        </div>

                        {/* Final CTA */}
                        <div className="border-t border-slate-100 pt-10 text-center">
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-2">
                                Ready to add a chatbot to your website?
                            </h2>
                            <p className="text-[0.875rem] text-slate-400 mb-7">
                                Join businesses using BolChat to automate support and capture more leads — starting today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto rounded-xl bg-rose-500 px-8 py-3.5 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors"
                                >
                                    Start free trial
                                </Link>
                                <Link
                                    href="/"
                                    className="w-full sm:w-auto rounded-xl border border-slate-200 px-8 py-3.5 text-[0.875rem] font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                                >
                                    See how it works
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