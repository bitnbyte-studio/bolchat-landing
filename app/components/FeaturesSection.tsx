"use client";

const features = [
    {
        title: "Instant Setup",
        description: "Deploy your chatbot in minutes with a straightforward onboarding flow.",
        icon: "clock",
    },
    {
        title: "AI Powered",
        description: "Advanced models understand context and respond with business-aware answers.",
        icon: "brain",
    },
    {
        title: "50+ Languages",
        description: "Serve customers globally with multilingual support across major markets.",
        icon: "language",
    },
];

function Icon({ type }: { type: string }) {
    if (type === "clock") {
        return (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 7v5l3 2" />
            </svg>
        );
    }

    if (type === "brain") {
        return (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1a3 3 0 0 0 3 3" />
                <path d="M15 4a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-3 3" />
                <path d="M9 8h6M9 12h6M12 4v16" />
            </svg>
        );
    }

    // language (globe) icon
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6h16M4 12h16M4 18h16" />
            <path d="M7 4a13 13 0 0 0 0 16M17 4a13 13 0 0 1 0 16" />
        </svg>
    );
}

export function FeaturesSection() {
    return (
        <section className="relative px-6 pb-16 pt-8 md:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">Built for high-growth teams</h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to handle global customer inquiries automatically.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,157,0.15)]"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                                <Icon type={item.icon} />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                            <p className="leading-relaxed text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
