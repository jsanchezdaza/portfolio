import { useLanguage } from '../contexts/LanguageContext'
import { GlassCard } from './GlassCard'
import { Section } from './Section'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
    >
      <div className="skills-grid">
        {Object.entries(t('skills.categories')).map(([k, v]) => (
          <GlassCard key={k}>
            <article className="card skill-card">
              <h3>{k}</h3>
              <div className="accent-line" aria-hidden="true" />
              <div className="tag-list">
                {(v as string[]).map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
