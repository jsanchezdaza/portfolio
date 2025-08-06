import { useLanguage } from '../contexts/LanguageContext'
import { Section } from './Section'

export function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm">
        <a className="button-cta" style={{ backgroundColor: '#B79DC6', color: '#17313E' }} href={`mailto:${t('contact.email')}`}>Email me <span className="badge-arrow">✉</span></a>
        <a className="button-pill" href={t('contact.github')} target="_blank">GitHub</a>
        <a className="button-pill" href={t('contact.linkedin')} target="_blank">LinkedIn</a>
      </div>
    </Section>
  )
}