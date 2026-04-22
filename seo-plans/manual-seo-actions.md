# BolChat — Manual SEO Actions & Growth Playbook
> Last updated: April 23, 2026 | Domain: bolchat.tech

---

## Current Status Snapshot

| Metric | Status |
|---|---|
| Total pages on site | 13 |
| Currently indexed by Google | 5 |
| Pages stuck as "Discovered – not indexed" | 8 |
| HTTP duplicate indexed | 1 (http://bolchat.tech/) — FIXED in code, needs deploy |
| Technical SEO fixes deployed | ❌ Not yet — DEPLOY FIRST |

> [!CAUTION]
> **Deploy the codebase before doing ANYTHING in GSC.** Requesting indexing before deploying means Google crawls the OLD version — wasting your request quota.

---

## Step 0 — Deploy First (Blockers)

Run this before any GSC action:

```bash
npm run build
# then push to production / Vercel
```

Verify these are live after deploy:
- [ ] `https://bolchat.tech/sitemap.xml` — loads and shows all 13 URLs
- [ ] `https://bolchat.tech/robots.txt` — shows `bolchat.tech` (not `bolchat.ai`)
- [ ] `http://bolchat.tech/` → redirects 301 to `https://bolchat.tech/`
- [ ] `https://bolchat.tech/blog/ai-agent-vs-chatbot-difference` — new blog post loads
- [ ] `https://bolchat.tech/pricing` — shows custom pricing (no dollar amounts)

---

## The 5 Already-Indexed Pages — Do You Need to Re-Index?

**Short answer: Yes, request reindexing for all 5.**

You've made significant changes to every indexed page:
- Homepage H1 rewritten, FAQ section added, features rewritten
- `/docs` metadata upgraded with keyword-rich title
- `/about` metadata and description upgraded
- `/blog/what-is-ai-agent-for-websites` — post already existed, no changes

Google will naturally recrawl these within weeks, but **manually requesting reindexing accelerates this to 24–72 hours.**

| Page | Already Indexed? | Request Reindex? | Why |
|---|---|---|---|
| `https://bolchat.tech/` | ✅ Yes | ✅ Yes | Major homepage rewrite (hero, FAQ, CTA) |
| `http://bolchat.tech/` | ✅ Yes (duplicate!) | ✅ Yes | Force Google to recrawl and see the 301 redirect |
| `https://bolchat.tech/docs` | ✅ Yes | ✅ Yes | Metadata title/description upgraded |
| `https://bolchat.tech/about` | ✅ Yes | ✅ Yes | Metadata upgraded |
| `https://bolchat.tech/blog/what-is-ai-agent-for-websites` | ✅ Yes | ✅ Yes | Metadata + canonical added |

---

## The 8 Unindexed Pages — Full Priority List

Request indexing in GSC **in this exact order** (highest commercial value first):

### 🔴 Day 1 (Do Immediately After Deploy)

| # | URL | Why This Priority |
|---|---|---|
| 1 | `https://bolchat.tech/demo` | Highest commercial intent — "book a demo" is a transaction page |
| 2 | `https://bolchat.tech/pricing` | High commercial intent — pricing page ranks for "{tool} pricing" queries |
| 3 | `https://bolchat.tech/features` | Category page — ranks for "AI agent features", "multilingual chatbot features" |
| 4 | `https://bolchat.tech/contact` | Navigational intent — people search "BolChat contact" |
| 5 | `https://bolchat.tech/blog` | Blog hub — internal PageRank flows to all 5 posts from here |

### 🟡 Day 2 (Next Day — GSC has ~12 requests/day limit)

| # | URL | Why This Priority |
|---|---|---|
| 6 | `https://bolchat.tech/blog/ai-agent-vs-chatbot-difference` | High-volume comparison keyword |
| 7 | `https://bolchat.tech/blog/best-ai-chatbot-for-small-businesses` | Commercial keyword — people searching to buy |
| 8 | `https://bolchat.tech/blog/how-to-add-ai-chatbot-to-website` | High search volume how-to keyword |

### 🟢 Day 3

| # | URL | Why This Priority |
|---|---|---|
| 9 | `https://bolchat.tech/blog/what-is-bolchat-guide` | Branded navigational query |
| 10 | Re-request: `https://bolchat.tech/` | Reindex after homepage rewrite |
| 11 | Re-request: `http://bolchat.tech/` | Force Google to discover the 301 → deindex HTTP |

---

## How to Request Indexing in GSC (Step-by-Step)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select **bolchat.tech** property
3. Click **URL Inspection** in the left sidebar
4. Paste the URL (e.g. `https://bolchat.tech/demo`) → press Enter
5. Wait for status to load → click **"Request Indexing"**
6. Repeat for next URL

> [!NOTE]
> Google processes manual requests in 24–72 hours. After requesting, you'll see the status change from "Discovered" → "Crawled – not indexed" → "Indexed" in the Pages report. This can take 3–14 days to show in the Pages report even if indexing happened faster.

---

## Reindexing Intervals — Ongoing Schedule

| Page Type | How Often to Reindex | Trigger |
|---|---|---|
| Homepage | Every major content change | Rewrite, new section, new CTA |
| Blog posts | After each content update | New section, updated stats, added FAQs |
| Pricing page | Every time positioning changes | Any copy or CTA change |
| Features page | After adding new features | New feature card or copy update |
| Demo/Contact | Rarely | Only if URL or content changes significantly |

> [!TIP]
> Don't request reindexing just because you fixed a typo. Save your quota for **meaningful content changes**. Google will naturally recrawl active pages every 2–4 weeks.

---

## Sitemap Submission (One-Time + After Adding New Pages)

1. GSC → **Indexing → Sitemaps** → Add new sitemap
2. Enter: `sitemap.xml` → click Submit
3. Verify status shows **"Success"** and the correct page count

**Resubmit the sitemap every time you add a new blog post or page.** This is the fastest way to get new pages into Google's crawl queue.

Current sitemap covers:
```
https://bolchat.tech/                          priority 1.0
https://bolchat.tech/features                  priority 0.9
https://bolchat.tech/pricing                   priority 0.9
https://bolchat.tech/demo                      priority 0.95
https://bolchat.tech/docs                      priority 0.9
https://bolchat.tech/contact                   priority 0.8
https://bolchat.tech/about                     priority 0.6
https://bolchat.tech/blog                      priority 0.8
https://bolchat.tech/blog/how-to-add-ai-chatbot-to-website
https://bolchat.tech/blog/best-ai-chatbot-for-small-businesses
https://bolchat.tech/blog/what-is-bolchat-guide
https://bolchat.tech/blog/what-is-ai-agent-for-websites
https://bolchat.tech/blog/ai-agent-vs-chatbot-difference
```

---

## Internal Linking — What Was Weak & What We Fixed

### What Was Broken Before

| Problem | Impact |
|---|---|
| `/demo` had **zero internal links** from any page | Google couldn't discover it via crawl — only via sitemap |
| All blog posts only linked to `/contact` and `/demo` | No cross-linking between posts or to `/features` and `/pricing` |
| Footer missing `/demo` link | Missed opportunity to pass PageRank from every page |
| Image `alt` texts were generic ("Founder avatar") | Lost image SEO signal |
| Hero CTA pointed to `/contact` instead of `/demo` | Wrong conversion intent for top-of-funnel visitors |
| `EcosystemSection` H2 was not crawlable as keyword-rich text | Integration keywords not being indexed |

### What We Fixed

| Fix | Where | SEO Impact |
|---|---|---|
| Added `/demo` to **Footer** Platform column | `Footer.tsx` | Every page now links to `/demo` — strong crawl signal |
| Hero primary CTA now → `/demo` | `HeroSection.tsx` | Better intent match + internal link weight |
| AnalyticsShowcase CTA → `/features` | `AnalyticsShowcase.tsx` | Cross-link from homepage to features page |
| HowItWorks CTA → `/docs` | `HowItWorksSection.tsx` | Docs page now gets link from homepage |
| All 4 blog posts link to `/demo`, `/features`, `/pricing`, `/docs` | Each blog `page.tsx` | Creates a web of internal links from blog cluster to commercial pages |
| All image `alt` texts made descriptive | `HeroSection.tsx` | Image search + accessibility signal |
| `BreadcrumbJsonLd` on every page | All pages | Breadcrumb rich results + crawl path signal |

### Internal Link Map (After Fixes)

```
Homepage (/)
  ├── → /demo (Hero CTA, Footer)
  ├── → /features (AnalyticsShowcase CTA, Footer)
  ├── → /pricing (Footer)
  ├── → /docs (HowItWorks CTA, Footer)
  ├── → /contact (Footer, FaqSection)
  ├── → /about (Footer)
  └── → /blog (Footer)

Blog Hub (/blog)
  ├── → /blog/ai-agent-vs-chatbot-difference
  ├── → /blog/best-ai-chatbot-for-small-businesses
  ├── → /blog/how-to-add-ai-chatbot-to-website
  ├── → /blog/what-is-ai-agent-for-websites
  └── → /blog/what-is-bolchat-guide

Each Blog Post
  ├── → /demo (primary CTA)
  ├── → /features OR /pricing (secondary CTA)
  ├── → /docs (where relevant)
  └── → /blog (back link)
```

> [!IMPORTANT]
> The blog cluster is now the main driver of internal link equity to `/demo` and `/pricing`. Every time you add a new blog post, make sure it links to at least one commercial page.

---

## How to Make It 100x More Powerful — Full Growth Roadmap

### Week 1 — Foundation (You Must Do This)

- [ ] **Deploy the codebase**
- [ ] **Submit sitemap** in GSC
- [ ] **Request indexing** for all 13 URLs (Day 1, 2, 3 as listed above)
- [ ] **Submit to Crunchbase** → [crunchbase.com/add-company](https://www.crunchbase.com/add-company)
- [ ] **Submit to SaaSHub** → [saashub.com/submit](https://www.saashub.com/submit)
- [ ] **Submit to Futurepedia** → [futurepedia.io/submit-tool](https://www.futurepedia.io/submit-tool)
- [ ] **Submit to There's An AI For That** → [theresanaiforthat.com/submit](https://theresanaiforthat.com/submit)

> These 4 directory links will be the most impactful thing you do this week. Google needs external authority signals before it will prioritise crawling your pages.

### Week 2–3 — Authority Building

- [ ] **Product Hunt launch** — schedule a PH launch for a weekday (Tuesday–Thursday). A DA80 link + traffic spike that signals to Google this is a real product
- [ ] **Submit to AlternativeTo** as an alternative to Intercom, Tidio, Zendesk
- [ ] **Post on LinkedIn** linking to your blog posts (not just homepage) — social signals help
- [ ] **Submit to BetaList** → [betalist.com/submit](https://betalist.com/submit)
- [ ] **Respond on Reddit** — r/SaaS, r/CustomerSuccess, r/startups — answer real questions and mention BolChat where genuinely relevant

### Month 2 — Content Velocity

Write and publish 2 new blog posts targeting:

| Post Title | Target Keyword | Monthly Searches |
|---|---|---|
| "How to reduce customer support costs with AI" | reduce customer support costs | High |
| "Multilingual customer support: complete guide" | multilingual customer support software | High |
| "Intercom vs BolChat: AI agent comparison" | intercom alternatives | Very High |
| "AI customer support for e-commerce" | AI chatbot for ecommerce | High |

Each post should be 1000+ words, include a comparison table, internal links to `/demo` and `/features`, and have unique metadata.

### Month 3 — Rankings

- [ ] Check GSC Performance → which queries are getting impressions but low CTR → rewrite titles to be more clickable
- [ ] Add **testimonials / reviews** to homepage — Google favors pages with social proof for commercial queries
- [ ] Submit to **G2, Capterra** (review platforms) — DA 85+ backlinks + review rich results
- [ ] Add a **Privacy Policy** and **Terms of Service** page if not already present — Google trusts sites with legal pages

---

## GSC Weekly Monitoring Checklist

Do this every Monday morning (takes 10 minutes):

| Check | Where in GSC |
|---|---|
| New pages indexed this week | Indexing → Pages → Indexed |
| Pages that dropped from index | Indexing → Pages → Not indexed |
| New queries getting impressions | Performance → Queries |
| Core Web Vitals status | Experience → Core Web Vitals |
| Any manual actions or security issues | Security & Manual Actions |

---

## Target: All 13 Pages Indexed

Expected timeline after deploy + sitemap submission + directory links:

| Milestone | Expected Timeline |
|---|---|
| Sitemap processed by Google | 24–48 hours |
| Manual request pages crawled | 3–7 days |
| `/demo`, `/pricing`, `/features` indexed | 7–14 days |
| All blog posts indexed | 14–21 days |
| `http://bolchat.tech/` de-indexed (HTTP duplicate gone) | 3–6 weeks |
| First keyword rankings appearing | 30–45 days |
| Meaningful organic traffic | 60–90 days |

> [!NOTE]
> These are realistic timelines for a domain that is ~3 weeks old. Google deliberately throttles crawl budget for new domains. The directory backlinks from Week 1 are the #1 lever to accelerate this.
