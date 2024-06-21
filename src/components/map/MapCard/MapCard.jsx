import React from "react";
import "./MapCard.scss";
import { IoMdClose } from "react-icons/io";
import companyLogo from "../../../assets/svg/logo.svg";
import worker from "../../../assets/workers/snizhko.jpg";
import dragan from "../../../assets/workers/dragan.jpg";
const MapCard = ({ setCardData, cardData }) => {

  const data = cardData;
  console.log(data);
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
        <span className="street vis">вул. {data?.address?.street}</span>
        <span className="city vis">м. {data?.address?.city}</span>
        <span className="post vis">Поштовий індекс: {data?.address?.post_index}</span>
      </div>
  {data?.address  &&
      <div className="map__card-info">
      {data?.dir &&
        data?.dir.map((item, idx) => {
          return (
            <div key={idx} className="head">
              <h3 style={{ textDecoration: "underline" }} className="benzin">
                {item.position}
              </h3>
              <br />
              <span className="vis name">{item.name}</span>{" "}
              <br />
              <span>{item.email}</span>
            </div>
          );
        })}

{data?.office_contact && 
        data?.office_contact?.map((item, idx) => {
          return (
          <div key={idx}><a style={{textDecoration:'underline'}} href={`tel:${item.office_tel}`}>{item.office_tel}</a></div>
          );
        })} 




      {data?.head_of_department &&
        data?.head_of_department.map((item, idx) => {
          return (
            <div key={idx} className="head__office">
              <h3 style={{ textDecoration: "underline" }} className="benzin">
                {item.position}
              </h3>
              <br />
              <span className="vis name">{item.name}</span>{" "}
              <br />
              <span>{item.email}</span>
            </div>
          );
        })}
      {data?.ukraine && (
        <h3 style={{ textDecoration: "underline" }} className="benzin">
          Відділ перевезень по Україні
        </h3>
      )}
      {data?.ukraine &&
        data?.ukraine?.map((item, idx) => {
          return (
            <div key={idx} className="head__office">
              <span className="vis name">{item.name}</span> <br />{" "}
              <span>{item.email}</span>
            </div>
          );
        })}
      {data?.europe && (
        <h3 style={{ textDecoration: "underline" }} className="benzin">
          Відділ міжнародних перевезень
        </h3>
      )}
      {data?.europe &&
        data?.europe?.map((item, idx) => {
          return (
            <div key={idx} className="head__office">
              <span className="vis name">{item.name}</span> <br />{" "}
              <span>{item.email}</span>
            </div>
          );
        })}

        {data?.workers?.length > 0  && <h3 style={{ textDecoration: "underline" }} className="benzin">
          Менеджери
        </h3>}
      {data?.workers &&
        data?.workers?.map((item, idx) => {
          return (
            <div key={idx} className="head__office">
              <span className="vis name">{item.name}</span> <br />{" "}
              <span>{item.email}</span>
            </div>
          );
        })}


    </div>
  }

    </div>
  );
};

export default MapCard;
