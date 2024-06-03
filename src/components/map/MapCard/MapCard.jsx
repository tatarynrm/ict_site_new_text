import React from "react";
import "./MapCard.scss";
import { IoMdClose } from "react-icons/io";
import companyLogo from "../../../assets/svg/logo.svg";
import worker from "../../../assets/workers/snizhko.jpg";
import dragan from "../../../assets/workers/dragan.jpg";
const MapCard = ({ setCardData }) => {
  return (
    <div className="map__card">
      <div onClick={() => setCardData(null)} className="map__card-close">
        <IoMdClose fontSize={40} />
      </div>
      <div className="map__card-img">
        <img src={companyLogo} alt="img__card-alert" />
      </div>
      <div className="map__card-address benzin">
        <h3>Адреса</h3>
        <span className="city vis">Місто: м.Львів</span>
        <span className="street vis">Вулиця: вул.Володимира Великого, 29</span>
        <span className="post vis">Поштовий індекс: 79029</span>
      </div>
      <div className="map__card-info">
        <div className="head">
          <div className="head__img">
            <div className="img">
              <img src={worker} alt="head__img" />
            </div>
          </div>
          <h3 className="benzin">Керівник відділення:</h3>
          <span className="vis name">Сніжко Наталія</span>  <span>+38098943832</span>
        </div>

        <div className="map__card-managers">
          <h3 className="benzin">Менеджери</h3>
        </div>
        <div className="workers">
          <div className="head">
            <div className="head__img">
              <div className="img">
                <img src={dragan} alt="head__img" />
              </div>
            </div>
            <h3 className="benzin">
              Менеджер з транспортно-експедиційної діяльності:
            </h3>
            <span className="vis name">Петро Листвак</span>
            <span>+380989578538</span>
          </div>
          <div className="head">
            <div className="head__img">
              <div className="img">
                <img src={dragan} alt="head__img" />
              </div>
            </div>
            <h3 className="benzin">
              Менеджер з транспортно-експедиційної діяльності:
            </h3>
            <span className="vis name">Петро Листвак</span>
            <span>+380989578538</span>
          </div>
          <div className="head">
            <div className="head__img">
              <div className="img">
                <img src={dragan} alt="head__img" />
              </div>
            </div>
            <h3 className="benzin">
              Менеджер з транспортно-експедиційної діяльності:
            </h3>
            <span className="vis name">Петро Листвак</span>
            <span>+380989578538</span>
          </div>
          <div className="head">
            <div className="head__img">
              <div className="img">
                <img src={dragan} alt="head__img" />
              </div>
            </div>
            <h3 className="benzin">
              Менеджер з транспортно-експедиційної діяльності:
            </h3>
            <span className="vis name">Петро Листвак</span>
            <span>+380989578538</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
