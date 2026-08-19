import { useLanguage } from '../contexts/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="container contact-section glass-surface">
      <div>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <div className="contact-actions">
        <a
          className="button button-primary"
          href={`mailto:${t('contact.email')}`}
        >
          Email me <span aria-hidden="true">✉</span>
        </a>
        <a
          className="button button-secondary"
          href={t('contact.github')}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button button-secondary"
          href={t('contact.linkedin')}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
