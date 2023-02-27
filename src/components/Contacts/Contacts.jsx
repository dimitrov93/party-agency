import React from "react";
import "./contacts.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="container max_height">

      {/* <div className="contacts__header">
        <img src={logo} alt="contacts_logo" />

        <div className="contacts__information">
          <h2 className="contacts__title">Свържете се с нас на</h2>
          <p>Обадете ни се на: +359 889 245 051 </p>
          <p>Пишете ни: stefanytomova@gmail.com </p>
          <p>Присъединете се: 
          <a href="https://facebook.com">
            <FaFacebookF color="#3b5998" />{" "}
          </a>
          <a href="https://instagram.com">
            <FaInstagram  className="instagram" />
          </a>
          </p>
        </div>
      </div>

      <div className="contacts__email">
        <h3>Изпратете ни директно съобщение като може да добавите снимка на вашата идея по желание:</h3>
        <form>
            <div className="input__row">
              <div>
                  <label htmlFor="name">Име</label>
                <div>
                <input type="text" name='name'  required className="input__small" />
                </div>
              </div>

              <div>
                  <label htmlFor="name">Фамилия</label>
                <div>
                <input type="text" name='name' required className="input__small" />
                </div>
              </div>
            </div>

            <div className="input__column">

            <div>
            <label htmlFor="phone">Телефон</label>
            <div>
            <input type="text" name='phone' placeholder='Телефон' required className="input__big" />
            </div>
            </div>

            <div>
            <label htmlFor="phone">Телефон</label>
            <div>
            <input type="text" name='phone' placeholder='Телефон' required className="input__big" />
            </div>
            </div>

            <div>
            <label htmlFor="email">Въведете имейл</label>
            <div>
            <input type="text" name='email' placeholder='Имейл' required className="input__big"/>
            </div>
            </div>
        


            <div>
            <label htmlFor="message">Вашето запитване</label>
            <div>
            <textarea name="message" rows="7" placeholder='Вашето съобщение' required></textarea>
            </div>
            </div>

            <div className="file">
              <label htmlFor="file">Прикачете файл</label>
              <input type="file" name="file" required className="file__btn"></input>
            </div>
            </div>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div> */}

      <div>
        <h1 className="contacts__header">Свържете се с нас на</h1>
      </div>
      <div className="contacts__container">
        <div className="contacts__img">
          {/* <img src={logo} alt="contacts_logo" /> */}
        </div>

        <div className="contacts__information">
          <p className="contacts__information_item"><BsPhone className="contacts__icons"  /><p>Телефон</p> +359 889 245 051 </p>
          <p className="contacts__information_item"><AiOutlineMail className="contacts__icons"  / > <p>Емайл</p> stefanytomova@gmail.com </p>
          <p className="contacts__information_item">
            Присъединете се:
            <Link to={'https://facebook.com'}>
              Facebook: <FaFacebookF color="#3b5998" />{" "}
            </Link>
            <Link to={'https://instagram.com'}>
              Instagram: <FaInstagram className="instagram" />
            </Link>
          </p>
        </div>

        <div className="contacts__separator">

        </div>

        <div className="contacts__email">
          <p>Изпратете ни директно съобщение като може да добавите снимка на вашата идея по желание:</p>

          <form>
          <div className="email__input">
            <input type="text" placeholder="Име:" required/>
          </div>
          <div className="email__input">
            <input type="text" placeholder="Емайл:" required/>
          </div>

          <div className="email__input">
          <textarea rows='7' type='text' placeholder='Съобщение:' required></textarea>
          </div>

          <div className="email__btn">
            <input type="button" value="Send now" />
          </div>
        </form>
        </div>


      </div>

      
    </div>
  );
};

export default Contacts;
