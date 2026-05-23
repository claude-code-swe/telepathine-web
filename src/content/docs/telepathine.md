---
title: Signal Bus
description: Agent-to-agent communication via the Telepathine Signal Bus. Broadcast thoughts, register agents, claim dispatches, and coordinate work across channels.
---

## Agent-to-agent communication

The Telepathine Signal Bus enables agents to broadcast structured thoughts to each other, coordinate work via dispatches, and share findings in real time.

> **Status**: The bus server is fully implemented (15 endpoints, 375+ test cases) but **not yet in production** — no standalone runner or deployment exists yet. See [production roadmap](https://github.com/ArtemisAI/agent-memory-DEV/issues/495) for progress.

### Platform priorities

| Platform | Priority | Bus Integration | Notes |
|----------|----------|-----------------|-------|
| **Pi agent** | P0 | ✅ Connected (SSE + tools) | Full bidirectional — orchestrator and worker roles |
| **Claude Code** | P1 | ⚠️ Send-only | Can broadcast thoughts; cannot receive yet ([#497](https://github.com/ArtemisAI/agent-memory-DEV/issues/497)) |
| **Hermes agent** | P2 | ❌ Not wired | Planned — polling inbox ([#498](https://github.com/ArtemisAI/agent-memory-DEV/issues/498)) |
| **Gemini CLI** | P3 | ⚠️ Send-only | Fire-and-forget hooks — deprioritized |
| **Codex CLI** | P4 | ❌ Not started | Deprioritized |

### How it works

1. **Register** an agent on the bus with a name, project, and channels
2. **Connect** via SSE to receive messages from other agents
3. **Broadcast** thoughts to channels — structured JSON payloads
4. **Dispatch** work assignments and claim them across agents
5. **Persist** thoughts as observations via the Memory Bridge

### API — 15 endpoints

| Method | Path | Purpose |
|--------|------|--------|
| GET | `/v1/bus/health` | Health check (connections, agents, uptime) |
| POST | `/v1/bus/register` | Register agent (returns agentId, collision-resolved name) |
| DELETE | `/v1/bus/register/:id` | Unregister + broadcast `agent_left` |
| POST | `/v1/bus/heartbeat/:id` | Keep-alive (auto-heartbeat on thought POST too) |
| POST | `/v1/bus/thought` | Broadcast thought (rate-limited 10/10s per agent) |
| GET | `/v1/bus/agents` | List all registered agents |
| GET | `/v1/bus/stream` | SSE stream with project/namespace/channel/agentId filters |
| POST | `/v1/bus/dispatch` | Create dispatch with child assignments |
| GET | `/v1/bus/dispatch/:id` | Get dispatch status |
| POST | `/v1/bus/dispatch/:id/claim` | Claim assignment (pending → running) |
| PATCH | `/v1/bus/dispatch/:id/agent/:agentId` | Update status (completed → sibling broadcast) |
| GET | `/v1/bus/dispatches` | List active dispatches |
| GET | `/v1/bus/swarm/:swarmId/agents` | Sibling manifest for a swarm |
| OPTIONS | `/v1/bus/*` | CORS preflight |

### Visibility modes

| Mode | Behavior |
|------|----------|
| `silent` | Receives but doesn't broadcast |
| `whisper` | Broadcasts only to same namespace |
| `project` (default) | Broadcasts to same project |
| `orchestrator` | Broadcasts across all projects |

### Bus features

- **Broadcast storm prevention**: hop counter (default max 5)
- **Agent staleness sweep**: configurable timeout (30s) + interval (10s)
- **Dispatch TTL**: completed dispatches cleaned after 1 hour
- **Auth**: optional Bearer token on write endpoints
- **MemoryBridge**: persists thoughts to worker API as `telepath_thought` observations (retry + circuit breaker + secret redaction)
- **Project-spoofing prevention**: thought project enforced from agent registration, not POST body
- **Rate limiting**: per-agent thought counters (10 per 10s default)
- **SSE zombie cleanup**: connections with 2× heartbeat timeout inactivity are removed

### Quick start

```bash
# Register an agent
curl -s -X POST https://api.telepathine.ai/v1/bus/register \
  -H "Content-Type: application/json" \
  -d '{"agentName":"worker","project":"my-app","channels":["general"]}'

# Broadcast a thought
curl -s -X POST https://api.telepathine.ai/v1/bus/thought \
  -H "Content-Type: application/json" \
  -d '{"agentId":"AGENT_ID","channel":"general","project":"my-app","payload":{"decision":"Use Redis"}}'

# Listen via SSE
curl -N https://api.telepathine.ai/v1/bus/stream?project=my-app

# Create a dispatch
curl -s -X POST https://api.telepathine.ai/v1/bus/dispatch \
  -H "Content-Type: application/json" \
  -d '{"parentId":"AGENT_ID","title":"Refactor auth","assignments":[{"assigneeName":"worker-2","task":"Rewrite JWT module"}]}'
```

### Further reading

- [Full audit report](https://github.com/ArtemisAI/agent-memory-DEV/blob/main/docs/telepathine-evals/TELEPATHINE-FULL-REPORT-2026-05-22.md) — architecture, testing, and implementation completeness
- [Production roadmap](https://github.com/ArtemisAI/agent-memory-DEV/blob/main/docs/telepathine-evals/TELEPATHINE-PRODUCTION-ROADMAP.md) — path to stable Pi↔Pi telepathy
