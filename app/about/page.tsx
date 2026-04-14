import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/WaitlistSection";
import { BarChart3, Magnet, Settings2, Mail } from "lucide-react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "About BolChat | The Platform & Founder",
    description: "Discover how BolChat combines AI support with robust lead capturing and analytics. Built by software developer Shubham Singh.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "About", item: "/about" }
                ]} 
            />
            <Navbar />
            
            <main className="pt-28 md:pt-36 pb-20">
                <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                    
                    {/* ════════ PLATFORM OVERVIEW ════════ */}
                    <section className="mb-20 md:mb-28">
                        <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
                            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5 sm:mb-6">
                                More than support. <br className="hidden sm:block" />
                                <span className="text-rose-500">A proactive growth engine.</span>
                            </h1>
                            <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                                BolChat wasn't just built to answer redundant questions. It was engineered to be an active extension of your business—capturing leads in real time, capturing deep conversational analytics, and giving you absolute configuration control over your brand's voice.
                            </p>
                        </div>
                    </section>

                    {/* ════════ FEATURES GRID ════════ */}
                    <section className="mb-20 md:mb-32">
                        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3">
                            
                            <div className="bg-slate-50 border border-slate-100 p-4 sm:p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:border-rose-100 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
                                <div className="mb-3 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-rose-100 text-rose-500">
                                    <Magnet className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-[15px] sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-3 tracking-tight leading-tight">Lead Capturing</h3>
                                <p className="text-[12px] sm:text-[15px] text-slate-500 sm:text-slate-600 leading-snug sm:leading-relaxed font-medium max-w-[12rem] sm:max-w-none">
                                    Convert anonymous visitors into qualified pipeline straight to your sales team.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 p-4 sm:p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:border-rose-100 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
                                <div className="mb-3 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-100 text-indigo-500">
                                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-[15px] sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-3 tracking-tight leading-tight">Analytics</h3>
                                <p className="text-[12px] sm:text-[15px] text-slate-500 sm:text-slate-600 leading-snug sm:leading-relaxed font-medium max-w-[12rem] sm:max-w-none">
                                    Access dashboards mapping phrasing, fallback rates, and hourly engagement heatmaps.
                                </p>
                            </div>

                            <div className="col-span-2 lg:col-span-1 bg-slate-50 border border-slate-100 p-5 sm:p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:border-rose-100 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
                                <div className="mb-3 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-100 text-emerald-500">
                                    <Settings2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-[15px] sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-3 tracking-tight leading-tight">Total Configuration</h3>
                                <p className="text-[12px] sm:text-[15px] text-slate-500 sm:text-slate-600 leading-snug sm:leading-relaxed font-medium max-w-[18rem] sm:max-w-none">
                                    Command the exact system prompt, adjust strict thresholds, and deploy custom agents.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ════════ FOUNDER SECTION ════════ */}
                    <section className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 sm:p-12 md:p-16 text-white shadow-2xl">
                        {/* Elegant glow effect instead of busy graphics */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-500/20 to-transparent blur-[100px] pointer-events-none rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-transparent blur-[100px] pointer-events-none rounded-full" />
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                            
                            {/* Identity Block */}
                            <div className="shrink-0 w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-12">
                                <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">The Founder</span>
                                <h2 className="text-3xl font-extrabold text-white tracking-tight mb-1">Shubham Singh</h2>
                                <p className="text-rose-400 font-medium text-[15px] mb-8">Software Developer</p>
                                
                                <div className="space-y-4">
                                    <a 
                                        href="https://www.linkedin.com/in/shubham-singh-35153122b" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-3 text-[15px] font-medium text-slate-400 hover:text-white transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                                            <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </div>
                                        LinkedIn
                                    </a>
                                    <a 
                                        href="mailto:shubham@bolchat.tech" 
                                        className="flex items-center gap-3 text-[15px] font-medium text-slate-400 hover:text-white transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                                            <Mail className="w-4 h-4 text-rose-500" />
                                        </div>
                                        Email Me
                                    </a>
                                </div>
                            </div>

                            {/* Story Block */}
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 leading-tight max-w-xl text-white">
                                    Built by a developer. <br/> Designed for business growth.
                                </h3>
                                
                                <div className="space-y-5 text-[15px] sm:text-base text-slate-400 leading-relaxed font-medium">
                                    <p>
                                        When I set out to build BolChat, the market was flooded with generic chatbots that just regurgitated FAQs. I noticed founders didn't just want a support bot—they wanted a tool that actually drove revenue, captured leads, and gave them actionable data.
                                    </p>
                                    <p>
                                        That's why BolChat is engineered differently. It's a dual-threat platform. I paired a highly accurate RAG vector engine with deeply integrated lead capture pipelines and an analytics suite that tells you exactly what your users are asking.
                                    </p>
                                    <p>
                                        As a software developer, I believe in giving you the keys to the engine room. You have microscopic control over the widget's appearance, the agent's creativity tuning, and strict system rules. It adapts to your business, not the other way around.
                                    </p>
                                    <div className="mt-8 p-6 bg-white/5 border-l-2 border-rose-500 rounded-r-xl">
                                        <p className="text-white italic text-base sm:text-lg leading-relaxed">
                                            "If you have ideas, feedback, or just want to talk tech, don't hesitate to reach out. I'm always open to connecting."
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </main>
            
            <CTASection />
            <Footer />
        </div>
    );
}
