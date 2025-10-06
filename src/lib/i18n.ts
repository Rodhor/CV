import { register, init, getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// ---------------------------------------------------------------------
// Register locales
// ---------------------------------------------------------------------
register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

// ---------------------------------------------------------------------
// Detect initial locale (SSR-safe)
// ---------------------------------------------------------------------
let initialLocale = 'en';

if (browser) {
	const savedLang = localStorage.getItem('lang');
	const browserLang = getLocaleFromNavigator()?.split('-')[0];
	initialLocale = savedLang || browserLang || 'en';
}

// ---------------------------------------------------------------------
// Initialize synchronously for SSR
// ---------------------------------------------------------------------
init({
	fallbackLocale: 'en',
	initialLocale
});

// Ensure locale is fully loaded before rendering (for SSR)
await waitLocale();

// ---------------------------------------------------------------------
// Store + helpers
// ---------------------------------------------------------------------
export const currentLang = writable<'en' | 'de'>(initialLocale as 'en' | 'de');

export function setLang(l: 'en' | 'de') {
	locale.set(l);
	currentLang.set(l);
	if (browser) {
		localStorage.setItem('lang', l);
	}
}

// Keep stores in sync
locale.subscribe((val) => {
	if (val === 'en' || val === 'de') {
		currentLang.set(val);
	}
});
