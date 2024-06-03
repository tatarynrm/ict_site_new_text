import React, { useEffect, useState } from "react";
import "./Services.scss";
import ServiceCard from "../../components/service/ServiceCard";
import { services_data } from "../../data/services__data";

const Services = () => {
  const data = [
    { data: "20+", title: "Років досвіду" },
    { data: "3000+", title: "Перевезень в місяць" },
    { data: "400+", title: "Задоволених клієнтів" },
    { data: "300k", title: "Перевезень в рік" },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(()=>{

},[windowWidth])



  return (
    <section className="services section">
      <div className="services__inner container">
        <div className="statistic__panel">
          <div data-aos="zoom-in" className="statistic__panel-inner">
            {data.map((item, idx) => {
              return (
                <div key={idx} className="service__item">
                  <span className="header__text">{item.data}</span>
                  <span className="title__text">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="services__title">
          <h2 className="section-title">НАШІ ПОСЛУГИ</h2>
          <div className="section__little-title">
            OUR {windowWidth <= 960 ? null : <br />}
            SERVICES
          </div>
        </div>
        <div className="service__cards">
          {services_data.map((item, idx) => {
            return <ServiceCard key={idx} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
