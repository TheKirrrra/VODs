import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LECVideos from "./pages/LEC/LECVideos";
import LCKVideos from "./pages/LCK/LCKVideos";
import PrimeLeagueVideos from "./pages/PrimeLeague/PrimeLeagueVideos";
import MyLayout from "./components/Layout/MyLayout";

const Index: React.FC = () => {
    return (
      
        <HashRouter>
          <Routes>
            <Route path="/" element={<MyLayout />}>
              <Route index element={<Home />} />
              <Route path="/lec" element={<LECVideos />} />
              <Route path="/lck" element={<LCKVideos />} />
              <Route path="/prime-league" element={<PrimeLeagueVideos />} />
              <Route path="*" element={<h1>Page does not exist!</h1>} />
            </Route>
          </Routes>
        </HashRouter>
      
    );
  };
  
  export default Index;