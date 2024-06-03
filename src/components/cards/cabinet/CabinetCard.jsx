import React from "react";
import "./CabinetCard.scss";
const CabinetCard = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="2000"
      className="cabinet__card"
    >
      <div className="card__number">{item.id}</div>
      <div className="card__title">{item.title}</div>
      <div className="card__info">{item.text}</div>
    </div>
  );
};

export default CabinetCard;
