import React from "react";
import "./BlogSection.scss";
import { Link } from "react-router-dom";
import BlogItem from "../../components/blog/BlogItem";
const BlogSection = () => {
  const blogs = [
    {
      title: "Україна відкриє новий пункт пропуску з Румунією",
      desc: `Україна відкриє новий пункт пропуску з Румунією, заявив прем’єр-міністр Денис Шмигаль.
    `,
      img: "https://minfin.com.ua/img/2024/124333162/d2a90bacd16b0b05a5f0fd8cc66e70fd.jpeg",
    },
    {
      title: "За березень Україна експортувала на 45% більше пшениці",
      desc: `Україна відкриє новий пункт пропуску з Румунією, заявив прем’єр-міністр Денис Шмигаль.
    `,
      img: "https://landlord.ua/wp-content/uploads/2024/04/st_23-04-19-01.jpg",
    },
    {
      title: "На Закарпатті мають намір звести порт з мультимодальним терміналом",
      desc: `УЗавдяки реалізації проєкту можна буде організувати міжнародні перевезення Тисою із виходом до більших судноплавних річок
    `,
      img: "https://zaxid.net/resources/photos/news/202403/1582686.jpg?20240401223605&fit=cover&w=1200&h=675&q=10",
    },
  ];
  return (
    <section className="blog__section section">
      <div className="blog__section-inner container">
        <div className="blog__section-header">
          <h2 className="section__title">БЛОГ</h2>

          <Link className="blog__button" to={"/blog"}>
            ПЕРЕЙТИ У БЛОГ
          </Link>
        </div>
        <div className="blog__section-items">
       {blogs.map((item,idx)=>{
        return <BlogItem key={idx} item={item}/>
       })}
    
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
