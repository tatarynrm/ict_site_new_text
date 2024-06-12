import React, { useEffect, useState } from "react";
import "./Cabinet.scss";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import CabinetCard from "../../components/cards/cabinet/CabinetCard";
import { cabinet__cards } from "../../data/cabinet__data";
import { motion } from "framer-motion";

const Cabinet = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const prevCard = () => {
    setCardIndex((val) => val - 1);
  };
  const nextCard = () => {
    setCardIndex((val) => val + 1);
  };
  useEffect(() => {}, [cardIndex]);
  return (
    <section className="cabinet section" id="cabinet">
      <div className="cabinet__inner container">
        <div className="cabinet__left">
          <div className="cabinet__header">
            <h2>
              ОСОБИСТИЙ <br />
              КАБІНЕТ
            </h2>
            <p className="cabinet__info">
              Ми вдосконалили наш сервіс, щоб зробити взаємодію з нами ще
              зручнішою та ефективною для вас. Отже, які переваги вас очікують в
              нашому онлайн-порталі?
            </p>
          </div>
          <div className="cabinet__bottom">
  <a target="_blank" href="https://carriers.ict.lviv.ua/">
  <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            
              className="cabinet__button"
            >
              ВХІД У ОСОБИСТИЙ КАБІНЕТ
            </motion.button>
  </a>
            <p>
              Особистий кабінет для перевізників робить процес перевезень більш
              зручним та контрольованим для Вас. <br /> <br /> Ми завжди прагнемо покращувати
              наші послуги та зробити співпрацю з нами найефективнішою.{" "}
            </p>
          </div>
        </div>
        <div className="cabinet__right">
          <div className="cabinet__controll-arrows">
            <button onClick={prevCard} disabled={cardIndex === 0} className="arrow-down">
              <FiArrowDownLeft />
            </button>
            <button onClick={nextCard} disabled={cardIndex === cabinet__cards.length - 1} className="arrow-up">
              <FiArrowUpRight fontSize={"60px"} />
            </button>
          </div>

          <div className="cabinet__cards">
            <CabinetCard item={cabinet__cards[cardIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
