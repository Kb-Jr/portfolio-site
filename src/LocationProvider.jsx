import { AnimatePresence } from 'framer-motion'
import React from 'react'

const LocationProvider = ({children}) => {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

export default LocationProvider