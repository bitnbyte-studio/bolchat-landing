"use client";

import { Container } from "./Container";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-16 md:py-24">
            <Container maxWidth="max-w-4xl" className="text-center">
                <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-500 to-pink-600 p-12 text-white md:p-20 shadow-2xl">
                    {/* Background blobs */}
                    <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

                    <h2 className="relative z-10 mb-6 text-4xl font-bold md:text-5xl">Ready to automate your support?</h2>
                    <p className="relative z-10 mb-10 text-lg text-rose-100 max-w-2xl mx-auto">
                        Join top-tier enterprises deploying BolChat to reduce overhead and 10x their customer satisfaction scores.
                    </p>

                    <div className="relative z-10 flex justify-center">
                        <Link
                            href="/contact"
                            className="group flex h-14 items-center gap-2 rounded-2xl bg-white px-8 font-bold text-rose-600 transition-all hover:bg-rose-50 hover:scale-105 active:scale-95"
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

