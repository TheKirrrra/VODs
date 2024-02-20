import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername === username && storedPassword === password) {
      setLoggedIn(true);
    } else {
      alert("Неверное имя пользователя или пароль!");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>Вы успешно вошли!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Вход</h2>
          <label>
            Имя пользователя:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;