import { derived, writable } from 'svelte/store';
import { browser } from '$app/env';
import { type Lang } from './utils/languageSetup';
import de from './locales/de.json';
import en from './locales/en.json';

const messages = { en, de };

export const locale = writable<Lang>('en');
export const currentLang = locale;
// shortcut: supports dotted keys with plain strings only; add ICU formatting if copy needs placeholders.
export const t = derived(locale, (lang) => (key: string) => {
	let message: unknown = messages[lang];
	for (const part of key.split('.')) {
		if (typeof message !== 'object' || message === null) return key;
		message = (message as Record<string, unknown>)[part];
	}
	return typeof message === 'string' ? message : key;
});

export function getPreferredLanguage(): 'en' | 'de' {
	if (!browser) return 'en';

	try {
		const savedLang = localStorage.getItem('lang');
		if (savedLang === 'en' || savedLang === 'de') return savedLang;
	} catch {
		// Language detection still works when browser storage is unavailable.
	}

	return navigator.language.split('-')[0] === 'de' ? 'de' : 'en';
}

export function setLang(l: 'en' | 'de') {
	locale.set(l);
	if (browser) {
		document.documentElement.lang = l;
		try {
			localStorage.setItem('lang', l);
		} catch {
			// Changing the current locale does not depend on persisting the preference.
		}
	}
}
