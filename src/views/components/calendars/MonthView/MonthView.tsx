import { getCalendarData } from '../../../core/calendarData';
import type { CalendarProps } from '../../../core/calendarTypes';
import './MonthView.css';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

function MonthView({ date, setDate, setCurrentView }: CalendarProps) {
  const data = getCalendarData(date);
  const today = new Date();

  const nextMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === 11) {
      setDate(new Date(year + 1, 0, 1));
      return;
    }
    setDate(new Date(year, month + 1, 1));
  };

  const prevMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === 0) {
      setDate(new Date(year - 1, 11, 1));
      return;
    }
    setDate(new Date(year, month - 1, 1));
  };

  return (
    <div className="month-view__component">
      <div className="calendar-caption">
        <div className="view-select-button__container">
          <button
            className="month-view-select btn"
            onClick={() => setCurrentView('month')}
          >
            Month
          </button>
          <button
            className="week-view-select btn"
            onClick={() => setCurrentView('week')}
          >
            Week
          </button>
        </div>
        <h1>
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </h1>
        <div className="month-select-button__container">
          <button className="btn" onClick={prevMonth}>
            &larr;
          </button>
          <button className="btn" onClick={nextMonth}>
            &rarr;
          </button>
          <button className="btn" onClick={() => setDate(new Date())}>
            Today
          </button>
        </div>
      </div>
      <div className="calendar-headers">
        {weekDays.map((day, i) => (
          <h2 key={i}>{day}</h2>
        ))}
      </div>
      <div className="calendar-body">
        {data.map((day, i) => (
          <div
            className={['calendar-cell', day ? '' : 'outside-month']
              .filter(Boolean)
              .join(' ')}
            key={i}
          >
            <div className="calendar-cell__day-container">
              <span
                className={
                  day === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear()
                    ? 'today-date'
                    : ''
                }
              >
                {day}
                {day === 10 && (
                  <div
                    style={{
                      position: 'absolute',
                      width:
                        'calc((var(--calendar__subpage__width) - 32px) / 7 * 3 - 15px)',
                      height: '20px',
                      backgroundColor: 'var(--yellow)',
                      padding: '2px 5px',
                      borderRadius: '5px',
                      color: 'hsl(0, 5%, 15%)',
                    }}
                  >
                    Test Event
                  </div>
                )}
                {day === 11 && (
                  <div
                    style={{
                      position: 'absolute',
                      marginTop: '28px',
                      backgroundColor: 'var(--orange)',
                      padding: '2px 5px',
                      borderRadius: '5px',
                      width: 'calc(var(--calendar__subpage__width) / 7 - 23px)',
                      color: 'hsl(0, 5%, 15%)',
                    }}
                  >
                    Second Event
                  </div>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;
