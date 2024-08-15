import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div>
        <NavLink
          className="logo"
          to="/math-magicians"
        >
          Calcify
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/math-magicians"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Calculator"
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Quote"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
