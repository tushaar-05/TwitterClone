import React from "react";
import FollowTab from "./FollowTab";

const FollowSuggestion = () => {
  return (
    <div className="w-87.5 h-76 px-4 pt-4 border border-[#2f3336] rounded-2xl mt-4 flex flex-col justify-start">
      <h1 className="font-extrabold text-xl mb-4">Who to follow</h1>
      <div className="w-full h-4/6">
        <FollowTab />
        <FollowTab />
        <FollowTab />
      </div>
      <div className="text-sm text-[#1c9bf1] hover:cursor-pointer mt-2.5">
        Show more
      </div>
    </div>
  );
};

export default FollowSuggestion;
