import React from "react";
import "./album.css";
import Images from "../../../common/Images/Images";

import img1 from "../../../assets/Prom/prom1/1.jpg";
import img2 from "../../../assets/Prom/prom2/1.jpg";
import { useAuthContext } from "../../../context/AuthContext";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Prom = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  const galleryImg = [
    {
      img: img1,
    },
  ];

  const galleryImg2 = [
    {
      img: img2,
    },
  ];

  return (
    <div className="container">
      {user.email && (
        <div className="hidden_content">
          <Link to={`${location.pathname}/add`}>
            <button className="hidden__btn">
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      )}
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
            <p>Бал на Веселин</p>
          </div>
        </div>

        <div className="gallery">
          <Images galleryImg={galleryImg2} />
          <div className="gallery__text">
            <p>Завършване - Криси</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prom;
