import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoMdClose, IoMdMenu} from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Navitems = [
    {path:"/", link:"Home"},
    {path:"/", link:"Now"},
    {path:"/", link:"Popular"},
    {path:"/", link:"Trending"},
    {path:"/", link:"Categories"},
    
  ]

  const handleOpenMenu =()=>{
    setIsOpen(!isOpen)
  }
  const handleCloseMenu=()=>{
    setIsOpen(false)
  }
  return (
    <nav className='mt-8 mb-4 flex items-center justify-between'>
      <div>
        <p className='font-serif font-bold text-5xl'>W.</p>
      </div>
      <IoMdMenu size={35} onClick={handleOpenMenu} className=' block md:hidden'/>

      {/** Mobile navbar */}
      {isOpen &&(
      <div >
        <div className='absolute w-screen h-screen bg-black top-0 right-0 opacity-30'></div>
      <div className='fixed w-2/3 h-screen bg-white top-0 right-0'>
        <IoMdClose size={35} onClick={handleCloseMenu} className='absolute right-4 top-8'/>
        <ul className='grid my-20 mx-8 space-y-4'>
        {Navitems.map((item, index)=>(
          <li>
            <Link to={item.path} key={index} className='text-black/90 text-lg hover:text-red-500 transition-all duration-200'>{item.link}</Link>
          </li>
        ))}
      </ul>

      </div>
      </div>
      )}

      <ul className='w-2/5 md:flex items-center justify-between hidden  '>
        {Navitems.map((item, index)=>(
          <li>
            <Link to={item.path} key={index} className='text-gray-600 text-lg hover:text-red-500 transition-all duration-200'>{item.link}</Link>
          </li>
        ))}
      </ul>


    </nav>
  )
}

export default Navbar