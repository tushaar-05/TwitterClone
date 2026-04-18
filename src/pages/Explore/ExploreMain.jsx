import React from 'react'
import ExploreSearchbar from './ExploreSearchbar'
import ExplorePageCategoryTab from './ExplorePageCategoryTab'
import ExploreTodaysNews from './ExploreTodaysNews'
import ExploreTrending from './ExploreTrending'
import ExploreFollowSuggestions from './ExploreFollowSuggestions'

const ExploreMain = () => {
  return (
    <div className='pt-1'>
        <ExploreSearchbar/>
        <ExplorePageCategoryTab/>
        <ExploreTodaysNews/>
        <ExploreTrending/>
        <ExploreFollowSuggestions/>
    </div>
  )
}

export default ExploreMain