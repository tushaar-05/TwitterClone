import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App