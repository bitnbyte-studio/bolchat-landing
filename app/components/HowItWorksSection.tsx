"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Database, Zap, Code, ChevronRight } from "lucide-react";

const steps = [
    {
        title: "Sync Knowledge",
        description: "Connect your help docs, FAQs, or website. BolChat builds a private, secure context for your business.",
        icon: Database,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        title: "Configure Behavior",
        description: "Define your brand voice, escalation rules, and 50+ language preferences in a simple dashboard.",
        icon: Zap,
        color: "text-rose-600",
        bg: "bg-rose-100",
    },
    {
        title: "Go Live Instantly",
        description: "Paste a one-line snippet on your site. Start resolving customer tickets automatically 24/7.",
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl mb-3 md:mb-4">
                        Zero friction to automation
                    </h2>
                    <p className="text-[15px] sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 md:px-0">
                        Stop spending weeks on configuration. BolChat is designed to integrate with your existing workflows seamlessly.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting lines for desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden md:block" />

                    {/* Connecting lines for mobile (vertical) */}
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-slate-100 -translate-x-1/2 z-0 block md:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-4 sm:mb-6 shadow-sm ring-4 ring-white`}>
                                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
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
                        See detailed platform guide <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

