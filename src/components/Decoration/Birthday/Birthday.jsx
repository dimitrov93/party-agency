import React from "react";
import { Link } from "react-router-dom";
import "./birthday.css";
import BGallery from "./Gallery/BGallery";
import img2 from "../../../assets/bd/2.jpg";
import img3 from "../../../assets/bd/3.jpg";
import img4 from "../../../assets/bd/4.jpg";
import img5 from "../../../assets/bd/5.jpg";
import img6 from "../../../assets/bd/6.jpg";
import img7 from "../../../assets/bd/7.jpg";


import img11 from "../../../assets/bd2/1.jpg";
import img22 from "../../../assets/bd2/2.jpg";
import img33 from "../../../assets/bd2/3.jpg";

const Birthday = () => {
  const galleryImg = [
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

  return (
    <div className="container">
      <h3>ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ</h3>
      <div className="birthday__wrapper">
        {/* <h4>
          Ако сте вдъхновени от нашите декори и си представяте и вашия празник
          пъстър, цветен и вълшебен, можете да се възползвате от нашите вече
          изградени концепции
        </h4> */}
        <div className="birthday__gallery">
          <BGallery galleryImg={galleryImg} />
        </div>

        <div className="birthday__gallery">
          <BGallery galleryImg={galleryImg2} />
        </div>
      </div>
    </div>
  );
};

export default Birthday;

{
  /* <div className="birthday__gallery">
<div className="birthday__gallery_container">
  <h3>Рожден ден - Денис</h3>
  <p>
    Oписание:{" "}
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Laborum, nulla.
    </span>{" "}
  </p>

  <hr />
  <p>За цена, моля свържете се с нас</p>
  <Link to={"/contacts"} className="green__btn ctn">
    Контакти
  </Link>
</div>

<BGallery galleryImg={galleryImg} />
</div>

<div className="birthday__gallery">
<div className="birthday__gallery_container">
  <h3>Рожден ден - Денис</h3>
  <p>
    Oписание:{" "}
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Laborum, nulla.
    </span>{" "}
  </p>

  <hr />
  <p>За цена, моля свържете се с нас</p>
  <Link to={"/contacts"} className="green__btn ctn">
    Контакти
  </Link>
</div>

<BGallery galleryImg={galleryImg} />
</div> */
}
