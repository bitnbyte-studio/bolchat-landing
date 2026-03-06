const TESTIMONIALS = [
    {
        seed: "Sarah",
        quote:
            "BolChat's support team was instrumental in our deployment. They understood our multilingual requirements perfectly and helped us go live in just 2 weeks.",
        name: "Sarah Chen",
        role: "Ops Manager, TechFlow Inc.",
    },
    {
        seed: "Marcus",
        quote:
            "The sales process was transparent and professional. No sales pressure, just genuine interest in solving our customer support challenges.",
        name: "Marcus Johnson",
        role: "Head of Support, RetailGlobal",
    },
    {
        seed: "Elena",
        quote:
            "Their enterprise support is outstanding. Dedicated account manager, proactive optimization suggestions, and 24/7 availability.",
        name: "Elena Rodriguez",
        role: "VP of Customer Experience, FinanceFlow",
    },
];

function Stars() {
    return (
        <div className="mb-4 flex gap-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-slate-900">Customer Voices</h2>
                    <p className="text-slate-500">What our clients say about BolChat&apos;s support.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col rounded-[2.5rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,157,0.15)]"
                        >
                            <Stars />
                            <p className="mb-8 flex-1 italic leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                            <div className="flex items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`}
                                    alt={t.name}
                                    className="h-12 w-12 rounded-full border border-rose-100 bg-slate-100"
                                />
                                <div>
                                    <p className="font-bold text-sm text-slate-900">{t.name}</p>
                                    <p className="text-xs text-slate-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
