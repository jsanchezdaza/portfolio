import content from '../content.json'

export function Hero() {
  return (
    <section>
      <div className="container py-16 md:py-20 grid grid-cols-1 gap-6 md:grid-cols-[1fr_520px]">
        <div className="order-2 md:order-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#17313E]/10 bg-black/5 px-2.5 py-0.5 text-[10px] leading-none mb-3" style={{ color: 'var(--brand2)' }}>
            <span>Available for work</span>
            <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--nav)' }} />
          </div>
          <div className="mt-0">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: 'var(--brand2)' }}>
              {content.profile.role}
            </h1>
          </div>
          <p className="mt-4 text-lg text-black/70">{content.profile.bio}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="button-cta">View projects <span className="badge-arrow">→</span></a>
            <a href="#contact" className="button-pill">Get in touch</a>
          </div>
        </div>
        <div className="order-1 md:order-2 justify-self-end md:mr-0 md:self-start octo-frame">
          <img src="/avatar.png" alt="Avatar" className="octagon object-cover w-36 h-36 sm:w-44 sm:h-44 md:w-[240px] md:h-[240px]" style={{ objectPosition: 'center 60%' }} />
        </div>
      </div>
    </section>
  )
}
