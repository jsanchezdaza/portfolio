import { useLanguage } from '../contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>
            {t('profile.role')}
            <span className="terminal-cursor" aria-hidden="true" />
          </h1>
          <p className="hero-bio">{t('profile.bio')}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              {t('buttons.viewProjects')} <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="button button-secondary">
              {t('buttons.getInTouch')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
