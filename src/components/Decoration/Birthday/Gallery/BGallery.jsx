import React, { useState } from "react";
import "./bgallery.css";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const BGallery = ({ galleryImg }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImg.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImg.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="slider__wrap">
          <AiOutlineCloseCircle
            className="btnClose"
            onClick={handleCloseModal}
          />
          <BsArrowLeftCircle className="btnPrev" onClick={prevSlide} />
          <BsArrowRightCircle className="btnNext" onClick={nextSlide} />
          <div className="fullscreen__img">
            <img src={galleryImg[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      
      <div className="gallery__wrap">
        {galleryImg &&
          galleryImg.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BGallery;
