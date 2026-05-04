import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  if (acceptHeader.includes("text/markdown")) {
    const pathname = request.nextUrl.pathname;

    let markdown = "";

    if (pathname === "/" || pathname === "") {
      markdown = `# BolChat — Multilingual AI Agent for Website Customer Support

Deploy autonomous AI agents on your website that resolve customer queries in 50+ languages, capture leads, and escalate to humans — 24/7. No extra headcount needed.

## Key Features
- **Instant Multilingual Support**: 50+ languages out of the box.
- **Lead Capture**: Automatically collect emails and user info.
- **Live Agent Escalation**: Human hand-off for complex issues.
- **24/7 Autonomous Engagement**: Reduce support burden by up to 80%.

## Target Use Cases
- **Best AI Chatbot for Business**: Streamlining your customer support.
- **Website Chatbot Plugin**: Simple embed scripts for any CMS.
- **Human-like AI Agent**: High accuracy conversational AI platform.
- **E-commerce Chatbot**: Maximize conversion rates with instant lead capture.
- **SaaS AI Support Agent**: Scale support without increasing headcount.

## Founder
- **Founder**: [Shubham Singh](https://meetshubham.me)
- **LinkedIn**: [Shubham Singh on LinkedIn](https://www.linkedin.com/in/shubham-singh-35153122b)

## Navigation
- [Documentation](/docs)
- [Features](/features)
- [Pricing](/pricing)
- [Contact/Demo](/demo)
- [About Us](/about)
`;
    } else if (pathname.startsWith("/docs")) {
      markdown = `# BolChat Documentation

Welcome to BolChat docs. Here you'll find information on getting started, API integrations, setting up your agent, custom styling, and live agent routing.

## Resources
- **Quickstart Guide**: Get running in under 5 minutes.
- **SDK Reference**: Build on top of BolChat's low-latency core.
- **Best Practices**: Maximizing lead capture rate and minimizing hallucinations.
`;
    } else if (pathname.startsWith("/pricing")) {
      markdown = `# BolChat Pricing

Simple, transparent pricing built to scale with your business.

## Plans
- **Starter Plan**: Perfect for early-stage startups and small companies.
- **Growth Plan**: High message limits, customizable agent behavior, and analytics.
- **Enterprise Plan**: Custom SLAs, white-label options, and dedicated account manager.
`;
    } else if (pathname.startsWith("/features")) {
      markdown = `# BolChat Features

Powering your support workflow with state-of-the-art multilingual AI agents.

## Core Capabilities
- **Advanced Multilingual AI**: Natural interactions in 50+ languages.
- **Lead Capture Mechanics**: Streamlined collection of lead contact info.
- **Live Agent Transfer**: Seamless fallback to humans when necessary.
- **Customization**: Match the styling, personality, and knowledge base of your brand.
`;
    } else if (pathname.startsWith("/about")) {
      markdown = `# About BolChat

BolChat powers global customer support via low-latency, multilingual autonomous AI agents.

## Founder
- **Founder**: [Shubham Singh](https://meetshubham.me)
- **LinkedIn**: [Shubham Singh on LinkedIn](https://www.linkedin.com/in/shubham-singh-35153122b)
`;
    } else {
      markdown = `# BolChat — Multilingual AI Agent Platform

BolChat powers global customer support via low-latency, multilingual autonomous AI agents. Learn more about us at https://bolchat.tech or explore the docs at https://bolchat.tech/docs.

## Founder
- **Founder**: [Shubham Singh](https://meetshubham.me)
- **LinkedIn**: [Shubham Singh on LinkedIn](https://www.linkedin.com/in/shubham-singh-35153122b)
`;
    }

    return new NextResponse(markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ]
};
