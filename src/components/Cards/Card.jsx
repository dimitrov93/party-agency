import React from "react";
import "./card.css";
// Table
import mainTable from "../../assets/Cards/table/main.jpg";
import table1 from "../../assets/Cards/table/1.jpg";
import table2 from "../../assets/Cards/table/2.jpg";
import table3 from "../../assets/Cards/table/3.jpg";
import table4 from "../../assets/Cards/table/4.jpg";
import table5 from "../../assets/Cards/table/5.jpg";

//Tablo
import mainTablo from "../../assets/Cards/tablo/main.jpg";
import tablo1 from "../../assets/Cards/tablo/1.jpg";
import tablo2 from "../../assets/Cards/tablo/2.jpg";
import tablo3 from "../../assets/Cards/tablo/3.jpg";
import tablo4 from "../../assets/Cards/tablo/4.jpg";
import tablo5 from "../../assets/Cards/tablo/5.jpg";
import tablo6 from "../../assets/Cards/tablo/6.jpg";
import tablo7 from "../../assets/Cards/tablo/7.jpg";
import tablo8 from "../../assets/Cards/tablo/8.jpg";

//Cards
import mainCard from "../../assets/Cards/cards/main.jpg";
import card1 from "../../assets/Cards/cards/1.jpg";
import card2 from "../../assets/Cards/cards/2.jpg";
import card3 from "../../assets/Cards/cards/3.jpg";
import Invitations from "./Invitations/Invitations";
import Tablo from "./Tablo/Tablo";
import Table from "./Table/Table";



const Card = () => {

    const tabloImgs = [
        {
            img: tablo1
        },
        {
            img: tablo2
        },
        {
            img: tablo3
        },
        {
            img: tablo4
        },
        {
            img: tablo5
        },
        {
            img: tablo6
        },
        {
            img: tablo7
        },
        {
            img: tablo8
        },
    ]
    
    const tableImgs = [
        {
            img: table1
        },
        {
            img: table2
        },
        {
            img: table3
        },
        {
            img: table4
        },
        {
            img: table5
        },
    
    ]
    
    const cardsImgs = [
        {
            img: card1
        },
        {
            img: card2
        },
        {
            img: card3
        },
        
    ]
    

  return (
    <section className="container">
      <div className="card__header">
        <div className="line"></div>
        <div className="text">Покани за гости, картички, настанително табло</div>
        <div className="line"></div>
      </div>

      <div className="card__body">
        <div className="card__items">
          <div className="card__img">
            <img src={mainTable} alt="" />
          </div>

          <div className="card__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              animi!
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__img">
            <img src={mainTablo} alt="" />
          </div>

          <div className="card__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              animi!
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__img">
            <img src={mainCard} alt="" />
          </div>

          <div className="card__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              animi!
            </p>
          </div>
        </div>

        <div className="card__items">
          <div className="card__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              nobis atque quos quia modi repellat nesciunt nisi a dicta, vero
              corrupti minus voluptas reiciendis eaque architecto itaque totam
              pariatur odio commodi hic eum, ratione sed esse! Explicabo
              exercitationem eius, omnis officiis dicta sit, error nam neque
              soluta tempora ipsam alias?
            </p>
          </div>
        </div>
      </div>

      <div className="card__footer">
        
        <div className="card__footer__container">
          <Table galleryImg={tableImgs} />
        </div>

        <div className="card__footer__container">
          <Tablo galleryImg={tabloImgs} />
        </div>
        

        <div className="card__footer__container">
            <Invitations galleryImg={cardsImgs} />
        </div>
      </div>
    </section>
  );
};

export default Card;
