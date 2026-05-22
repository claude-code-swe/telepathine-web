/**
 * Brand constants — single source of truth for Telepathine.ai
 *
 * Import these instead of hardcoding product names, URLs, or taglines.
 * This ensures consistency and makes future updates a one-line change.
 */

export const BRAND = {
	/** Public-facing product name */
	SITE_NAME: "Telepathine.ai",

	/** Primary public URL */
	SITE_URL: "https://telepathine.ai",

	/** API base URL shown in examples */
	API_URL: "https://api.telepathine.ai",

	/** API key env var name shown in examples */
	API_KEY_ENV: "TELEPATHINE_API_KEY",

	/** Generic API key placeholder (never expose internal key format) */
	API_KEY_PLACEHOLDER: "your_api_key_here",

	/** Primary tagline */
	TAGLINE: "Your memory should outlive your agent.",

	/** Default meta description */
	DEFAULT_DESCRIPTION:
		"The portable memory layer for AI agents. Works with every coding agent.",

	/** Secondary description (used in some meta contexts) */
	SECONDARY_DESCRIPTION:
		"One memory, every engine. Any agent. Project-scoped, engine-agnostic, MCP-native.",

	/** Organization */
	ORG_NAME: "ArtemisAI",

	/** Copyright year */
	COPYRIGHT_YEAR: 2026,
} as const;

/**
 * Vocabulary guide — words to USE and AVOID in public-facing copy.
 *
 * ✅ Use freely (90% engineering):
 *   memory, channel, layer, infrastructure, agent, observation,
 *   context, session, persistence, isolation, injection, bus,
 *   bridge, mesh, relay, capture, enrich, deliver, connect,
 *   coordinate, project-scoped, tenant-isolated, RLS-enforced,
 *   engine-agnostic, portable, vendor-neutral, cross-engine,
 *   session-surviving, amnesia-proof, signal, trace, continuity,
 *   broadcast
 *
 * ✅ Use sparingly (10% ambient vibe, max 2x on entire site):
 *   mind-to-mind, channel opener, feeling at a distance,
 *   wavelength, synchrony, mycelium (visual only), extended mind,
 *   traces, bioluminescent
 *
 * ❌ NEVER USE:
 *   explicit ritual/entheogen terminology, spiritual/mystical claims,
 *   consciousness expansion claims, reverence/transcendence references,
 *   telepathic AI, infinite memory, collective consciousness,
 *   Akashic Records, noosphere, shared visions
 */
export const VOCABULARY = {
	/** Feature name for agent-to-agent communication (acceptable — our own product name) */
	BUS_NAME: "Telepathine Bus",

	/** Public verb for agent communication — use in marketing copy */
	BUS_VERB: "relay",

	/** Description of the bus feature (neutral language) */
	BUS_DESCRIPTION:
		"Agents broadcast on channels via the Signal Bus. Coordinate swarms, share findings, stay in sync.",
} as const;

/**
 * Pricing tier names — aligned with brand metaphor.
 * Spark → Ignite → Blaze → Enterprise
 */
export const PRICING_TIERS = {
	SPARK: "Spark",
	IGNITE: "Ignite",
	BLAZE: "Blaze",
	ENTERPRISE: "Enterprise",
} as const;
