import React from 'react'
import { Ellipsis } from 'lucide-react'

const TrendingTab = (props) => {
  return (
     <div className='w-full h-1/6 flex justify-between items-center hover:bg-white/5 transition duration-200 cursor-pointer rounded-sm' >
            <div className='w-2/3 h-full'>
                <div className='text-[#54585b] text-sm'>{props.id}. {props.category} &bull; {props.location}</div>
                <div className='text-md font-bold -mt-0.5'>{props.title}</div>
            </div>
            <Ellipsis className='text-[#71767b]' />
        </div>
  )
}

export default TrendingTab