import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className='projects-container'>

      <div className="projects-arrow">
        <div className="arrow">
          <button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='arrow-icon' />
          </button>
        </div>
      </div>

      <div className="projects-body">
            <div className="projects-header-text">
              <h6>Projects I've worked on</h6>
              <div className="projects">
                
              </div>
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

export default Projects