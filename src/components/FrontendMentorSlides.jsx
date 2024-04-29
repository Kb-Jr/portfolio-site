import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {frontendMentorProjects} from '../data'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function FrontendMentorSlides() {
    return (
        <>
        <Swiper
          autoplay={{delay:3000,
            pauseOnMouseEnter:true
        }}
          loop={true}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{"--swiper-pagination-color": "#Ed6931"}}
        >
          {frontendMentorProjects.map((item) => {
            return(
              <SwiperSlide key={crypto.randomUUID()}>
                <div className="project-image-container">
                    <img src={item.image} alt="" className='project-image' />
                </div>
                <div className="project-text-container">
                    <h4>{item.title}</h4>
                    <p>{item.Description}</p>
                </div>
                <div className="project-click-container">
                    <button><FontAwesomeIcon icon="fa-solid fa-hand-pointer" style={{marginRight:5}} /> Click here to See more details</button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </>
      )
    }

export default FrontendMentorSlides;