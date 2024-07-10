import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'
import { topNavLinks, sideNavLinks, listVariants, itemVariants, itemVariants2 } from '../data'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'

const Sidebar = () => {
    const [activeMenu, setactiveMenu] = useState(true)

    const activeLink = 'sidenav-icon-active';
    const normalLink = 'sidenav-icon';

    return (
        <>
            {activeMenu && (
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        ease: 'linear',
                    }}
                    className='sidebar'>
                    <div className="side-close">
                        <button className='close-bar' onClick={() => setactiveMenu((prevactiveMenu) => !prevactiveMenu)}><FontAwesomeIcon icon={faXmark} style={{ height: 25, width: 25 }} /></button>
                    </div>

                    <div className="side-socials">
                        <motion.ul
                            initial='hidden'
                            animate='visible'
                            variants={listVariants}
                        >
                            {topNavLinks.map((item) => {
                                return (
                                    <button key={crypto.randomUUID()} className='sidesocials-icon' onClick={
                                        () => window.open(`${item.url}`, '_blank', 'noopener')
                                    }><motion.li variants={itemVariants}><FontAwesomeIcon icon={item.icon} /></motion.li></button>


                                )
                            })}

                        </motion.ul>
                    </div>

                    <div className="side-navigation">
                        <motion.ul
                            initial='hidden'
                            animate='visible'
                            variants={listVariants}
                        >
                            {sideNavLinks.map((item) => {
                                return (

                                    <NavLink key={crypto.randomUUID()} to={`/${item.name}`} className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                        <div className='sidenav-item'>
                                            <motion.div variants={itemVariants2} className='sidenav-item-icon'><FontAwesomeIcon icon={item.icon} /></motion.div>
                                            <motion.div variants={itemVariants2} className='sidenav-item-name'>{item.linkName}</motion.div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </motion.ul>
                    </div>
                </motion.div>
            )}

        </>
    )
}

export default Sidebar