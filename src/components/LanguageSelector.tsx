import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { Language } from '../contexts/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <div className="language-selector">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="language-trigger"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">
          {currentLang?.code.toUpperCase()}
        </span>
        <svg
          className={isOpen ? 'is-open' : ''}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close language selector"
            className="language-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <div className="language-menu glass-surface">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`language-option ${
                  language === lang.code ? 'is-active' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
