export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type AuthType = 'bearer' | 'none';

export interface ApiParam {
  name: string;
  type: 'string' | 'number' | 'boolean';
  in: 'query' | 'path' | 'body';
  required: boolean;
  description: string;
}

export interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  description: string;
  auth: AuthType;
  params: ApiParam[];
  responseExample: string;
  category: 'sessions' | 'observations' | 'search' | 'context' | 'projects' | 'events' | 'system';
}

export const apiEndpoints: ApiEndpoint[] = [
  {
    method: 'POST',
    path: '/v1/sessions',
    description: 'Create a new memory session for a project. Sessions track the lifecycle of an agent\'s work.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'body', required: true, description: 'Project identifier/slug' },
      { name: 'contentSessionId', type: 'string', in: 'body', required: false, description: 'Custom session ID (auto-generated if omitted)' },
      { name: 'userPrompt', type: 'string', in: 'body', required: false, description: 'Initial user prompt for the session' },
      { name: 'workspaceContext', type: 'string', in: 'body', required: false, description: 'Git, host, and agent context' },
    ],
    responseExample: '{\n  "id": "550e8400-e29b-41d4-a716-446655440000",\n  "contentSessionId": "cs_1716300000_a1b2c3d4",\n  "project": "my-project",\n  "status": "active",\n  "workspaceContext": { "git": { "branch": "main" } }\n}',
    category: 'sessions',
  },
  {
    method: 'GET',
    path: '/v1/sessions',
    description: 'List or search sessions. Filter by project or content session ID.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'content_session_id', type: 'string', in: 'query', required: false, description: 'Find session by content session ID' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 5, max 50)' },
    ],
    responseExample: '{\n  "items": [{ "id": "...", "project": "my-project", "status": "active" }]\n}',
    category: 'sessions',
  },
  {
    method: 'POST',
    path: '/v1/sessions/:id/observations',
    description: 'Record a structured observation within a session. Observations are the core memory unit.',
    auth: 'bearer',
    params: [
      { name: 'id', type: 'string', in: 'path', required: true, description: 'Session ID' },
      { name: 'type', type: 'string', in: 'body', required: true, description: 'Observation type (decision, change, learning, etc.)' },
      { name: 'text', type: 'string', in: 'body', required: false, description: 'Raw observation text' },
      { name: 'title', type: 'string', in: 'body', required: false, description: 'Short title' },
      { name: 'narrative', type: 'string', in: 'body', required: false, description: 'Narrative description' },
      { name: 'facts', type: 'string', in: 'body', required: false, description: 'Key facts extracted' },
      { name: 'concepts', type: 'string', in: 'body', required: false, description: 'Key concepts identified' },
      { name: 'filesTouched', type: 'string', in: 'body', required: false, description: 'Files modified during this observation' },
    ],
    responseExample: '{\n  "id": "42",\n  "type": "decision",\n  "createdAt": "2026-05-21T10:30:00Z"\n}',
    category: 'observations',
  },
  {
    method: 'POST',
    path: '/v1/sessions/:id/observations/raw',
    description: 'Record a raw tool-use observation for agent-powered processing. Queued for async LLM enrichment.',
    auth: 'bearer',
    params: [
      { name: 'id', type: 'string', in: 'path', required: true, description: 'Session ID' },
      { name: 'tool_name', type: 'string', in: 'body', required: true, description: 'Name of the tool used' },
      { name: 'tool_input', type: 'string', in: 'body', required: true, description: 'Tool input parameters' },
      { name: 'tool_response', type: 'string', in: 'body', required: true, description: 'Tool output/response' },
    ],
    responseExample: '{\n  "status": "queued",\n  "sessionId": "550e8400-..."\n}',
    category: 'observations',
  },
  {
    method: 'POST',
    path: '/v1/sessions/:id/observations/batch',
    description: 'Batch record up to 50 observations in a single request.',
    auth: 'bearer',
    params: [
      { name: 'id', type: 'string', in: 'path', required: true, description: 'Session ID' },
      { name: 'observations', type: 'string', in: 'body', required: true, description: 'Array of 1-50 observation objects' },
    ],
    responseExample: '{\n  "created": 5,\n  "ids": ["42", "43", "44", "45", "46"]\n}',
    category: 'observations',
  },
  {
    method: 'POST',
    path: '/v1/sessions/:id/summarize',
    description: 'Trigger LLM-powered summarization for a session. Generates structured summary with findings.',
    auth: 'bearer',
    params: [
      { name: 'id', type: 'string', in: 'path', required: true, description: 'Session ID' },
    ],
    responseExample: '{\n  "summaryId": 100,\n  "status": "completed"\n}',
    category: 'sessions',
  },
  {
    method: 'POST',
    path: '/v1/sessions/:id/complete',
    description: 'Mark a session as completed. Optionally triggers async summarization.',
    auth: 'bearer',
    params: [
      { name: 'id', type: 'string', in: 'path', required: true, description: 'Session ID' },
      { name: 'summarize', type: 'boolean', in: 'query', required: false, description: 'Set to "true" to auto-summarize on completion' },
    ],
    responseExample: '{\n  "id": "550e8400-...",\n  "status": "completed"\n}',
    category: 'sessions',
  },
  {
    method: 'GET',
    path: '/v1/observations',
    description: 'List observations with optional filters by project, type, or session.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'type', type: 'string', in: 'query', required: false, description: 'Filter by observation type' },
      { name: 'memorySessionId', type: 'string', in: 'query', required: false, description: 'Filter by session ID' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 50, max 500)' },
      { name: 'offset', type: 'number', in: 'query', required: false, description: 'Pagination offset' },
    ],
    responseExample: '{\n  "items": [{ "id": "42", "type": "decision", "title": "Use PostgreSQL" }],\n  "count": 1,\n  "scope": { "projects": ["my-project"], "type": "explicit" }\n}',
    category: 'observations',
  },
  {
    method: 'GET',
    path: '/v1/search',
    description: 'Hybrid search combining full-text search (FTS) and semantic vector similarity. Returns ranked results.',
    auth: 'bearer',
    params: [
      { name: 'q', type: 'string', in: 'query', required: true, description: 'Search query text' },
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Scope to project slug' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 20, max 100)' },
      { name: 'mode', type: 'string', in: 'query', required: false, description: 'Search mode: "hybrid" (default), "fts", or "vector"' },
      { name: 'type', type: 'string', in: 'query', required: false, description: 'Filter by observation type' },
      { name: 'from', type: 'string', in: 'query', required: false, description: 'Start date (ISO 8601)' },
      { name: 'to', type: 'string', in: 'query', required: false, description: 'End date (ISO 8601)' },
    ],
    responseExample: '{\n  "hits": [{ "id": "42", "score": 0.87, "source": "hybrid", "title": "Auth decision" }],\n  "count": 1,\n  "mode": "hybrid",\n  "scope": { "projects": ["my-project"], "type": "explicit" }\n}',
    category: 'search',
  },
  {
    method: 'GET',
    path: '/v1/context',
    description: 'Get candidate observations for context injection. Returns ranked, relevant observations for a project.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: true, description: 'Project slug' },
      { name: 'q', type: 'string', in: 'query', required: false, description: 'Optional search query for relevance filtering' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 20, max 50)' },
    ],
    responseExample: '{\n  "items": [{ "id": "42", "type": "retrospective", "title": "Session summary" }],\n  "count": 1\n}',
    category: 'context',
  },
  {
    method: 'GET',
    path: '/v1/context/inject',
    description: 'Get formatted, compressed context for agent injection. Uses progressive disclosure: header, timeline, summary, footer.',
    auth: 'bearer',
    params: [
      { name: 'projects', type: 'string', in: 'query', required: false, description: 'Comma-separated project slugs' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max observations (default 15)' },
      { name: 'format', type: 'string', in: 'query', required: false, description: 'Output format: "text" (default) or "json"' },
    ],
    responseExample: '{\n  "context": "# [my-project] recent context\\n\\n## Timeline\\n...",\n  "format": "text",\n  "observationCount": 12\n}',
    category: 'context',
  },
  {
    method: 'GET',
    path: '/v1/projects',
    description: 'List all projects for the authenticated tenant.',
    auth: 'bearer',
    params: [],
    responseExample: '{\n  "items": [{ "id": "...", "slug": "my-project" }]\n}',
    category: 'projects',
  },
  {
    method: 'POST',
    path: '/v1/projects/config',
    description: 'Create or update project configuration including visibility, sharing, and inheritance rules.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'body', required: true, description: 'Project slug' },
      { name: 'visibility', type: 'string', in: 'body', required: false, description: 'Visibility: "private", "tenant", or "shared"' },
      { name: 'sharedWith', type: 'string', in: 'body', required: false, description: 'Array of tenant IDs to share with' },
      { name: 'inheritFrom', type: 'string', in: 'body', required: false, description: 'Array of project slugs to inherit context from' },
    ],
    responseExample: '{\n  "id": "...",\n  "project": "my-project",\n  "visibility": "tenant"\n}',
    category: 'projects',
  },
  {
    method: 'GET',
    path: '/v1/projects/config',
    description: 'List all project configurations for the authenticated tenant.',
    auth: 'bearer',
    params: [],
    responseExample: '{\n  "items": [{ "project": "my-project", "visibility": "private" }],\n  "count": 1\n}',
    category: 'projects',
  },
  {
    method: 'GET',
    path: '/v1/events',
    description: 'Server-Sent Events (SSE) stream for real-time observation and session events.',
    auth: 'bearer',
    params: [],
    responseExample: 'event: connected\ndata: {"status":"ok","tenantId":"..."}\n\nevent: thought\ndata: {"action":"created","observation":{"id":"42","type":"decision"}}',
    category: 'events',
  },
  {
    method: 'GET',
    path: '/v1/workspaces',
    description: 'List workspace contexts (git branch, host, agent) from sessions. Track active and stale workspaces.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'branch', type: 'string', in: 'query', required: false, description: 'Filter by git branch' },
      { name: 'hostname', type: 'string', in: 'query', required: false, description: 'Filter by hostname' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 20, max 100)' },
    ],
    responseExample: '{\n  "workspaces": [{ "project": "my-project", "git": { "branch": "main" }, "status": "active" }],\n  "count": 1\n}',
    category: 'projects',
  },
  {
    method: 'GET',
    path: '/v1/health',
    description: 'Health check endpoint. Returns service status, database connectivity, and embedding provider status.',
    auth: 'none',
    params: [],
    responseExample: '{\n  "status": "ok",\n  "db": true,\n  "redis": true,\n  "embedding": { "provider": "openai", "configured": true, "reachable": true }\n}',
    category: 'system',
  },
  {
    method: 'GET',
    path: '/v1/timeline',
    description: 'Get a chronological feed of observations, filtered by project and time range.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'before', type: 'string', in: 'query', required: false, description: 'Return observations before this date' },
      { name: 'after', type: 'string', in: 'query', required: false, description: 'Return observations after this date' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 50)' },
    ],
    responseExample: '{\n  "items": [{ "id": "42", "type": "decision", "title": "Use PostgreSQL", "created_at": "..." }],\n  "count": 1\n}',
    category: 'search',
  },
  {
    method: 'GET',
    path: '/v1/decisions',
    description: 'List all decision-type observations for a project. Decisions capture architectural and design choices.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 20)' },
    ],
    responseExample: '{\n  "items": [{ "id": "42", "type": "decision", "title": "Auth approach", "narrative": "..." }],\n  "count": 1\n}',
    category: 'search',
  },
  {
    method: 'GET',
    path: '/v1/changes',
    description: 'List all change-type observations for a project. Changes track file modifications and code updates.',
    auth: 'bearer',
    params: [
      { name: 'project', type: 'string', in: 'query', required: false, description: 'Filter by project slug' },
      { name: 'limit', type: 'number', in: 'query', required: false, description: 'Max results (default 20)' },
    ],
    responseExample: '{\n  "items": [{ "id": "42", "type": "change", "title": "Refactor auth", "files_touched": "src/auth.ts" }],\n  "count": 1\n}',
    category: 'search',
  },
];

export function getEndpointsByCategory(category: ApiEndpoint['category']): ApiEndpoint[] {
  return apiEndpoints.filter(e => e.category === category);
}
