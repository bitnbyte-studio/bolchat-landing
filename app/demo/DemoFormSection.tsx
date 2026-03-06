"use client";

import { useState } from "react";

const DEMO_HIGHLIGHTS = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        bg: "bg-rose-50",
        color: "text-rose-500",
        title: "Live Chatbot Setup",
        desc: "Watch a chatbot being configured with your data in real-time.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        bg: "bg-orange-50",
        color: "text-orange-500",
        title: "Language Demo",
        desc: "Witness seamless switching between 50+ languages natively.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        bg: "bg-blue-50",
        color: "text-blue-500",
        title: "Analytics Preview",
        desc: "Explore the dashboard and understand your ROI potential.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="7" height="7" rx="1" />
                <rect x="15" y="3" width="7" height="7" rx="1" />
                <rect x="2" y="14" width="7" height="7" rx="1" />
                <rect x="15" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
        bg: "bg-purple-50",
        color: "text-purple-500",
        title: "Integration Options",
        desc: "Review platform connectors and custom API workflows.",
    },
];

export function DemoFormSection() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 800);
    };

    return (
        <section id="demo-form" className="relative px-6 py-12 md:py-16">
            <div className="mx-auto grid w-full max-w-7xl items-start gap-16 lg:grid-cols-2">

                {/* ── Left: Form ── */}
                <div className="rounded-[3rem] border border-white/60 bg-white p-8 shadow-2xl md:p-12">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-green-100 text-4xl">
                                ✓
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900">You&apos;re booked!</h3>
                            <p className="text-slate-500">
                                We&apos;ll send a calendar invite to your email within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name + Email */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-6 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Business Email *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-6 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50"
                                    />
                                </div>
                            </div>

                            {/* Company + Languages */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Company Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Acme Corp"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-6 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Languages Needed</label>
                                    <select className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-slate-100 bg-white px-6 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50">
                                        <option>1–5 Languages</option>
                                        <option>6–15 Languages</option>
                                        <option>16–30 Languages</option>
                                        <option>30+ Languages</option>
                                    </select>
                                </div>
                            </div>

                            {/* Volume */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-slate-700">Current Support Volume</label>
                                <div className="flex flex-wrap gap-5">
                                    {["<1K/month", "1–10K", "10–50K", "50K+"].map((v) => (
                                        <label key={v} className="flex cursor-pointer items-center gap-2">
                                            <input type="radio" name="volume" className="h-4 w-4 accent-rose-500" />
                                            <span className="text-sm text-slate-600">{v}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Priority interest */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-slate-700">Priority Interest</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Cost Reduction", "Speed & Efficiency", "Multilingual Support", "Integration Help"].map((item) => (
                                        <label key={item} className="flex cursor-pointer items-center gap-2">
                                            <input type="checkbox" className="h-4 w-4 rounded accent-rose-500" />
                                            <span className="text-sm text-slate-600">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-700">Additional Details</label>
                                <textarea
                                    placeholder="Tell us about your specific needs..."
                                    className="h-32 w-full resize-none rounded-2xl border border-slate-100 bg-white p-6 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="h-16 w-full rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-xl transition-all hover:bg-rose-600 active:scale-[0.98] disabled:opacity-70"
                            >
                                {loading ? "Booking your slot…" : "Schedule Demo →"}
                            </button>
                            <p className="text-center text-sm text-slate-400">
                                We&apos;ll follow up within 24 hours with demo availability
                            </p>
                        </form>
                    )}
                </div>

                {/* ── Right: What you'll see ── */}
                <div className="space-y-10">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-slate-900">
                            What You&apos;ll See During Your Demo
                        </h2>
                        <p className="text-slate-500">
                            Experience the power of native-fluency AI built for the modern enterprise.
                        </p>
                    </div>

                    <div className="grid gap-5">
                        {DEMO_HIGHLIGHTS.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-center gap-6 rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,107,157,0.12)]"
                            >
                                <div className={`grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl ${item.bg} ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="mb-1 font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust note */}
                    <div className="flex items-center gap-4 rounded-2xl border border-rose-100/60 bg-rose-50/60 p-5">
                        <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-rose-100 text-rose-500">
                            🔒
                        </div>
                        <p className="text-sm text-slate-600">
                            Your information is safe with us. We never share your data with third parties.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
