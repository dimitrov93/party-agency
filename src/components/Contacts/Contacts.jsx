import React, { useState } from "react";
import "./contacts.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachments: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAttachmentChange = (event) => {
    const { files } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, attachments: files }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    for (let i = 0; i < formData.attachments.length; i++) {
      formDataToSend.append("attachments", formData.attachments[i]);
    }
  
    try {
      const response = await fetch("https://party-agency-nodejs.onrender.com/send-email", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        console.log("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          attachments: [],
        });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <span>Телефон</span> +359 889 245 051{" "}
          </p>
          <p className="contacts__information_item">
            <AiOutlineMail className="contacts__icons" /> <span>Емайл</span>{" "}
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

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="email__input">
              <input
                type="text"
                placeholder="Име:"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="email__input">
              <input
                type="email"
                placeholder="Емайл:"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="email__input">
              <textarea
                rows="7"
                type="text"
                placeholder="Съобщение:"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="email__input">
              <label htmlFor="file-upload" className="custom-file-upload">
                {" "}
                Изберете файл:
              </label>
              <input id="file-upload" type="file" multiple />
            </div>

            <button
              type="submit"
              className="email__btn"
              name="attachments"
              onChange={handleAttachmentChange}
            >
              Send now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
