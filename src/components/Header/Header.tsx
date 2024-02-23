import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext"; // Импортируем хук useAuth
import styles from "./Header.module.css"; // Импортируем стили

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth(); // Используем хук useAuth для получения статуса аутентификации и функции logout

  return (
    <div className={styles.navbar}>
      <div>
        <NavLink to="/" className={styles.navLink}>Home</NavLink> {/* Используем styles.navLink */}
        <NavLink to="/lck" className={styles.navLink} >LCK</NavLink>
        <NavLink to="/lec" className={styles.navLink} >LEC/LCS</NavLink>
        <NavLink to="/prime-league" className={styles.navLink} >Prime League</NavLink>
      </div>
      <div className={styles.authLinksContainer}>
        {isLoggedIn ? (
          <button onClick={logout} className={styles.logoutButton}>Logout</button> 
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