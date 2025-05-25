import { defaultLocale } from '@/config'

// Gets the language code from the current path (simplified for single language)
export function getLangFromPath(_path: string) {
  return defaultLocale
}

// Get the next language code (simplified for single language)
export function getNextGlobalLang(_currentLang: string): string {
  return defaultLocale
}
