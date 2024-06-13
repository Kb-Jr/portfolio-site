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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita est, nisi iste fuga hic possimus ab tempora deleniti deserunt optio quisquam omnis quibusdam numquam dignissimos. Commodi veritatis cumque quasi?
          Molestias error quisquam dolor quo. Voluptate in repellat harum, </p>
        <h5>I have experience in using the following;</h5>

        <div className="logos-container">

          {logos.map((item) => {
            return (<img src={item} className='logo' alt="logo" key={crypto.randomUUID()} />)
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
            delay:1.5
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