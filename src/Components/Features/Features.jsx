import React from 'react'
import img1 from "../../assets/help.png";
import { FcFolder, FcAlarmClock, FcCalendar, FcManager, FcBriefcase, FcDisplay  , FcShare, FcMoneyTransfer       } from "react-icons/fc";


const Features = () => {
  return (
    <div className='py-10 bg-[#262626] px-4 text-white'>
      <div className='text-center'>
        <h2 className='font-bold text-2xl text-orange-300'>Features</h2>
        <p className='text-4xl font-bold mb-10'>Our available features for You</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcFolder className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcAlarmClock className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcCalendar className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcMoneyTransfer  className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcBriefcase  className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcManager className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcShare  className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        <div className='shadow-2xl flex flex-col items-center text-center px-3 py-5 space-y-3 hover:border hover:border-orange-300 transition-color duration-200 cursor-pointer rounded-lg'>
            <FcDisplay   className='w-20 h-20 rounded-full p-2 hover:bg-orange-200 transition-color duration-400'/>
            <h2 className='text-xl font-bold text-orange-300'>Easy case management</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste.</p>
        </div>
        
        

      </div>
    </div>
  )
}

export default Features
