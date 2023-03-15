import React, { useEffect, useState } from "react";
import "./album.css";
import Images from "../../../common/Images/Images";
import { useAuthContext } from "../../../context/AuthContext";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../utils/apiConfig";

const Album = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const { albumType } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/images/${albumType}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [albumType]);

  const onSubmitDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure that you would like to delete this item?"
    );
    if (confirm) {
      axios
        .delete(`${BASE_URL}/images/${albumType}/${id}/delete`)
        .then((res) => {
          console.log(res);
          setImages((prevImagesData) =>
            prevImagesData.filter((imageData) => imageData._id !== id)
          );
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    // Add button
    <div className="container">
      {user.email && (
        <div className="hidden_content">
          <Link to={`${pathname}/add`}>
            <button className="hidden__btn">
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      )}

      <h3>ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ</h3>
      <div className="birthday__wrapper">
        {images.length > 0 ? (
          images.map((x, i) => {
            return (
              <div className="gallery" key={i}>
                <Images galleryImg={x.images} />
                {user.email && (
                  <div className="gallery__btns">
                    <Link to={`${pathname}/${x._id}/edit`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => onSubmitDelete(x._id)}>
                      Delete
                    </button>
                  </div>
                )}
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

export default Album;
