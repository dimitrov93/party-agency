import React, { useEffect, useRef, useState } from "react";
import "./cgallery.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CGallery = ({ gallery }) => {
  const timerRef = useRef(null)
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
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.length
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
  })
  

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
            <img src={gallery[slideNumber].img} alt="" />
          </div>
        </div>
      )}

    {gallery &&
        gallery.map((x, index) => {
          return (
            
              <img
                src={x.img}
                alt=""
                key={index}
                className='img__focus'
                onClick={() => modalHandler(index)}
              />
              
          );
        })}

    </>
  );
};

export default CGallery;
