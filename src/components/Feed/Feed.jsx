import React from 'react'
import PostCard from "../cards/Post"

const Feed = () => {
  return (
    <div className=''>
      <div className="sticky top-0 w-full h-14 z-10">
        <div className='flex h-full w-full'>
          <button className='h-full w-1/2 hover:bg-white/10 cursor-pointer'></button>
          <button className='h-full w-1/2 hover:bg-white/10 cursor-pointer'></button>
        </div>
      </div>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      
    </div>
  )
}

export default Feed