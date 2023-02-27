import React from "react";
import "./card.css";
import Images from "../../common/Images/Images";

// Table
import table1 from "../../assets/Cards/table/1.jpg";
import table2 from "../../assets/Cards/table/2.jpg";
import table3 from "../../assets/Cards/table/3.jpg";
import table4 from "../../assets/Cards/table/4.jpg";
import table5 from "../../assets/Cards/table/5.jpg";
import footerTable from "../../assets/Cards/table/footer.jpg";

//Tablo
import tablo1 from "../../assets/Cards/tablo/1.jpg";
import tablo2 from "../../assets/Cards/tablo/2.jpg";
import tablo3 from "../../assets/Cards/tablo/3.jpg";
import tablo4 from "../../assets/Cards/tablo/4.jpg";
import tablo5 from "../../assets/Cards/tablo/5.jpg";
import tablo6 from "../../assets/Cards/tablo/6.jpg";
import tablo7 from "../../assets/Cards/tablo/7.jpg";
import tablo8 from "../../assets/Cards/tablo/8.jpg";
import footerTablo from "../../assets/Cards/tablo/footer.jpg";

//Cards
import card1 from "../../assets/Cards/cards/1.jpg";
import card2 from "../../assets/Cards/cards/2.jpg";
import card3 from "../../assets/Cards/cards/3.jpg";
import footerCard from "../../assets/Cards/cards/footer.jpg";

const Card = () => {
  const tabloImgs = [
    {
      img: footerTablo,
    },
    {
      img: tablo1,
    },
    {
      img: tablo2,
    },
    {
      img: tablo3,
    },
    {
      img: tablo4,
    },
    {
      img: tablo5,
    },
    {
      img: tablo6,
    },
    {
      img: tablo7,
    },
    {
      img: tablo8,
    },
  ];

  const tableImgs = [
    {
      img: footerTable,
    },
    {
      img: table1,
    },
    {
      img: table2,
    },
    {
      img: table3,
    },
    {
      img: table4,
    },
    {
      img: table5,
    },
  ];

  const cardsImgs = [
    {
      img: footerCard,
    },
    {
      img: card1,
    },
    {
      img: card2,
    },
    {
      img: card3,
    },
  ];

  return (
    <section className="container">
      <div className="card__header">
        <div className="line"></div>
        <div className="text">
          Покани за гости, картички, настанително табло
        </div>
        <div className="line"></div>
      </div>

      <div className="card__body">
        <div className="card__items">
          <div className="card__img">
            {/* <img src={mainTable} alt="" /> */}
          </div>

          <div className="card__text">
            <p>
              Агенция за украса “Вълшебно цвете” Ви предлага покани за Вашите
              гости. Може да изберете от готовите ни модели или да направим
              индивидуален модел в зависимост от темата и цветовете на
              определения повод.
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__img">
            {/* <img src={mainTablo} alt="" /> */}
          </div>

          <div className="card__text">
            <p>
              За ваше удобство и на вашите гости , ние предлагаме също
              изработване на картички с имена на гости за разпределение по маси.
              Те ще бъдат изработени в цвета и темата на вашата украса.
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__img">
            {/* <img src={mainCard} alt="" /> */}
          </div>

          <div className="card__text">
            <p>
              За добрата организация на събитието може да поръчате и
              разпределителна табела с имената на гостите. Тя също може да бъде
              изработена като бъде съобразена с тематиката на събитието. Това ще
              бъде вашето табло за настаняване на гостите в ресторанта.
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__text">
            <p>
              Поканите за гости , картичките с имена за масите и настанителните
              табла могат да бъдат изработени по индивидуален проект. Разбира се
              , може да се възползвате и от нашите готови предложения:
            </p>
          </div>
        </div>
      </div>

      <div className="card__footer">
        <div className="card__footer__container gallery">
          <Images galleryImg={tableImgs} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet1.</p>
          </div>
        </div>

        <div className="card__footer__container gallery">
          <Images galleryImg={tabloImgs} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet2.</p>
          </div>
        </div>

        
        <div className="card__footer__container gallery">
          <Images galleryImg={cardsImgs} />
          <div className="gallery__text">
            <p>Lorem ipsum dolor sit amet3.</p>
          </div>
        </div>
{/* 
        <div className="card__footer__container">
          <Tablo galleryImg={tabloImgs} />
        </div>

        <div className="card__footer__container">
          <Invitations galleryImg={cardsImgs} />
        </div> */}
      </div>
    </section>
  );
};

export default Card;
