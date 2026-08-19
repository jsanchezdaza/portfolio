import { useLanguage } from '../contexts/LanguageContext'
import { Section } from './Section'

interface ExperienceItem {
  role: string
  company: string
  dates: string
  bullets: string[]
}

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section
      id="experience"
      title={t('experience.title')}
      subtitle={t('experience.subtitle')}
    >
      <div className="timeline">
        {(t('experience.items') as ExperienceItem[]).map((e, index) => (
          <article className="timeline-item" key={e.company}>
            <span className={`timeline-node timeline-node-${index + 1}`} />
            <div className="timeline-heading">
              <h3>
                {e.role} <span>· {e.company}</span>
              </h3>
              <p>{e.dates}</p>
            </div>
            <ul>
              {e.bullets.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
