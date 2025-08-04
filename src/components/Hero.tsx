import content from '../content.json'

export function Hero() {
  return (
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
              <img src="/avatar.png" alt="Avatar" className="octagon object-cover" style={{ width: '240px', height: '240px', objectPosition: 'center 60%' }} />
            </div>
          </div>
          <p className="mt-4 text-lg text-black/70">{content.profile.bio}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="button-cta">View projects <span className="badge-arrow">→</span></a>
            <a href="#contact" className="button-pill">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
