// RegistrationForm.tsx
import React, { useState } from "react";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/register", {
        username,
        password,
      });
      if (response.data.success) {
        setRegistered(true);
      } else {
        setError("Ошибка при регистрации. Пожалуйста, попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Ошибка при попытке регистрации:", error);
      setError("Ошибка при попытке регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
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
      <button type="submit">Зарегистрироваться</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegistrationForm;
