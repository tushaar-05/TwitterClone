import React from 'react'
import { Ellipsis } from 'lucide-react'

const TrendingTab = (props) => {
  return (
      <div className="w-full py-3 px-4 flex justify-between items-start hover:bg-white/5 transition duration-200 cursor-pointer">
        <div className="flex-1">
          <div className="text-[#71767b] text-xs sm:text-sm">
            {props.category} {props.location && `· Trending in ${props.location}`}
          </div>
          <div className="text-white text-base font-bold mt-0.5">{props.title}</div>
          <div className="text-[#71767b] text-xs sm:text-sm mt-1">2,143 posts</div>
        </div>
        <Ellipsis className="text-[#71767b] w-5 h-5" />
      </div>
  )
}

export default TrendingTab