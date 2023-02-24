import React, { useEffect, useRef, useState } from "react";
import "./bgallery.css";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const BGallery = ({ galleryImg }) => {
  const timerRef = useRef(null)
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [staticPic, setStaticPic] = useState(0)

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
        nextSlide()
      }, 4000);
  
    }

    return () => clearTimeout(timerRef.current)
  })

  const increaseStaticPic = (index) => {
    console.log(index);
      setStaticPic(index)
  }
  

  return (
    <div>


      <div>

      </div>
      



      {openModal && (
        <div className="slider__wrap"> <AiOutlineCloseCircle className="btnClose" onClick={handleCloseModal}/>
          <BsArrowLeftCircle className="btnPrev" onClick={prevSlide} />
          <BsArrowRightCircle className="btnNext" onClick={nextSlide} />

          <div className="fullscreen__img">
            <img src={galleryImg[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      
      <div className="gallery__wrap">
      <img src={galleryImg[0].img} alt="" className="static" onClick={() => {handleOpenModal(0)}}  />
        {/* {galleryImg &&
          galleryImg.map((slide, index) => {
            return (
              <div className="single" key={index} onClick={() => {handleOpenModal(index); increaseStaticPic(index)}}>

              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default BGallery;
