import React from "react";
import Feed from "../components/Feed/Feeed"

const Fed = () => {
  return (
    <div className="text-white">

      <div className="p-4 border-b border-[#2f3336] text-xl font-semibold">
        Feed
      </div>

      <div className="p-4">
        <Feed />
      </div>

    </div>
  );
};

export default Feed;