"use client";

import { Container } from "./Container";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-16 md:py-24">
            <Container maxWidth="max-w-4xl">
                <div className="rounded-[2.5rem] bg-[#1a2135] p-10 md:p-16 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border border-slate-800">
                    <div className="max-w-xl">
                        <h3 className="text-slate-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                            Ready to automate?
                        </h3>
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-snug">
                            Join top-tier enterprises deploying BolChat to reduce overhead and 10x their customer satisfaction scores.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-2 font-bold text-rose-500 hover:text-rose-400 transition-colors text-[17px] md:text-lg"
                        >
                            Request your demo
                            <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

