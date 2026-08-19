import { useEffect, useState } from 'react'

import { useLanguage } from '../contexts/LanguageContext'
import { LanguageSelector } from './LanguageSelector'

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const desktopViewport = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopViewport.addEventListener('change', closeOnDesktop)
    return () => desktopViewport.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="site-header">
      <div className="container glass-surface header-inner">
        <a href="#" className="brand">
          {t('profile.name').split(' ')[0]}{' '}
          <span>{t('profile.name').split(' ').slice(1).join(' ')}</span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <a href="#skills">{t('navigation.skills')}</a>
          <a href="#projects">{t('navigation.projects')}</a>
          <a href="#experience">{t('navigation.experience')}</a>
          <a href="#contact">{t('navigation.contact')}</a>
        </nav>

        <div className="header-actions">
          <LanguageSelector />
          <button
            id="menuBtn"
            className="menu-trigger"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <button
            className="mobile-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id="mobile-navigation"
            className="mobile-navigation glass-surface"
            aria-label="Mobile navigation"
          >
            <a href="#skills" onClick={closeMenu}>
              {t('navigation.skills')}
            </a>
            <a href="#projects" onClick={closeMenu}>
              {t('navigation.projects')}
            </a>
            <a href="#experience" onClick={closeMenu}>
              {t('navigation.experience')}
            </a>
            <a href="#contact" onClick={closeMenu}>
              {t('navigation.contact')}
            </a>
          </nav>
        </>
      ) : null}
    </header>
  )
}
