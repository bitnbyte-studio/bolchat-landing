import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Building2, MessageSquare, CheckCircle2 } from "lucide-react";
import { redirect } from "next/navigation";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Sales | BolChat",
    description: "Get in touch with our team to see how BolChat can scale your customer support operations 10x.",
};

export default async function ContactPage({
    searchParams,
}: {
    searchParams: Promise<{ success?: string }>;
}) {
    async function submitLead(formData: FormData) {
        "use server";
        
        // =========================================================================
        // HOW TO SET UP FREE EMAILS:
        // 1. Go to https://web3forms.com/
        // 2. Enter shubham@bolchat.tech to instantly generate an access key.
        // 3. Paste that access key here. It's 100% free and requires no account.
        // =========================================================================
        const WEB3FORMS_ACCESS_KEY = "d26f0cc5-1e1c-4e3d-9202-4fe5ebd0a5ab"; 
        
        const payload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            requirements: formData.get("requirements") as string,
        };

        try {
            // Send Email to shubham@bolchat.tech via Web3Forms
            if (WEB3FORMS_ACCESS_KEY) {
                await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        subject: `New Lead: ${payload.name} from ${payload.company}`,
                        from_name: "BolChat Website",
                        ...payload
                    }),
                });
            }
            
        } catch (e) {
            console.error("Error submitting lead:", e);
            return;
        }

        redirect("/contact?success=true");
    }

    const resolvedParams = await searchParams;
    const isSuccess = resolvedParams.success === "true";

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "Contact", item: "/contact" }
                ]} 
            />
            <Navbar />
            
            <main className="pt-28 pb-16 md:pt-40 md:pb-32">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="grid lg:grid-cols-[1fr_500px] gap-10 sm:gap-16 lg:gap-24 items-start">
                        
                        {/* ════════ LEFT: COPY & TRUST SIGNALS ════════ */}
                        <div className="pt-2 md:pt-4">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] md:leading-[1.05] mb-5 sm:mb-8">
                                Let's optimize your <br className="hidden lg:block"/>
                                <span className="text-rose-500">support architecture.</span>
                            </h1>
                            
                            <p className="text-[15px] sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-12 max-w-xl">
                                Whether you're looking to eliminate support backlog, capture more leads, or deploy multilingual agents—we can help. Drop your details below and our team will get back to you within hours.
                            </p>

                            <div className="mt-8">
                                <div className="border-l-2 border-slate-200 pl-5">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-rose-500" /> Direct Email
                                    </h3>
                                    <a href="mailto:hello@bolchat.tech" className="text-slate-600 hover:text-rose-500 font-medium transition-colors">
                                        hello@bolchat.tech
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* ════════ RIGHT: FORM MODULE ════════ */}
                        <div className="bg-white border border-slate-200 shadow-xl p-6 sm:p-8 md:p-10 relative mt-4 sm:mt-0">
                            {/* Decorative accent top border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500" />

                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center text-center py-12">
                                    <div className="mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                                        <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">Request Received</h2>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                                        Thank you. We'll be in touch shortly to discuss how BolChat can scale your operations.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">Technical Evaluation</h2>
                                    
                                    <form action={submitLead} className="space-y-5 sm:space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label htmlFor="name" className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-wider">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    required 
                                                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-white focus:border-rose-500 focus:ring-0 text-sm sm:text-base"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-1.5 sm:space-y-2">
                                                <label htmlFor="company" className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-wider">Company *</label>
                                                <input 
                                                    type="text" 
                                                    name="company" 
                                                    required 
                                                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-white focus:border-rose-500 focus:ring-0 text-sm sm:text-base"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label htmlFor="email" className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-wider">Work Email *</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-white focus:border-rose-500 focus:ring-0 text-sm sm:text-base"
                                                placeholder="john@acme.com"
                                            />
                                        </div>

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label htmlFor="requirements" className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                                Project Details <MessageSquare className="w-3 h-3 text-slate-400" />
                                            </label>
                                            <textarea 
                                                name="requirements" 
                                                required 
                                                rows={3}
                                                className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-white focus:border-rose-500 focus:ring-0 resize-none text-sm sm:text-base"
                                                placeholder="What is your current support volume? Are you looking for lead generation or strict support..."
                                            />
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="w-full bg-slate-900 py-3.5 sm:py-4 font-bold text-white text-[14px] sm:text-[15px] tracking-wide transition-all hover:bg-slate-800 active:scale-[0.98] flex items-center justify-center gap-2"
                                        >
                                            Submit Overview
                                        </button>
                                        
                                        <p className="text-center text-[11px] font-medium text-slate-400 mt-4 leading-relaxed">
                                            All data is encrypted. We do not sell your data.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
