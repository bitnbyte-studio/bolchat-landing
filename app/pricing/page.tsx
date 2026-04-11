import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "Pricing Plans",
    description: "Predictable pricing tailored to your support volume. Try BolChat today and scale without adding headcount.",
};

const tiers = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for testing BolChat and early-stage startups.",
        features: [
            "Up to 100 AI responses/month",
            "1 Knowledge Base document",
            "Standard Language Support (Eng & Span)",
            "Web Widget integration",
            "Community Support"
        ],
        ctaText: "Start for free",
        ctaHref: "/contact",
        popular: false,
    },
    {
        name: "Growth",
        price: "$99/mo",
        description: "For small businesses scaling their support operations.",
        features: [
            "Up to 2,000 AI responses/month",
            "Unlimited Knowledge Base documents",
            "50+ Languages Full Support",
            "Helpdesk integrations (Zendesk, Intercom)",
            "Basic Analytics Dashboard",
            "Email Support"
        ],
        ctaText: "Try Growth",
        ctaHref: "/contact",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "High volume automation with SOC2 compliance.",
        features: [
            "Unlimited AI responses",
            "Dedicated Account Manager",
            "Custom API & Webhooks",
            "SSO & Advanced Security",
            "White-labeled Widget",
            "99.9% Uptime SLA",
            "24/7 Priority Support"
        ],
        ctaText: "Contact Sales",
        ctaHref: "/contact",
        popular: false,
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "Pricing", item: "/pricing" }
                ]} 
            />
            <Navbar />
            
            <main className="py-24 md:py-32">
                <Container maxWidth="max-w-4xl" className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Only pay for what you automate.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        No hidden fees. Predictable pricing that dramatically lowers your cost per ticket while keeping customers happy.
                    </p>
                </Container>

                <Container maxWidth="max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <div 
                                key={i} 
                                className={`relative flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-transform hover:-translate-y-1 ${
                                    tier.popular 
                                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900" 
                                    : "bg-white text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/20"
                                }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-rose-500 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className={`mb-6 text-sm font-medium leading-relaxed ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                                    {tier.description}
                                </p>
                                
                                <div className="mb-8">
                                    <span className="text-4xl font-extrabold">{tier.price}</span>
                                </div>

                                <ul className="mb-10 space-y-4 flex-1">
                                    {tier.features.map((feature, j) => (
                                        <li key={j} className="flex gap-3 items-start">
                                            <Check className={`h-5 w-5 shrink-0 ${tier.popular ? "text-rose-400" : "text-rose-500"}`} />
                                            <span className={`text-sm font-medium ${tier.popular ? "text-slate-200" : "text-slate-700"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href={tier.ctaHref}
                                    className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
                                        tier.popular
                                        ? "bg-white text-slate-900 hover:bg-rose-50"
                                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                    }`}
                                >
                                    {tier.ctaText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>

            </main>

            <CTASection />
            <Footer />
        </div>
    );
}
