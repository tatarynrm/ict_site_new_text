import React from "react";
import "./OurClients.scss";
import epicentrLogo from "../../assets/images/clients-logo/epicentr.png";
import nestleLogo from "../../assets/images/clients-logo/nestle.png";
import getmanLogo from "../../assets/images/clients-logo/getman.png";
import carlsbergLogo from "../../assets/images/clients-logo/carlsberg.png";
import artaLogo from "../../assets/images/clients-logo/arta.png";
import idsLogo from "../../assets/images/clients-logo/ids.png";
import pershaLogo from "../../assets/images/clients-logo/persha.png";
import metinvestLogo from "../../assets/images/clients-logo/metinvest.png";
import mondelizLogo from "../../assets/images/clients-logo/mondeliz.png";
import omegaLogo from "../../assets/images/clients-logo/omega.png";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  return (
    <section className="section our__clients">
      <div className="our__clients-inner container">
        <h2 className="section-title">
          НАШІ <br /> КЛІЄНТИ
        </h2>

      </div>
      
      <Marquee  pauseOnHover={true} speed={50} className="clients__block ">
          <div className="our__client carousel__cell number-slide1">
            <img src={epicentrLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={nestleLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={getmanLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={carlsbergLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={artaLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={idsLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={pershaLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={metinvestLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={mondelizLogo} alt="company__logo" />
          </div>
          <div className="our__client carousel__cell number-slide1">
            <img src={omegaLogo} alt="company__logo" />
          </div>
        </Marquee>
    </section>
  );
};

export default OurClients;
