import { getCalendarData } from '../core/calendarData';
import './Calendar.css';

type CalendarProps = {
  date: Date;
};

function Calendar({ date }: CalendarProps) {
  const { today, weekDays, weeks } = getCalendarData(date);

  return (
    <table className="calendar__component">
      <caption>
        {date.toLocaleString("default", { month: "long" })} {today.year}
      </caption>
      <thead>
        <tr>
          {weekDays.map(day => <th key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>{week.map((day, j) => (
              <td key={j} className={day ? "" : "outside-month"}>
                <div className="day-cell">{day ?? ''}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
