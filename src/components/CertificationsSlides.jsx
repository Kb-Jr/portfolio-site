import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { certificationsdata } from '../data'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function CertificationsSlides() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination, Autoplay]}
        className="mySwiper-cert"
        style={{ "--swiper-pagination-color": "#Ed6931" }}
      >
        {certificationsdata.map((item) => {
          return (
            <>
            <SwiperSlide key={crypto.randomUUID()} className='cert-slides-main'>
              <div className="cert-image-container">
                <img src={item.image} alt="" className='project-image' />
              </div>
              <div className="cert-text-container">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              
            </SwiperSlide>
            
            </>
              
           
          )
        })}
      </Swiper>
    </>
  )
}

export default CertificationsSlides;