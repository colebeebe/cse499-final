import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import GlobalSidebar from './components/sidebars/GlobalSidebar';
import Home from './pages/Home';
import Calendar from './pages/Calendar/CalendarPage';
import EventsSubpage from './pages/Calendar/EventsSubpage';
import TodoSubpage from './pages/Calendar/TodoSubpage';
import { ThemeContext } from './contexts/themeContext';
import './App.css';

function App() {
  const [ theme, setTheme ] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalSidebar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/calendar' element={<Calendar />}>
          <Route index element={<EventsSubpage />} />
          <Route path='todo' element={<TodoSubpage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
