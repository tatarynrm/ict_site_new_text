import React from 'react'
import './BlogItem.scss'
import blogImg from '../../assets/images/hero.jpg'
const BlogItem = ({item}) => {
  return (
    <div className='blog__item'>
        <div className="blog__img">
            <img src={item.img ?  item.img : blogImg } alt="blog__img-item" />
        </div>
        <div className="blog__info">
            <h4 className='blog__title'>{item.title}</h4>
            <p className='blog__short-info'>{item.desc}</p>
            <button className='blog__button'>Дізнатись більше</button>
        </div>
    </div>
  )
}

export default BlogItem