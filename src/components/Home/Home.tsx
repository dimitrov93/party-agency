import React from "react";
import "./home.css";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import SlideFromDirection from "../Sliders/slide-from-direction";
import Title from "../UI/Title";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Title />
      <SlideFromDirection initialX="-100%" duration={0.5}>
        <div className="flex flex-row">
          <img src={pic1} alt="" className="article__logo left" loading="lazy" />
          <div className="article__header">
            <h2>Добре дошли!</h2>
            <h3>Ние сме тук да сбъднем Вашия мечтан празник!</h3>
          </div>
        </div>
      </SlideFromDirection>

      <SlideFromDirection initialX="100%" duration={0.5}>
        <div className="article__right">
          <img src={pic2} alt="" className="article__logo right " loading="lazy" />
          <div className="article__header">
            <h3>Направете всеки Ваш спомен красив!</h3>
          </div>
        </div>
      </SlideFromDirection>

      <SlideFromDirection initialY="-100%" duration={0.5} >
        <div className="article__left">
          <img src={pic3} alt="" className="article__logo " loading="lazy" />
          <div className="article__header">
            <h3>Нека напишем вашата незабравима приказка заедно!</h3>
          </div>
        </div>
      </SlideFromDirection>
    </div>
  );
};

export default Home;
