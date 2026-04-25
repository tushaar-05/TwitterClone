import React from "react";
import FollowSuggestionTab from "./FollowSuggestionTab";

const ExploreFollowSuggestions = () => {
  const followData = [
    {
      id: "1",
      name: "Dr. S. Jaishankar",
      username: "@DrSJaishankar",
      bio: "External Affairs Minister of India. Member of Parliament (Rajya Sabha) from Gujarat State.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciU24v6QQDDIFmBwVhbidk98tHfgFUs_D34oszqjnI-b26LHAt-Rg4WJS91h5RgJTg5ae00SseDGhfLrZe-mXJTbDZWmSzlUQtkkcPvek&s=10",
      isVerified: true,
    },
    {
      id: "2",
      name: "Salman Khan",
      username: "@BeingSalmanKhan",
      bio: "Film actor, artist, painter, humanitarian",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ddDt6YbCfGQ63pMLlOG1lpZqtlXgEWpQfYmv9ALVkqaIl8eDylJPlKooGcqInIIgeXmolcPAxZTqVV7BZ9n0fcYO9zFqpkB7aOmteljnZA&s=10",
      isVerified: true,
    },
    {
      id: "3",
      name: "PMO India",
      username: "@PMOIndia",
      bio: "Office of the Prime Minister of India",
      avatar:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRY_F_zrOYU79cTYldnGg3HU_R-oUjxio0TwHjXhcXYKw0LdSLdyo2jquqlE45t2Gln8VGZgRi5TPTU-hRrDQRP6srJ92C_Ib3wxsMxxBnnm_rRpxJMVEm0sa1mMCuCpOeeTOGXeg9y6x0&s=19",
      isVerified: true,
    },
];
  return (
    <div className="w-full border-b border-[#2f3336] px-4 py-4">
      <h1 className="font-extrabold text-xl mb-4">Who to follow</h1>
      <div className="w-full flex flex-col">
        {followData.map((item) => {
          return (
            <FollowSuggestionTab
              key={item.id}
              name={item.name}
              username={item.username}
              bio={item.bio}
              avatar={item.avatar}
            />
          );
        })}
      </div>
      <div className="text-sm text-[#1c9bf1] mt-4 hover:cursor-pointer ">
        Show more
      </div>
    </div>
  );
};

export default ExploreFollowSuggestions;
