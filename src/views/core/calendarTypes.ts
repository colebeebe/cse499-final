export type CalendarView = 'year' | 'month' | 'week' | 'day';

export type CalendarProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentView: React.Dispatch<React.SetStateAction<CalendarView>>;
};
