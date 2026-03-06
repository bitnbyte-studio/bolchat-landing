"use client";

import { useState } from "react";
import { BolchatLogo } from "./components/BolchatLogo";

const features = [
  {
    title: "Instant Setup",
    description:
      "Deploy your chatbot in minutes with a straightforward onboarding flow.",
    icon: "clock",
  },
  {
    title: "AI Powered",
    description:
      "Advanced models understand context and respond with business-aware answers.",
    icon: "brain",
  },
  {
    title: "50+ Languages",
    description:
      "Serve customers globally with multilingual support across major markets.",
    icon: "language",
  },
];

const steps = [
  {
    number: "1",
    title: "Upload Company Data",
    description:
      "Add FAQs, docs, and policy content so BolChat learns your business context.",
  },
  {
    number: "2",
    title: "Train Your Chatbot",
    description:
      "Refine tone, behavior, and guardrails for your customer support workflows.",
  },
  {
    number: "3",
    title: "Embed Script",
    description:
      "Deploy with a lightweight snippet and start resolving customer queries fast.",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "brain") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1a3 3 0 0 0 3 3" />
        <path d="M15 4a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-3 3" />
        <path d="M9 8h6M9 12h6M12 4v16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16M4 12h16M4 18h16" />
      <path d="M7 4a13 13 0 0 0 0 16M17 4a13 13 0 0 1 0 16" />
    </svg>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail("");
    }, 500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-pink-200/40 blur-[100px]" />
        <div className="absolute -right-40 top-1/2 h-[800px] w-[800px] rounded-full bg-rose-200/30 blur-[100px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <BolchatLogo size="md" />

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#product" className="transition-colors hover:text-rose-500">
              Product
            </a>
            <a href="#pricing" className="transition-colors hover:text-rose-500">
              Pricing
            </a>
            <a href="#contact" className="transition-colors hover:text-rose-500">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="hidden px-4 text-sm font-semibold text-slate-600 sm:block">
              Log in
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-rose-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <section id="product" className="relative px-6 pb-28 pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>


            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Multilingual AI Chatbots for
              <span className="block bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Automate customer support across 50+ languages with context-aware
              AI. Deploy in minutes, not months.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-rose-200/50 transition-all hover:scale-105 active:scale-95 sm:w-auto"
              >
                Get Early Access
              </a>
              <a
                href="#demo"
                className="w-full rounded-2xl border border-white/50 bg-white/80 px-8 py-4 text-center text-lg font-bold text-slate-900 transition-all hover:bg-white sm:w-auto"
              >
                Schedule Demo
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-rose-100 text-xs font-bold text-rose-600">
                  F
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-orange-100 text-xs font-bold text-orange-600">
                  A
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-pink-100 text-xs font-bold text-pink-600">
                  J
                </div>
              </div>
              <p>
                Trusted by founders from <span className="font-bold">500+ startups</span>
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-[380px] w-[380px] items-center justify-center lg:h-[500px] lg:w-[500px]">
              <div className="absolute h-full w-full rounded-full bg-rose-400/10 blur-[100px]" />
              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-[4rem] border border-white/60 bg-white shadow-2xl lg:h-80 lg:w-80">
                <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-400 via-pink-500 to-orange-400 lg:h-60 lg:w-60">
                  <svg
                    viewBox="0 0 120 120"
                    className="h-28 w-28 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)] lg:h-36 lg:w-36"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M60 18v12M49 20h22"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="26"
                      y="30"
                      width="68"
                      height="52"
                      rx="16"
                      stroke="currentColor"
                      strokeWidth="5"
                    />
                    <circle cx="48" cy="56" r="7" fill="currentColor" />
                    <circle cx="72" cy="56" r="7" fill="currentColor" />
                    <path
                      d="M44 72c4 4 9 6 16 6s12-2 16-6"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="36"
                      y="86"
                      width="48"
                      height="10"
                      rx="5"
                      fill="currentColor"
                    />
                    <path
                      d="M22 44h-8M106 44h-8M22 60h-8M106 60h-8"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="absolute -bottom-10 -right-8 flex items-center gap-3 rounded-3xl border border-rose-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-slate-400">Live Status</p>
                    <p className="text-sm font-bold text-slate-800">Multilingual Online</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 -top-10 flex items-center gap-3 rounded-3xl border border-rose-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-rose-100 text-rose-600">
                  ⚡
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">AI Model</p>
                  <p className="text-sm font-bold text-slate-800">GPT-4 Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Built for high-growth teams</h2>
            <p className="text-lg text-slate-600">
              Everything you need to handle global customer inquiries automatically.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,157,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                  <Icon type={item.icon} />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="border-y border-rose-100/60 bg-white/40 py-24 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">Simple to set up, impossible to outgrow</h2>

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-6">
                  <div className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-full text-xl font-bold text-white ${i === 0 ? "bg-rose-500" : i === 1 ? "bg-rose-400" : "bg-rose-300"}`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">{step.title}</h4>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="rounded-[3rem] border border-white/70 bg-white p-4 shadow-2xl">
              <div className="flex h-[500px] flex-col overflow-hidden rounded-[2.2rem] bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-800 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500" />
                    <div>
                      <p className="text-sm font-bold leading-none text-white">BolChat AI</p>
                      <p className="text-[10px] text-slate-400">Online • Support Assistant</p>
                    </div>
                  </div>
                  <span className="text-slate-400">•••</span>
                </div>

                <div className="flex-1 space-y-6 overflow-hidden p-6">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                      Hello! I&apos;m BolChat. How can I help you today? I support 50+ languages.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-rose-500 p-4 text-sm leading-relaxed text-white">
                      Can you explain your refund policy in Spanish?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-xs italic leading-relaxed text-slate-200">
                      BolChat is typing...
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                      Claro. Nuestra politica de reembolso permite devoluciones dentro de los primeros 30 dias si no estas satisfecho...
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 bg-slate-900 p-4">
                  <div className="flex gap-2 rounded-xl bg-slate-800 p-3">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                    />
                    <button className="px-2 text-rose-400">➤</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-6 py-24">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-rose-500 to-pink-600 p-12 text-white md:p-20">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

            <h2 className="relative z-10 mb-6 text-4xl font-bold md:text-5xl">Join the Waitlist</h2>
            <p className="relative z-10 mb-10 text-lg text-rose-100">
              Get notified when BolChat launches. Early access for the first 100 business signups.
            </p>

            {submitted ? (
              <div className="relative z-10 mx-auto max-w-md rounded-2xl border border-white/40 bg-white/20 p-4 text-left backdrop-blur-sm">
                <p className="font-semibold text-white">You&apos;re in.</p>
                <p className="text-sm text-rose-100">We will contact you when beta invites open.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="h-14 flex-1 rounded-2xl border border-white/30 bg-white/20 px-6 text-white placeholder:text-rose-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 rounded-2xl bg-white px-8 font-bold text-rose-600 transition-all hover:bg-rose-50 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}

            <p className="relative z-10 mt-6 text-sm text-rose-200">No spam. Just updates on your terms.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-rose-100/60 bg-white/30 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <BolchatLogo size="sm" />

          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#product" className="hover:text-rose-500">
              Product
            </a>
            <a href="#" className="hover:text-rose-500">
              Privacy
            </a>
            <a href="#" className="hover:text-rose-500">
              Terms
            </a>
            <a href="#" className="hover:text-rose-500">
              X
            </a>
          </div>

          <p className="text-sm text-slate-400">© 2026 BolChat AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
