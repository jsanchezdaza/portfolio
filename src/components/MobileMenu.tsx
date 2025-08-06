import { useLanguage } from '../contexts/LanguageContext'

export function MobileMenu() {
  const { t } = useLanguage()

  const closeMobileMenu = () => {
    const panel = document.getElementById('mobilePanel')!
    const backdrop = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null
    panel.style.display = 'none'
    if (backdrop) backdrop.style.display = 'none'
  }

  return (
    <>
      <div 
        data-testid="backdrop" 
        className="mobile-backdrop" 
        onClick={closeMobileMenu}
      />
      <div id="mobilePanel" className="mobile-panel" style={{ display: 'none' }}>
        <a href="#skills" onClick={closeMobileMenu}>
          {t('navigation.skills')}
        </a>
        <a href="#projects" onClick={closeMobileMenu}>
          {t('navigation.projects')}
        </a>
        <a href="#experience" onClick={closeMobileMenu}>
          {t('navigation.experience')}
        </a>
        <a href="#contact" onClick={closeMobileMenu}>
          {t('navigation.contact')}
        </a>
      </div>
    </>
  )
}