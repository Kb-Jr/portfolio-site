import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter } from "react-router-dom";
import { Layout, Toggle } from '.'
import { AnimatePresence } from 'framer-motion'
import LocationProvider from './LocationProvider'
import RoutesWithAnimation from './RoutesWithAnimation'
import useLocalStorage from 'use-local-storage'


function App() {
    const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const [isdark , setisDark] = useLocalStorage('isdark', preference);

  return (
    <div className='app' data-theme={isdark ? 'dark' : 'light'}>

    <BrowserRouter>
     
          <AnimatePresence>
            <Toggle isChecked={isdark} handleChange={() => setisDark(!isdark)}/>
            <Layout />
            <LocationProvider>
              <RoutesWithAnimation />
            </LocationProvider>
          </AnimatePresence>
            
    </BrowserRouter>
    </div>
  )
}

export default App;
library.add(fab, fas, far)
