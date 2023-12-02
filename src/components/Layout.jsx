import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='md:w-3/4 md:mx-auto mx-4'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout