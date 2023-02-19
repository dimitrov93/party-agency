import React from "react";
import logo from "../../assets/logo.png";
import "./navigation.css";
import { RxDropdownMenu } from "react-icons/rx";

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="" className="nav__logo" />

      <div className="drop__down">
        <button className="drop__btn">
          <RxDropdownMenu size={50} />
        </button>
        <div className="dropdown__content">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
        </div>
      </div>

      <div className="nav__buttons">
        <ul>
        <li>
            <a href="/">Начало</a>
          </li>
          <li>
            <a href="/">Украса</a>
          </li>
          <li>
            <a href="/">Покани за гости</a>
          </li>
          <li>
            <a href="/">Подаръци за гости</a>
          </li>
          <li>
            <a href="/">Кетъринг</a>
          </li>
        </ul>
      </div>
      <div className="nav__buttons right-button">
        <a href="/">Контакти</a>
      </div>
    </nav>
  );
};

export default Navigation;
