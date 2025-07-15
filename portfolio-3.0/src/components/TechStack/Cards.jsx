import React from 'react'
import { techStack } from '../../data/TechStack'
import Card from './Card'

const Cards = () => {
  return (
    <div  className='mt-36 mx-44'>
        <h2 className='text-4xl font-semibold mt-2 text-zinc-200 mb-5'>What I Know</h2>

        <div className='flex flex-row gap-x-4 p-5 mt-5 md:p-0 max-sm:flex-col max-sm:gap-10 text-white '>
            {
                techStack.map((item,index)=>{
                    return(
                        <div key={index} >
                          <Card heading={item.heading} stack={item.stack} />
                        </div>
                    )
                
                })
            }
            {/* <Card heading={techStack[0].heading} stack={techStack[0].stack}/> */}
        </div>
    </div>
  )
}

export default Cards