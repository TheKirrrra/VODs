import React, { useState } from "react";
import "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Login/LoginForm.module.css"; // Подключаем файл со стилями

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
    <div className="form-container">
      {loggedIn ? (
        <p>Вы успешно вошли!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Вход</h2>
          <div className="input-container">
            <label>
              Имя пользователя:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Пароль:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Войти</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;