import React from 'react'
import TodaysNews from './TodaysNews'
import Searchbar from './Searchbar'

const RightPanel = () => {
  return (
    <div className='pt-10'>
      <Searchbar/>
      <TodaysNews/>
    </div>
  )
}

export default RightPanel