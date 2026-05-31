import { useState } from 'react'

const accounts = {
  groom: {
    title: '신랑측',
    accounts: [
      { bank: '신한은행', number: '110-123-456789', holder: '이경수' },
      { bank: '국민은행', number: '', holder: '이원재' },
      { bank: '우리은행', number: '', holder: '조은숙' },
    ]
  },
  bride: {
    title: '신부측',
    accounts: [
      { bank: '신한은행', number: '110-457-030890', holder: '신혜림' },
      { bank: '은행', number: '', holder: '신현성' },
      { bank: '하나은행', number: '132-910403-15807', holder: '박용자' },
    ]
  }
}

function Account() {
  const [openSection, setOpenSection] = useState(null)

  const copyAccount = (number) => {
    navigator.clipboard.writeText(number.replace(/-/g, ''))
    alert('계좌번호가 복사되었습니다.')
  }

  return (
    <section id="account" className="section account">
      <h2 className="section__title">마음 전하실 곳</h2>
      <p className="account__desc">축하의 마음을 담아 축의금을 전달해 보세요.</p>

      {Object.entries(accounts).map(([key, section]) => (
        <div key={key} className="account__section">
          <button
            className={`account__toggle ${openSection === key ? 'account__toggle--open' : ''}`}
            onClick={() => setOpenSection(openSection === key ? null : key)}
          >
            <span>{section.title} 계좌번호</span>
            <span className="account__arrow">▼</span>
          </button>

          {openSection === key && (
            <div className="account__list">
              {section.accounts.map((acc, i) => (
                <div key={i} className="account__item">
                  <div className="account__info">
                    <span className="account__bank">{acc.bank}</span>
                    <span className="account__number">{acc.number}</span>
                    <span className="account__holder">{acc.holder}</span>
                  </div>
                  <button
                    className="account__copy"
                    onClick={() => copyAccount(acc.number)}
                  >
                    복사
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Account
