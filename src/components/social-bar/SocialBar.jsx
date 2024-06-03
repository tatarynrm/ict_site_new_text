import React from 'react'
import './SocialBar.scss'
import tgIcon from '../../assets/svg/icons/telegram.svg'
import instagramIcon from '../../assets/svg/icons/instagram.svg'
import whatsupIcon from '../../assets/svg/icons/whats-up.svg'
import facebookIcon from '../../assets/svg/icons/facebook.svg'
const socials = [
    {icon:instagramIcon,link:"https://google.com.ua"},
    {icon:facebookIcon,link:"https://google.com.ua"},
    {icon:whatsupIcon,link:"https://google.com.ua"},
    {icon:tgIcon,link:"https://google.com.ua"}, 
   
]
const SocialBar = ({position}) => {
  return (
   <div className={`social__bar ${position ? position :""}`}>
    {socials.map((item,idx)=> ( <div className='social__container' key={idx}> <img src={item.icon} alt="icon" /> </div> ))}
    </div>
  )
}

export default SocialBar