import React from "react";
import logo from "../../assets/logo.png";
import "./navigation.css";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="" className="nav__logo" />

      <div className="drop__down">
        <button className="drop__btn">
          <RxDropdownMenu size={50} />
        </button>
        <div className="dropdown__content">
          <Link to="/">Link 1</Link>
          <Link to="/">Link 2</Link>
          <Link to="/">Link 3</Link>
        </div>
      </div>

      <div className="nav__buttons">
        <ul>
          <li>
            <Link to={"/"}>Начало</Link>
          </li>
          <li>
            <Link to="/">Украса</Link>
          </li>
          <li>
            <Link to="/">Покани за гости</Link>
          </li>
          <li>
            <Link to="/">Подаръци за гости</Link>
          </li>
          <li>
            <Link to="/">Кетъринг</Link>
          </li>
        </ul>
      </div>
      <div className="nav__buttons right-button">
        <ul>
          <li>
            <Link to={"/contacts"}>Контакти</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
