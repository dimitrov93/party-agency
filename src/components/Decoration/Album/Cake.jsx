import React from "react";
import "./album.css";
import Images from "../../../common/Images/Images";

import img1 from "../../../assets/Cage/1.jpg";



const Cake = () => {
  const galleryImg = [
    {
      img: img1,
    },
  ];


  return (
    <div className="container">
      <h3>ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ</h3>
      {/* <p>
          Ако сте вдъхновени от нашите декори и си представяте и вашия празник
          пъстър, цветен и вълшебен, можете да се възползвате от нашите вече
          изградени концепции
        </p> */}
      <div className="birthday__wrapper">
        {/*  */}
        <div className="gallery">
          <Images galleryImg={galleryImg} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cake;
