import { useLanguage } from '../contexts/LanguageContext'
import { GlassCard } from './GlassCard'
import { Section } from './Section'

interface ProjectItem {
  name: string
  description: string
  tech: string[]
  link: string
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
    >
      <div className="projects-grid">
        {(t('projects.items') as ProjectItem[]).map((p) => (
          <GlassCard key={p.name}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="card project-card"
            >
              <div className="project-heading">
                <h3>{p.name}</h3>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="accent-line" aria-hidden="true" />
              <p>{p.description}</p>
              <span className="project-link">View project →</span>
              <div className="tag-list">
                {p.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
