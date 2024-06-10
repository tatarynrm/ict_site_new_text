import React, { useEffect, useState } from "react";
import "./FreeConsultation.scss";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const FreeConsultation = ({ background }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    text: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}/;
    return phoneNumberPattern.test(phoneNumber);
  };
  const handlePhoneChange = (event) => {
    if ((formData.name.length > 2) & (formData.tel.length >= 10)) {
      console.log(valid);
      setValid(true);
    } else {
      setValid(false);
    }
    setPhone(event);
    setFormData({
      ...formData,
      tel: event,
    });
  };

  console.log(formData);
  const getInfoFunction = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `https://api.ict.lviv.ua/web/add-guest-zap`,
        formData
      );
      if (data.status === 200) {
     setOpen(true)
     setFormData({
      name: "",
      tel: "",
      email: "",
      text: "",
    })
    setPhone('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="free__consultation" id="free__consultation-section">
      <div className="free__consultation-inner container">
        <div className="free__consultation-block">
          <div className="left">
            <h3>
              Отримайте <br /> безкоштовну
            </h3>
            <span className="free__consultation-sub-title">
              консультацію від нашого спеціаліста
            </span>
          </div>
          <form className="free__consultation-form">
            <div className="form__control">
              <input
                onChange={handleInputChange}
                name="name"
                type="text"
                value={formData.name}
                placeholder={`Ваше ім'я`}
              />
            </div>
            <div className="form__control second">
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                value={formData.email}
                placeholder={`Електронна адреса`}
              />
            </div>

            <div className="form__control second">
              <textarea
                className="textarea"
                onChange={handleInputChange}
                name="text"
                type="text"
                value={formData.text}
                placeholder={`Напишіть своє запитання`}
              ></textarea>
            </div>
            <div className="form__control second phone">
              <PhoneInput
                country={"ua"}
                onChange={handlePhoneChange}
                name="tel"
                type="text"
                value={formData.tel}
                inputProps={{
                  required: true,
                  name: "tel",
                  className: "form-control phone",
                }}
                placeholder={`Номер телефону`}
              />
            </div>
            <button
            type="submit"
              disabled={valid === true ? false : true}
              data-tooltip-id="contact-tooltip"
              data-tooltip-content={valid === true ? "" : "Заповніть усі поля"}
              onClick={getInfoFunction}
            >
              Отримати консультацію
            </button>
            <ReactTooltip id="contact-tooltip" />
          </form>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
      <h3>Ми отримали ваш запит.</h3>
      <p>Наш менеджер зв'яжеться з вами найближчим часом.</p>
      </Modal>
    </section>
  );
};

export default FreeConsultation;
