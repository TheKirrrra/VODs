import React from "react";
import {
  BrowserRouter as HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import MyLayout from "./components/Layout/MyLayout";
import PrimeLeagueVideos from "./pages/PrimeLeague/PrimeLeagueVideos";
import Home from "./components/Home/Home";
import LCKVideos from "./pages/LCK/LCKVideos";
import LECVideos from "./pages/LEC/LECVideos";
import { useAuth } from "./components/AuthContext/AuthContext";

import RegistrationForm from "./components/Registration/RegistrationForm";
import LoginPage from "./components/Login/LoginForm";

const Index: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HashRouter>
      <Routes>
        {/* Routes for authenticated users */}
        {isLoggedIn && (
          <Route element={<MyLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lck" element={<LCKVideos />} />
            <Route path="/lec" element={<LECVideos />} />
            <Route path="/prime-league" element={<PrimeLeagueVideos />} />
          </Route>
        )}
        {/* Routes for unauthenticated users */}
        {!isLoggedIn && (
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationForm />} />
          </Route>
        )}
        {/* Redirect unauthenticated users to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
};

export default Index;
