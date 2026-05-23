# Stitch MCP — Lessons Learned (Failed Attempts)

## What Went Wrong

### 1. Design System Contamination (PRIMARY CAUSE)
The first design system was named "Ancient Intelligence" and contained 12+ organic/mycelial references in its `styleGuidelines`. Every subsequent generation inherited this bias, producing mushroom images, "mycelial-bg" CSS classes, and "Spore/Hive/Swarm" pricing labels — regardless of corrective prompts.

**Lesson**: The design system `styleGuidelines` is the SINGLE MOST POWERFUL context signal. It overrides prompt text. If it says "Wood Wide Web" and "mycelial warmth", you get mushrooms. Period.

### 2. Negation Bias in Prompts
Writing "NO mushrooms, NO nature, NO organic shapes" in prompts actually HURTS because:
- The model still processes the banned concepts
- Long prompts with negation lists timeout
- Short prompts can't list enough negations

**Lesson**: Describe what you WANT, not what you don't want. "Code terminals, wireframe diagrams, data tables" → better than "no mushrooms".

### 3. Image Reuse from Project Context
Once organic images (mycelium hero, bark texture) were generated in the project, Stitch reused them in later generations automatically. Even new prompts with different instructions got the same images inserted.

**Lesson**: A contaminated project produces contaminated output. Start fresh.

### 4. API Failures
- `stitch_create_design_system_from_design_md` → "invalid argument" (tried 3+ parameter shapes)
- `stitch_update_design_system` → same error
- `stitch_generate_screen_from_text` with GEMINI_3_1_PRO → timeout every time
- `stitch_edit_screens` → timeout on complex edits

**Lesson**: FLASH is the only reliable model for generation. Design system mutation APIs are unreliable. Don't waste turns on broken endpoints.

### 5. Overly Long Prompts
The REDO-BRIEF.md prompt was ~3000 words. It timed out. Stitch works best with focused, structured prompts under ~500 words.

**Lesson**: Brevity wins. Use DESIGN.md for deep context, keep generation prompts structural.

## What Worked

1. **Hex logo generation** (`733664e9`) — Clean, amber, geometric ✓
2. **DESIGN.md upload** — The upload API works; the screen was created ✓
3. **FLASH model** — Reliable for full-screen generation (doesn't timeout) ✓
4. **Color tokens** — When applied to layout structure, they look correct ✓
5. **Font specifications** — Instrument Serif + Geist + JetBrains Mono resolved correctly ✓

## Correct Process (v2) — VERIFIED ✅

1. **Create fresh project** — no inherited bias from old screens/images ✅
2. **Upload DESIGN.md** — developer-first design system spec ✅
3. **Let Stitch auto-create design systems** — it parses DESIGN.md and generates `styleGuidelines` automatically ✅ (the `create_design_system_from_design_md` API is BROKEN, but the upload triggers auto-creation)
4. **Reference design system by ID** in generation calls ✅
5. **Keep prompts under ~200 words** — longer ones timeout ✅
6. **Describe what you WANT** — code terminals, wireframes, data tables — NOT negation lists ✅
7. **Wait 60-90s after timeout** — Stitch completes async ✅

### Key API Findings
- `stitch_upload_design_md` ✅ WORKS — and auto-creates design systems!
- `stitch_create_design_system_from_design_md` ❌ BROKEN — "invalid argument" every time
- `stitch_create_design_system` ❌ BROKEN — "invalid argument" regardless of schema shape
- `stitch_update_design_system` ❌ BROKEN — same error
- `stitch_generate_screen_from_text` (FLASH) ⚠️ WORKS but always returns timeout -32001; completes async in 60-90s
- `stitch_generate_screen_from_text` (3.1 Pro) ❌ BROKEN — timeout, no async completion
- `stitch_list_screens` ✅ WORKS — use to poll for async results
- `stitch_list_design_systems` ✅ WORKS — reveals auto-created design systems

### New Project Results (ID: 7117574907154323752)
- Design system `e4f26659` ("Telepathine") — developer-first, zero organic language
- Homepage B (`5741db76`) — 2560×6868, 3 matches only (all legit "swarm" AI terms)
- Wireframe network diagram (`cc084ac5`) — clean geometric topology asset
- Network topology SVG (`7b26cc7d`) — 600×400 vector asset

## The 90/10 Rule for Stitch

The 10% warmth lives ONLY in:
- Amber accent color (#D4913D)
- Warm dark backgrounds (#110F0D, #161311)
- Instrument Serif for headlines (literary but sparing)
- Brand tagline: "When agents share memory, they share mind"

Everything else is 100% developer tool: code terminals, data tables, wireframe topology, network diagrams, API response payloads.

---
*Created: 2026-05-23*
