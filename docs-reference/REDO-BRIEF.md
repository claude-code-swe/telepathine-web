# EXISTING SITE REDESIGN BRIEF

Reference: homepage at https://claude-code-swe.github.io/telepathine-web/

---

## CURRENT STATE (what exists)

**Hero**: Centered layout. Title: "Your memory should outlive your agent". Gradient orb background. Tabbed install box below. CTA buttons centered.

**Logo wall**: "Works with" + 10 pill badges (Claude, Cursor, Gemini, Windsurf, Copilot, Hermes, Pi, Codex, Zed, Kiro)

**Features**: "Capture. Search. Relay." heading. Three equal columns with emoji icons:
- 🧠 Persistent Memory — text-desc
- 🔍 Hybrid Search — text-desc
- 📡 Signal Bus — text-desc

**How it works** (2-col: steps left, code right):
1. Install connector
2. Set API key  
3. Your agent remembers
Code block shows POST /v1/sessions/, POST /v1/observations, GET /v1/context/inject workflow

**CTA**: "Start building in 5 minutes" / Quick Start Guide / API Reference

**Colors (current CSS)**: --bg-deep: #0C0F13, --text-muted is cool grey-like, --accent uses teal (#0AE5A0 in SVG logo), gradient orbs

---

## TARGET STATE (what to redesign into)

### Philosophy
90% developer tool. 10% ambient warmth. Signal Bus is the HERO feature.

### Critical Changes
1. **Hero goes asymmetric LEFT-aligned** — NOT centered. Text left, visual right.
2. **Signal Bus becomes the PRIMARY/hero feature** — "Relay. Remember. Reason." (Relay first)
3. **Logo still uses teal (#0AE5A0)** — must become amber (#D4913D)
4. **Gradient orbs in hero** — remove, replace with subtle hex network mesh pattern
5. **3 equal feature columns** → asymmetric zig-zag (code blocks / diagrams as visuals)
6. **Feature icons (emojis)** → Code terminal visuals showing the feature in action
7. **"How it works"** → keep but elevate the code block to a proper terminal UI
8. **Background**: Warm bark (#110F0D) not cool charcoal (#0C0F13)

### Exact Copy to Preserve

**Hero:**
- H1: "When agents share memory, they share mind." (CHANGED from "Your memory should outlive your agent")
- Subtitle: "The channel layer for AI agents. Mind-to-mind memory sharing across every engine."

**Features (reordered — signal bus FIRST):**
- H2: "Relay. Remember. Reason."
- Feature 1 (PRIMARY): "Signal Bus" — "Agents broadcast observations on channels. Coordinate swarms, share findings, stay in sync across any engine." (with code: `telepathine.relay({ channel: "swarm-alpha", payload: data })`)
- Feature 2: "Persistent Memory" — "Every session creates observations. Every new session injects relevant context. Your agent builds institutional knowledge over time."
- Feature 3: "Hybrid Search" — "Combine full-text and semantic vector search. Scoped to your project. Keyword or meaning."

**How it works:** Keep steps 1-3, but change step 3 to: "Open the channel" (not "Your agent remembers")

### Visual Requirements

- **NO centered sections** — all left-aligned or asymmetric
- **NO gradient orbs or floating blobs** — hex grid background pattern only
- **NO emoji icons for features** — use code terminals or wireframe diagrams
- **NO nature/organic imagery** — wireframe mesh, network topology, data flows
- **Code terminal as hero visual** — not an illustration. Real terminal with install commands
- **Asymmetric zig-zag features**: Text+Code left / Diagram right, then reverse
- **Warm dark backgrounds** (#110F0D, #161311) — no cool greys
- **Amber primary** (#D4913D) — CTA buttons, links, accents
- **Vine green** (#5A8A5E) — status indicators, success states
- **Instrument Serif** for headlines, **Geist Sans** for body, **JetBrains Mono** for code

### CSS Tokens

```
--bark-black: #110F0D
--forest-soil: #161311
--warm-panel: #1E1A16
--moss-card: #1A1613
--amber-resin: #D4913D
--vine-green: #5A8A5E
--warm-parchment: #E8DCC8
--muted-bark: #A8A090
```

### Things That Must NOT Appear
- mycelium, mushrooms, fungi
- forest photography, bark texture photos
- organic vines, tendrils, roots, leaves
- resin pools, sap, amber droplets
- twilight lighting, dappled light
- psychedelic, spiritual, mystical imagery
- gradient orbs, floating blobs
- centered geometric patterns (mandala, chakras)
- anything ayahuasca, DMT, or ceremony related
- teal (#0AE5A0) or bioluminescent colors
- cool grey backgrounds (#0C0F13 style)
