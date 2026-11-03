import "./catering.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import main from "../../assets/Catering/main.jpg";
import Images from "../../common/Images/Images";
import { getCatering } from "../../services/cateringService";


const Catering = () => {
  const [catering, setCatering] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCatering();
        setCatering(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  

  return (
    <section className="container">
      <div className="catering">
        <div className="catering__img">
          <img src={main} alt="" />
        </div>

        <div className="catering__information">
          <h2 className="catering__title">Кетъринг</h2>
          <p className="catering__lead">
            За Вашето специално събитие Ви предлагаме кетъринг и професионална
            украса.
          </p>
          <p>
            Храната се презентира по специален начин, за да бъде колкото
            вкусна, толкова и красиво изглеждаща. Залагаме на внимание към
            всеки детайл и професионално обслужване, за да направим Вашето
            събитие специално и незабравимо.
          </p>
          <p>Поискайте Вашата оферта сега! Ние сме тук за Вас!</p>
          <Link to="/contacts" className="catering__cta">
            <button className="green__btn">Поискайте оферта</button>
          </Link>
        </div>
      </div>

      <div className="catering__images">
        {catering && catering.map((x,i) => {
          return (
            <Images key={i} gallery={x.images} isStatic={false} />
          )
        })}

      </div>
    </section>
  );
};

export default Catering;
