/**
 * JSON-LD Structured Data for BolChat
 *
 * Renders Google-rich-result eligible schema in the <head>.
 * Covers: Organization, WebSite (with Sitelinks SearchBox), SoftwareApplication.
 *
 * Usage: <JsonLd /> inside layout.tsx <head> (or any Server Component).
 */

const SITE_URL = "https://bolchat.ai";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BolChat",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    sameAs: [
        "https://twitter.com/bolchat_ai",       // ← update
        "https://linkedin.com/company/bolchat",  // ← update
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BolChat",
    url: SITE_URL,
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BolChat",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free early access — join the waitlist",
    },
    description:
        "Multilingual AI chatbot platform. Deploy context-aware bots in minutes. Supports 50+ languages.",
    url: SITE_URL,
    image: `${SITE_URL}/android-chrome-512x512.png`,
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
