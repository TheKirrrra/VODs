import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import LECVideos from "./pages/LEC/LECVideos";
import LCKVideos from "./pages/LCK/LCKVideos";
import PrimeLeagueVideos from "./pages/PrimeLeague/PrimeLeagueVideos";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import { AuthContextProvider } from "./components/AuthContext/AuthContext";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider> {/* Обернуть компонент App в AuthContextProvider */}
        <Routes>
          <Route path="/login" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
          </Route>
          <Route path="/registration" element={<AuthLayout />}>
            <Route index element={<RegistrationForm />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/lec" element={<LECVideos />} />
            <Route path="/lck" element={<LCKVideos />} />
            <Route path="/prime-league" element={<PrimeLeagueVideos />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;