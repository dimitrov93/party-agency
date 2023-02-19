import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="/">Начало</a></li>
        <li><a href="/">Украса</a></li>
        <li><a href="/">Покани за гости</a></li>
        <li><a href="/">Подаръци за гости</a></li>
        <li><a href="/">Кетъринг</a></li>
        <li><a href="/">Контакти</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /> </a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; All rights reserved. Made by Tsvetomir</small>
      </div>
    </footer>
  )
}

export default Footer