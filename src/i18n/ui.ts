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
			claudeMemoryAlternative: "Alternativa a Claude Memory",
			copyright: "© 2026 ArtemisAI. Todos los derechos reservados.",
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
		},
		docs: {
			guides: "Guías",
			api: "API",
			restApi: "API REST",
			mcpServer: "Servidor MCP",
			sdks: "SDKs",
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
			claudeMemoryAlternative: "Claude Memory Alternative",
			copyright: "© 2026 ArtemisAI. All rights reserved.",
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
		},
		docs: {
			guides: "Guides",
			api: "API",
			restApi: "REST API",
			mcpServer: "MCP Server",
			sdks: "SDKs",
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
