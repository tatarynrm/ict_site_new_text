import React, { useEffect, useRef, useState } from "react";
import "./Stages.scss";
import { carrier__data } from "../../data/stages_carriers";
import { owner__data } from "../../data/stages_owner";
import StageItem from "../../components/stages/StageItem";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Stages = () => {
  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);

  const changeActive = () => {
    if (activeOne === true) {
      setActiveOne(false);
      setActiveTwo(true);
    } else {
      setActiveOne(true);
      setActiveTwo(false);
    }
  };

  const containerRef1 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(containerRef1.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);
  return (
    <section className="stages section">
      <div className="stages__inner container">
        <div className="stages__title">
          <h2 className="section-title">ЕТАПИ СПІВПРАЦІ</h2>
          <div className="section__little-title">
            STAGES <br />
            OF WORK
          </div>
          <div className="stages__control-block">
            <span onClick={changeActive} className={activeOne ? "active" : " "}>
              ДЛЯ <br /> ВЛАСНИКІВ ВАНТАЖУ
            </span>
            <span onClick={changeActive} className={activeTwo ? "active" : " "}>
              ДЛЯ <br /> ПЕРЕВІЗНИКІВ
            </span>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="stages__items"
          ref={containerRef1}
        >
          {activeOne
            ? owner__data.map((item, idx) => {
                return <StageItem itemMotion={itemMotion} key={idx} item={item} />;
              })
            : carrier__data.map((item, idx) => {
                return <StageItem itemMotion={itemMotion} key={idx} item={item} />;
              })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stages;
