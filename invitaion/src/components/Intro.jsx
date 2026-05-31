import { useEffect, useRef } from 'react'

function Intro({ fading, onEnd }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => onEnd())
  }, [])

  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <video
        ref={videoRef}
        className="intro__video"
        src={`${import.meta.env.BASE_URL}intro.mp4`}
        autoPlay
        playsInline
        muted
        onEnded={onEnd}
        onError={onEnd}
      />
    </div>
  )
}

export default Intro