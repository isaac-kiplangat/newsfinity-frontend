import React from 'react'

const ArticlesCard = ({articleData, index}) => {
  const {image ,title, desc} = articleData
  return (
    <div className='flex flex-row gap-2'>
      <div className=' basis-1/3  overflow-hidden'>
        <img src={image} alt="" className='w-full object-cover h-24  md:h-full' />
      </div>
      <div className='basis-2/3 flex flex-col justify-start'>
        <h1 className='text-gray-400 text-2xl md:text-3xl font-bold'>0{index}</h1>
        <h2 className='text-md font-semibold '>{title}</h2>
        <p className='text-[#5d5f79] text-sm md:text-md pr-2 mr-2'>{desc}</p>
      </div>

    </div>
  )
}

export default ArticlesCard