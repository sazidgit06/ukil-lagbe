import React from 'react'

import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"

const WhyWe = () => {
  return (
    <div className='py-10'>
      <div className='text-center py-5'>
        <h2 className="text-4xl font-bold mb-5">Why you take our service</h2>
        <p className='text-lg mb-5'>our service is best</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className='rounded-2xl' src={img8} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='border rounded-xl flex flex-col items-center justify-center text-center'>
            <img className='w-10 ' src="https://img.icons8.com/doodle/50/sell-property.png" alt="sell-property"/>
            <h2 className='font-bold text-xl'>দ্রুত বুকিং</h2>
            <p className='text-sm'>মাত্র কয়েক সেকেন্ডে আপনার ট্রিপ বুক করুন</p>
          </div>
          <div className='border rounded-xl flex flex-col items-center justify-center text-center'>
            <img className='w-10 ' src="https://img.icons8.com/doodle/50/sell-property.png" alt="sell-property"/>
            <h2 className='font-bold text-xl'>দ্রুত বুকিং</h2>
            <p className='text-sm'>মাত্র কয়েক সেকেন্ডে আপনার ট্রিপ বুক করুন</p>
          </div>
          <div className='border rounded-xl flex flex-col items-center justify-center text-center'>
            <img className='w-10 ' src="https://img.icons8.com/doodle/50/sell-property.png" alt="sell-property"/>
            <h2 className='font-bold text-xl'>দ্রুত বুকিং</h2>
            <p className='text-sm'>মাত্র কয়েক সেকেন্ডে আপনার ট্রিপ বুক করুন</p>
          </div>
          <div className='border rounded-xl flex flex-col items-center justify-center text-center'>
            <img className='w-10 ' src="https://img.icons8.com/doodle/50/sell-property.png" alt="sell-property"/>
            <h2 className='font-bold text-xl'>দ্রুত বুকিং</h2>
            <p className='text-sm'>মাত্র কয়েক সেকেন্ডে আপনার ট্রিপ বুক করুন</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default WhyWe
