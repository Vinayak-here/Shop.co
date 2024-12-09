import React from 'react'
import Sidebar from './Sidebar'
import HomeCarousel from './HomeCarousel'

const Hero = () => {
  return (
    <>
      <div className=' inline-flex'>
        <Sidebar></Sidebar>
        <HomeCarousel></HomeCarousel>
      </div>
    </>
  )
}

export default Hero