"use client";

import { useState } from "react";

const FAQS = [
    {
        q: "How long is a typical demo?",
        a: "Typical demos last between 15–30 minutes depending on the complexity of your requirements and the level of technical depth requested.",
    },
    {
        q: "Can I try BolChat before paying?",
        a: "Absolutely. We offer a 14-day full-feature trial to all new users. No credit card required to start your setup.",
    },
    {
        q: "What if I need custom integration?",
        a: "Our Enterprise Solutions team specializes in building bespoke integrations for legacy systems and specialized CRM workflows.",
    },
    {
        q: "Does BolChat offer implementation support?",
        a: "Yes, basic implementation support is included in all plans. Enterprise plans include a dedicated account manager.",
    },
    {
        q: "Which languages are supported?",
        a: "BolChat currently supports 50+ languages including Spanish, French, Mandarin, Arabic, Hindi, Japanese, and many more. New languages are added every quarter.",
    },
];

export function FaqSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="bg-white/40 px-6 py-16 backdrop-blur-sm md:py-24">
            <div className="mx-auto max-w-3xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-slate-900">Common Questions</h2>
                    <p className="text-slate-500">Everything you need to know before booking your demo.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <h5 className="font-bold text-slate-900 pr-4">{faq.q}</h5>
                                <svg
                                    viewBox="0 0 24 24"
                                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
