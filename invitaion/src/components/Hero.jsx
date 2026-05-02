function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__image">
        <img
          src="https://picsum.photos/seed/wedding-main/800/1200"
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
