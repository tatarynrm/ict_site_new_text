import React, { useState } from "react";
import "./FreeConsultation.scss";
import axios from "axios";
const FreeConsultation = ({ background }) => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      console.log(data);
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
                placeholder={`Ваше ім'я`}
              />
            </div>
            <div className="form__control second">
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                placeholder={`Електронна адреса`}
              />
            </div>
            <div className="form__control second">
              <input
                onChange={handleInputChange}
                name="tel"
                type="text"
                placeholder={`Номер телефону`}
              />
            </div>
            <button type="submit" onClick={getInfoFunction}>
              Отримати консультацію
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
