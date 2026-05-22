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
}

export const plans: PlanTier[] = [
	{
		id: "spark",
		name: "Spark",
		price: "$0",
		priceAnnual: "$0",
		description: "Ship something before paying. Full features, limited volume.",
		tagline: "Free forever for solo devs.",
		cta: "Get Started",
		highlighted: false,
	},
	{
		id: "ignite",
		name: "Ignite",
		price: "$29",
		priceAnnual: "$24",
		description:
			"Professional memory for professional agents. No feature paywalls.",
		tagline: "Full features at $29. No graph paywall.",
		cta: "Start Ignite Trial",
		highlighted: true,
	},
	{
		id: "blaze",
		name: "Blaze",
		price: "$99",
		priceAnnual: "$82",
		description: "For teams running production agent swarms.",
		tagline: "Scale your agent fleet with confidence.",
		cta: "Start Blaze Trial",
		highlighted: false,
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
		spark: "5",
		ignite: "50",
		blaze: "200",
		enterprise: "Unlimited",
	},
	{
		name: "Search queries / month",
		spark: "1,000",
		ignite: "25,000",
		blaze: "100,000",
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
		name: "Platform connectors",
		spark: "All",
		ignite: "All",
		blaze: "All",
		enterprise: "All + custom",
	},
	{
		name: "MCP tools",
		spark: "All 16",
		ignite: "All 16",
		blaze: "All 16",
		enterprise: "All 16",
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
		ignite: true,
		blaze: true,
		enterprise: true,
	},
	{
		name: "Signal Bus (agent comms)",
		spark: false,
		ignite: true,
		blaze: true,
		enterprise: true,
	},
	{
		name: "Bus messages / month",
		spark: "—",
		ignite: "10,000",
		blaze: "100,000",
		enterprise: "Unlimited",
	},
	{
		name: "Morpheus summaries / month",
		spark: "100",
		ignite: "5,000",
		blaze: "50,000",
		enterprise: "Unlimited",
	},
	{
		name: "Team sharing",
		spark: false,
		ignite: true,
		blaze: true,
		enterprise: true,
	},
	{
		name: "Team seats",
		spark: "1",
		ignite: "5",
		blaze: "25",
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
		name: "Custom SLA",
		spark: false,
		ignite: false,
		blaze: false,
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
		name: "On-prem / BYOC",
		spark: false,
		ignite: false,
		blaze: false,
		enterprise: true,
	},
];
