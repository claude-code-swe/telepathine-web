# Deployment Guide — Telepathine Web

## Overview

The docs site deploys as a static site to **Cloudflare Pages**. Every push to `main` that touches `telepathine-web/` triggers an automatic rebuild and deploy via GitHub Actions.

## Prerequisites

1. A Cloudflare account with Pages access
2. GitHub repository secrets configured:
   - `CLOUDFLARE_API_TOKEN` — Create at [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) with `Cloudflare Pages:Edit` permission
   - `CLOUDFLARE_ACCOUNT_ID` — Found in Cloudflare dashboard URL or Workers & Pages overview

## Setup Steps

### 1. Create Cloudflare Pages Project

**Option A: GitHub Integration (recommended)**

1. Go to Cloudflare Dashboard → Workers & Pages → Create
2. Select "Connect to Git"
3. Choose `ArtemisAI/agent-memory-DEV`
4. Configure:
   - **Production branch**: `main`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `telepathine-web`
5. Add environment variable: `NODE_VERSION` = `22`

**Option B: Direct Upload (manual)**

```bash
cd telepathine-web
pnpm build
npx wrangler pages deploy dist --project-name=agent-memory-docs
```

### 2. Add GitHub Secrets

In the GitHub repo → Settings → Secrets and variables → Actions:

```
CLOUDFLARE_API_TOKEN    = <your-token>
CLOUDFLARE_ACCOUNT_ID   = <your-account-id>
```

The GitHub Actions workflow (`.github/workflows/deploy-docs.yml`) will use these on every push to `main`.

### 3. Custom Domain

1. In Cloudflare Pages → agent-memory-docs → Custom domains
2. Add `docs.agent-memory.dev`
3. Cloudflare will auto-configure DNS (if the domain is in the same Cloudflare zone)
4. If using a different DNS provider, add a CNAME record:
   ```
   docs.agent-memory.dev → agent-memory-docs.pages.dev
   ```

### 4. DNS Configuration

If `agent-memory.dev` is already on Cloudflare (same zone as `ai-automate.me`):

| Type  | Name | Content                     | Proxy |
| ----- | ---- | --------------------------- | ----- |
| CNAME | docs | agent-memory-docs.pages.dev | Yes   |

### 5. Verify Deployment

```bash
# Check the site is live
curl -s -o /dev/null -w "%{http_code}" https://docs.agent-memory.dev/
# Should return: 200

# Check security headers
curl -sI https://docs.agent-memory.dev/ | grep -i "x-frame-options"
# Should return: x-frame-options: DENY

# Check robots.txt
curl -s https://docs.agent-memory.dev/robots.txt

# Check sitemap
curl -s https://docs.agent-memory.dev/sitemap-index.xml

# Check OG image
curl -s -o /dev/null -w "%{http_code}" https://docs.agent-memory.dev/og-image.svg
# Should return: 200
```

## How the Deploy Pipeline Works

```
Push to main (telepathine-web/ changes)
  → GitHub Actions triggers deploy-docs.yml
  → pnpm install + pnpm build
  → cloudflare/pages-action deploys dist/ to Cloudflare Pages
  → Site live at docs.agent-memory.dev (CDN cached in ~30s)
```

## Cache Behavior

| Path             | Cache Policy                       |
| ---------------- | ---------------------------------- |
| `/*.html`        | 1 hour browser, 24 hours CDN       |
| `/_astro/*`      | 1 year, immutable (content-hashed) |
| `/sitemap-*.xml` | Served as `application/xml`        |
| Everything else  | Default Cloudflare Pages caching   |

## Security Headers

All pages ship with:

- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

These are configured in `public/_headers` and applied by Cloudflare Pages automatically.

## Redirects

| From    | To                 | Type |
| ------- | ------------------ | ---- |
| `/api`  | `/api/rest`        | 301  |
| `/docs` | `/docs/quickstart` | 302  |

Configured in `public/_redirects`.

## Troubleshooting

### Build fails locally

```bash
cd telepathine-web
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Cloudflare Pages not updating

- Check GitHub Actions tab for deploy status
- Cloudflare Pages may take 1-2 minutes to propagate globally
- Hard refresh with `Ctrl+Shift+R`

### Custom domain not resolving

- Verify CNAME record in Cloudflare DNS
- Check Cloudflare Pages → Custom domains for validation status
- May take up to 24 hours for DNS propagation on new domains

### OG image not showing in social previews

- Facebook: Use [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Twitter: Use [Card Validator](https://cards-dev.twitter.com/validator)
- LinkedIn: Use [Post Inspector](https://www.linkedin.com/post-inspector/)
