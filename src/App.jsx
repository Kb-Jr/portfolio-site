import { useState } from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Projects, Certifications, Contact } from '.'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact-me' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
library.add(fab, fas, far)
