import React from 'react'
import { BiPhoneCall, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className='bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white'>
            <nav className='fixed bg-black/30 z-[9999] w-full px-5 flex items-center justify-between py-2 h-[75px]'>
                {/* Logo section */}
                <div className="text-2xl text-white">
                    <a href="#">
                        <span className='text-[pink] font-bold'>Ukil</span>
                        LAgbe
                    </a>
                </div>
                {/* Dekstop view section */}
                <div>
                    <ul className='flex gap-4 items-center'>
                        <li className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[75px]'>
                                Home
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'></FaCaretDown>
                                </span>
                            </a>
                            {/* Dropdown section */}
                            <div className='absolute -left-9 hidden z-[9999] w-[150px] bg-gray-100 p-2 text-black group-hover:block rounded-md'>
                                <ul className='space-y-3'>
                                    <li className='p-2 hover:bg-violet-300/30 rounded-md'>Home</li>
                                    <li className='p-2 hover:bg-violet-300/30 rounded-md'>About us</li>
                                    <li className='p-2 hover:bg-violet-300/30 rounded-md'>Privacy policy</li>
                                </ul>
                            </div>
                        </li>
                        <li className='group  cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[75px]'>
                                Services
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'></FaCaretDown>
                                </span>
                            </a>
                            {/* dropdown full width section */}
                            <div className='absolute left-0 rounded-b-2xl z-[9999] p-2 bg-gray-100 text-black w-full hidden group-hover:block shadow-md'>
                                <div className='grid grid-cols-3 gap-5'>
                                    <div className='overflow-hidden'>
                                        <img className='rounded-b-md max-h-[300px] w-full object-fill' src="https://picsum.photos/seed/picsum/200/300" alt="" />
                                    </div>
                                    <div className='col-span-2'>
                                        <h2 className='text-2xl font-bold'>Best selling</h2>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos repellat molestias expedita accusantium eos esse iure iste cumque aliquid.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>About us</li>
                        <li className='flex gap-2 items-center'>
                            <div>
                                <BiPhoneCall className='text-2xl w-[40px] h-[40px] rounded-md p-2 text-white bg-primary/70 hover:bg-primary' />
                            </div>
                            <div>
                                <p>Call us on</p>
                                <p>+88 01713 726345</p>
                            </div>
                        </li>
                        <BiSolidSun className='text-2xl' />
                    </ul>

                </div>
                {/* Mobile view section */}

            </nav>
        </header>
    )
}

export default Navbar
