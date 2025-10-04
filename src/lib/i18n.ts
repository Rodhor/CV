import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Register locales
register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

// Detect saved or browser language
const savedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
const browserLang = getLocaleFromNavigator()?.split('-')[0];
const initialLocale = savedLang || browserLang || 'en';

// Initialize i18n
init({
  fallbackLocale: 'en',
  initialLocale
});

// Track the current language in a readable store
export const currentLang = writable<'en' | 'de'>(initialLocale as 'en' | 'de');

// Update both locale and localStorage
export function setLang(l: 'en' | 'de') {
  locale.set(l);
  currentLang.set(l);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', l);
  }
}

// Keep stores in sync
locale.subscribe((val) => {
  if (val === 'en' || val === 'de') {
    currentLang.set(val);
  }
});
