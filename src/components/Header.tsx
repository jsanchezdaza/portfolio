import { useLanguage } from '../contexts/LanguageContext'
import { LanguageSelector } from './LanguageSelector'

export function Header() {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-[#17313E]/10" style={{ backgroundColor: 'var(--nav)' }}>
      <header className="container nav-retro flex h-14 items-center justify-between">
        <a href="#" className="brand text-2xl font-bold tracking-wide" style={{ color: '#415E72' }}>
          <span>
            <span style={{ color: '#415E72' }}>{t('profile.name').split(' ')[0]}</span>{' '}
            <span style={{ color: 'var(--brand2)' }}>{t('profile.name').split(' ').slice(1).join(' ')}</span>
          </span>
        </a>
        <nav className="nav-links flex items-center gap-5 text-base">
          <a href="#skills" style={{ color: '#415E72' }}>{t('navigation.skills')}</a>
          <a href="#projects" style={{ color: '#415E72' }}>{t('navigation.projects')}</a>
          <a href="#experience" style={{ color: '#415E72' }}>{t('navigation.experience')}</a>
          <a href="#contact" style={{ color: '#415E72' }}>{t('navigation.contact')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <button id="menuBtn" className="mobile-menu text-sm" onClick={() => {
            const panel = document.getElementById('mobilePanel');
            const backdrop = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null
            if (!panel) return
            const isOpen = panel.style.display === 'flex'
            if (isOpen) {
              panel.style.display = 'none'
              if (backdrop) backdrop.style.display = 'none'
              return
            }
            panel.style.display = 'flex'
            if (backdrop) backdrop.style.display = 'block'
            const onDown = (e: MouseEvent) => {
              const btn = document.getElementById('menuBtn')
              if (panel && !panel.contains(e.target as Node) && btn && !btn.contains(e.target as Node)) {
                panel.style.display = 'none'
                if (backdrop) backdrop.style.display = 'none'
                window.removeEventListener('mousedown', onDown)
              }
            }
            window.addEventListener('mousedown', onDown, { once: true })
          }} aria-label="Open menu">
            <span style={{ position: 'relative', display: 'inline-block', width: '22px', height: '2px', background: 'black', borderRadius: '2px' }}>
              <span style={{ position: 'absolute', left: 0, right: 0, top: '-6px', height: '2px', background: 'black', borderRadius: '2px' }} />
              <span style={{ position: 'absolute', left: 0, right: 0, bottom: '-6px', height: '2px', background: 'black', borderRadius: '2px' }} />
            </span>
          </button>
        </div>
      </header>
    </div>
  )
}