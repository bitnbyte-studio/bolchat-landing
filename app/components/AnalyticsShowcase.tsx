"use client";

import { Container } from "./Container";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AnalyticsShowcase() {
    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden">
            <Container maxWidth="max-w-6xl">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Media */}
                    <div className="flex-1 w-full relative group">
                        <div className="aspect-square max-w-[500px] mr-auto relative flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none transition-all group-hover:bg-indigo-500/20" />
                            <Image
                                src="/images/demo-analytics.png"
                                alt="BolChat real-time analytics dashboard showing resolution rates, lead capture, and conversation volume"
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Right Copy */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-indigo-500 mb-4 block">
                                Real-Time Analytics
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                                Know exactly what your{" "}
                                <span className="text-indigo-500">customers are asking.</span>
                            </h2>
                        </div>
                        <p className="text-[15px] sm:text-lg text-slate-600 max-w-lg font-medium">
                            Every query is logged and categorised. Track your AI agent&apos;s resolution rate, capture leads mid-conversation, and see exactly which questions need human attention — so you can close every gap.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Live resolution rate and containment tracking",
                                "Automated lead capture synced directly to your CRM",
                                "Query gap analysis — find where your AI needs training",
                                "Conversation-level audit logs for compliance",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <Link href="/features" className="inline-flex items-center gap-2 text-slate-900 font-bold group hover:text-indigo-500 transition-colors">
                                Explore All Analytics Features
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
