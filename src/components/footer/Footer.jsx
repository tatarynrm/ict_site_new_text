import React from "react";
import "./Footer.scss";
import logo from "../../assets/svg/logo.svg";
import SocialBar from "../social-bar/SocialBar";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="left__side">
          <Link to={"/"}>
            <div className="logo">
              <img src={logo} alt="logo__ict" />
              <div className="logo__title">
                <span className="logo__header-title">ІСТ-ЗАХІД</span> <br />
                <span className="logo__down-title">Логістична компанія</span>
              </div>
            </div>
          </Link>
          <div className="social__footer">
            <span className="social__title">Наші соцмережі:</span>
            <SocialBar position={"row footer"} />
          </div>
        </div>

        <div className="footer__center">
          <div className="footer__navigation">
            <span className="footer__block-title">Навігація</span>
            <ul className="footer__navigation-list">
              <Link to={"/about-us"}>
                <li>Про нас</li>
              </Link>
              <Link to={"/services"}>
                <li>Послуги</li>
              </Link>
              <Link to={"/blog"}>
                <li>Блог</li>
              </Link>
              <Link to={"/contacts"}>
                <li>Контакти</li>
              </Link>
            </ul>
          </div>
          <div className="footer__contacts">
            <span className="footer__block-title">Контакти</span>
            <div className="contacts__block">
              <div className="commercial">
                <h3 className="contacts__title">Комерційний відділ</h3>
                <span className="commercial__number">+380 50-370-37-81</span>{" "}
                <br />
                <span className="commercial__number">+380 50-430-86-61</span>
              </div>
              <div className="clients">
                <h3 className="contacts__title">
                  Відділ по роботі з клієнтами
                </h3>
                <span className="clients__number">+380 50-334-82-00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__location">
            <span className="footer__block-title">Локація</span>

            <p className="address">
              79026, м.Львів, вул. Володимира Великого, 29
            </p>
            <p className="email">
              Email: <br /> info@ict.lviv.ua{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
