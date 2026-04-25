import React from 'react'
import TrendingTab from './TrendingTab'

const ExploreTrending = () => {
    const trendingData = [
  {
    id: "1",
    category: "Trending",
    location: "India",
    title: "Match Day",
    posts: 8200
  },
  {
    id: "2",
    category: "Entertainment",
    location: "Trending",
    title: "#AkshayKumar",
    posts: 45000
  },
  {
    id: "3",
    category: "Politics",
    location: "Trending",
    title: "#DMKFoolsTN",
    posts: 12000
  },
  {
    id: "4",
    category: "Politics",
    location: "Trending",
    title: "#ProtectorEPSvsDictatorStalin",
    posts: 18000
  },
  {
    id: "5",
    category: "Trending",
    location: "India",
    title: "Claude Design",
    posts: 6000
  },
  {
    id: "6",
    category: "Cricket",
    location: "Trending",
    title: "#ShubmanGill",
    posts: 95000
  }
];

  return (
    <div className='w-full py-4'>
        {trendingData.map((item) => {
            return <TrendingTab key={item.id} id={item.id} category={item.category} location={item.location} title={item.title}/>
        })}
    </div>
  )
}

export default ExploreTrending