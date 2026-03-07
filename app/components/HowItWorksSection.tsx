"use client";

const steps = [
    {
        number: "1",
        title: "Upload Company Data",
        description: "Add FAQs, docs, and policy content so BolChat learns your business context.",
    },
    {
        number: "2",
        title: "Train Your Chatbot",
        description: "Refine tone, behavior, and guardrails for your customer support workflows.",
    },
    {
        number: "3",
        title: "Embed Script",
        description: "Deploy with a lightweight snippet and start resolving customer queries fast.",
    },
];

import { Container } from "./Container";

export function HowItWorksSection() {
    return (
        <section id="demo" className="border-y border-rose-100/60 bg-white/40 py-16 md:py-24 backdrop-blur-sm">
            <Container className="flex flex-col items-center gap-16 lg:flex-row">
                {/* ── Left: Steps ── */}
                <div className="flex-1">
                    <h2 className="mb-8 text-4xl font-bold md:text-5xl">
                        Simple to set up, impossible to outgrow
                    </h2>

                    <div className="space-y-10">
                        {steps.map((step, i) => (
                            <div key={step.number} className="flex gap-6">
                                <div
                                    className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-full text-xl font-bold text-white ${i === 0 ? "bg-rose-500" : i === 1 ? "bg-rose-400" : "bg-rose-300"
                                        }`}
                                >
                                    {step.number}
                                </div>
                                <div>
                                    <h4 className="mb-2 text-xl font-bold">{step.title}</h4>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: Chat mockup ── */}
                <div className="w-full flex-1">
                    <div className="rounded-[3rem] border border-white/70 bg-white p-4 shadow-2xl">
                        <div className="flex h-[500px] flex-col overflow-hidden rounded-[2.2rem] bg-slate-900">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-slate-800 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500" />
                                    <div>
                                        <p className="text-sm font-bold leading-none text-white">BolChat AI</p>
                                        <p className="text-[10px] text-slate-400">Online • Support Assistant</p>
                                    </div>
                                </div>
                                <span className="text-slate-400">•••</span>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 space-y-6 overflow-hidden p-6">
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                                        Hello! I&apos;m BolChat. How can I help you today? I support 50+ languages.
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-rose-500 p-4 text-sm leading-relaxed text-white">
                                        Can you explain your refund policy in Spanish?
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-xs italic leading-relaxed text-slate-200">
                                        BolChat is typing...
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                                        Claro. Nuestra politica de reembolso permite devoluciones dentro de los primeros 30 dias si no estas satisfecho...
                                    </div>
                                </div>
                            </div>

                            {/* Input */}
                            <div className="border-t border-slate-800 bg-slate-900 p-4">
                                <div className="flex gap-2 rounded-xl bg-slate-800 p-3">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                                    />
                                    <button className="px-2 text-rose-400">➤</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
