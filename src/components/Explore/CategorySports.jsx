import React from 'react'
import NewsTab from './NewsTab';

const CategorySports = () => {
    const sportsData = [
  {
    id: "1",
    title: "RCB Dons Green Jerseys for IPL Clash with Delhi Capitals",
    category: "Other",
    time: "1 day ago",
    posts: "22K",
  },
  {
    id: "2",
    title: "SRH Gains Cummins Clearance and Coetzee Signing Before CSK Clash",
    category: "Sports",
    time: "2 days ago",
    posts: "8.2K",
  },
  {
    id: "3",
    title: "IPL Celebrates 18 Years Since McCullum's Explosive Debut Century",
    category: "Other",
    time: "5 hours ago",
    posts: "4.7K",
  },
];

  return (
    <div className='px-4 pt-4 flex flex-col gap-4'>
        {sportsData.map((item) => {
            return  <NewsTab
            key={item.id}
            title={item.title}
            category={item.category}
            time={item.time}
            posts={item.posts}/>
        })}
        <div className='h-70'></div>
    </div>
  )
}

export default CategorySports