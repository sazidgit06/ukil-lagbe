import React from 'react'
import Banner from '../Banner/Banner'
import Rent from '../Rent/Rent'
import WhyWe from '../WhyWe/WhyWe'

const Home = () => {
  return (
    <div>
      <div className='pt-16'>
        <Banner></Banner>
      </div>
      <Rent></Rent>
      <div className='w-11/12 mx-auto'>
        <WhyWe></WhyWe>
      </div>
    </div>
  )
}

export default Home
