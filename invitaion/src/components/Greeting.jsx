function Greeting() {
  return (
    <section id="greeting" className="section greeting">
      <h2 className="section__title">인사말</h2>
      <div className="greeting__content">
        <p>
          서로 다른 길을 걸어온 두 사람이<br />
          이제 같은 길을 함께 걸어가려 합니다.
        </p>
        <p>
          저희 두 사람이 사랑으로 만나<br />
          믿음과 이해의 행복한 가정을 이루려 합니다.
        </p>
        <p>
          오셔서 축복해 주시면<br />
          더없는 기쁨으로 간직하겠습니다.
        </p>
      </div>
      <div className="greeting__parents">
        <p>
          <span className="parent-name">이아버지</span> · <span className="parent-name">이어머니</span>의 아들 <strong>경수</strong>
        </p>
        <p>
          <span className="parent-name">신아버지</span> · <span className="parent-name">신어머니</span>의 딸 <strong>혜림</strong>
        </p>
      </div>
    </section>
  )
}

export default Greeting
