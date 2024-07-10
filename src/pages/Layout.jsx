import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/Navbar'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react'


const Layout = () => {
  const [activeMenu, setactiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isSidebar, setisSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
}, []);


useEffect(() => {
    if (screenSize <= 750) {
        setactiveMenu(true);
        
    }
    else {
        setactiveMenu(false);
        setisSidebar(false);
    }

}, [screenSize]);

const showsideBar = () => {
    setisSidebar(!isSidebar)
}

  return (
    <div className='layout-container'>
      {activeMenu ? <button className='menu' onClick={showsideBar}><FontAwesomeIcon icon={faBars} style={{ height: 30, width: 30 }} /></button> : <Navbar />}
      {isSidebar && <Sidebar />}
    </div>
  )
}

export default Layout