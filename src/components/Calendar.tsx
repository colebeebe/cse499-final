import './Calendar.css';

function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = new Date(year, month, 1).getDay();
  const daysAfterMonth = 7 - ((offset + daysInMonth) % 7);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Fill the calendar with days
  let calendarCells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Add blank days at end of month if it's not a full week
  if (daysAfterMonth < 7) {
    calendarCells = [
      ...calendarCells,
      ...Array(daysAfterMonth).fill(null)
    ];
  }

  // Format into weeks
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  return (
    <table className="calendar__component">
      <caption>
        {today.toLocaleString("default", { month: "long" })} {year}
      </caption>
      <thead>
        {weekDays.map(day => <th key={day}>{day}</th>)}
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
