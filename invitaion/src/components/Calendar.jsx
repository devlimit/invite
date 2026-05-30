const WEDDING_DATE = new Date('2026-09-19')
const YEAR = WEDDING_DATE.getFullYear()
const MONTH = WEDDING_DATE.getMonth()
const DAY = WEDDING_DATE.getDate()

const DAYS = ['일', '월', '화', '수', '목', '금', '토']
const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

function Calendar() {
  const firstDay = new Date(YEAR, MONTH, 1).getDay()
  const lastDate = new Date(YEAR, MONTH + 1, 0).getDate()

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= lastDate; i++) {
    days.push(i)
  }

  return (
    <section id="calendar" className="section calendar">
      <h2 className="section__title">예식 일정</h2>
      <div className="calendar__header">
        <span className="calendar__year">{YEAR}</span>
        <span className="calendar__month">{MONTHS[MONTH]}</span>
      </div>
      <div className="calendar__grid">
        <div className="calendar__weekdays">
          {DAYS.map((day, i) => (
            <span key={day} className={i === 0 ? 'sunday' : i === 6 ? 'saturday' : ''}>
              {day}
            </span>
          ))}
        </div>
        <div className="calendar__days">
          {days.map((day, i) => (
            <span
              key={i}
              className={`calendar__day ${day === DAY ? 'calendar__day--wedding' : ''} ${
                (i % 7 === 0) ? 'sunday' : (i % 7 === 6) ? 'saturday' : ''
              }`}
            >
              {day}
              {day === DAY && <span className="calendar__heart">♥</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="calendar__time">
        <p>2026년 9월 19일 토요일 오후 5시 40분</p>
      </div>
    </section>
  )
}

export default Calendar
