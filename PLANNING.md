# Telepathine Web — Product Documentation Website

## Vision

Public-facing documentation and marketing website for **Agent Memory** — a hosted memory backend for AI agents. This is the commercial front door: features, architecture, API reference, connectors, pricing. NOT internal/dev documentation.

## Brand Identity

- **Product name**: Agent Memory
- **Brand flavor**: "Telepathine" (internal codename — the telepathic resin from _Sleeping Beauties_) — used as project folder name, not necessarily public-facing
- **Tone**: Developer-first, technical credibility, no marketing fluff. We speak to engineers building with AI agents.

## Business Model

- **SaaS API access** — developers get API keys, integrate via SDKs, MCP, or direct HTTP
- **Tiered plans** — Free (hobby), Pro (teams), Enterprise (custom)
- **What we sell**: Persistent memory for AI agents. Your agents remember across sessions, projects, and time.
- **What we DON'T publish**: Internal worker implementation, database schema details, deployment topology, admin endpoints

## Architecture (Public-Facing)

We present a clean 3-tier view:

```
┌─────────────────────────────────────────────┐
│           YOUR AGENTS                        │
│  Claude Code · Cursor · Gemini · Windsurf    │
│  Copilot · Custom · Any LLM                  │
└──────────────┬──────────────────────────────┘
               │ SDKs · MCP · HTTP API
               ▼
┌─────────────────────────────────────────────┐
│         AGENT MEMORY API                     │
│  ┌─────────────┐ ┌──────────────────────┐   │
│  │ REST API    │ │ MCP Server (13 tools) │   │
│  ├─────────────┤ ├──────────────────────┤   │
│  │ TypeScript  │ │ Python SDK           │   │
│  │ SDK         │ │                      │   │
│  └─────────────┘ └──────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ Intelligence Layer                   │    │
│  │ · Hybrid Search (FTS + Semantic)    │    │
│  │ · Context Injection (Progressive)    │    │
│  │ · Morpheus Summarization Pipeline   │    │
│  │ · Session Memory & Continuity       │    │
│  │ · Telepathine Bus (Agent→Agent)     │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ Connectors                           │    │
│  │ · 17 Agent Platform Adapters        │    │
│  │ · Smart File Reading                 │    │
│  │ · Hook Lifecycle Pipeline           │    │
│  │ · Auto-Discovery & Install          │    │
│  └──────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│     Your Data · Your Tenant · Isolated       │
│     Multi-tenant · RLS · Encrypted Keys      │
└─────────────────────────────────────────────┘
```

## Site Structure

```
/                          → Landing page (hero, value prop, CTA)
/features                  → Feature showcase (memory, search, context, sessions)
/architecture              → Public architecture (the 3-tier view above)
/connectors                → All 17+ platform adapters with install instructions
/api                       → API reference (all public endpoints)
  /api/rest                → REST API endpoints
  /api/mcp                 → MCP server & 13 tools
  /api/sdks                 → SDKs (TypeScript, Python)
/pricing                   → Plans & tiers
/docs                      → Guides & tutorials
  /docs/quickstart         → 5-minute getting started
  /docs/context-injection  → How context injection works
  /docs/search             → Hybrid search explained
  /docs/sessions           → Session lifecycle
  /docs/morpheus           → Summarization pipeline
  /docs/telepathine        → Agent-to-agent communication
  /docs/project-isolation  → Multi-tenant isolation model
  /docs/byok               → Bring Your Own Key (AI provider config)
/changelog                 → Release notes
```

## Tech Stack

- **Framework**: Astro 5.x (static site generation, island architecture)
- **Styling**: Tailwind CSS 4.x
- **Components**: React (for interactive islands — code samples, pricing toggle)
- **Syntax highlighting**: Shiki (built into Astro)
- **Search**: Pagefind (static, no backend)
- **Deployment**: Static build → Cloudflare Pages (or Vercel)
- **Package manager**: pnpm

## Content Sections Detail

### Landing Page
- Hero: "Give your AI agents persistent memory"
- Subtitle: "The memory layer your agents have been missing. Works with every coding agent."
- Logo wall of supported platforms (Claude, Cursor, Gemini, Windsurf, Copilot, etc.)
- 3 feature cards: Remember, Search, Communicate
- Code example (3-line quick start)
- CTA: "Get API Key" → /pricing

### Features Page
- **Memory**: Observations, sessions, facts, concepts, narratives
- **Search**: Hybrid (FTS + semantic), scoped queries, real-time
- **Context Injection**: Progressive disclosure, ranked relevance, compressed
- **Morpheus**: LLM-powered summarization, consolidation, retrospectives
- **Sessions**: Start → work → complete lifecycle, continuity across turns
- **Telepathine**: Agent-to-agent thought broadcasting, mesh relay
- **Security**: Multi-tenant isolation, RLS, encrypted API keys, BYOK

### Connectors Page
Per-connector cards with:
- Platform name + logo
- Install command (1-liner)
- Hook events supported
- Status (stable/beta/alpha)
- Link to detailed guide

Connectors list (17 total):
1. Claude Code (stable)
2. Cursor (stable)
3. Gemini CLI (stable)
4. Windsurf (stable)
5. Pi Agent (stable)
6. Hermes (stable)
7. Codex CLI (beta)
8. Copilot CLI (beta)
9. VS Code Copilot (alpha)
10. KiloCode (alpha)
11. OpenMP (alpha)
12. JetBrains Copilot (alpha)
13. Windsurf (alternate adapter)
14. Antigravity (alpha)
15. Zed (alpha)
16. Kiro (alpha)
17. Qwen Code (alpha)

### API Reference
All public `/v1/*` endpoints with:
- Method, path, description
- Auth requirement (Bearer API key)
- Request/response schemas
- Code examples (curl + SDK)
- Rate limit info

Endpoints to document:
- `POST /v1/sessions` — Create session
- `GET /v1/sessions` — List/search sessions
- `POST /v1/sessions/:id/observations` — Record observation
- `POST /v1/sessions/:id/summarize` — Trigger summarization
- `POST /v1/sessions/:id/complete` — Complete session
- `GET /v1/observations` — List observations
- `POST /v1/observations` — Create observation
- `GET /v1/search` — Hybrid search
- `GET /v1/context` — Get formatted context
- `GET /v1/context/inject` — Context injection (for agents)
- `GET /v1/projects` — List projects
- `GET /v1/projects/:name/config` — Project config
- `PUT /v1/projects/:name/config` — Update project config
- `GET /v1/events` — SSE event stream
- `GET /v1/health` — Health check
- `GET /v1/workspaces` — List workspaces

### Pricing Page
| Feature | Free | Pro | Enterprise |
|---------|------|-----|-----------|
| Observations/mo | 1,000 | 50,000 | Unlimited |
| Projects | 3 | 50 | Unlimited |
| Search queries/mo | 500 | 10,000 | Unlimited |
| Context injections/mo | 1,000 | 50,000 | Unlimited |
| Connectors | All | All | All |
| MCP tools | All 13 | All 13 | All 13 |
| BYOK (AI keys) | ✅ | ✅ | ✅ |
| Telepathine (agent comms) | — | ✅ | ✅ |
| Team sharing | — | ✅ | ✅ |
| Priority support | — | — | ✅ |
| Custom SLA | — | — | ✅ |
| Price | $0 | $29/mo | Custom |

## File Structure

```
telepathine-web/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── public/
│   ├── favicon.svg
│   └── logos/           # Platform logos (SVG)
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Shell (nav, footer)
│   │   └── DocsLayout.astro   # Sidebar + content
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── ConnectorCard.astro
│   │   ├── CodeBlock.astro     # Syntax-highlighted code
│   │   ├── ApiEndpoint.astro   # Method + path + description
│   │   ├── PricingTable.tsx    # React island (toggle monthly/annual)
│   │   ├── LogoWall.astro     # Platform logos grid
│   │   └── Callout.astro      # Info/warning/danger boxes
│   ├── content/
│   │   ├── connectors/        # Per-connector MDX files
│   │   │   ├── claude-code.mdx
│   │   │   ├── cursor.mdx
│   │   │   └── ...
│   │   ├── api/               # API endpoint docs
│   │   │   ├── sessions.mdx
│   │   │   ├── observations.mdx
│   │   │   ├── search.mdx
│   │   │   └── ...
│   │   └── docs/              # Guide docs
│   │       ├── quickstart.mdx
│   │       ├── context-injection.mdx
│   │       ├── search.mdx
│   │       └── ...
│   ├── data/
│   │   ├── connectors.ts      # Connector metadata (status, events, install cmd)
│   │   ├── api-endpoints.ts   # API endpoint metadata
│   │   └── pricing.ts         # Plan data
│   ├── pages/
│   │   ├── index.astro        # Landing
│   │   ├── features.astro
│   │   ├── architecture.astro
│   │   ├── connectors/
│   │   │   ├── index.astro    # All connectors
│   │   │   └── [slug].astro   # Individual connector
│   │   ├── api/
│   │   │   ├── index.astro    # API overview
│   │   │   ├── rest.astro
│   │   │   ├── mcp.astro
│   │   │   └── sdks.astro
│   │   ├── pricing.astro
│   │   ├── docs/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro   # Dynamic doc pages
│   │   └── changelog.astro
│   └── styles/
│       └── global.css
├── PLANNING.md              ← This file
└── README.md                ← Setup & build instructions
```

## Design Principles

1. **No internal details exposed** — never mention worker ports, database schemas, Docker, Supabase, admin endpoints
2. **API-first** — everything is "use our API", not "deploy our stack"
3. **Show, don't tell** — code examples everywhere, not walls of text
4. **Connector showcase** — the breadth of integrations is our moat, highlight it
5. **Dark mode default** — we're building for developers
6. **Fast** — Astro SSG = instant loads, zero JS by default
7. **Updatable** — data-driven (connectors, API endpoints, pricing are typed data files, not hardcoded)

---

## Domain Acquisition Plan

**Last updated:** 2026-05-26  
**Pricing source:** Spaceship.com live scrape  
**Purpose:** Secure the Telepathine brand across key TLDs for trademark protection, deployment, and marketing.

### Acquisition Phases

#### Phase 1: Immediate (Budget-Constrained) ✅

| Domain | Status | 1st Year | Renewal/yr | Purpose |
|--------|--------|----------|------------|---------|
| **telepathine.org** | 🟢 Available | **$6.48** | $9.80 | Primary deployment domain |

**Phase 1 total: $6.48**

This gives us a live, deployable domain immediately. `.org` signals credibility and trust for an open-source-rooted project.

#### Phase 2: Core Brand Protection (When Budget Allows)

| Domain | Status | 1st Year | Renewal/yr | Purpose |
|--------|--------|----------|------------|---------|
| **telepathine.ai** | 🟢 Available | **$79.98** | $79.98 | Primary product domain — AI TLD signals category |
| **telepathine.io** | 🟢 Available | **$31.98** | $51.75 | Tech-standard TLD, defensive registration |

**Phase 2 total: $111.96 (yr 1) → $131.73/yr renewal**

#### Phase 3: Full Brand Lockdown (Trademark Defensive)

| Domain | Status | 1st Year | Renewal/yr | Purpose |
|--------|--------|----------|------------|---------|
| **telepathine.com** | 🟡 Aftermarket | **$3,495.00** | ~$9.80 | Crown jewel — prevent squatting, maximum credibility |
| **telepathine.net** | 🟢 Available | **$11.20** | $11.20 | Defensive registration |
| **telepathine.xyz** | 🟢 Available | **$1.86** | $12.52 | Defensive — cheap |
| **telepathine.online** | 🟢 Available | **$0.98** | $19.98 | Defensive — cheapest |
| **telepathine.space** | 🟢 Available | **$0.98** | $18.18 | Defensive — cheapest |
| **telepathine.live** | 🟢 Available | **$2.07** | $25.88 | Defensive |
| **telepathine.fyi** | 🟢 Available | **$5.18** | $5.18 | Defensive — stable renewals |
| **telepathine.tech** | 🟢 Available | **$7.22** | $50.72 | Defensive — watch renewal cost |

**Phase 3 total: $3,525.49 (yr 1) → $153.38/yr renewal** (excluding .com which renews at standard rate)

### Cost Summary Over 3 Years

| Phase | Year 1 | Year 2 | Year 3 | 3-Year Total |
|-------|--------|--------|--------|-------------|
| Phase 1 (deploy now) | $6.48 | $9.80 | $9.80 | **$26.08** |
| Phase 2 (core brand) | $111.96 | $131.73 | $131.73 | **$375.42** |
| Phase 3 (full lockdown) | $3,525.49 | $153.38 | $153.38 | **$3,832.25** |
| **Cumulative** | **$3,643.93** | **$294.91** | **$294.91** | **$4,233.75** |

> **Note:** The $3,495 .com aftermarket price dominates Phase 3. If we can negotiate it down or lease-to-own, the 3-year total drops significantly. All other domains are standard pricing.

### Trademark Strategy

Per the trademark research (see `research/deep-research/dr03-trademark.md`):

1. **Common-law rights first** — using `telepathine.org` in commerce establishes common-law trademark rights in the US even without a USPTO filing
2. **Defensive registrations** — owning 8+ TLDs prevents cybersquatters from registering variants and suing us
3. **Budget $15–25K** for potential USPTO opposition or cease-and-desist response (Neuralink/Prophetic "TELEPATHY" marks exist)
4. **File trademark proactively** once revenue supports it — likely Class 9 (software) and Class 42 (SaaS)
5. **Never use chemical/biological metaphors** in public copy — this avoids USPTO "deceptively misdescriptive" refusal under Section 2(e)(1)

### Domain → Deployment Mapping

| Domain | Planned Use |
|--------|-------------|
| telepathine.org | **Primary site** — marketing, docs, API docs (until .ai is acquired) |
| telepathine.ai | **Primary product domain** — API endpoint, dashboard, marketing |
| telepathine.io | **Developer hub** — SDK docs, MCP reference, GitHub Pages mirror |
| telepathine.com | **Corporate / redirect** → telepathine.ai |
| All others | **301 redirects** → telepathine.ai |

### Competitor Domain Landscape (Reference)

**"telepath" domains** — heavily squatted, most good TLDs taken:
- telepath.com → Taken (1994), telepath.ai → Taken (2017), telepath.io → Taken (2020)
- Available TLDs are premium-priced (.online $64.69, .tech $129.38, .space $25.88)

**"telepathy" domains** — even more saturated:
- telepathy.com → Taken (1998), telepathy.ai → N/A, telepathy.io → Aftermarket $77,995

**"telepathic" domains** — taken on .com, .io, .tech; available on .it.com, .online, .llc

**Conclusion:** "Telepathine" is uniquely available across almost all TLDs at standard pricing — a significant brand advantage over the root words.
