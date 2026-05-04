"use client";

/**
 * JSON-LD Structured Data for BolChat
 *
 * Renders Google-rich-result eligible schema in the <head>.
 * Covers: Organization, WebSite, SoftwareApplication, FAQPage.
 *
 * Usage: <JsonLd /> inside layout.tsx <head>.
 */

const SITE_URL = "https://bolchat.tech";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BolChat",
    alternateName: "BolChat AI",
    url: SITE_URL,
    logo: `${SITE_URL}/Bolchat-logo.webp`,
    description:
        "BolChat is an autonomous AI agent platform that resolves customer support queries in 50+ languages, captures leads, and escalates intelligently — 24/7, without adding headcount.",
    sameAs: [
        "https://x.com/HeyBolchat",
        "https://www.instagram.com/heybolchat",
        "https://in.linkedin.com/company/bolchat",
        "https://www.crunchbase.com/organization/bolchat",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@bolchat.tech",
        availableLanguage: ["English", "Hindi", "Spanish", "French", "Arabic"],
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BolChat",
    url: SITE_URL,
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BolChat",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
        "BolChat is an autonomous AI agent platform that resolves customer support queries in 50+ languages, captures leads, and escalates intelligently — 24/7, without adding headcount.",
    offers: {
        "@type": "Offer",
        price: "Contact for pricing",
        priceCurrency: "USD",
        description: "Custom plans available based on support volume, languages, and team size. Contact sales for a tailored quote.",
    },
    featureList: [
        "50+ Language Support",
        "Autonomous Query Resolution",
        "Automated Lead Capture",
        "CRM Integrations",
        "Real-Time Analytics Dashboard",
        "Private Knowledge Base (RAG)",
        "Human Fallback Workflows",
        "Enterprise-Grade Security",
    ],
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
};

/** FAQ schema — powers Google rich results (FAQ accordion) on SERP */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is BolChat just another chatbot?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. BolChat deploys autonomous AI agents that resolve customer queries end-to-end using your private knowledge base. It doesn't just collect messages — it resolves them, in 50+ languages, 24/7.",
            },
        },
        {
            "@type": "Question",
            name: "What languages does BolChat support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "BolChat supports 50+ languages natively, including Hindi, Spanish, French, Arabic, Mandarin, Portuguese, and more. Language is auto-detected from visitor input — no plugin required.",
            },
        },
        {
            "@type": "Question",
            name: "How long does BolChat setup take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most teams are live in under 10 minutes. Connect your knowledge base, configure your AI agent persona, and embed a single script tag — no engineering resources required.",
            },
        },
        {
            "@type": "Question",
            name: "Can I hand off conversations to a human agent?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Set custom escalation triggers and BolChat passes full conversation context to your human team via email, Slack, or your CRM automatically.",
            },
        },
        {
            "@type": "Question",
            name: "Is my data safe with BolChat?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All data is encrypted with AES-256 in transit and at rest. Your private knowledge base is never shared with or used to train any public AI model.",
            },
        },
        {
            "@type": "Question",
            name: "Does BolChat capture leads automatically?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BolChat identifies buying intent and captures visitor emails and contact details mid-conversation, then syncs them directly to your CRM — without interrupting the chat.",
            },
        },
    ],
};

export function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
