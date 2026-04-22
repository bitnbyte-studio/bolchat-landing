"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Database, Zap, Code, ChevronRight } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Connect Your Knowledge Base",
        description: "Upload your help docs, FAQs, or scrape your site. BolChat builds a private, secure, RAG-powered context for your business — no hallucinations.",
        icon: Database,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        step: "02",
        title: "Configure Your AI Agent",
        description: "Set your brand voice, escalation rules, lead capture triggers, and 50+ language preferences in a simple dashboard. No engineering required.",
        icon: Zap,
        color: "text-rose-600",
        bg: "bg-rose-100",
    },
    {
        step: "03",
        title: "Go Live in Under 30 Minutes",
        description: "Paste a single `<script>` tag on your site. Your AI agent starts resolving customer queries, capturing leads, and escalating intelligently — 24/7.",
        icon: Code,
        color: "text-emerald-600",
        bg: "bg-emerald-100",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
            <Container maxWidth="max-w-5xl">
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">
                        How It Works
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl mb-3 md:mb-4">
                        From setup to first resolved query{" "}
                        <span className="text-rose-500">in under 30 minutes.</span>
                    </h2>
                    <p className="text-[15px] sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 md:px-0 font-medium">
                        No complex onboarding. No engineering sprint. BolChat integrates with your existing stack in three steps.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden md:block" />
                    {/* Connecting line mobile */}
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-slate-100 -translate-x-1/2 z-0 block md:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-4 sm:mb-6 shadow-sm ring-4 ring-white`}>
                                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                                <span className="text-xs font-bold tracking-widest text-slate-400 mb-2 bg-white px-2">{step.step}</span>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 bg-white px-2">{step.title}</h3>
                                <p className="text-slate-500 text-[14px] sm:text-sm leading-relaxed font-medium px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-rose-600 font-bold hover:gap-3 transition-all cursor-pointer">
                        Read the full setup guide <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
