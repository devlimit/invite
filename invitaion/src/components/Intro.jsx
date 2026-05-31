function Intro({ fading, onEnd }) {
  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <video
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
