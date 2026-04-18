import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";
import FollowSuggestionHoverUI from "./FollowSuggestionHoverUI";

const FollowSuggestionTab = (props) => {
  const [showCard, setshowCard] = useState(false);

  return (
    <div className="relative w-full h-1/3 hover:bg-white/5 ">
      <div
        onMouseEnter={() => setshowCard(true)}
        onMouseLeave={() => setshowCard(false)}
        className="w-full h-1/2 flex justify-between items-center hover:transition duration-200 cursor-pointer rounded-sm"
      >
        <img
          src={props.avatar}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="w-2/3 h-full flex flex-col justify-center ml-2">
          <div className="flex font-bold items-center gap-1">
            {props.name}
            <BadgeCheck className="w-5" />
          </div>
          <div className="flex items-center text-[#71767b]">
            {props.username}
          </div>
        </div>
        <div className="w-2/5 h-full flex justify-end items-center">
          <button className="w-20 h-8 rounded-full font-bold text-sm bg-white text-black hover:cursor-pointer">
            Follow
          </button>
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-start items-start leading-5 pl-14">
        {props.bio}
      </div>
      {showCard && (
        <FollowSuggestionHoverUI
          name={props.name}
          username={props.username}
          bio={props.bio}
          avatar={props.avatar}
        />
      )}
    </div>
  );
};

export default FollowSuggestionTab;
