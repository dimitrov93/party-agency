import React from "react";
import "./card.css";
import img1 from "../../assets/Cards/table/main.jpg";
import img11 from "../../assets/Cards/table/footer.jpg";
import img2 from "../../assets/Cards/tablo/main.jpg";
import img21 from "../../assets/Cards/tablo/footer.jpg";
import img3 from "../../assets/Cards/cards/main.jpg";
import img31 from "../../assets/Cards/cards/footer.jpg";

const Card = () => {
  return (
    <section className="container">
      <div class="card__header">
        <div class="line"></div>
        <div class="text">Покани за гости, картички, настанително табло</div>
        <div class="line"></div>
      </div>

      <div className="card__body">
        <div className="card__items">
          <div className="card__img">
            <img src={img1} alt="" />
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
            <img src={img2} alt="" />
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
            <img src={img3} alt="" />
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
          <img src={img11} alt="" />
          <div class="image-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab?</p>
          </div>
        </div>

        <div className="card__footer__container">
          <img src={img21} alt="" />
          <div class="image-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab?</p>
          </div>
        </div>

        <div className="card__footer__container">
          <img src={img31} alt="" />
          <div class="image-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
