import React from "react";
import "./home.css";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import Title from "../UI/Title";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Title />

      <div className="flex flex-row animate-slide-from-left">
        <div className="w-full sm:max-w-[35%] aspect-square">
          <img
            src={pic1}
            alt=""
            className="home_logo mt-8 rotate-1"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-20 justify-center">
          <h2>Добре дошли!</h2>
          <h3>Ние сме тук да сбъднем Вашия мечтан празник!</h3>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center justify-between animate-slide-from-right">
        <div className="w-2/4 sm:max-w-[35%] aspect-square">
          <img
            src={pic2}
            alt=""
            className="home_logo mb-8 -rotate-1 "
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-evenly p-4">
          <h3>Направете всеки Ваш спомен красив!</h3>
        </div>
      </div>

      <div className="flex flex-row ml-[100px] animate-slide-from-bottom">
        <div className="w-2/4 sm:max-w-[35%] aspect-square">
          <img
            src={pic3}
            alt=""
            className="home_logo rotate-12 mb-8 "
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-evenly p-4">
          <h3>Нека напишем вашата незабравима приказка заедно!</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
