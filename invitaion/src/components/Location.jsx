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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9036382377226!2d126.92162147538369!3d37.51019082735786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f0fa6e6079f%3A0x47f82d26a777772a!2z6rO16rWw7Zi47YWUIOybqOuUqe2ZgA!5e0!3m2!1sko!2skr!4v1780740491634!5m2!1sko!2skr"
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
      </div>

      <div className="location__transport">
        <div className="location__transport-item">
          <h4>지하철</h4>
          <p>1호선 대방역 5번출구(도보5분)</p>
          <p>신림선 대방역 6번출구(도보5분)</p>
          <p>신림선 서울지방병무청역 2번출구(도보9분)</p>
          <p>7호선 보라매역 7번출구(도보15분)</p>
        </div>
        <div className="location__transport-item">
          <h4>버스</h4>
          <p>간선 : 150, 461, 505, 753 </p>
            <p>   지선 : 5531, 5534, 5623, 5633, 6514, 6713   </p>
            <p>  광선 : M5609   </p>
            <p>   마을 : 영등포07 </p>
        </div>
        <div className="location__transport-item">
          <h4>주차</h4>
          <p>공군호텔 내 주차장 이용 가능</p>
           <p> (예식 하객 기준 3시간 무료주차 제공)</p>
        </div>
      </div>
    </section>
  )
}

export default Location
