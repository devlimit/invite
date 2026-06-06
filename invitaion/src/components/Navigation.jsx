import { useState } from 'react'

const menuItems = [
  { id: 'hero', label: '메인' },
  { id: 'greeting', label: '인사말' },
  { id: 'couple', label: '소개' },
  { id: 'calendar', label: '달력' },
  { id: 'dday', label: '디데이' },
  { id: 'gallery', label: '갤러리' },
  { id: 'location', label: '오시는길' },
  { id: 'account', label: '계좌번호' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        className={`nav-toggle ${isOpen ? 'nav-toggle--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="메뉴"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
        <ul className="nav__list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav__item">
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Navigation
