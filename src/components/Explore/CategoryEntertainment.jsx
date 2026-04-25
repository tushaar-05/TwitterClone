import React from 'react'
import NewsTab from './NewsTab';

const CategoryEntertainment = () => {
const entertainmentData = [
  {
    id: "1",
    title: "Bhooth Bangla Opens Strong with ₹15.75 Crore on Day One",
    category: "Entertainment",
    time: "22 hours ago",
    posts: "18K",
  },
  {
    id: "2",
    title: "India Celebrates World Heritage Day with Preservation Pledges",
    category: "Entertainment",
    time: "11 hours ago",
    posts: "4K",
  },
  {
    id: "3",
    title: "Anant Ambani Celebrates 31st Birthday with Nationwide Acts of Kindness",
    category: "Entertainment",
    time: "2 days ago",
    posts: "970",
  },
  {
    id: "4",
    title: "Salman Khan Starts Shooting New Action Thriller in Mumbai",
    category: "Entertainment",
    time: "21 hours ago",
    posts: "8.9K",
  },
  {
    id: "5",
    title: "Dunk Natachai Charms Fans at IT'S SKIN Sweet Moments Workshop",
    category: "Entertainment",
    time: "4 hours ago",
    posts: "28K",
  },
];
  return (
   <div className='px-4 pt-4 flex flex-col gap-4'>
        {entertainmentData.map((item) => {
            return  <NewsTab
            key={item.id}
            title={item.title}
            category={item.category}
            time={item.time}
            posts={item.posts}/>
        })}
    </div>
  )
}

export default CategoryEntertainment