import React from "react";
import "./BurgerMenu.scss";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const BurgerMenu = ({toggleMenu,setBurger}) => {
    const tapOnBurgerMenu = ()=>{
        document.body.classList.remove('no-scroll');
        setBurger(val => !val)
        return console.log(1);
     
    }
  return (
    <div className="burger">
      <div className="burger-inner">
        <MdClose onClick={toggleMenu} className="burger__close" />
        <ul className="burger__menu-list">
          <Link onClick={toggleMenu} to={"/"}>
            <li>Головна</li>{" "}
          </Link>
          <Link onClick={toggleMenu}  to={"/about-us"}>
            <li>Про нас</li>{" "}
          </Link>
          <Link onClick={toggleMenu}  to={"/services"}>
            <li>Послуги</li>{" "}
          </Link>
          <Link onClick={toggleMenu}  to={"/blog"}>
            <li>Блог</li>{" "}
          </Link>
          <Link onClick={toggleMenu}  to={"/contacts"}>
            <li>Контакти</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
