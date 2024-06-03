import React from "react";
import stageBackground from "../../assets/png/stages_icon.png";
import "./StageItem.scss";
import {motion} from 'framer-motion'
const StageItem = ({ item,itemMotion }) => {
  return (
    <motion.div variants={itemMotion} className="stage__item">
      <div
        className="stage__img"
        
      >
        <img src={stageBackground} alt="block_svg" />
        <span className="stage__number">0{item.id}</span>
      </div>

      <div className="stage__info">{item.text}</div>
    </motion.div>
  );
};

export default StageItem;
