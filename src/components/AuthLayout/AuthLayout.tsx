import React from "react";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const AuthLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <AuthHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
