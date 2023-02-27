import React from "react";
import "./album.css";
import Images from "../../../common/Images/Images";

import img1 from "../../../assets/Anniversary/a1/1.jpg";
import img2 from "../../../assets/Anniversary/a1/2.jpg";
import img3 from "../../../assets/Anniversary/a1/3.jpg";
import img4 from "../../../assets/Anniversary/a1/4.jpg";
import img5 from "../../../assets/Anniversary/a1/5.jpg";
import img6 from "../../../assets/Anniversary/a1/6.jpg";
import img7 from "../../../assets/Anniversary/a1/7.jpg";
import img8 from "../../../assets/Anniversary/a1/8.jpg";
import img9 from "../../../assets/Anniversary/a1/9.jpg";
import img10 from "../../../assets/Anniversary/a1/10.jpg";
import img11 from "../../../assets/Anniversary/a1/11.jpg";
import img12 from "../../../assets/Anniversary/a1/12.jpg";

import img21 from "../../../assets/Anniversary/a2/1.jpg";
import img22 from "../../../assets/Anniversary/a2/2.jpg";
import img23 from "../../../assets/Anniversary/a2/3.jpg";
import img24 from "../../../assets/Anniversary/a2/4.jpg";
import img25 from "../../../assets/Anniversary/a2/5.jpg";
import img26 from "../../../assets/Anniversary/a2/6.jpg";
import img27 from "../../../assets/Anniversary/a2/7.jpg";
import img28 from "../../../assets/Anniversary/a2/8.jpg";
import img29 from "../../../assets/Anniversary/a2/8.jpg";
import img30 from "../../../assets/Anniversary/a2/9.jpg";
import img31 from "../../../assets/Anniversary/a2/10.jpg";



const Anniversary = () => {
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
  ];

  const galleryImg2 = [
    {
      img: img21,
    },
    {
      img: img22,
    },
    {
      img: img23,
    },
    {
      img: img24,
    },
    {
      img: img25,
    },
    {
      img: img26,
    },
    {
      img: img27,
    },
    {
      img: img28,
    },
    {
      img: img29,
    },
    {
      img: img30,
    },
    {
      img: img31,
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

        <div className="gallery">
          <Images galleryImg={galleryImg2} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Anniversary;
