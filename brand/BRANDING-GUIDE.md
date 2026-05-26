# Telepathine Branding Guide

## Logo Overview

The Telepathine logo is a **hexagonal spiral** — seven nested hexagons in pointy-top orientation, connected by two spiral arms (blue and green) that trace from the outer frame inward. A single amber frame stroke encloses the structure, and node dots mark each vertex.

- **Source**: `sf-g6-05.svg` — final version after 30° CCW rotation (vertex-at-top) and z-order fix
- **Structure**: 7 concentric hexagons (L0–L6), each rotated 30° from the previous, with tapered stroke widths
- **Spiral arms**: Two 1.5-edge arms traced in sky-blue (`#7ed0ff`) and moss-green (`#a0d3a1`), fading from outer to inner
- **Frame**: Outer hexagon with amber-resin stroke (`#D4913D`, 3.6px), 6 parchment node dots (`#E8DCC8`)
- **Core**: Innermost hexagon with amber stroke, 6 sky-blue node dots
- **Fills**: Layered cool-darker fills per ring (`#3b332d` → `#120d08`), with translucent blue/green wedge overlays for spiral arm shading

---

## Logo Variations

| Variant | File | Background | Use Case |
|---------|------|------------|----------|
| **Dark** | `svg/logo-dark.svg` | `#18120d` solid | Default — dark theme pages, social cards, presentations |
| **Transparent** | `svg/logo-transparent.svg` | None (transparent) | Overlay on any background, email signatures, watermarks |
| **Light** | `svg/logo-light.svg` | `#ffffff` solid | Light theme pages, printed materials, light backgrounds |
| **Mono** | `svg/logo-mono.svg` | None (dark strokes) | Single-color print, etching, laser engraving, embossing |
| **Mono-light** | `svg/logo-mono-light.svg` | None (white strokes) | Inverted mono — for dark surfaces, dark mode favicons, etching on dark material |
| **Mark-only** | `svg/logo-mark-only.svg` | None (tight crop) | Compact inline use — nav bars, app icons, avatars |
| **Favicon** | `svg/favicon.svg` | None (outlines only) | Browser favicon — simplified, no fills, just outlines + nodes |

### When to Use Each

- **Dark**: Any dark-themed interface or marketing asset. This is the primary variant.
- **Transparent**: When the logo sits on a non-standard background (photography, gradients, patterns).
- **Light**: Light-mode UI, printed documents on white paper.
- **Mono**: Single-color reproduction — fax, stamps, low-ink printing, SVG animations with custom colors.
- **Mono-light**: Dark backgrounds where the dark variant's fills don't work — embossing, dark merchandise, neon-style designs.
- **Mark-only**: Tight spaces — navbar logo, 32px app icon, avatar, channel icon. No padding or background.
- **Favicon**: Browser tab only. Simplified geometry for 16–32px legibility.

---

## Color Palette

### Surface / Background

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Surface | `#18120d` | `--tp-surface` | Primary dark surface |
| Background-deep | `#110F0D` | `--tp-background-deep` | Deepest background (code blocks, modals) |
| Background-page | `#161311` | `--tp-background-page` | Page background |
| Surface-panel | `#1E1A16` | `--tp-surface-panel` | Panel / card surfaces |
| Surface-card | `#1A1613` | `--tp-surface-card` | Elevated card surfaces |
| Surface-dim | `#18120d` | `--tp-surface-dim` | Dimmed surface |
| Surface-bright | `#3f3831` | `--tp-surface-bright` | Bright surface variant |

### Primary — Amber Resin

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Primary | `#ffb865` | `--tp-primary` | Bright amber — CTAs, active states, links, highlights |
| Primary-container | `#D4913D` | `--tp-primary-container` | Amber resin — logo frame stroke, buttons, borders |
| On-primary | `#482a00` | `--tp-on-primary` | Text on primary backgrounds |

### Secondary — Moss / Vine

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Secondary | `#a0d3a1` | `--tp-secondary` | Green — success, status, checkmarks, green arm |
| Secondary-container | `#5A8A5E` | `--tp-secondary-container` | Vine-green — secondary accents |
| On-secondary | `#073915` | `--tp-on-secondary` | Text on secondary |

### Tertiary — Sky / Wireframe

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Tertiary | `#7ed0ff` | `--tp-tertiary` | Sky blue — wireframe accent, data, blue arm |
| Tertiary-container | `#54a8d5` | `--tp-tertiary-container` | Container variant |
| On-tertiary | `#00344a` | `--tp-on-tertiary` | Text on tertiary |

### Text

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Text-primary | `#E8DCC8` | `--tp-text-primary` | Warm parchment — headings, primary text |
| Text-body | `#E0D4BE` | `--tp-text-body` | Body copy |
| Text-muted | `#A8A090` | `--tp-text-muted` | Muted bark — secondary text, labels, captions |

### Border

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Border-strong | `#514437` | `--tp-border-strong` | Dividers, card borders, input borders |
| Border-subtle | `#373432` | `--tp-border-subtle` | Subtle separators, logo inner hex outlines |

### Interaction / Status

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Hover-overlay | `#221E18` | `--tp-hover-overlay` | Hover state backgrounds |
| Success-light | `#7AAB7E` | `--tp-success-light` | Lighter success accent |

---

## Typography

### Font Stack

| Role | Font | Fallback |
|------|------|----------|
| Headlines | **Newsreader** (or Instrument Serif for taglines) | Georgia, serif |
| Body | **Geist Sans** | Inter, system-ui, sans-serif |
| Code / Labels | **JetBrains Mono** | Fira Code, monospace |

### Scale

| Token | Size | Weight | Line-height | Usage |
|-------|------|--------|-------------|-------|
| `headline-xl` | 3rem | 400 | 1.1 | Hero H1 |
| `headline-lg` | 2rem | 400 | 1.2 | Section H2 |
| `title-md` | 1.25rem | 600 | 1.4 | Feature H3 |
| `body-lg` | 1.125rem | 400 | 1.7 | Large body text |
| `body-md` | 1rem | 400 | 1.7 | Default body |
| `label-mono` | 0.875rem | 500 | 1.5 | Labels, tracking 0.05em |
| `code-sm` | 0.875rem | 400 | 1.5 | Code blocks |

---

## Sizing Rules

### Minimum Sizes

| Context | Minimum | Recommended |
|---------|---------|-------------|
| Favicon | 16×16 | 32×32 |
| App icon | 32×32 | 64×64 |
| Nav bar | 24×24 | 32×32 |
| Print | 12mm | 20mm |
| Social card | 256×256 | 512×512 |

### Clear Space

The logo requires **clear space** equal to the height of one hexagon vertex node (≈5% of logo height) on all sides. No other elements, text, or edges should encroach on this zone.

### Aspect Ratio

The logo is **1:1** (square viewBox). Always maintain the aspect ratio — never stretch or squash.

---

## Background Usage

### Dark Theme (Primary)

- Use **logo-dark.svg** on surfaces with `#18120d` background
- The logo's built-in background rect matches the default surface — seamless on dark pages
- For code blocks (`#110F0D`), use **logo-dark.svg** — the slight difference is acceptable

### Light Theme (Secondary)

- Use **logo-light.svg** on `#ffffff` backgrounds
- Colors are inverted: fills become warm tints, strokes become dark variants

### Custom / Gradient Backgrounds

- Use **logo-transparent.svg** — no background rect, works over any surface
- Ensure sufficient contrast between logo strokes and background

---

## Favicon & Mobile Icon Guidelines

### Favicon

- **SVG favicon**: `svg/favicon.svg` — simplified (no fills, outlines + nodes only)
- **PNG fallbacks**: `favicon/favicon-16.png`, `favicon/favicon-32.png`, `favicon/favicon-48.png`
- **ICO**: `favicon/favicon.ico` — multi-size (16+32+48)
- At 16px, the simplified outline version is more legible than the full logo

### Apple Touch Icon

- `favicon/apple-touch-icon.png` — 180×180 with rounded-rect dark background (`#18120d`)
- iOS will add its own rounded mask; the rounded-rect bg ensures clean corners

### Android / PWA

- `favicon/android-chrome-192.png` — 192×192
- `favicon/android-chrome-512.png` — 512×512
- Both use the dark variant with solid `#18120d` background

---

## Do's and Don'ts

### ✅ Do

- Use the dark variant as the default
- Maintain the 1:1 aspect ratio
- Use transparent variant on non-standard backgrounds
- Use the mark-only variant in tight spaces (navbars, avatars)
- Respect clear space (≥5% of logo height)
- Use the favicon SVG for browser tabs (optimized for small sizes)
- Pair with Newsreader/Geist/JetBrains Mono typography

### ❌ Don't

- **Never** stretch, squash, or rotate the logo
- **Never** recolor individual arms or elements independently
- **Never** place the dark logo on a dark background without a border or contrast element
- **Never** use the light variant on dark backgrounds (or vice versa)
- **Never** add drop shadows, glows (beyond the built-in glow filter), or 3D effects
- **Never** crop the logo — use the mark-only variant instead
- **Never** change the amber frame stroke color
- **Never** use the logo at sizes below 16×16 px
- **Never** place the logo over busy photography without a scrim or background
- **Never** rearrange or remove individual hexagon layers

---

## File Reference

### SVG Directory (`svg/`)

| File | Description |
|------|-------------|
| `logo-dark.svg` | Dark theme — full logo with `#18120d` background rect |
| `logo-transparent.svg` | No background — transparent, for overlay use |
| `logo-light.svg` | Light theme — `#ffffff` background, inverted color scheme |
| `logo-mono.svg` | Monochrome dark — `#1a1a1a` strokes, no fills |
| `logo-mono-light.svg` | Monochrome light — `#ffffff` strokes, transparent bg |
| `logo-mark-only.svg` | Hex mark only — no background, tight viewBox |
| `favicon.svg` | Simplified favicon — outlines + nodes only, no fills |

### PNG Directory (`png/`)

Multi-resolution PNG exports for each variant. Named as `{variant}-{size}.png`.

### Favicon Directory (`favicon/`)

| File | Size | Description |
|------|------|-------------|
| `favicon.ico` | 16+32+48 | Multi-size ICO for legacy browsers |
| `favicon-16.png` | 16×16 | Smallest PNG favicon |
| `favicon-32.png` | 32×32 | Standard PNG favicon |
| `favicon-48.png` | 48×48 | Windows tile |
| `apple-touch-icon.png` | 180×180 | iOS home screen with rounded rect bg |
| `android-chrome-192.png` | 192×192 | Android / PWA |
| `android-chrome-512.png` | 512×512 | Android / PWA hi-res |

### Manifest Directory (`manifest/`)

| File | Description |
|------|-------------|
| `site.webmanifest` | PWA manifest with icon references |
| `browserconfig.xml` | Microsoft tile configuration |
| `head-snippet.html` | Copy-paste `<head>` snippet for favicon/meta tags |

### Root Files

| File | Description |
|------|-------------|
| `color-palette.svg` | Visual color swatch grid with hex labels |
| `color-palette.css` | CSS custom properties for all design system colors |
| `BRANDING-GUIDE.md` | This document |

---

*Generated from `export-brand-pack.mjs` — Telepathine Design System v1.0*
