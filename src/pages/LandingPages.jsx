import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

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
        <h6><span>Landing Pages</span></h6>
      </div>
      <div className="projects">
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