import React from "react";
import { BrowserRouter as Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import LECVideos from "./pages/LEC/LECVideos";
import LCKVideos from "./pages/LCK/LCKVideos";
import PrimeLeagueVideos from "./pages/PrimeLeague/PrimeLeagueVideos";

import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    //  <AuthContextProvider>
      <HashRouter>
        <Routes>
          {/* <Route path="/login" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
          </Route>
          <Route path="/registration" element={<AuthLayout />}>
            <Route index element={<RegistrationForm />} />
          </Route> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/lec" element={<LECVideos />} />
            <Route path="/lck" element={<LCKVideos />} />
            <Route path="/prime-league" element={<PrimeLeagueVideos />} />
          </Route>
        </Routes>
      </HashRouter>
    //  </AuthContextProvider>
  );
};

export default App;
