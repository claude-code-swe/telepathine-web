---
title: Context Injection
description: How progressive disclosure delivers the right context to your AI agent. Formatted, compressed context injection at session start.
---

## How your agent gets the right context

Context injection uses **progressive disclosure** — formatted, compressed context that gives your agent exactly what it needs.

### The format

```
# [project-name] recent context

## Header
Project stats, legend, scope information

## Timeline
Compact observations grouped by day with session arcs

## Summary
Last session summary if available

## Footer
Instructions for fetching more details
```

### How it works

1. **Session starts** → connector calls `GET /v1/context/inject?projects=my-project`
2. **Observations are ranked** → by relevance score, recency, and type
3. **Results are deduplicated** → overlapping observations are merged
4. **Context is formatted** → compressed into progressive disclosure format
5. **Agent receives context** → injected into system prompt or first message

### Configuration

```bash
curl -s "https://api.telepathine.ai/v1/context/inject?projects=my-project&limit=20" \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"
```

### Project visibility

- **Private** — only visible to the owning tenant
- **Tenant** — visible to all members of the tenant
- **Shared** — explicitly shared with specific tenants

See [Project Isolation](/docs/project-isolation) for details.
