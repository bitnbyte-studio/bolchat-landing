"use client";

import { useState } from "react";

export function WaitlistSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setEmail("");
        }, 500);
    };

    return (
        <section id="waitlist" className="px-6 py-16 md:py-24">
            <div className="mx-auto w-full max-w-4xl text-center">
                <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-500 to-pink-600 p-12 text-white md:p-20">
                    {/* Background blobs */}
                    <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

                    <h2 className="relative z-10 mb-6 text-4xl font-bold md:text-5xl">Join the Waitlist</h2>
                    <p className="relative z-10 mb-10 text-lg text-rose-100">
                        Get notified when BolChat launches. Early access for the first 100 business signups.
                    </p>

                    {submitted ? (
                        <div className="relative z-10 mx-auto max-w-md rounded-2xl border border-white/40 bg-white/20 p-4 text-left backdrop-blur-sm">
                            <p className="font-semibold text-white">You&apos;re in.</p>
                            <p className="text-sm text-rose-100">We will contact you when beta invites open.</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="relative z-10 mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your business email"
                                required
                                className="h-14 flex-1 rounded-2xl border border-white/30 bg-white/20 px-6 text-white placeholder:text-rose-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="h-14 rounded-2xl bg-white px-8 font-bold text-rose-600 transition-all hover:bg-rose-50 disabled:opacity-70"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    )}

                    <p className="relative z-10 mt-6 text-sm text-rose-200">No spam. Just updates on your terms.</p>
                </div>
            </div>
        </section>
    );
}
