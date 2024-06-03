import React from "react";
import "./NotFound.scss";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div className="not__found page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ІСТ-Захід - Сторінки не існує</title>
        <meta
          name="description"
          content="Такої сторінки не існує"
        />
      </Helmet>
      <div className="not__found-inner container">
        <div className="not__found-content">
          <h1>404</h1>
          <p>Вибачте але сторінку як ви шукаєте,- не знайдено.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
