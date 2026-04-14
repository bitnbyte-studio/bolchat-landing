"use client";

import { Container } from "./Container";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PlatformShowcase() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100">
            <Container maxWidth="max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Copy */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-rose-500 font-bold uppercase tracking-wider text-sm mb-4 block">Ultimate Control</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                Configure your agent's exact behavior.
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                            We don't believe in black-box AI. Use our visual Agent Builder to strictly define tone, instructions, and fallback constraints to ensure your bot never hallucinates.
                        </p>
                        
                        <ul className="space-y-4">
                            {[
                                "Custom brand colors & widget positioning",
                                "Strict confidence thresholds for RAG",
                                "Multi-language auto-detection enabled",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <Link href="/docs#agent-manager" className="inline-flex items-center gap-2 text-slate-900 font-bold group hover:text-rose-500 transition-colors">
                                Explore Agent Manager 
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Media (Demo Image) */}
                    <div className="flex-1 w-full relative group">
                        <div className="aspect-square max-w-[500px] ml-auto relative flex items-center justify-center">
                            {/* Abstract decorative glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-500/10 blur-[80px] rounded-full pointer-events-none transition-all group-hover:bg-rose-500/20" />
                            
                            <Image 
                                src="/images/demo-widget.png" 
                                alt="Demo Platform UI" 
                                width={600} 
                                height={600} 
                                className="w-full h-auto object-cover rounded-[2.5rem] shadow-[0_20px_60px_rgba(244,63,94,0.15)] ring-1 ring-slate-800/10 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

