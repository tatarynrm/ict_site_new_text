import React, { useEffect, useState } from "react";
import "./CargoPrice.scss";
import { price_quiz } from "../../data/quiz/price__quiz";
import PriceQuiz from "../../components/quiz/PriceQuiz";
import { motion } from "framer-motion";
const CargoPrice = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const containerMotion = {
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

  const itemMotion = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
    </>
    // <div className="cargo__price">
    //   <div className="cargo__price-inner container">
    //     <div className="cargo__quiz">
    //       <h3 className="quiz__title">
    //         Дізнатись <br />
    //         вартість <br />
    //         вантажу
    //       </h3>
    //       <p className="quiz__subtitle">
    //         Дайте відповідь на 5 запитань та дізнайтесь точну/приблизну вартість
    //         та терміни доставки вашого вантажу
    //       </p>
    //     </div>

    //     <div
  
    //     >
    //       <h2 className="quiz__number">
    //         <span className="quiz__number-question">0{currentQuestionIndex + 1}</span>
    //         {price_quiz[currentQuestionIndex].question}
    //       </h2>

    //       <ul >
    //         {price_quiz[currentQuestionIndex].options.map((option, idx) => {
    //           return (
    //             <li key={idx}>
    //              <input type="radio" id="option" name="options" value={option}  />
    //              <label>{option}</label>
    //             </li>
    //           );
    //         })}
    //       </ul>

    //       <div className="quiz__buttons">
    //         <button
    //           onClick={handlePreviousQuestion}
    //           disabled={currentQuestionIndex === 0}
    //           className="quiz__back-button"
    //         >
    //           НАЗАД
    //         </button>
    //         <button
    //           onClick={handleNextQuestion}
    //           disabled={currentQuestionIndex === price_quiz.length - 1}
    //           className="quiz__next-button"
    //         >
    //           ДАЛІ
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CargoPrice;
