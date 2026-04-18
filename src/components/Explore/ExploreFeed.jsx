import React from 'react'
import PostCard from '../../components/cards/Post'

const ExploreFeed = () => {
  return (
    <div>
        <h1 className="font-extrabold text-xl ml-4 my-2">Posts For You</h1>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
  )
}

export default ExploreFeed