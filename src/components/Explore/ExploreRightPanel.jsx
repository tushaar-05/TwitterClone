import React from 'react'
import TodaysNews from '../../components/RightPanel/TodaysNews'
import FollowSuggestion from '../../components/RightPanel/FollowSuggestion'

const ExploreRightPanel = () => {
  return (
    <div className='pt-2.5'>
        <div className='w-87 h-0.5 bg-[#2f3336] mb-4 '></div>
        <TodaysNews/>
        <FollowSuggestion/>
    </div>
  )
}

export default ExploreRightPanel