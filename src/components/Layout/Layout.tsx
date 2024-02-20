import { FC, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import LoginForm from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Login/LoginForm";
import RegistrationForm from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Registration/RegistrationForm";
import { AuthContext } from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/AuthContext/AuthContext";

const Layout: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <AuthContext.Provider value={{ showLoginForm, showRegistrationForm, setShowLoginForm, setShowRegistrationForm }}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {showLoginForm && <LoginForm />}
          {showRegistrationForm && <RegistrationForm />}
          <Outlet />
        </main>
        <Footer/>
      </div>
    </AuthContext.Provider>
  );
};

export default Layout;