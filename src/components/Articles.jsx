import React from 'react'
import ArticlesCard from './ArticlesCard'
import ImageOne from '../assets/images/image-retro-pcs.jpg'
import ImageTwo from '../assets/images/image-top-laptops.jpg'
import ImageThree from '../assets/images/image-gaming-growth.jpg'


const Articles = () => {
  const list = [
    {
      image:ImageOne,
      title:"Retrieving Retro Pcs",
      desc:"what happens when old PCs are given modern upgrades?"
    },
    {
      image:ImageTwo,
      title:"Retrieving Retro Pcs",
      desc:"what happens when old PCs are given modern upgrades?"
    },
    {
      image:ImageThree,
      title:"Retrieving Retro Pcs",
      desc:"what happens when old PCs are given modern upgrades?"
    },
    
  ]
  return (
    <div className='my-8 w-full grid grid-cols-3 gap-8'>
      {list.map((item,index)=>(
        <ArticlesCard index={index} articleData={item} key={index}/>
      ))}
    </div>
  )
}

export default Articles