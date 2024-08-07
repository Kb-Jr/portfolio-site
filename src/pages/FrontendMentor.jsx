import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { frontendMentorProjects } from '../data'
import { Modal } from '..'

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
          <h6><span>Frontend Mentor</span> Projects</h6>
        </div>
        <div className="projects">
          {frontendMentorProjects.map((item) => {

            return(
              <>
              
                <div className='projects-each' key={crypto.randomUUID()}> 
                  {/* <h1>{item.title}</h1> */}
                  <div className='projects-each-image'>
                      <img src={item.image} alt="" />
                  </div>
                  
                  <Modal title={item.title} images={item.pro_images} description={item.Description} used={item.utilized} github={item.github_link} live={item.live_link}/>
                </div>

              
              </>
            )
            })}
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