import { Container } from "../components/Container";

const CONTACTS = [
    {
        iconBg: "bg-slate-900",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: "Sales",
        details: [
            {
                label: "Email",
                value: "hello@bolchat.tech",
                href: "mailto:hello@bolchat.tech",
            },
            {
                label: "For",
                value: "Pricing, plans, and custom solutions",
                href: null,
            },
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
        title: "Support",
        details: [
            {
                label: "Email",
                value: "support@bolchat.tech",
                href: "mailto:support@bolchat.tech",
            },
            {
                label: "For",
                value: "Technical issues and platform help",
                href: null,
            },
        ],
    },
];

export function ContactCardsSection() {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-3xl font-bold text-slate-900">Get in Touch</h2>
                    <p className="text-slate-500">Reach the right person from the first message.</p>
                </div>

                <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
                    {CONTACTS.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className={`mb-6 grid h-12 w-12 place-items-center rounded-xl text-white ${card.iconBg}`}>
                                {card.icon}
                            </div>
                            <h3 className="mb-5 text-xl font-bold text-slate-900">{card.title}</h3>
                            <ul className="space-y-3">
                                {card.details.map((d) => (
                                    <li key={d.label} className="flex flex-col text-sm">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{d.label}</span>
                                        {d.href ? (
                                            <a href={d.href} className="font-semibold text-slate-800 hover:text-rose-500 transition-colors">
                                                {d.value}
                                            </a>
                                        ) : (
                                            <span className="text-slate-600">{d.value}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
