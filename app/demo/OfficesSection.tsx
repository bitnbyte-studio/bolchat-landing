const OFFICES = [
    {
        flag: "🇬🇧",
        city: "London HQ",
        address: "123 Tech Street, Shoreditch, London, EC2A 4NE",
        hours: "9 AM – 6 PM GMT",
        team: "Product, Sales",
    },
    {
        flag: "🇺🇸",
        city: "San Francisco",
        address: "456 Innovation Ave, San Francisco, CA 94105",
        hours: "9 AM – 6 PM PST",
        team: "Engineering",
    },
    {
        flag: "🇸🇬",
        city: "Singapore",
        address: "789 Future Boulevard, Singapore 018989",
        hours: "9 AM – 6 PM SGT",
        team: "APAC Sales",
    },
];

export function OfficesSection() {
    return (
        <section className="border-y border-rose-100/50 bg-white/40 px-6 py-16 backdrop-blur-sm md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-slate-900">Meet Our Team</h2>
                    <p className="text-slate-500">Visit one of our global innovation hubs.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {OFFICES.map((office) => (
                        <div
                            key={office.city}
                            className="rounded-[2.5rem] border border-white/60 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,107,157,0.10)]"
                        >
                            <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
                                <span className="text-2xl">{office.flag}</span>
                                {office.city}
                            </h4>
                            <p className="mb-6 text-sm text-slate-500">{office.address}</p>
                            <div className="flex justify-between border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                                <span>{office.hours}</span>
                                <span>{office.team}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
