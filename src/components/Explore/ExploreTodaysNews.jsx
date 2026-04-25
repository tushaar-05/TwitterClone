import React from "react";
import NewsTab from "./NewsTab";

const ExploreTodaysNews = () => {
    const todaysNews = [
  {
    id: "1",
    title: "Pat Cummins Cleared to Return for Sunrisers Hyderabad in IPL 2026",
    category: "Other",
    time: "1 day ago",
    posts: "6.6K",
    
    avatars: [
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/women/12.jpg"
    ]
  },
  {
    id: "2",
    title: "Shreyas Iyer's Heroics Lead Punjab Kings to Thrilling Win Over Mumbai Indians",
    category: "Sports",
    time: "1 day ago",
    posts: "66K",
    avatars: [
      "https://randomuser.me/api/portraits/men/13.jpg",
      "https://randomuser.me/api/portraits/women/14.jpg"
    ]
  },
  {
    id: "3",
    title: "Iran Reopens Strait of Hormuz After Israel-Lebanon Ceasefire",
    category: "News",
    time: "1 day ago",
    posts: "313K",
    avatars: [
      "https://randomuser.me/api/portraits/men/15.jpg",
      "https://randomuser.me/api/portraits/women/16.jpg"
    ]
  }
];

  return (
    <div className="w-full border-b border-[#2f3336] px-4 py-4 flex flex-col gap-2.5">
      <h1 className="font-extrabold text-xl">Today's News</h1>
      <div className="w-full flex flex-col gap-4">
        {todaysNews.map((item) => {
            return <NewsTab key={item.id} title={item.title} category={item.category} time={item.time} posts={item.posts}/>
        })}
      </div>
    </div>
  );
};

export default ExploreTodaysNews;
