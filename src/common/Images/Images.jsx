import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./images.css";

const Images = ({ gallery, isStatic }) => {
  const timerRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((slideNumber) => (slideNumber === 0 ? gallery?.length - 1 : slideNumber - 1));
  };

  const nextSlide = () => {
    setSlideNumber((slideNumber) => (slideNumber + 1 === gallery?.length ? 0 : slideNumber + 1));
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
          <AiOutlineCloseCircle className="btnClose" onClick={handleCloseModal} />
          <BsArrowLeftCircle className="btnPrev" onClick={prevSlide} />
          <BsArrowRightCircle className="btnNext" onClick={nextSlide} />
          <div className="fullscreen__img">
            {gallery?.[slideNumber]?.url && <img src={gallery[slideNumber].url} alt="" />}
          </div>
        </div>
      )}

      {isStatic ? (
        <img
          src={gallery?.[0]?.url}
          alt={gallery?.[0]?.url}
          className="static"
          onClick={() => modalHandler(0)}
        />
      ) : (
        gallery?.map((x, index) => (
          <div key={index}>
            <img src={x?.url} alt="" className="img__focus" onClick={() => modalHandler(index)} />
          </div>
        ))
      )}
    </>
  );
};

export default Images;
