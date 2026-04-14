"use client";

import { useEffect, useRef, useState } from "react";
import { BolchatLogo } from "./BolchatLogo";
import { Container } from "./Container";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY < 80) {
                setVisible(true);
            } else if (currentY < lastScrollY.current) {
                setVisible(true);
            } else if (currentY > lastScrollY.current + 4) {
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
                    : "bg-transparent",
            ].join(" ")}
        >
            <Container as="nav" className="flex h-20 items-center justify-between">
                {/* ── Logo ── */}
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <div className="lg:hidden">
                        <BolchatLogo size="sm" />
                    </div>
                    <div className="hidden lg:block">
                        <BolchatLogo size="md" />
                    </div>
                </Link>

                {/* ── Centre links ── */}
                <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="relative py-1 transition-colors hover:text-rose-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:rounded-full after:bg-rose-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* ── CTA buttons (Desktop) ── */}
                <div className="hidden items-center gap-6 lg:flex">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-slate-900/20 active:scale-[0.98]"
                    >
                        Book a Demo
                        <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* ── Mobile Menu Toggle ── */}
                <div className="flex items-center gap-4 lg:hidden">
                    <Link
                        href="/contact"
                        className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-md active:scale-95"
                    >
                        Demo
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-slate-700 focus:outline-none"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* ── Mobile Menu Dropdown ── */}
            {mobileMenuOpen && (
                <div className="border-t border-rose-100/60 bg-white shadow-2xl lg:hidden">
                    <div className="flex flex-col px-6 py-6 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-3 text-lg font-bold text-slate-700 hover:text-rose-500 border-b border-slate-50"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-4">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex h-14 items-center justify-center rounded-2xl bg-slate-900 font-bold text-white"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

