import React from "react";
import logo from "../../assets/logo.png";
import "./navigation.css";
import { RxDropdownMenu } from "react-icons/rx";
import { GrUserFemale } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router";

const Navigation = () => {
  const { user } = useAuthContext();
  return (
    <nav>
      <NavLink to={"/"}>
        <img src={logo} alt="" className="nav__logo" />
      </NavLink>
      <div className="drop__down">
        <button className="drop__btn">
          <RxDropdownMenu size={50} />
        </button>
        <div className="dropdown__content">
          <NavLink to="/decoration">Украса</NavLink>
          <NavLink to="/cards">Покани за гости</NavLink>
          {/* <NavLink to="/">Подаръци за гости</NavLink> */}
          {/* <NavLink to="/catering">Кетъринг</NavLink> */}
          <NavLink to="/contacts">Контакти</NavLink>
        </div>
      </div>

      <div className="nav__buttons">
        <ul>
          <li>
            <NavLink to={"/"}>Начало</NavLink>
          </li>
          <li>
            <NavLink to="/decoration">Украса</NavLink>
          </li>
          <li>
            <NavLink to="/cards">Покани за гости</NavLink>
          </li>
          {/* <li>
            <NavLink to="/">Подаръци за гости</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/catering">Кетъринг</NavLink>
          </li> */}
          {user?.email && (
            <li>
              <NavLink to="/api/logout">
                <GrUserFemale />
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/contacts"}>Контакти</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
