import { NavLink } from 'react-router-dom';
import './innerSidebar.css';

function CalendarSidebar() {
  return (
    <div className="sidebar__inner">
      <div className="sidebar__inner__foreground">
        <ul>
          <li>
            <NavLink end to='/calendar' className={({ isActive }) => isActive ? 'active-link' : ''}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to='todo' className={({ isActive }) => isActive ? 'active-link' : ''}>
              To-Do
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CalendarSidebar;
