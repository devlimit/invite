import { useState } from 'react'
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
  const [introFading, setIntroFading] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroEnd = () => {
    setIntroFading(true)
    setTimeout(() => setShowIntro(false), 1000)
  }

  return (
    <div className="app">
      {showIntro && <Intro fading={introFading} onEnd={handleIntroEnd} />}
      {!showIntro && (
        <>
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
        </>
      )}
    </div>
  )
}

export default App