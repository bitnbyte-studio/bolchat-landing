"use client";

import Link from "next/link";
import { ChatScreen } from "./ChatScreen";
import { Container } from "./Container";

export function HeroSection() {
    return (
        <section id="product" className="relative pb-8 pt-20 md:pb-16 md:pt-28">
            <Container className="grid items-center gap-10 lg:grid-cols-2">
                {/* ── Left: Copy ── */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="mb-5 text-[2.5rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
                        Multilingual AI Agents for
                        <span className="block bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Modern Businesses
                        </span>
                    </h1>

                    <p className="mb-8 max-w-[20rem] sm:max-w-xl text-[17px] leading-relaxed text-slate-600 sm:text-xl">
                        BolChat deploys autonomous AI agents that resolve queries, capture leads, and grow your business — 24/7, in any language.
                    </p>

                    <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:justify-start">
                        <Link
                            href="/contact"
                            className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-rose-200/50 transition-all hover:scale-105 active:scale-95 sm:w-auto"
                        >
                            Request Demo
                        </Link>
                        <a
                            href="#how-it-works"
                            className="w-full rounded-2xl border cursor-pointer shadow-sm border-slate-200 bg-white/80 px-8 py-4 text-center text-lg font-bold text-slate-900 transition-all hover:bg-white sm:w-auto"
                        >
                            How it works
                        </a>
                    </div>

                    {/* Trust avatars */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
                        <div className="flex -space-x-3">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop"
                                alt="Founder avatar"
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop"
                                alt="Founder avatar"
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop"
                                alt="Founder avatar"
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                        </div>
                        <p>
                            Trusted by founders from <span className="font-bold">500+ startups</span>
                        </p>
                    </div>
                </div>

                {/* ── Right: Illustration ── */}
                <div className="relative hidden justify-center lg:flex lg:justify-end">
                    <div className="relative flex h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] items-center justify-center lg:h-[500px] lg:w-[500px]">
                        <div className="absolute h-full w-full rounded-full bg-rose-400/10 blur-[100px]" />

                        <ChatScreen />

                    </div>
                </div>
            </Container>
        </section>
    );
}
