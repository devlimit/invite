import { useState, useRef, useEffect } from 'react'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true)
          }).catch(() => {
            setIsPlaying(false)
          })
        }
      }
    }

    document.addEventListener('click', handleInteraction, { once: true })
    return () => document.removeEventListener('click', handleInteraction)
  }, [hasInteracted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src="/invite/music/bgm.mp3" type="audio/mpeg" />
      </audio>
      <button
        className={`music-player__btn ${isPlaying ? 'music-player__btn--playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? '음악 정지' : '음악 재생'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" opacity="0.3"/>
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )}
      </button>
    </div>
  )
}

export default MusicPlayer
