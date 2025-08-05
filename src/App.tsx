import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <div data-testid="backdrop" className="mobile-backdrop" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')} />
      <div id="mobilePanel" className="mobile-panel" style={{ display: 'none' }}>
        <a href="#skills" onClick={() => { const p = document.getElementById('mobilePanel')!; const b = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null; p.style.display = 'none'; if (b) b.style.display = 'none';}}>Skills</a>
        <a href="#projects" onClick={() => { const p = document.getElementById('mobilePanel')!; const b = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null; p.style.display = 'none'; if (b) b.style.display = 'none';}}>Projects</a>
        <a href="#experience" onClick={() => { const p = document.getElementById('mobilePanel')!; const b = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null; p.style.display = 'none'; if (b) b.style.display = 'none';}}>Experience</a>
        <a href="#contact" onClick={() => { const p = document.getElementById('mobilePanel')!; const b = document.querySelector('[data-testid="backdrop"]') as HTMLElement | null; p.style.display = 'none'; if (b) b.style.display = 'none';}}>Contact</a>
      </div>

      <main className="pt-6 md:pt-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
