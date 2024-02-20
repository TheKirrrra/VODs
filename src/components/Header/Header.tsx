import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        {" "}
        {/* Контейнер для Home */}
        <NavLink to="/" className={styles["home-link"]}>
          {" "}
          {/* Добавляем класс для стилизации Home */}
          <img
            src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
            alt="Home"
            style={{ width: "30px", height: "30px" }}
          />
        </NavLink>
      </div>

      <div className={styles["navbar-center"]}>
        {" "}
        {/* Контейнер для группы ссылок LCK, LEC и Prime League */}
        <NavLink to="/lck">LCK</NavLink>
        <NavLink to="/lec">LEC/LCS</NavLink>
        <NavLink to="/prime-league">Prime League</NavLink>
      </div>

      <div className={styles["navbar-right"]}>
        {" "}
        {/* Контейнер для ссылок авторизации и регистрации */}
        <div className={styles["auth-links-container"]}>
          {" "}
          {/* Добавляем контейнер для ссылок авторизации и регистрации */}
          <NavLink to="/login">Авторизация</NavLink>
          <NavLink to="/registration"> Регистрация</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
