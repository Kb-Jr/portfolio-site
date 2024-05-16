import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { landingPagesProjects, routeVariants } from '../data'
import { Modal } from '..'
import { motion } from 'framer-motion'
import '../styles/subprojects.css'


const LandingPages = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
    variants={routeVariants}
    initial='initial'
    animate='final'
    transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
    className='sub-projects-container'
    >
      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects/django-projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>

      <div className="projects-body">
        <div className="projects-header-text">
          <h6><span>Landing Pages & Static Components</span></h6>
        </div>
        <div className="projects">
          {landingPagesProjects.map((item) => {
            return (
              <>
                <div className='projects-each' key={crypto.randomUUID()}>
                  {/* <h1>{item.title}</h1> */}
                  <div className='projects-each-image'>
                    <img src={item.image} alt="" />
                  </div>

                  <Modal title={item.title} images={item.pro_images} description={item.Description} used={item.utilized} github={item.github_link} live={item.live_link} />
                </div>

              </>
            )
          })}
        </div>

      </div>

      <div className="projects-arrow">
        {/* <div className="arrow">
          <button onClick={() => navigate('/certifications')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div> */}
      </div>
    </motion.div>
  )
}

export default LandingPages