import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";
import { Rating } from "react-simple-star-rating";
import { BsStarFill } from "react-icons/bs";
const testimonials = [
  {
    company: `ВЕСМ ГРУП ТОВ`,
    testimonial: `
    Дякуємо за гарно організовану роботу, рекомендуємо для співпраці!!!
    `,
    rating: 5,
    date: `05.04.2024`,
  },
  {
    company: `ПОПЕРЕЧНИЙ РОМАН ВІТАЛІЙОВИЧ ФОП`,
    testimonial: `Велике спасибі Наталії за кваліфіковану співпрацю! Все чітко і в заявлені терміни. Професійна агенція.`,
    rating: 5,
    date: `04.04.2024`,
  },
  {
    company: `Странсбуд ТОВ`,
    testimonial: `Неодноразово здійснювали перевезення з цією компанією як по Україні, так і за кордоном, завжди все чітко і згідно домовленостей. Усі рази працювали з Тетяною з Сумського відділення, дякуємо за професійний супровід та якісну комунікацію 24/7. Рекомендуємо!`,
    rating: 5,
    date: `22.05.2024`,
  },
  {
    company: `ВІОВАН ТОВ`,
    testimonial: `Відповідальний замовник! Все вчасно, згідно домовленостей! Дякуємо Ірині Мальованій за співпрацю!`,
    rating: 5,
    date: `20.03.2024`,
  },

];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container container">
      <Slider {...settings}>
        {testimonials.map((item, idx) => {
          return (
            <div className="testimonial" key={idx}>
              <div className="testimonial__item">
                <Rating
                  size={20}
                  SVGstorkeWidth={2}
                  initialValue={item.rating}
                  disableFillHover={true}
                  allowHover={false}
                />
                <h3>{item.company}</h3>
                <div className="testimonial-text">{item.testimonial}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
