export function DemoHero() {
    return (
        <section className="relative px-6 pb-12 pt-24 text-center md:pb-16 md:pt-32">
            <div className="relative z-10 mx-auto max-w-4xl">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-white/60 px-4 py-1.5 text-sm font-medium text-rose-600 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    Book a 1-on-1 Product Demo
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
                    Let&apos;s Build Your{" "}
                    <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                        Multilingual System
                    </span>
                </h1>
                <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600">
                    Schedule a personalized demo with our team and see BolChat in action.
                    For enterprise questions, connect with our sales team.
                </p>

                {/* Stats row */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
                    {[
                        { value: "15 min", label: "Avg. demo length" },
                        { value: "50+", label: "Languages supported" },
                        { value: "2 weeks", label: "Average go-live" },
                        { value: "24 hrs", label: "Response time" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                            <p className="text-slate-500">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
