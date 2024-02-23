import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // Импортируем ProtectedRoute

const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/registration";

  return (
    <div className={styles.container}>
      {isAuthPage ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <main className={styles.main}>
            <ProtectedRoute path="/" element={<Outlet />} /> {/* Здесь используем ProtectedRoute */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;