import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { MainProjectsSlides} from '..'
import { motion } from 'framer-motion'
import { routeVariants } from '../data'

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
    variants={routeVariants}
    initial='initial'
    animate='final'
    transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
    className='projects-container'
    >

      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>

      <div className="projects-body">
            <div className="projects-header-text">
              <h6>Projects I've worked on...</h6>
            </div>
            <div className="projects">
              <MainProjectsSlides />
            </div>
            
      </div>

      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/certifications')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div>
      </div>



    </motion.div>
  )
}

export default Projects