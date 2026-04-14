"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  BookOpen, Zap, Brain, BarChart3, Code2,
  CheckCircle2, XCircle, Lightbulb, ArrowRight,
  FileText, Globe, MessageSquare, Settings2,
  ChevronRight, ChevronDown, Sparkles, Shield, Target,
  Upload, RefreshCw, Languages, Search,
  Pencil, Gauge, Users, TrendingUp, Menu, X,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   TOC DATA  —  sections + nested subsections
   ═══════════════════════════════════════════════════════ */
const TOC = [
  {
    id: "getting-started", label: "Getting Started", icon: Zap,
    subs: [
      { id: "gs-flow", label: "Platform Flow" },
    ],
  },
  {
    id: "knowledge-base", label: "Knowledge Base", icon: BookOpen,
    subs: [
      { id: "kb-preparing", label: "Preparing Documents" },
      { id: "kb-what-to-upload", label: "What to Upload" },
      { id: "kb-what-not", label: "What NOT to Upload" },
      { id: "kb-quality", label: "Quality & Chunking" },
      { id: "kb-fresh", label: "Keeping Data Fresh" },
      { id: "kb-multilingual", label: "Multilingual" },
      { id: "kb-measuring", label: "Measuring Quality" },
    ],
  },
  {
    id: "agent-manager", label: "Agent Manager", icon: Brain,
    subs: [
      { id: "am-prompts", label: "System Prompts" },
      { id: "am-checklist", label: "Prompt Checklist" },
      { id: "am-templates", label: "Prompt Templates" },
      { id: "am-tuning", label: "Temperature & Confidence" },
      { id: "am-conversation", label: "Conversation Design" },
      { id: "am-multi", label: "Multi-Agent Strategy" },
    ],
  },
  {
    id: "widget-customization", label: "Widget Setup", icon: Settings2,
    subs: [
      { id: "ws-effects", label: "Premium Effects" },
    ],
  },
  {
    id: "integration-guides", label: "Integration Guides", icon: Code2,
    subs: [
      { id: "ig-html", label: "Plain HTML" },
      { id: "ig-nextjs", label: "Next.js" },
      { id: "ig-react", label: "React" },
      { id: "ig-angular", label: "Angular" },
      { id: "ig-vue", label: "Vue.js" },
      { id: "ig-cms", label: "WordPress & Shopify" },
    ],
  },
  {
    id: "analytics", label: "Analytics", icon: BarChart3,
    subs: [
      { id: "an-cycle", label: "Improvement Cycle" },
    ],
  },
  { id: "dos-and-donts", label: "Do's & Don'ts", icon: Target, subs: [] },
  { id: "faq", label: "FAQ", icon: MessageSquare, subs: [] },
];

/* ═══════════════════════════════════════════════════════
   SMOOTH SCROLL HELPER
   ═══════════════════════════════════════════════════════ */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* ═══════════════════════════════════════════════════════
   REUSABLE UI COMPONENTS
   ═══════════════════════════════════════════════════════ */
function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-12 sm:py-16 border-b border-slate-100/80 last:border-0">
      {children}
    </section>
  );
}

function SectionTitle({ icon: Icon, label, title, description }: { icon: any; label: string; title: string; description: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-[10px] sm:text-xs font-bold text-rose-500 uppercase tracking-widest mb-4">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
      <p className="mt-3 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">{description}</p>
    </div>
  );
}

function SubHeading({ id, icon: Icon, title }: { id: string; icon: any; title: string }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-lg sm:text-xl font-bold text-slate-800 mt-10 sm:mt-12 mb-4 sm:mb-5 flex items-center gap-2.5">
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
      </span>
      {title}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-4">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-600 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <ChevronRight className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 my-5">
      <Lightbulb className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
      <p className="text-sm text-emerald-700 font-medium leading-relaxed">{children}</p>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100 my-5">
      <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-700 font-medium leading-relaxed">{children}</p>
    </div>
  );
}

function StepCard({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0">{num}</div>
      <div className="min-w-0">
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function DoCard({ items }: { items: string[] }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
      <h4 className="font-extrabold text-emerald-600 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4" /> Do&apos;s
      </h4>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DontCard({ items }: { items: string[] }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-red-50/50 border border-red-100">
      <h4 className="font-extrabold text-red-500 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
        <XCircle className="w-4 h-4" /> Don&apos;ts
      </h4>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-red-600">
            <XCircle className="w-3.5 h-3.5 text-red-300 shrink-0 mt-0.5" /><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 my-5">
      <div className="bg-slate-800 px-4 py-2 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{lang}</div>
      <pre className="bg-slate-900 p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed">
        <code className="text-emerald-300 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function PromptExample({ label, color, text }: { label: string; color: "red" | "emerald"; text: string }) {
  const bg = color === "red" ? "bg-red-50/50 border-red-100" : "bg-emerald-50/50 border-emerald-100";
  const labelColor = color === "red" ? "text-red-400" : "text-emerald-500";
  const textColor = color === "red" ? "text-red-600" : "text-emerald-700";
  return (
    <div className={`p-4 sm:p-5 rounded-2xl border ${bg}`}>
      <p className={`text-[10px] sm:text-xs font-bold ${labelColor} uppercase tracking-wider mb-2`}>{label}</p>
      <p className={`text-xs sm:text-sm ${textColor} font-mono leading-relaxed whitespace-pre-line`}>{text}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SIDEBAR TOC (desktop + mobile)
   ═══════════════════════════════════════════════════════ */
function SidebarTOC({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  /* Auto-expand parent when a sub-section is active */
  useEffect(() => {
    for (const section of TOC) {
      if (section.id === activeId || section.subs.some(s => s.id === activeId)) {
        setExpanded(p => ({ ...p, [section.id]: true }));
      }
    }
  }, [activeId]);

  return (
    <ul className="space-y-0.5">
      {TOC.map((item) => {
        const isActive = item.id === activeId;
        const hasActiveSub = item.subs.some(s => s.id === activeId);
        const isOpen = expanded[item.id];

        return (
          <li key={item.id}>
            <div className="flex items-center">
              <button
                onClick={() => { onNavigate(item.id); }}
                className={`flex-1 flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition-all text-left cursor-pointer ${
                  isActive || hasActiveSub
                    ? "text-rose-500 bg-rose-50/60"
                    : "text-slate-500 hover:text-rose-500 hover:bg-rose-50/30"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
              {item.subs.length > 0 && (
                <button onClick={() => toggle(item.id)} className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-0" : "-rotate-90"}`} />
                </button>
              )}
            </div>
            {isOpen && item.subs.length > 0 && (
              <ul className="ml-6 border-l border-slate-100 pl-3 mt-0.5 mb-1 space-y-0.5">
                {item.subs.map(sub => (
                  <li key={sub.id}>
                    <button
                      onClick={() => onNavigate(sub.id)}
                      className={`block w-full text-left px-2 py-1.5 rounded-md text-[12px] font-medium transition-all cursor-pointer ${
                        activeId === sub.id
                          ? "text-rose-500 bg-rose-50/40"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {sub.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export function DocsContent() {
  const [activeId, setActiveId] = useState("getting-started");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Track active section with IntersectionObserver */
  useEffect(() => {
    const allIds = TOC.flatMap(s => [s.id, ...s.subs.map(sub => sub.id)]);
    const observers: IntersectionObserver[] = [];

    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNav = useCallback((id: string) => {
    scrollToId(id);
    setMobileOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#ffffff_40%,#fff5f8_60%,#ffeef3_100%)] text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-pink-200/30 blur-[100px]" />
        <div className="absolute -right-40 top-1/2 h-[800px] w-[800px] rounded-full bg-rose-200/20 blur-[100px]" />
      </div>

      {/* Hero */}
      <div className="relative border-b border-rose-100/50 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-[10px] sm:text-xs font-bold text-rose-500 uppercase tracking-widest mb-5">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            BolChat Platform <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Guide</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to build, optimize, and deploy your AI support agent — from first upload to production.
          </p>

          {/* Quick jump pills — hidden on small mobile */}
          <div className="mt-6 hidden sm:flex flex-wrap justify-center gap-2">
            {TOC.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100 text-xs font-bold text-slate-500 hover:text-rose-500 hover:border-rose-200 shadow-sm transition-all hover:shadow-md cursor-pointer">
                <item.icon className="w-3 h-3" /> {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile TOC Toggle ── */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full px-5 py-3 text-sm font-bold text-slate-700"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-500" /> Table of Contents
          </span>
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
        {mobileOpen && (
          <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
            <SidebarTOC activeId={activeId} onNavigate={handleNav} />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 relative">
        <div className="lg:grid lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] lg:gap-10">

          {/* ── Desktop Sidebar ── */}
          <aside className="hidden lg:block">
            <nav className="sticky top-4 max-h-[calc(100vh-32px)] overflow-y-auto py-6 pr-2 custom-scrollbar">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">On this page</h3>
              <SidebarTOC activeId={activeId} onNavigate={handleNav} />
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Need help?</p>
                <p className="text-xs leading-relaxed text-slate-300 mb-3">Our team is ready to help you get the most out of BolChat.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-400 hover:text-rose-300 transition-colors">
                  Contact Support <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </nav>
          </aside>

          {/* ═══════════════════════ MAIN CONTENT ═══════════════════════ */}
          <main className="min-w-0 py-4 sm:py-8">

            {/* ════════ GETTING STARTED ════════ */}
            <Section id="getting-started">
              <SectionTitle icon={Zap} label="Quick Start" title="Getting Started" description="Go from zero to a live AI agent on your website in under 10 minutes. No coding experience required." />

              <Paragraph>BolChat works in four simple steps. First, you create a knowledge base by uploading your company documents. Then you build an agent that uses that knowledge to answer questions. Next you customize how the widget looks. Finally, paste a single script tag and go live.</Paragraph>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <StepCard num={1} title="Create a Knowledge Base" desc="Upload PDFs, DOCX files, and FAQs. BolChat converts them into searchable AI knowledge vectors." />
                <StepCard num={2} title="Build Your Agent" desc="Name it, write a system prompt that defines personality and rules, and link your Knowledge Base." />
                <StepCard num={3} title="Customize the Widget" desc="Colors, shapes, icons, teaser messages, and quick replies — match your brand perfectly." />
                <StepCard num={4} title="Deploy to Your Website" desc="Copy the <script> tag from the Deploy tab, paste into your HTML — your agent is live." />
              </div>

              <SubHeading id="gs-flow" icon={ArrowRight} title="How It Works — The Platform Flow" />
              <Paragraph>Your documents are chunked into smaller pieces and converted into mathematical vectors. When a visitor asks a question, the AI searches these vectors for the most relevant context, then generates a precise answer using only the matched content. This is called RAG (Retrieval Augmented Generation) — it prevents the AI from making things up.</Paragraph>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm mb-4">
                <p className="text-sm sm:text-base font-bold text-slate-700 text-center tracking-wide">
                  📄 Documents → 🧮 Vectors → 🧠 Agent → 💬 Widget → 👤 Visitors
                </p>
              </div>

              <Tip>You can always refine your agent after deploying. Use the Analytics tab to see which questions stumped the bot, then update your knowledge base to fill gaps.</Tip>
              <Warning>Make sure documents are up-to-date before deploying. The AI will confidently cite outdated information if stale docs remain in your knowledge base.</Warning>
            </Section>

            {/* ════════ KNOWLEDGE BASE ════════ */}
            <Section id="knowledge-base">
              <SectionTitle icon={BookOpen} label="Knowledge Base" title="Building a Powerful Knowledge Base" description="Your knowledge base is the foundation. Better data = better answers, fewer hallucinations, happier customers." />

              <SubHeading id="kb-preparing" icon={FileText} title="Preparing Your Documents" />
              <Paragraph>The quality of your AI agent depends entirely on the quality of data you feed it. Clean, well-structured documents produce accurate, reliable answers. Messy data produces inconsistent, sometimes incorrect responses.</Paragraph>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xl sm:text-3xl font-extrabold text-emerald-500 mb-1">PDF</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Best — clean, structured</p>
                </div>
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xl sm:text-3xl font-extrabold text-blue-500 mb-1">DOCX</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Good — preserves headings</p>
                </div>
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xl sm:text-3xl font-extrabold text-amber-500 mb-1">TXT</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Fast — minimal formatting</p>
                </div>
              </div>

              <Paragraph>Aim for <strong>5–50 pages per document</strong>. Too large = noisy chunks where details get lost. Too small = missing surrounding context the AI needs for complete answers.</Paragraph>
              <Tip>Remove headers, footers, page numbers, and watermarks from PDFs before uploading. Repetitive elements pollute every chunk and degrade search accuracy.</Tip>

              <SubHeading id="kb-what-to-upload" icon={Upload} title="What to Upload — Content Strategy" />
              <Paragraph>Think of your knowledge base as the agent&apos;s brain. If information isn&apos;t in the KB, the agent can&apos;t answer questions about it. Prioritize these:</Paragraph>
              <BulletList items={[
                "Product and service descriptions with detailed specs and pricing — include all tiers and plans",
                "FAQs your support team answers daily — highest-value docs because they directly match user queries",
                "Onboarding guides, how-to manuals, and step-by-step tutorials",
                "Company policies — shipping times, return windows, refund criteria, privacy, terms of service",
                "Your actual website copy — product pages, landing pages, about page. The bot should know everything your site says",
                "Case studies and testimonials — helps the bot sell by sharing relevant success stories",
                "Competitor comparison documents — 'Why choose us over X' content handles competitive questions professionally",
              ]} />

              <SubHeading id="kb-what-not" icon={XCircle} title="What NOT to Upload" />
              <BulletList items={[
                "Internal HR documents or employee handbooks (unless the bot serves internal employees)",
                "Raw spreadsheets, financial reports, or data tables — AI cannot reliably parse tabular data",
                "Documents that are primarily images, scanned PDFs, or infographics — OCR extraction is limited",
                "Outdated product information or sunset feature docs — the AI will confidently cite old info",
                "Confidential documents you wouldn't want exposed to website visitors",
              ]} />
              <Warning>The AI treats all uploaded documents as ground truth. If you upload a 2022 pricing sheet alongside current 2024 pricing, the bot may cite either. Always remove obsolete documents.</Warning>

              <SubHeading id="kb-quality" icon={Target} title="Content Quality & Chunking Tips" />
              <Paragraph>BolChat splits your documents into smaller &quot;chunks&quot; for vector search. How you structure content directly impacts retrieval quality.</Paragraph>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <StepCard num={1} title="One Topic Per Document" desc="Don't merge pricing, shipping, and returns into one file. Dedicated docs per topic produce precise, focused answers." />
                <StepCard num={2} title="Use Clear Headings (H1/H2/H3)" desc="The AI uses headings to understand structure. Well-organized docs dramatically improve retrieval accuracy." />
                <StepCard num={3} title="Write in Q&A Format" desc="Structure content as questions and answers when possible. It directly mirrors how visitors ask." />
                <StepCard num={4} title="3–5 Sentences Per Paragraph" desc="Keep paragraphs focused on a single idea. Walls of text mix multiple topics, reducing accuracy." />
              </div>

              <SubHeading id="kb-fresh" icon={RefreshCw} title="Keeping Your Knowledge Fresh" />
              <Paragraph>A knowledge base is never &quot;done&quot; — it&apos;s a living system. Follow this maintenance schedule:</Paragraph>
              <BulletList items={[
                "Monthly review: Delete outdated docs, re-upload updated versions. Check if products, services, or prices changed.",
                "After every product launch: Upload new docs before you go live — your bot should be ready from day one.",
                "Version your files: Name them with dates (pricing-2024-q4.pdf, return-policy-v3.pdf) to spot stale content easily.",
                "Monitor Analytics: Frequent 'I don't have enough information' responses = your KB has gaps that need filling.",
              ]} />

              <SubHeading id="kb-multilingual" icon={Languages} title="Multilingual Knowledge" />
              <Paragraph>BolChat auto-detects visitor language and responds accordingly. However, response quality depends on your KB:</Paragraph>
              <BulletList items={[
                "Upload documents in each language you support. English KB + Spanish query = on-the-fly translation, which works but isn't as precise.",
                "Avoid machine-translated documents. Google Translate output introduces awkward phrasing the AI replicates verbatim.",
                "Prioritize your top 2–3 languages. If 80% speak English and Hindi, complete your KB in both first.",
              ]} />

              <SubHeading id="kb-measuring" icon={Search} title="Measuring Knowledge Quality" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-sm mb-2">📊 Fallback Rate</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">If more than 15% of responses are fallbacks, your KB has significant gaps. Target under 5%.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-sm mb-2">🧪 The 20-Question Test</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Before publishing, ask 20 common customer questions. If it can&apos;t answer 18+, iterate on your KB.</p>
                </div>
              </div>
              <Tip>Upload your actual website copy as a document. Visitors ask about things they see on your landing page — the bot should know everything your site says.</Tip>
            </Section>

            {/* ════════ AGENT MANAGER ════════ */}
            <Section id="agent-manager">
              <SectionTitle icon={Brain} label="Agent Manager" title="Creating High-Performance Agents" description="Your agent is the personality and brain of your chatbot. The system prompt is the single most important config." />

              <SubHeading id="am-prompts" icon={Pencil} title="Writing Effective System Prompts" />
              <Paragraph>The system prompt defines who your agent is, how it speaks, what it knows, and what it should never do. A great prompt = a great agent. A vague prompt = a generic, unhelpful bot.</Paragraph>
              <div className="grid gap-3 sm:gap-4 mb-6">
                <PromptExample label="❌ Bad — Too Vague" color="red" text={`"You are a helpful assistant."`} />
                <PromptExample label="✅ Good — Specific & Bounded" color="emerald" text={`"You are a customer support agent for [Company Name]. You specialize in helping users with product questions, pricing inquiries, and order tracking.\n\nRules:\n- Always be polite, concise, and professional\n- Only answer using information from your knowledge base\n- If you don't know something, say 'Let me connect you with our team at support@company.com'\n- Never discuss competitor products or provide legal/medical advice\n- Keep responses under 150 words unless the user asks for details\n- Use the user's language (auto-detect)\n\nTone: Friendly and approachable, like a knowledgeable colleague."`} />
              </div>

              <SubHeading id="am-checklist" icon={CheckCircle2} title="System Prompt Checklist" />
              <Paragraph>Every effective prompt answers these five questions:</Paragraph>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <StepCard num={1} title="Who is the agent?" desc="'You are a [role] for [Company].' Define the role clearly." />
                <StepCard num={2} title="What should it do?" desc="List tasks: answer questions, track orders, book demos, qualify leads." />
                <StepCard num={3} title="What should it NOT do?" desc="'Never give refunds', 'Don't discuss competitor pricing'." />
                <StepCard num={4} title="How should it sound?" desc="Formal/casual? Emoji or not? Short or detailed? Match your brand." />
                <StepCard num={5} title="What if it doesn't know?" desc="'Say: Let me connect you with our team' — never make things up." />
              </div>

              <SubHeading id="am-templates" icon={Brain} title="Prompt Templates for Common Use Cases" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base sm:text-lg font-extrabold text-rose-500 mb-2">🛒 E-Commerce Support</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Handles orders, returns, shipping, product recs. Temp: 0.2. Best with FAQ-style KB covering return policy, shipping times, product catalog.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base sm:text-lg font-extrabold text-blue-500 mb-2">💻 SaaS Onboarding</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Guides new users through setup. Temp: 0.3. Works best with step-by-step tutorials and getting-started guides.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base sm:text-lg font-extrabold text-emerald-500 mb-2">🎯 Lead Qualifier</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Asks qualifying questions before offering demos. Temp: 0.4. Include pricing tiers, feature comparison, case studies.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base sm:text-lg font-extrabold text-amber-500 mb-2">📚 FAQ Bot</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Strictly answers from KB, zero improvisation. Temp: 0.1. Highest confidence. Upload only verified FAQ documents.</p>
                </div>
              </div>

              <SubHeading id="am-tuning" icon={Gauge} title="Temperature & Confidence Tuning" />
              <Paragraph>These two settings control creativity vs. accuracy. Getting them right is the difference between a reliable agent and an erratic one.</Paragraph>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-sm mb-3">🌡️ Temperature (0.0–1.0)</h4>
                  <p className="text-xs text-slate-500 mb-3">Lower = consistent and factual. Higher = varied and creative.</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li><span className="font-bold text-emerald-500">0.1–0.3:</span> Strict, factual. Best for support/FAQ bots.</li>
                    <li><span className="font-bold text-amber-500">0.4–0.6:</span> Balanced default for most agents.</li>
                    <li><span className="font-bold text-red-400">0.7–1.0:</span> Creative. Only for casual/marketing bots.</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-sm mb-3">🎯 Confidence Threshold</h4>
                  <p className="text-xs text-slate-500 mb-3">How sure the AI must be before using a KB chunk.</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li><span className="font-bold text-emerald-500">0.8+:</span> Fewer hallucinations, more fallbacks.</li>
                    <li><span className="font-bold text-amber-500">0.6–0.7:</span> Balanced. Recommended start.</li>
                    <li><span className="font-bold text-red-400">0.3–0.5:</span> More answers, risk of inaccuracy.</li>
                  </ul>
                </div>
              </div>
              <Tip>Start with Temperature 0.3, Confidence 0.7. Test 20+ questions. Too rigid? Increase temp slightly. Hallucinating? Increase confidence.</Tip>

              <SubHeading id="am-conversation" icon={MessageSquare} title="Conversation Design" />
              <Paragraph>Greeting, quick replies, and teaser are your agent&apos;s first impression. Make them count.</Paragraph>
              <div className="grid gap-3 sm:gap-4 mb-6">
                <PromptExample label="❌ Generic Greeting" color="red" text={`"Hello, how may I assist you today?"`} />
                <PromptExample label="✅ Specific & Helpful" color="emerald" text={`"Hi! 👋 I'm [Company]'s AI assistant. I can help with product questions, pricing, and order tracking. What can I help you with?"`} />
              </div>
              <BulletList items={[
                "Quick replies: Add 2–3 common starting points — 'Show pricing', 'Track order', 'Talk to sales'. Reduces friction dramatically.",
                "Teaser message: Use something business-specific — '📦 Need help tracking your order?' converts better than 'Chat with us'.",
                "Keep greetings under 30 words. Long greetings intimidate visitors and reduce engagement.",
              ]} />

              <SubHeading id="am-multi" icon={Users} title="Multi-Agent Strategy" />
              <Paragraph>Different pages serve different purposes. Use separate agents optimized for each:</Paragraph>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base font-extrabold text-rose-500 mb-1">Sales Bot</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Pricing pages. Warm tone. Lead capture ON.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base font-extrabold text-blue-500 mb-1">Support Bot</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Help center. Strict KB-only. Professional.</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base font-extrabold text-emerald-500 mb-1">Onboarding Bot</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Post-signup. Step-by-step. Friendly.</p>
                </div>
              </div>
              <Tip>Test 20+ conversations before publishing. Test edge cases, multilingual queries, and tone consistency. Bad prompts = bad first impressions.</Tip>
            </Section>

            {/* ════════ WIDGET CUSTOMIZATION ════════ */}
            <Section id="widget-customization">
              <SectionTitle icon={Settings2} label="Widget" title="Widget Customization" description="Make the widget feel native to your website with shapes, colors, animations, and smart behaviors." />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <StepCard num={1} title="Brand Color & Icon" desc="Match your brand. 8+ icons: brain, sparkles, bot, chat, zap, help, headphones, message." />
                <StepCard num={2} title="Launcher Shape" desc="5 shapes: Circle, Rounded, Pill (with text), Square, Flower (organic blob)." />
                <StepCard num={3} title="Teaser Message" desc="Intercom-style speech bubble from the launcher. Fires once per session for proactive engagement." />
                <StepCard num={4} title="Quick Replies" desc="Up to 3 clickable pill buttons above the input. Reduce visitor friction immediately." />
              </div>
              <SubHeading id="ws-effects" icon={Sparkles} title="Premium Effects (Optional)" />
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">🪟 Glassmorphism</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Frosted glass with blur</p>
                </div>
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">🌈 Gradient</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Rotating brand gradient</p>
                </div>
                <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">🚀 Entrance</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Slide, scale, or bounce</p>
                </div>
              </div>
              <Tip>The pill shape with text has the highest click-through rate. Combine with a teaser message for maximum engagement.</Tip>
            </Section>

            {/* ════════ INTEGRATION GUIDES ════════ */}
            <Section id="integration-guides">
              <SectionTitle icon={Code2} label="Integration" title="Integration Guides" description="Add BolChat to any website in under 2 minutes. Works with every framework and CMS." />
              <Paragraph>Go to the <strong>Deploy</strong> tab in your dashboard. Copy your API key and Agent ID. Replace the placeholders below with your actual values.</Paragraph>

              <SubHeading id="ig-html" icon={FileText} title="Plain HTML" />
              <Paragraph>Paste before the closing <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;/body&gt;</code> tag:</Paragraph>
              <CodeBlock lang="HTML" code={`<script
  src="https://api.bolchat.tech/static/widget.js"
  data-key="YOUR_API_KEY"
  data-agent="YOUR_AGENT_ID"
  data-api-url="https://api.bolchat.tech"
></script>`} />

              <SubHeading id="ig-nextjs" icon={Code2} title="Next.js (App Router)" />
              <Paragraph>Add to your root <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">layout.tsx</code>:</Paragraph>
              <CodeBlock lang="TypeScript — app/layout.tsx" code={`import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://api.bolchat.tech/static/widget.js"
          data-key="YOUR_API_KEY"
          data-agent="YOUR_AGENT_ID"
          data-api-url="https://api.bolchat.tech"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}`} />

              <SubHeading id="ig-react" icon={Code2} title="React (Vite / CRA)" />
              <Paragraph>Inject the script in a <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">useEffect</code>:</Paragraph>
              <CodeBlock lang="TypeScript — App.tsx" code={`import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.bolchat.tech/static/widget.js";
    script.setAttribute("data-key", "YOUR_API_KEY");
    script.setAttribute("data-agent", "YOUR_AGENT_ID");
    script.setAttribute("data-api-url", "https://api.bolchat.tech");
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return <>{/* your app */}</>;
}`} />

              <SubHeading id="ig-angular" icon={Code2} title="Angular" />
              <Paragraph>Add to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">src/index.html</code> before <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;/body&gt;</code>:</Paragraph>
              <CodeBlock lang="HTML — src/index.html" code={`<script
  src="https://api.bolchat.tech/static/widget.js"
  data-key="YOUR_API_KEY"
  data-agent="YOUR_AGENT_ID"
  data-api-url="https://api.bolchat.tech"
></script>`} />

              <SubHeading id="ig-vue" icon={Code2} title="Vue.js" />
              <Paragraph>Add to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">index.html</code> before <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;/body&gt;</code>:</Paragraph>
              <CodeBlock lang="HTML — index.html" code={`<script
  src="https://api.bolchat.tech/static/widget.js"
  data-key="YOUR_API_KEY"
  data-agent="YOUR_AGENT_ID"
  data-api-url="https://api.bolchat.tech"
></script>`} />

              <SubHeading id="ig-cms" icon={Globe} title="WordPress & Shopify" />
              <Paragraph><strong>WordPress:</strong> Go to Appearance → Theme Editor → <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">footer.php</code>, paste before <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;/body&gt;</code>. Or use a plugin like &quot;Insert Headers and Footers&quot;.</Paragraph>
              <Paragraph><strong>Shopify:</strong> Online Store → Themes → Edit Code → <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">theme.liquid</code>, paste before <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;/body&gt;</code>.</Paragraph>
              <Tip>After adding the script, hard refresh (Ctrl+Shift+R) to clear cache. The widget uses Shadow DOM for complete CSS isolation — zero conflicts with your site.</Tip>
            </Section>

            {/* ════════ ANALYTICS ════════ */}
            <Section id="analytics">
              <SectionTitle icon={BarChart3} label="Analytics" title="Analytics & Insights" description="Use real conversation data to continuously improve agent performance." />
              <Paragraph>The Analytics dashboard provides real-time metrics on visitor interactions. Use this data to identify knowledge gaps, refine prompts, and measure ROI.</Paragraph>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <StepCard num={1} title="Track Sessions" desc="Monitor daily/weekly/monthly session counts and message volumes. Spot peak hours." />
                <StepCard num={2} title="Identify Gaps" desc="High fallback rates = topics your KB doesn't cover. Fill those gaps." />
                <StepCard num={3} title="Review Conversations" desc="Read actual chats weekly. Find great answers to reinforce and struggles to fix." />
              </div>
              <SubHeading id="an-cycle" icon={TrendingUp} title="Continuous Improvement Cycle" />
              <BulletList items={[
                "Week 1: Deploy and collect data. Don't optimize yet — just observe patterns.",
                "Week 2: Review conversations. Find top 5 unanswered questions. Add those topics to your KB.",
                "Week 3: Refine system prompt based on tone/style. Adjust temperature if too rigid or creative.",
                "Monthly: Delete outdated KB docs, re-upload current versions, run the 20-question test again.",
              ]} />
              <Tip>Set a Monday calendar reminder to review Analytics. Consistent weekly reviews compound into dramatically better performance.</Tip>
            </Section>

            {/* ════════ DO'S & DON'TS ════════ */}
            <Section id="dos-and-donts">
              <SectionTitle icon={Target} label="Best Practices" title="Do's & Don'ts" description="Golden rules from hundreds of successful BolChat deployments." />

              <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-4">📚 Knowledge Base</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <DoCard items={[
                  "Upload clean, well-structured PDFs with clear headings",
                  "One focused document per topic",
                  "Write content in Q&A format when possible",
                  "Review and update monthly",
                  "Name files with dates (pricing-2024-q4.pdf)",
                  "Test with 20 real questions before publishing",
                ]} />
                <DontCard items={[
                  "Upload scanned images or visual PDFs",
                  "Merge unrelated topics into one document",
                  "Use machine-translated documents",
                  "Leave outdated product info in KB",
                  "Upload confidential documents",
                  "Skip testing and go live untested",
                ]} />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4">🧠 System Prompts</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <DoCard items={[
                  "Be specific about role, personality, and boundaries",
                  "Include company name and key product names",
                  "Define fallback behavior for unknown questions",
                  "Set word limits for responses",
                  "Test 20+ conversations before publishing",
                ]} />
                <DontCard items={[
                  "Use vague prompts like 'Be helpful'",
                  "Let the agent make up answers",
                  "Forget to define tone and style",
                  "Skip testing — bad first impressions stick",
                  "Change prompts in production without testing",
                ]} />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4">🎨 Widget Design</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <DoCard items={[
                  "Match brand colors to your website exactly",
                  "Use specific teaser messages per page",
                  "Add 2–3 quick reply buttons",
                  "Use pill shape with text for higher CTR",
                  "Test on mobile — 60%+ of chats are mobile",
                ]} />
                <DontCard items={[
                  "Use default colors that clash with your site",
                  "Enable every effect at once — keep it clean",
                  "Write vague greetings like 'How can I help?'",
                  "Ignore mobile responsiveness",
                  "Place the widget on useless pages",
                ]} />
              </div>
            </Section>

            {/* ════════ FAQ ════════ */}
            <Section id="faq">
              <SectionTitle icon={MessageSquare} label="FAQ" title="Frequently Asked Questions" description="Quick answers to the questions we hear most." />
              <div className="space-y-2 sm:space-y-3">
                {[
                  { q: "How long does setup take?", a: "Under 10 minutes. Upload docs, create an agent, customize the widget, paste one script tag. Refine later using analytics." },
                  { q: "Can I use BolChat on multiple websites?", a: "Yes. Create different agents for different sites, each with unique KB, prompt, and widget config." },
                  { q: "Does BolChat work with SPAs?", a: "Yes. The widget loads asynchronously with Shadow DOM for CSS isolation. Works with React, Angular, Vue, Next.js." },
                  { q: "How many languages are supported?", a: "50+ with automatic detection. For best results, upload KB docs in your target languages." },
                  { q: "What if the bot can't answer?", a: "It falls back to your configured response ('Let me connect you with our team'). Conversations are still logged for gap analysis." },
                  { q: "Is my data secure?", a: "Yes. TLS 1.3 in transit, encrypted at rest. Each tenant has fully isolated data. No cross-org sharing." },
                  { q: "Can I see what visitors ask?", a: "Yes — the Conversations page shows full transcripts. Analytics provides aggregate metrics." },
                  { q: "How does billing work?", a: "Flexible plans based on message volume. All plans include unlimited agents, KBs, and widget customization." },
                ].map((item, i) => (
                  <details key={i} className="group rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer text-sm font-bold text-slate-800 hover:text-rose-500 transition-colors">
                      {item.q}
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>
            </Section>

            {/* ── CTA ── */}
            <div className="py-12 sm:py-20 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Ready to build your AI agent?</h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm sm:text-base">Get started in minutes — no credit card required.</p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98]">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-slate-700 border border-slate-200 shadow-sm hover:border-rose-200 hover:text-rose-500 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
