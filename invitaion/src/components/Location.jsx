function Location() {
  const address = '서울특별시 영등포구 여의대방로 259'
  const venueName = '공군호텔'

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다.')
  }

  const openKakaoMap = () => {
    window.open('https://map.kakao.com/link/search/' + encodeURIComponent(venueName), '_blank')
  }

  const openNaverMap = () => {
    window.open('https://map.naver.com/v5/search/' + encodeURIComponent(venueName), '_blank')
  }

  const openTMap = () => {
    window.open('https://apis.openapi.sk.com/tmap/app/routes?appKey=&name=' + encodeURIComponent(venueName), '_blank')
  }

  return (
    <section id="location" className="section location">
      <h2 className="section__title">오시는 길</h2>

      <div className="location__venue">
        <h3>공군호텔</h3>
        <p className="location__floor">3층 그랜드볼룸</p>
      </div>

      <div className="location__address">
        <p>{address}</p>
        <button className="location__copy" onClick={copyAddress}>
          주소 복사
        </button>
      </div>

      <div className="location__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5!2d126.9177!3d37.5139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f!2z6rO16rWw7Zi47YWU!5e0!3m2!1sko!2skr!4v1"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="공군호텔 위치"
        />
      </div>

      <div className="location__buttons">
        <button onClick={openKakaoMap} className="location__btn location__btn--kakao">
          카카오맵
        </button>
        <button onClick={openNaverMap} className="location__btn location__btn--naver">
          네이버지도
        </button>
        <button onClick={openTMap} className="location__btn location__btn--tmap">
          티맵
        </button>
      </div>

      <div className="location__transport">
        <div className="location__transport-item">
          <h4>지하철</h4>
          <p>1호선 대방역 1번 출구 도보 3분</p>
        </div>
        <div className="location__transport-item">
          <h4>버스</h4>
          <p>대방역 정류장 하차</p>
        </div>
        <div className="location__transport-item">
          <h4>주차</h4>
          <p>공군호텔 내 주차장 이용 가능</p>
        </div>
      </div>
    </section>
  )
}

export default Location
