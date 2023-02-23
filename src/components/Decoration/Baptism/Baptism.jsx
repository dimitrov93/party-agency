import React from "react";
import "./baptism.css";
import BapGallery from "./Gallery/BapGallery";

const Baptism = () => {

  const pics = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbP5ie6DsQcU6sZ1takNvL7s1X2_ha-JSp7syBubkw8A&s"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20VQROJurz3-mda6xJ_OJJD1HV7W4JKoQhyBhhapHcw&s"
    },
    {
      img: "https://cdncloudcart.com/16352/products/images/2699/dekoracia--ukrasa-za-bebesko-parti-amaa-image_5e8b5c5490ce5_800x800.jpeg?1586192071"
    },
    {
    
      img: "https://frankfurt.apollo.olxcdn.com/v1/files/xs2ybzh84e9b1-BG/image;s=3024x3169"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu87K8QCmF3szuELaVU4SUHhw-_DsQUho5KsN9Zu5ww5omAVhkqEb-Lk3zoB6J1QfctL8&usqp=CAU"
    },
  ]


  return (
    <>
      <BapGallery pics={pics} />
    </>
  );
};

export default Baptism;
