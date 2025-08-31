import React from 'react'
import video3 from "../../assets/video3.mp4"
import Hero from '../Hero/Hero'
const Banner = () => {
  return (
    <div className='h-[420px] relative'>
      <video autoPlay loop muted
      className='fixed right-0 top-0 h-[500px] w-full object-cover z-[-1]'
      >
        <source src={video3} type='video/mp4' />
      </video>
      <Hero></Hero>
    </div>

  )
}

export default Banner
