import React from "react";
import "./bapgallery.css";

const BapGallery = ({ pics }) => {
  console.log(pics);
  return (
    <div className="img__container">
      <div className="main__image">
        <img
          src="https://i.pinimg.com/originals/c0/b1/ba/c0b1ba4ded1dbd237dbcd7fd72e3fcba.jpg"
          alt="big one"
        />
      </div>
      <div className="scrollable__images">
        {pics &&
          pics.map((pic, index) => {
            return (<div className="scrollable__images_items">
                <img src={pic.img} alt="" key={index} />;
            </div>)
          })}
      </div>
    </div>
  );
};

export default BapGallery;
