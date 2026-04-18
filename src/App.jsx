import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from "./pages/Feed"
import Home from './pages/Home'
import Explore from './pages/Explore/Explore'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  )
}

export default App