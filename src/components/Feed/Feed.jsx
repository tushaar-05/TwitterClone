import React from 'react'
import PostCard from "../cards/Post"
import FeedTop from "./FeedTop"

const Feed = () => {


  return (
    <div>
      <FeedTop />
      
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