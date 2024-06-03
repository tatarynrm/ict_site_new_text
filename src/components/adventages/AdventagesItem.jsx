import React from 'react'
import './AdventagesItem.scss'
import { motion } from "framer-motion";
const AdventagesItem = ({item,cls}) => {
  return (
    <motion.div variants={cls} className='adventages__item'>
        <h4 className="heading">{item.title}</h4>
        <span className="text">{item.text}</span>
    </motion.div>
  )
}

export default AdventagesItem