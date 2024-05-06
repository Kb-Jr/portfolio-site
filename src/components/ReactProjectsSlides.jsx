import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { reactProjects } from '../data'
import { Modal } from '..';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function ReactProjectsSlides() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 20000,
          pauseOnMouseEnter: true
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ "--swiper-pagination-color": "#Ed6931" }}
      >
        {reactProjects.map((item) => {
          return (
            <>
            <SwiperSlide key={crypto.randomUUID()}>
              <div className="project-image-container">
                <img src={item.image} alt="" className='project-image' />
              </div>
              <div className="project-text-container">
                <h4>{item.title}</h4>
                <p>{item.Description}</p>
              </div>
              
            </SwiperSlide>
            <div className="project-click-container">
                  <Modal title={item.title} description={item.Description}/>
              </div>
            </>
              
           
          )
        })}
      </Swiper>
    </>
  )
}

export default ReactProjectsSlides;