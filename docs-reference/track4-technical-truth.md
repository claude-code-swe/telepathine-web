# Telepathine.ai — Technical Truth Brief

Track 4: Product capabilities from codebase
Date: 2026-05-22

---

## Core Architecture

**Worker** (Fastify, `/v1/`): 11 routes. Flagship: `GET /v1/context/inject` — progressive disclosure (header → timeline → summary → footer). Also: search, observations, sessions, events (SSE), workspaces, projects, health. All tenant-isolated via RLS.

**Telepathine Bus** (SSE, port 47777): Agent registers (name, project, channels, visibility: silent/whisper/project/orchestrator). Posts thoughts → bus broadcasts. Hop counter (max 5), rate limiting (10/10s), heartbeat liveness. **Memory Bridge** persists thoughts as observations. **Mesh Relay** connects bus instances.

**TelepathClient** SDK: Register, open SSE streams, send thoughts. Gracefully degrades when bus unavailable.

**Config** (`.brain/`): memory.yaml + telepath.yaml. Three layers: Global → Project → Env vars. Git remote auto-derives project name.

---

## Memory Pipeline

**Observation**: text, type, title, facts, concepts, narrative, files, embedding, FTS vector. Secrets auto-redacted.

**Generator**: Queue → LLM batch (BYOK) → XML parse → Zod validate → write DB with embeddings.

**Morpheus** (Dream Compression): Session → structured summary (investigated/learned/completed/next_steps). 50K char budget. Summaries = highest-signal future context.

**Context Injection**: Ranked (with query: 35% type + 20% signal + 15% recency + 30% semantic; without: 50/25/25). Deduped. Decisions > findings > file reads.

**Compaction Recovery**: Identity snapshot before context compression → recovered on next turn. Amnesia-proof.

---

## 18 Plugins

Claude, Cursor, Gemini, Windsurf, Copilot CLI, VS Code Copilot, JetBrains Copilot, Codex, Kiro, KiloCode, OpenMP, OpenCode, Qwen Code, Zed, pi, Hermes, Antigravity + more. All via adapter-kit (10 hook types, platform adapters, stdin/stdout JSON).

---

## Brand Mapping

| Technical | Metaphor |
|-----------|----------|
| Memory persistence | "Your memory outlives your agent" |
| Bus communication | "Agents talk mind-to-mind" |
| Morpheus summarization | "Dream compression" |
| Context injection | "The right memory at the right moment" |
| Project isolation | "Each project has its own mind" |
| Hybrid search (FTS 60% + vector 40%) | "Search that understands meaning and wording" |
| 18 plugins | "One memory, every agent" |
| Compaction recovery | "Amnesia-proof identity" |
| Mesh relay | "Thoughts without borders" |

**One sentence**: Telepathine is an active memory system that captures, enriches, delivers, isolates, and connects — so no agent starts from zero and no insight is lost.
