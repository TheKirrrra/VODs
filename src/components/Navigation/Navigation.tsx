import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/lec" className="nav-link">LEC</NavLink>
        </li>
        <li>
          <NavLink to="/lck" className="nav-link">LCK</NavLink>
        </li>
        <li>
          <NavLink to="/prime-league" className="nav-link">Prime League</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;