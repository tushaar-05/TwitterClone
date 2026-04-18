import React from "react";
import { BadgeCheck } from "lucide-react";

const FollowSuggestionHoverUI = (props) => {
  return (
    <div className="w-70 h-65 bg-black absolute top-15 -left-20 rounded-xl px-4 py-4 border border-[#2f3336] shadow-lg shadow-black/50 z-[10]">
      <div className="w-full h-1/4 flex justify-between mb-2">
        <img src={props.avatar} className="w-15 h-15 rounded-full object-cover" />
        <button className="w-20 h-8 rounded-full font-bold text-sm bg-white text-black hover:cursor-pointer">
          Follow
        </button>
      </div>
      <div className="w-full h-3/4">
        <div className="w-full h-1/3">
          <div className="flex font-bold items-center gap-1">
            {props.name}
            <BadgeCheck className="w-5" />
          </div>
          <div className="flex items-center text-[#71767b]">{props.username}</div>
        </div>
        <div className="w-full h-2/5 flex justify-start items-start leading-5">
        {props.bio}
        </div>
        <div className="w-full h-1/3 flex gap-5 text-sm mt-1">
            <p><span className="font-bold">37</span> <span className="text-[#71767b]">Following</span></p>
            <p><span className="font-bold">4M</span> <span className="text-[#71767b]">Followers</span></p>
        </div>
      </div>
    </div>
  );
};

export default FollowSuggestionHoverUI;
