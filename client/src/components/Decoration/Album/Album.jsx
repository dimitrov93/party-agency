import React, { useEffect, useState } from "react";
import "./album.css";
import Images from "../../../common/Images/Images";
import { useAuthContext } from "../../../context/AuthContext";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { getAlbum } from "../../../services/decorationService";
const Album = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const { albumType } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAlbum(albumType);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [albumType]);

  const onSubmitDelete = async (location) => {
    const confirm = window.confirm(
      "Are you sure that you would like to delete this item?"
    );
    if (confirm) {
      await axios.delete(`${location}/`, {
          headers: {
            "Content-Type": "application/json",
            'Allow-Control-Access-Policy': true,
            'Access-Control-Allow-Credentials': true,
          },
            withCredentials: true
      
        })
        .then((res) => {
          setImages((prevImagesData) =>
            prevImagesData.filter(
              (imageData) => imageData.location !== location
            )
          );
        });

      // request
      //   .get(`${location}`)
      //   .then((res) => {
      //     setImages((prevImagesData) =>
      //       prevImagesData.filter(
      //         (imageData) => imageData.location !== location
      //       )
      //     );
      //   })
      //   .catch((err) => console.error(err));
    }
  };
  return (
    <div className="container">
      {user.email && (
        // Add button
        <div className="hidden_content">
          <Link to={`${pathname}/add`}>
            <button className="hidden__btn">
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      )}

      <h3 className="album__header">ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ</h3>
      <div className="header__menu">
        <div className="line"></div>
        <ul>
          <Link to={"/decoration/birthday"}>
            <li>Рожден ден</li>
          </Link>
          <Link to={"/decoration/baptism"}>
            <li>Кръщене</li>
          </Link>
          <Link to={"/decoration/wedding"}>
            <li>Сватба</li>
          </Link>
          <Link to={"/decoration/prom"}>
            <li>Абитуриентски бал</li>
          </Link>
          <Link to={"/decoration/anniversary"}>
            <li>Юбилей</li>
          </Link>
          <Link to={"/decoration/corporate"}>
            <li>Корпоративни</li>
          </Link>
        </ul>
        <div className="line"></div>
      </div>
      <div className="birthday__wrapper">
        {images.length > 0 ? (
          images.map((x, i) => {
            let location = x.location.split("/").pop();
            return (
              <div className="gallery" key={i}>
                <Images gallery={x.images} isStatic={true} />
                {user.email && (
                  <div className="gallery__btns">
                    <Link
                      to={`/decoration/${albumType}/${encodeURIComponent(
                        location
                      )}/edit`}
                    >
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => onSubmitDelete(x.location)}>
                      Delete
                    </button>
                  </div>
                )}
                <div className="gallery__text">
                  <p>{x.folder}</p>
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
