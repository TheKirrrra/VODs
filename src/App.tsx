import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrimeLeagueVideos from "./pages/PrimeLeague/PrimeLeagueVideos";
import LECVideos from "./pages/LEC/LECVideos";
import LCKVideos from "./pages/LCK/LCKVideos";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lec" element={<LECVideos />} />
          <Route path="/lck" element={<LCKVideos />} />
          <Route path="/prime-league" element={<PrimeLeagueVideos />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
