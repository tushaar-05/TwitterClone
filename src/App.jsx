import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from "./pages/Feed"
import Home from './pages/Home'
import PostCard from './components/cards/Post'

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <PostCard/>
      {/* <Home /> */}
=======
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
>>>>>>> main
    </>
  )
}

export default App