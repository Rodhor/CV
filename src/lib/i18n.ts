import { register, init, getLocaleFromNavigator } from 'svelte-i18n'


// register available languages
register('en', () => import('./locales/en.json'))
register('de', () => import('./locales/de.json'))

// initialise with english as the default langauge 
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator() || 'en'
})
