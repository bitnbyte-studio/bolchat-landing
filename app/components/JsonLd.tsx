"use client";

/**
 * JSON-LD Structured Data for BolChat
 *
 * Renders Google-rich-result eligible schema in the <head>.
 * Covers: Organization, WebSite, SoftwareApplication.
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
    logo: `${SITE_URL}/bolchat-logo.png`, // Ensure this path exists or check existing
    description: "Enterprise-grade AI customer support platform resolving inquiries in 50+ languages.",
    sameAs: [
        "https://x.com/HeyBolchat",
        "https://www.instagram.com/heybolchat",
        "https://in.linkedin.com/company/bolchat",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@bolchat.tech",
        availableLanguage: ["English", "Hindi", "Spanish"],
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BolChat",
    url: SITE_URL,
    potentialAction: {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BolChat",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "BolChat is an autonomous AI agent platform that resolves customer inquiries in 50+ languages instantly, helping businesses scale their support and sales without adding headcount.",
    "offers": {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free and Paid tiers available",
    },
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
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
        </>
    );
}

