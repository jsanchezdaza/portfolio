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
          if (panel) panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex'
        }} aria-label="Open menu">
          <span style={{ display: 'inline-block', width: '22px', height: '2px', background: 'black', borderRadius: '2px', boxShadow: '0 6px 0 0 black, 0 -6px 0 0 black' }} />
        </button>
      </header>
    </div>
  )
}
