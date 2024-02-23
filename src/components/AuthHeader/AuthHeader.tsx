import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthHeader.module.css";

const AuthHeader: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-center"]}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  );
};

export default AuthHeader;