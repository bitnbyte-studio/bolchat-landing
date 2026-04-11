import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { redirect } from "next/navigation";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

export const metadata = {
    title: "Contact Sales",
    description: "Get in touch with our team to see how BolChat can scale your customer support operations 10x.",
};

export default function ContactPage({
    searchParams,
}: {
    searchParams: { success?: string };
}) {
    async function submitLead(formData: FormData) {
        "use server";
        
        const payload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            requirements: formData.get("requirements") as string,
        };

        try {
            const res = await fetch("http://localhost:8000/api/v1/public/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                console.error("Failed to submit lead");
                return;
            }
        } catch (e) {
            console.error("Error submitting lead:", e);
            return;
        }

        redirect("/contact?success=true");
    }

    const isSuccess = searchParams.success === "true";

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)]">
            <BreadcrumbJsonLd 
                items={[
                    { name: "Home", item: "/" },
                    { name: "Contact", item: "/contact" }
                ]} 
            />
            <Navbar />
            
            <main className="py-24 md:py-32">
                <Container maxWidth="max-w-7xl">
                    <div className="grid gap-16 md:grid-cols-2">
                        
                        {/* Left Side: Trust Signals */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                                Let's build your AI support strategy.
                            </h1>
                            <p className="text-lg text-slate-600 mb-12 max-w-md leading-relaxed">
                                Our team of AI experts is ready to help you eliminate support backlog and increase customer satisfaction. Fill out the form, and we'll reach out within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Email Us</h3>
                                        <p className="text-slate-500">hello@bolchat.tech</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(255,107,157,0.1)] border border-slate-100">
                            {isSuccess ? (
                                <div className="flex h-full flex-col items-center justify-center text-center py-12">
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <CheckCircle2 className="h-10 w-10" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Submitted</h2>
                                    <p className="text-slate-600 mb-8 max-w-sm">
                                        Thanks for reaching out! We have received your request and our team will contact you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Request a Demo</h2>
                                    
                                    <form action={submitLead} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    required 
                                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                                                <input 
                                                    type="text" 
                                                    name="company" 
                                                    required 
                                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                                                placeholder="john@acme.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="requirements" className="text-sm font-semibold text-slate-700">How can we help?</label>
                                            <textarea 
                                                name="requirements" 
                                                required 
                                                rows={4}
                                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 resize-none"
                                                placeholder="Tell us about your support volume and main pain points..."
                                            />
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="w-full rounded-xl bg-slate-900 py-4 font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
                                        >
                                            Submit Request
                                        </button>
                                        <p className="text-center text-xs text-slate-500 mt-4">
                                            By submitting, you agree to our Privacy Policy and Terms of Service.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>

                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

