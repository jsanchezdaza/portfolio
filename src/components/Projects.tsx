/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from '../contexts/LanguageContext'
import { Section } from './Section'

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid gap-2.5 md:gap-6 md:grid-cols-2">
        {t('projects.items').map((p: any) => (
          <a key={p.name} href={p.link} target="_blank" className="card rounded-xl border p-4 md:p-8 backdrop-blur transition-colors card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
            <div className="mb-2 md:mb-3">
              <div className="text-lg font-bold uppercase tracking-wide" style={{ color: '#415E72' }}>{p.name}</div>
              <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginTop: '6px' }} />
            </div>
            <span className="button-pill text-xs" style={{ borderColor: 'var(--nav)', color: 'var(--brand2)' }}>View project →</span>
            <p className="mt-2 md:mt-3 mb-2 md:mb-4 text-sm" style={{ color: 'var(--brand2)' }}>{p.description}</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {p.tech.map((tech: string) => (
                <span key={tech} className="rounded-full border border-[#17313E]/10 bg-black/5 px-2.5 py-1 text-xs" style={{ color: '#B79DC6' }}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}