import { useState, useEffect } from 'react'

const WEDDING_DATE = new Date('2025-03-15T14:00:00')

function Dday() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = new Date()
    const diff = WEDDING_DATE - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      passed: false
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.passed) {
    return (
      <section id="dday" className="section dday">
        <h2 className="section__title">D-Day</h2>
        <div className="dday__message">
          <p>우리 결혼했어요!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="dday" className="section dday">
      <h2 className="section__title">D-Day</h2>
      <div className="dday__countdown">
        <div className="dday__item">
          <span className="dday__number">{timeLeft.days}</span>
          <span className="dday__label">DAYS</span>
        </div>
        <div className="dday__item">
          <span className="dday__number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="dday__label">HOURS</span>
        </div>
        <div className="dday__item">
          <span className="dday__number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="dday__label">MINS</span>
        </div>
        <div className="dday__item">
          <span className="dday__number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="dday__label">SECS</span>
        </div>
      </div>
    </section>
  )
}

export default Dday
