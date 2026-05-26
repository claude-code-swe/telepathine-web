import type { UIStrings } from "./types";
import { type Locale, defaultLocale } from "./utils";

/**
 * Translation files — import these statically for build-time resolution.
 */
const translations: Record<Locale, UIStrings> = {
	es: {
		nav: {
			features: "Funciones",
			connectors: "Conectores",
			api: "API",
			docs: "Docs",
			pricing: "Precios",
			security: "Seguridad",
		},
		hero: {
			startFree: "Empezar gratis",
			quickStart: "Inicio rápido →",
		},
		footer: {
			product: "Producto",
			developers: "Desarrolladores",
			company: "Empresa",
			guides: "Guías",
			quickStart: "Inicio rápido",
			apiReference: "Referencia API",
			mcpServer: "Servidor MCP",
			sdks: "SDKs",
			architecture: "Arquitectura",
			security: "Seguridad",
			changelog: "Changelog",
			github: "GitHub",
			features: "Funciones",
			connectors: "Conectores",
			pricing: "Precios",
			whatIsAiAgentMemory: "Qué es la memoria de agentes IA",
			mcpMemoryServer: "Servidor de memoria MCP",
			modelAgnosticMemory: "Memoria agnóstica al modelo",
			agentCommunicationBus: "Bus de comunicación entre agentes",
			agentCommunicationBusStatus: "Aún no en producción",
			claudeMemoryAlternative: "Alternativa a Claude Memory",
			copyright: "© 2026 ELiA — Empresa Latinoamericana de Inteligencia Artificial. Todos los derechos reservados.",
		},
		common: {
			popular: "Popular",
			monthly: "Mensual",
			annual: "Anual",
			save: "(ahorra ~17%)",
			feature: "Función",
			copy: "Copiar",
			copied: "¡Copiado!",
			responseExample: "Ejemplo de respuesta",
			parameters: "Parámetros",
			required: "Requerido",
			optional: "Opcional",
			install: "Instalación",
			supportedEvents: "Eventos soportados",
			configuration: "Configuración",
			quickTest: "Prueba rápida",
			allConnectors: "Todos los conectores",
			busConnected: "Conectado al bus",
			busSendOnly: "Bus solo envío",
			busNotWired: "Bus no conectado",
			platformPriority: "Prioridad de plataforma",
			busIntegration: "Integración del bus",
			stable: "Estable",
			beta: "Beta",
			alpha: "Alfa",
			connectorSubtitle: "Adaptadores preconstruidos para cada agente de programación. Un comando de instalación, integración de memoria instantánea.",
		},
		docs: {
			guides: "Guías",
			api: "API",
			restApi: "API REST",
			mcpServer: "Servidor MCP",
			sdks: "SDKs",
		},
		api: {
			sessions: "Sesiones",
			observations: "Observaciones",
			search: "Búsqueda",
			context: "Contexto",
			projects: "Proyectos",
			events: "Eventos",
			system: "Sistema",
		},
		lang: {
			spanish: "ES",
			english: "EN",
		},
	},
	en: {
		nav: {
			features: "Features",
			connectors: "Connectors",
			api: "API",
			docs: "Docs",
			pricing: "Pricing",
			security: "Security",
		},
		hero: {
			startFree: "Start Free",
			quickStart: "Quick Start →",
		},
		footer: {
			product: "Product",
			developers: "Developers",
			company: "Company",
			guides: "Guides",
			quickStart: "Quick Start",
			apiReference: "API Reference",
			mcpServer: "MCP Server",
			sdks: "SDKs",
			architecture: "Architecture",
			security: "Security",
			changelog: "Changelog",
			github: "GitHub",
			features: "Features",
			connectors: "Connectors",
			pricing: "Pricing",
			whatIsAiAgentMemory: "What Is AI Agent Memory",
			mcpMemoryServer: "MCP Memory Server",
			modelAgnosticMemory: "Model-Agnostic Memory",
			agentCommunicationBus: "Agent Communication Bus",
			agentCommunicationBusStatus: "Not yet in production",
			claudeMemoryAlternative: "Claude Memory Alternative",
			copyright: "© 2026 ELiA — Empresa Latinoamericana de Inteligencia Artificial. All rights reserved.",
		},
		common: {
			popular: "Popular",
			monthly: "Monthly",
			annual: "Annual",
			save: "(save ~17%)",
			feature: "Feature",
			copy: "Copy",
			copied: "Copied!",
			responseExample: "Response example",
			parameters: "Parameters",
			required: "Required",
			optional: "Optional",
			install: "Installation",
			supportedEvents: "Supported Events",
			configuration: "Configuration",
			quickTest: "Quick Test",
			allConnectors: "All Connectors",
			busConnected: "Bus Connected",
			busSendOnly: "Bus Send-Only",
			busNotWired: "Bus Not Wired",
			platformPriority: "Platform Priority",
			busIntegration: "Bus Integration",
			stable: "Stable",
			beta: "Beta",
			alpha: "Alpha",
			connectorSubtitle: "Pre-built adapters for every major coding agent. One install command, instant memory integration.",
		},
		docs: {
			guides: "Guides",
			api: "API",
			restApi: "REST API",
			mcpServer: "MCP Server",
			sdks: "SDKs",
		},
		api: {
			sessions: "Sessions",
			observations: "Observations",
			search: "Search",
			context: "Context",
			projects: "Projects",
			events: "Events",
			system: "System",
		},
		lang: {
			spanish: "ES",
			english: "EN",
		},
	},
};

/**
 * Get a UI string by key path for a given locale.
 * Falls back to default locale (es) if key is missing.
 */
export function t(locale: Locale, keyPath: string): string {
	const keys = keyPath.split(".");
	let result: unknown = translations[locale];
	for (const key of keys) {
		if (result && typeof result === "object" && key in result) {
			result = (result as Record<string, unknown>)[key];
		} else {
			// Fallback to default locale
			let fallback: unknown = translations[defaultLocale];
			for (const fk of keys) {
				if (fallback && typeof fallback === "object" && fk in fallback) {
					fallback = (fallback as Record<string, unknown>)[fk];
				} else {
					return keyPath; // Last resort: return key path
				}
			}
			return fallback as string;
		}
	}
	return (result as string) || keyPath;
}

/**
 * Get all UI strings for a locale.
 */
export function getUI(locale: Locale): UIStrings {
	return translations[locale];
}

/**
 * Get translations object directly.
 */
export function getTranslations(): Record<Locale, UIStrings> {
	return translations;
}
