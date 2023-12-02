import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='w-3/4 mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout