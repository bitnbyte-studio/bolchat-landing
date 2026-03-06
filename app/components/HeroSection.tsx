"use client";

export function HeroSection() {
    return (
        <section id="product" className="relative px-6 pb-8 pt-24 md:pb-28 md:pt-28">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
                {/* ── Left: Copy ── */}
                <div>
                    <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                        Multilingual AI Chatbots for
                        <span className="block bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Modern Businesses
                        </span>
                    </h1>

                    <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Automate customer support across 50+ languages with context-aware AI.
                        Deploy in minutes, not months.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <a
                            href="#waitlist"
                            className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-rose-200/50 transition-all hover:scale-105 active:scale-95 sm:w-auto"
                        >
                            Get Early Access
                        </a>
                        <a
                            href="/demo"
                            className="w-full rounded-2xl border border-white/50 bg-white/80 px-8 py-4 text-center text-lg font-bold text-slate-900 transition-all hover:bg-white sm:w-auto"
                        >
                            Schedule Demo
                        </a>
                    </div>

                    {/* Trust avatars */}
                    <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
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

                        <div className="relative z-10 flex h-48 w-48 sm:h-64 sm:w-64 items-center justify-center rounded-[3rem] sm:rounded-[4rem] border border-white/60 bg-white shadow-2xl lg:h-80 lg:w-80">
                            <div className="relative flex h-36 w-36 sm:h-48 sm:w-48 items-center justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-rose-400 via-pink-500 to-orange-400 lg:h-60 lg:w-60">
                                <svg
                                    viewBox="0 0 120 120"
                                    className="h-20 w-20 sm:h-28 sm:w-28 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)] lg:h-36 lg:w-36"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path d="M60 18v12M49 20h22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                    <rect x="26" y="30" width="68" height="52" rx="16" stroke="currentColor" strokeWidth="5" />
                                    <circle cx="48" cy="56" r="7" fill="currentColor" />
                                    <circle cx="72" cy="56" r="7" fill="currentColor" />
                                    <path d="M44 72c4 4 9 6 16 6s12-2 16-6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                    <rect x="36" y="86" width="48" height="10" rx="5" fill="currentColor" />
                                    <path d="M22 44h-8M106 44h-8M22 60h-8M106 60h-8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Live Status badge */}
                            <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-8 flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl border border-rose-100 bg-white/90 p-3 sm:p-4 shadow-xl backdrop-blur-md">
                                <div className="grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-full bg-green-100 text-green-600">✓</div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] font-bold uppercase text-slate-400">Live Status</p>
                                    <p className="text-xs sm:text-sm font-bold text-slate-800">Multilingual Online</p>
                                </div>
                            </div>
                        </div>

                        {/* AI Model badge */}
                        <div className="absolute -left-4 -top-6 sm:-left-8 sm:-top-10 flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl border border-rose-100 bg-white/90 p-3 sm:p-4 shadow-xl backdrop-blur-md">
                            <div className="grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-full bg-rose-100 text-rose-600">⚡</div>
                            <div>
                                <p className="text-[8px] sm:text-[10px] font-bold uppercase text-slate-400">AI Model</p>
                                <p className="text-xs sm:text-sm font-bold text-slate-800">GPT-4 Optimized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
