"use client";

import { Container } from "./Container";

/* ─── Brand logos as inline SVG ─── */
function ShopifyLogo() {
    return (
        <svg viewBox="0 0 109 124" fill="none" className="h-10 w-10" aria-label="Shopify">
            <path
                d="M95.6 23.8c-.1-.7-.7-1.1-1.3-1.1s-11.6-.8-11.6-.8-7.7-7.7-8.6-8.5c-.8-.8-2.5-.6-3.1-.4l-4.3 1.3c-.5-1.5-1.2-3.3-2.2-5.1C61.6 5 58 2.8 53.7 2.8c-.3 0-.6 0-.9.1-.1-.2-.3-.3-.4-.5C50.6.7 48.7.1 46.5.2c-4.2.2-8.4 3.2-11.8 8.6-2.4 3.8-4.2 8.7-4.7 12.4l-8 2.5c-2.4.7-2.5.8-2.8 3.1C18.9 28.7 8 113.5 8 113.5l74.8 14L109 121s-13.3-96.5-13.4-97.2zM69 16.5l-6.5 2c0-.4.1-.8.1-1.3 0-3.8-.5-6.9-1.4-9.3C64.5 8.5 67.6 12.1 69 16.5zm-16.5-7.6c1 2.4 1.6 5.9 1.6 10.5 0 .3 0 .6-.1.9l-12.2 3.8c1.2-5.9 4.4-11.8 10.7-15.2zM46.8 4.2c1 0 1.8.2 2.5.7-6.8 3.2-10.9 11.2-12.4 18.9l-9.4 2.9c1.6-8.5 7.8-22.5 19.3-22.5z"
                fill="#95BF47"
            />
            <path
                d="M94.3 22.7c-.6 0-11.6-.8-11.6-.8s-7.7-7.7-8.6-8.5c-.3-.3-.7-.5-1.1-.5L82.8 127.5l26.2-6.5S95.6 23.5 95.4 22.9c-.2-.1-.7-.2-1.1-.2z"
                fill="#5E8E3E"
            />
            <path
                d="M53.7 45.2l-3.2 12.2s-3.6-1.7-7.9-1.4c-6.3.4-6.3 4.4-6.3 5.4.3 5.1 13.8 6.2 14.5 18.2.6 9.4-5 15.8-13 16.3-9.7.6-14.6-5.1-14.6-5.1l2-8.5s5.1 3.8 9.2 3.6c2.7-.2 3.6-2.4 3.5-3.9-.4-6.7-11.4-6.3-12.1-17.2-.6-9.2 5.5-18.5 18.8-19.4 5.1-.3 7.7.9 8.6 1.3z"
                fill="#fff"
            />
        </svg>
    );
}

function SlackLogo() {
    return (
        <svg viewBox="0 0 127 127" fill="none" className="h-9 w-9" aria-label="Slack">
            <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80s5.9-13.2 13.2-13.2H27.2V80z" fill="#E01E5A" />
            <path d="M33.7 80c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A" />
            <path d="M46.9 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.7 6.7 39.6.8 46.9.8s13.2 5.9 13.2 13.2v13.2H46.9z" fill="#36C5F0" />
            <path d="M46.9 33.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2h33z" fill="#36C5F0" />
            <path d="M99.8 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V46.9z" fill="#2EB67D" />
            <path d="M93.3 46.9c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.9C66.9 6.6 72.8.7 80.1.7c7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D" />
            <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80.1z" fill="#ECB22E" />
            <path d="M80.1 93.3c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2h-33z" fill="#ECB22E" />
        </svg>
    );
}

function WordPressLogo() {
    return (
        <svg viewBox="0 0 122.5 122.5" className="h-10 w-10" aria-label="WordPress">
            <circle cx="61.25" cy="61.25" r="61.25" fill="#21759B" />
            <path d="M8.7 61.3c0 21.4 12.4 39.9 30.5 48.8L13.5 39.5C10.5 45.9 8.7 53.4 8.7 61.3zM96.8 58.7c0-6.7-2.4-11.3-4.4-14.9-2.7-4.4-5.3-8.1-5.3-12.5 0-4.9 3.7-9.5 9-9.5.2 0 .5 0 .7.1C87.5 13.4 74.8 8.7 61.3 8.7c-18 0-33.8 9.2-43 23.2 1.2.1 2.3.1 3.3.1 5.4 0 13.7-.7 13.7-.7 2.8-.2 3.1 3.9.3 4.2 0 0-2.8.3-5.9.5l18.8 55.8 11.3-33.8-8-22.1c-2.8-.2-5.4-.5-5.4-.5-2.8-.2-2.5-4.4.3-4.2 0 0 8.5.7 13.5.7 5.4 0 13.7-.7 13.7-.7 2.8-.2 3.1 3.9.3 4.2 0 0-2.8.3-5.9.5l18.6 55.4 5.2-17.2c2.2-7.1 3.9-12.2 3.9-16.6zM62.1 65.8l-15.4 44.8c4.6 1.4 9.5 2.1 14.5 2.1 6 0 11.7-1 17.1-2.9-.1-.2-.3-.4-.4-.6L62.1 65.8zM107 40.1c.2 1.7.3 3.4.3 5.3 0 5.2-.97 11.1-3.9 18.4l-15.7 45.4c15.3-8.9 25.6-25.5 25.6-44.5 0-8.9-2.3-17.3-6.3-24.6z" fill="#fff" />
        </svg>
    );
}

function HubSpotLogo() {
    return (
        <svg viewBox="0 0 250 65" className="h-8 w-auto" aria-label="HubSpot">
            <path d="M40.5 20.7V9.5C43 8.2 44.7 5.6 44.7 2.6 44.7-1.2 41.5-4.4 37.7-4.4s-7 3.2-7 7c0 3 1.7 5.6 4.2 6.9v11.2c-3.7.6-7 2.4-9.6 5L7.6 8.6C7.8 7.9 8 7.3 8 6.6 8 2.9 5.1 0 1.4 0S-5.2 2.9-5.2 6.6s2.9 6.6 6.6 6.6c1.1 0 2.2-.3 3.1-.8l17.4 16.8c-1.9 2.9-3 6.4-3 10.1 0 4.2 1.4 8.1 3.7 11.2L14 59.1c-.5-.1-1-.2-1.5-.2-3.7 0-6.6 2.9-6.6 6.6s2.9 6.6 6.6 6.6 6.6-2.9 6.6-6.6c0-1-.3-2-.7-2.8l8.5-8.5c3.1 2.1 6.8 3.4 10.8 3.4 10.5 0 19.1-8.6 19.1-19.1.1-9.2-6.5-16.9-15.3-18.8zm-2.8 29.6c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5S48.2 33.9 48.2 39.8 43.5 50.3 37.7 50.3z" fill="#FF7A59" transform="translate(5.2 4.4)" />
            <text x="70" y="48" fontFamily="Lexend Deca, sans-serif" fontWeight="700" fontSize="38" fill="#33475B">Hub</text>
            <text x="135" y="48" fontFamily="Lexend Deca, sans-serif" fontWeight="300" fontSize="38" fill="#33475B">Spot</text>
        </svg>
    );
}

function IntercomLogo() {
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" aria-label="Intercom">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.09c0 .26-.215.476-.476.476a.473.473 0 01-.31-.116S15.12 15 12 15c-3.12 0-4.714 1.45-4.724 1.458a.476.476 0 01-.652-.692C6.73 15.648 8.5 14 12 14s5.27 1.648 5.376 1.766a.47.47 0 01.124.323zM8 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#1F8DED" />
        </svg>
    );
}

function ZendeskLogo() {
    return (
        <svg viewBox="0 0 130 40" className="h-8 w-auto" aria-label="Zendesk">
            <text x="0" y="34" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="36" fill="#03363D" letterSpacing="-1">zendesk</text>
        </svg>
    );
}

function SalesforceLogo() {
    return (
        <svg viewBox="0 0 101 71" className="h-10 w-auto" aria-label="Salesforce">
            <path d="M42.2 6.2a19.1 19.1 0 0113.6-5.6c6.4 0 12.1 3.2 15.6 8.1a22.1 22.1 0 018.1-1.6c12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1-.9 0-1.8-.1-2.7-.2A15.9 15.9 0 0163.5 58a17.2 17.2 0 01-14.4-7.7 20.2 20.2 0 01-9.6 2.4C28.1 52.7 20 44.6 20 34.7c0-5.1 2.1-9.7 5.5-13A19.5 19.5 0 0122.4 16c0-10.9 8.8-19.7 19.7-19.7 0 10 0 10 .1 9.9z" fill="#00A1E0" />
            <text x="10" y="68" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="13" fill="#00A1E0">salesforce</text>
        </svg>
    );
}

function ZapierLogo() {
    return (
        <svg viewBox="0 0 64 64" className="h-9 w-9" aria-label="Zapier">
            <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0z" fill="#FF4A00" />
            <path d="M47.5 29.5H37.6l7-7-3.1-3.1-7 7V16.5h-4.4v10.1l-7.1-7.1-3.1 3.1 7.1 7.1H16.5v4.4h10.5l-7.1 7.1 3.1 3.1 7.1-7.1V47.5h4.4V37.2l7 7 3.1-3.1-7-7H47.5v-4.6z" fill="#fff" />
        </svg>
    );
}

const BRANDS = [
    { id: "shopify", Logo: ShopifyLogo, name: "Shopify" },
    { id: "slack", Logo: SlackLogo, name: "Slack" },
    { id: "wordpress", Logo: WordPressLogo, name: "WordPress" },
    { id: "hubspot", Logo: HubSpotLogo, name: "HubSpot" },
    { id: "intercom", Logo: IntercomLogo, name: "Intercom" },
    { id: "zendesk", Logo: ZendeskLogo, name: "Zendesk" },
    { id: "salesforce", Logo: SalesforceLogo, name: "Salesforce" },
    { id: "zapier", Logo: ZapierLogo, name: "Zapier" },
];

export function EcosystemSection() {
    return (
        <section id="integrations" className="border-y border-slate-100 bg-white/40 py-12 md:py-16">
            <Container className="text-center">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-4">
                    Integrations
                </p>
                <h2 className="mb-3 text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Plugs into the tools your team already uses.
                </h2>
                <p className="text-slate-500 font-medium text-sm md:text-base mb-10 max-w-xl mx-auto">
                    Native integrations with your CRM, helpdesk, and e-commerce stack. Connect in minutes — no code required.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                    {BRANDS.map(({ id, Logo, name }) => (
                        <div
                            key={id}
                            className="flex items-center justify-center transition-all duration-300 cursor-default hover:scale-105"
                            title={name}
                        >
                            <Logo />
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-sm font-semibold text-slate-500">
                    + 100+ additional integrations via{" "}
                    <span className="text-rose-500">Zapier</span> and native webhooks.
                </p>
            </Container>
        </section>
    );
}
