import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useAuth } from "../AuthContext/AuthContext";
import AuthHeader from "../AuthHeader/AuthHeader";

const MyLayout: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.container}>
      {isLoggedIn ? <Header /> : <AuthHeader />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyLayout;
