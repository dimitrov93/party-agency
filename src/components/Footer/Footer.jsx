import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <ul className="permalinks">
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
        <li>
            <Link to={"/contacts"}>Контакти</Link>
          </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />{" "}
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; All rights reserved. Made by Tsvetomir</small>
      </div>
    </footer>
  );
};

export default Footer;
