import React, { useEffect, useState } from "react";
import "./album.css";
import Images from "../../../common/Images/Images";
import Images2 from "../../../common/Images/Images2";

// import img1 from "../../../assets/bd/1.jpg";
// import img2 from "../../../assets/bd/2.jpg";
// import img3 from "../../../assets/bd/3.jpg";
// import img4 from "../../../assets/bd/4.jpg";
// import img5 from "../../../assets/bd/5.jpg";
// import img6 from "../../../assets/bd/6.jpg";
// import img7 from "../../../assets/bd/7.jpg";

// import img11 from "../../../assets/bd2/1.jpg";
// import img22 from "../../../assets/bd2/2.jpg";
// import img33 from "../../../assets/bd2/3.jpg";

// import img111 from "../../../assets/bd3/1.jpg";
// import img222 from "../../../assets/bd3/2.jpg";
// import img333 from "../../../assets/bd3/3.jpg";
// import img444 from "../../../assets/bd3/4.jpg";

// import img51 from "../../../assets/Cage/1.jpg";

import { useAuthContext } from "../../../context/AuthContext";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Birthday = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  const [images, setImages] = useState([]);

  // const galleryImg = [
  //   {
  //     img: img1,
  //   },
  //   {
  //     img: img2,
  //   },
  //   {
  //     img: img3,
  //   },
  //   {
  //     img: img4,
  //   },
  //   {
  //     img: img5,
  //   },
  //   {
  //     img: img6,
  //   },
  //   {
  //     img: img7,
  //   },
  // ];

  // const galleryImg2 = [
  //   {
  //     img: img11,
  //   },
  //   {
  //     img: img22,
  //   },
  //   {
  //     img: img33,
  //   },
  // ];

  // const galleryImg3 = [
  //   {
  //     img: img111,
  //   },
  //   {
  //     img: img222,
  //   },
  //   {
  //     img: img333,
  //   },
  //   {
  //     img: img444,
  //   },
  // ];

  // const galleryImg5 = [
  //   {
  //     img: img51,
  //   },
  // ];
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/images/birthday")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmitDelete = (id) => {
    const confirm = window.confirm("Are you sure that you would like to delete this item?")
    if (confirm) {
      axios.delete(`http://localhost:5000/api/images/birthday/${id}/delete`)
      .then(res => 
        setImages(prevImagesData => prevImagesData.filter(imageData => imageData._id !== id))
        )
      .catch(err => console.error(err))
    }
  }

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
        {images.length > 0 ? (
          images.map((x, i) => {
            return (
              <div className="gallery" key={i}>
                <Images2 galleryImg={x.images} />
                <div className="gallery__btns">
                  <Link to={`${location.pathname}/${x._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => onSubmitDelete(x._id)}>Delete</button>
                </div>
                <div className="gallery__text">
                  <p>{x.title}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Birthday;
