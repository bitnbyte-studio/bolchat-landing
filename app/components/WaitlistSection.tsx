"use client";

import { Container } from "./Container";
import Link from "next/link";
import { MoveRight, Check } from "lucide-react";

const benefits = [
    "Resolves queries autonomously — not just deflects them",
    "Supports 50+ languages natively — not via translation layers",
    "Captures leads without interrupting the conversation",
    "RAG-powered private knowledge base — zero hallucinations",
    "Human handoff with full context when it matters",
    "Deploys in under 10 minutes — no engineering required",
];

export function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-[#1a2135] border-y border-slate-800 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

            <Container maxWidth="max-w-6xl" className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">

                    {/* Left: Copy */}
                    <div className="max-w-2xl">
                        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-400 mb-4 block">
                            Start resolving. Stop replying.
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Join 500+ businesses automating customer support with BolChat.
                        </h2>

                            {/* Why BolChat checklist */}
                            <ul className="space-y-2.5 mb-8">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: CTAs */}
                        <div className="shrink-0 flex flex-col gap-4 w-full lg:w-auto">
                            <Link
                                href="/demo"
                                className="group flex items-center justify-center gap-2 font-bold bg-white text-slate-900 hover:bg-rose-50 transition-colors text-[17px] md:text-lg px-8 py-4 rounded-2xl"
                            >
                                Book a Free Demo
                                <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 font-semibold text-slate-400 hover:text-white transition-colors text-sm px-8 py-3 rounded-2xl border border-slate-700 hover:border-slate-500"
                            >
                                Talk to Sales
                            </Link>
                            <p className="text-center text-xs text-slate-500 font-medium">
                                Free to start · No credit card required
                            </p>
                        </div>
                </div>
            </Container>
        </section>
    );
}
