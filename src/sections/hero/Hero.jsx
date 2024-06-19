import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Header from "../../components/header/Header";
import heroImg from "../../assets/images/hero.jpg";
import SocialBar from "../../components/social-bar/SocialBar";
import { motion } from "framer-motion";
import video from "../../assets/video/video.mp4";
const Hero = () => {
  const [vis, setVis] = useState(0);
  const handleClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const innerWidth = window.innerWidth;
  useEffect(() => {}, [innerWidth]);

  useEffect(() => {
    setTimeout(() => {
      setVis(innerWidth);
    }, 100);
  }, [vis, innerWidth]);
  return (
    <section className="hero  hero__section container">
      <div className="noise-overlay"></div>
      {vis < 920 ? <video playsInline autoPlay loop muted src={video} /> : null}
      <div className="hero__inner container">
        <div className="hero__info">
          <h1>ІСТ{vis <= 500 ? <br /> : "-"}ЗАХІД</h1>
          <p
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            Надійний партнер у сфері вантажоперевезень!
          </p>
        </div>

        <SocialBar />

        <div className="hero__about">
          <div className="hero__about-left">
            <p>
            Для розрахунку вартості та терміну доставки вантажу просимо заповнити форму.
            </p>
            <a style={{zIndex:'9999'}} href="#free__consultation-section">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
              
              >
                ДІЗНАТИСЬ
              </motion.button>
            </a>
          </div>
          <div className="hero__about-right">
            {/* <span>Листайте вниз</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
