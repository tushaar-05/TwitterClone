import React from 'react'
import ExploreSearchbar from './ExploreSearchbar'
import ExplorePageCategoryTab from './ExplorePageCategoryTab'
import ExploreTodaysNews from './ExploreTodaysNews'

const ExploreMain = () => {
  return (
    <div className='pt-1'>
        <ExploreSearchbar/>
        <ExplorePageCategoryTab/>
        <ExploreTodaysNews/>
    </div>
  )
}

export default ExploreMain