import React from "react";
import TrendingSuggestion from "./TrendingSuggestion";

const WhatsHappening = () => {
  return (
    <div className="w-87 h-90 border-1 border-[#2f3336] rounded-2xl px-4 pt-4 mt-4">
      <h1 className="font-extrabold text-xl mb-4">What's Happening</h1>
      <div className="w-full h-3/4">
      <TrendingSuggestion/>
      <TrendingSuggestion/>
      <TrendingSuggestion/>
      <TrendingSuggestion/>
      </div>
      <div className="text-sm text-[#1c9bf1] mb-1.5 hover:cursor-pointer ">Show more</div>
    </div>
  );
};

export default WhatsHappening;
