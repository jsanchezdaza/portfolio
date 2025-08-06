/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from '../contexts/LanguageContext'
import { Section } from './Section'

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      <div className="space-y-2 md:space-y-4">
        {t('experience.items').map((e: any) => (
          <div key={e.company} className="card rounded-xl border p-4 md:p-8 backdrop-blur card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
            <div className="mb-1">
              <div className="text-lg font-bold uppercase tracking-wide" style={{ color: '#415E72' }}>{e.role} · {e.company}</div>
              <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginTop: '6px' }} />
            </div>
            <div className="text-xs" style={{ color: 'var(--brand2)' }}>{e.dates}</div>
            <ul className="mt-2 md:mt-4 list-disc space-y-1.5 md:space-y-2 pl-5 text-sm" style={{ color: '#B79DC6' }}>
              {e.bullets.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}