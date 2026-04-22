import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PlatformShowcase } from "./components/PlatformShowcase";
import { AnalyticsShowcase } from "./components/AnalyticsShowcase";
import { FaqSection } from "./components/FaqSection";
import { CTASection } from "./components/WaitlistSection";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)] text-slate-900">
            {/* Global background blobs */}
            <div className="pointer-events-none fixed inset-0 z-[-1]">
                <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-pink-200/40 blur-[100px]" />
                <div className="absolute -right-40 top-1/2 h-[800px] w-[800px] rounded-full bg-rose-200/30 blur-[100px]" />
            </div>

            <Navbar />
            <HeroSection />
            <EcosystemSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PlatformShowcase />
            <AnalyticsShowcase />
            <FaqSection />
            <CTASection />
            <Footer />
        </div>
    );
}
