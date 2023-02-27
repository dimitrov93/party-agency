import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './images.css'

const Images = ({ galleryImg }) => {
  const timerRef = useRef(null);
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

  useEffect(() => {
    if (openModal) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 2000);
    }

    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
   {openModal && (
      <div className="slider__wrap">
        {" "}
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

      <img
        src={galleryImg[0].img}
        alt=""
        className="static"
        onClick={() => {
          handleOpenModal(0);
        }}
      />
  </>
  );
};

export default Images;
