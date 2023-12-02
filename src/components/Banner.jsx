import React from 'react'
import BannerImg from '../assets/images/image-web-3-desktop.jpg'

const Banner = () => {
  return (
    <section>
      <div className='w-full h-[280px] '>
        <img src={BannerImg} alt="banner img" width={600} height={400} className='w-full h-full' />
      </div>
      <div className=' grid md:flex flex-row items-start my-8 gap-2'>
        <div className='basis-1/2'>
          <h1 className='text-5xl pr-8 font-bold leading-tighter'>The Bright Future of WEB 3.0?</h1>
        </div>
        <div className='basis-1/2 flex flex-col gap-8'>
          <p className='text-[#5d5f79] text-sm'>We dive into the next evolution of the web that claims to put power of the platforms back into the hands
            of the people. Buts is it realy fulfilling its promise?
          </p>
          <button className='bg-[#f15e50] uppercase hover:bg-[#00001A] transition-all duration-300 text-[#fffdfa] w-1/2 py-2'>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Banner