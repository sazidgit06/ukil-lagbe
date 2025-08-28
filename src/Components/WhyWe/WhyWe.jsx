import React from 'react'

import img7 from "../../assets/img7.png"

const WhyWe = () => {
  return (
    <div className='py-10'>
      <div className='text-center py-5'>
        <h2 className="text-2xl">Why you take our service</h2>
        <p>our service is best</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
            <img src={img7} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='bg-base-100 border rounded-xl'>
                <div className='text-center items-center'>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/rocket.png" alt="rocket"/>
                    <h3>Book now</h3>
                </div>
            </div>
            <div className='bg-base-100 border rounded-xl'>
                <div className='text-center items-center '>
                    <img className='' width="30" height="30" src="https://img.icons8.com/ios/50/rocket.png" alt="rocket"/>
                    <h3>book now</h3>
                </div>
            </div>
            <div className='bg-base-100 border rounded-xl'>
                <div className='text-center items-center '>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/rocket.png" alt="rocket"/>
                    <h3>book now</h3>
                </div>
            </div>
            <div className='bg-base-100 border rounded-xl'>
                <div className='text-center items-center '>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/rocket.png" alt="rocket"/>
                    <h3>book now</h3>
                </div>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default WhyWe
