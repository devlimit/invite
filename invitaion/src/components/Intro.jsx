import { useEffect, useRef, useState } from 'react'
import { parse } from 'opentype.js'

const LINE1 = "We're getting"
const LINE2 = "Married"
const CHAR_DURATION = 0.6
const CHAR_GAP = 0.4

function CharPath({ d, drawDelay }) {
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
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: length || 5000,
        strokeDashoffset: length || 5000,
        fillOpacity: 0,
        animation: length > 0
          ? `drawStroke ${CHAR_DURATION}s ease-in-out forwards ${drawDelay}s,
             fillIn 0.3s ease forwards ${drawDelay + CHAR_DURATION * 0.8}s`
          : 'none',
      }}
    />
  )
}

function Intro({ fading }) {
  const [charPaths, setCharPaths] = useState([])
  const [viewBox, setViewBox] = useState('0 0 500 220')
  const [error, setError] = useState(false)

  useEffect(() => {
    const fontUrl = `${import.meta.env.BASE_URL}fonts/PinyonScript-Regular.ttf`
    fetch(fontUrl)
      .then(res => {
        if (!res.ok) throw new Error(`${res.status}`)
        return res.arrayBuffer()
      })
      .then(buffer => {
        const font = parse(buffer)
        const fontSize = 72

        const paths1 = font.getPaths(LINE1, 0, fontSize, fontSize)
        const paths2 = font.getPaths(LINE2, 30, fontSize * 2.3, fontSize)

        const allPaths = [...paths1, ...paths2]
        const allData = allPaths.map((p, i) => ({
          d: p.toPathData(2),
          delay: i * CHAR_GAP,
        }))

        const xs = allPaths.map(p => { const bb = p.getBoundingBox(); return [bb.x1, bb.x2] }).flat()
        const ys = allPaths.map(p => { const bb = p.getBoundingBox(); return [bb.y1, bb.y2] }).flat()
        const xMin = Math.min(...xs) - 10
        const xMax = Math.max(...xs) + 10
        const yMin = Math.min(...ys) - 10
        const yMax = Math.max(...ys) + 10

        setCharPaths(allData)
        setViewBox(`${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`)
      })
      .catch(err => {
        console.error('Font error:', err)
        setError(true)
      })
  }, [])

  if (error) {
    return (
      <div className={`intro ${fading ? 'intro--fading' : ''}`}>
        <div className="intro__content">
          <h1 className="intro__title--fallback">
            We&apos;re getting<br />Married
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <div className="intro__content">
        {charPaths.length > 0 ? (
          <svg className="intro__svg" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {charPaths.map((cp, i) => (
              <CharPath key={i} d={cp.d} drawDelay={cp.delay} />
            ))}
          </svg>
        ) : (
          <div className="intro__loading" />
        )}
      </div>
    </div>
  )
}

export default Intro
