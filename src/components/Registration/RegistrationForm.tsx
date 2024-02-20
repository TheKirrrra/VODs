import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setRegistered(true);
  };

  return (
    <div>
      {registered ? (
        <p>Вы успешно зарегистрированы!</p>
      ) : (
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
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
