import React from "react";
import TodaysNews from "./TodaysNews";
import Searchbar from "./Searchbar";
import WhatsHappening from "./WhatsHappening";

const RightPanel = () => {
  return (
    <div className="w-full">
      <Searchbar />
      <TodaysNews />
      <WhatsHappening />
    </div>
  );
};

export default RightPanel;
