# Market Positioning Research Brief

Track 5: Competitive Landscape & Market Positioning
Date: 2026-05-22

---

## Competitive Landscape

**Anthropic Claude Memory**: Daily synthesis + file-based API tool. Lock-in: Claude-only, no portable export, admin can delete all memory.

**OpenAI/ChatGPT Memory**: Saved memories (~1,200 words cap) + invisible dossier. Lock-in: no portability, training by default, context pollution amplifies lock-in. Simon Willison showed ChatGPT builds uncontrolled detailed profiles.

**Google Gemini Memory Bank**: Enterprise-only, Vertex AI, Gemini-only extraction, GCP-dependent.

**mem0** (51K stars, $10M+): Market leader. +26% accuracy over OpenAI Memory. User-scoped, not agent-scoped. Defaults to GPT-4.1-nano. No temporal knowledge graph.

**Zep AI**: Temporal knowledge graph. Up to 18.5% accuracy improvement. Python-first, complex for simple use cases.

**AgentKeeper** (~115 stars): SQLite hobbyist project. Not a competitor. Validates concept.

---

## Positioning Map

```
                Engine-Agnostic
                     ▲
      mem0 ●        │        ● TELEPATHINE.AI
  User-Centric       │          Agent-Centric
  ◄──────────────────┼──────────────────────►
   ● ChatGPT         │           ● Zep
   ● Claude Memory    │
                Vendor-Locked ▼
```

**Only player in engine-agnostic + agent-centric quadrant.** Structurally defensible.

---

## Why Engine-Agnostic Wins

1. Model commoditization — use best model per task
2. Multi-agent orchestration — shared memory across models
3. Cost optimization — route to cheapest capable model
4. Future-proofing — decouple from vendor roadmap
5. Regulatory alignment — EU AI Act, GDPR demand portability

---

## Market Sizing

Agent tooling: $5.2B (2025) → $28.5B (2030), CAGR ~33%.
Agent memory TAM: ~$800M-$1.2B by 2028.
Memory = infrastructure, not feature. Infrastructure becomes platform.

---

## Messaging

**Resonates**: "Your memory, your models" / "One memory layer, every AI engine" / "Stop re-explaining yourself to every AI" / "Memory that survives the session"

**Avoid**: ~~"Telepathic AI"~~ ~~"Cognitive persistence"~~ ~~"Infinite memory"~~

**Brand risks**: Psychedelic association (lead with etymology), pronunciation (guide: tell-uh-PATH-een), doesn't self-explain (always pair with tagline).

**Window**: 12-18 months before vendors add "good enough" cross-engine features.

---

_Sources: Anthropic, OpenAI, Google docs; GitHub (mem0, Zep, AgentKeeper); analyst reports._
