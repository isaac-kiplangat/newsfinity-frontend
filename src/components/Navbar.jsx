import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const Navitems = [
    {path:"/", link:"Home"},
    {path:"/", link:"Now"},
    {path:"/", link:"Popular"},
    {path:"/", link:"Trending"},
    {path:"/", link:"Categories"},
    
  ]
  return (
    <nav className='mt-12 mb-4 flex items-center justify-between'>
      <div>
        <p className='font-serif font-bold text-5xl'>W.</p>
      </div>

      <ul className='w-2/5 flex items-center justify-between '>
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