import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { topNavLinks, sideNavLinks } from '../data'
import { Toggle } from '..'
import useLocalStorage from 'use-local-storage'



const Layout = () => {
    const activeLink ='nav-icon-active' ;
    const normalLink = 'nav-icon';
    const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const [isdark , setisDark] = useLocalStorage('isdark', preference);

  return (
    <div className='layout-container' data-theme={isdark ? 'dark' : 'light'}>
      <div className="top-bar"></div>
        <div className="top-nav">
          <Toggle isChecked={isdark} handleChange={() => setisDark(!isdark)}/>
            <ul>
                {topNavLinks.map((item) => {
                    return(
                        <button key={crypto.randomUUID()} className='nav-icon' onClick={
                          () => window.open(`${item.url}`, '_blank', 'noopener')
                      }><li><FontAwesomeIcon icon={item.icon} /></li></button>
                   
                        
                    )
                })}
  
            </ul>
        </div>

        <div className="side-nav">
            <ul>
            {sideNavLinks.map((item) => {
                    return(
                      
                          <NavLink key={crypto.randomUUID()} to={`/${item.name}`} className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }><li><FontAwesomeIcon icon={item.icon} /></li></NavLink>
                      
                    )
                })}
            </ul>

        </div>
        <div className="bottom-bar">
          
        </div>

        <Outlet />
    </div>
  )
}

export default Layout