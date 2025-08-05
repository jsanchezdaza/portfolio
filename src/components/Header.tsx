import content from '../content.json'

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-[#17313E]/10" style={{ backgroundColor: 'var(--nav)' }}>
      <header className="container nav-retro flex h-14 items-center justify-between">
        <a href="#" className="brand text-2xl font-bold tracking-wide" style={{ color: '#415E72' }}>
          <span>
            <span style={{ color: '#415E72' }}>{content.profile.name.split(' ')[0]}</span>{' '}
            <span style={{ color: 'var(--brand2)' }}>{content.profile.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </a>
        <nav className="nav-links flex items-center gap-5 text-base">
          <a href="#skills" style={{ color: '#415E72' }}>Skills</a>
          <a href="#projects" style={{ color: '#415E72' }}>Projects</a>
          <a href="#experience" style={{ color: '#415E72' }}>Experience</a>
          <a href="#contact" style={{ color: '#415E72' }}>Contact</a>
        </nav>
        <button id="menuBtn" className="mobile-menu text-sm" onClick={() => {
          const panel = document.getElementById('mobilePanel');
          if (panel) {
            const isOpen = panel.style.display === 'flex'
            panel.style.display = isOpen ? 'none' : 'flex'
            if (!isOpen) {
              const onClick = (e: MouseEvent) => {
                const btn = document.getElementById('menuBtn')
                if (panel && !panel.contains(e.target as Node) && btn && !btn.contains(e.target as Node)) {
                  panel.style.display = 'none'
                  window.removeEventListener('click', onClick)
                }
              }
              setTimeout(() => window.addEventListener('click', onClick), 0)
            }
          }
        }} aria-label="Open menu">
          <span style={{ position: 'relative', display: 'inline-block', width: '22px', height: '2px', background: 'black', borderRadius: '2px' }}>
            <span style={{ position: 'absolute', left: 0, right: 0, top: '-6px', height: '2px', background: 'black', borderRadius: '2px' }} />
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: '-6px', height: '2px', background: 'black', borderRadius: '2px' }} />
          </span>
        </button>
      </header>
    </div>
  )
}