  import React, { useState } from "react";
  import axios from "axios";
  import { useAuth } from "../AuthContext/AuthContext";

  const LoginForm: React.FC = () => {
    const { login } = useAuth(); // Используем хук useAuth для доступа к функции login
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username,
          password,
        });
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          login(); // Вызываем функцию login после успешного входа
        } else {
          setError("Неверное имя пользователя или пароль!");
        }
      } catch (error) {
        console.error("Ошибка при попытке входа:", error);
        setError("Ошибка при попытке входа");
      }
    };

    return (
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
        {error && <p>{error}</p>}
      </form>
    );
  };

  export default LoginForm;
