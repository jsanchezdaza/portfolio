import { useLanguage } from '../contexts/LanguageContext'
import { Section } from './Section'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div className="grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(t('skills.categories')).map(([k, v]) => (
          <div key={k} className="card rounded-xl border p-4 md:p-8 backdrop-blur card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
            <div className="mb-2 md:mb-3 text-lg font-bold uppercase tracking-wide" style={{ color: '#415E72' }}>{k}</div>
            <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginBottom: '8px' }} />
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {(v as string[]).map((s) => (
                <span key={s} className="rounded-full border border-[#17313E]/10 bg-black/5 px-2.5 py-1 text-xs" style={{ color: '#B79DC6' }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}