import React, { useEffect, useState } from "react";
import "./ServicePage.scss";
import ukraineImg from "../../assets/images/services__page_img/ukraine.png";
import FreeConsultation from "../../components/free-consultation/FreeConsultation";
import stagesLittle from "../../assets/png/stages_litlle.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import { header_menu } from "../../data/header_menu";
import useRecordVisit from "../../hooks/useRecordVisit";
import { FaExternalLinkAlt } from "react-icons/fa";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const lol = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ServicePage = ({ item }) => {
  useRecordVisit(item.link)
  const [activeInfo,setActiveInfo] = useState(false)
  const location = useLocation();
  const handleActiveChange =(e)=> {
    e.preventDefault()
    setActiveInfo(val => !val)
  }
  useEffect(() => {}, [location.pathname]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  
  }, [header_menu,location]);

  return (
    <div className="service page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{header_menu.find((val) => item.link === val.link).title}</title>
        <meta name="description" content={item.desc} />

        <meta
          property="og:title"
          content={header_menu.find((val) => item.link === val.link).title}
        />
        <meta property="og:description" content={item.desc} />
        <meta
          property="og:image"
          content="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/8b/4f/cf/8b4fcfc3-5839-e63d-02db-c0865b11cf94/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
        />
        <meta property="og:url" content="http://localhost:3000/adr-cargo" />
      </Helmet>
      <div
        className="service__hero"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className="service__inner container">
          <h1
            data-aos={location ? "fade-up" : "fade-up"}
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            {item.title}
          </h1>
          {/* <TypeAnimation
          
            sequence={[
              // Same substring at the start will only be typed out once, initially
              item.desc,
              2000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={Infinity}
            className="service__page-animation-desc"
          /> */}
          <h3      
          style={{textAlign:'justify'}}
          data-aos={location ? "fade-right" : "fade-right"}
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="true"
          className="service__page-animation-desc ">{item.desc}</h3>
        
          {/* <p 
               data-aos={location ? "fade-left" : "fade-left"}
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
          >{item.desc}</p> */}
        </div>
      </div>
      {item?.external_link &&  <div className="container__service-link">

        <a target="_blank" href={item?.external_link}>Посилання на сервіс <FaExternalLinkAlt/></a>
      </div> }
      <div className="service__description container">
     
        <button onClick={handleActiveChange}>{activeInfo ? 'ПРИХОВАТИ ІНФОРМАЦІЮ' : `ДЕТАЛЬНА ІНФОРМАЦІЯ ПРО ${item.title}`}</button>
{activeInfo &&         <article
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className={`article ${activeInfo ? 'active' :''}`}
          style={{textAlign:'justify'}}
        >
          {item?.info}
        </article>}
        <div className="service__description-title">
          <h2 className="service__page-title">
            НАШІ <br /> ПЕРЕВАГИ
          </h2>
          <span className="section__little-title">
            OUR <br /> ADVANTAGES
          </span>
        </div>
      
      </div>
      <div className="stages__work container">
        <div className="stages__work-inner">
          {item.stages.map((val, idx) => {
            return (
              <div
      
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                key={idx}
                className="stage__item  "
            
              >
                <div className="stage__item-top">
                  <div className="little__img">
                    <img src={stagesLittle} alt="little_stage_img" />
                    <span>0{idx + 1}</span>
                  </div>

                  <h3>{val.title}</h3>
                </div>

                <div className="stage__item-body">
                  <p>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FreeConsultation background={"white"} />
    </div>
  );
};

export default ServicePage;
