import React from 'react'
import { certificationsdata } from '../data'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { routeVariants } from '../data'
import CertificationsSlides from '../components/CertificationsSlides'

const Certifications = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
    variants={routeVariants}
    initial='initial'
    animate='final'
    transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
    className='sub-projects-container'>
      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>
      <div className="projects-body">
          <div className="certifications-header">
            <h1>Certifications</h1>
          </div>
          <div className="certifications-body">
                  <>
                    <motion.div 
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      transition={{duration:1, delay:1, ease: [0.22, 1, 0.36, 1]}}
                      className='certification-div' key={crypto.randomUUID()}> 
                      <CertificationsSlides />
                    </motion.div>
                  </>
              
          </div>
      </div>
      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/contact-me')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Certifications