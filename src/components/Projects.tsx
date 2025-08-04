import content from '../content.json'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Featured work with live demos and source code.">
      <div className="grid gap-6 md:grid-cols-2">
        {content.projects.map((p) => (
          <a key={p.name} href={p.link} target="_blank" className="card rounded-xl border p-7 md:p-8 backdrop-blur transition-colors card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
            <div className="mb-3">
              <div className="text-lg font-bold uppercase tracking-wide" style={{ color: '#415E72' }}>{p.name}</div>
              <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginTop: '6px' }} />
            </div>
            <span className="button-pill text-xs" style={{ borderColor: 'var(--nav)', color: 'var(--brand2)' }}>View project →</span>
            <p className="mt-3 mb-4 text-sm" style={{ color: 'var(--brand2)' }}>{p.description}</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-[#17313E]/10 bg-black/5 px-2.5 py-1 text-xs" style={{ color: '#B79DC6' }}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
