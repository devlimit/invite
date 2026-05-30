function Hero() {
  const placeholderMain = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200" viewBox="0 0 800 1200">
      <rect fill="#f5e6d3" width="800" height="1200"/>
      <text x="400" y="600" text-anchor="middle" fill="#d4a5a5" font-size="32" font-family="serif">Wedding Photo</text>
    </svg>
  `)}`

  return (
    <section id="hero" className="hero">
      <div className="hero__image">
        <img
          src={placeholderMain}
          alt="웨딩 메인 사진"
        />
        <div className="hero__overlay">
          <p className="hero__text">With Love, Always</p>
        </div>
      </div>
      <div className="hero__info">
        <p className="hero__names">
          <span>이경수</span>
          <span className="hero__heart">♥</span>
          <span>신혜림</span>
        </p>
        <p className="hero__date">2026. 09. 19. SAT PM 5:40</p>
        <p className="hero__venue">공군호텔 3층 그랜드볼룸</p>
      </div>
    </section>
  )
}

export default Hero
