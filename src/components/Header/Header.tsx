import styles from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <img
          src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
          alt="Home"
          style={{ width: "30px", height: "30px" }}
        />
      </NavLink>

      <NavLink to="/lec">LEC</NavLink>

      <NavLink to="/lck">LCK</NavLink>

      <NavLink to="/prime-league">PrimeLeague</NavLink>
    </div>
  );
};

export default Header;
