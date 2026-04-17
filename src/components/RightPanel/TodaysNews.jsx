import React from 'react'
import News from './News'

const TodaysNews = () => {
  return (
    <div className='w-87 h-90 px-4 pt-4 rounded-2xl border-1 border-[#2f3336]'>
        <h1 className='font-extrabold text-xl mb-4'>Today's News</h1>
        <div className='w-full h-7/8 flex flex-col'>
        <News/>
        <News/>
        <News/>
        </div>
        
    </div>
  )
}

export default TodaysNews