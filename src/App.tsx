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

      <div id="mobilePanel" className="mobile-panel" style={{ display: 'none' }}>
        <a href="#skills" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Skills</a>
        <a href="#projects" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Projects</a>
        <a href="#experience" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Experience</a>
        <a href="#contact" onClick={() => (document.getElementById('mobilePanel')!.style.display = 'none')}>Contact</a>
      </div>

      <main className="pt-10">
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
