"use client";

import { useState } from "react";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { Container } from "../components/Container";

const WEB3FORMS_ACCESS_KEY = "d26f0cc5-1e1c-4e3d-9202-4fe5ebd0a5ab";

const DEMO_HIGHLIGHTS = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        bg: "bg-rose-50",
        color: "text-rose-500",
        title: "Live Agent Setup",
        desc: "Watch an AI agent being configured with your data in real-time.",
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
    const [error, setError] = useState("");

    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [languages, setLanguages] = useState("1–5 Languages");
    const [volume, setVolume] = useState("");
    const [interests, setInterests] = useState<string[]>([]);
    const [message, setMessage] = useState("");

    const toggleInterest = (item: string) => {
        setInterests((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Demo Request: ${name} from ${company}`,
                    from_name: "BolChat Demo Form",
                    name,
                    email,
                    company,
                    languages_needed: languages,
                    support_volume: volume || "Not specified",
                    priority_interests: interests.length > 0 ? interests.join(", ") : "Not specified",
                    additional_details: message || "None",
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="demo-form" className="relative py-12 md:py-16">
            <Container className="grid items-start gap-10 md:gap-16 lg:grid-cols-2">

                {/* ── Left: Form ── */}
                <div className="-mx-5 rounded-none border border-white/60 bg-white p-6 shadow-2xl sm:mx-0 sm:rounded-[2rem] sm:p-8 md:rounded-[3rem] md:p-12">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600">
                                <CheckCircle2 className="h-10 w-10" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900">You&apos;re booked!</h3>
                            <p className="text-slate-500">
                                We&apos;ll send a calendar invite to your email within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            {/* Name + Email */}
                            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-4 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50 md:px-6"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Business Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@company.com"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-4 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50 md:px-6"
                                    />
                                </div>
                            </div>

                            {/* Company + Languages */}
                            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Company Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        placeholder="Acme Corp"
                                        className="h-14 w-full rounded-2xl border border-slate-100 bg-white px-4 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50 md:px-6"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Languages Needed</label>
                                    <select
                                        value={languages}
                                        onChange={(e) => setLanguages(e.target.value)}
                                        className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-slate-100 bg-white px-4 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50 md:px-6"
                                    >
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
                                            <input
                                                type="radio"
                                                name="volume"
                                                value={v}
                                                checked={volume === v}
                                                onChange={(e) => setVolume(e.target.value)}
                                                className="h-4 w-4 accent-rose-500"
                                            />
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
                                            <input
                                                type="checkbox"
                                                checked={interests.includes(item)}
                                                onChange={() => toggleInterest(item)}
                                                className="h-4 w-4 rounded accent-rose-500"
                                            />
                                            <span className="text-sm text-slate-600">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-700">Additional Details</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell us about your specific needs..."
                                    className="h-32 w-full resize-none rounded-2xl border border-slate-100 bg-white p-4 outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50 md:p-6"
                                />
                            </div>

                            {error && (
                                <p className="text-center text-sm font-medium text-red-500">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex h-16 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-xl transition-all hover:bg-rose-600 active:scale-[0.98] disabled:opacity-70"
                            >
                                {loading ? "Booking your slot…" : "Schedule Demo"}
                                {!loading && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
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
                            <Lock className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-slate-600">
                            Your information is safe with us. We never share your data with third parties.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
