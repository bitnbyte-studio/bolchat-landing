"use client";

import { useEffect, useRef, useState } from "react";
import { BolchatLogo } from "./BolchatLogo";
import { Container } from "./Container";

const NAV_LINKS = [
    { label: "Product", href: "#product" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Success", href: "#success" },
    { label: "Pricing", href: "#pricing" },
    { label: "Developers", href: "#developers" },
];

export function Navbar() {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Show/hide based on scroll direction
            if (currentY < 80) {
                // Always show near the top
                setVisible(true);
            } else if (currentY < lastScrollY.current) {
                // Scrolling UP — reveal
                setVisible(true);
            } else if (currentY > lastScrollY.current + 4) {
                // Scrolling DOWN — hide (small dead-zone to avoid jitter)
                setVisible(false);
            }

            setScrolled(currentY > 20);
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out",
                visible ? "translate-y-0" : "-translate-y-full",
                scrolled
                    ? "border-b border-rose-100/60 bg-white/80 shadow-sm shadow-rose-100/20 backdrop-blur-xl"
                    : "bg-white/60 backdrop-blur-md",
            ].join(" ")}
        >
            <Container as="nav" className="flex h-20 items-center justify-between">
                {/* ── Logo ── */}
                <div className="lg:hidden">
                    <BolchatLogo size="sm" />
                </div>
                <div className="hidden lg:block">
                    <BolchatLogo size="md" />
                </div>

                {/* ── Centre links ── */}
                <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative py-1 transition-colors hover:text-rose-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:rounded-full after:bg-rose-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* ── Mobile Menu Toggle ── */}
                <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
                    <a
                        href="/demo"
                        className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-rose-600 hover:shadow-rose-200"
                    >
                        Request Demo
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-slate-600 focus:outline-none"
                    >
                        {mobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* ── CTA buttons (Desktop) ── */}
                <div className="hidden items-center gap-3 sm:gap-4 lg:flex">
                    <a
                        href="#waitlist"
                        className="text-sm font-semibold text-slate-600 transition-colors hover:text-rose-500"
                    >
                        Early Access
                    </a>
                    <a
                        href="/demo"
                        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-rose-600 hover:shadow-rose-200"
                    >
                        Request Demo
                    </a>
                </div>
            </Container>

            {/* ── Mobile Menu Dropdown ── */}
            {mobileMenuOpen && (
                <div className="border-t border-rose-100/60 bg-white shadow-lg lg:hidden">
                    <div className="flex flex-col px-6 py-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-3 text-base font-medium text-slate-600 hover:text-rose-500"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-4 border-t border-slate-100 pt-4">
                            <a
                                href="/demo"
                                className="block py-3 text-base font-medium text-slate-600 hover:text-rose-500"
                            >
                                Request Demo
                            </a>
                            <a
                                href="#waitlist"
                                className="block py-3 text-base font-medium text-slate-600 hover:text-rose-500"
                            >
                                Early Access
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
