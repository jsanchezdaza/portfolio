import content from './content.json'

function Section({ title, subtitle, id, children }: { title: string; subtitle?: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#415E72' }}>{title}</h2>
        {subtitle ? <p className="mt-2 max-w-prose" style={{ color: 'var(--brand2)' }}>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-[#17313E]/10" style={{ backgroundColor: 'var(--nav)' }}>
        <header className="container nav-retro flex h-14 items-center justify-between">
          <a href="#" className="brand text-2xl font-bold tracking-wide" style={{ color: '#415E72' }}>
            <span>
              <span style={{ color: '#415E72' }}>{content.profile.name.split(' ')[0]}</span>{' '}{/* space */}
              <span style={{ color: 'var(--brand2)' }}>{content.profile.name.split(' ').slice(1).join(' ')}</span>
            </span>
          </a>
          <nav className="nav-links flex items-center gap-5 text-base">
            <a href="#projects" style={{ color: '#415E72' }}>Projects</a>
            <a href="#experience" style={{ color: '#415E72' }}>Experience</a>
            <a href="#contact" style={{ color: '#415E72' }}>Contact</a>
          </nav>
          <button id="menuBtn" className="mobile-menu rounded-md border px-3 py-1.5 text-sm" style={{ borderColor: 'var(--nav)', color: '#415E72' }} onClick={() => {
            const panel = document.getElementById('mobilePanel');
            if (panel) panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex'
          }}>Menu</button>
        </header>
      </div>

      <div id="mobilePanel" className="mobile-panel" style={{ display: 'none' }}>
        <a href="#projects" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Projects</a>
        <a href="#experience" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Experience</a>
        <a href="#contact" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Contact</a>
      </div>

      <main className="pt-20">
        <section>
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#17313E]/10 bg-black/5 px-3 py-1 text-xs" style={{ color: 'var(--brand2)' }}>
                <span>Available for work</span>
                <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--nav)' }} />
              </div>
              <div className="mt-4 grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: 'var(--brand2)' }}>
                  {content.profile.role}
                </h1>
                <div className="justify-self-end md:mr-[-24px] octo-frame">
                  <img src="/avatar.png" alt="Avatar" className="octagon object-cover" style={{ width: '200px', height: '200px' }} />
                </div>
              </div>
              <p className="mt-4 text-lg text-black/70">
                {content.profile.bio}
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="button-cta">View projects <span className="badge-arrow">→</span></a>
                <a href="#contact" className="button-pill">Get in touch</a>
              </div>
            </div>
          </div>
        </section>

        <Section title="Skills" subtitle="Main technologies across frontend, backend, devops, and databases.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(content.skills).map(([k, v]) => (
              <div key={k} className="card rounded-xl border p-7 md:p-8 backdrop-blur card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
                <div className="mb-3 text-lg font-bold uppercase tracking-wide" style={{ color: '#2C3333' }}>{k}</div>
                <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginBottom: '14px' }} />
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {(v as string[]).map((s) => (
                    <span key={s} className="rounded-full border border-[#17313E]/10 bg-black/5 px-2.5 py-1 text-xs" style={{ color: '#B79DC6' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

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

        <Section id="experience" title="Experience" subtitle="Roles, responsibilities, and outcomes.">
          <div className="space-y-4">
            {content.experience.map((e) => (
              <div key={e.company} className="card rounded-xl border p-7 md:p-8 backdrop-blur card-glow" style={{ borderColor: '#B79DC6', background: 'color-mix(in oklab, var(--nav) 4%, transparent)' }}>
                <div className="mb-1">
                  <div className="text-lg font-bold uppercase tracking-wide" style={{ color: '#415E72' }}>{e.role} · {e.company}</div>
                  <div style={{ height: '2px', background: 'var(--nav)', width: '36px', borderRadius: '2px', marginTop: '6px' }} />
                </div>
                <div className="text-xs" style={{ color: 'var(--brand2)' }}>{e.dates}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm" style={{ color: '#B79DC6' }}>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s collaborate.">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a className="button-cta" style={{ backgroundColor: '#B79DC6', color: '#17313E' }} href={`mailto:${content.contact.email}`}>Email me <span className="badge-arrow">✉</span></a>
            <a className="button-pill" href={content.contact.github} target="_blank">GitHub</a>
            <a className="button-pill" href={content.contact.linkedin} target="_blank">LinkedIn</a>
          </div>
        </Section>
      </main>

      <footer className="container mb-10 text-center text-xs font-bold">
        <span style={{ color: '#415E72' }}>© 2025 Javier Sanchez Daza.</span> <span style={{ color: '#6f4b84' }}>Built with React + Tailwind.</span>
      </footer>
    </div>
  )
}
