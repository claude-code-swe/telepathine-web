---
title: Hybrid Search
description: 'Hybrid search combining full-text and semantic vector similarity. Three modes: hybrid, FTS-only, and vector-only with scoped queries.'
---

## Three search modes, one endpoint

### Search modes

| Mode | Description | Best for |
|------|-------------|----------|
| `hybrid` (default) | Combines FTS + vector, weighted 60/40 | General purpose |
| `fts` | Full-text search using tsvector indexes | Exact keywords |
| `vector` | Semantic similarity using cosine distance | Conceptual matches |

### Examples

```bash
# Hybrid search (default)
curl -s "https://api.telepathine.ai/v1/search?q=auth+decision&mode=hybrid" \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"

# FTS-only
curl -s "https://api.telepathine.ai/v1/search?q=PostgreSQL&mode=fts" \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"

# Vector search
curl -s "https://api.telepathine.ai/v1/search?q=how+did+we+handle+auth&mode=vector" \
  -H "Authorization: Bearer $TELEPATHINE_API_KEY"
```

### Specialized endpoints

- `GET /v1/timeline` — Chronological feed
- `GET /v1/decisions` — All decision-type observations
- `GET /v1/changes` — All change-type observations
