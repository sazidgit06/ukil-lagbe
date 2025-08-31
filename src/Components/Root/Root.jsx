import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BottomNavbar from '../BottomNavbar/BottomNavbar'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <BottomNavbar></BottomNavbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
