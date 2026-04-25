import React from "react";
import NewsTab from "./NewsTab";

const CategoryNews = () => {
  const newsData = [
    {
      id: "1",
      title: "Lok Sabha Rejects Bill to Expand Seats and Speed Women's Quota",
      category: "Other",
      time: "7 hours ago",
      posts: "90K",
    },
    {
      id: "2",
      title:
        "TCS Nashik BPO Faces Harassment Allegations, Eight Arrested After Police Probe",
      category: "News",
      time: "2 days ago",
      posts: "217K",
    },
    {
      id: "3",
      title:
        "Kerala Restaurant Owner Arrested Over Krishna-Chicken Vishu Poster",
      category: "Other",
      time: "1 day ago",
      posts: "63K",
    },
    {
      id: "4",
      title:
        "Lenskart CEO Apologizes for Outdated Policy Banning Hindu Symbols",
      category: "News",
      time: "1 day ago",
      posts: "136K",
    },
    {
      id: "5",
      title: "Women's Reservation Amendment Fails in Lok Sabha Vote",
      category: "Other",
      time: "2 days ago",
      posts: "676K",
    },
  ];

  return (
    <div className="px-4 pt-4 flex flex-col gap-4">
      {newsData.map((item) => {
        return (
          <NewsTab
            key={item.id}
            title={item.title}
            category={item.category}
            time={item.time}
            posts={item.posts}
          />
        );
      })}
    </div>
  );
};

export default CategoryNews;
