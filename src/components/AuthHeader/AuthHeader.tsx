import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import styles from "./AuthHeader.module.css";

const AuthHeader: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        {!isLoggedIn && (
          <>
            <NavLink to="/login" className={styles.navLink}>
              Login
            </NavLink>
            <NavLink to="/registration" className={styles.navLink}>
              Registration
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
