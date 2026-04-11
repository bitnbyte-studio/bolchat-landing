"use client";

interface BreadcrumbProps {
    items: {
        name: string;
        item: string;
    }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
    const SITE_URL = "https://bolchat.tech";
    
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
