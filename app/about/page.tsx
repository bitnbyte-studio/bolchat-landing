import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { Heart, Shield, Lightbulb, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "About BolChat",
    description: "Learn about the mission, values and the team behind BolChat — the next generation of multilingual AI support.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "About", item: "/about" }
                ]} 
            />
            <Navbar />
            
            <main className="py-24 md:py-32">
                <Container maxWidth="max-w-4xl" className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Breaking language barriers in support.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We believe that every customer, regardless of where they are or what language they speak, deserves instant and helpful support.
                    </p>
                </Container>

                <Container maxWidth="max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-2 mb-24">
                        <div className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-xl border border-slate-100 italic text-slate-700 leading-relaxed">
                            "Customer support was stuck in the 2000s. We saw enterprises struggling to scale across borders because hiring native speakers is slow and expensive. We built BolChat to make global support as easy as pasting a script."
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The BolChat Story</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Founded by a team of AI researchers and support veterans, BolChat was born out of a simple observation: most support tickets are repetitive and linguistic differences shouldn't be a hurdle.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Today, we help hundreds of companies resolve millions of inquiries in 50+ languages, allowing human teams to focus on what they do best: building relationships.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Customer First</h3>
                            <p className="text-sm text-slate-500">We optimize for the end-user experience above all else.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                                <Shield className="h-8 w-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Private & Secure</h3>
                            <p className="text-sm text-slate-500">Your data is yours. We build with enterprise-grade security.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                                <Lightbulb className="h-8 w-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Constant Innovation</h3>
                            <p className="text-sm text-slate-500">We push the boundaries of what RAG and LLMs can achieve.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Scalability</h3>
                            <p className="text-sm text-slate-500">Designed to grow from 10 tickets to 10 million.</p>
                        </div>
                    </div>
                </Container>
            </main>

            <CTASection />
            <Footer />
        </div>
    );
}
