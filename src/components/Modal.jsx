// ExampleComponent.js
import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { easeIn, motion } from 'framer-motion';




// import required modules
import { EffectCoverflow, Autoplay, Pagination,   } from 'swiper/modules';





function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      <div className="overlay-projects-each">
        <h1>{props.title}</h1>
        <button onClick={toggleModal} className="btn-modal">
          View details
        </button>   
      </div>

      {modal && (
        <motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.2, type:easeIn}} onClick={(e) => e.stopPropagation()}>
          <div className="overlay">

                <div className="modal-content">
                  <div className="modal-body">
                    <div className="modal-body-top">
                        <button className="close-modal" onClick={toggleModal}>
                        X
                      </button>
                    </div>

                    <div className="modal-body-bottom">
                        <div className="left-modal">
                          <h1>{props.title}</h1>
                          <p className="project-details">{props.description}</p>
                          <h3>Tech stack and Libraries used: {props.used}</h3>
                          <div className="links">
                              {props.github? (<button><p><FontAwesomeIcon icon="fa-brands fa-github" className='links-icon'/>Github repo link</p></button>) : ('')}
                              {props.live? (<button><p><FontAwesomeIcon icon="fa-solid fa-link" className='links-icon'/>Live Link</p></button>) : ('')}
                              
                          </div>
                        
                        </div>
                        <div className="line">

                        </div>
                        <div className="right-modal">
                          <Swiper
                              effect={'coverflow'}
                              grabCursor={true}
                              centeredSlides={true}
                              slidesPerView={'auto'}
                              coverflowEffect={{
                                rotate: 80,
                                stretch: 0,
                                depth: 700,
                                modifier: 1,
                                slideShadows: true,}}
                              autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true
                              }}
                              loop={true}
                              pagination={{
                                clickable: true,
                              }}

                              modules={[Pagination, Autoplay, EffectCoverflow]}
                              className="mySwiper-modal"
                              style={{ "--swiper-pagination-color": "#Ed6931" }}
                            >
                              {props.images.map((item) => {
                                return (
                                  <SwiperSlide key={crypto.randomUUID()} className='swiper-slide-modal'>
                                    <img src={item} alt="" />

                                  </SwiperSlide>
                                )
                              })}
                      </Swiper>
                      </div>
                    </div>
                  
                    
                  </div>
                  
                
                
                </div>
          </div>
        </motion.div>
      )}
      
    </>
  );
  };
  

export default Modal;
