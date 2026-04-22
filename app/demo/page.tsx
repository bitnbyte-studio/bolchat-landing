import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DemoHero } from "./DemoHero";
import { DemoFormSection } from "./DemoFormSection";
import { ContactCardsSection } from "./ContactCardsSection";
import { OfficesSection } from "./OfficesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { FinalCtaSection } from "./FinalCtaSection";

export const metadata: Metadata = {
    title: "Book a BolChat Demo — See AI Support Automation in Action",
    description:
        "Book a 30-minute personalized demo of BolChat. See how autonomous AI agents resolve customer queries in 50+ languages — live. Setup takes under 30 minutes. No credit card required.",
    alternates: {
        canonical: "https://bolchat.tech/demo",
    },
    openGraph: {
        title: "Book a BolChat Demo — See AI Support Automation in Action",
        description:
            "See BolChat's multilingual AI agent resolve real customer queries live. Book a free 30-minute personalized demo with our team.",
        url: "https://bolchat.tech/demo",
    },
};

export default function DemoPage() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)] text-slate-900">
            {/* Global ambient blobs */}
            <div className="pointer-events-none fixed inset-0 -z-0">
                <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-pink-200/40 blur-[100px]" />
                <div className="absolute -right-40 top-1/2 h-[800px] w-[800px] rounded-full bg-rose-200/30 blur-[100px]" />
            </div>

            <Navbar />
            <DemoHero />
            <DemoFormSection />
            <ContactCardsSection />
            <OfficesSection />
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection />
            <Footer />
        </div>
    );
}
