import "./catering.css";
import React, { useEffect, useState } from "react";
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
