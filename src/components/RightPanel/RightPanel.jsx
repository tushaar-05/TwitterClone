import React from "react";
import TodaysNews from "./TodaysNews";
import Searchbar from "./Searchbar";
import WhatsHappening from "./WhatsHappening";
import FollowSuggestion from "./FollowSuggestion";

const RightPanel = () => {
  return (
    <div className="w-full">
      <Searchbar />
      <TodaysNews />
      <WhatsHappening />
      <FollowSuggestion/>
    </div>
  );
};

export default RightPanel;
