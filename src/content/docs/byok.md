---
title: Bring Your Own Key
description: Bring your own AI keys. Configure OpenAI, Anthropic, or any compatible endpoint for embeddings and LLM per tenant.
---

## Configure your own AI providers

### Supported providers

| Provider | Use | Default Models |
|----------|-----|----------------|
| OpenAI | Embeddings + LLM | text-embedding-3-small, gpt-4o-mini |
| Anthropic | LLM | claude-3-haiku, claude-3-sonnet |
| Any OpenAI-compatible | Embeddings + LLM | Any model at a compatible endpoint |

### Configuration

```bash
# Set in ~/.agent-memory/env or environment variables
EMBEDDING_PROVIDER=openai
EMBEDDING_API_KEY=sk-your-openai-key
EMBEDDING_MODEL=text-embedding-3-small

LLM_MODEL=gpt-4o-mini
```

### Per-tenant configuration

Each tenant can configure their own AI providers independently. Team A can use OpenAI while Team B uses Anthropic.

### Key security

- API keys are encrypted at rest using AES-256
- Keys are decrypted only at request time and never logged
- You can rotate keys at any time from your dashboard
- Keys are scoped per tenant
