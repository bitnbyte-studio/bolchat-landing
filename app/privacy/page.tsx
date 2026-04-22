import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — BolChat",
    description:
        "BolChat's privacy policy. Learn how we collect, use, and protect your data when you use our AI customer support platform.",
    alternates: { canonical: "https://bolchat.tech/privacy" },
};

const LAST_UPDATED = "April 23, 2026";
const CONTACT_EMAIL = "hello@bolchat.tech";

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            {
                subtitle: "Information you provide",
                text: "When you create an account, book a demo, or contact us, we collect information such as your name, email address, company name, and any messages you send us.",
            },
            {
                subtitle: "Information from your use of the platform",
                text: "When you use BolChat, we collect usage data including conversation logs (between your end-users and your AI agent), knowledge base content you upload, configuration settings, and analytics data about agent performance. This data is used solely to operate and improve your AI agent.",
            },
            {
                subtitle: "Automatically collected information",
                text: "We automatically collect certain technical information when you access our services, including IP address, browser type, device type, pages visited, and referral source. This is standard web analytics data.",
            },
        ],
    },
    {
        title: "2. How We Use Your Information",
        content: [
            {
                subtitle: null,
                text: "We use the information we collect to: provide, operate, and maintain the BolChat platform; process your account registration and transactions; respond to your inquiries and provide customer support; send you service-related communications; improve our platform and develop new features; comply with legal obligations.",
            },
        ],
    },
    {
        title: "3. Your Knowledge Base & Customer Data",
        content: [
            {
                subtitle: "Your data stays yours",
                text: "Any content you upload to BolChat's knowledge base — including documents, FAQs, product pages, and training data — remains your property at all times. We do not use your knowledge base content to train any public AI model.",
            },
            {
                subtitle: "End-user conversation data",
                text: "Conversations between your website visitors and your BolChat AI agent are stored securely in your account. You control retention periods and can delete conversation history at any time from your dashboard.",
            },
            {
                subtitle: "Data isolation",
                text: "Each BolChat account operates in an isolated environment. Your knowledge base, configuration, and conversation data are never shared with or visible to other BolChat customers.",
            },
        ],
    },
    {
        title: "4. Data Security",
        content: [
            {
                subtitle: null,
                text: "We implement industry-standard security measures to protect your data, including AES-256 encryption for data at rest and TLS 1.3 for data in transit. We conduct regular security reviews and maintain access controls to ensure only authorised personnel can access production systems.",
            },
        ],
    },
    {
        title: "5. Data Sharing & Third Parties",
        content: [
            {
                subtitle: null,
                text: "We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform (such as cloud infrastructure providers), subject to strict confidentiality agreements. We may disclose information when required by law or to protect the rights and safety of BolChat and its users.",
            },
        ],
    },
    {
        title: "6. Cookies",
        content: [
            {
                subtitle: null,
                text: "We use cookies and similar tracking technologies to operate our website and platform. Essential cookies are required for the platform to function. Analytics cookies help us understand how visitors use our site. You can control cookie preferences in your browser settings.",
            },
        ],
    },
    {
        title: "7. Your Rights",
        content: [
            {
                subtitle: null,
                text: "Depending on your location, you may have rights including: access to the personal data we hold about you; correction of inaccurate data; deletion of your data; restriction of processing; data portability; and the right to object to certain uses of your data. To exercise any of these rights, contact us at " + CONTACT_EMAIL + ".",
            },
        ],
    },
    {
        title: "8. Data Retention",
        content: [
            {
                subtitle: null,
                text: "We retain your account data for as long as your account is active. Conversation logs are retained according to the retention settings in your dashboard. You may request deletion of your account and associated data at any time by contacting us.",
            },
        ],
    },
    {
        title: "9. International Transfers",
        content: [
            {
                subtitle: null,
                text: "BolChat operates globally. Your data may be processed in countries other than your own. When we transfer data internationally, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.",
            },
        ],
    },
    {
        title: "10. Changes to This Policy",
        content: [
            {
                subtitle: null,
                text: "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a prominent notice on our website. Your continued use of BolChat after changes are posted constitutes your acceptance of the updated policy.",
            },
        ],
    },
    {
        title: "11. Contact Us",
        content: [
            {
                subtitle: null,
                text: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at ${CONTACT_EMAIL}. We respond to all privacy inquiries within 5 business days.`,
            },
        ],
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="py-20 md:py-32">
                <Container maxWidth="max-w-2xl" className="px-6 md:px-0">

                    {/* Header */}
                    <div className="mb-12 pb-8 border-b border-slate-100">
                        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">Legal</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-slate-400 font-medium">Last updated: {LAST_UPDATED}</p>
                        <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500">
                            BolChat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform at{" "}
                            <Link href="/" className="text-rose-500 hover:underline">bolchat.tech</Link>.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
                                    {section.title}
                                </h2>
                                <div className="space-y-4">
                                    {section.content.map((block, i) => (
                                        <div key={i}>
                                            {block.subtitle && (
                                                <h3 className="text-[0.9rem] font-semibold text-slate-700 mb-1.5">
                                                    {block.subtitle}
                                                </h3>
                                            )}
                                            <p className="text-[0.9rem] leading-relaxed text-slate-500">
                                                {block.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer note */}
                    <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Have questions about your privacy?{" "}
                            <Link href="/demo" className="text-rose-500 font-semibold hover:underline">
                                Contact our team
                            </Link>{" "}
                            or email us directly at{" "}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose-500 font-semibold hover:underline">
                                {CONTACT_EMAIL}
                            </a>.
                        </p>
                    </div>

                </Container>
            </main>
            <Footer />
        </div>
    );
}
