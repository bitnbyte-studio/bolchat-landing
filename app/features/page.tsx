import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Globe2, BarChart3, Settings2, Eye, UserPlus, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "BolChat Features — AI Support Automation, Lead Capture & 50+ Languages",
    description:
        "Explore BolChat's full feature set: autonomous AI resolution, multilingual customer support in 50+ languages, automated lead capture, CRM integrations, analytics, and enterprise security.",
    alternates: {
        canonical: "https://bolchat.tech/features",
    },
    openGraph: {
        title: "BolChat Features — AI Support Automation, Lead Capture & 50+ Languages",
        description:
            "Autonomous AI resolution, multilingual support in 50+ languages, automated lead capture, CRM integrations, real-time analytics, and enterprise-grade security — all in one platform.",
        url: "https://bolchat.tech/features",
    },
};

const detailedFeatures = [
    {
        title: "50+ Languages Natively",
        description: "Scale globally without language barriers. Our AI understands cultural context and industry-specific terminology in over 50 languages, delivering human-like fluency in every interaction.",
        icon: Globe2,
    },
    {
        title: "Advanced Analytics",
        description: "Gain deep insights into your support operations. Track containment rates, customer satisfaction (CSAT), and support volume across languages and channels in one unified dashboard.",
        icon: BarChart3,
    },
    {
        title: "Agent & Widget Config",
        description: "Take full control of your AI's persona and look. Customize instructions, tone of voice, and brand styling for your chat widget to ensure a consistent customer experience.",
        icon: Settings2,
    },
    {
        title: "Conversation Monitoring",
        description: "Gain 100% oversight of your AI interactions. View live transcripts in real-time or review historical conversations to continuously refine your knowledge base.",
        icon: Eye,
    },
    {
        title: "High-Intent Lead Capture",
        description: "Transform your support bot into a growth engine. BolChat automatically identifies buying intent, captures lead details, and syncs them directly with your CRM.",
        icon: UserPlus,
    },
    {
        title: "Enterprise Grade Security",
        description: "Built for the most demanding industries. SOC2 compliant infrastructure, end-to-end encryption, and custom data retention policies keep your enterprise data safe.",
        icon: ShieldCheck,
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "Features", item: "/features" }
                ]} 
            />
            <Navbar />
            
            <main className="py-24 md:py-32">
                <Container maxWidth="max-w-4xl" className="text-center mb-16 md:mb-24">

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Everything BolChat can do for your
                        <span className="block text-rose-500">support team.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From autonomous query resolution to multilingual support in 50+ languages — BolChat replaces rigid, outdated chatbots with an intelligent AI agent that acts like your best support rep.
                    </p>
                </Container>

                <Container maxWidth="max-w-7xl">
                    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        {detailedFeatures.map((feature, i) => (
                            <div key={i} className="group relative">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 ring-1 ring-inset ring-rose-500/10 transition-transform group-hover:-translate-y-1">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
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
