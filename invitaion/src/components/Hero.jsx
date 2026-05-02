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
          <span>김신랑</span>
          <span className="hero__heart">♥</span>
          <span>이신부</span>
        </p>
        <p className="hero__date">2025. 03. 15. SAT PM 2:00</p>
        <p className="hero__venue">그랜드 웨딩홀 5층 그랜드볼룸</p>
      </div>
    </section>
  )
}

export default Hero
