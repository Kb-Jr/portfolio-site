import React from 'react'
import { Routes, useLocation, Route } from 'react-router-dom'
import { Home, Projects, Certifications2, Contact, ReactProjects, JavascriptProjects, DjangoProjects, LandingPages, ErrorPage } from '.'


const RoutesWithAnimation = () => {
    const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
        <Route index path='/' element={<Home/>} key='home'/>
        <Route path='/projects' element={<Projects />} key='projects' />
        <Route path='/certifications' element={<Certifications2 />} key='certifications2'/>
        <Route path='/contact-me' element={<Contact />} key='contact'/>
        <Route path='/projects/react-projects' element={< ReactProjects />} key='react-projects'/> 
        <Route path='/projects/javascript-projects' element={< JavascriptProjects />} key='javascript-projects'/>
        <Route path='/projects/django-projects' element={< DjangoProjects />} key='django-projects'/>
        <Route path='/projects/landingpages' element={< LandingPages />} key='landing-pages'/>
        <Route path='*' element={< ErrorPage />}/>
    </Routes>
  )
}

export default RoutesWithAnimation