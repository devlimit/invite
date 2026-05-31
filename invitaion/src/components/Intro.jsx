import { useEffect, useRef, useState } from 'react'

function Intro({ fading, onEnd }) {
  const videoRef = useRef(null)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.play().catch(() => setNeedsTap(true))

    const timeout = setTimeout(onEnd, 30000)
    return () => clearTimeout(timeout)
  }, [])

  const handleTap = () => {
    const video = videoRef.current
    if (!video) return
    setNeedsTap(false)
    video.play().catch(onEnd)
  }

  return (
    <div
      className={`intro ${fading ? 'intro--fading' : ''}`}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}video-backgroud.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <video
        ref={videoRef}
        className="intro__video"
        src={`${import.meta.env.BASE_URL}intro.mp4`}
        playsInline
        muted
        onEnded={onEnd}
      />
      {needsTap && (
        <button className="intro__tap" onClick={handleTap}>
          초대합니다.
        </button>
      )}
    </div>
  )
}

export default Intro