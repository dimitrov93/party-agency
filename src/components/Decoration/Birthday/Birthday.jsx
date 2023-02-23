import React from "react";
import { Link } from "react-router-dom";
import "./birthday.css";
import BGallery from "./Gallery/BGallery";

const Birthday = () => {
  const galleryImg = [
    {
      img: "https://cdn.shopify.com/s/files/1/1838/1617/products/SET12_01_parti-set-za-rojden-den-na-momiche-kote-koteshko-parti-emotions-factory@2x.jpg?v=1601235077",
    },
    {
      img: "https://cdncloudcart.com/16352/products/images/2701/dekoracia--ukrasa-za-detski-rozden-den-mihaela-image_5e8b5c554b7f9_800x800.jpeg?1586192071",
    },
    {
      img: "https://happybirthday.bg/uploads/products/128/547-1646229871.webp",
    },
    {
      img: "https://party-deluxe.com/wp-content/uploads/2021/03/614VGYkQEeL._AC_SL1001_.jpg",
    },
    {
      img: "https://frankfurt.apollo.olxcdn.com/v1/files/01e4fvwfrdq02-BG/image;s=2000x1500",
    },
    {
      img: "https://plamstudio.com/wp-content/uploads/2020/04/Rojden_den_detski1-1.jpg",
    },
  ];

  return (
    <div className="container">
      <h3>ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ</h3>
      <h4>
        Ако сте вдъхновени от нашите декори и си представяте и вашия празник
        пъстър, цветен и вълшебен, можете да се възползвате от нашите вече
        изградени концепции
      </h4>
      <div className="birthday__gallery">
        <div className="birthday__gallery_container">
          <h3>Рожден ден - Мария</h3>
          <p>Oписание: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla.</span> </p>

          <hr />
          <p>За цена, моля свържете се с нас</p>
          <Link to={'/contacts'} className="green__btn ctn">Контакти</Link>
        </div>

        <BGallery galleryImg={galleryImg} />
      </div>

      <div className="birthday__gallery">
      <div className="birthday__gallery_container">
          <h3>Рожден ден - Денис</h3>
          <p>Oписание: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla.</span> </p>

          <hr />
          <p>За цена, моля свържете се с нас</p>
          <Link to={'/contacts'} className="green__btn ctn">Контакти</Link>
        </div>

        <BGallery galleryImg={galleryImg} />
      </div>
    </div>
  );
};

export default Birthday;
