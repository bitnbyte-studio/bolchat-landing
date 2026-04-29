"use client";

import { BolchatLogo } from "./BolchatLogo";
import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contact" className="border-t border-rose-100/50 bg-white/30 py-16">
            <Container>
                <div className="mb-12 grid gap-12 md:grid-cols-4 lg:gap-8">
                    {/* Brand column */}
                    <div className="md:col-span-2">
                        <BolchatLogo size="sm" />
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-500 font-medium">
                            Automate customer support across 50+ languages with context-aware AI. Deploy in minutes, scaling seamlessly.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-slate-400">
                            {/* LinkedIn */}
                            <a href="https://in.linkedin.com/company/bolchat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:-translate-y-1 hover:text-rose-500 hover:shadow-md">
                                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/heybolchat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:-translate-y-1 hover:text-rose-500 hover:shadow-md">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href="https://x.com/HeyBolchat" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:-translate-y-1 hover:text-rose-500 hover:shadow-md">
                                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h5 className="mb-6 font-bold text-slate-800">Platform</h5>
                        <ul className="space-y-4 text-sm font-medium text-slate-500">
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/features">Features Overview</Link>
                            </li>
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/pricing">Pricing Plans</Link>
                            </li>
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/demo">Book a Demo</Link>
                            </li>
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-6 font-bold text-slate-800">Resources</h5>
                        <ul className="space-y-4 text-sm font-medium text-slate-500">
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/docs">Documentation</Link>
                            </li>
                            {/* Developer API — coming soon
                            <li className="transition-colors hover:text-rose-500">
                                <a href="https://docs.bolchat.tech" target="_blank" rel="noopener noreferrer">Developer API</a>
                            </li>
                            */}
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li className="transition-colors hover:text-rose-500">
                                <Link href="/terms">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200/60 pt-8 text-sm font-medium text-slate-400 md:flex-row md:pt-12">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p>© 2026 BolChat. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="/demo" className="hover:text-rose-500">Support</Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="https://peerlist.io/company/bolchat_tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="w-5 h-5 rounded-full bg-[#00AA45] flex items-center justify-center text-[11px] text-white font-bold leading-none">P</span>
                            <span className="font-semibold text-xs">Peerlist</span>
                        </a>
                        <a href="https://www.producthunt.com/products/bolchat?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-bolchat" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                            <img alt="BolChat - AI chatbot platform to turn website visitors into customers | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1134584&theme=light&t=1777446751621" className="h-[36px] w-auto" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

