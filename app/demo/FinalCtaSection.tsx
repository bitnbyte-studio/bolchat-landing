import { ArrowRight, Mail } from "lucide-react";

export function FinalCtaSection() {
    return (
        <section className="px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-5xl text-center">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white shadow-2xl sm:p-12 md:rounded-[3rem] md:p-20">
                    {/* Decorative blobs */}
                    <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

                    <h2 className="relative z-10 mb-6 text-4xl font-bold md:text-5xl">Ready for a Demo?</h2>
                    <p className="relative z-10 mb-12 text-lg text-rose-100">
                        No credit card required. Book your slot in just 2 minutes.
                    </p>

                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#demo-form"
                            className="group flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-rose-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                        >
                            Schedule Demo Now
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="mailto:hello@bolchat.tech"
                            className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                        >
                            <Mail className="h-5 w-5" />
                            Email Us Directly
                        </a>
                    </div>

                    <p className="relative z-10 mt-8 text-sm text-rose-200">
                        Trusted by 500+ businesses worldwide
                    </p>
                </div>
            </div>
        </section>
    );
}
