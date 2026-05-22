---
title: Project Isolation
description: Multi-tenant isolation with row-level security, API key scoping, project visibility controls, and data isolation guarantees.
---

## Multi-tenant isolation model

### Row-level security

All data access goes through row-level security (RLS). Every API request sets the tenant context, and the database automatically filters rows to only those belonging to your account.

### API key scoping

| Scope | Access |
|-------|--------|
| `read` | Read observations, search, get context |
| `write` | Create sessions, record observations |
| `admin` | Manage project configs, API keys |

### Project visibility

| Visibility | Who can see |
|-----------|------------|
| `private` | Only the creating tenant |
| `tenant` | All members of the same tenant |
| `shared` | Explicitly specified tenants |

### Project inheritance

Projects can inherit context from other projects — useful for monorepo setups:

```bash
curl -s -X POST https://api.telepathine.ai/v1/projects/config \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"project":"auth-service","visibility":"tenant","inheritFrom":["platform-core"]}'
```

### Data isolation guarantees

- Your observations are never visible to other tenants
- API keys are hashed before storage
- AI provider keys are encrypted at rest
- Search and context injection always respect project scoping
