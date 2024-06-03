import React, { useEffect, useRef, useState } from "react";
import "./OurAdvantages.scss";
import { adventages__data } from "../../data/adventages__data";
import AdventagesItem from "../../components/adventages/AdventagesItem";
import { motion } from "framer-motion";
import CargoPrice from "./CargoPrice";
import { useLocation } from "react-router-dom";

const containerMotion = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
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
const OurAdvantages = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  const location = useLocation();
  console.log(location);
  useEffect(() => {}, [location]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    const handleChange = (mediaQueryList) => {
      setIsAnimationEnabled(!mediaQueryList.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);
  useEffect(() => {}, [windowWidth]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="advantages section">
      <div className="advantages__inner container">
        <div className="advantages__title">
          <h2 className="section-title">НАШІ ПЕРЕВАГИ</h2>
          <div className="section__little-title">
            OUR <br />
            ADVANTAGES
          </div>
        </div>

        <motion.div
          initial={windowWidth < 700 ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          variants={containerMotion}
          ref={containerRef}
          className="adventages__items containerMotion"
        >
          {adventages__data.map((item, idx) => {
            return <AdventagesItem cls={itemMotion} key={idx} item={item} />;
          })}
        </motion.div>
      </div>

      {location.pathname === "about__us" ? null : <CargoPrice />}
    </section>
  );
};

export default OurAdvantages;
