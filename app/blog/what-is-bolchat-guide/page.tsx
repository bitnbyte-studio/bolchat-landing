import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/WaitlistSection";
import { Metadata } from "next";
import { ArrowLeft, Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "What is BolChat? A Complete Guide to the AI Agent Platform for Websites",
    description:
        "Learn what BolChat is and how it helps businesses deploy autonomous AI agents that automate customer conversations, generate leads, and support 50+ languages.",
};

const steps = [
    {
        number: "1",
        title: "Train the AI",
        body: "Upload your FAQs, website URLs, or PDFs. BolChat learns your brand voice and business logic instantly — no prompt engineering needed.",
        color: "bg-purple-50 text-purple-700",
    },
    {
        number: "2",
        title: "Embed the script",
        body: "Copy and paste a single line of JavaScript into your website. No backend integration, no developer required.",
        color: "bg-blue-50 text-blue-700",
    },
    {
        number: "3",
        title: "Engage visitors",
        body: "Visitors ask questions naturally. BolChat understands intent, provides accurate answers, and captures lead data automatically.",
        color: "bg-rose-50 text-rose-700",
    },
    {
        number: "4",
        title: "Monitor and improve",
        body: "View real-time analytics and full conversation history to continuously improve your customer experience.",
        color: "bg-emerald-50 text-emerald-700",
    },
];

const features = [
    ["AI-powered conversations", "Natural language understanding ensures human-like interaction — not scripted menus."],
    ["50+ languages supported", "Serve customers in Spain, India, or Japan as naturally as you do in the US."],
    ["5-minute setup", "Go live with a single script tag. No complex backend integration required."],
    ["Automatic lead capture", "Collect high-intent emails and phone numbers during every conversation."],
    ["24/7 availability", "Your support never sleeps — even across time zones and public holidays."],
];

const useCases = [
    { title: "SaaS startups", desc: "Onboard users and answer product documentation questions instantly." },
    { title: "E-commerce", desc: "Handle order tracking, returns, and product queries at scale." },
    { title: "Education", desc: "Guide prospective students and capture enrollment leads." },
    { title: "Service agencies", desc: "Qualify inbound inquiries and book appointments automatically." },
];

const comparison = [
    { feature: "Responses", traditional: "Scripted / menu-based", bolchat: "AI-powered / natural language" },
    { feature: "Languages", traditional: "Very limited", bolchat: "50+ languages natively" },
    { feature: "Setup time", traditional: "Weeks of configuration", bolchat: "Live in under 5 minutes" },
    { feature: "User experience", traditional: "Rigid and frustrating", bolchat: "Conversational and fluent" },
];

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Blog", item: "/blog" },
                    { name: "What is BolChat?", item: "/blog/what-is-bolchat-guide" },
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
                            <span className="text-[10.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                                Platform
                            </span>
                            <span className="text-[0.75rem] text-slate-400">
                                April 11, 2026 · BolChat Content Team
                            </span>
                        </div>

                        <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-slate-900 mb-5">
                            What is BolChat? A complete guide to the AI agent platform
                        </h1>

                        <p className="text-[1.05rem] leading-[1.75] text-slate-500">
                            If you're looking for a simple way to automate customer conversations, generate leads, and support users around the clock — you've probably come across AI chatbots. Most are either too rigid or too complex to set up. BolChat is built differently.
                        </p>
                    </header>

                    {/* Body */}
                    <div className="space-y-12 text-[0.9375rem] leading-[1.8] text-slate-500">

                        {/* What is BolChat */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-3">
                                What is BolChat?
                            </h2>
                            <p>
                                BolChat is an autonomous AI agent platform that helps businesses automate customer conversations globally. It acts as your 24/7 sales and support force — capable of understanding natural language, capturing leads, and communicating in 50+ languages natively.
                            </p>
                            <p className="mt-3">
                                Unlike traditional rule-based chatbots, BolChat is trained on your actual business content and responds intelligently to what users actually ask — not just a predefined list of options.
                            </p>
                        </div>

                        {/* How it works */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                How BolChat works
                            </h2>
                            <ol className="space-y-3">
                                {steps.map((step) => (
                                    <li key={step.number} className="flex gap-4 p-5 rounded-xl border border-slate-100 list-none">
                                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[0.7rem] font-medium mt-0.5 ${step.color}`}>
                                            {step.number}
                                        </span>
                                        <span>
                                            <span className="font-medium text-slate-700">{step.title} — </span>
                                            <span className="text-slate-500">{step.body}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Key features */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                Key features
                            </h2>
                            <ul className="space-y-3">
                                {features.map(([title, desc]) => (
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

                        {/* Comparison table */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                BolChat vs. traditional chatbots
                            </h2>
                            <div className="rounded-xl border border-slate-100 overflow-hidden">
                                <table className="w-full text-[0.875rem] border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="text-left p-4 font-medium text-slate-500 text-[0.75rem] tracking-[0.06em] uppercase">Feature</th>
                                            <th className="text-left p-4 font-medium text-slate-500 text-[0.75rem] tracking-[0.06em] uppercase">Traditional bots</th>
                                            <th className="text-left p-4 font-medium text-rose-600 text-[0.75rem] tracking-[0.06em] uppercase">BolChat</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparison.map((row) => (
                                            <tr key={row.feature}>
                                                <td className="p-4 font-medium text-slate-700">{row.feature}</td>
                                                <td className="p-4 text-slate-400">{row.traditional}</td>
                                                <td className="p-4 font-medium text-slate-700">{row.bolchat}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Who should use it */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                Who should use BolChat?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {useCases.map((item) => (
                                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                        <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <Check className="h-3 w-3 text-emerald-600" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-700 text-[0.875rem] mb-0.5">{item.title}</p>
                                            <p className="text-[0.8rem] text-slate-400 leading-[1.5]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Getting started */}
                        <div>
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-4">
                                How to get started
                            </h2>
                            <ol className="space-y-3">
                                {[
                                    ["Sign up for a free trial", "No credit card required."],
                                    ["Train your agent", "Upload your content from your dashboard in minutes."],
                                    ["Embed the widget", "Copy your custom script and paste it into your site."],
                                    ["Go live", "Watch conversations convert into leads automatically."],
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

                        {/* CTA */}
                        <div className="rounded-2xl bg-slate-900 p-7 text-center">
                            <p className="text-[10.5px] font-medium tracking-[0.12em] uppercase text-rose-400 mb-2">Get started today</p>
                            <h2 className="text-[1.15rem] font-medium tracking-[-0.02em] text-white mb-2">
                                Scale your business, not your team
                            </h2>
                            <p className="text-[0.875rem] leading-[1.7] text-slate-400 max-w-sm mx-auto mb-5">
                                Deploy your AI agent in under 5 minutes and start converting visitors into leads — in any language.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-7 py-3 text-[0.875rem] font-medium text-white hover:bg-rose-600 transition-colors"
                            >
                                Try BolChat free
                            </Link>
                        </div>

                        {/* Final CTA */}
                        <div className="border-t border-slate-100 pt-10 text-center">
                            <h2 className="text-[1.1rem] font-medium tracking-[-0.02em] text-slate-900 mb-2">
                                Ready to automate your customer conversations?
                            </h2>
                            <p className="text-[0.875rem] text-slate-400 mb-7">
                                Join businesses using BolChat to capture more leads and support customers globally.
                            </p>
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