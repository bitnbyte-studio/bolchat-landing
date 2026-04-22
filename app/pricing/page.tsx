import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Check, ArrowRight, Zap, Building2, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "BolChat Pricing — Custom AI Support Plans for Every Business Size",
    description:
        "BolChat pricing is tailored to your support volume, languages, and team size. From startups to enterprise — get a plan that scales with your business. Talk to our team.",
    alternates: {
        canonical: "https://bolchat.tech/pricing",
    },
    openGraph: {
        title: "BolChat Pricing — Custom AI Support Plans for Every Business Size",
        description:
            "No rigid tiers. BolChat builds a plan around your support volume, languages, and team. Talk to our team to get started.",
        url: "https://bolchat.tech/pricing",
    },
};

const tiers = [
    {
        name: "Starter",
        icon: Zap,
        tagline: "For early-stage startups and solo founders.",
        description:
            "Get your AI agent live in under 30 minutes. Perfect for teams validating AI support automation for the first time.",
        features: [
            "AI agent on your website",
            "Up to 2 languages",
            "Knowledge base integration",
            "Web widget with basic styling",
            "Email support",
            "Community access",
        ],
        ctaText: "Get Started Free",
        ctaHref: "/contact",
        highlight: false,
        badge: null,
    },
    {
        name: "Growth",
        icon: Sparkles,
        tagline: "For scaling teams with real support volume.",
        description:
            "The full BolChat platform — multilingual resolution, lead capture, CRM integrations, and analytics. Priced to your volume.",
        features: [
            "Everything in Starter",
            "50+ languages natively",
            "Automated lead capture to CRM",
            "Helpdesk integrations (Zendesk, Intercom)",
            "Full analytics dashboard",
            "Human fallback workflows",
            "Priority email support",
        ],
        ctaText: "Talk to Us",
        ctaHref: "/contact",
        highlight: true,
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        icon: Building2,
        tagline: "For high-volume teams with strict compliance needs.",
        description:
            "Custom infrastructure, dedicated support, white-label options, and SLA guarantees. Fully tailored to your organization.",
        features: [
            "Everything in Growth",
            "Unlimited AI responses",
            "Custom API & Webhooks",
            "SSO & Advanced Security",
            "White-labeled widget",
            "Dedicated account manager",
            "99.9% uptime SLA",
            "24/7 priority support",
        ],
        ctaText: "Contact Sales",
        ctaHref: "/contact",
        highlight: false,
        badge: null,
    },
];

const faqs = [
    {
        q: "How is BolChat pricing determined?",
        a: "Pricing is based on your monthly support volume, number of languages needed, integrations, and team size. We don't believe in one-size-fits-all plans — we build something that fits your actual usage.",
    },
    {
        q: "Is there a free plan?",
        a: "Yes. Starter is free to get up and running — deploy your AI agent, connect your knowledge base, and see it resolve real queries. Upgrade when you need more volume or features.",
    },
    {
        q: "Do I need a credit card to start?",
        a: "No credit card required for the Starter plan. You can explore the platform, test multilingual support, and validate BolChat before committing to anything.",
    },
    {
        q: "Can I get a custom quote for my team?",
        a: "Absolutely. Book a demo and tell us about your support volume, languages, and current stack. We'll put together a tailored proposal within 24 hours.",
    },
    {
        q: "What happens when I exceed my volume?",
        a: "We'll reach out before you hit a limit, never cut you off mid-conversation. You'll always have time to upgrade on your terms.",
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", item: "/" },
                    { name: "Pricing", item: "/pricing" },
                ]}
            />
            <Navbar />

            <main className="py-24 md:py-32">

                {/* ── Hero ── */}
                <Container maxWidth="max-w-3xl" className="text-center mb-20 md:mb-28">
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-5">
                        Pricing
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.08]">
                        A plan built around{" "}
                        <span className="text-rose-500">your business.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        No rigid tiers. No per-seat surprises. BolChat pricing is based on your
                        support volume, languages, and team — so you only pay for what you actually use.
                    </p>
                </Container>

                {/* ── Tier Cards ── */}
                <Container maxWidth="max-w-7xl" className="mb-24">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {tiers.map((tier, i) => (
                            <div
                                key={i}
                                className={`relative flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-transform hover:-translate-y-1 ${
                                    tier.highlight
                                        ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900"
                                        : "bg-white text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/20"
                                }`}
                            >
                                {tier.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-rose-500 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
                                        {tier.badge}
                                    </div>
                                )}

                                {/* Icon + Name */}
                                <div className={`mb-2 flex h-11 w-11 items-center justify-center rounded-2xl ${tier.highlight ? "bg-white/10" : "bg-rose-50"}`}>
                                    <tier.icon className={`h-5 w-5 ${tier.highlight ? "text-rose-400" : "text-rose-500"}`} />
                                </div>

                                <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
                                <p className={`text-sm font-semibold mb-4 ${tier.highlight ? "text-rose-400" : "text-rose-500"}`}>
                                    {tier.tagline}
                                </p>
                                <p className={`text-sm leading-relaxed mb-8 ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                                    {tier.description}
                                </p>

                                {/* Pricing signal */}
                                <div className={`mb-8 pb-8 border-b ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
                                    <p className={`text-sm font-semibold uppercase tracking-widest ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                                        Pricing
                                    </p>
                                    <p className={`text-xl font-bold mt-1 ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                                        {tier.name === "Starter" ? "Free to start" : "Tailored to your needs"}
                                    </p>
                                    {tier.name !== "Starter" && (
                                        <p className={`text-xs mt-1 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                                            Talk to us — we'll build your plan in 24 hrs
                                        </p>
                                    )}
                                </div>

                                <ul className="mb-10 space-y-3.5 flex-1">
                                    {tier.features.map((feature, j) => (
                                        <li key={j} className="flex gap-3 items-start">
                                            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${tier.highlight ? "text-rose-400" : "text-rose-500"}`} />
                                            <span className={`text-sm font-medium ${tier.highlight ? "text-slate-200" : "text-slate-700"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={tier.ctaHref}
                                    className={`w-full text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                                        tier.highlight
                                            ? "bg-white text-slate-900 hover:bg-rose-50"
                                            : "bg-slate-900 text-white hover:bg-slate-800"
                                    }`}
                                >
                                    {tier.ctaText}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>

                {/* ── Trust bar ── */}
                <Container maxWidth="max-w-4xl" className="mb-24">
                    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900 mb-1">30 min</p>
                            <p className="text-sm font-medium text-slate-500">Average time to go live</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900 mb-1">50+</p>
                            <p className="text-sm font-medium text-slate-500">Languages supported natively</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-slate-900 mb-1">24 hrs</p>
                            <p className="text-sm font-medium text-slate-500">To get a custom quote</p>
                        </div>
                    </div>
                </Container>

                {/* ── FAQ ── */}
                <Container maxWidth="max-w-3xl" className="mb-20">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">
                        Pricing questions, answered.
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </Container>

                {/* ── Bottom CTA ── */}
                <Container maxWidth="max-w-3xl" className="text-center">
                    <div className="bg-slate-900 rounded-[2.5rem] px-8 py-14 md:px-16">
                        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-400 mb-4">
                            Let's talk
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                            Not sure which plan fits?
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto font-medium">
                            Book a 30-minute call. We'll understand your support volume, languages, and stack — and send you a custom proposal within 24 hours.
                        </p>
                        <Link
                            href="/demo"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-rose-50 transition-all group"
                        >
                            Book a Free Demo
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </Container>

            </main>

            <CTASection />
            <Footer />
        </div>
    );
}
