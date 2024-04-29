import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import LandingPagesSlides from '../components/LandingPagesSlides'

const LandingPages = () => {
  const navigate = useNavigate();
  return (
    <div className='sub-projects-container'>
    <div className="projects-arrow">
      <div className="arrow">
        <button onClick={() => navigate('/projects/frontendmentor-projects')}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
        </button>
      </div>
    </div>

    <div className="projects-body">
      <div className="projects-header-text">
        <h6>Landing Pages</h6>
      </div>
      <div className="projects">
        <LandingPagesSlides />
      </div>

    </div>

    <div className="projects-arrow">
      <div className="arrow">
        <button onClick={() => navigate('/certifications')}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
        </button>
      </div>
    </div>
  </div>
  )
}

export default LandingPages