export type ConnectorStatus = 'stable' | 'beta' | 'alpha' | 'coming_soon';

export interface Connector {
  name: string;
  slug: string;
  status: ConnectorStatus;
  description: string;
  installCmd: string;
  events: string[];
  protocol: 'hooks' | 'mcp' | 'plugin' | 'sdk';
  logoColor: string;
}

export const connectors: Connector[] = [
  {
    name: 'Claude Code',
    slug: 'claude-code',
    status: 'stable',
    description: 'Full hook lifecycle integration with 9 events, MCP server, and auto-discovery. The gold-standard adapter.',
    installCmd: 'npx @ai-memory/plugin-claude install',
    events: ['PreToolUse', 'PostToolUse', 'Notification', 'SubagentStop', 'Stop', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#D97706',
  },
  {
    name: 'Cursor',
    slug: 'cursor',
    status: 'stable',
    description: 'Hook-based adapter for Cursor IDE. Automatic context injection and observation capture.',
    installCmd: 'npx @ai-memory/plugin-cursor install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#3B82F6',
  },
  {
    name: 'Gemini CLI',
    slug: 'gemini-cli',
    status: 'stable',
    description: 'Google Gemini CLI hook adapter with event mapping and structured observation capture.',
    installCmd: 'npx @ai-memory/plugin-gemini install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#4285F4',
  },
  {
    name: 'Windsurf',
    slug: 'windsurf',
    status: 'stable',
    description: 'Codeium Windsurf IDE hook adapter. Session tracking and tool-use observation.',
    installCmd: 'npx @ai-memory/plugin-windsurf install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#06B6D4',
  },
  {
    name: 'Pi Agent',
    slug: 'pi-agent',
    status: 'stable',
    description: 'Pi coding agent extension with slash commands, session tracking, and auto-discovery.',
    installCmd: 'pi install npm:@ai-memory/plugin-pi',
    events: ['tool_result', 'session_start', 'session_end'],
    protocol: 'plugin',
    logoColor: '#8B5CF6',
  },
  {
    name: 'Hermes',
    slug: 'hermes',
    status: 'stable',
    description: 'Hermes Agent MemoryProvider plugin with Python SDK, search, and cross-session context injection.',
    installCmd: 'pip install agent-memory-hermes',
    events: ['sync_turn', 'prefetch', 'record_observation'],
    protocol: 'plugin',
    logoColor: '#F59E0B',
  },
  {
    name: 'Codex CLI',
    slug: 'codex-cli',
    status: 'beta',
    description: 'OpenAI Codex CLI hook-based integration with platform detection and structured events.',
    installCmd: 'npx @ai-memory/plugin-codex install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#10A37F',
  },
  {
    name: 'Copilot CLI',
    slug: 'copilot-cli',
    status: 'beta',
    description: 'GitHub Copilot CLI integration with programmatic hook automation and visual feedback.',
    installCmd: 'npx @ai-memory/plugin-copilot-cli install',
    events: ['onSessionStart', 'onUserPromptSubmitted', 'onPostToolUse', 'onSessionEnd'],
    protocol: 'hooks',
    logoColor: '#6B7280',
  },
  {
    name: 'VS Code Copilot',
    slug: 'vscode-copilot',
    status: 'alpha',
    description: 'VS Code Copilot integration via json-stdio wire protocol. Preview API — may change.',
    installCmd: 'npx @ai-memory/plugin-vscode-copilot install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#007ACC',
  },
  {
    name: 'KiloCode',
    slug: 'kilocode',
    status: 'alpha',
    description: 'KiloCode integration. Shares adapter with OpenCode. Blocked on OpenCode completion.',
    installCmd: 'npx @ai-memory/plugin-kilocode install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#EC4899',
  },
  {
    name: 'OpenMP',
    slug: 'omp',
    status: 'alpha',
    description: 'Oh My Pi (OMP) integration. Same HookAPI as Pi Agent with 1-day effort estimate.',
    installCmd: 'npx @ai-memory/plugin-omp install',
    events: ['tool_result', 'session_start', 'session_end'],
    protocol: 'plugin',
    logoColor: '#F97316',
  },
  {
    name: 'JetBrains Copilot',
    slug: 'jetbrains-copilot',
    status: 'alpha',
    description: 'JetBrains IDE Copilot integration. Minimal documentation available — under investigation.',
    installCmd: 'npx @ai-memory/plugin-jetbrains-copilot install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#FC801D',
  },
  {
    name: 'Antigravity',
    slug: 'antigravity',
    status: 'alpha',
    description: 'Google Antigravity integration via MCP-only (no hooks). Config template approach.',
    installCmd: 'npx @ai-memory/mcp-server',
    events: [],
    protocol: 'mcp',
    logoColor: '#34A853',
  },
  {
    name: 'Zed',
    slug: 'zed',
    status: 'alpha',
    description: 'Zed editor integration via MCP-only. May already work with the existing MCP server.',
    installCmd: 'npx @ai-memory/mcp-server',
    events: [],
    protocol: 'mcp',
    logoColor: '#D4D4D4',
  },
  {
    name: 'Kiro',
    slug: 'kiro',
    status: 'alpha',
    description: 'Amazon Kiro integration. Shares json-stdio wire protocol with Codex CLI.',
    installCmd: 'npx @ai-memory/plugin-kiro install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#FF9900',
  },
  {
    name: 'Qwen Code',
    slug: 'qwen-code',
    status: 'alpha',
    description: 'Alibaba Qwen Code integration. Same json-stdio wire protocol as Claude Code.',
    installCmd: 'npx @ai-memory/plugin-qwen-code install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#6366F1',
  },
  {
    name: 'OpenCode',
    slug: 'opencode',
    status: 'alpha',
    description: 'OpenCode integration using native ESM plugins. Requires adapter-kit abstraction extension.',
    installCmd: 'npx @ai-memory/plugin-opencode install',
    events: ['PostToolUse', 'SessionStart', 'SessionEnd'],
    protocol: 'hooks',
    logoColor: '#22C55E',
  },
];

export function getConnectorBySlug(slug: string): Connector | undefined {
  return connectors.find(c => c.slug === slug);
}

export function getConnectorsByStatus(status: ConnectorStatus): Connector[] {
  return connectors.filter(c => c.status === status);
}
