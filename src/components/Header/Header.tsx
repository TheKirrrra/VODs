import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
      <NavLink to="/VODs" className={styles.navLink}>Home</NavLink>
        <NavLink to="/lck" className={styles.navLink}>LCK</NavLink>
        <NavLink to="/lec" className={styles.navLink}>LEC/LCS</NavLink>
        <NavLink to="/prime-league" className={styles.navLink}>Prime League</NavLink>
      </div>
      <div className={styles.authLinksContainer}>
        {isLoggedIn ? (
          <>
            <div className={styles.logoutButtonContainer}>
              <button onClick={logout} className={styles.logoutButton}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.authLink}>Login</NavLink>
            <NavLink to="/registration" className={styles.authLink}>Registration</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
