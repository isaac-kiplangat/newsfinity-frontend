import React from 'react'

const ArticlesCard = ({articleData, index}) => {
  const {image ,title, desc} = articleData
  return (
    <div className='flex flex-row gap-4'>
      <div className=' basis-1/4 w-24'>
        <img src={image} alt="" className='w-full object-cover' />
      </div>
      <div className='basis-3/4 flex flex-col justify-start'>
        <h1 className='text-[#5d5f79] text-3xl font-bold'>0{index}</h1>
        <h2 className='text-md font-semibold '>{title}</h2>
        <p className='text-[#5d5f79] pr-2 mr-2'>{desc}</p>
      </div>

    </div>
  )
}

export default ArticlesCard