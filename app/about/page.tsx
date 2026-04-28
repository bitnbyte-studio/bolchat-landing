import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "About BolChat — Multilingual AI Support Platform & Our Story",
    description:
        "Learn how BolChat was built to be more than a chatbot — an autonomous AI agent platform that resolves support queries, captures leads, and scales globally. Built by Shubham Singh.",
    alternates: { canonical: "https://bolchat.tech/about" },
    openGraph: {
        title: "About BolChat — Multilingual AI Support Platform & Our Story",
        description:
            "BolChat is an AI-native customer support platform built for global businesses. Autonomous resolution, 50+ languages, lead capture, and enterprise security — in one widget.",
        url: "https://bolchat.tech/about",
    },
};

const stats = [
    { value: "50+", label: "Languages supported natively" },
    { value: "< 10 min", label: "Average time to go live" },
    { value: "24/7", label: "Autonomous resolution" },
    { value: "500+", label: "Businesses using BolChat" },
];

const pillars = [
    {
        number: "01",
        title: "Resolution over deflection",
        body: "Most support tools deflect queries to humans or dead FAQ links. BolChat resolves them. Every query goes through a RAG-powered reasoning layer that finds the right answer from your knowledge base and responds with precision.",
    },
    {
        number: "02",
        title: "Language is not a barrier",
        body: "We built native multilingual support from the start, not as an add-on. Your AI agent understands and responds in 50+ languages without translation middleware. One agent, every market.",
    },
    {
        number: "03",
        title: "Your data stays yours",
        body: "Your knowledge base is private, encrypted, and never used to train any public AI model. BolChat is a closed system — your business context belongs to you alone.",
    },
    {
        number: "04",
        title: "Speed without sacrifice",
        body: "Going live should take minutes, not months. We designed the entire setup flow — from knowledge base to live widget — to be completed in under 10 minutes with zero engineering required.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "About", item: "/about" },
                ]}
            />
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#0f1623] pt-32 pb-24 md:pt-44 md:pb-36">
                {/* Ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-5xl px-6">
                    <p className="text-rose-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                        Our story
                    </p>
                    <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-8 max-w-4xl">
                        Built because customer support
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                            deserved something better.
                        </span>
                    </h1>
                    <p className="text-[1.1rem] md:text-xl leading-relaxed text-slate-400 max-w-2xl font-medium">
                        BolChat exists because the existing tools were built for ticket volume, not resolution quality. We set out to build the AI agent that actually closes the loop for customers, in any language, at any hour.
                    </p>
                </div>

                {/* Stats row */}
                <div className="relative z-10 mx-auto max-w-5xl px-6 mt-16 md:mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-[#0f1623] px-6 py-7 text-center">
                                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">{s.value}</p>
                                <p className="text-xs font-medium text-slate-500 leading-tight">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MISSION STATEMENT ── */}
            <section className="py-24 md:py-32 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
                        <div>
                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-rose-500 mb-4">Mission</p>
                            <div className="w-8 h-0.5 bg-rose-500 rounded-full" />
                        </div>
                        <div>
                            <p className="text-[1.6rem] md:text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 mb-8">
                                Make enterprise-grade AI support accessible to every business that talks to customers — regardless of size, language, or technical resource.
                            </p>
                            <p className="text-[1rem] leading-relaxed text-slate-500 mb-6">
                                The top 1% of companies have always had the budget for large support teams, sophisticated helpdesks, and now — expensive AI integrations. BolChat makes that 1% experience available to everyone else.
                            </p>
                            <p className="text-[1rem] leading-relaxed text-slate-500">
                                A solo founder with a global e-commerce store should be able to deploy an AI agent that speaks Hindi, Spanish, and Arabic — without writing a single line of code or hiring a developer. That is what we built.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PILLARS ── */}
            <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-100">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-16">
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-rose-500 mb-4">What we believe</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-xl">
                            Four principles that shape every decision we make.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {pillars.map((p) => (
                            <div
                                key={p.number}
                                className="group bg-white rounded-3xl border border-slate-100 p-8 md:p-10 hover:border-rose-100 hover:shadow-lg transition-all duration-300"
                            >
                                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-slate-300 uppercase block mb-5">
                                    {p.number}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-rose-500 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-[0.9rem] leading-relaxed text-slate-500">
                                    {p.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FOUNDER ── */}
            <section className="relative overflow-hidden bg-[#0f1623] py-24 md:py-36">
                {/* Ambient glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-600/8 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />

                {/* Subtle grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6">

                    <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-400 mb-16">
                        The founder
                    </p>

                    {/* Name + links row */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 pb-16 border-b border-white/[0.08]">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-rose-500/30 shrink-0">
                                <span className="text-white font-black text-4xl tracking-tight select-none">S</span>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none mb-2">
                                    Shubham Singh
                                </h2>
                                <p className="text-rose-400 font-semibold text-base">
                                    Founder &amp; Software Developer
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://www.linkedin.com/in/shubham-singh-35153122b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                            >
                                <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="mailto:shubham@bolchat.tech"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                            >
                                <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                shubham@bolchat.tech
                            </a>
                            <a
                                href="https://www.crunchbase.com/organization/bolchat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                            >
                                <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.6 0H2.4A2.41 2.41 0 0 0 0 2.4v19.2A2.41 2.41 0 0 0 2.4 24h19.2a2.41 2.41 0 0 0 2.4-2.4V2.4A2.41 2.41 0 0 0 21.6 0zM7.045 14.465A2.11 2.11 0 0 0 9.84 13.42h1.66a3.69 3.69 0 1 1 0-1.75H9.84a2.11 2.11 0 1 0-2.795 2.795zm11.345.845a3.55 3.55 0 0 1-1.06.63 3.68 3.68 0 0 1-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 0 1 1.8-.63H16a3.67 3.67 0 0 1 2.39 6.46zm-.223-2.766a2.104 2.104 0 1 1-4.207 0 2.104 2.104 0 0 1 4.207 0z" />
                                </svg>
                                Crunchbase
                            </a>
                        </div>
                    </div>

                    {/* Story + quote */}
                    <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-slate-300">
                                When I started building BolChat, the market was full of tools that claimed to be AI-powered but were fundamentally just rule-based chatbots with a coat of paint. Business owners were paying for &quot;AI support&quot; that still required their team to manually update scripts every time a product changed.
                            </p>
                            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-slate-300">
                                I wanted to build something different. A system that actually understands your business context, reads your documents, and reasons through customer questions without you having to maintain a decision tree. That meant building a proper RAG pipeline from the ground up, not bolting one onto a legacy interface.
                            </p>
                            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-slate-300">
                                The multilingual angle came from talking to founders in India, Southeast Asia, and Latin America who were building global products but losing customers because their support only worked in English. BolChat supports 50+ languages natively because global businesses deserve native-quality support in every market they serve.
                            </p>
                        </div>

                        {/* Pull quote card */}
                        <div className="relative">
                            <div className="relative rounded-3xl bg-gradient-to-br from-rose-500/15 to-orange-400/5 border border-rose-500/20 p-8 md:p-10">
                                <div className="absolute inset-0 rounded-3xl bg-rose-500/5 blur-xl -z-10" />
                                <span className="block text-[5rem] leading-none text-rose-500/25 font-serif mb-1 select-none -mt-3 -ml-1">&ldquo;</span>
                                <p className="text-[1rem] font-semibold text-white leading-relaxed -mt-6">
                                    If you have ideas, feedback, or just want to talk about what we&apos;re building, I&apos;m always open to connecting.
                                </p>
                                <footer className="mt-6 flex items-center gap-3">
                                    <div className="w-8 h-0.5 bg-rose-500 rounded-full" />
                                    <span className="text-sm font-bold text-rose-400">Shubham Singh, Founder</span>
                                </footer>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── FEATURED ON ── */}
            <section className="py-16 border-b border-slate-100 bg-slate-50">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-8">
                        Featured on
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="https://www.crunchbase.com/organization/bolchat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all group"
                            aria-label="BolChat on Crunchbase"
                        >
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.6 0H2.4A2.41 2.41 0 0 0 0 2.4v19.2A2.41 2.41 0 0 0 2.4 24h19.2a2.41 2.41 0 0 0 2.4-2.4V2.4A2.41 2.41 0 0 0 21.6 0zM7.045 14.465A2.11 2.11 0 0 0 9.84 13.42h1.66a3.69 3.69 0 1 1 0-1.75H9.84a2.11 2.11 0 1 0-2.795 2.795zm11.345.845a3.55 3.55 0 0 1-1.06.63 3.68 3.68 0 0 1-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 0 1 1.8-.63H16a3.67 3.67 0 0 1 2.39 6.46zm-.223-2.766a2.104 2.104 0 1 1-4.207 0 2.104 2.104 0 0 1 4.207 0z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Crunchbase</span>
                        </a>
                        {/* More directory badges added here as listed */}
                    </div>
                </div>
            </section>

            {/* ── CONTACT STRIP ── */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-slate-100 bg-slate-50 px-10 py-10">
                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                                Have questions about BolChat?
                            </h2>
                            <p className="text-slate-500 font-medium">
                                Reach out to our team directly or book a live demo.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link
                                href="/demo"
                                className="px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-rose-500 transition-colors text-center"
                            >
                                Book a Demo
                            </Link>
                            <a
                                href="mailto:hello@bolchat.tech"
                                className="px-7 py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 transition-colors text-center bg-white"
                            >
                                hello@bolchat.tech
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
}
