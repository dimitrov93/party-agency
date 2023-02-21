import React from "react";
import logo from "../../assets/logo4.png";
import "./navigation.css";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="" className="nav__logo" />
      </Link>
      <div className="drop__down">
        <button className="drop__btn">
          <RxDropdownMenu size={50} />
        </button>
        <div className="dropdown__content">
          <Link to="/decoration">Украса</Link>
          <Link to="/">Покани за гости</Link>
          <Link to="/">Подаръци за гости</Link>
          <Link to="/">Кетъринг</Link>
          <Link to="/contacts">Контакти</Link>
        </div>
      </div>

      <div className="nav__buttons">
        <ul>
          <li>
            <Link to={"/"}>Начало</Link>
          </li>
          <li>
            <Link to="/decoration">Украса</Link>
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
