function Location() {
  const address = '서울특별시 강남구 테헤란로 123 그랜드웨딩홀'

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다.')
  }

  const openKakaoMap = () => {
    window.open('https://map.kakao.com/link/search/' + encodeURIComponent(address), '_blank')
  }

  const openNaverMap = () => {
    window.open('https://map.naver.com/v5/search/' + encodeURIComponent(address), '_blank')
  }

  const openTMap = () => {
    window.open('https://apis.openapi.sk.com/tmap/app/routes?appKey=&name=' + encodeURIComponent('그랜드웨딩홀'), '_blank')
  }

  return (
    <section id="location" className="section location">
      <h2 className="section__title">오시는 길</h2>

      <div className="location__venue">
        <h3>그랜드 웨딩홀</h3>
        <p className="location__floor">5층 그랜드볼룸</p>
      </div>

      <div className="location__address">
        <p>{address}</p>
        <button className="location__copy" onClick={copyAddress}>
          주소 복사
        </button>
      </div>

      <div className="location__map">
        <img
          src="https://via.placeholder.com/600x300/f5f5f5/999999?text=Map+Location"
          alt="약도"
          className="location__map-img"
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
          <p>2호선 강남역 3번 출구 도보 5분</p>
        </div>
        <div className="location__transport-item">
          <h4>버스</h4>
          <p>강남역 정류장 하차 (140, 144, 145, 471)</p>
        </div>
        <div className="location__transport-item">
          <h4>주차</h4>
          <p>건물 내 지하주차장 이용 (2시간 무료)</p>
        </div>
      </div>
    </section>
  )
}

export default Location
