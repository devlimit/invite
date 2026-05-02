import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import Couple from './components/Couple'
import Calendar from './components/Calendar'
import Dday from './components/Dday'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Account from './components/Account'
import Petals from './components/Petals'
import MusicPlayer from './components/MusicPlayer'
import './styles/main.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introFading, setIntroFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIntroFading(true)
    }, 2000)

    const hideTimer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (showIntro) {
    return <Intro fading={introFading} />
  }

  return (
    <div className="app">
      <Petals />
      <Navigation />
      <MusicPlayer />
      <main>
        <Hero />
        <Greeting />
        <Couple />
        <Calendar />
        <Dday />
        <Gallery />
        <Location />
        <Account />
      </main>
      <footer className="footer">
        <p>Thank you for celebrating with us</p>
      </footer>
    </div>
  )
}

export default App
