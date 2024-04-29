import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import FrontendMentorSlides from '../components/FrontendMentorSlides'

const FrontendMentor = () => {
  const navigate = useNavigate();

  return (
    <div className='sub-projects-container'>
      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects/django-projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>

      <div className="projects-body">
        <div className="projects-header-text">
          <h6>Frontend Mentor Projects</h6>
        </div>
        <div className="projects">
          <FrontendMentorSlides />
        </div>

      </div>

      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects/landingpages')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FrontendMentor