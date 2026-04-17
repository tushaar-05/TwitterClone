import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'
import PostCard from './components/cards/Post'

const App = () => {
  return (
    <>
      <PostCard/>
      {/* <Home /> */}
    </>
  )
}

export default App