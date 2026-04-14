"use client";

import { Container } from "./Container";
import { 
    BarChart3, 
    Settings2, 
    Eye, 
    UserPlus, 
    ShieldCheck, 
    Layout 
} from "lucide-react";

const features = [
    {
        title: "Agent Personas",
        description: "Strict personas, custom logic, and perfect brand voice execution.",
        icon: Settings2,
        colorBg: "bg-blue-100",
        colorIcon: "text-blue-600"
    },
    {
        title: "Total Styling",
        description: "Full control over widget UI, colors, typography, and placement.",
        icon: Layout,
        colorBg: "bg-indigo-100",
        colorIcon: "text-indigo-600"
    },
    {
        title: "Live Analytics",
        description: "Track performance, containment trends, and volume live.",
        icon: BarChart3,
        colorBg: "bg-rose-100",
        colorIcon: "text-rose-600"
    },
    {
        title: "Audit Logging",
        description: "Every transcript saved. Gain total oversight over conversations.",
        icon: Eye,
        colorBg: "bg-emerald-100",
        colorIcon: "text-emerald-600"
    },
    {
        title: "Enterprise TLS",
        description: "Your data is encrypted and never trains public AI models.",
        icon: ShieldCheck,
        colorBg: "bg-slate-100",
        colorIcon: "text-slate-700"
    },
    {
        title: "Auto-Leads",
        description: "Passively capture emails right mid-conversation directly to CRM.",
        icon: UserPlus,
        colorBg: "bg-amber-100",
        colorIcon: "text-amber-600"
    },
];

export function FeaturesSection() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <Container maxWidth="max-w-6xl">
                <div className="mb-10 md:mb-16 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
                        Everything you <br className="hidden sm:block"/>
                        need to <span className="text-rose-500">launch.</span>
                    </h2>
                    <p className="text-[15px] sm:text-lg text-slate-600 font-medium leading-relaxed px-4 md:px-0">
                        BolChat isn't just a toy. It's a highly strict infrastructure to give you absolute control over your global support.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`mb-3 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8rem] sm:rounded-xl ${item.colorBg} ${item.colorIcon}`}>
                                <item.icon strokeWidth={2.5} className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                            <p className="text-slate-500 text-[13px] sm:text-[15px] leading-snug sm:leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

