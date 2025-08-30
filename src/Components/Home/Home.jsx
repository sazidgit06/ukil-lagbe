import React from 'react'
import Banner from '../Banner/Banner'
import Rent from '../Rent/Rent'
import WhyWe from '../WhyWe/WhyWe'
import Accordion from '../Accordion/Accordion'

const Home = () => {
  return (
    <div className='py-20'>
      <div className=''>
        <Banner></Banner>
      </div>
      <Rent></Rent>
      <div className='w-10/12 mx-auto'>
        <WhyWe></WhyWe>
        <Accordion></Accordion>
      </div>
    </div>
  )
}

export default Home
