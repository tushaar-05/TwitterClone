import React from 'react'
import { Ellipsis } from 'lucide-react'

const TrendingSuggestion = () => {
  return (
        <div className='w-full h-1/4 flex justify-between items-center hover:bg-white/5 transition duration-200 cursor-pointer rounded-sm'>
            <div className='w-2/3 h-full'>
                <div className='text-[#54585b] text-sm'>Politics &bull; Trending</div>
                <div className='text-md font-extrabold -mt-0.5'>Opposition</div>
            </div>
            <Ellipsis className='text-[#71767b]' />
        </div>
  )
}

export default TrendingSuggestion