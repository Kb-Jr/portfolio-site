import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { landingPagesProjects } from '../data'
import { Modal } from '..'

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
    </div>
  )
}

export default LandingPages