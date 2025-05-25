import { cleanPath } from '@/utils/page'

/**
 * Get path to tag page
 * @param tagName Tag name
 * @param _lang Current language code (unused but kept for compatibility)
 * @returns Path to tag page
 */
export function getTagPath(tagName: string, _lang: string): string {
  return `/tags/${tagName}/`
}

// Generates a localized path (simplified for single language)
export function getLocalizedPath(path: string, _currentLang?: string) {
  const clean = cleanPath(path)
  
  if (clean === '') {
    return '/'
  }

  return `/${clean}/`
}
