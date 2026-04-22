import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service — BolChat",
    description:
        "BolChat's Terms of Service. Read the terms and conditions governing your use of the BolChat AI customer support platform.",
    alternates: { canonical: "https://bolchat.tech/terms" },
};

const LAST_UPDATED = "April 23, 2026";
const CONTACT_EMAIL = "hello@bolchat.tech";

const sections = [
    {
        title: "1. Acceptance of Terms",
        text: `By accessing or using BolChat's platform at bolchat.tech (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms. If you do not agree to these Terms, do not use the Service.`,
    },
    {
        title: "2. Description of Service",
        text: "BolChat provides an AI-powered customer support automation platform that enables businesses to deploy autonomous AI agents on their websites. The Service includes knowledge base management, AI agent configuration, conversation management, lead capture, analytics, and integration capabilities.",
    },
    {
        title: "3. Account Registration",
        text: "To access most features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately at " + CONTACT_EMAIL + " if you suspect unauthorised use of your account.",
    },
    {
        title: "4. Acceptable Use",
        text: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not: use the Service to transmit spam, malware, or harmful content; use the Service to deceive, harass, or harm others; attempt to gain unauthorised access to any part of the Service or its infrastructure; use the Service to violate any applicable laws or regulations; scrape, reverse-engineer, or attempt to extract the source code of the platform; or use the Service in a way that could damage, disable, or impair the Service.`,
    },
    {
        title: "5. Your Content & Knowledge Base",
        text: "You retain all rights to content you upload to the Service, including documents, FAQs, and other materials used to train your AI agent (\"Your Content\"). By uploading Your Content, you grant BolChat a limited licence to process, store, and use it solely to provide the Service to you. You represent that you have all necessary rights to Your Content and that it does not violate any third-party rights or applicable laws.",
    },
    {
        title: "6. Privacy & Data",
        text: `Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. You can view our Privacy Policy at bolchat.tech/privacy. By using the Service, you consent to our data practices as described in the Privacy Policy.`,
    },
    {
        title: "7. Payment & Billing",
        text: "Certain features of the Service require payment. Pricing and plan details are available on our pricing page. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with reasonable notice. Failure to pay may result in suspension or termination of your account.",
    },
    {
        title: "8. Intellectual Property",
        text: "The Service, including its software, design, logos, and content (excluding Your Content), is owned by BolChat and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the Service for its intended purpose. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.",
    },
    {
        title: "9. Third-Party Integrations",
        text: "The Service may integrate with third-party services (such as CRM platforms, helpdesks, and communication tools). These integrations are subject to the terms and privacy policies of those third parties. BolChat is not responsible for the practices of third-party services.",
    },
    {
        title: "10. Disclaimers",
        text: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. AI-GENERATED RESPONSES ARE BASED ON YOUR KNOWLEDGE BASE AND MAY NOT ALWAYS BE ACCURATE. YOU ARE RESPONSIBLE FOR REVIEWING AND VALIDATING THE ACCURACY OF YOUR AI AGENT'S RESPONSES.`,
    },
    {
        title: "11. Limitation of Liability",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOLCHAT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNTS YOU PAID TO BOLCHAT IN THE THREE MONTHS PRECEDING THE CLAIM.",
    },
    {
        title: "12. Termination",
        text: "You may terminate your account at any time by contacting us. We may suspend or terminate your access to the Service at our discretion if you violate these Terms, fail to pay fees, or if we discontinue the Service. Upon termination, your right to use the Service ceases immediately. We will provide reasonable notice where possible.",
    },
    {
        title: "13. Changes to Terms",
        text: "We reserve the right to modify these Terms at any time. We will notify you of material changes by email or by posting a notice on our website. Your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.",
    },
    {
        title: "14. Governing Law",
        text: "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of India.",
    },
    {
        title: "15. Contact",
        text: `If you have any questions about these Terms, please contact us at ${CONTACT_EMAIL}. We aim to respond to all enquiries within 5 business days.`,
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="py-20 md:py-32">
                <Container maxWidth="max-w-2xl" className="px-6 md:px-0">

                    {/* Header */}
                    <div className="mb-12 pb-8 border-b border-slate-100">
                        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">Legal</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-sm text-slate-400 font-medium">Last updated: {LAST_UPDATED}</p>
                        <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500">
                            Please read these Terms of Service carefully before using BolChat. These Terms constitute a legally binding agreement between you and BolChat.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="text-[0.9rem] leading-relaxed text-slate-500">
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Related links */}
                    <div className="mt-16 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/privacy"
                            className="flex-1 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center"
                        >
                            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Also read</p>
                            <p className="font-bold text-slate-900">Privacy Policy →</p>
                        </Link>
                        <Link
                            href="/demo"
                            className="flex-1 p-5 rounded-2xl border border-rose-100 bg-rose-50/40 hover:bg-rose-50 transition-all text-center"
                        >
                            <p className="text-xs font-bold tracking-widest uppercase text-rose-400 mb-1">Questions?</p>
                            <p className="font-bold text-slate-900">Talk to our team →</p>
                        </Link>
                    </div>

                </Container>
            </main>
            <Footer />
        </div>
    );
}
