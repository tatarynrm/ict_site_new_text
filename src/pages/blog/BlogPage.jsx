import React, { useEffect } from "react";
import "./BlogPage.scss";
import { Helmet } from "react-helmet";
import BlogItem from "../../components/blog/BlogItem";
import { useLocation } from "react-router-dom";
import useRecordVisit from "../../hooks/useRecordVisit";
const BlogPage = () => {
  const blogs = [
    {
      title: "Відновлення морських перевезень З/До Одеси та Чорноморська",
      desc: `Компанія Euro Forwarding рада поділитися чудовою новиною для імпортерів та експортерів, які чекали на відновлення регулярних рейсів з/в морські порти України.
    `,
      img: "https://logist.fm/sites/default/files/styles/publ_main_photo/public/morski_perevezennya_z_odesi.jpg?itok=FN8QPxeP",
      date:'19-06-2024'
    },
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
  useRecordVisit('Блог')
  return (
    <div className="blog page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{header_menu.find((val) => item.link === val.link).title}</title>
        <meta name="description" content={item.desc} /> */}

        {/* <meta
          property="og:title"
          content={header_menu.find((val) => item.link === val.link).title}
        />
        <meta property="og:description" content={item.desc} />
        <meta
          property="og:image"
          content="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/8b/4f/cf/8b4fcfc3-5839-e63d-02db-c0865b11cf94/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
        />
        <meta property="og:url" content="http://localhost:3000/adr-cargo" /> */}
      </Helmet>
      <div className="blog__inner container">
        <h1 className="page__title">БЛОГ</h1>

        <div className="blog__items">
        {blogs.map((item,idx)=>{
        return <BlogItem key={idx} item={item}/>
       })}
     
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
