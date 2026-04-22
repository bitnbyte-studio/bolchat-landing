"use client";

import { Container } from "./Container";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "Is BolChat just another chatbot?",
        a: "No. BolChat deploys autonomous AI agents that resolve customer queries end-to-end using your private knowledge base. It doesn't just collect messages — it resolves them, in 50+ languages, 24/7. Traditional chatbots follow scripts. BolChat understands intent.",
    },
    {
        q: "What languages does BolChat support?",
        a: "BolChat supports 50+ languages natively — including Hindi, Spanish, French, Arabic, Mandarin, Portuguese, German, Japanese, and more. Language is auto-detected from visitor input. No translation plugin required.",
    },
    {
        q: "How long does setup take?",
        a: "Most teams are live in under 30 minutes. Connect your knowledge base, configure your AI agent persona, and embed a single script tag — no engineering resources required. Works on any website, CMS, or web app.",
    },
    {
        q: "Can I hand off conversations to a human agent?",
        a: "Yes. Set custom escalation triggers — by topic, sentiment, or keyword — and BolChat passes full conversation context to your human team via email, Slack, or your CRM automatically. No customer needs to repeat themselves.",
    },
    {
        q: "Is my data safe and private?",
        a: "Absolutely. All data is encrypted with AES-256 in transit and at rest. Your private knowledge base is never shared with or used to train any public AI model. Your data is your data.",
    },
    {
        q: "Does BolChat capture leads automatically?",
        a: "Yes. BolChat identifies buying intent and captures visitor emails and contact details mid-conversation, then syncs them directly to your CRM — without interrupting the chat flow or requiring a separate form.",
    },
    {
        q: "How is BolChat different from Intercom or Zendesk AI?",
        a: "Intercom and Zendesk bolt AI onto legacy ticketing systems. BolChat is AI-native — built from the ground up for autonomous resolution, not ticket deflection. And unlike Intercom, BolChat supports 50+ languages natively at a fraction of the cost.",
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open}
            >
                <span className="text-base font-bold text-slate-900 group-hover:text-rose-500 transition-colors">
                    {q}
                </span>
                <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 group-hover:bg-rose-50 transition-colors">
                    {open
                        ? <Minus className="h-3.5 w-3.5 text-rose-500" />
                        : <Plus className="h-3.5 w-3.5 text-slate-500" />
                    }
                </span>
            </button>
            {open && (
                <p className="pb-5 text-sm text-slate-500 leading-relaxed font-medium pr-10">
                    {a}
                </p>
            )}
        </div>
    );
}

export function FaqSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
            <Container maxWidth="max-w-3xl">
                <div className="text-center mb-12">
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">
                        FAQ
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-slate-500 font-medium">
                        Everything you need to know about BolChat. Can&apos;t find an answer?{" "}
                        <a href="/contact" className="text-rose-500 font-bold hover:underline">Talk to us.</a>
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 md:px-10 py-2">
                    {faqs.map((faq, i) => (
                        <FaqItem key={i} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
