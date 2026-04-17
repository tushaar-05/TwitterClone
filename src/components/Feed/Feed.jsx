import React from 'react'
import PostCard from "../cards/Post"
import FeedTop from "./FeedTop"
import CreatePost from "./CreatePost"

const Feed = () => {


  return (
    <div>
      <FeedTop /> 
      < CreatePost />
      
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