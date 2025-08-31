import React from 'react'

const Hero = () => {
  return (
    <div className='h-full text-white relative z-50'>
      <div className='h-full flex items-center justify-center p-4'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='space-y-4 lg:pr-36'>
                <h1 className='text-5xl font-bold uppercase'>Hello i'm sazid</h1>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur odio unde voluptatum fugit architecto nemo ex obcaecati ipsum voluptates delectus vitae alias cum veritatis hic, sunt distinctio aliquam tempora?
                </p>
                <button className='btn btn-primary bg-gradient-to-l from-violet-900 to-violet-700 hover:bg-red'>
                    Get the app
                </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
