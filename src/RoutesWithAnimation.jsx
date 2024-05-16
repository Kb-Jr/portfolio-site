import React from 'react'
import { Routes, useLocation, Route } from 'react-router-dom'
import { Home, Projects, Certifications, Contact, ReactProjects, JavascriptProjects, DjangoProjects, LandingPages } from '.'


const RoutesWithAnimation = () => {
    const location = useLocation();
    console.log(location)

  return (
    <Routes location={location} key={location.key}>
        <Route index path='/' element={<Home/>} key='home'/>
        <Route path='/projects' element={<Projects />} key='projects'/>
        <Route path='/certifications' element={<Certifications />} key='certifications'/>
        <Route path='/contact-me' element={<Contact />} key='contact'/>
        <Route path='/projects/react-projects' element={< ReactProjects />} key='react-projects'/> 
        <Route path='/projects/javascript-projects' element={< JavascriptProjects />} key='javascript-projects'/>
        <Route path='/projects/django-projects' element={< DjangoProjects />} key='django-projects'/>
        <Route path='/projects/landingpages' element={< LandingPages />} key='landing-pages'/>
    </Routes>
  )
}

export default RoutesWithAnimation