import React from 'react'

const Sidebar = () => {
  const Notes = [
    {
      title:"Hydrogen Vs Electric Cars",
      note:"Will Hydrogen fueled cars catch up to EVs?"
    },
    {
      title:"The Downsides of AI Artistry",
      note:"What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      title:"Is VC Funding Drying Up?",
      note:"Private funding by VC firms is down 50% YOY, We take a look at what that means."
    },
    
  ]
  return (
    <section className='w-full bg-[#00001a] px-4 '>
      <h1 className='text-[#e9ab53] text-3xl font-bold pb-4 pt-8'>New</h1>
      <ul>
        {Notes.map((item,index)=>(
          <li className='my-2'>
            <div className='text-[#fffdfa] mb-8'>
            <h2 className='text-xl font-semibold pb-1 '>{item.title}</h2>
            <p className='font-light text-sm break-words leading-relaxed '>{item.note}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Sidebar