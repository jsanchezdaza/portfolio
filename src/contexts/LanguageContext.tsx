/* eslint-disable react-refresh/only-export-components, @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react'
import content from '../content.json'

export type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('es')) return 'es'
  return 'en'
}

function getStoredLanguage(): Language {
  const stored = localStorage.getItem('portfolio-language') as Language
  if (stored && ['en', 'es'].includes(stored)) {
    return stored
  }
  // For production, detect browser language; for development/tests, default to English
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return detectBrowserLanguage()
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return getStoredLanguage()
    }
    return 'en'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('portfolio-language', lang)
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = content[language as keyof typeof content]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Fallback to English if value is not found
    if (value === undefined && language !== 'en') {
      let fallbackValue: any = content.en
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k]
      }
      return fallbackValue
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}