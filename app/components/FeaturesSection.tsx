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
        description: "Define custom personas, instructions, and behavior. Train your agents on your specific business logic and brand voice.",
        icon: Settings2,
        colSpan: "md:col-span-2",
        bgColor: "bg-blue-50/50",
        iconColor: "text-blue-500",
        iconBg: "bg-blue-100"
    },
    {
        title: "Agent Customization",
        description: "Full control over your AI Agent's interface. Match your brand colors, icons, and position perfectly.",
        icon: Layout,
        colSpan: "md:col-span-1",
        bgColor: "bg-indigo-50/50",
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-100"
    },
    {
        title: "Real-time Analytics",
        description: "Track agent performance, containment rates, and support volume trends in one powerful dashboard.",
        icon: BarChart3,
        colSpan: "md:col-span-1",
        bgColor: "bg-rose-50/50",
        iconColor: "text-rose-500",
        iconBg: "bg-rose-100"
    },
    {
        title: "Autonomous Monitoring",
        description: "View live agent transcripts and historical conversations. Gain full oversight over every AI-customer interaction.",
        icon: Eye,
        colSpan: "md:col-span-2",
        bgColor: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        iconBg: "bg-emerald-100"
    },
    {
        title: "Enterprise Security",
        description: "SOC2 compliant. Your business data is encrypted and never used to train public models. Built for large-scale security.",
        icon: ShieldCheck,
        colSpan: "md:col-span-2",
        bgColor: "bg-slate-50/50",
        iconColor: "text-slate-700",
        iconBg: "bg-slate-200"
    },
    {
        title: "Lead Capture",
        description: "Automatically identify and capture qualified leads during conversations. Sync directly with your CRM of choice.",
        icon: UserPlus,
        colSpan: "md:col-span-1",
        bgColor: "bg-amber-50/50",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-100"
    },
];

export function FeaturesSection() {
    return (
        <section className="relative py-16 md:py-24 bg-white/40">
            <Container maxWidth="max-w-5xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Everything you need to launch
                    </h2>
                    <p className="text-lg text-slate-600">
                        BolChat isn't just a chatbot; it's a complete support infrastructure designed to give you full control over your customer experience.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl border border-slate-200 ${item.bgColor} p-8 transition-all hover:shadow-lg hover:-translate-y-1 ${item.colSpan}`}
                        >
                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}>
                                <item.icon strokeWidth={2.5} className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

