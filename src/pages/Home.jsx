import React from 'react'
import { LandingHero } from '..'
import { c, css, django, git, html, javascript, python, react, sql, tailwind } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { routeVariants } from '../data'


const Home = () => {
  const logos = [c, css, django, git, html, javascript, python, react, sql, tailwind]
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.docx'; // URL to the document
    link.download = 'Resume.docx'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      variants={routeVariants}
      initial='initial'
      animate='final'
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="home-container"
    >

      <div className="home-text">
        <h1>Hi!</h1>
        <div>I'm <span>Kabir</span></div>
        <p>I build functional, interactive, visually appealing and scalable websites and web-apps. My skillset guarantees delivery of quality and standard products that meets the demands of individuals, businesses and brands on their quest to achieve an online presence. As a "forever student" and one who takes pride in my work, i am constantly adapting to new technology and improving my functional competencies to ensure my output is always consistent with what is considered state of the art. 
        </p>

        <h5>I have experience in using the following:</h5>

        <div className="logos-container">
          {logos.map((item) => {
            return (<motion.img
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.7,
                duration: 0.9,
                ease: 'linear'
              }}

              src={item} className='logo' alt="logo" key={crypto.randomUUID()} />)
          })}

        </div>

        <motion.button onClick={handleDownload}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5,
            duration: 1.2,
            ease: 'linear'
          }}
          id='resume'>
          Download my Resume
        </motion.button>

      </div>

      <div className="home-image">
        <motion.img src={LandingHero}
          animate={{
            y: [0, -7, 0],

          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'linear',
            delay: 1.5
          }}
        />
      </div>
      <div className="home-arrow">
        <div className='arrow'>
          <button onClick={() => navigate('/projects')}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='arrow-icon' />
          </button>
        </div>
      </div>
    </motion.div>

  )
}

export default Home