import { useState } from 'react'

const env = import.meta.env

const accounts = {
  groom: {
    title: '신랑측',
    accounts: [
      { bank: env.VITE_GROOM_BANK, number: env.VITE_GROOM_ACCOUNT, holder: env.VITE_GROOM_NAME },
      { bank: env.VITE_GROOM_FATHER_BANK, number: env.VITE_GROOM_FATHER_ACCOUNT, holder: env.VITE_GROOM_FATHER_NAME },
      { bank: env.VITE_GROOM_MOTHER_BANK, number: env.VITE_GROOM_MOTHER_ACCOUNT, holder: env.VITE_GROOM_MOTHER_NAME },
    ].filter(a => a.bank && a.number)
  },
  bride: {
    title: '신부측',
    accounts: [
      { bank: env.VITE_BRIDE_BANK, number: env.VITE_BRIDE_ACCOUNT, holder: env.VITE_BRIDE_NAME },
      { bank: env.VITE_BRIDE_FATHER_BANK, number: env.VITE_BRIDE_FATHER_ACCOUNT, holder: env.VITE_BRIDE_FATHER_NAME },
      { bank: env.VITE_BRIDE_MOTHER_BANK, number: env.VITE_BRIDE_MOTHER_ACCOUNT, holder: env.VITE_BRIDE_MOTHER_NAME },
    ].filter(a => a.bank && a.number)
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
