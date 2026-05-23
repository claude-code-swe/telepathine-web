# Content Rewrite Spec — Telepathine.ai

**Goal**: Rewrite ALL page content to fully integrate the brand strategy, messaging architecture, vocabulary, and SEO/GEO guidance from our research corpus.

**Reference docs** (read ALL before starting):
- `docs-reference/final-brand-gtm-synthesis.md` — THE MASTER DOC: messaging architecture, taglines, vocabulary bank, homepage architecture, competitive map, SEO/GEO strategy, trust narrative, pricing details
- `docs-reference/BRAND-NARRATIVE-SYNTHESIS.md` — Brand story, 3 pillars, narrative arc, tagline architecture, risk mitigation
- `docs-reference/REDO-BRIEF.md` — Visual design spec, copy to preserve, banned visuals
- `docs-reference/track7-seo-geo-strategy.md` — SEO keywords, GEO optimization, canonical definitions, category-term ownership
- `docs-reference/track8-competitor-messaging.md` — Competitive positioning, differentiation language
- `docs-reference/track9-icp-buyer-research.md` — ICP profiles, buyer personas, pain points
- `docs-reference/track4-technical-truth.md` — Technical accuracy, feature descriptions
- `docs-reference/track5-market-positioning.md` — Market quadrant, positioning

---

## CRITICAL RULES

### 90/10 Brand Rule
- 90% engineering credibility, 10% ambient warmth
- Homepage = 0% mythology. Developer docs = 5-10%. Blog/talks = up to 20%.
- The 10% is TEXTURE, never SUBJECT MATTER

### Banned Words — NEVER use in ANY public copy
ayahuasca, harmine, DMT, vine of souls, shared visions, ceremony, Akashic Records, noosphere, third eye, awakening, expanded consciousness, infinite memory, telepathic AI, cognitive persistence, your AI's subconscious, collective consciousness, universal memory, memory-as-a-service, sacred, psychedelic, chakra

### Language Hierarchy (ALWAYS follow this order)
1. What it does (technical) 
2. How it works (technical)
3. Why it matters (esoteric/poetic) — ONLY as subtle texture, never as lead

### API & Connector Rules
- Domain: `api.telepathine.ai`
- Env var: `TELEPATHINE_API_KEY`
- API key placeholder: `your_api_key_here`
- Connector count: "17"
- NEVER reference internal ports (37777/37778), Supabase, Docker, admin endpoints

### Visual Rules
- NO centered sections — all left-aligned or asymmetric
- NO emoji icons — use code terminals or wireframe diagrams
- NO gradient orbs or floating blobs
- NO organic/nature imagery (mycelium, mushrooms, vines, bark, etc.)
- Code terminal as hero visual — not illustrations
- Amber (#D4913D) primary, Vine green (#5A8A5E) secondary
- Instrument Serif for headlines, Geist Sans for body, JetBrains Mono for code

### Astro JSX Escaping
- Bare `{` in template HTML is parsed as JSX — use `&#123;`/`&#125;` or wrap in `{'...'}` string expressions

---

## PAGES TO REWRITE

### 1. HOMEPAGE (`src/pages/index.astro`) — HIGHEST PRIORITY

**Current state**: Asymmetric layout with code terminal (GOOD), but copy is thin skeleton. Missing most brand-prescribed content.

**Target architecture** (from synthesis doc Section 11):

```
┌─ HERO ────────────────────────────────────────────────┐
│  H1: "The Portable Memory Layer for AI Agents"        │
│  (NOT "When agents share memory, they become aware")  │
│  Subtitle: "One API key. 17 connectors. Every engine." │
│  [ Start Free — 10K observations, no credit card ]    │
│  [ See how it works ]                                 │
│  Code terminal on RIGHT (keep current terminal design) │
├─ PROBLEM STRIP ───────────────────────────────────────┤
│  "Every AI agent starts from zero.                     │
│   Every session, you re-explain yourself.               │
│   Every vendor wants to keep it that way."            │
├─ HOW IT WORKS ────────────────────────────────────────┤
│  4-step pipeline: Observe → Morpheus → Inject → Connect│
│  Each step as a hex-cell node with brief description   │
│  Pheromone trail connecting them (amber dots, CSS only)│
├─ CAPABILITIES (zig-zag, keep current layout) ─────────┤
│  Signal Bus FIRST (primary moat)                       │
│  Persistent Memory second                             │
│  Hybrid Search third                                  │
├─ DIFFERENTIATOR STRIP ────────────────────────────────┤
│  "Claude's memory only works with Claude.             │
│   ChatGPT's memory only works with ChatGPT.          │
│   Telepathine works with all of them."                │
├─ TRUST / PROOF STRIP ─────────────────────────────────┤
│  17 Connectors · RLS Isolated · BYOK · Self-Hostable  │
│  Logo wall below                                      │
├─ PRICING TEASER ──────────────────────────────────────┤
│  Spark ($0) / Ignite ($29) / Blaze ($99)             │
│  Key metrics per tier (observations, bus msgs, etc.)   │
├─ 10% POETRY (ONE line, below the fold) ───────────────┤
│  "We open the channels. The intelligence is already   │
│   there."                                             │
├─ CTA ─────────────────────────────────────────────────┤
│  "No agent starts from zero"                          │
│  [ Get Started — Free ]                               │
└─ FOOTER ──────────────────────────────────────────────┘
```

**Homepage H1**: MUST be "The Portable Memory Layer for AI Agents" — this is the category tagline for SEO. Brand name goes in `<title>` suffix.

**Canonical definitions** (embed on homepage for AI citation — Section 8 of synthesis):
> **AI agent memory** is a persistent external storage layer that allows an AI agent to retain, retrieve, and reason over information across separate sessions — solving the fundamental statelessness of large language models.

**FAQ: Name Origin** (add at bottom, before CTA):
```
Q: Why "Telepathine"?
A: From Greek: tele (distance) + pathine (feeling) — "feeling at a distance."
   That's exactly what our infrastructure enables:
   AI agents that share understanding across distance, sessions,
   and engine boundaries.
```

---

### 2. FEATURES PAGE (`src/pages/features.astro`)

**Current**: Uses `FeatureCard` component with emoji icons (🧠🔍💉🤖📋📡🔒🔑🔌). Centered layout.

**Target**: 
- Replace FeatureCard emoji icons with code terminal visuals or wireframe diagrams
- Signal Bus FIRST in order (not last)
- Add competitive context under each feature (e.g., "No other memory product ships a real-time agent bus")
- Use asymmetric zig-zag layout like homepage features
- Add "How it works" 4-step pipeline (Observe → Morpheus → Inject → Connect)
- Each feature gets a code snippet showing it in action

---

### 3. PRICING PAGE (`src/pages/pricing.astro`)

**Current**: Shallow — just tier names and prices with generic feature bullets.

**Target** (from synthesis doc Section 7):

| | **Spark** (Free) | **Ignite** ($29/mo) | **Blaze** ($99/mo) | **Enterprise** (Custom) |
|---|------|------|------|------|
| Observations/mo | 10K | 100K | 1M | Unlimited |
| Context injections/mo | 2K | 25K | 250K | Unlimited |
| Projects | 1 | 5 | Unlimited | Unlimited |
| Bus messages/mo | 5K | 100K | 1M | Unlimited |
| Connectors | 5 core | All 17 | All 17 | All 17 + custom |
| Morpheus summaries/mo | 100 | 2K | 20K | Unlimited |
| Search | Hybrid basic | Hybrid full | Hybrid + rerank | Hybrid + rerank + custom |
| Team seats | 1 | 1 | 10 included | Unlimited |
| Data retention | 30 days | 1 year | 2 years | Custom |
| BYOK | ✅ | ✅ | ✅ | ✅ |
| Self-hostable | ✅ Apache 2.0 | Cloud | Cloud | BYOC / on-prem |
| SLA | — | 99.5% | 99.9% | 99.95% |

Add:
- "No graph paywall" callout (Mem0 charges $249 for graph)
- "BYOK free on all tiers"
- "Self-hosted always free (Apache 2.0)"
- Launch promotion: 50% off Ignite/Blaze for early adopters
- Overage pricing table
- Upgrade triggers (natural, not forced)

---

### 4. SECURITY PAGE (`src/pages/security.astro`)

**Current**: Has 7 relevant references but likely thin.

**Target** (from synthesis doc Section 9):
- Lead with LEAK-01 postmortem: "We learned data isolation the hard way." Full story, honest, with regression test policy
- Isolation verification demo (curl box):
  ```
  curl -s https://api.telepathine.ai/v1/context/inject?projects=your-project&limit=5 \
    -H "Authorization: Bearer $TELEPATHINE_API_KEY"
  → Returns ONLY your-project's observations
  → Never includes "default" scope
  → Zero observations for unknown projects
  ```
- Compliance roadmap (HONEST status — not "compliant" when it's "in progress")
- Trust language rules: "Row-Level Security with FORCE policies" not "Enterprise-grade security"
- Security@ + PGP for responsible disclosure

---

### 5. SEO/GEO LANDING PAGES (5 pages)

These need to be **canonical definition pages** — 2000-3000 words each, with:
- Direct answer in first 100 words
- Credible external sources cited
- Quantified statistics
- FAQ schema
- Code examples
- The canonical definitions from synthesis Section 8

Pages:
- `src/pages/what-is-ai-agent-memory.astro` — Definitive guide, 3000+ words
- `src/pages/mcp-memory-server.astro` — Quick-start + benchmarks
- `src/pages/claude-memory-alternative.astro` — Why portable beats vendor-locked
- `src/pages/model-agnostic-memory.astro` — Category creation page
- `src/pages/agent-communication-bus.astro` — New category, zero competitors

---

### 6. `/docs/telepathine.md` (Brand Story Page)

This is the ONLY page where the 10% lives.
- Etymology-first: tele + pathine = feeling at a distance
- The narrative arc (4 acts from BRAND-NARRATIVE-SYNTHESIS.md)
- The channel opener metaphor
- Nature metaphors OK here (stigmergy, mycelium as ANALOGY, not imagery)
- FAQ: name origin expanded
- NEVER: ayahuasca, DMT, harmine, ceremony, sacred, etc.

---

### 7. `src/data/brand.ts` — Update Tagline

Current: "When agents share memory, they become aware."
Target: "Your memory should outlive your agent." (universal primary from synthesis)
Keep "aware/awareness" as secondary vocabulary, not primary tagline.

Also update meta description to match: "The portable memory layer for AI agents."

---

## AFTER REWRITE

1. Run `pnpm build` — must pass with 0 errors
2. Run `grep -c "0AE5A0\|0ae5a0" src/pages/index.astro` — must be 0 (no teal)
3. Run `grep -i "ayahuasca\|harmine\|DMT\|sacred\|awakening\|psychedelic" src/pages/index.astro` — must be 0
4. Verify homepage has: "Portable Memory Layer", problem statement, differentiator strip, how-it-works, FAQ
5. Verify features page has: NO emoji icons, Signal Bus first
6. Verify pricing page has: real tier metrics (observations, injections, bus msgs)
7. Verify security page has: LEAK-01 postmortem, isolation demo, honest compliance
8. `git add -A && git commit -m "feat: content rewrite — integrate brand strategy, messaging, SEO/GEO" && git push origin main`
