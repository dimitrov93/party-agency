import React from "react";
import "./contacts.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="container max_height">
      <div>
        <h1 className="contacts__header">Свържете се с нас на</h1>
      </div>
      <div className="contacts__container">
        <div className="contacts__img">
          {/* <img src={logo} alt="contacts_logo" /> */}
        </div>

        <div className="contacts__information">
          <p className="contacts__information_item">
            <BsPhone className="contacts__icons" />
            <p>Телефон</p> +359 889 245 051{" "}
          </p>
          <p className="contacts__information_item">
            <AiOutlineMail className="contacts__icons" /> <p>Емайл</p>{" "}
            stefanytomova@gmail.com{" "}
          </p>
          <p className="contacts__information_item">
            Присъединете се:
            <Link to={"https://facebook.com"}>
              Facebook: <FaFacebookF color="#3b5998" />{" "}
            </Link>
            <Link to={"https://instagram.com"}>
              Instagram: <FaInstagram className="instagram" />
            </Link>
          </p>
        </div>

        <div className="contacts__separator"></div>

        <div className="contacts__email">
          <p>
            Изпратете ни директно съобщение като може да добавите снимка на
            вашата идея по желание:
          </p>

          <form>
            <div className="email__input">
              <input type="text" placeholder="Име:" required />
            </div>
            <div className="email__input">
              <input type="text" placeholder="Емайл:" required />
            </div>

            <div className="email__input">
              <textarea
                rows="7"
                type="text"
                placeholder="Съобщение:"
                required
              ></textarea>
            </div>

            {/* <div>
              <label for="file-upload" class="custom-file-upload"> Изберете файл:
              </label>
              <input id="file-upload" type="file" name="attachments" multiple />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
