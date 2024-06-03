import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";
import aboutUsImg from "../../assets/images/abut-us.jpg";
const AboutUs = () => {
  return (
    <section className="section about__us">
      <div className="about__us-inner container">
        <div className="about__us-top">
          <h3 className="section-title">ПРО НАС</h3>
          <div className="about__us-p">
            <p>
              ICT-Захід — це українська компанія з німецьким корінням. Історія
              сучасного логістичного бізнесу розпочалася у 1972 році із
              заснування бренду Internationale Container Transport (ICT) у місті
              Нойс (Німеччина). В Україні міжнародна корпорація ICT відкрила
              перший офіс у 1992 році в Києві. Стрімкий розвиток сервісу
              перевезень став поштовхом для створення у 2000 році Дочірнього
              транспортно-експедиційного підприємства ІСТ-Захід у Львові.
              Вітаємо на нашому сайті.
            </p>
            <p>
              Концепція ІСТ-Захід: “Комплексні транспортні рішення найвищого
              рівня для будь-яких потреб клієнта”. Знаємо, як перевезти ваш
              вантаж з однієї точки світу в іншу. Практично без обмежень. Наш
              багаторічний досвід в логістиці до ваших послуг. З ІСТ-Захід ваш
              вантаж в надійних руках.
            </p>
            <p>
              Вміємо долати виклики, які постають у сфері логістики. Беремося за
              найскладніші перевезення, бо знаємо свою справу. Дякуємо вам за
              довіру! З вірою у Перемогу України продовжуємо працювати.
            </p>
          </div>
        </div>
        <div className="about__us-bottom">
          <div className="about__us-bottom-left">
            <h4>
              Звертаючись до нас - будьте впевнені - ми довеземо вантаж в пункт
              призначення
            </h4>
            <a href="#free__consultation-section">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#free-consultation"
              >
                ДІЗНАТИСЬ
              </motion.button>
            </a>
          </div>
          <div className="about__us-bottom-right">
            <img src={aboutUsImg} alt="about_us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
