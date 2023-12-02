import React from 'react'
import Sidebar from './Sidebar'
import Articles from './Articles'
import Banner from './Banner'

const Home = () => {
  return (
    <div >
      <div className='flex flex-row gap-8'>

        <div className='basis-2/3'>
          <Banner/>
        </div>
        <div className='basis-1/3'>
          <Sidebar/>
        </div>

      </div>
      <Articles/>

    </div>
  )
}

export default Home