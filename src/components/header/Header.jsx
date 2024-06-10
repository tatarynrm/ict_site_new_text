import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/svg/logo.svg";
import userIcon from "../../assets/svg/icons/user-icon.svg";
import arrowIcon from "../../assets/svg/icons/arrow.svg";
import CabinetTooltip from "../tooltips/CabinetTooltip";
import burgerMenuSvg from "../../assets/png/burger__menu.png";
import { Link, useLocation } from "react-router-dom";
import { header_menu } from "../../data/header_menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
const Header = ({toggleMenu}) => {
  const [cabinetTrue,setCabinetTrue] = useState(false)
  const location = useLocation()

useEffect(()=>{
  if (location.pathname === '/' ) {
    console.log(true);
    setCabinetTrue(true)
  }else {
    console.log(false);
    setCabinetTrue(false)
  }
},[location])
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="logo__ict" />
            <div className="logo__title">
              <span className="logo__little-title">ІСТ-ЗАХІД</span> <br />
              <span className="logo__info">Логістична компанія</span>
            </div>
          </div>
        </Link>
        <nav className="header__nav nav">
          <ul>
            <Link to={"/about-us"}>
              <li className="header__menu-item">Про нас</li>
            </Link>
            <li className="header__menu-item submenu arrow">
              Послуги <img src={arrowIcon} alt="arrow" />
              <ul className="header__submenu">
                {header_menu.map((item, idx) => {
                  return (
                    <Link
                      data-aos="fade-up"
                      className="header__submenu-item"
                      key={idx}
                      to={item.link}
                    >
                      <li>{item.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </li>
            <Link to={"/blog"}>
              {" "}
              <li className="header__menu-item">Блог</li>
            </Link>
            <Link to={"/contacts"}>
              <li className="header__menu-item">Контакти</li>
            </Link>
          </ul>
        </nav>
{cabinetTrue ?         <a className="private__cabinet-wrapper"  href={ "#cabinet" }>
        <div
          data-tooltip-id="header__tooltip"
          data-tooltip-delay-hide={1000}
          className="private__cabinet"
        >
          
          <CabinetTooltip />
          <img src={userIcon} alt="user__icon" />
          <span>
            Особистий <br /> кабінет
          </span>
     
        </div>
        </a> :
                <a className="private__cabinet-wrapper"  target="_blank" href={ "https://carriers.ict.lviv.ua/" }>
                <div
                  data-tooltip-id="header__tooltip"
                  data-tooltip-delay-hide={1000}
                  className="private__cabinet"
                >
                  
                  <CabinetTooltip />
                  <img src={userIcon} alt="user__icon" />
                  <span>
                    Особистий <br /> кабінет
                  </span>
             
                </div>
                </a>
        }
                <GiHamburgerMenu className="burger__menu" onClick={toggleMenu} fontSize={40}/>
        {/* <img onClick={toggleMenu} className="burger__menu" src={burgerMenuSvg} alt="burger__menu" /> */}
      </div>
      <Tooltip id="header__tooltip" />
    </header>
  );
};

export default Header;
