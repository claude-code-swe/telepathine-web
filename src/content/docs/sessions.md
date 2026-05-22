---
title: Sessions
description: 'Session lifecycle: create, record observations, summarize, and complete. Workspace context, batch observations, and session continuity.'
---

## Session lifecycle

```
1. POST /v1/sessions          → Create session
2. POST /v1/sessions/:id/observations → Record observations
3. POST /v1/sessions/:id/summarize    → Trigger summarization
4. POST /v1/sessions/:id/complete     → Mark completed
```

### Creating a session

```bash
curl -s -X POST https://api.telepathine.ai/v1/sessions \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "project": "my-project",
    "userPrompt": "Refactor the auth module",
    "workspaceContext": {
      "git": { "branch": "feature/auth", "isDirty": true },
      "host": { "hostname": "devbox" },
      "agent": { "id": "claude-code" }
    }
  }'
```

### Workspace context

Sessions can include workspace context — git branch, hostname, and agent identity. This context is inherited by observations and used by the workspaces endpoint.

### Batch observations

Record up to 50 observations in a single request:

```bash
curl -s -X POST https://api.telepathine.ai/v1/sessions/SESSION_ID/observations/batch \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "observations": [
      {"type": "decision", "text": "Use JWT", "title": "Auth approach"},
      {"type": "change", "text": "Modified auth.ts", "title": "Auth refactor"}
    ]
  }'
```
