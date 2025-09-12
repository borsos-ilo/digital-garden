// Global Language Map
export const langMap: Record<string, string[]> = {
  'pl': ['pl-PL'],
  'en': ['en-US']
}

// Waline Language Map
// https://waline.js.org/en/guide/features/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'pl': 'pl-PL',
  'en': 'en-US'
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
