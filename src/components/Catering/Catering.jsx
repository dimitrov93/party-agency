import React from "react";
import "./catering.css";
import main from "../../assets/Catering/main.jpg";
import img1 from "../../assets/Catering/1.jpg";
import img2 from "../../assets/Catering/2.jpg";
import img3 from "../../assets/Catering/3.jpg";
import img4 from "../../assets/Catering/4.jpg";
import img5 from "../../assets/Catering/5.jpg";
import img6 from "../../assets/Catering/6.jpg";
import img7 from "../../assets/Catering/7.jpg";
import img8 from "../../assets/Catering/8.jpg";
import img9 from "../../assets/Catering/9.jpg";
import img10 from "../../assets/Catering/10.jpg";
import img11 from "../../assets/Catering/11.jpg";
import CGallery from "./CateringGallery/CGallery";

const Catering = () => {
    const images = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        },
        {
            img: img7
        },
        {
            img: img8
        },
        {
            img: img9
        },
        {
            img: img10
        },

    ]
  return (
    <section className="container">
      <div className="catering">

        <div className="catering__img">
          <img src={main} alt="" />
        </div>

        <div className="catering__information">
          <h4>
            За Вашето специално събитие ние Ви предлагаме кетъринг и
            професионална украса.
          </h4>
          <h4>
            Храната се презентира по специален начин, за да може да е колкото
            вкусна , толкова и красиво изглеждаща. Всичко това е , за да
            направим Вашето събитие специално и незабравимо. Залагаме на
            внимание към всеки детайл и професионални обслужване
          </h4>
          <p>
            Услугата предлагаме със съдействието на фирма ……….. , която
            осигурява невероятно вкусна храна за всеки повод. Поискайте Вашата
            оферта сега! Ние сме тук за Вас!
          </p>
        </div>
      </div>

      <div className="catering__images">
        <CGallery gallery={images} />
        {/* {images.map(x => {
            return (
                <img src={x.img} alt="" />
            )
        })} */}

        
        
      </div>
    </section>
  );
};

export default Catering;
