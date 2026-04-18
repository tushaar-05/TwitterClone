import React from 'react'
import TodaysNews from '../../components/RightPanel/TodaysNews'
import FollowSuggestion from '../../components/RightPanel/FollowSuggestion'

const ExploreRightPanel = () => {
  return (
    <div className='pt-2'>
        <TodaysNews/>
        <FollowSuggestion/>
    </div>
  )
}

export default ExploreRightPanel