import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { topNavLinks, sideNavLinks, listVariants, itemVariants, itemVariants2 } from '../data'
import { motion } from 'framer-motion'


const Layout = () => {
  const activeLink = 'nav-icon-active';
  const normalLink = 'nav-icon';


  return (
    <div className='layout-container'>
      <div className="top-bar"></div>
      <div className="top-nav">
        <motion.ul
          initial= 'hidden'
          animate= 'visible'
          variants={listVariants}
        >
          {topNavLinks.map((item) => {
            return (
              <button key={crypto.randomUUID()} className='nav-icon' onClick={
                () => window.open(`${item.url}`, '_blank', 'noopener')
              }><motion.li variants={itemVariants}><FontAwesomeIcon icon={item.icon} /></motion.li></button>


            )
          })}

        </motion.ul>
      </div>

      <div className="side-nav">
        <motion.ul
           initial= 'hidden'
           animate= 'visible'
           variants={listVariants}
        >
          {sideNavLinks.map((item) => {
            return (

              <NavLink key={crypto.randomUUID()} to={`/${item.name}`} className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }><motion.li variants={itemVariants2}><FontAwesomeIcon icon={item.icon} /></motion.li></NavLink>

            )
          })}
        </motion.ul>

      </div>
      <div className="bottom-bar">

      </div>

    </div>
  )
}

export default Layout