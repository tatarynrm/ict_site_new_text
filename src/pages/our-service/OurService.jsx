import React from 'react'
import './OurService.scss'
import ServiceCard from '../../components/service/ServiceCard'
import { services_data } from '../../data/services__data'
import { Helmet } from 'react-helmet'
import FreeConsultation from '../../components/free-consultation/FreeConsultation'

const OurService = () => {
  return (
    <div className='our__service'>
            <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Сервіси компанії ІСТ-Захід</title>
        <meta name="description" content='Транспортно-експедиційна компанія ІСТ-Захід - ваш надійний партнер у міжнародних перевезеннях та логістиці. Швидка доставка, професійний підхід та найвищий рівень обслуговування.' />

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
        <div className="our__service-inner container">
            <h1 className='page__title'>ПОСЛУГИ</h1>

            <div className="services">
          {services_data.map((item,idx)=>{
            return  <ServiceCard key={idx} item={item}/>
          })}
            </div>
     
        </div>
        <FreeConsultation/>

    </div>
  )
}

export default OurService