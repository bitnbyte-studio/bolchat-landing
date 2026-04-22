"use client";

import { Check, Clock, Bot } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";

const languages = ["EN", "HI", "ES", "+47"];

const stats = [
    { num: "50+", label: "Languages" },
    { num: "24/7", label: "Always on" },
    { num: "1.2s", label: "Avg Response" },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Message = {
    id: number;
    role: "user" | "agent";
    content: string | ReactNode;
};

export function ChatScreen() {
    const msgsRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            while (isMounted) {
                setMessages([]);
                setIsTyping(false);
                setShowToast(false);

                await sleep(600);
                if (!isMounted) break;
                setMessages([{ id: 1, role: "user", content: "Hi, do you ship to India? What's the delivery time?" }]);

                await sleep(1000);
                if (!isMounted) break;
                setIsTyping(true);

                await sleep(1200);
                if (!isMounted) break;
                setIsTyping(false);
                setMessages((prev) => [
                    ...prev,
                    {
                        id: 2,
                        role: "agent",
                        content: (
                            <>
                                Yes! We ship to <span className="text-rose-600 font-semibold">India</span> — delivery in 3–5 days. Want me to check Mumbai availability?
                            </>
                        ),
                    },
                ]);

                await sleep(1200);
                if (!isMounted) break;
                setMessages((prev) => [...prev, { id: 3, role: "user", content: "Yes please! And do you do returns?" }]);

                await sleep(800);
                if (!isMounted) break;
                setIsTyping(true);

                await sleep(1400);
                if (!isMounted) break;
                setIsTyping(false);
                setMessages((prev) => [
                    ...prev,
                    {
                        id: 4,
                        role: "agent",
                        content: (
                            <>
                                Mumbai is covered. <span className="text-rose-600 font-semibold">Free returns within 30 days</span> — no questions asked. Shall I send details to your email?
                            </>
                        ),
                    },
                ]);

                await sleep(1200);
                if (!isMounted) break;
                setShowToast(true);

                await sleep(4500);
            }
        };

        runSequence();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        if (msgsRef.current) {
            msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <div className="relative w-full max-w-[420px] -mt-30 mx-auto">
            {/* Main Chat Card */}
            <div className="flex flex-col h-[560px] rounded-[24px] border border-slate-200/60 bg-white overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative z-10">

                {/* Top bar */}
                <div className="flex-none flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-white z-20">
                    <div className="relative flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-rose-500 shadow-sm text-white">
                        <Bot size={20} strokeWidth={2.5} />
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[14.5px] font-extrabold text-slate-900 leading-tight">BolChat AI</p>
                        <p className="text-[12px] text-slate-500 font-medium mt-0.5">Typically replies in 1.2s</p>
                    </div>
                    <div className="flex gap-1">
                        {languages.map((l) => (
                            <span key={l} className="text-[10px] font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100">
                                {l}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Messages Area - Added pb-28 so text never hides behind the toast */}
                <div ref={msgsRef} className="flex-1 px-5 py-6 pb-28 flex flex-col gap-4 overflow-y-auto scroll-smooth hide-scrollbar bg-slate-50/30">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${msg.role === "user"
                                ? "self-end bg-slate-900 text-white rounded-[16px_16px_4px_16px]"
                                : "self-start bg-white text-slate-800 border border-slate-100 rounded-[16px_16px_16px_4px]"
                                }`}
                        >
                            {msg.content}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="self-start max-w-[85%] px-4 py-4 bg-white border border-slate-100 rounded-[16px_16px_16px_4px] shadow-sm animate-in fade-in slide-in-from-bottom-2">
                            <div className="flex gap-1.5 items-center h-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Captured Lead Toast - Now strictly over top without blocking scrolling content */}
                <div
                    className={`absolute bottom-[88px] left-4 right-4 flex items-center gap-3 rounded-xl px-4 py-3 border border-emerald-100 bg-white shadow-[0_12px_24px_rgba(16,185,129,0.15)] transition-all duration-500 z-30 ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                        <p className="text-[13px] font-bold text-slate-900">Lead captured automatically</p>
                        <p className="text-[12px] text-slate-500 font-medium">Priya S. • Mumbai (Intent saved)</p>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="flex-none grid grid-cols-3 border-t border-slate-100 bg-white z-20">
                    {stats.map((s, i) => (
                        <div key={s.label} className={`py-4 text-center ${i < stats.length - 1 ? "border-r border-slate-100" : ""}`}>
                            <p className="text-[1.15rem] font-black text-slate-900 tracking-tight">{s.num}</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>



            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}