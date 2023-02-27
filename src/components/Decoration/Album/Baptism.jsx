import React from "react";
import "./album.css";
import Images from "../../../common/Images/Images";

import img1 from "../../../assets/Baptism/bp1/1.jpg";
import img2 from "../../../assets/Baptism/bp1/2.jpg";
import img3 from "../../../assets/Baptism/bp1/3.jpg";
import img4 from "../../../assets/Baptism/bp1/4.jpg";
import img5 from "../../../assets/Baptism/bp1/5.jpg";
import img6 from "../../../assets/Baptism/bp1/6.jpg";
import img7 from "../../../assets/Baptism/bp1/7.jpg";
import img8 from "../../../assets/Baptism/bp1/8.jpg";
import img9 from "../../../assets/Baptism/bp1/9.jpg";
import img10 from "../../../assets/Baptism/bp1/10.jpg";
import img11 from "../../../assets/Baptism/bp1/11.jpg";
import img12 from "../../../assets/Baptism/bp1/12.jpg";
import img13 from "../../../assets/Baptism/bp1/13.jpg";
import img14 from "../../../assets/Baptism/bp1/14.jpg";
import img15 from "../../../assets/Baptism/bp1/15.jpg";

import img21 from "../../../assets/Baptism/bp2/1.jpg";
import img22 from "../../../assets/Baptism/bp2/2.jpg";
import img23 from "../../../assets/Baptism/bp2/3.jpg";
import img24 from "../../../assets/Baptism/bp2/4.jpg";
import img25 from "../../../assets/Baptism/bp2/5.jpg";
import img26 from "../../../assets/Baptism/bp2/6.jpg";
import img27 from "../../../assets/Baptism/bp2/7.jpg";
import img28 from "../../../assets/Baptism/bp2/8.jpg";

import img31 from "../../../assets/Baptism/bp3/1.jpg";
import img32 from "../../../assets/Baptism/bp3/2.jpg";
import img33 from "../../../assets/Baptism/bp3/3.jpg";
import img34 from "../../../assets/Baptism/bp3/4.jpg";
import img35 from "../../../assets/Baptism/bp3/5.jpg";

import img41 from "../../../assets/Baptism/bp4/1.jpg";
import img42 from "../../../assets/Baptism/bp4/2.jpg";
import img43 from "../../../assets/Baptism/bp4/3.jpg";
import img44 from "../../../assets/Baptism/bp4/4.jpg";
import img45 from "../../../assets/Baptism/bp4/5.jpg";
import img46 from "../../../assets/Baptism/bp4/6.jpg";
import img47 from "../../../assets/Baptism/bp4/7.jpg";
import img48 from "../../../assets/Baptism/bp4/8.jpg";
import img49 from "../../../assets/Baptism/bp4/9.jpg";
import img410 from "../../../assets/Baptism/bp4/10.jpg";
import img411 from "../../../assets/Baptism/bp4/11.jpg";
import img412 from "../../../assets/Baptism/bp4/12.jpg";

import img51 from "../../../assets/Baptism/bp5/1.jpg";
import img52 from "../../../assets/Baptism/bp5/2.jpg";
import img53 from "../../../assets/Baptism/bp5/3.jpg";

import img61 from "../../../assets/Baptism/bp6/1.jpg";
import img62 from "../../../assets/Baptism/bp6/2.jpg";
import img63 from "../../../assets/Baptism/bp6/3.jpg";
import img64 from "../../../assets/Baptism/bp6/4.jpg";


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
  ];
  const galleryImg3 = [
    {
      img: img31,
    },
    {
      img: img32,
    },
    {
      img: img33,
    },
    {
      img: img34,
    },
    {
      img: img35,
    },
  ];

  const galleryImg4 = [
    {
      img: img41,
    },
    {
      img: img42,
    },
    {
      img: img43,
    },
    {
      img: img44,
    },
    {
      img: img45,
    },
    {
      img: img46,
    },
    {
      img: img47,
    },
    {
      img: img48,
    },
    {
      img: img49,
    },
    {
      img: img410,
    },
    {
      img: img411,
    },
    {
      img: img412,
    },
  ];

  const galleryImg5 = [
    {
      img: img51,
    },
    {
      img: img52,
    },
    {
      img: img53,
    },
  ];

  const galleryImg6 = [
    {
      img: img61,
    },
    {
      img: img62,
    },
    {
      img: img63,
    },
    {
      img: img64,
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

        <div className="gallery">
          <Images galleryImg={galleryImg3} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="gallery">
          <Images galleryImg={galleryImg4} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="gallery">
          <Images galleryImg={galleryImg5} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="gallery">
          <Images galleryImg={galleryImg6} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Birthday;
