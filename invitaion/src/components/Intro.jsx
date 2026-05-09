import { useState, useEffect } from 'react'

function Intro({ fading }) {
  const line1 = "We're getting"
  const line2 = "Married"
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    let index = 0

    const typeFirstLine = setInterval(() => {
      if (index < line1.length) {
        setText1(line1.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeFirstLine)
        setPhase(2)
      }
    }, 180)

    return () => clearInterval(typeFirstLine)
  }, [])

  useEffect(() => {
    if (phase !== 2) return

    let index = 0
    const typeSecondLine = setInterval(() => {
      if (index < line2.length) {
        setText2(line2.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeSecondLine)
      }
    }, 180)

    return () => clearInterval(typeSecondLine)
  }, [phase])

  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <div className="intro__content">
        <h1 className="intro__title">
          <span className="intro__line">{text1}</span>
          <span className="intro__line">{text2}</span>
        </h1>
      </div>
    </div>
  )
}

export default Intro
