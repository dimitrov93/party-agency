import React from "react";
import logo from '../logo.png';
import './navigation.css'

const Navigation = () => {
  return (
    <nav>
      
      <div>
        <img src={logo} alt="" className="logo" />
      </div>

      <div class="buttons">
        <a href="#">Button 1</a>
        <a href="#">Button 2</a>
        <a href="#">Button 3</a>
        <a href="#">Button 4</a>
      </div>
      <div class="buttons right-button">
        <a href="#">Button 5</a>
      </div>
    </nav>
  );
};

export default Navigation;
