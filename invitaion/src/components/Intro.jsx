import { useState, useEffect } from 'react'

function Intro({ fading }) {
  const fullText = "We're Getting Married!"
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <div className="intro__content">
        <h1 className="intro__title intro__title--typing">
          {displayText}
          <span className={`intro__cursor ${showCursor ? '' : 'intro__cursor--hidden'}`}>|</span>
        </h1>
        <div className="intro__hearts">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
      </div>
    </div>
  )
}

export default Intro
