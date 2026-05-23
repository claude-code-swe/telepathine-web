import { useEffect, useState } from 'react';

const STORAGE_KEY = 'telepathine-locale';

function getCurrentLocale(): string {
  // 1. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;

  // 2. Determine from current URL
  const path = window.location.pathname;
  const basePrefix = document.querySelector('meta[name="base-path"]')?.getAttribute('content') || '';
  const barePath = path.replace(basePrefix, '') || '/';
  const segment = barePath.split('/').filter(Boolean)[0];
  if (segment === 'en') return 'en';

  return 'es'; // Default
}

function switchLocale(target: 'es' | 'en') {
  // Persist choice
  localStorage.setItem(STORAGE_KEY, target);

  // Calculate target URL
  const path = window.location.pathname;
  const basePrefix = document.querySelector('meta[name="base-path"]')?.getAttribute('content') || '';
  let barePath = path.replace(basePrefix, '') || '/';

  // Strip existing locale prefix
  if (barePath.startsWith('/en')) {
    barePath = barePath.slice(3) || '/';
  }

  // Add prefix for non-default locale
  const targetPath = target === 'en' ? `/en${barePath}` : barePath;
  const fullPath = basePrefix + targetPath;

  // Navigate
  window.location.href = fullPath;
}

export default function LangSwitcher() {
  const [locale, setLocale] = useState<string>('es');

  useEffect(() => {
    setLocale(getCurrentLocale());
  }, []);

  const otherLocale = locale === 'es' ? 'en' : 'es';

  return (
    <button
      onClick={() => switchLocale(otherLocale as 'es' | 'en')}
      className="flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition"
      style={{
        background: 'transparent',
        borderColor: 'var(--line-strong)',
        color: 'var(--text-muted)',
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-outline-soft)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text)';
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-strong)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
      }}
      aria-label={`Switch to ${otherLocale === 'es' ? 'Spanish' : 'English'}`}
    >
      <span style={{ opacity: locale === 'es' ? 1 : 0.4 }}>🇪🇸</span>
      <span style={{ opacity: 0.3 }}>|</span>
      <span style={{ opacity: locale === 'en' ? 1 : 0.4 }}>🇬🇧</span>
    </button>
  );
}
