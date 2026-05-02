function Intro({ fading }) {
  return (
    <div className={`intro ${fading ? 'intro--fading' : ''}`}>
      <div className="intro__content">
        <p className="intro__subtitle">우리 결혼합니다</p>
        <h1 className="intro__title">우리 결혼했어요</h1>
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
