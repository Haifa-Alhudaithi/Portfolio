import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Reveal from './components/Reveal.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="page" id="top">
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero
        name="Haifa Alhudaithi"
        role="Software Engineer"
        intro="Software engineer with hands-on experience across full-stack development, backend automation, and game development. I love learning new things and building projects that solve real problems."
      />
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  )
}

export default App