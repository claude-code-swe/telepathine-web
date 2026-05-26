export type Locale = "es" | "en";

/** A locale-aware string — can be a simple string (shared across locales) or a record with es/en keys. */
export type LocalizedString = string | Record<Locale, string>;

/** Helper to resolve a LocalizedString for a given locale. */
export function resolveLocalized(value: LocalizedString, locale: Locale): string {
	if (typeof value === "string") return value;
	return value[locale] || value.es;
}

export interface PlanFeature {
	name: LocalizedString;
	spark: string | boolean;
	ignite: string | boolean;
	blaze: string | boolean;
	enterprise: string | boolean;
}

export interface PlanTier {
	id: string;
	name: string;
	price: string;
	priceAnnual: string;
	description: Record<Locale, string>;
	tagline: Record<Locale, string>;
	cta: Record<Locale, string>;
	highlighted: boolean;
	target: Record<Locale, string>;
}

export const plans: PlanTier[] = [
	{
		id: "spark",
		name: "Spark",
		price: "$0",
		priceAnnual: "$0",
		description: {
			es: "Lanza algo antes de pagar. 10K observaciones, funciones reales.",
			en: "Ship something before paying. 10K observations, real features.",
		},
		tagline: {
			es: "Gratis para siempre para devs individuales.",
			en: "Free forever for solo devs.",
		},
		cta: {
			es: "Comenzar",
			en: "Get Started",
		},
		highlighted: false,
		target: {
			es: "Devs individuales, prototipado",
			en: "Solo devs, prototyping",
		},
	},
	{
		id: "ignite",
		name: "Ignite",
		price: "$29",
		priceAnnual: "$24",
		description: {
			es: "Memoria profesional para agentes en producción. Funciones completas, sin paywalls.",
			en: "Professional memory for production agents. Full features, no paywalls.",
		},
		tagline: {
			es: "Sin paywall de grafos. Todo a $29.",
			en: "No graph paywall. Everything at $29.",
		},
		cta: {
			es: "Comenzar Ignite",
			en: "Start Ignite",
		},
		highlighted: true,
		target: {
			es: "Devs en producción",
			en: "Devs shipping to prod",
		},
	},
	{
		id: "blaze",
		name: "Blaze",
		price: "$99",
		priceAnnual: "$82",
		description: {
			es: "Para equipos que ejecutan swarms de agentes en producción.",
			en: "For teams running production agent swarms.",
		},
		tagline: {
			es: "Escala tu flota de agentes con confianza.",
			en: "Scale your agent fleet with confidence.",
		},
		cta: {
			es: "Comenzar Blaze",
			en: "Start Blaze",
		},
		highlighted: false,
		target: {
			es: "Equipos y organizaciones",
			en: "Teams & organizations",
		},
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "Custom",
		priceAnnual: "Custom",
		description: {
			es: "Para organizaciones con requisitos de cumplimiento, SLA y escala.",
			en: "For organizations with compliance, SLA, and scale requirements.",
		},
		tagline: {
			es: "Soporte dedicado, SLA personalizado, opción on-prem.",
			en: "Dedicated support, custom SLA, on-prem option.",
		},
		cta: {
			es: "Contactar Ventas",
			en: "Contact Sales",
		},
		highlighted: false,
		target: {
			es: "Orgs con alto cumplimiento",
			en: "Compliance-heavy orgs",
		},
	},
];

export const features: PlanFeature[] = [
	{
		name: {
			es: "Observaciones / mes",
			en: "Observations / month",
		},
		spark: "10,000",
		ignite: "100,000",
		blaze: "1,000,000",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Inyecciones de contexto / mes",
			en: "Context injections / month",
		},
		spark: "2,000",
		ignite: "25,000",
		blaze: "250,000",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Proyectos",
			en: "Projects",
		},
		spark: "1",
		ignite: "5",
		blaze: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Mensajes de bus / mes",
			en: "Bus messages / month",
		},
		spark: "5,000",
		ignite: "100,000",
		blaze: "1,000,000",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Conectores",
			en: "Connectors",
		},
		spark: "5 core",
		ignite: "All 17",
		blaze: "All 17",
		enterprise: "All 17 + custom",
	},
	{
		name: {
			es: "Resúmenes Morpheus / mes",
			en: "Morpheus summaries / month",
		},
		spark: "100",
		ignite: "2,000",
		blaze: "20,000",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Modo de búsqueda",
			en: "Search mode",
		},
		spark: "Hybrid basic",
		ignite: "Hybrid full",
		blaze: "Hybrid + rerank",
		enterprise: "Hybrid + rerank + custom",
	},
	{
		name: {
			es: "Herramientas MCP",
			en: "MCP tools",
		},
		spark: "All 13",
		ignite: "All 13",
		blaze: "All 13",
		enterprise: "All 13",
	},
	{
		name: {
			es: "BYOK (trae tus propias claves de IA)",
			en: "BYOK (bring your own AI keys)",
		},
		spark: true,
		ignite: true,
		blaze: true,
		enterprise: true,
	},
	{
		name: {
			es: "Autohospedable (Apache 2.0)",
			en: "Self-hostable (Apache 2.0)",
		},
		spark: true,
		ignite: false,
		blaze: false,
		enterprise: false,
	},
	{
		name: {
			es: "Despliegue",
			en: "Deployment",
		},
		spark: "Self-hosted",
		ignite: "Cloud",
		blaze: "Cloud",
		enterprise: "BYOC / on-prem",
	},
	{
		name: {
			es: "Plazas de equipo",
			en: "Team seats",
		},
		spark: "1",
		ignite: "1",
		blaze: "10 included",
		enterprise: "Unlimited",
	},
	{
		name: {
			es: "Retención de datos",
			en: "Data retention",
		},
		spark: "30 days",
		ignite: "1 year",
		blaze: "2 years",
		enterprise: "Custom",
	},
	{
		name: "SLA",
		spark: "—",
		ignite: "99.5%",
		blaze: "99.9%",
		enterprise: "99.95%",
	},
	{
		name: {
			es: "Soporte prioritario",
			en: "Priority support",
		},
		spark: false,
		ignite: false,
		blaze: true,
		enterprise: true,
	},
	{
		name: {
			es: "Registros de auditoría",
			en: "Audit logs",
		},
		spark: false,
		ignite: false,
		blaze: true,
		enterprise: true,
	},
	{
		name: "SSO / SAML",
		spark: false,
		ignite: false,
		blaze: false,
		enterprise: true,
	},
	{
		name: {
			es: "SLA personalizado",
			en: "Custom SLA",
		},
		spark: false,
		ignite: false,
		blaze: false,
		enterprise: true,
	},
];

export const overagePricing = [
	{
		metric: {
			es: "Observaciones",
			en: "Observations",
		},
		ignite: "$0.10 / 1K",
		blaze: "$0.05 / 1K",
	},
	{
		metric: {
			es: "Inyecciones de contexto",
			en: "Context injections",
		},
		ignite: "$0.002 each",
		blaze: "$0.001 each",
	},
	{
		metric: {
			es: "Mensajes de bus",
			en: "Bus messages",
		},
		ignite: "$0.001 each",
		blaze: "$0.0005 each",
	},
];
