import React from "react";
import ExploreTodaysNews from "./ExploreTodaysNews";
import ExploreTrending from "./ExploreTrending";
import ExploreFollowSuggestions from "./ExploreFollowSuggestions";
import ExploreFeed from "./ExploreFeed";

const CategoryForYou = () => {
  return (
    <>
      <ExploreTodaysNews />
      <ExploreTrending />
      <ExploreFollowSuggestions />
      <ExploreFeed />
      <div className="h-70"></div>
    </>
  );
};

export default CategoryForYou;
