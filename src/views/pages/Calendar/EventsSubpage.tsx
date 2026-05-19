import { useState } from 'react';
import MonthView from '../../components/calendars/MonthView/MonthView';
import './EventsSubpage.css';

function EventsSubpage() {
  const [date, setDate] = useState(new Date());

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
    <div className="events__subpage">
      <title>Chrona | Events</title>
      <div className="calendar">
        <MonthView date={date} prevMonth={prevMonth} nextMonth={nextMonth} />
      </div>
    </div>
  );
}

export default EventsSubpage;
