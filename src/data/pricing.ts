export interface PlanFeature {
	name: string;
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
	description: string;
	tagline: string;
	cta: string;
	highlighted: boolean;
	target: string;
}

export const plans: PlanTier[] = [
	{
		id: "spark",
		name: "Spark",
		price: "$0",
		priceAnnual: "$0",
		description: "Ship something before paying. 10K observations, real features.",
		tagline: "Free forever for solo devs.",
		cta: "Get Started",
		highlighted: false,
		target: "Solo devs, prototyping",
	},
	{
		id: "ignite",
		name: "Ignite",
		price: "$29",
		priceAnnual: "$24",
		description:
			"Professional memory for production agents. Full features, no paywalls.",
		tagline: "No graph paywall. Everything at $29.",
		cta: "Start Ignite",
		highlighted: true,
		target: "Devs shipping to prod",
	},
	{
		id: "blaze",
		name: "Blaze",
		price: "$99",
		priceAnnual: "$82",
		description: "For teams running production agent swarms.",
		tagline: "Scale your agent fleet with confidence.",
		cta: "Start Blaze",
		highlighted: false,
		target: "Teams & organizations",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "Custom",
		priceAnnual: "Custom",
		description:
			"For organizations with compliance, SLA, and scale requirements.",
		tagline: "Dedicated support, custom SLA, on-prem option.",
		cta: "Contact Sales",
		highlighted: false,
		target: "Compliance-heavy orgs",
	},
];

export const features: PlanFeature[] = [
	{
		name: "Observations / month",
		spark: "10,000",
		ignite: "100,000",
		blaze: "1,000,000",
		enterprise: "Unlimited",
	},
	{
		name: "Context injections / month",
		spark: "2,000",
		ignite: "25,000",
		blaze: "250,000",
		enterprise: "Unlimited",
	},
	{
		name: "Projects",
		spark: "1",
		ignite: "5",
		blaze: "Unlimited",
		enterprise: "Unlimited",
	},
	{
		name: "Bus messages / month",
		spark: "5,000",
		ignite: "100,000",
		blaze: "1,000,000",
		enterprise: "Unlimited",
	},
	{
		name: "Connectors",
		spark: "5 core",
		ignite: "All 17",
		blaze: "All 17",
		enterprise: "All 17 + custom",
	},
	{
		name: "Morpheus summaries / month",
		spark: "100",
		ignite: "2,000",
		blaze: "20,000",
		enterprise: "Unlimited",
	},
	{
		name: "Search mode",
		spark: "Hybrid basic",
		ignite: "Hybrid full",
		blaze: "Hybrid + rerank",
		enterprise: "Hybrid + rerank + custom",
	},
	{
		name: "MCP tools",
		spark: "All 13",
		ignite: "All 13",
		blaze: "All 13",
		enterprise: "All 13",
	},
	{
		name: "BYOK (bring your own AI keys)",
		spark: true,
		ignite: true,
		blaze: true,
		enterprise: true,
	},
	{
		name: "Self-hostable (Apache 2.0)",
		spark: true,
		ignite: false,
		blaze: false,
		enterprise: false,
	},
	{
		name: "Deployment",
		spark: "Self-hosted",
		ignite: "Cloud",
		blaze: "Cloud",
		enterprise: "BYOC / on-prem",
	},
	{
		name: "Team seats",
		spark: "1",
		ignite: "1",
		blaze: "10 included",
		enterprise: "Unlimited",
	},
	{
		name: "Data retention",
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
		name: "Priority support",
		spark: false,
		ignite: false,
		blaze: true,
		enterprise: true,
	},
	{
		name: "Audit logs",
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
		name: "Custom SLA",
		spark: false,
		ignite: false,
		blaze: false,
		enterprise: true,
	},
];

export const overagePricing = [
	{
		metric: "Observations",
		ignite: "$0.10 / 1K",
		blaze: "$0.05 / 1K",
	},
	{
		metric: "Context injections",
		ignite: "$0.002 each",
		blaze: "$0.001 each",
	},
	{
		metric: "Bus messages",
		ignite: "$0.001 each",
		blaze: "$0.0005 each",
	},
];
