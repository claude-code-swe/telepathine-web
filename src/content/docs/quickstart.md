---
title: Quick Start
description: Get Telepathine.ai running in 5 minutes. Install a connector, set your API key, and verify it works with curl examples.
---

## Get running in 5 minutes

### 1. Get an API key

Sign up at Telepathine.ai and create an API key from your dashboard.

```bash
export TELEPATHINE_API_KEY=your_api_key_here
```

### 2. Install a connector

Pick the connector for your agent platform:

```bash
# Claude Code
npx @ai-memory/plugin-claude install

# Cursor
npx @ai-memory/plugin-cursor install

# Gemini CLI
npx @ai-memory/plugin-gemini install

# Or use the MCP server for any MCP-compatible client
npx @ai-memory/mcp-server
```

### 3. Verify it works

```bash
# Health check
curl -s https://api.telepathine.ai/v1/health \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"

# Create a session
curl -s -X POST https://api.telepathine.ai/v1/sessions \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"project":"my-project"}'

# Record an observation
curl -s -X POST https://api.telepathine.ai/v1/sessions/SESSION_ID/observations \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"type":"decision","text":"Using PostgreSQL","title":"Database choice"}'

# Search
curl -s "https://api.telepathine.ai/v1/search?q=database&mode=hybrid" \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"
```

### 4. Start a new session — context is injected automatically

Your connector handles context injection at session start. Your agent will see relevant past observations, decisions, and summaries.

### What's next?

- [Context Injection](/docs/context-injection) — understand how context gets to your agent
- [Hybrid Search](/docs/search) — explore search modes
- [Sessions](/docs/sessions) — learn the session lifecycle
- [MCP Server](/api/mcp) — 16 tools for MCP clients
