function Couple() {
  const placeholderGroom = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
      <rect fill="#f5e6d3" width="300" height="300"/>
      <text x="150" y="150" text-anchor="middle" fill="#d4a5a5" font-size="20" font-family="serif">Groom</text>
    </svg>
  `)}`

  const placeholderBride = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
      <rect fill="#f5e6d3" width="300" height="300"/>
      <text x="150" y="150" text-anchor="middle" fill="#d4a5a5" font-size="20" font-family="serif">Bride</text>
    </svg>
  `)}`

  return (
    <section id="couple" className="section couple">
      <h2 className="section__title">신랑 & 신부</h2>
      <div className="couple__grid">
        <div className="couple__person">
          <div className="couple__photo">
            <img
              src={placeholderGroom}
              alt="신랑"
            />
          </div>
          <div className="couple__info">
            <p className="couple__role">신랑</p>
            <p className="couple__name">이경수</p>
            <div className="couple__contact">
              <a href="tel:010-1234-5678" className="couple__phone">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                연락하기
              </a>
            </div>
          </div>
        </div>

        <div className="couple__divider">
          <span>♥</span>
        </div>

        <div className="couple__person">
          <div className="couple__photo">
            <img
              src={placeholderBride}
              alt="신부"
            />
          </div>
          <div className="couple__info">
            <p className="couple__role">신부</p>
            <p className="couple__name">신혜림</p>
            <div className="couple__contact">
              <a href="tel:010-9876-5432" className="couple__phone">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                연락하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Couple
