"use client";

import { Container } from "./Container";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AnalyticsShowcase() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container maxWidth="max-w-6xl">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Media (Demo Image) */}
                    <div className="flex-1 w-full relative group">
                        <div className="aspect-square max-w-[500px] mr-auto relative flex items-center justify-center">
                            {/* Abstract decorative glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none transition-all group-hover:bg-indigo-500/20" />
                            
                            <Image 
                                src="/images/demo-analytics.png" 
                                alt="Demo Analytics Dashboard" 
                                width={600} 
                                height={600} 
                                className="w-full h-auto object-cover rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Right Copy */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-indigo-500 font-bold uppercase tracking-wider text-sm mb-4 block">Actionable Data</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                Never guess what your users want.
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                            Every query is logged. Automatically capture leads mid-conversation, track your bot's containment rate, and see exactly which questions fall back to human support so you can improve your knowledge base.
                        </p>
                        
                        <ul className="space-y-4">
                            {[
                                "Intent mapping and gap analysis",
                                "Lead capture pipelines to CRM",
                                "Sentiment analysis (Coming Soon)",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <Link href="/docs#analytics" className="inline-flex items-center gap-2 text-slate-900 font-bold group hover:text-indigo-500 transition-colors">
                                View Analytics Features 
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

