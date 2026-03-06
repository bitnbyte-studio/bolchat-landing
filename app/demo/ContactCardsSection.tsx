const CONTACTS = [
    {
        iconBg: "bg-slate-900",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: "Sales Inquiries",
        details: [
            { icon: "@", text: "sales@bolchat.io" },
            { icon: "📞", text: "+44 (0)20 7946 0123" },
            { icon: "🕐", text: "Mon–Fri, 9 AM – 6 PM GMT" },
        ],
    },
    {
        iconBg: "bg-rose-500",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
        title: "Support & Technical",
        details: [
            { icon: "@", text: "support@bolchat.io" },
            { icon: "💬", text: "In-app support widget" },
            { icon: "🕐", text: "24/7 via chat" },
        ],
    },
    {
        iconBg: "bg-orange-400",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Enterprise Solutions",
        details: [
            { icon: "@", text: "enterprise@bolchat.io" },
            { icon: "👤", text: "Dedicated Implementation Manager" },
            { icon: "🛡️", text: "SLA-backed support" },
        ],
    },
];

export function ContactCardsSection() {
    return (
        <section className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-slate-900">Get in Touch</h2>
                    <p className="text-lg text-slate-500">Choose the right channel for your needs.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {CONTACTS.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,157,0.15)]"
                        >
                            <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white ${card.iconBg}`}>
                                {card.icon}
                            </div>
                            <h3 className="mb-5 text-xl font-bold text-slate-900">{card.title}</h3>
                            <ul className="space-y-3">
                                {card.details.map((d) => (
                                    <li key={d.text} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="mt-0.5 flex-shrink-0 text-base leading-none">{d.icon}</span>
                                        <span>{d.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
