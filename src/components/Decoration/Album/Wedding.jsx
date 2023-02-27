import React from "react";
import "./album.css";
import Images from "../../../common/Images/Images";

import img1 from "../../../assets/Wedding/1.jpg";
import img2 from "../../../assets/Wedding/2.jpg";
import img3 from "../../../assets/Wedding/3.jpg";
import img4 from "../../../assets/Wedding/4.jpg";
import img5 from "../../../assets/Wedding/5.jpg";
import img6 from "../../../assets/Wedding/6.jpg";
import img7 from "../../../assets/Wedding/7.jpg";
import img8 from "../../../assets/Wedding/8.jpg";
import img9 from "../../../assets/Wedding/9.jpg";
import img10 from "../../../assets/Wedding/10.jpg";
import img11 from "../../../assets/Wedding/11.jpg";
import img12 from "../../../assets/Wedding/12.jpg";
import img13 from "../../../assets/Wedding/13.jpg";
import img14 from "../../../assets/Wedding/14.jpg";
import img15 from "../../../assets/Wedding/15.jpg";
import img16 from "../../../assets/Wedding/16.jpg";



const Wedding = () => {
  const galleryImg = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
    {
      img: img11,
    },
    {
      img: img12,
    },
    {
      img: img13,
    },
    {
      img: img14,
    },
    {
      img: img15,
    },
    {
      img: img16,
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

        {/* <div className="gallery">
          <Images galleryImg={galleryImg2} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="gallery">
          <Images galleryImg={galleryImg3} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corrupti!</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Wedding;
