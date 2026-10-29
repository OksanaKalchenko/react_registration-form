import { useState } from "react";

export default function RegistrationForm() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    city: "",
    color: "",
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="registration-form">
      <div className="info">
        <h1>Форма регистрации</h1>
        <p>Заполните все поля для регистрации</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            placeholder="Введите ваше имя"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            placeholder="Введите пароль"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>

        <label>
          Возраст
          <input
            type="number"
            placeholder="Введите ваш возраст"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>

        <label>
          Город
          <input
            type="text"
            placeholder="Введите ваш город"
            name="city"
            value={state.city}
            onChange={handleChange}
          />
        </label>

        <label>
          Любимый цвет
          <select name="color" value={state.color} onChange={handleChange}>
            <option value="" disabled hidden className="placeholder">
              Выберите цвет
            </option>
            <option value="red">Красный</option>
            <option value="yellow">Желтый</option>
            <option value="blue">Синий</option>
            <option value="green">Зеленый</option>
            <option value="orange">Оранжевый</option>
          </select>
        </label>

        <button type="submit" className="form__button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
