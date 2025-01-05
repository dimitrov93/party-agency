import React from "react";
import logo from "../../assets/logo.png";
import "./navigation.css";
import { RxDropdownMenu } from "react-icons/rx";
import { GrUserFemale } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navigation = () => {
  const { user } = useAuthContext();
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
          <Link to="/cards">Покани за гости</Link>
          {/* <Link to="/">Подаръци за гости</Link> */}
          {/* <Link to="/catering">Кетъринг</Link> */}
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
            <Link to="/cards">Покани за гости</Link>
          </li>
          {/* <li>
            <Link to="/">Подаръци за гости</Link>
          </li> */}
          {/* <li>
            <Link to="/catering">Кетъринг</Link>
          </li> */}
          {user?.email && (
            <li>
              <Link to="/api/logout">
                <GrUserFemale />
              </Link>
            </li>
          )}
          <li>
            <Link to={"/contacts"}>Контакти</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
