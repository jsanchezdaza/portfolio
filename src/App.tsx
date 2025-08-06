import { LanguageProvider } from './contexts/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { MobileMenu } from './components/MobileMenu'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <MobileMenu />

        <main className="pt-6 md:pt-10">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
