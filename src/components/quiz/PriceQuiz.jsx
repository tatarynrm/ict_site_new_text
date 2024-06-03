import React from "react";
import "./PriceQuiz.scss";
import { price_quiz } from "../../data/quiz/price__quiz";
const PriceQuiz = ({ item, next, prev ,currentQuestionIndex}) => {
  const log1 = () => {
    console.log("CONSOLE");
  };
  return (
    <div className="quiz">
      <h5 className="quiz__question">{item.question}</h5>
      <div className="quiz__answers">
        {item.options.map((val, idx) => {
          return (
            <div key={idx} className="quiz__answer">
              {val}
            </div>
          );
        })}
      </div>
      <div className="quiz__buttons">
        <button
          onClick={prev}
          disabled={currentQuestionIndex === 0}
          className="quiz__back-button"
        >
          НАЗАД
        </button>
        <button
          onClick={next}
          disabled={currentQuestionIndex === price_quiz.length - 1}
          className="quiz__next-button"
        >
          ДАЛІ
        </button>
      </div>
    </div>
  );
};

export default PriceQuiz;
