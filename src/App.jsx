import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import FreeConsultation from "./components/free-consultation/FreeConsultation";
import Services from "./sections/services/Services";
import ServicePage from "./pages/services/ServicePage";
import { stages_of_work } from "./data/stages_of_work";
import { useEffect, useState } from "react";
import BlogPage from "./pages/blog/BlogPage";
import OurService from "./pages/our-service/OurService";
import Contacts from "./pages/contacts/Contacts";
import AboutUsPage from "./pages/about/AboutUsPage";
import { FaArrowCircleUp } from "react-icons/fa";
import NotFound from "./pages/not-found/NotFound";
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import axios from "axios";

function App() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [burger, setBurger] = useState(false);
  const toggleMenu = () => {
    setBurger((val) => !val);
    if (!burger) {
      // При открытии меню - добавляем класс для блокировки прокрутки
  
      document.body.classList.add("no-scroll");
    } else {
      // При закрытии меню - удаляем класс
      document.body.classList.remove("no-scroll");
      setBurger(false);
    }
  };
  const scrollWidth = window.innerWidth;
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {}, [scrollWidth, document.body.classList]);




  return (
    <>
      <Header toggleMenu={toggleMenu} />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/contacts" element={<Contacts />} />

        {stages_of_work.map((item, idx) => {
          return (
            <Route
              key={idx}
              exact
              path={item.link}
              element={<ServicePage item={item} />}
            />
          );
        })}

        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>

      <Footer />

      {burger && <BurgerMenu setBurger={setBurger} toggleMenu={toggleMenu} />}

      {visible & (scrollWidth > 650) ? (
        <button className="scroll_to_top_btn pulse">
          <FaArrowCircleUp
            fontSize={40}
            onClick={scrollToTop}
            fill="#94BBE6"
            style={{ display: visible ? "inline" : "none" }}
          />
        </button>
      ) : null}
    </>
  );
}

export default App;
