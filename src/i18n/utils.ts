/**
 * Supported locales — Spanish is default, English is secondary.
 */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/**
 * LATAM + Spain country codes for IP-based auto-detection.
 */
export const spanishSpeakingCountries: readonly string[] = [
	"AR", // Argentina
	"BO", // Bolivia
	"CL", // Chile
	"CO", // Colombia
	"CR", // Costa Rica
	"CU", // Cuba
	"DO", // Dominican Republic
	"EC", // Ecuador
	"GT", // Guatemala
	"HN", // Honduras
	"MX", // Mexico
	"NI", // Nicaragua
	"PA", // Panama
	"PY", // Paraguay
	"PE", // Peru
	"SV", // El Salvador
	"UY", // Uruguay
	"VE", // Venezuela
	"ES", // Spain
	"GQ", // Equatorial Guinea
] as const;

/**
 * Get locale from URL pathname.
 * Returns 'en' for /en/ prefixed paths (accounting for base path), 'es' otherwise.
 * Works with base paths like /telepathine-web/en/pricing → 'en'
 */
export function getLocaleFromUrl(url: URL | string): Locale {
	const pathname = typeof url === "string" ? url : url.pathname;
	const segments = pathname.split("/").filter(Boolean);
	// Check each segment — if any segment matches a non-default locale, use it
	for (const segment of segments) {
		if (segment === "en") return "en";
	}
	return defaultLocale;
}

/**
 * Get the locale prefix for URL construction.
 * Returns '/en' for English, '' for Spanish (default, no prefix).
 */
export function getLocalePrefix(locale: Locale): string {
	return locale === defaultLocale ? "" : `/${locale}`;
}

/**
 * Strip the locale prefix from a pathname.
 * /en/pricing → /pricing
 * /telepathine-web/en/pricing → /telepathine-web/pricing
 * /pricing → /pricing (already Spanish/default)
 */
export function stripLocalePrefix(pathname: string): string {
	const segments = pathname.split("/").filter(Boolean);
	const localeIndex = segments.findIndex(
		(s) => locales.includes(s as Locale) && s !== defaultLocale,
	);
	if (localeIndex >= 0) {
		segments.splice(localeIndex, 1);
		return "/" + segments.join("/") || "/";
	}
	return pathname;
}

/**
 * Convert a path to a specific locale.
 * /pricing (es) → /en/pricing (en)
 * /en/pricing (en) → /pricing (es)
 */
export function localizePath(pathname: string, locale: Locale): string {
	const bare = stripLocalePrefix(pathname);
	const prefix = getLocalePrefix(locale);
	return `${prefix}${bare === "/" ? "/" : bare}`;
}

/**
 * Detect preferred locale from request headers.
 * Priority: CF-IPCountry → Accept-Language → default (es)
 */
export function detectLocaleFromHeaders(headers: Headers): Locale {
	// 1. Cloudflare CF-IPCountry header
	const cfCountry = headers.get("CF-IPCountry");
	if (
		cfCountry &&
		(spanishSpeakingCountries as readonly string[]).includes(cfCountry)
	) {
		return "es";
	}
	// If CF-IPCountry exists but is not Spanish-speaking, prefer English
	if (cfCountry) {
		return "en";
	}

	// 2. Accept-Language header
	const acceptLang = headers.get("Accept-Language") || "";
	const languages = acceptLang
		.split(",")
		.map((l) => l.split(";")[0].trim().toLowerCase());
	for (const lang of languages) {
		if (lang.startsWith("es")) return "es";
		if (lang.startsWith("en")) return "en";
	}

	// 3. Default to Spanish
	return defaultLocale;
}

/**
 * Get alternate locale for a given locale.
 */
export function getAlternateLocale(locale: Locale): Locale {
	return locale === "es" ? "en" : "es";
}

/**
 * Get the display label for a locale.
 */
export function getLocaleLabel(locale: Locale): string {
	const labels: Record<Locale, string> = {
		es: "ES",
		en: "EN",
	};
	return labels[locale];
}

/**
 * Get the flag emoji for a locale.
 */
export function getLocaleFlag(locale: Locale): string {
	const flags: Record<Locale, string> = {
		es: "🌎",
		en: "🇬🇧",
	};
	return flags[locale];
}

/**
 * Validate that a string is a supported locale.
 */
export function isValidLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}
