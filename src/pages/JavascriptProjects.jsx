import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import JavascriptProjectsSlides from '../components/JavascriptProjectsSlides'

const JavascriptProjects = () => {
  const navigate = useNavigate();
  return (
    <div className='sub-projects-container'>
              <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects/react-projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>

      <div className="projects-body">
            <div className="projects-header-text">
              <h6>Javascript Projects</h6>
            </div>
            <div className="projects">
              <JavascriptProjectsSlides />
            </div>
            
      </div>

      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/projects/django-projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JavascriptProjects