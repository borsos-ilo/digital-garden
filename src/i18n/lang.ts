import { defaultLocale, allLocales } from '@/config'

// Gets the language code from the current path
export function getLangFromPath(path: string) {
  // Check if path starts with /en/
  if (path.startsWith('/en/') || path === '/en') {
    return 'en'
  }
  
  // Default to Polish for all other paths
  return defaultLocale
}

// Get the next language code (toggle between Polish and English)
export function getNextGlobalLang(currentLang: string): string {
  if (currentLang === 'pl') {
    return 'en'
  }
  return 'pl'
}
