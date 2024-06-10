import React, { useEffect } from "react";
import "./Main.scss";
import Hero from "../../sections/hero/Hero";
import AboutUs from "../../sections/about/AboutUs";
import Services from "../../sections/services/Services";
import OurAdvantages from "../../sections/advantages/OurAdvantages";
import Stages from "../../sections/stages/Stages";
import Values from "../../sections/values/Values";
import Cabinet from "../../sections/cabinet/Cabinet";
import OurClients from "../../sections/our-clients/OurClients";
import FreeConsultation from "../../components/free-consultation/FreeConsultation";
import BlogSection from "../../sections/blog/BlogSection";
import Carousel from "../../components/carousel/Carousel";
import { Helmet } from "react-helmet";
import Rating from "../../sections/rating/Rating";
import Testimonials from "../../components/testimonials/Testimonials";
import axios from "axios";
import useRecordVisit from "../../hooks/useRecordVisit";
const Main = () => {
  useRecordVisit('Головна')
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ІСТ-Захід Логістична компанія</title>
        <meta
          name="description"
          content="Логістична компанія ІСТ-Захід надає повний спектр послуг з вантажни перевезень."
        />
      </Helmet>

      <Hero />
      <AboutUs />
      <Services />
      <OurAdvantages />
      <Stages />
      <Values />
      <Cabinet />
      <OurClients />
      <BlogSection />
      <FreeConsultation background={"black"} />
      <Testimonials />
      {/* <Carousel/> */}
    </div>
  );
};

export default Main;
