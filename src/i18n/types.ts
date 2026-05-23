/**
 * Translation types — ensures type-safe access to translation keys.
 */

export type Locale = 'es' | 'en';

/**
 * UI strings that appear in navigation, footer, buttons, labels.
 */
export interface UIStrings {
  // Navigation
  nav: {
    features: string;
    connectors: string;
    api: string;
    docs: string;
    pricing: string;
    security: string;
  };
  // Hero
  hero: {
    startFree: string;
    quickStart: string;
  };
  // Footer sections
  footer: {
    product: string;
    developers: string;
    company: string;
    guides: string;
    quickStart: string;
    apiReference: string;
    mcpServer: string;
    sdks: string;
    architecture: string;
    security: string;
    changelog: string;
    github: string;
    features: string;
    connectors: string;
    pricing: string;
    whatIsAiAgentMemory: string;
    mcpMemoryServer: string;
    modelAgnosticMemory: string;
    agentCommunicationBus: string;
    claudeMemoryAlternative: string;
    copyright: string;
  };
  // Common
  common: {
    popular: string;
    monthly: string;
    annual: string;
    save: string;
    feature: string;
    copy: string;
    copied: string;
    responseExample: string;
    parameters: string;
    required: string;
    optional: string;
    install: string;
    supportedEvents: string;
    configuration: string;
    quickTest: string;
    allConnectors: string;
  };
  // Docs sidebar
  docs: {
    guides: string;
    api: string;
    restApi: string;
    mcpServer: string;
    sdks: string;
  };
  // Language switcher
  lang: {
    spanish: string;
    english: string;
  };
}
