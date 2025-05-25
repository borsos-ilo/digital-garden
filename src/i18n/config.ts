// Global Language Map
export const langMap: Record<string, string[]> = {
  'pl': ['pl-PL']
}

// Waline Language Map
// https://waline.js.org/en/guide/features/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'pl': 'pl-PL'
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
