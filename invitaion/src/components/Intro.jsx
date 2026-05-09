import { useEffect, useRef, useState } from 'react'
import { parse } from 'opentype.js'

const LINE1 = "We're getting"
const LINE2 = "Married"

function HandwritingPath({ d, delay = 0, duration = 4 }) {
  const pathRef = useRef(null)
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength())
    }
  }, [d])

  if (!d) return null

  return (
    <path
      ref={pathRef}
      d={d}
      fill="#d4a5a5"
      stroke="#d4a5a5"
      strokeWidth="0.5"
      style={{
        strokeDasharray: length || 10000,
        strokeDashoffset: length || 10000,
        fillOpacity: 0,
        animation: length > 0
          ? `drawStroke ${duration}s ease forwards ${delay}s, fillIn 0.8s ease forwards ${delay + duration * 0.85}s`
          : 'none',
      }}
    />
  )
}

function Intro({ fading }) {
  const [paths, setPaths] = useState({ line1: null, line2: null, viewBox: '0 0 500 200' })
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/fonts/PinyonScript-Regular.ttf')
      .then(res => {
        if (!res.ok) throw new Error(`fetch failed: ${res.status}`)
        return res.arrayBuffer()
      })
      .then(buffer => {
        const font = parse(buffer)
        const fontSize = 72

        const p1 = font.getPath(LINE1, 0, fontSize, fontSize)
        const p2 = font.getPath(LINE2, 30, fontSize * 2.3, fontSize)

        const bb1 = p1.getBoundingBox()
        const bb2 = p2.getBoundingBox()
        const xMin = Math.min(bb1.x1, bb2.x1) - 10
        const w = Math.max(bb1.x2, bb2.x2) - xMin + 20
        const h = bb2.y2 + 20

        setPaths({
          line1: p1.toPathData(2),
          line2: p2.toPathData(2),
          viewBox: `${xMin} -10 ${w} ${h}`,
        })
      })
      .catch(err => {
        console.error('Font load error:', err)
        setError(true)
      })
  }, [])

  if (error) {
    return (
      <div className={`intro ${fading ? 'intro--fading' : ''}`}>
        <div className="intro__content">
          <h1 className="intro__title intro__title--fallback">
            We&apos;re getting<br />Married
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <div className="intro__content">
        {paths.line1 ? (
          <svg
            className="intro__svg"
            viewBox={paths.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <HandwritingPath d={paths.line1} delay={0} duration={3.5} />
            <HandwritingPath d={paths.line2} delay={3.8} duration={2.5} />
          </svg>
        ) : (
          <div className="intro__loading" />
        )}
      </div>
    </div>
  )
}

export default Intro
