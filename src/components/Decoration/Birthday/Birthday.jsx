import React from "react";
import "./birthday.css";
import BGallery from "./Gallery/BGallery";

import img1 from "../../../assets/bd/1.jpg";
import img2 from "../../../assets/bd/2.jpg";
import img3 from "../../../assets/bd/3.jpg";
import img4 from "../../../assets/bd/4.jpg";
import img5 from "../../../assets/bd/5.jpg";
import img6 from "../../../assets/bd/6.jpg";
import img7 from "../../../assets/bd/7.jpg";

import img11 from "../../../assets/bd2/1.jpg";
import img22 from "../../../assets/bd2/2.jpg";
import img33 from "../../../assets/bd2/3.jpg";

import img111 from "../../../assets/bd3/1.jpg";
import img222 from "../../../assets/bd3/2.jpg";
import img333 from "../../../assets/bd3/3.jpg";
import img444 from "../../../assets/bd3/4.jpg";

const Birthday = () => {
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
  ];

  const galleryImg2 = [
    {
      img: img11,
    },
    {
      img: img22,
    },
    {
      img: img33,
    },
  ];

  const galleryImg3 = [
    {
      img: img111,
    },
    {
      img: img222,
    },
    {
      img: img333,
    },
    {
      img: img444,
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
          <BGallery galleryImg={galleryImg} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="gallery">
          <BGallery galleryImg={galleryImg2} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="gallery">
          <BGallery galleryImg={galleryImg3} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corrupti!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
