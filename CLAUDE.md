# CLAUDE.md — Telepathine Marketing Website

## What This Is
The public-facing marketing website for Telepathine.ai — an Astro 5 + Tailwind 4 static site deployed to GitHub Pages. This is the **marketing canvas**, not the operational dashboard.

## Connected Projects & Folders

| Project | Path | Stack | Purpose |
|---|---|---|---|
| **This website** | `/home/artemisai/projects/telepathine-web/` | Astro 5 + Tailwind 4 | Marketing + docs |
| **Dashboard** | `/home/artemisai/projects/agent-memory-DEV/apps/webgui/` | Next.js 15 + shadcn/ui | Operational UI |
| **API gateway** | `/home/artemisai/projects/agent-memory-DEV/apps/api/` | Fastify | REST API (port 37778) |
| **Worker** | `/home/artemisai/projects/agent-memory-DEV/apps/worker/` | Fastify | Data engine (port 37777) |
| **Brand tokens** | `/home/artemisai/projects/agent-memory-DEV/brand/` | JSON + scripts | Single source of truth |
| **Dev repo** | `/home/artemisai/projects/agent-memory-DEV/` | pnpm monorepo | Git origin: `ArtemisAI/agent-memory-DEV.git` |

## Repos

| Repo | URL | Visibility | Deploy |
|---|---|---|---|
| telepathine-web | `https://github.com/claude-code-swe/telepathine-web` | Public | GitHub Pages |
| agent-memory-DEV | `https://github.com/ArtemisAI/agent-memory-DEV.git` | Private | Docker Compose |

**Note:** This project has its OWN git history (separate from agent-memory-DEV).

## Branding Source of Truth → `brand/`
Same as dashboard — see `brand/tokens.json` and `brand/BRAND.md`. Colors use hex format (#D4913D) here (not HSL like the dashboard).

## File Structure

```
telepathine-web/
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Asymmetric 7/5 split, code terminal
│   │   ├── FeatureCard.astro   # Zig-zag feature cards
│   │   ├── LogoWall.astro      # Text badge integrations
│   │   ├── PricingTable.tsx    # Interactive pricing (React island)
│   │   ├── ApiEndpoint.astro   # API reference component
│   │   ├── Callout.astro       # Info/warning callouts
│   │   ├── CodeBlock.astro     # Syntax-highlighted code
│   │   ├── ConnectorCard.astro # Connector showcase
│   │   └── LangSwitcher.tsx    # i18n language switcher
│   ├── data/
│   │   ├── brand.ts            # Brand constants (tagline, name)
│   │   ├── pricing.ts          # Spark/Ignite/Blaze/Enterprise tiers
│   │   ├── connectors.ts       # 17 connectors data
│   │   ├── api-endpoints.ts    # API reference endpoints
│   │   └── docs-content.ts     # Documentation pages content
│   ├── i18n/
│   │   ├── es.json             # Spanish (default)
│   │   ├── en.json             # English
│   │   ├── types.ts            # Translation types
│   │   ├── ui.ts               # UI string maps
│   │   └── utils.ts            # Translation helpers
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout (nav, footer, fonts)
│   │   └── DocsLayout.astro    # Documentation layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── features.astro      # Features
│   │   ├── pricing.astro       # Pricing
│   │   ├── security.astro      # Security
│   │   ├── architecture.astro # Architecture
│   │   ├── telepathine.astro   # Brand story
│   │   ├── changelog.astro     # Changelog
│   │   ├── api/                # API docs (index, rest, mcp, sdks)
│   │   ├── connectors/         # Connector pages
│   │   ├── docs/               # Documentation
│   │   ├── en/                 # English versions (mirror)
│   │   └── SEO/GEO pages       # what-is-ai-agent-memory, etc.
│   ├── styles/global.css       # CSS custom properties (hex format)
│   └── content.config.ts       # Astro content collections
├── public/
│   └── favicon.svg             # Hex mark favicon
├── .stitch/                    # Stitch design context + assets
├── .github/workflows/deploy.yml # GitHub Pages deployment
├── astro.config.mjs            # site: 'claude-code-swe.github.io', base: 'telepathine-web'
└── package.json
```

## Key Conventions

### Color System
- CSS custom properties in hex format: `--accent: #D4913D;`
- Dark-mode only (no light theme on marketing site)
- Amber primary (#D4913D) for CTAs, accents, focus
- Vine green (#5A8A5E) for success/secondary
- Bark black (#110F0D) for backgrounds

### Typography
- Instrument Serif → headlines (H1, brand mark)
- Geist Sans → body, nav, UI
- JetBrains Mono → code blocks, terminal

### i18n
- Spanish is DEFAULT (root `/` paths)
- English at `/en/` prefix
- Translation files: `src/i18n/es.json`, `src/i18n/en.json`

### API Examples
- Domain: `api.telepathine.ai`
- Env var: `$TELEPATHINE_API_KEY`
- Key placeholder: `your_api_key_here` (never use `am_live_*` prefix pattern)

### Astro JSX Quirk
- Bare `{` in template HTML is parsed as JSX expression
- Use `&#123;`/`&#125;` or wrap in `{'...'}` string expressions

### Deployment
- GitHub Pages via GitHub Actions
- Live: https://claude-code-swe.github.io/telepathine-web/
- Push to `main` triggers deploy

## Build & Run
```bash
cd telepathine-web
pnpm install
pnpm dev          # → http://localhost:4321
pnpm build        # → ~86 pages, ~4s
```

## Where to Search for...

| Need | Location |
|---|---|
| Brand colors/fonts/rules | `/home/artemisai/projects/agent-memory-DEV/brand/tokens.json`, `brand/BRAND.md` |
| Website CSS tokens | `src/styles/global.css` |
| Dashboard CSS tokens | `/home/artemisai/projects/agent-memory-DEV/apps/webgui/src/app/globals.css` |
| Pricing data | `src/data/pricing.ts` |
| Connector data | `src/data/connectors.ts` |
| Brand copy | `src/data/brand.ts`, `/home/artemisai/projects/agent-memory-DEV/brand/BRAND.md` |
| Stitch design assets | `.stitch/designs-v3/` |
| Stitch context docs | `.stitch/CONTEXT.md`, `.stitch/SITE.md`, `.stitch/DESIGN-v2.md` |
| Research/branding docs | `/home/artemisai/projects/agent-memory-DEV/research/` |
| Domain acquisition plan | `PLANNING.md` → Domain Acquisition Plan section |
| Drift verification | `bash /home/artemisai/projects/agent-memory-DEV/brand/verify-drift.sh` |