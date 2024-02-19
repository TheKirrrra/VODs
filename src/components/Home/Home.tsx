import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/lck">
          <img src="https://en.wikipedia.org/wiki/League_of_Legends_Champions_Korea#/media/File:League_of_Legends_Champions_Korea_logo.svg" alt="LCK" />
        </Link>
        <Link to="/lec">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/League_of_Legends_EMEA_Championship.png" alt="LEC" />
        </Link>
        <Link to="/prime-league">
          <img src="https://liquipedia.net/commons/images/thumb/8/8f/Prime_League_lightmode.png/440px-Prime_League_lightmode.png" alt="PrimeLeague" />
        </Link>
      </div>
    </div>
  );
};

export default Home;