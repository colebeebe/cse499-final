import { getCalendarData } from '../core/calendarData';
import './Calendar.css';

type CalendarProps = {
  date: Date;
};

function Calendar({ date }: CalendarProps) {
  const { dataDate, weekDays, weeks } = getCalendarData(date);
  const today = new Date();

  return (
    <table className="calendar__component">
      <caption>
        {date.toLocaleString("default", { month: "long" })} {dataDate.getFullYear()}
      </caption>
      <thead>
        <tr>
          {weekDays.map(day => <th key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>{week.map((day, j) => (
              <td key={j} className={day ? '' : 'outside-month'}>
                <div className="day-cell">
                  <div className={
                    [
                      (
                        day === today.getDate() &&
                        dataDate.getMonth() === today.getMonth() &&
                        dataDate.getFullYear() === today.getFullYear()
                      ) ? 'today-date' : '',
                      'day-number'
                    ].filter(Boolean).join(' ')
                  }>
                    {day ?? ''}
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
