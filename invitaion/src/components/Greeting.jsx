function Greeting() {
  return (
    <section id="greeting" className="section greeting">
      <h2 className="section__title">인사말</h2>
      <div className="greeting__content">
        <p>
          신선한 바람이 불어오는 9월<br />
          이제 같은 길을 함께 걸어가려 합니다.
        </p>
        <p>
          오셔서 축복해 주시면<br />
          더없는 기쁨으로 간직하겠습니다.
        </p>
      </div>
      <div className="greeting__parents">
        <p>
          <span className="parent-name">이원재</span> · <span className="parent-name">조은숙</span>의 아들 <strong>경수</strong>
        </p>
        <p>
          <span className="parent-name">신현성</span> · <span className="parent-name">박용자</span>의 딸 <strong>혜림</strong>
        </p>
      </div>
    </section>
  )
}

export default Greeting
