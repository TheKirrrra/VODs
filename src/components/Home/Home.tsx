import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Link to="/lck">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/League_of_Legends_Champions_Korea_logo.svg"
            alt="LCK"
            style={{ width: "300px", height: "300px" }}
          />
        </Link>
        <Link to="/lec">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/League_of_Legends_EMEA_Championship.png"
            alt="LEC"
            style={{ width: "600px", height: "300px" }}
          />
        </Link>
        <Link to="/prime-league">
          <img
            src="https://static.flashscore.com/res/image/data/CpzO9FQp-2a84Cj7G.png"
            alt="PrimeLeague"
            style={{ width: "300px", height: "300px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
