import { cleanPath } from '@/utils/page'
import { defaultLocale } from '@/config'

/**
 * Get path to tag page
 * @param tagName Tag name
 * @param lang Current language code
 * @returns Path to tag page
 */
export function getTagPath(tagName: string, lang: string): string {
  if (lang === defaultLocale) {
    return `/tags/${tagName}/`
  }
  return `/${lang}/tags/${tagName}/`
}

// Generates a localized path
export function getLocalizedPath(path: string, currentLang?: string) {
  const clean = cleanPath(path)
  const lang = currentLang || defaultLocale
  
  // For default language (Polish), no prefix
  if (lang === defaultLocale) {
    if (clean === '') {
      return '/'
    }
    return `/${clean}/`
  }
  
  // For other languages, add language prefix
  if (clean === '') {
    return `/${lang}/`
  }
  return `/${lang}/${clean}/`
}

/**
 * Get the current page path in a different language
 * @param currentPath Current page path
 * @param targetLang Target language code
 * @returns Path for the same page in target language
 */
export function getLanguageSwitchPath(currentPath: string, targetLang: string): string {
  // Remove language prefix from current path
  let cleanPath = currentPath
  
  // If current path starts with /en/, remove it
  if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.substring(4) // Remove '/en/'
  } else if (cleanPath === '/en') {
    cleanPath = ''
  }
  
  // Remove leading slash if present
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.substring(1)
  }
  
  // Remove trailing slash if present
  if (cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1)
  }
  
  // Generate path for target language
  if (targetLang === defaultLocale) {
    return cleanPath === '' ? '/' : `/${cleanPath}/`
  } else {
    return cleanPath === '' ? `/${targetLang}/` : `/${targetLang}/${cleanPath}/`
  }
}
