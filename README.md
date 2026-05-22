# Telepathine Web

Public-facing documentation and marketing website for **Agent Memory** — a hosted memory backend for AI agents.

## Tech Stack

- **Astro 5.x** — Static site generation with island architecture
- **Tailwind CSS 4.x** — Utility-first styling
- **React 19** — Interactive islands (pricing toggle)
- **pnpm** — Package manager

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build static site
pnpm build

# Preview build
pnpm preview
```

## Project Structure

```
src/
├── layouts/         # Page layouts (BaseLayout, DocsLayout)
├── components/      # Reusable components
├── data/            # Typed data files (connectors, api-endpoints, pricing)
├── pages/           # All route pages
│   ├── index.astro  # Landing page
│   ├── features.astro
│   ├── architecture.astro
│   ├── connectors/  # Connector pages (index + [slug])
│   ├── api/         # API reference (index, rest, mcp, sdks)
│   ├── docs/        # Documentation (index + [slug])
│   ├── pricing.astro
│   └── changelog.astro
└── styles/          # Global CSS
```

## SEO

Every page includes:

- Unique `<title>` and `<meta name="description">`
- Open Graph meta tags (og:title, og:description, og:image, og:url)
- Twitter Card meta tags (summary_large_image)
- Canonical URL (`<link rel="canonical">`)
- `<meta name="robots" content="index, follow">`
- JSON-LD structured data:
  - Landing: SoftwareApplication
  - Pricing: AggregateOffer + Offer
  - Connectors: ItemList
  - Docs: TechArticle

Site URL: `https://docs.agent-memory.dev`

## Data-Driven Content

All connector, API endpoint, and pricing data are stored as typed TypeScript files in `src/data/`:

- `connectors.ts` — 17 connector metadata entries
- `api-endpoints.ts` — 20 API endpoint definitions
- `pricing.ts` — Plan tiers and feature comparison

Edit these data files to update content. Pages pull from them automatically.

## Design

- **Dark mode default** (bg-gray-950, text-gray-100)
- **Primary accent**: Emerald (#10B981)
- **Secondary accent**: Violet (#8B5CF6)
- **Font**: Inter / system font stack
- **Style**: Developer-first, minimal, like Vercel or Supabase docs

## Rules

1. **Never expose internal details** — no ports, database schemas, Docker, Supabase, admin endpoints
2. **API-first narrative** — everything is "use our API", not "deploy our stack"
3. **Code examples everywhere** — curl, TypeScript SDK, Python SDK
4. **Data-driven** — connector and API data comes from typed data files

## Deployment

Deployed to **Cloudflare Pages** with auto-deploy on push to `main`.

See [DEPLOY.md](./DEPLOY.md) for full setup instructions.

```bash
# Build and preview locally
pnpm build
pnpm preview

# Manual deploy (if needed)
npx wrangler pages deploy dist --project-name=agent-memory-docs
```

### GitHub Secrets Required

| Secret                  | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API token with Pages:Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID                           |

## License

Proprietary — ArtemisAI
